'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import {
  User,
  Mail,
  Building,
  Clock,
  DollarSign,
  Target,
  CheckCircle,
  ArrowRight,
  AlertCircle
} from 'lucide-react'
import type { BetaApplication } from '@/types'

interface BetaApplicationFormProps {
  className?: string
  onSubmit?: (data: BetaApplication) => void
  onSuccess?: () => void
}

export default function BetaApplicationForm({
  className,
  onSubmit,
  onSuccess
}: BetaApplicationFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState<BetaApplication>({
    name: '',
    email: '',
    company: '',
    role: '',
    challenge: '',
    timeline: '',
    budget: '',
    experience: '',
    goals: []
  })

  const totalSteps = 4

  const goalOptions = [
    'Eliminate vendor dependency',
    'Reduce technology costs by 60%+',
    'Build transparent technology stack',
    'Connect creative minds with technology',
    'Implement impossible solutions',
    'Build community authority',
    'Get lifetime platform access',
    'Partner with technology translators'
  ]

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        if (!formData.company.trim()) newErrors.company = 'Company is required'
        if (!formData.role.trim()) newErrors.role = 'Role is required'
        break
      case 2:
        if (!formData.challenge.trim()) newErrors.challenge = 'Challenge description is required'
        if (formData.challenge.length < 50) newErrors.challenge = 'Please provide more detail (minimum 50 characters)'
        break
      case 3:
        if (!formData.timeline) newErrors.timeline = 'Timeline is required'
        if (!formData.budget) newErrors.budget = 'Budget range is required'
        break
      case 4:
        if (formData.goals.length === 0) newErrors.goals = 'Please select at least one goal'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
    setErrors({})
  }

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      if (onSubmit) {
        onSubmit(formData)
      }

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <User className="w-12 h-12 text-secondary-pink mx-auto" />
              <h3 className="text-xl font-semibold text-neutral-white">
                Tell Us About You
              </h3>
              <p className="text-neutral-light">
                Basic information to get started
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-3 bg-primary-blue border rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink",
                    errors.name ? "border-red-500" : "border-secondary-purple-bright/20"
                  )}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-3 bg-primary-blue border rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink",
                    errors.email ? "border-red-500" : "border-secondary-purple-bright/20"
                  )}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-white mb-2">
                  Company/Organization *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-3 bg-primary-blue border rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink",
                    errors.company ? "border-red-500" : "border-secondary-purple-bright/20"
                  )}
                  placeholder="Your organization"
                />
                {errors.company && (
                  <p className="text-red-400 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-white mb-2">
                  Your Role *
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-3 bg-primary-blue border rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink",
                    errors.role ? "border-red-500" : "border-secondary-purple-bright/20"
                  )}
                  placeholder="Founder, CTO, Creative Director, etc."
                />
                {errors.role && (
                  <p className="text-red-400 text-sm mt-1">{errors.role}</p>
                )}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <AlertCircle className="w-12 h-12 text-secondary-purple-bright mx-auto" />
              <h3 className="text-xl font-semibold text-neutral-white">
                Your Challenge
              </h3>
              <p className="text-neutral-light">
                Tell us what seems impossible
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-white mb-2">
                What's your biggest technology challenge? *
              </label>
              <textarea
                value={formData.challenge}
                onChange={(e) => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
                rows={6}
                className={cn(
                  "w-full px-4 py-3 bg-primary-blue border rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink",
                  errors.challenge ? "border-red-500" : "border-secondary-purple-bright/20"
                )}
                placeholder="Describe the challenge everyone says is 'impossible' to solve. The more specific you can be, the better we can help find what's actually possible..."
              />
              <div className="flex justify-between items-center mt-2">
                {errors.challenge ? (
                  <p className="text-red-400 text-sm">{errors.challenge}</p>
                ) : (
                  <p className="text-neutral-light text-sm">
                    {formData.challenge.length}/500 characters
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-white mb-2">
                Previous experience with technology implementations
              </label>
              <textarea
                value={formData.experience}
                onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                placeholder="What have you tried before? What worked? What didn't? Any vendor dependencies you're looking to eliminate?"
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Clock className="w-12 h-12 text-primary-accent mx-auto" />
              <h3 className="text-xl font-semibold text-neutral-white">
                Timeline & Investment
              </h3>
              <p className="text-neutral-light">
                Help us understand your constraints
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-white mb-2">
                  Implementation Timeline *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-3 bg-primary-blue border rounded-xl text-neutral-white focus:outline-none focus:ring-2 focus:ring-secondary-pink",
                    errors.timeline ? "border-red-500" : "border-secondary-purple-bright/20"
                  )}
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (within 30 days)</option>
                  <option value="quarter">This quarter (1-3 months)</option>
                  <option value="half-year">Within 6 months</option>
                  <option value="year">Within a year</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
                {errors.timeline && (
                  <p className="text-red-400 text-sm mt-1">{errors.timeline}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-white mb-2">
                  Investment Range *
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-3 bg-primary-blue border rounded-xl text-neutral-white focus:outline-none focus:ring-2 focus:ring-secondary-pink",
                    errors.budget ? "border-red-500" : "border-secondary-purple-bright/20"
                  )}
                >
                  <option value="">Select range</option>
                  <option value="10k-25k">$10K - $25K</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k+">$100K+</option>
                  <option value="equity">Equity/Partnership Discussion</option>
                </select>
                {errors.budget && (
                  <p className="text-red-400 text-sm mt-1">{errors.budget}</p>
                )}
              </div>
            </div>

            <Card variant="minimal" padding="md">
              <div className="flex items-start space-x-3">
                <DollarSign className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <h4 className="font-medium text-neutral-white mb-1">
                    Investment Note
                  </h4>
                  <p className="text-sm text-neutral-light">
                    Beta partners get lifetime access to all platforms (worth $100K+) plus direct team support.
                    This is a partnership, not just a customer relationship.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Target className="w-12 h-12 text-secondary-pink mx-auto" />
              <h3 className="text-xl font-semibold text-neutral-white">
                Your Goals
              </h3>
              <p className="text-neutral-light">
                What are you hoping to achieve?
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-white mb-4">
                Select all that apply *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {goalOptions.map((goal) => (
                  <label
                    key={goal}
                    className={cn(
                      "flex items-center space-x-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 hover:border-secondary-pink/50",
                      formData.goals.includes(goal)
                        ? "border-secondary-pink bg-secondary-pink/10"
                        : "border-secondary-purple-bright/20 bg-primary-blue/30"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={formData.goals.includes(goal)}
                      onChange={() => handleGoalToggle(goal)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "w-5 h-5 rounded border-2 flex items-center justify-center",
                      formData.goals.includes(goal)
                        ? "border-secondary-pink bg-secondary-pink"
                        : "border-secondary-purple-bright/40"
                    )}>
                      {formData.goals.includes(goal) && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-sm text-neutral-light flex-1">
                      {goal}
                    </span>
                  </label>
                ))}
              </div>
              {errors.goals && (
                <p className="text-red-400 text-sm mt-2">{errors.goals}</p>
              )}
            </div>

            <Card variant="glow" padding="md">
              <div className="text-center space-y-2">
                <h4 className="font-medium text-neutral-white">
                  Ready to Submit?
                </h4>
                <p className="text-sm text-neutral-light">
                  Applications are reviewed within 48 hours. We'll schedule a strategy call
                  if there's a mutual fit.
                </p>
              </div>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Card variant="glow" padding="lg" className={className}>
      <div className="space-y-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-between">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div key={i} className="flex items-center">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                i + 1 <= currentStep
                  ? "bg-secondary-pink text-white"
                  : "bg-primary-blue text-neutral-light border border-secondary-purple-bright/20"
              )}>
                {i + 1 <= currentStep ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  i + 1
                )}
              </div>
              {i < totalSteps - 1 && (
                <div className={cn(
                  "w-12 h-0.5 mx-2",
                  i + 1 < currentStep ? "bg-secondary-pink" : "bg-secondary-purple-bright/20"
                )} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        {renderStepContent()}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-secondary-purple-bright/20">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </Button>

          <div className="text-sm text-neutral-light">
            Step {currentStep} of {totalSteps}
          </div>

          {currentStep < totalSteps ? (
            <Button variant="primary" onClick={handleNext}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}