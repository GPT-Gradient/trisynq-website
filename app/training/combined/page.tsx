import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Zap, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Data + AI Combined Training — End-to-End Enterprise Systems',
  description: 'Master the complete picture: how enterprise data and AI systems work together to generate revenue. Comprehensive training program.',
  canonical: '/training/combined',
});

export default function CombinedTrainingPage() {
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
            <div className="bg-secondary-purple/20 rounded-full p-4">
              <Zap className="w-12 h-12 text-secondary-purple-light" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-gradient">Data + AI</span> Combined
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            The Complete Picture: How Enterprise Data & AI Systems Work Together
          </p>
          <p className="text-lg text-gray-400">
            Most teams learn data and AI separately. Enterprises know they&apos;re inseparable. Learn how to build integrated systems that actually generate revenue.
          </p>
        </div>
      </Section>

      {/* Why Combined Training */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Learn Them <span className="text-secondary-purple-light">Together</span>?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card variant="outline" className="bg-background-medium">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">The Problem With Separate Training</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Data teams build pipelines AI can&apos;t use</li>
                <li>• AI teams need data that doesn&apos;t exist</li>
                <li>• Governance frameworks work for one but not both</li>
                <li>• Integration becomes an afterthought</li>
                <li>• Business value gets lost in translation</li>
              </ul>
            </Card>

            <Card variant="outline" className="bg-background-medium">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">The Enterprise Approach</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Design data systems for AI from day one</li>
                <li>• Build AI with data reality in mind</li>
                <li>• Unified governance that actually works</li>
                <li>• Seamless data-to-insights-to-action</li>
                <li>• Revenue generation, not tool collection</li>
              </ul>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary-blue/20 to-accent-pink/20 rounded-xl p-8 border border-secondary-purple/30">
            <p className="text-xl text-gray-300 text-center italic">
              &quot;Fortune 500s don&apos;t have separate data and AI teams. They have teams that build revenue-generating systems that happen to use both. That&apos;s what we teach.&quot;
            </p>
          </div>
        </div>
      </Section>

      {/* What You'll Learn */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What You&apos;ll <span className="text-gradient">Actually Learn</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Integrated Architecture</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Designing data systems that enable AI</li>
                <li>• Building AI systems that respect data reality</li>
                <li>• Feature stores, model registries, and lineage</li>
                <li>• End-to-end pipelines that actually work</li>
                <li>• Architecture patterns enterprises actually use</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Unified Governance</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Governance frameworks that cover both</li>
                <li>• Data quality for AI workloads</li>
                <li>• Model governance & compliance</li>
                <li>• Privacy & security across the stack</li>
                <li>• Making governance enable, not block</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">DataOps + MLOps Convergence</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• CI/CD for data and models together</li>
                <li>• Monitoring across the entire pipeline</li>
                <li>• Incident response for integrated systems</li>
                <li>• Performance optimization end-to-end</li>
                <li>• Building reliable ML-powered products</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Business Value Delivery</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Identifying revenue-generating use cases</li>
                <li>• Building data products, not data projects</li>
                <li>• Measuring actual business impact</li>
                <li>• Scaling from pilot to production</li>
                <li>• Making AI pay for itself</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Who Should Attend */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Who Should <span className="text-accent-pink">Attend</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="outline" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Engineering Leaders</h3>
              <p className="text-gray-400 text-sm">
                Build teams and systems that integrate data and AI from the ground up.
              </p>
            </Card>

            <Card variant="outline" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Architects</h3>
              <p className="text-gray-400 text-sm">
                Design end-to-end systems that enterprises actually deploy at scale.
              </p>
            </Card>

            <Card variant="outline" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Cross-Functional Teams</h3>
              <p className="text-gray-400 text-sm">
                Get data engineers and ML engineers speaking the same language.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Program Structure */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Program <span className="text-gradient">Structure</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Foundations Program</h3>
              <p className="text-gray-300 mb-4">4-5 Days | Virtual or On-Site</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Data fundamentals for AI workloads</li>
                <li>• AI fundamentals for data engineers</li>
                <li>• Integration patterns & architecture</li>
                <li>• Hands-on end-to-end pipeline building</li>
                <li>• Your roadmap for integrated systems</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                For teams building their first integrated data + AI systems.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Advanced Program</h3>
              <p className="text-gray-300 mb-4">5-7 Days | Virtual or On-Site</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Enterprise-scale architecture patterns</li>
                <li>• Advanced governance & compliance</li>
                <li>• Production reliability at scale</li>
                <li>• Multi-model, multi-product systems</li>
                <li>• Revenue optimization strategies</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                For teams scaling integrated systems or rebuilding fragmented ones.
              </p>
            </Card>
          </div>

          <Card className="bg-primary/30 border-2 border-secondary-purple/30">
            <h3 className="text-2xl font-bold mb-4 text-white">All Programs Include:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <ul className="space-y-2">
                <li>✓ End-to-end hands-on labs</li>
                <li>✓ Architecture review & design sessions</li>
                <li>✓ Reference implementations</li>
                <li>✓ Integration pattern library</li>
              </ul>
              <ul className="space-y-2">
                <li>✓ Unified governance frameworks</li>
                <li>✓ ROI & business case templates</li>
                <li>✓ Post-training support (60 days)</li>
                <li>✓ Recorded sessions (virtual)</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* What Makes This Different */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What Makes This <span className="text-primary-blue">Different</span>
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="outline">
              <h3 className="text-xl font-bold mb-2 text-secondary-purple-light">The Complete System View</h3>
              <p className="text-gray-300">
                Most training teaches tools in isolation. We teach how the entire system works together—data, AI, governance, and business value as one integrated whole.
              </p>
            </Card>

            <Card variant="outline">
              <h3 className="text-xl font-bold mb-2 text-secondary-purple-light">Real Enterprise Patterns</h3>
              <p className="text-gray-300">
                These aren&apos;t theoretical architectures. These are the exact patterns Fortune 500s use to generate billions in revenue from data and AI systems.
              </p>
            </Card>

            <Card variant="outline">
              <h3 className="text-xl font-bold mb-2 text-secondary-purple-light">Your Systems, Your Data</h3>
              <p className="text-gray-300">
                We work with your actual architecture, data, and business challenges. Leave with a concrete plan to integrate or rebuild your systems.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Build Integrated Systems?</h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s discuss where your data and AI systems are today and where they need to be.
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
