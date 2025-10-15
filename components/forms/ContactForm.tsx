'use client';

import { useState, FormEvent } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    // Transform form data to match API schema (TRD lines 603-609)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      phone: formData.get('phone') as string || undefined,
      company: formData.get('company') as string || undefined,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit contact form');
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
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">
            Thank you for reaching out. We&apos;ll get back to you within 1-2 business days.
          </p>
        </div>
        <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Contact Information */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-primary-blue">Contact Information</h3>
        <div className="space-y-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                Phone Number
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
        </div>
      </Card>

      {/* Message */}
      <Card variant="bordered">
        <h3 className="text-xl font-bold mb-4 text-primary-blue">Your Message</h3>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
            How can we help you? *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-background-dark border border-primary-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink transition-colors resize-none"
            placeholder="Tell us about your needs, questions, or how we can help..."
          />
          <p className="text-xs text-gray-500 mt-2">Minimum 10 characters</p>
        </div>
      </Card>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      <div className="flex justify-center">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      <p className="text-center text-sm text-gray-500">
        * Required fields
      </p>
    </form>
  );
}
