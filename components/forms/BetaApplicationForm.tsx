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
    const data = Object.fromEntries(formData.entries());

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
            Thank you for your interest in the beta program. We&apos;ll review your application and respond within 48 hours.
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
            <label htmlFor="businessName" className="block text-sm font-semibold text-white mb-2">
              Business Name *
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
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
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Your Name *
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

            <div>
              <label htmlFor="role" className="block text-sm font-semibold text-white mb-2">
                Your Role *
              </label>
              <input
                type="text"
                id="role"
                name="role"
                required
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

      {/* Current Challenges */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-primary-blue">Current Challenges</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="challenges" className="block text-sm font-semibold text-white mb-2">
              What are your biggest challenges right now? *
            </label>
            <textarea
              id="challenges"
              name="challenges"
              required
              rows={4}
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors resize-none"
              placeholder="Describe the specific challenges you're facing..."
            />
          </div>

          <div>
            <label htmlFor="currentApproach" className="block text-sm font-semibold text-white mb-2">
              What have you tried so far?
            </label>
            <textarea
              id="currentApproach"
              name="currentApproach"
              rows={3}
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors resize-none"
              placeholder="What solutions or approaches have you already attempted?"
            />
          </div>
        </div>
      </Card>

      {/* Transformation Goals */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-primary-blue">Transformation Goals</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="goals" className="block text-sm font-semibold text-white mb-2">
              What would success look like for you? *
            </label>
            <textarea
              id="goals"
              name="goals"
              required
              rows={4}
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors resize-none"
              placeholder="Describe your vision of success and transformation..."
            />
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-semibold text-white mb-2">
              What&apos;s your timeline for seeing results?
            </label>
            <select
              id="timeline"
              name="timeline"
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white focus:outline-none focus:border-accent-pink transition-colors"
            >
              <option value="">Select timeline...</option>
              <option value="immediate">Immediate (1-3 months)</option>
              <option value="short">Short-term (3-6 months)</option>
              <option value="medium">Medium-term (6-12 months)</option>
              <option value="long">Long-term (12+ months)</option>
              <option value="flexible">Flexible - focused on right approach</option>
            </select>
          </div>
        </div>
      </Card>

      {/* The 20% */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-accent-pink">Why You&apos;re Part of the 20%</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="whyYou" className="block text-sm font-semibold text-white mb-2">
              Why are you the right fit for this beta program? *
            </label>
            <textarea
              id="whyYou"
              name="whyYou"
              required
              rows={4}
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors resize-none"
              placeholder="What makes you an innovator? Why are you willing to prove transparency works?"
            />
          </div>

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

          <div>
            <label htmlFor="commitment" className="block text-sm font-semibold text-white mb-2">
              What level of involvement can you commit to? *
            </label>
            <select
              id="commitment"
              name="commitment"
              required
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white focus:outline-none focus:border-accent-pink transition-colors"
            >
              <option value="">Select commitment level...</option>
              <option value="full">Full participation - active feedback and implementation</option>
              <option value="moderate">Moderate - regular check-ins and feedback</option>
              <option value="light">Light - willing to try and share results</option>
            </select>
          </div>
        </div>
      </Card>

      {/* How You Found Us */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-primary-blue">How You Found Us</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="referralSource" className="block text-sm font-semibold text-white mb-2">
              How did you hear about TriSynq? *
            </label>
            <select
              id="referralSource"
              name="referralSource"
              required
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white focus:outline-none focus:border-accent-pink transition-colors"
            >
              <option value="">Select source...</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral from someone</option>
              <option value="content">Blog/Article/Content</option>
              <option value="networking">Networking Event</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="referralDetails" className="block text-sm font-semibold text-white mb-2">
              Additional details (optional)
            </label>
            <input
              type="text"
              id="referralDetails"
              name="referralDetails"
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
              placeholder="e.g., specific person's name, article title, etc."
            />
          </div>
        </div>
      </Card>

      {/* Additional Information */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-primary-blue">Anything Else?</h3>
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-semibold text-white mb-2">
            Additional information you&apos;d like us to know
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors resize-none"
            placeholder="Anything else you'd like to share with us?"
          />
        </div>
      </Card>

      {/* Transparency Agreement */}
      <Card variant="elevated">
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="transparencyAgreement"
              required
              className="w-5 h-5 bg-background-dark border-primary-blue/30 rounded text-accent-pink focus:ring-accent-pink mt-1"
            />
            <span className="text-gray-300">
              I understand that this is a beta program focused on transparency. I&apos;m comfortable with anonymized results being shared publicly (my identity protected unless I choose otherwise). *
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="partnershipMindset"
              required
              className="w-5 h-5 bg-background-dark border-primary-blue/30 rounded text-accent-pink focus:ring-accent-pink mt-1"
            />
            <span className="text-gray-300">
              I understand this is a partnership, not a vendor relationship. I&apos;m willing to provide honest feedback and help refine the methodology. *
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="realisticExpectations"
              required
              className="w-5 h-5 bg-background-dark border-primary-blue/30 rounded text-accent-pink focus:ring-accent-pink mt-1"
            />
            <span className="text-gray-300">
              I have realistic expectations. I understand this is a startup proving something new, not a corporation with thousands of case studies. *
            </span>
          </label>
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
