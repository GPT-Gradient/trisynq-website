'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { generateImagePlaceholder } from '@/lib/utils'
import {
  Mail,
  MessageSquare,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Clock,
  Phone,
  MapPin
} from 'lucide-react'

const metadata: Metadata = {
  title: 'Contact Us - Ready to Bridge the Gap?',
  description: 'Get in touch with our technology translation team. Strategy sessions, implementation support, and partnership opportunities.',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: '',
    timeline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'For general inquiries and support',
      contact: 'hello@trisynq.ai',
      responseTime: 'Within 24 hours'
    },
    {
      icon: Calendar,
      title: 'Strategy Session',
      description: 'Book a call to discuss your challenge',
      contact: 'Schedule a call',
      responseTime: '30-minute sessions'
    },
    {
      icon: MessageSquare,
      title: 'Community Support',
      description: 'Get help from the community',
      contact: 'Join our forums',
      responseTime: 'Real-time help'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <Section background="gradient" padding="xl">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <div className="p-6 bg-green-500 rounded-full">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral-white">
              Message Received!
            </h1>
            <p className="text-xl text-neutral-light">
              We'll get back to you within 24 hours. In the meantime, feel free to explore
              our community resources or check out our public dashboard.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
            <Button variant="secondary" asChild>
              <a href="/dashboard">View Dashboard</a>
            </Button>
          </div>
        </div>
      </Section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-white">
                Ready to <span className="gradient-text">Bridge the Gap?</span>
              </h1>

              <p className="text-xl text-neutral-light leading-relaxed">
                Got an idea everyone says is impossible? A technology challenge that seems
                unsolvable? Let's find out what's actually possible.
              </p>

              <Card variant="glow" padding="lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-pink">
                    What We Can Help With:
                  </h3>
                  <ul className="space-y-2 text-neutral-light">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary-pink rounded-full" />
                      <span>Technology translation and strategy</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-accent rounded-full" />
                      <span>Vendor independence planning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary-purple-bright rounded-full" />
                      <span>Creative solution implementation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary-pink rounded-full" />
                      <span>Beta program partnerships</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('business', 600, 500)}
                alt="Contact and collaboration with technology translation team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-purple/20 to-transparent" />
            </div>

            {/* Response Time Indicator */}
            <div className="absolute -top-4 -right-4 p-4 bg-green-500 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">24hr Response</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section background="default" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card key={index} variant="minimal" padding="lg" className="text-center">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-secondary-pink to-secondary-purple-bright rounded-2xl">
                      <Icon className="w-8 h-8 text-neutral-white" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-neutral-white">
                      {method.title}
                    </h3>
                    <p className="text-neutral-light">
                      {method.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-secondary-pink font-medium">
                        {method.contact}
                      </div>
                      <div className="text-sm text-neutral-light">
                        {method.responseTime}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {method.title === 'Strategy Session' ? 'Book Call' :
                     method.title === 'Community Support' ? 'Join Forums' : 'Send Email'}
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="dark" padding="xl">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              Tell Us About Your <span className="gradient-text">Challenge</span>
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto">
              The more specific you can be about what seems impossible,
              the better we can help find what's actually possible.
            </p>
          </div>

          <Card variant="glow" padding="lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-white mb-2">
                    Email *
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
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-neutral-white mb-2">
                    What interests you most?
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                  >
                    <option value="">Select an option</option>
                    <option value="strategy">Strategy Session</option>
                    <option value="beta">Beta Program</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="community">Community Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-white mb-2">
                  Your Challenge *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                  placeholder="Describe what you're trying to accomplish, what obstacles you're facing, and what everyone says is 'impossible' about your situation..."
                  required
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-neutral-white mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 bg-primary-blue border border-secondary-purple-bright/20 rounded-xl text-neutral-white focus:outline-none focus:ring-2 focus:ring-secondary-pink"
                >
                  <option value="">When do you need this solved?</option>
                  <option value="urgent">ASAP (within 30 days)</option>
                  <option value="soon">Soon (1-3 months)</option>
                  <option value="planning">Planning phase (3-6 months)</option>
                  <option value="future">Future consideration (6+ months)</option>
                </select>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-neutral-light mt-4">
                  We typically respond within 24 hours with next steps or a link to schedule a call.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </Section>

      {/* Additional Contact Info */}
      <Section background="gradient" padding="lg">
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-semibold text-neutral-white">
            Other Ways to Connect
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <Phone className="w-6 h-6 text-secondary-pink mx-auto" />
              <div className="text-neutral-white font-medium">Phone</div>
              <div className="text-neutral-light text-sm">Available during strategy sessions</div>
            </div>

            <div className="text-center space-y-2">
              <MapPin className="w-6 h-6 text-primary-accent mx-auto" />
              <div className="text-neutral-white font-medium">Location</div>
              <div className="text-neutral-light text-sm">Remote-first team, global availability</div>
            </div>

            <div className="text-center space-y-2">
              <Users className="w-6 h-6 text-secondary-purple-bright mx-auto" />
              <div className="text-neutral-white font-medium">Community</div>
              <div className="text-neutral-light text-sm">Join 2,800+ creative minds</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}