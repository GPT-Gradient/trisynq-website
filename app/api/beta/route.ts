import { NextRequest, NextResponse } from 'next/server';
import XynergyAPI from '@/lib/xynergy-api';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = [
      'businessName',
      'industry',
      'name',
      'email',
      'challenges',
      'whyRightFit',
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Submit to Xynergy API
    const result = await XynergyAPI.submitBetaApplication(data);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Application submitted successfully. We\'ll review and respond within 48 hours.',
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to submit application' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Beta application error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
