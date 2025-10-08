import { NextRequest, NextResponse } from 'next/server';
import XynergyAPI from '@/lib/xynergy-api';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'type', 'message'];

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

    // Validate contact type
    const validTypes = [
      'beta',
      'partnership',
      'consulting',
      'general',
      'media',
    ];
    if (!validTypes.includes(data.type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid contact type' },
        { status: 400 }
      );
    }

    // Submit to Xynergy API
    const result = await XynergyAPI.submitContact(data);

    if (result.success) {
      // Response times based on type
      const responseTimes: Record<string, string> = {
        beta: '48 hours',
        partnership: '48-72 hours',
        consulting: '48-72 hours',
        general: '24-48 hours',
        media: 'case by case',
      };

      return NextResponse.json({
        success: true,
        message: `Message received! We'll respond within ${responseTimes[data.type]}.`,
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to submit message' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
