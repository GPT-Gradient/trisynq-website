import { NextResponse } from 'next/server';

/**
 * GET /api/health
 * Health check endpoint for Cloud Run
 */
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'clearforge-website',
    timestamp: new Date().toISOString(),
  });
}
