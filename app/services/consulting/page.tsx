import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Consulting - Operators-First Knowledge Transfer',
  description: 'No consultant-speak. We show you how enterprise tech works, then help you implement it. Build capability, not dependency.',
});

export default function ConsultingPage() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Consulting
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Operators-first knowledge transfer. No consultant-speak.
            We show you how enterprise tech works, then help you implement it.
          </p>
          <Button href="/contact?type=partnership" size="lg">
            Discuss Your Needs
          </Button>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            How We&apos;re Different
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-4">Traditional Consultants</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Charge $300+/hour for expertise you can&apos;t retain</li>
                <li>• Create dependency, not capability</li>
                <li>• Use jargon to protect their value</li>
                <li>• Leave when the project ends</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-4">ClearForge Approach</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Transfer knowledge, build your team&apos;s capability</li>
                <li>• Use plain language, show you how it works</li>
                <li>• Help you own the solution, not depend on us</li>
                <li>• Available for ongoing support if needed</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What We Help With
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold mb-3">Strategy & Planning</h3>
              <p className="text-gray-300 text-sm">
                Technology roadmaps, architecture planning, implementation strategy
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <p className="text-gray-300 text-sm">
                Hands-on help deploying solutions, integrating systems, training teams
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">Process Optimization</h3>
              <p className="text-gray-300 text-sm">
                Workflow analysis, automation opportunities, efficiency improvements
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">Technical Architecture</h3>
              <p className="text-gray-300 text-sm">
                System design reviews, scalability planning, security assessments
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">AI & Automation</h3>
              <p className="text-gray-300 text-sm">
                AI implementation, workflow automation, intelligent systems design
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">Ongoing Advisory</h3>
              <p className="text-gray-300 text-sm">
                Monthly retainers, strategic guidance, as-needed support
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Talk?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss your challenges and see if we&apos;re a good fit.
          </p>
          <Button href="/contact?type=partnership" size="lg">
            Start the Conversation
          </Button>
        </div>
      </Section>
    </>
  );
}
