import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Services - Consulting, Custom Development, Training & Partnerships',
  description: 'Operators-first consulting. We build, you own. Knowledge transfer without dependency.',
});

export default function ServicesPage() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Services
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Operators-first consulting. We build, you own. Knowledge transfer without dependency.
          </p>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Consulting</h3>
              <p className="text-gray-300 mb-6">
                Operators-first knowledge transfer. No consultant-speak. We show you how enterprise tech actually works, then help you implement it.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Strategy & implementation consulting</li>
                <li>• Technical architecture reviews</li>
                <li>• Process optimization</li>
                <li>• Ongoing advisory partnerships</li>
              </ul>
              <Button href="/services/consulting">Learn More</Button>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Custom Development</h3>
              <p className="text-gray-300 mb-6">
                We build, you own. Custom solutions on The Foundry platform. White-label capabilities for agencies and enterprises.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Custom product development</li>
                <li>• White-label platform access</li>
                <li>• Integration & API development</li>
                <li>• You own the code and IP</li>
              </ul>
              <Button href="/services/custom">Discuss Your Needs</Button>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Training & Enablement</h3>
              <p className="text-gray-300 mb-6">
                Workshops, bootcamps, and ongoing enablement. We teach your team how enterprise systems work. Build capability, not dependency.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Team workshops & training</li>
                <li>• Technical bootcamps</li>
                <li>• Ongoing enablement programs</li>
                <li>• Virtual or on-site delivery</li>
              </ul>
              <Button href="/services/training">View Training Options</Button>
            </Card>

            <Card variant="elevated" className="border-2 border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">Continuum Partnership</h3>
              <p className="text-gray-300 mb-6">
                Co-create products with us. Become a Continuum partner to validate methodologies, build case studies, and share in success.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Co-create new products</li>
                <li>• 12-18 month validation programs</li>
                <li>• Revenue share opportunities</li>
                <li>• Your success proves it for others</li>
              </ul>
              <Button href="/services/partnership">Partner Inquiry</Button>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s talk about your needs and find the right fit.
          </p>
          <Button href="/contact?type=partnership" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
