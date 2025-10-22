import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Team - ClearForge Technologies',
  description: 'Small team, big mission. Meet the people building enterprise-grade products accessible to everyone.',
});

export default function AboutTeamPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Who&apos;s Building This
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            SMALL TEAM, BIG MISSION.
          </p>
        </div>
      </Section>

      {/* Current Team */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Current Team</h2>

          <div className="space-y-6">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="/images/shawn.png"
                    alt="Shawn Sloan"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Shawn Sloan</h3>
                  <p className="text-accent-pink font-semibold mb-4">Founder & CTO</p>
                  <p className="text-gray-300 mb-4">
                    20+ years enterprise architecture, specializing in network automation and
                    large-scale system orchestration. Built billion-dollar infrastructure
                    projects for Fortune 100 companies before deciding to bring enterprise
                    capability to the 90% who were locked out.
                  </p>
                  <p className="text-gray-300">
                    <strong>What I Do:</strong> Strategic architecture, product vision,
                    platform design, and anything requiring deep technical expertise.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="elevated">
                <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Development</h3>
                <p className="text-gray-300">
                  AI-augmented development using Claude Code for implementation, with human
                  oversight and strategic direction.
                </p>
              </Card>

              <Card variant="elevated">
                <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Operations</h3>
                <p className="text-gray-300">
                  Automated infrastructure via Foundry Platform (48+ microservices managing
                  themselves).
                </p>
              </Card>

              <Card variant="elevated">
                <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Content</h3>
                <p className="text-gray-300">
                  AI-assisted writing with human oversight, editing, and quality control.
                </p>
              </Card>

              <Card variant="elevated">
                <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Support</h3>
                <p className="text-gray-300">
                  Founder-led until scale requires dedicated team.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Small Team */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Small Team?</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-gray-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-400">Traditional Approach</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Hire 20 people</li>
                <li>• Burn $2M annually</li>
                <li>• Hope to find product-market fit</li>
                <li>• Run out of money in 18 months</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-primary-blue/50">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Our Approach</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Leverage AI for execution</li>
                <li>• Founder does strategic work</li>
                <li>• Automate everything automatable</li>
                <li>• Build sustainably</li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 border-2 border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-4">What This Means for You</h3>
            <p className="text-lg text-gray-300 mb-4">
              You&apos;re working with founders, not a support queue. Faster decisions, direct
              access, genuine partnership.
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-accent-pink">Trade-off:</strong> We can&apos;t scale support
              instantly. We grow team as revenue allows.
            </p>
          </Card>
        </div>
      </Section>

      {/* Hiring Milestones */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">When We&apos;ll Hire</h2>

          <div className="space-y-6">
            <Card variant="elevated" className="border-l-4 border-l-primary-blue">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-primary-blue">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Milestone 1: $50K MRR</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Customer success manager</li>
                    <li>• Technical support specialist</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-l-secondary-purple">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-secondary-purple-light">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Milestone 2: $100K MRR</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Additional developers</li>
                    <li>• Content/marketing specialist</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-l-accent-pink">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-accent-pink">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Milestone 3: $250K MRR</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Expand engineering team</li>
                    <li>• Sales/partnerships</li>
                    <li>• Operations support</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="mt-12 bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10">
            <p className="text-lg text-gray-300">
              <strong>Transparent Growth:</strong> We grow the team based on revenue, not
              speculation. Every hire is sustainable. You&apos;ll see team expansion match
              product success.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Philosophy */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Philosophy on Team Building</h2>

          <div className="prose prose-invert prose-lg max-w-none">
            <Card variant="elevated" className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">AI Augments, Not Replaces</h3>
              <p className="text-gray-300">
                We use AI extensively for development, content, and operations. But AI
                is a multiplier for human expertise, not a replacement. Strategic
                decisions, quality control, and customer relationships remain human-first.
              </p>
            </Card>

            <Card variant="elevated" className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">
                Sustainable Over Explosive
              </h3>
              <p className="text-gray-300">
                We could raise venture capital, hire aggressively, and burn cash for growth.
                We&apos;re choosing sustainable, profitable growth instead. This means slower
                expansion but long-term stability.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Quality Over Quantity</h3>
              <p className="text-gray-300">
                We&apos;ll hire when revenue supports it, not to hit arbitrary headcount goals.
                Every team member will be needed, valued, and contributing to the mission.
                No empire building, no organizational bloat.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Join Us */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Join the Mission?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re not hiring right now, but we&apos;re always open to conversations with
            people who share our mission of removing artificial complexity barriers.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            If you&apos;re passionate about:<br/>
            • Building enterprise-grade products accessible to everyone<br/>
            • Transparency and sustainable growth<br/>
            • Human amplification over replacement<br/>
            • AI-augmented development<br/><br/>
            Reach out and tell us what you&apos;d bring to the mission.
          </p>
          <Button href="/contact" size="lg">
            Start a Conversation
          </Button>
        </div>
      </Section>
    </>
  );
}
