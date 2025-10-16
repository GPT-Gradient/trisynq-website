import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Target, Compass, Heart, TrendingUp } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Mission & Vision — Where We\'re Going',
  description: 'Our mission: Democratize enterprise technology. Our vision: Technology that generates revenue instead of consuming budgets. Our purpose: Tear down the walls.',
  canonical: '/about/mission-vision',
});

export default function MissionVisionPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Mission, Vision &amp; <span className="text-gradient">Purpose</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            What we do. Where we&apos;re going. Why we exist.
          </p>
          <p className="text-lg text-gray-400">
            Clear direction. No corporate jargon. Just honest intent.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary-blue/20 rounded-full w-20 h-20 flex items-center justify-center">
              <Target className="w-10 h-10 text-primary-blue" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-gradient">Mission</span> — What We Do
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <p className="text-2xl md:text-3xl text-gray-200 text-center leading-relaxed">
              Democratize enterprise technology capabilities by exposing the patterns, teaching the thinking, and building the systems—transparently, accessibly, and without the enterprise complexity tax.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Expose the Patterns</h3>
              <p className="text-gray-300 text-sm">
                The architectures Fortune 500s use aren&apos;t magic. They&apos;re patterns. We document them openly.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Teach the Thinking</h3>
              <p className="text-gray-300 text-sm">
                Knowledge transfer, not dependency. Learn the &quot;why&quot; behind the systems, not just the &quot;how.&quot;
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Build the Systems</h3>
              <p className="text-gray-300 text-sm">
                Hands-on implementation. Revenue-generating technology. No black boxes.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-accent-pink/20 rounded-full w-20 h-20 flex items-center justify-center">
              <Compass className="w-10 h-10 text-accent-pink" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-gradient">Vision</span> — Where We&apos;re Going
          </h2>

          <Card variant="elevated" className="border-2 border-accent-pink/30 mb-8">
            <p className="text-2xl md:text-3xl text-gray-200 text-center leading-relaxed">
              A world where business technology generates revenue instead of consuming budgets. Where the same capabilities Fortune 500s use to dominate are accessible to the businesses that make up 43% of GDP. Where transparency wins.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Revenue-Generating Technology</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Technology stops being a cost center. Systems that create business value, measurable outcomes, and competitive advantage.
              </p>
              <p className="text-gray-400 text-xs italic">
                What Fortune 500s figured out 15 years ago.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Democratized Enterprise Capabilities</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Small and mid-sized businesses access the same strategic capabilities that enterprises use to dominate—without the complexity tax.
              </p>
              <p className="text-gray-400 text-xs italic">
                43% of US GDP shouldn&apos;t be locked out of enterprise tools.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Transparency as Competitive Advantage</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Companies that document their methods, share their learnings, and expose their reasoning outcompete black-box competitors.
              </p>
              <p className="text-gray-400 text-xs italic">
                Clarity beats complexity. We&apos;re proving it.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Knowledge Liberation</h3>
              <p className="text-gray-300 mb-4 text-sm">
                The patterns behind enterprise systems become common knowledge. No more vendor lock-in. No more artificial complexity.
              </p>
              <p className="text-gray-400 text-xs italic">
                The walls are coming down.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Purpose Section */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-secondary-purple/20 rounded-full w-20 h-20 flex items-center justify-center">
              <Heart className="w-10 h-10 text-secondary-purple-light" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-gradient">Purpose</span> — Why We Exist
          </h2>

          <Card variant="elevated" className="border-2 border-secondary-purple/30 mb-8">
            <p className="text-2xl md:text-3xl text-gray-200 text-center leading-relaxed">
              We&apos;re here because the complexity is artificial, the lock-in is intentional, and the knowledge hoarding is wrong. We&apos;ve seen how the systems actually work. Now we&apos;re tearing down the walls.
            </p>
          </Card>

          <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">The Truth We Know</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                After 20 years building enterprise systems for Fortune 100 companies, we saw the pattern: the same architectures, the same data flows, the same AI patterns—just wrapped in different vendor packaging and priced for enterprise budgets.
              </p>
              <p className="text-lg">
                The complexity isn&apos;t technical. It&apos;s intentional. Vendors profit from opacity. Consultants profit from dependency. The knowledge stays locked behind paywalls and jargon.
              </p>
              <p className="text-lg">
                <strong className="text-white">We&apos;re done with that.</strong>
              </p>
              <p className="text-lg">
                Every business deserves access to the same capabilities that Fortune 500s use to generate billions. Not watered-down versions. Not &quot;SMB-friendly&quot; compromises. The actual patterns. The real thinking.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-3 text-accent-pink">We&apos;ve Seen It</h3>
              <p className="text-gray-300 text-sm">
                20+ years inside Fortune 100 systems. Billions in implementations. We know how it actually works.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">We Can Teach It</h3>
              <p className="text-gray-300 text-sm">
                The patterns are replicable. The thinking is teachable. The complexity is removable.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">We Will Share It</h3>
              <p className="text-gray-300 text-sm">
                Transparently. Accessibly. Without the enterprise price tag or artificial walls.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Success Metrics Section */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary-blue/20 rounded-full w-20 h-20 flex items-center justify-center">
              <TrendingUp className="w-10 h-10 text-primary-blue" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            How We <span className="text-gradient">Measure Success</span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-8">
            These aren&apos;t vanity metrics. They&apos;re the proof that we&apos;re living our mission.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Partner Revenue Generated</h3>
              <p className="text-gray-300 mb-4">
                Not our revenue. <strong className="text-white">Your revenue.</strong> The money our partners make because of systems we built or patterns we taught.
              </p>
              <p className="text-sm text-gray-400">
                If your tech doesn&apos;t generate revenue, what&apos;s the point?
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Knowledge Transferred</h3>
              <p className="text-gray-300 mb-4">
                Certifications earned. Capabilities built. Teams that can operate independently.
              </p>
              <p className="text-sm text-gray-400">
                Success = you don&apos;t need us anymore.
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Complexity Reduced</h3>
              <p className="text-gray-300 mb-4">
                Time-to-value improvements. Implementation speed vs traditional enterprise. Lines of code removed.
              </p>
              <p className="text-sm text-gray-400">
                Simpler is better. Always.
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Transparency Delivered</h3>
              <p className="text-gray-300 mb-4">
                Published learnings. Open results. Documented methodologies. Shared failures.
              </p>
              <p className="text-sm text-gray-400">
                Show the work. Always.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button href="/dashboard" size="lg">
              View Live Metrics
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you believe transparency should win, enterprise capabilities should be accessible, and technology should generate revenue—let&apos;s work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta-program" size="lg">
              Become a Proof Partner
            </Button>
            <Button href="/about/values" variant="outline" size="lg">
              See Our Values
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
