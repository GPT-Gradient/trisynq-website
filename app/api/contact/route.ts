import { NextRequest, NextResponse } from 'next/server';
import { getGatewayClient } from '@/lib/gateway-client';
import { rateLimit, getIdentifier, getRemainingRequests } from '@/lib/rate-limiter';
import { withSmartRetry } from '@/lib/retry';

/**
 * POST /api/contact
 * Submit contact form to Intelligence Gateway
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
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'message'];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Submit to Intelligence Gateway with retry logic
    const client = getGatewayClient();
    const result = await withSmartRetry(
      () => client.submitContact(data),
      { retries: 2, initialDelay: 1000 }
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit contact form. Please try again.' },
      { status: 500 }
    );
  }
}
