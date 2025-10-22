import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Handshake, Lightbulb, Code, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Partnership That Feeds Growth',
  description: 'We scale ideas, not invoices.',
  canonical: '/solutions/partnership',
});

export default function PartnershipDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Partnership</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Co-build products, automations, and frameworks. Share learnings. Keep the keys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Propose a Build
            </Button>
            <Button href="/data-divide" variant="outline" size="lg">
              The Data Divide
            </Button>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
          </div>

          <Card variant="elevated">
            <div className="space-y-4">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <h4 className="text-xl font-bold text-white mb-3">Define the problem and shared success metrics</h4>
                <p className="text-gray-300">
                  Clear objectives from day one—aligned incentives, measurable outcomes.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <h4 className="text-xl font-bold text-white mb-3">Co-design the architecture (open by default)</h4>
                <p className="text-gray-300">
                  Transparent design process where you understand every decision.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20">
                <h4 className="text-xl font-bold text-white mb-3">Ship with &apos;Proof&apos; baked in—public demos where possible</h4>
                <p className="text-gray-300">
                  Show the world how it works, not just what it does.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Selection Criteria */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Selection <span className="text-gradient">Criteria</span>
            </h2>
            <p className="text-xl text-gray-300">
              Not every idea is a fit. That&apos;s okay.
            </p>
          </div>

          <Card variant="elevated">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Genuine Value</h4>
                </div>
                <p className="text-gray-300">
                  Solutions providing real value to users, not just revenue extraction
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-start gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Clear Monetization</h4>
                </div>
                <p className="text-gray-300">
                  Viable business model with sustainable revenue potential
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20">
                <div className="flex items-start gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary-purple-light flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Mission Alignment</h4>
                </div>
                <p className="text-gray-300">
                  Human amplification philosophy, not replacement or manipulation
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20">
                <div className="flex items-start gap-3 mb-4">
                  <Code className="w-6 h-6 text-secondary-purple-light flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Technical Feasibility</h4>
                </div>
                <p className="text-gray-300">
                  Buildable within reasonable timeframes with existing technology
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20 md:col-span-2">
                <div className="flex items-start gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Market Opportunity</h4>
                </div>
                <p className="text-gray-300">
                  Addressable market and growth potential that makes partnership worthwhile
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Success Framework */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-gradient">Framework</span>
            </h2>
            <p className="text-xl text-gray-300">
              Aligned incentives, shared success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="elevated">
              <div className="bg-gradient-to-br from-accent-pink/20 to-accent-pink/5 rounded-xl p-6 border border-accent-pink/30">
                <h3 className="text-2xl font-bold text-white mb-4">Zero Upfront Costs</h3>
                <p className="text-lg text-gray-300">
                  For qualified partners - we invest in building together
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-xl p-6 border border-primary-blue/30">
                <h3 className="text-2xl font-bold text-white mb-4">Shared Risk/Reward</h3>
                <p className="text-lg text-gray-300">
                  Revenue sharing model with aligned incentives for success
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="bg-gradient-to-br from-secondary-purple-light/20 to-secondary-purple/5 rounded-xl p-6 border border-secondary-purple-light/30">
                <h3 className="text-2xl font-bold text-white mb-4">Partner Control</h3>
                <p className="text-lg text-gray-300">
                  Vision and market positioning remain with partner
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="bg-gradient-to-br from-primary-blue/20 to-secondary-purple/5 rounded-xl p-6 border border-primary-blue/30">
                <h3 className="text-2xl font-bold text-white mb-4">ClearForge Handles</h3>
                <p className="text-lg text-gray-300">
                  All technical risk and implementation complexity
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Partnership Process */}
      <Section background="dark" id="apply">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Partnership <span className="text-gradient">Process</span>
            </h2>
          </div>

          <Card variant="elevated">
            <div className="space-y-6">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-primary-blue text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">1</span>
                  <h4 className="text-xl font-bold text-white">Discovery</h4>
                </div>
                <p className="text-gray-300 ml-14">
                  Idea validation and feasibility assessment - does it solve a real problem?
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-primary-blue text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">2</span>
                  <h4 className="text-xl font-bold text-white">Development</h4>
                </div>
                <p className="text-gray-300 ml-14">
                  Technical execution and testing - building production-ready systems
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-accent-pink text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">3</span>
                  <h4 className="text-xl font-bold text-white">Launch</h4>
                </div>
                <p className="text-gray-300 ml-14">
                  Go-to-market support - making sure the world knows about it
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-accent-pink text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">4</span>
                  <h4 className="text-xl font-bold text-white">Growth</h4>
                </div>
                <p className="text-gray-300 ml-14">
                  Ongoing optimization and expansion - evolving with success
                </p>
              </div>

              <div className="bg-gradient-to-r from-secondary-purple via-primary to-secondary-purple rounded-xl p-6 border border-secondary-purple-light/30">
                <div className="flex items-center gap-4 mb-3">
                  <DollarSign className="w-10 h-10 text-secondary-purple-light flex-shrink-0" />
                  <h4 className="text-xl font-bold text-white">Revenue Sharing</h4>
                </div>
                <p className="text-gray-300">
                  Transparent model based on contribution - discussed during discovery phase
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have an Idea That <span className="text-gradient">Needs Technical Execution?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s explore if partnership makes sense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Discuss Partnership
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
