'use client';

import { useState, FormEvent } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    // Transform form data for waitlist submission
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string || undefined,
      focus_area: formData.get('focus_area') as string || undefined,
      message: `Community Waitlist - Focus Area: ${formData.get('focus_area') || 'Not specified'}`,
    };

    try {
      // Use the contact API endpoint for now (waitlist goes to same place)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to join waitlist');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card variant="elevated" className="max-w-2xl mx-auto text-center py-12">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the List!</h3>
          <p className="text-gray-400 mb-4">
            Thank you for joining the community waitlist. We&apos;ll send you early access when we launch each phase.
          </p>
          <p className="text-sm text-gray-500">
            Keep an eye on your inbox for exclusive invites to private workshops and AMAs.
          </p>
        </div>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Join Another Person
        </Button>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <Card variant="elevated">
        <div className="space-y-6">
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
            <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="focus_area" className="block text-sm font-semibold text-white mb-2">
              Focus Area
            </label>
            <select
              id="focus_area"
              name="focus_area"
              className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white focus:outline-none focus:border-accent-pink transition-colors"
            >
              <option value="">Select your primary interest...</option>
              <option value="seo-marketing">SEO & Marketing (Nexus)</option>
              <option value="data-analytics">Data & Analytics</option>
              <option value="ai-automation">AI & Automation</option>
              <option value="content-creation">Content Creation</option>
              <option value="community-learning">Community & Learning</option>
              <option value="all">All of the above</option>
              <option value="other">Other</option>
            </select>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="min-w-[200px]"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500">
            * Required fields
          </p>

          <div className="bg-accent-pink/10 border border-accent-pink/30 rounded-lg p-4 mt-6">
            <p className="text-sm text-gray-300 text-center">
              <span className="font-semibold text-accent-pink">Launching Soon:</span> Phase 1 content starts rolling out as beta partners come on board. Early waitlist members get first access to workshops and AMAs.
            </p>
          </div>
        </div>
      </Card>
    </form>
  );
}
