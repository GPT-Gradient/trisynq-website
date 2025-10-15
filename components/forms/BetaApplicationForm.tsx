'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function BetaApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    // Transform form data to match API schema
    const interests = formData.getAll('interests') as string[];

    const data = {
      company_name: formData.get('company_name') as string,
      contact_name: formData.get('contact_name') as string,
      email: formData.get('email') as string,
      industry: formData.get('industry') as string,
      phone: formData.get('phone') as string || undefined,
      website: formData.get('website') as string || undefined,
      goals: formData.get('goals') as string,
      interests: interests.length > 0 ? interests : undefined,
      referred_by: formData.get('referred_by') as string || undefined,
    };

    try {
      const response = await fetch('/api/beta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to submit application. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card variant="elevated">
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-4">Application Received!</h3>
          <p className="text-gray-300 mb-4">
            Thanks—expect a short Loom showing how we&apos;d wire your use-case on Xynergy.
          </p>
          <p className="text-sm text-gray-400">
            Check your email for confirmation. If you don&apos;t receive it, check your spam folder or contact us directly.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Business Details */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-primary-blue">Business Details</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="company_name" className="block text-sm font-semibold text-white mb-2">
              Business Name *
            </label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              required
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
              placeholder="Your business name"
            />
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-semibold text-white mb-2">
              Industry *
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              required
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
              placeholder="e.g., Real Estate, Professional Services, etc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact_name" className="block text-sm font-semibold text-white mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="contact_name"
                name="contact_name"
                required
                className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-semibold text-white mb-2">
                Your Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
                placeholder="e.g., CEO, Founder, Owner"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-semibold text-white mb-2">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>
      </Card>

      {/* Transformation Goals */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-primary-blue">Your Goals</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="goals" className="block text-sm font-semibold text-white mb-2">
              What would success look like for you? *
            </label>
            <textarea
              id="goals"
              name="goals"
              required
              rows={5}
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors resize-none"
              placeholder="Describe your vision of success and what you're trying to achieve..."
            />
            <p className="text-xs text-gray-500 mt-2">Minimum 10 characters</p>
          </div>
        </div>
      </Card>


      {/* Areas of Interest */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-primary-blue">Areas of Interest</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Which areas are most important to you? (Check all that apply)
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="search-optimization"
                  className="w-4 h-4 bg-background-dark border-primary-blue/30 rounded text-accent-pink focus:ring-accent-pink"
                />
                <span className="text-gray-300">Search Optimization (Project NEXUS)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="data-analytics"
                  className="w-4 h-4 bg-background-dark border-primary-blue/30 rounded text-accent-pink focus:ring-accent-pink"
                />
                <span className="text-gray-300">Data Analytics & Intelligence</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="ai-amplification"
                  className="w-4 h-4 bg-background-dark border-primary-blue/30 rounded text-accent-pink focus:ring-accent-pink"
                />
                <span className="text-gray-300">AI Amplification</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="technology-translation"
                  className="w-4 h-4 bg-background-dark border-primary-blue/30 rounded text-accent-pink focus:ring-accent-pink"
                />
                <span className="text-gray-300">Technology Translation</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="all-platforms"
                  className="w-4 h-4 bg-background-dark border-primary-blue/30 rounded text-accent-pink focus:ring-accent-pink"
                />
                <span className="text-gray-300">All Future Platforms</span>
              </label>
            </div>
          </div>
        </div>
      </Card>

      {/* How You Found Us */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-primary-blue">How You Found Us</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="referred_by" className="block text-sm font-semibold text-white mb-2">
              How did you hear about ClearForge?
            </label>
            <input
              type="text"
              id="referred_by"
              name="referred_by"
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
              placeholder="e.g., Google search, referral from John Doe, LinkedIn, etc."
            />
          </div>
        </div>
      </Card>


      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      <div className="text-center">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
        <p className="text-sm text-gray-400 mt-4">
          You&apos;ll receive a response within 48 hours
        </p>
      </div>
    </form>
  );
}
