import { NextRequest, NextResponse } from 'next/server';
import { getGatewayClient } from '@/lib/gateway-client';

/**
 * GET /api/aso/opportunities
 * Fetches ASO opportunities from the Intelligence Gateway
 * Query params:
 *   - limit: Number of opportunities to return (default: 10, max: 50)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limitParam = searchParams.get('limit');
    const limit = Math.min(parseInt(limitParam || '10', 10), 50);

    const client = getGatewayClient();
    const opportunities = await client.getASOOpportunities(limit);

    return NextResponse.json({
      opportunities,
      count: opportunities.length,
      generated_at: new Date().toISOString(),
    });
  } catch (error) {
    console.error('ASO API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch ASO opportunities',
        opportunities: [],
        count: 0,
      },
      { status: 500 }
    );
  }
}

// Enable caching with revalidation every 15 minutes
export const revalidate = 900;
