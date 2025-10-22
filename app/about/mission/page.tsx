import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Mission & Values - Transparency, Accessibility, Proof',
  description: 'Our mission: Make enterprise capability accessible without enterprise budgets. Our values: Transparency over gatekeeping. Proof over promises.',
});

export default function MissionPage() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mission & Values
          </h1>
          <p className="text-2xl text-gray-300">
            Make enterprise capability accessible. Build with transparency. Deliver proof before promises.
          </p>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-12">
            <p className="text-2xl text-center text-gray-200 mb-6">
              Make enterprise-grade intelligence accessible to the 43% of GDP powered by small and medium businesses.
            </p>
            <p className="text-lg text-center text-gray-300">
              Not by dumbing down the technology—by removing the artificial complexity and cost barriers that serve vendors instead of customers.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Transparency Over Gatekeeping</h3>
              <p className="text-gray-300 mb-4">
                We show you how enterprise systems actually work. No jargon protecting our moat. No black boxes hiding complexity.
              </p>
              <p className="text-sm text-gray-400">
                Knowledge should empower, not extract rent.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Proof Over Promises</h3>
              <p className="text-gray-300 mb-4">
                We validate methodologies for 12-18 months with real companies before commercial launch. Your success is our proof.
              </p>
              <p className="text-sm text-gray-400">
                The Continuum validates. The market decides.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Ownership Over Dependency</h3>
              <p className="text-gray-300 mb-4">
                You own what you build. No vendor lock-in. Full control. We enable capability, not create dependency.
              </p>
              <p className="text-sm text-gray-400">
                Your business, your systems, your control.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">How We Operate</h2>

          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-semibold mb-3">Build in Public</h3>
              <p className="text-gray-300">
                Public dashboard showing platform health, development progress, and Continuum validation results. Full transparency into what works and what doesn&apos;t.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">Validate with Partners</h3>
              <p className="text-gray-300">
                12-18 month Continuum partnerships prove methodologies before commercial launch. Partners benefit significantly—preferred pricing, revenue share opportunities, case study recognition.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">Share Knowledge Freely</h3>
              <p className="text-gray-300">
                The Forge provides free education, resources, and community. No paywalls on knowledge. Enterprise insights accessible to everyone.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">Deliver Real Value</h3>
              <p className="text-gray-300">
                We succeed when you succeed. Simple. Our revenue comes from value delivered, not vendor lock-in or complexity tax.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Build With Us
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re proving a better way exists. Join us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/continuum" size="lg">
              Become a Partner
            </Button>
            <Button href="/about/team" variant="outline" size="lg">
              Meet the Team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
