'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, FormEvent, Suspense } from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

function ContactForm() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setFormType(type);
    }
  }, [searchParams]);

  const getFormTitle = (type: string): string => {
    const titles: Record<string, string> = {
      'beta-os': 'Apply for Business: OS Beta',
      'nexus': 'Apply for NEXUS Continuum',
      'connect': 'Request Foundry Connect Access',
      'waitlist-search': 'Join Search: Visibility Waitlist',
      'partnership': 'Partner With ClearForge',
      'general': 'Contact Us'
    };
    return titles[type] || titles.general;
  };

  const getFormDescription = (type: string): string => {
    const descriptions: Record<string, string> = {
      'beta-os': 'Get early access to Foundry Business: OS with significant benefits for beta participants.',
      'nexus': 'Join our 12-18 month search visibility validation program.',
      'connect': 'Request API access to The Foundry Platform.',
      'waitlist-search': 'Be notified when Foundry Search: Visibility launches (Q3 2026).',
      'partnership': 'Discuss consulting, custom development, training, or Continuum partnerships.',
      'general': 'General inquiries, support, or questions about ClearForge.'
    };
    return descriptions[type] || descriptions.general;
  };

  const getFormFields = (type: string) => {
    const commonFields = [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text', required: false }
    ];

    const typeSpecificFields: Record<string, any[]> = {
      'beta-os': [
        ...commonFields,
        { name: 'projects', label: 'Number of parallel projects you manage', type: 'number', required: true },
        { name: 'tools', label: 'Current tools you use (comma-separated)', type: 'text', required: false },
        { name: 'challenge', label: 'Biggest challenge with context switching', type: 'textarea', required: true }
      ],
      'nexus': [
        ...commonFields,
        { name: 'website', label: 'Website URL', type: 'url', required: true },
        { name: 'traffic', label: 'Monthly organic search traffic (estimate)', type: 'text', required: false },
        { name: 'strategy', label: 'Current SEO/search strategy', type: 'textarea', required: false },
        { name: 'why', label: 'Why do you want to be a NEXUS partner?', type: 'textarea', required: true }
      ],
      'connect': [
        ...commonFields,
        { name: 'role', label: 'Developer role/title', type: 'text', required: true },
        { name: 'use_case', label: 'What will you build with Foundry Connect?', type: 'textarea', required: true },
        { name: 'volume', label: 'Expected monthly API request volume', type: 'select', options: ['<10K', '10K-100K', '100K-1M', '>1M'], required: false }
      ],
      'waitlist-search': [
        ...commonFields,
        { name: 'interest', label: 'What interests you about Foundry Search?', type: 'textarea', required: false }
      ],
      'partnership': [
        ...commonFields,
        { name: 'service_type', label: 'Service Interest', type: 'select', options: ['Consulting', 'Custom Development', 'Training', 'Continuum Partnership', 'Multiple'], required: true },
        { name: 'details', label: 'Tell us about your needs', type: 'textarea', required: true }
      ],
      'general': [
        ...commonFields,
        { name: 'subject', label: 'Subject', type: 'text', required: true },
        { name: 'message', label: 'Message', type: 'textarea', required: true }
      ]
    };

    return typeSpecificFields[type] || typeSpecificFields.general;
  };

  const getSubmitButtonText = (type: string): string => {
    const texts: Record<string, string> = {
      'beta-os': 'Apply for Beta',
      'nexus': 'Submit NEXUS Application',
      'connect': 'Request API Access',
      'waitlist-search': 'Join Waitlist',
      'partnership': 'Submit Inquiry',
      'general': 'Send Message'
    };
    return texts[type] || 'Submit';
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = {
      formType: formType
    };

    // Collect form data
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      // Route to appropriate backend handler based on formType
      const endpoint = formType === 'beta-os' ? '/api/beta' : '/api/contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = getFormFields(formType);

  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {getFormTitle(formType)}
          </h1>
          <p className="text-xl text-gray-300">
            {getFormDescription(formType)}
          </p>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-2xl mx-auto">
          <Card variant="elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              {fields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-2">
                    {field.label} {field.required && <span className="text-accent-pink">*</span>}
                  </label>

                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      rows={4}
                      className="w-full px-4 py-3 bg-background-dark border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-blue transition-colors"
                    />
                  ) : field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      className="w-full px-4 py-3 bg-background-dark border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-blue transition-colors"
                    >
                      <option value="">Select an option</option>
                      {field.options?.map((option: string) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      className="w-full px-4 py-3 bg-background-dark border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-blue transition-colors"
                    />
                  )}
                </div>
              ))}

              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : getSubmitButtonText(formType)}
              </Button>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Loading...</h1>
        </div>
      </Section>
    }>
      <ContactForm />
    </Suspense>
  );
}
