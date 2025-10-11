import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getGatewayClient } from '@/lib/gateway-client';
import { rateLimit, getIdentifier, getRemainingRequests } from '@/lib/rate-limiter';
import { withSmartRetry } from '@/lib/retry';

// Zod validation schema matching gateway client BetaApplication interface
const BetaApplicationSchema = z.object({
  company_name: z.string().min(1).max(100),
  contact_name: z.string().min(1).max(100),
  email: z.string().email(),
  industry: z.string().min(1).max(50),
  phone: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  monthly_revenue: z.string().optional(),
  current_marketing: z.array(z.string()).min(1, 'Select at least one marketing channel'),
  goals: z.string().min(10).max(1000),
  referred_by: z.string().optional(),
});

/**
 * POST /api/beta
 * Submit beta program application to Intelligence Gateway
 */
export async function POST(request: NextRequest) {
  // Rate limiting: 5 requests per minute per IP
  const identifier = getIdentifier(request.headers);

  if (!rateLimit(identifier, 5, 60000)) {
    const remaining = getRemainingRequests(identifier, 5);
    return NextResponse.json(
      {
        success: false,
        message: 'Too many requests. Please try again in a minute.',
      },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': remaining.toString(),
          'Retry-After': '60',
        },
      }
    );
  }

  try {
    const body = await request.json();

    // Zod validation
    const validated = BetaApplicationSchema.parse(body);

    // Submit to Intelligence Gateway with retry logic
    const client = getGatewayClient();
    const result = await withSmartRetry(
      () => client.submitBetaApplication(validated),
      { retries: 2, initialDelay: 1000 }
    );

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    console.error('Beta application error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}
