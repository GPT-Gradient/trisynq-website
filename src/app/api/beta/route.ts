import { NextRequest, NextResponse } from 'next/server'
import { getXynergyAPI } from '@/lib/xynergy-api'
import type { BetaApplication } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as BetaApplication

    // Validate required fields
    const { name, email, company, role, challenge } = body
    if (!name || !email || !company || !role || !challenge) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Challenge length validation
    if (challenge.length < 50) {
      return NextResponse.json(
        { error: 'Challenge description must be at least 50 characters' },
        { status: 400 }
      )
    }

    // Prepare application data
    const applicationData = {
      ...body,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      role: role.trim(),
      challenge: challenge.trim(),
      experience: body.experience?.trim() || '',
      submittedAt: new Date().toISOString(),
      source: 'website_beta_form',
      userAgent: request.headers.get('user-agent') || '',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('remote-addr') || '',
      qualificationScore: calculateQualificationScore(body),
    }

    // Submit to Xynergy platform
    try {
      const xynergyAPI = getXynergyAPI()
      const result = await xynergyAPI.submitBetaApplication(applicationData)

      // Track the application event
      await xynergyAPI.trackEvent({
        name: 'beta_application_submitted',
        properties: {
          timeline: body.timeline,
          budget: body.budget,
          goalCount: body.goals.length,
          hasExperience: !!body.experience,
          qualificationScore: applicationData.qualificationScore,
        },
        sessionId: request.headers.get('x-session-id') || undefined,
      })

      return NextResponse.json({
        success: true,
        id: result.id,
        qualificationScore: applicationData.qualificationScore,
        message: 'Beta application submitted successfully. We will review your application within 48 hours.',
        nextSteps: getNextSteps(applicationData.qualificationScore)
      })

    } catch (xynergyError) {
      console.error('Xynergy API error:', xynergyError)

      // Fallback: log application (in production, use proper logging)
      console.log('Beta application submission (fallback):', applicationData)

      return NextResponse.json({
        success: true,
        message: 'Beta application submitted successfully. We will review your application within 48 hours.'
      })
    }

  } catch (error) {
    console.error('Beta application error:', error)

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

function calculateQualificationScore(application: BetaApplication): number {
  let score = 0

  // Budget scoring (30 points max)
  switch (application.budget) {
    case '100k+':
      score += 30
      break
    case '50k-100k':
      score += 25
      break
    case '25k-50k':
      score += 20
      break
    case '10k-25k':
      score += 15
      break
    case 'equity':
      score += 25
      break
  }

  // Timeline scoring (20 points max)
  switch (application.timeline) {
    case 'immediate':
      score += 20
      break
    case 'quarter':
      score += 15
      break
    case 'half-year':
      score += 10
      break
    case 'year':
      score += 5
      break
    case 'flexible':
      score += 8
      break
  }

  // Challenge complexity (25 points max)
  const challengeLength = application.challenge.length
  if (challengeLength > 500) score += 25
  else if (challengeLength > 300) score += 20
  else if (challengeLength > 200) score += 15
  else if (challengeLength > 100) score += 10
  else score += 5

  // Goals alignment (15 points max)
  const strategicGoals = [
    'Eliminate vendor dependency',
    'Build transparent technology stack',
    'Partner with technology translators'
  ]
  const strategicMatches = application.goals.filter(goal =>
    strategicGoals.includes(goal)
  ).length
  score += strategicMatches * 5

  // Experience factor (10 points max)
  if (application.experience && application.experience.length > 100) {
    score += 10
  } else if (application.experience && application.experience.length > 50) {
    score += 5
  }

  return Math.min(score, 100) // Cap at 100
}

function getNextSteps(score: number): string[] {
  if (score >= 80) {
    return [
      'Priority review within 24 hours',
      'Direct call with our founding team',
      'Custom partnership proposal',
      'Immediate access to beta resources'
    ]
  } else if (score >= 60) {
    return [
      'Review within 48 hours',
      'Strategy call with our team',
      'Partnership assessment',
      'Beta program consideration'
    ]
  } else if (score >= 40) {
    return [
      'Application review within 1 week',
      'Potential community membership',
      'Access to public resources',
      'Future partnership opportunity'
    ]
  } else {
    return [
      'Thank you for your interest',
      'Consider joining our community',
      'Access to free resources',
      'Future opportunities available'
    ]
  }
}

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