import { NextRequest, NextResponse } from 'next/server'
import { getXynergyAPI } from '@/lib/xynergy-api'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, message } = body
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare form data
    const formData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: body.company?.trim() || '',
      message: message.trim(),
      interest: body.interest || '',
      timeline: body.timeline || '',
      submittedAt: new Date().toISOString(),
      source: 'website_contact_form',
      userAgent: request.headers.get('user-agent') || '',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('remote-addr') || '',
    }

    // Submit to Xynergy platform
    try {
      const xynergyAPI = getXynergyAPI()
      const result = await xynergyAPI.submitContactForm(formData)

      // Track the submission event
      await xynergyAPI.trackEvent({
        name: 'contact_form_submitted',
        properties: {
          interest: formData.interest,
          timeline: formData.timeline,
          hasCompany: !!formData.company,
        },
        sessionId: request.headers.get('x-session-id') || undefined,
      })

      return NextResponse.json({
        success: true,
        id: result.id,
        message: 'Thank you for your message. We will get back to you within 24 hours.'
      })

    } catch (xynergyError) {
      console.error('Xynergy API error:', xynergyError)

      // Fallback: log to console/file (in production, use proper logging)
      console.log('Contact form submission (fallback):', formData)

      return NextResponse.json({
        success: true,
        message: 'Thank you for your message. We will get back to you within 24 hours.'
      })
    }

  } catch (error) {
    console.error('Contact form error:', error)

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}