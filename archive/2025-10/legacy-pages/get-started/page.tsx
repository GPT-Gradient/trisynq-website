'use client';

import { useState, FormEvent } from 'react';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { CheckCircle, ArrowRight, Rocket, Handshake, Users } from 'lucide-react';

export default function GetStartedPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to submit. Please try again or email us directly at hello@trisynq.ai');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let&apos;s Simplify the <span className="text-gradient">Complex</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Discover → Forge → Grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
              <h3 className="text-lg font-bold text-primary-blue mb-2">Discover</h3>
              <p className="text-gray-300">We listen before we automate.</p>
            </div>
            <div className="bg-primary/30 rounded-xl p-4 border border-accent-pink/20">
              <h3 className="text-lg font-bold text-accent-pink mb-2">Forge</h3>
              <p className="text-gray-300">Design systems you can explain.</p>
            </div>
            <div className="bg-primary/30 rounded-xl p-4 border border-secondary-purple-light/20">
              <h3 className="text-lg font-bold text-secondary-purple-light mb-2">Grow</h3>
              <p className="text-gray-300">Compounding clarity becomes advantage.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Path Selection Section */}
      <Section background="dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Path 1: Join a Beta Program */}
            <Card variant="elevated" className="border-accent-pink/30 flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-accent-pink/20 p-3 rounded-xl">
                  <Rocket className="w-8 h-8 text-accent-pink" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-accent-pink">Join a Beta Program</h2>
                  <p className="text-sm text-gray-400 mt-1">Prove Transparency Works</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                Be part of proving methodology across our Continuum projects.
                The earlier you join, the greater the benefits.
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-white mb-3">Best for:</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300">The 20% willing to be pioneers</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Businesses ready for transformation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Leaders who want to prove something</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button href="/beta-program" variant="primary" className="w-full">
                  Explore Beta Opportunities
                </Button>
              </div>
            </Card>

            {/* Path 2: Consulting & Partnership */}
            <Card variant="elevated" className="border-secondary-purple/30 flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary-purple/20 p-3 rounded-xl">
                  <Handshake className="w-8 h-8 text-secondary-purple" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary-purple">Consulting & Partnership</h2>
                  <p className="text-sm text-gray-400 mt-1">Let&apos;s Build Something Together</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                Technology + Data + AI translation for your specific situation.
                Or partnership to build your vision with our execution.
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-white mb-3">Best for:</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary-purple mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Businesses needing custom solutions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary-purple mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Ideas needing technical capability</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary-purple mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Organizations ready for transformation</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    const form = document.getElementById('contact-form');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth' });
                      // Pre-select the dropdown
                      const dropdown = document.getElementById('interestType') as HTMLSelectElement;
                      if (dropdown) {
                        dropdown.value = 'consulting';
                      }
                    }
                  }}
                >
                  Discuss Your Situation
                </Button>
              </div>
            </Card>

            {/* Path 3: Follow the Journey */}
            <Card variant="elevated" className="border-primary-blue/30 flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary-blue/20 p-3 rounded-xl">
                  <Users className="w-8 h-8 text-primary-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-blue">Follow the Journey</h2>
                  <p className="text-sm text-gray-400 mt-1">Watch the Proof Accumulate</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                Not ready to jump in? Follow our progress and learn from our
                transparent documentation of wins, losses, and everything between.
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-white mb-3">Best for:</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300">The 80% waiting for validation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Learning about methodology</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Exploring possibilities</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button href="/community" variant="outline" className="w-full">
                  Join Foundation Community
                </Button>
                <p className="text-xs text-gray-400 text-center mt-2">Free</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section background="medium" id="contact-form">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Or Just <span className="text-gradient">Reach Out</span>
            </h2>
            <p className="text-xl text-gray-300">
              Have questions? Not sure which path fits?
              <br />
              Want to challenge our approaches? Let&apos;s talk.
            </p>
          </div>

          {isSubmitted ? (
            <Card variant="elevated">
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-16 h-16 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-primary-blue mb-4">Message Received!</h3>
                <p className="text-gray-300 mb-4">
                  Thank you for reaching out. We&apos;ll respond within 24-48 hours.
                </p>
                <p className="text-sm text-gray-400">
                  Check your email for confirmation. If you don&apos;t receive it, check your spam folder.
                </p>
              </div>
            </Card>
          ) : (
            <Card variant="bordered">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company (optional) */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                    Company <span className="text-gray-500 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
                    placeholder="Your company"
                  />
                </div>

                {/* Interest Type Dropdown */}
                <div>
                  <label htmlFor="interestType" className="block text-sm font-semibold text-white mb-2">
                    I&apos;m interested in: *
                  </label>
                  <select
                    id="interestType"
                    name="interestType"
                    required
                    className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white focus:outline-none focus:border-accent-pink transition-colors"
                  >
                    <option value="">Select an option...</option>
                    <option value="beta">Beta Program</option>
                    <option value="consulting">Consulting</option>
                    <option value="partnership">Partnership</option>
                    <option value="learning">Just Learning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors resize-none"
                    placeholder="Tell us about your situation, questions, or what you're looking to achieve..."
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Start the Conversation'}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 24-48 hours. For urgent matters, email us directly at{' '}
                  <a href="mailto:hello@trisynq.ai" className="text-primary-blue hover:text-accent-pink transition-colors">
                    hello@trisynq.ai
                  </a>
                </p>
              </form>
            </Card>
          )}
        </div>
      </Section>
    </>
  );
}
