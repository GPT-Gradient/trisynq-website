import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Database, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Data Training — Enterprise Data Architecture & Governance',
  description: 'Learn enterprise data architecture, governance frameworks, and analytics patterns. Virtual and on-site training available.',
  canonical: '/training/data',
});

export default function DataTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <Button href="/training" variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Training
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary-blue/20 rounded-full p-4">
              <Database className="w-12 h-12 text-primary-blue" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">Data</span> Training
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Master Enterprise Data Architecture Without the Enterprise Complexity
          </p>
          <p className="text-lg text-gray-400">
            Learn how Fortune 500 companies actually architect, govern, and operationalize data systems—then build the same capabilities for a fraction of the cost.
          </p>
        </div>
      </Section>

      {/* What You'll Learn */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What You&apos;ll <span className="text-primary-blue">Actually Learn</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Data Architecture Fundamentals</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Modern data architecture patterns (lakehouse, mesh, fabric)</li>
                <li>• When to use which pattern and why</li>
                <li>• How enterprises actually implement them</li>
                <li>• Avoiding the common ($50M+) mistakes</li>
                <li>• Designing for scale without over-engineering</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Data Pipeline Design</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Batch, streaming, and hybrid pipeline patterns</li>
                <li>• Error handling & data quality at scale</li>
                <li>• Orchestration frameworks that actually work</li>
                <li>• Performance optimization strategies</li>
                <li>• Cost-effective processing architectures</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Data Governance That Works</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Governance frameworks that don&apos;t kill velocity</li>
                <li>• Data catalog & lineage implementation</li>
                <li>• Access control & security patterns</li>
                <li>• Compliance without the complexity</li>
                <li>• Making governance actually useful</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Analytics Architecture</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Self-service analytics that scale</li>
                <li>• Semantic layers & metrics frameworks</li>
                <li>• Real-time analytics architectures</li>
                <li>• BI tool selection & integration</li>
                <li>• Performance tuning for queries at scale</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Who Should Attend */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Who Should <span className="text-accent-pink">Attend</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="bordered" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Data Engineers</h3>
              <p className="text-gray-400 text-sm">
                Level up from pipeline builder to data architect. Learn the strategic thinking behind the tools.
              </p>
            </Card>

            <Card variant="bordered" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Engineering Leaders</h3>
              <p className="text-gray-400 text-sm">
                Make informed decisions about data architecture without getting sold expensive solutions.
              </p>
            </Card>

            <Card variant="bordered" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Analytics Teams</h3>
              <p className="text-gray-400 text-sm">
                Understand what&apos;s possible and how to work effectively with data engineering.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Program Structure */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Program <span className="text-gradient">Structure</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Foundation Track</h3>
              <p className="text-gray-300 mb-4">2-3 Days | Virtual or On-Site</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Core data architecture patterns</li>
                <li>• Pipeline design fundamentals</li>
                <li>• Governance basics that matter</li>
                <li>• Hands-on labs with real scenarios</li>
                <li>• Architecture review of your systems</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                Ideal for teams starting their data journey or consolidating existing knowledge.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Advanced Track</h3>
              <p className="text-gray-300 mb-4">3-5 Days | Virtual or On-Site</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Enterprise-scale architecture patterns</li>
                <li>• Advanced governance & compliance</li>
                <li>• Performance optimization at scale</li>
                <li>• Real-time & streaming architectures</li>
                <li>• Custom implementation planning</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                For teams ready to build enterprise-grade systems or scale existing ones.
              </p>
            </Card>
          </div>

          <Card className="bg-primary/30 border-2 border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-4 text-white">All Programs Include:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <ul className="space-y-2">
                <li>✓ Hands-on labs with real datasets</li>
                <li>✓ Architecture review sessions</li>
                <li>✓ Reference implementations</li>
                <li>✓ Decision frameworks & templates</li>
              </ul>
              <ul className="space-y-2">
                <li>✓ Post-training Slack/Teams access (30 days)</li>
                <li>✓ Recorded sessions (virtual programs)</li>
                <li>✓ Implementation guidance</li>
                <li>✓ Vendor selection frameworks</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* What Makes This Different */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What Makes This <span className="text-accent-pink">Different</span>
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-2 text-primary-blue">Enterprise Experience, Not Theory</h3>
              <p className="text-gray-300">
                Taught by architects who&apos;ve built these systems for Fortune 100 companies. Learn what actually works vs what sounds good in whitepapers.
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-2 text-primary-blue">Tool-Agnostic Thinking</h3>
              <p className="text-gray-300">
                We teach patterns and principles that work across any tool stack. Not vendor training disguised as education.
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-2 text-primary-blue">Your Data, Your Problems</h3>
              <p className="text-gray-300">
                Bring your actual challenges. We&apos;ll work through them together and build solutions you can implement immediately.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Build Data Capability?</h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s discuss your team&apos;s current state, goals, and the right program structure for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Schedule a Conversation
              </Button>
              <Button href="/training" variant="outline" size="lg">
                Explore Other Training
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
