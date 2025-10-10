import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Target, Map, Wrench, TrendingUp, Users, Database, Cpu, CheckCircle } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Consulting Without the Bullshit',
  description: 'We don&apos;t sell time. We sell transformation.',
  canonical: '/solutions/consulting',
});

export default function ConsultingAdvisoryPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Consulting</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Operators-first. We build with your team, transfer knowledge, and make you independent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/transparency" size="lg">
              Transparency Commitment
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact
            </Button>
          </div>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="space-y-4">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <h4 className="text-xl font-bold text-white mb-3">Discovery sprints with recorded reasoning & artifacts</h4>
                <p className="text-gray-300">
                  Every decision documented with full context and rationale.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <h4 className="text-xl font-bold text-white mb-3">Playbook design with measurable checkpoints</h4>
                <p className="text-gray-300">
                  Clear roadmaps with tangible milestones you can track.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20">
                <h4 className="text-xl font-bold text-white mb-3">Deployment with transparent change logs and training</h4>
                <p className="text-gray-300">
                  Your team learns how to own and evolve what we build together.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-accent-pink/10 rounded-xl p-6 border border-accent-pink/30">
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0" />
                <p className="text-lg text-white font-semibold">
                  All deliverables ship with provenance.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Strategic Roadmap */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Map className="w-10 h-10 text-secondary-purple-light flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-white">Strategic Roadmap</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Clear path from current state to competitive advantage
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-primary via-secondary-purple to-primary rounded-xl p-6 border border-secondary-purple-light/30">
                <h4 className="text-xl font-bold text-white mb-3">AI-Powered Competitive Advantage Plan</h4>
                <p className="text-gray-300">
                  How AI gives you the teams enterprises have - marketing, data analysis, research capability, strategy support
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-primary-blue mb-3">Technology Implementation Timeline</h4>
                  <p className="text-gray-300">
                    Prioritized rollout that builds capability systematically
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-primary-blue mb-3">Data Intelligence Activation</h4>
                  <p className="text-gray-300">
                    Making your existing data work like enterprise analytics
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                  <h4 className="text-lg font-bold text-accent-pink mb-3">Market Opportunity Identification</h4>
                  <p className="text-gray-300">
                    Where technology + data + AI create immediate wins
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                  <h4 className="text-lg font-bold text-accent-pink mb-3">Transformation Milestones</h4>
                  <p className="text-gray-300">
                    Measurable progress toward competing on capability
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Implementation Support */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Wrench className="w-10 h-10 text-accent-pink flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-white">Implementation Support</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Enterprise-grade development at SMB scale
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-primary-blue mb-3">Production-Ready From Day One</h4>
                <p className="text-gray-300 mb-4">
                  Not prototypes. Not MVPs. Enterprise-quality systems built to scale.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-primary-blue mb-3">Training Builds Capability</h4>
                <p className="text-gray-300 mb-4">
                  Not dependency. You understand systems, not just use them.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-accent-pink mb-3">Maintenance & Evolution</h4>
                <p className="text-gray-300 mb-4">
                  Systems that grow with your success, not punish it.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-accent-pink mb-3">Ongoing Strategic Guidance</h4>
                <p className="text-gray-300 mb-4">
                  Partnership, not just vendor relationship.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Who This Is For */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who This Is <span className="text-gradient">For</span>
            </h2>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Users className="w-10 h-10 text-secondary-purple-light flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">SMBs Ready for Enterprise Capabilities</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary/30 rounded-xl p-5">
                <p className="text-gray-300 flex items-start gap-2">
                  <span className="text-accent-pink">✓</span>
                  <span>Tired of competing on budget vs. expertise</span>
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-5">
                <p className="text-gray-300 flex items-start gap-2">
                  <span className="text-accent-pink">✓</span>
                  <span>Want data working like enterprise analytics</span>
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-5">
                <p className="text-gray-300 flex items-start gap-2">
                  <span className="text-accent-pink">✓</span>
                  <span>Need AI amplifying their authentic voice</span>
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-5">
                <p className="text-gray-300 flex items-start gap-2">
                  <span className="text-accent-pink">✓</span>
                  <span>Seeking independence from vendor dependency</span>
                </p>
              </div>
            </div>

            <div className="mt-6 bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30">
              <h4 className="text-xl font-bold text-accent-pink mb-3">The 20%</h4>
              <p className="text-white font-semibold">
                Leaders willing to prove transformation works
              </p>
            </div>

            <div className="mt-4 bg-primary-blue/10 rounded-xl p-4 border border-primary-blue/30">
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Qualification:</strong> Not everyone qualifies. Partnership assessment required.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* The Integration Advantage */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-gradient">Integration Advantage</span>
            </h2>
            <p className="text-xl text-gray-300">
              Why combined matters
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="bg-gradient-to-br from-primary via-secondary-purple to-primary rounded-2xl p-8 border border-secondary-purple-light/30 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Enterprises don&apos;t separate these - neither should you
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20 h-full">
                  <TrendingUp className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-3">Technology Enables</h4>
                  <p className="text-gray-300">
                    Data collection and AI implementation
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-primary/30 rounded-2xl p-6 border border-secondary-purple-light/20 h-full">
                  <Database className="w-12 h-12 text-secondary-purple-light mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-3">Data Informs</h4>
                  <p className="text-gray-300">
                    Technology decisions and AI direction
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-primary/30 rounded-2xl p-6 border border-accent-pink/20 h-full">
                  <Cpu className="w-12 h-12 text-accent-pink mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-3">AI Amplifies</h4>
                  <p className="text-gray-300">
                    Technology capability and data insights
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30 text-center">
              <p className="text-xl text-white font-bold">
                The Result: Competing on capability, not fighting with tools
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Investment and Process */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Investment & <span className="text-gradient">Process</span>
            </h2>
          </div>

          <Card variant="elevated">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary-blue text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">1</span>
                  <h4 className="text-xl font-bold text-white">Assessment Phase</h4>
                </div>
                <p className="text-gray-300">
                  Understanding current state and opportunity
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary-blue text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">2</span>
                  <h4 className="text-xl font-bold text-white">Strategy Phase</h4>
                </div>
                <p className="text-gray-300">
                  Roadmap creation and prioritization
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent-pink text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">3</span>
                  <h4 className="text-xl font-bold text-white">Implementation Phase</h4>
                </div>
                <p className="text-gray-300">
                  Build, deploy, train, support
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent-pink text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">4</span>
                  <h4 className="text-xl font-bold text-white">Evolution Phase</h4>
                </div>
                <p className="text-gray-300">
                  Ongoing optimization and capability expansion
                </p>
              </div>
            </div>

            <div className="mt-6 bg-primary-blue/10 rounded-xl p-6 border border-primary-blue/30">
              <h4 className="text-lg font-bold text-white mb-2">Pricing</h4>
              <p className="text-gray-300">
                Custom based on scope - transparency in costs. Partnership terms discussed after we understand fit.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Xynergy Integration */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <Card variant="elevated">
            <div className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple-light/10 rounded-2xl p-8 border border-primary-blue/30">
              <p className="text-xl text-gray-300 mb-6">
                Our consulting runs on Xynergy—so your roadmap, automations, and results are transparent and explainable.
              </p>
              <Button href="/solutions/partnership" size="lg">
                Build on Xynergy
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Level the Playing Field?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s have a conversation about transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Talk to the Forge
            </Button>
            <Button href="/solutions" variant="outline" size="lg">
              View All Solutions
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
