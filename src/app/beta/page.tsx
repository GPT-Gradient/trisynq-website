'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { generateImagePlaceholder } from '@/lib/utils'
import {
  Crown,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Zap,
  Target
} from 'lucide-react'

const metadata: Metadata = {
  title: 'Beta Program - First 100 Partners Get Lifetime Access',
  description: 'Exclusive opportunity: Partner with our team to prove what\'s possible across multiple technology domains. Lifetime access to all platforms.',
}

export default function BetaPage() {
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    challenge: '',
    timeline: '',
    budget: '',
    experience: '',
    goals: [] as string[]
  })

  const benefits = [
    {
      icon: Crown,
      title: 'Lifetime Access to All 5 Technology Platforms',
      value: '$100K+ Value',
      description: 'Never pay for platform access again. Full access to current and future platforms.',
      details: [
        'Project NEXUS search platform',
        'Educational AI Translation system',
        'Inclusive Innovation tools',
        'Safe Digital Spaces framework',
        'Business Possibility Platform'
      ]
    },
    {
      icon: Users,
      title: 'Direct Access to Our Team',
      description: 'Methodology refinement across all domains with our full technical team.',
      details: [
        'Weekly strategy sessions',
        'Custom implementation support',
        'Direct access to founders',
        'Priority technical support'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Public Case Study Opportunities',
      description: 'Industry recognition across multiple sectors with our backing.',
      details: [
        'Featured success stories',
        'Speaking opportunities',
        'Industry conference presentations',
        'Thought leadership positioning'
      ]
    },
    {
      icon: Shield,
      title: 'Community Authority Status',
      description: 'Our team backing and endorsement in the technology translation space.',
      details: [
        'Official partner certification',
        'Community leadership roles',
        'Early access to new features',
        'Influence on platform development'
      ]
    }
  ]

  const currentPartners = [
    {
      name: 'TechFlow Solutions',
      industry: 'SaaS Development',
      result: '78% vendor cost reduction',
      timeframe: '4 months'
    },
    {
      name: 'Creative Canvas Agency',
      industry: 'Digital Marketing',
      result: '$45K annual savings',
      timeframe: '6 weeks'
    },
    {
      name: 'Innovation Labs Inc',
      industry: 'R&D Consulting',
      result: '3x faster prototyping',
      timeframe: '8 weeks'
    }
  ]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Beta application submitted:', formData)
  }

  return (
    <>
      {/* Exclusive Opportunity Hero */}
      <Section background="gradient" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Crown className="w-8 h-8 text-secondary-pink" />
                <span className="px-4 py-2 bg-secondary-pink/20 text-secondary-pink rounded-full text-sm font-semibold animate-pulse">
                  EXCLUSIVE OPPORTUNITY
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-neutral-white">
                First 100 Partners Get{' '}
                <span className="gradient-text">Lifetime Access</span>{' '}
                to Everything
              </h1>

              <div className="space-y-4">
                <Card variant="glow" padding="lg">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-secondary-pink">
                      Not First 100 Customers
                    </h3>
                    <p className="text-neutral-light">
                      First 100 organizations who qualify to work with our full team.
                      Partner with us to prove what's possible across multiple technology domains.
                    </p>
                  </div>
                </Card>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-secondary-purple-bright/10 rounded-xl">
                    <div className="text-2xl font-bold text-secondary-pink">77</div>
                    <div className="text-sm text-neutral-light">Spots Left</div>
                  </div>
                  <div className="p-4 bg-primary-accent/10 rounded-xl">
                    <div className="text-2xl font-bold text-primary-accent">23</div>
                    <div className="text-sm text-neutral-light">Partners</div>
                  </div>
                  <div className="p-4 bg-green-500/10 rounded-xl">
                    <div className="text-2xl font-bold text-green-400">$2.3M</div>
                    <div className="text-sm text-neutral-light">Savings</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl">
              <h3 className="text-lg font-semibold text-green-400 mb-3">
                Bold Guarantee:
              </h3>
              <p className="text-neutral-light">
                If our team's methodologies don't eliminate 60%+ of your vendor dependency,
                full refund + we'll implement any competitor's approach for free.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('business', 600, 500)}
                alt="Beta partnership and collaborative success"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-purple/20 to-transparent" />
            </div>

            {/* Success Indicators */}
            <div className="absolute top-4 right-4 p-3 bg-neutral-white/10 backdrop-blur-md rounded-xl">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-neutral-white font-medium">23 Partners</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 p-3 bg-neutral-white/10 backdrop-blur-md rounded-xl">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary-pink" />
                <span className="text-sm text-neutral-white font-medium">60%+ Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Partner Benefits */}
      <Section background="default" padding="xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              <span className="gradient-text">Partner Benefits</span>
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto">
              This isn't a customer relationship. It's a partnership to prove what's possible
              when creative minds meet transparent technology capabilities.
            </p>
          </div>

          <div className="space-y-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} variant="glow" padding="lg">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-4 bg-gradient-to-br from-secondary-pink to-secondary-purple-bright rounded-2xl">
                          <Icon className="w-8 h-8 text-neutral-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-xl font-semibold text-neutral-white">
                              {benefit.title}
                            </h3>
                            {benefit.value && (
                              <span className="px-3 py-1 bg-secondary-pink/20 text-secondary-pink rounded-lg text-sm font-medium">
                                {benefit.value}
                              </span>
                            )}
                          </div>
                          <p className="text-neutral-light mb-4">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-secondary-purple-bright uppercase tracking-wide">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {benefit.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2 text-sm text-neutral-light">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Current Partners */}
      <Section background="dark" padding="xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              Current <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto">
              Real partners, real results. These organizations are already proving what's possible
              with our methodology across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <Card key={index} variant="minimal" padding="lg" className="text-center">
                <div className="space-y-4">
                  <div className="relative h-32 bg-gradient-to-br from-secondary-pink/20 to-secondary-purple-bright/20 rounded-2xl flex items-center justify-center">
                    <Award className="w-12 h-12 text-secondary-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-white mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-neutral-light mb-3">
                      {partner.industry}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-medium text-sm">
                          {partner.result}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-light">
                        {partner.timeframe}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Application Form */}
      <Section background="gradient" padding="xl">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              Ready to <span className="gradient-text">Partner</span> with Us?
            </h2>
            <p className="text-xl text-neutral-light">
              Not everyone qualifies. Applications are reviewed by our team to ensure
              mutual fit and success potential.
            </p>
          </div>

          <Card variant="glow" padding="lg">
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-white mb-2">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                    placeholder="Your organization"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-neutral-white mb-2">
                    Your Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                    placeholder="Founder, CTO, Creative Director, etc."
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-neutral-white mb-2">
                  What's your biggest technology challenge? *
                </label>
                <textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                  placeholder="Describe the challenge everyone says is 'impossible' to solve..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-neutral-white mb-2">
                    Implementation Timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (within 30 days)</option>
                    <option value="quarter">This quarter (1-3 months)</option>
                    <option value="half-year">Within 6 months</option>
                    <option value="year">Within a year</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-white mb-2">
                    Investment Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                  >
                    <option value="">Select range</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k+">$100K+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-neutral-white mb-2">
                  Previous experience with technology implementations
                </label>
                <textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                  placeholder="What have you tried before? What worked? What didn't?"
                />
              </div>

              <div className="text-center">
                <Button type="submit" variant="primary" size="lg">
                  Submit Partnership Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-neutral-light mt-4">
                  Applications are reviewed within 48 hours. We'll schedule a strategy call
                  if there's a mutual fit.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </Section>
    </>
  )
}