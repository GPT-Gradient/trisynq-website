import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Users, Shield, Lightbulb, TrendingUp, Target, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'The 20% Army',
  description: 'We\'re the 20% who believe the world can change — and act like it.',
  canonical: '/community/20-percent',
});

export default function TwentyPercentArmyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The <span className="text-gradient">20% Army.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-6">
            We&apos;re the 20% who believe the world can change — and act like it.
          </p>
          <p className="text-xl text-gray-300">
            If you&apos;re waiting for permission, this isn&apos;t for you.
          </p>
        </div>
      </Section>

      {/* What The 20% Army Represents */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What This <span className="text-gradient">Represents</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More than early adopters. Pioneers proving a truth.
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-12 h-12 text-accent-pink flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">The Core Belief</h3>
                <p className="text-xl text-gray-300 mb-4">
                  Transparency beats manipulation. Every time.
                </p>
                <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                  <p className="text-lg text-gray-300">
                    Tech thrives on manufactured complexity. Vendor lock-in. Opaque pricing. Jargon that excludes. The 20% Army is proving there&apos;s a better way.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <Target className="w-8 h-8 text-primary-blue flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Breaking Barriers</h3>
              </div>
              <p className="text-gray-300">
                Artificial complexity is just that. Artificial. We&apos;re dismantling barriers that never should have existed.
              </p>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-accent-pink flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Validating Approaches</h3>
              </div>
              <p className="text-gray-300">
                Testing transparency in real businesses. Real stakes. Success becomes undeniable proof.
              </p>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-secondary-purple-light flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Leading Change</h3>
              </div>
              <p className="text-gray-300">
                Not just adopting new tech. Changing how transformation happens. Through transparency.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Who They Are */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who <span className="text-gradient">We Are</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specific mindset. Specific mission.
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Not Clients</h3>
              <p className="text-xl text-gray-300">
                Partners. Co-creators. Validators of something bigger.
              </p>
            </div>

            <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20">
              <h4 className="text-xl font-bold mb-6 text-center text-primary-blue">The 20% Army Characteristics</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background-dark/50 rounded-xl p-6">
                  <h5 className="text-lg font-bold mb-3 text-accent-pink">The Challengers</h5>
                  <p className="text-gray-300">
                    Leaders who question &quot;that&apos;s how it&apos;s always been done.&quot; Who see opportunity where others see obstacles.
                  </p>
                </div>

                <div className="bg-background-dark/50 rounded-xl p-6">
                  <h5 className="text-lg font-bold mb-3 text-accent-pink">The Innovators</h5>
                  <p className="text-gray-300">
                    Tired of vendor dependency. Tired of artificial complexity. Who want to understand, not just consume.
                  </p>
                </div>

                <div className="bg-background-dark/50 rounded-xl p-6">
                  <h5 className="text-lg font-bold mb-3 text-accent-pink">The Experts</h5>
                  <p className="text-gray-300">
                    Whose authentic voices get drowned out by marketing budgets. Ready to amplify genuine expertise.
                  </p>
                </div>

                <div className="bg-background-dark/50 rounded-xl p-6">
                  <h5 className="text-lg font-bold mb-3 text-accent-pink">The Transformers</h5>
                  <p className="text-gray-300">
                    Who see AI as amplifier, not replacement. Technology as leverage, not crutch.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="bordered" className="border-accent-pink/30">
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-accent-pink flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">The First Wave</h3>
                <p className="text-lg text-gray-300 mb-4">
                  The brave ones. Partners across search, data, education, safety. Proving transparency works regardless of industry.
                </p>
                <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                  <p className="text-gray-300">
                    Each success strengthens the next. Each validation makes the movement undeniable.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* The Movement&apos;s Impact */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Not measured in numbers. Measured in transformation.
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Beyond Metrics</h3>
              <p className="text-xl text-gray-300">
                Not about conversion rates. About fundamental shifts in how businesses compete.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <Zap className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">Independence Over Dependency</h3>
                  <p className="text-gray-300 mb-3">
                    Breaking free from vendor lock-in. Understanding to decide. Not being sold.
                  </p>
                  <div className="bg-primary/30 rounded-xl p-4">
                    <p className="text-sm text-gray-400 italic">
                      &quot;We finally understand what we&apos;re paying for and why&quot;
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <Shield className="w-10 h-10 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent-pink">Confidence Over Fear</h3>
                  <p className="text-gray-300 mb-3">
                    Using AI authentically. Not fearfully. Amplifying expertise instead of being paralyzed by hype.
                  </p>
                  <div className="bg-primary/30 rounded-xl p-4">
                    <p className="text-sm text-gray-400 italic">
                      &quot;AI isn&apos;t replacing us - it&apos;s finally leveling the playing field&quot;
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <Target className="w-10 h-10 text-secondary-purple-light flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Strategy Over Guesswork</h3>
                  <p className="text-gray-300 mb-3">
                    Opaque data, interpreted. Overwhelming insights, actionable. Guesswork, informed.
                  </p>
                  <div className="bg-primary/30 rounded-xl p-4">
                    <p className="text-sm text-gray-400 italic">
                      &quot;We&apos;re making decisions based on understanding, not hope&quot;
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">Amplification Over Limitation</h3>
                  <p className="text-gray-300 mb-3">
                    Small teams with enterprise capabilities. Authentic expertise cutting through noise. Real value winning.
                  </p>
                  <div className="bg-primary/30 rounded-xl p-4">
                    <p className="text-sm text-gray-400 italic">
                      &quot;We&apos;re finally competing on merit, not marketing budget&quot;
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-secondary-purple-light/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">The Ripple</h3>
              <p className="text-xl text-gray-300 mb-6">
                Every partner who proves it works makes it easier for the next. Success builds momentum. Transformation validates the movement.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-gray-300">
                <span className="font-semibold text-accent-pink">Pioneers prove</span>
                <ArrowRight className="w-5 h-5 text-primary-blue" />
                <span className="font-semibold text-accent-pink">Early adopters validate</span>
                <ArrowRight className="w-5 h-5 text-primary-blue" />
                <span className="font-semibold text-accent-pink">Mass adoption follows</span>
                <ArrowRight className="w-5 h-5 text-primary-blue" />
                <span className="font-semibold text-accent-pink">Industry transforms</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* The Path Forward */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why This <span className="text-gradient">Matters</span>
            </h2>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="bg-primary/30 rounded-xl p-8 border border-accent-pink/20 mb-6">
              <p className="text-xl md:text-2xl text-center text-white mb-4">
                43% of GDP comes from small and mid-sized businesses
              </p>
              <p className="text-lg text-center text-gray-300">
                Systematically excluded from technology advantages by artificial complexity
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-4">
                Not just transforming businesses. Proving the exclusion was never necessary. That transparency works.
              </p>
              <p className="text-lg text-accent-pink font-semibold">
                Paving the road for 43% of the economy to compete on merit.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="bordered">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-pink mb-3">20%</div>
                <h4 className="text-lg font-bold mb-2 text-white">Pioneers</h4>
                <p className="text-gray-300">
                  Proving transparency works in real businesses
                </p>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-3">80%</div>
                <h4 className="text-lg font-bold mb-2 text-white">Beneficiaries</h4>
                <p className="text-gray-300">
                  Following validated paths. Not being guinea pigs.
                </p>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary-purple-light mb-3">100%</div>
                <h4 className="text-lg font-bold mb-2 text-white">Winners</h4>
                <p className="text-gray-300">
                  When transparency becomes inevitable
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Join the Army CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-gradient">20%</span>
            </h2>
            <p className="text-xl text-gray-300">
              Prove transparency beats manipulation
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">What Partnership Means</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-accent-pink">What You Get</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink text-xl">✓</span>
                    <span>Direct access to our team and expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink text-xl">✓</span>
                    <span>Partnership in proving transformation works</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink text-xl">✓</span>
                    <span>Implementation support and transparent translation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink text-xl">✓</span>
                    <span>Public showcase as movement pioneers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink text-xl">✓</span>
                    <span>Community leadership and authority status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink text-xl">✓</span>
                    <span>Lifetime platform access (for beta partners)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-primary-blue">What We Need</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-blue text-xl">•</span>
                    <span>Willingness to challenge the status quo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-blue text-xl">•</span>
                    <span>Honest feedback throughout the process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-blue text-xl">•</span>
                    <span>Patience during refinement and iteration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-blue text-xl">•</span>
                    <span>Partnership mindset, not vendor relationship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-blue text-xl">•</span>
                    <span>Help documenting and sharing results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-blue text-xl">•</span>
                    <span>Commitment to transparent transformation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent-pink/20 to-primary-blue/20 rounded-2xl p-6 border border-accent-pink/30 text-center">
              <p className="text-lg text-white font-semibold">
                Not everyone qualifies. By design. We&apos;re looking for the 20% who will prove the path.
              </p>
            </div>
          </Card>

          <div className="text-center mb-8">
            <Button href="/beta" size="lg" className="mb-4">
              Apply for Beta Partnership
            </Button>
            <p className="text-gray-400">
              Phase 1 applications reviewed within 48 hours
            </p>
          </div>

          <Card variant="bordered" className="border-primary-blue/30">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Not Ready?</h3>
              <p className="text-lg text-gray-300 mb-6">
                That&apos;s fine. Follow the journey. Watch transformations unfold. Benefit when you&apos;re ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/dashboard" variant="outline" size="md">
                  Follow the Movement
                </Button>
                <Button href="/community/beta-partners" variant="ghost" size="md">
                  See Partner Success Stories
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final Message */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto">
          <Card variant="elevated" className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Not Just <span className="text-gradient">a Group</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              A movement. A proof point. Demonstrating that transparency beats manipulation. That authentic expertise cuts through noise. That small businesses compete on merit.
            </p>
            <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
              <p className="text-lg text-white font-semibold">
                Every partner makes the case more undeniable. Every success brings inevitable transformation closer.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-accent-pink text-lg font-semibold">
                Are you the 20% who proves? Or the 80% who benefits?
              </p>
              <p className="text-gray-400 mt-4">
                Either way, we all win.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
