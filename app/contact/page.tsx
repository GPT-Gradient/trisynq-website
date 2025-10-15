import { Metadata } from 'next';
import { Mail, MessageSquare, Briefcase, Phone, MapPin, Clock } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import BetaApplicationForm from '@/components/forms/BetaApplicationForm';
import ContactForm from '@/components/forms/ContactForm';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Ready to Forge Clarity?',
  description: 'Let&apos;s cut through the noise and build what&apos;s next.',
});

export default function ContactPage() {
  return (
    <>
      {/* Contact Philosophy */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ready to Forge <span className="text-gradient">Clarity</span>?
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Let&apos;s cut through the noise and build what&apos;s next.
          </p>

          <p className="text-lg text-gray-400">
            Tell us what you&apos;re building. We&apos;ll show you how Xynergy makes it transparent.
          </p>
        </div>
      </Section>

      {/* Contact Options */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How Can We <span className="text-gradient">Help</span>?
          </h2>
          <p className="text-xl text-gray-400">
            Choose the option that best fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Beta Program Application */}
          <Card variant="bordered" className="hover:border-accent-pink/50 transition-all duration-300">
            <div className="text-center">
              <div className="bg-accent-pink/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Beta Program Application</h3>
              <p className="text-gray-400 mb-4">
                Apply to join the first 100 partners
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Response within 48 hours
              </p>
              <Button href="#beta-application" variant="outline" className="w-full">
                Apply Now
              </Button>
            </div>
          </Card>

          {/* Partnership Inquiry */}
          <Card variant="bordered" className="hover:border-accent-pink/50 transition-all duration-300">
            <div className="text-center">
              <div className="bg-primary-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Partnership Inquiry</h3>
              <p className="text-gray-400 mb-4">
                Have an idea that needs technical execution?
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Response within 48-72 hours
              </p>
              <Button href="#partnership-form" variant="outline" className="w-full">
                Discuss Partnership
              </Button>
            </div>
          </Card>

          {/* Consulting Inquiry */}
          <Card variant="bordered" className="hover:border-accent-pink/50 transition-all duration-300">
            <div className="text-center">
              <div className="bg-secondary-purple-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-secondary-purple-light" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Consulting Inquiry</h3>
              <p className="text-gray-400 mb-4">
                Technology + Data + AI integration
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Response within 48-72 hours
              </p>
              <Button href="#consulting-form" variant="outline" className="w-full">
                Explore Consulting
              </Button>
            </div>
          </Card>

          {/* General Inquiry */}
          <Card variant="bordered" className="hover:border-accent-pink/50 transition-all duration-300">
            <div className="text-center">
              <div className="bg-accent-pink/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-accent-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">General Inquiry</h3>
              <p className="text-gray-400 mb-4">
                Questions, challenges, or community interest
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Response within 24-48 hours
              </p>
              <Button href="#contact-form" variant="outline" className="w-full">
                Get in Touch
              </Button>
            </div>
          </Card>

          {/* Media/Speaking */}
          <Card variant="bordered" className="hover:border-accent-pink/50 transition-all duration-300">
            <div className="text-center">
              <div className="bg-primary-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Media/Speaking</h3>
              <p className="text-gray-400 mb-4">
                Interviews, speaking, content collaboration
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Response based on fit and capacity
              </p>
              <Button href="#media-form" variant="outline" className="w-full">
                Discuss Opportunity
              </Button>
            </div>
          </Card>

          {/* Direct Email */}
          <Card variant="bordered" className="hover:border-accent-pink/50 transition-all duration-300">
            <div className="text-center">
              <div className="bg-secondary-purple-light/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary-purple-light" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Direct Email</h3>
              <p className="text-gray-400 mb-4">
                Prefer to email directly?
              </p>
              <p className="text-sm text-gray-500 mb-4">
                We&apos;re here to help
              </p>
              <a
                href="mailto:hello@trisynq.ai"
                className="inline-block w-full px-6 py-3 text-base font-semibold rounded-full border-2 border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white focus:ring-accent-pink transition-all duration-200 text-center"
              >
                hello@trisynq.ai
              </a>
            </div>
          </Card>
        </div>
      </Section>

      {/* General Contact Form */}
      <Section background="medium" id="contact-form">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Get in Touch</span>
            </h2>
            <p className="text-xl text-gray-400">
              Tell us how we can help you
            </p>
          </div>

          <ContactForm />
        </div>
      </Section>

      {/* Beta Application Form */}
      <Section background="dark" id="beta-application">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Beta Program</span> Application
            </h2>
            <p className="text-xl text-gray-400">
              Join the first 100 partners building the future
            </p>
          </div>

          <BetaApplicationForm />
        </div>
      </Section>

      {/* Office Information */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient">Office</span> Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
                  <p className="text-gray-300">Port St. Lucie, Florida</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Virtual first - remote collaboration primary
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Availability</h3>
                  <p className="text-gray-300">Business hours EST</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Monday - Friday, 9am - 5pm EST
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated">
            <div className="text-center">
              <h4 className="text-lg font-bold mb-2 text-primary-blue">Transparency Note</h4>
              <p className="text-gray-300">
                We&apos;re a small focused team. Response times may vary during intensive development periods, but we&apos;ll always get back to you.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Social Media & Dashboard */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient">Connect</span> With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="bordered" className="text-center hover:border-accent-pink/50 transition-all duration-300">
              <a href="https://linkedin.com/company/trisynq" target="_blank" rel="noopener noreferrer" className="block">
                <MessageSquare className="w-12 h-12 text-primary-blue mx-auto mb-3" />
                <h4 className="font-bold text-white">LinkedIn</h4>
                <p className="text-sm text-gray-400 mt-2">Follow our journey</p>
              </a>
            </Card>

            <Card variant="bordered" className="text-center hover:border-accent-pink/50 transition-all duration-300">
              <a href="https://twitter.com/trisynqai" target="_blank" rel="noopener noreferrer" className="block">
                <MessageSquare className="w-12 h-12 text-primary-blue mx-auto mb-3" />
                <h4 className="font-bold text-white">Twitter</h4>
                <p className="text-sm text-gray-400 mt-2">Real-time updates</p>
              </a>
            </Card>

            <Card variant="bordered" className="text-center hover:border-accent-pink/50 transition-all duration-300">
              <a href="/dashboard" className="block">
                <MessageSquare className="w-12 h-12 text-accent-pink mx-auto mb-3" />
                <h4 className="font-bold text-white">Public Dashboard</h4>
                <p className="text-sm text-gray-400 mt-2">Complete transparency</p>
              </a>
            </Card>

            <Card variant="bordered" className="text-center hover:border-accent-pink/50 transition-all duration-300">
              <a href="/community" className="block">
                <MessageSquare className="w-12 h-12 text-secondary-purple-light mx-auto mb-3" />
                <h4 className="font-bold text-white">Community</h4>
                <p className="text-sm text-gray-400 mt-2">Join the movement</p>
              </a>
            </Card>
          </div>
        </div>
      </Section>

      {/* Response Expectations */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient">Response</span> Expectations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated">
              <h4 className="font-bold text-primary-blue mb-2">Beta Applications</h4>
              <p className="text-2xl font-bold text-white mb-1">48 hours</p>
              <p className="text-sm text-gray-400">Priority response</p>
            </Card>

            <Card variant="elevated">
              <h4 className="font-bold text-primary-blue mb-2">Partnership Inquiries</h4>
              <p className="text-2xl font-bold text-white mb-1">48-72 hours</p>
              <p className="text-sm text-gray-400">Thorough evaluation</p>
            </Card>

            <Card variant="elevated">
              <h4 className="font-bold text-primary-blue mb-2">Consulting Inquiries</h4>
              <p className="text-2xl font-bold text-white mb-1">48-72 hours</p>
              <p className="text-sm text-gray-400">Assessment and fit</p>
            </Card>

            <Card variant="elevated">
              <h4 className="font-bold text-primary-blue mb-2">General Inquiries</h4>
              <p className="text-2xl font-bold text-white mb-1">24-48 hours</p>
              <p className="text-sm text-gray-400">Quick response</p>
            </Card>

            <Card variant="elevated">
              <h4 className="font-bold text-primary-blue mb-2">Media Requests</h4>
              <p className="text-2xl font-bold text-white mb-1">Case by case</p>
              <p className="text-sm text-gray-400">Based on fit</p>
            </Card>

            <Card variant="elevated">
              <h4 className="font-bold text-primary-blue mb-2">Direct Email</h4>
              <p className="text-2xl font-bold text-white mb-1">24-48 hours</p>
              <p className="text-sm text-gray-400">Personal attention</p>
            </Card>
          </div>

          <div className="mt-12 bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30">
            <p className="text-center text-accent-pink font-semibold">
              We&apos;re building, so responses may vary during intensive development periods. But we&apos;ll always get back to you.
            </p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Start the Conversation</span>?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s talk about transformation, not sales pitches
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#beta-application" size="lg">
              Apply for Beta Program
            </Button>
            <Button href="mailto:hello@trisynq.ai" variant="outline" size="lg">
              Email Us Directly
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
