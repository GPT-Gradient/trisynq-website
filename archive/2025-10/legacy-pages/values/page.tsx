import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Eye, Users, DollarSign, Unlock } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Core Values — What We Stand For',
  description: 'Our guiding principles: Transparency over opacity, knowledge transfer over dependency, revenue generation over cost centers, and accessibility over exclusivity.',
  canonical: '/about/values',
});

export default function ValuesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Core <span className="text-gradient">Values</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            These aren&apos;t aspirational statements. They&apos;re how we work.
          </p>
          <p className="text-lg text-gray-400">
            Every decision, every project, every partnership measured against these principles.
          </p>
        </div>
      </Section>

      {/* Values Grid */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Value 1: Transparency Over Opacity */}
          <Card variant="elevated" className="border-2 border-primary-blue/30">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="bg-primary-blue/20 rounded-full w-20 h-20 flex items-center justify-center">
                  <Eye className="w-10 h-10 text-primary-blue" />
                </div>
              </div>
              <div className="md:col-span-10">
                <h2 className="text-3xl font-bold mb-4 text-primary-blue">1. Transparency Over Opacity</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Show our work. Share our learnings. No black boxes.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What This Means:</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Document methodologies openly, even when they&apos;re not perfect</li>
                      <li>• Share failures alongside successes with full context</li>
                      <li>• No vendor lock-in or proprietary black boxes</li>
                      <li>• Explainable AI and traceable decision-making</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How We Measure It:</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                      <li>✓ Published methodologies per quarter</li>
                      <li>✓ Public dashboard with real metrics (not vanity metrics)</li>
                      <li>✓ Partner access to source logic and reasoning</li>
                      <li>✓ Quarterly transparency reports showing wins AND losses</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                  <p className="text-sm text-gray-300 italic">
                    &quot;Find another company that publishes their failures alongside their successes. We&apos;ll wait.&quot;
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Value 2: Knowledge Transfer Over Dependency */}
          <Card variant="elevated" className="border-2 border-accent-pink/30">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="bg-accent-pink/20 rounded-full w-20 h-20 flex items-center justify-center">
                  <Users className="w-10 h-10 text-accent-pink" />
                </div>
              </div>
              <div className="md:col-span-10">
                <h2 className="text-3xl font-bold mb-4 text-accent-pink">2. Knowledge Transfer Over Dependency</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Teach patterns, not just tools. Build capability, not reliance.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What This Means:</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Training is built into every engagement</li>
                      <li>• Success = you don&apos;t need us anymore</li>
                      <li>• Teach the &quot;why&quot; behind the systems, not just the &quot;how&quot;</li>
                      <li>• Document everything so partners can replicate</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How We Measure It:</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                      <li>✓ Partner teams trained per project</li>
                      <li>✓ Capabilities transferred (measured via assessments)</li>
                      <li>✓ Partners who successfully implement without us</li>
                      <li>✓ Time-to-independence metrics tracked</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/30 rounded-xl p-4 border border-accent-pink/20">
                  <p className="text-sm text-gray-300 italic">
                    &quot;Most consulting creates dependency. We build capability. The best outcome is when you fire us because you can do it yourself.&quot;
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Value 3: Revenue Generation Over Cost Centers */}
          <Card variant="elevated" className="border-2 border-secondary-purple/30">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="bg-secondary-purple/20 rounded-full w-20 h-20 flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-secondary-purple-light" />
                </div>
              </div>
              <div className="md:col-span-10">
                <h2 className="text-3xl font-bold mb-4 text-secondary-purple-light">3. Revenue Generation Over Cost Centers</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Technology should make money, not just cost money.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What This Means:</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Every project targets measurable business outcomes</li>
                      <li>• Prove ROI, don&apos;t just promise it</li>
                      <li>• Build systems that generate revenue, not consume budgets</li>
                      <li>• Measure success by partner outcomes, not features shipped</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How We Measure It:</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                      <li>✓ Partner revenue generated (not our revenue)</li>
                      <li>✓ ROI timelines documented per project</li>
                      <li>✓ Business outcome metrics tracked transparently</li>
                      <li>✓ Cost savings vs revenue generation ratio</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/30 rounded-xl p-4 border border-secondary-purple/20">
                  <p className="text-sm text-gray-300 italic">
                    &quot;Fortune 500s figured this out 15 years ago: tech isn&apos;t a cost center, it&apos;s a revenue engine. We&apos;re tearing down the walls so everyone can access that thinking.&quot;
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Value 4: Accessibility Over Exclusivity */}
          <Card variant="elevated" className="border-2 border-primary-blue/30">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="bg-primary-blue/20 rounded-full w-20 h-20 flex items-center justify-center">
                  <Unlock className="w-10 h-10 text-primary-blue" />
                </div>
              </div>
              <div className="md:col-span-10">
                <h2 className="text-3xl font-bold mb-4 text-primary-blue">4. Accessibility Over Exclusivity</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Enterprise capabilities for all businesses. No complexity tax.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What This Means:</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• The same patterns Fortune 500s use, without the price tag</li>
                      <li>• Remove artificial complexity that protects profit margins</li>
                      <li>• Real solutions at honest prices</li>
                      <li>• Built for the 43% of GDP that small/mid businesses represent</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How We Measure It:</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                      <li>✓ Average time-to-value vs enterprise implementations</li>
                      <li>✓ Complexity reduction metrics per engagement</li>
                      <li>✓ Cost per capability vs traditional enterprise</li>
                      <li>✓ Partner size distribution (SMB vs Enterprise)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                  <p className="text-sm text-gray-300 italic">
                    &quot;The complexity is artificial. The lock-in is intentional. The knowledge hoarding is wrong. We&apos;re tearing down the walls.&quot;
                  </p>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </Section>

      {/* Transparency Report CTA */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How We <span className="text-gradient">Report</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            These values mean nothing without accountability. Here&apos;s how we track ourselves:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Quarterly Transparency Reports</h3>
              <p className="text-gray-300 text-sm">
                Published metrics against each value. Wins, losses, and learnings with full context.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Public Dashboard</h3>
              <p className="text-gray-300 text-sm">
                Real-time metrics on partner outcomes, knowledge transfers, and methodology improvements.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Published Case Studies</h3>
              <p className="text-gray-300 text-sm">
                With partner permission, full documentation of projects—methods, outcomes, and lessons.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Community Learning Shares</h3>
              <p className="text-gray-300 text-sm">
                Regular sessions where we share what we&apos;re learning, testing, and building.
              </p>
            </Card>
          </div>

          <div className="space-x-4">
            <Button href="/dashboard" size="lg">
              View Dashboard
            </Button>
            <Button href="/about/culture" variant="outline" size="lg">
              Our Culture
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work With <span className="text-gradient">People Who Mean It</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If these values resonate, let&apos;s talk about how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta-program" size="lg">
              Become a Proof Partner
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Start a Conversation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
