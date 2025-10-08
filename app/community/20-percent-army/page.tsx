import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Users, Shield, Lightbulb, TrendingUp, Target, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'The 20% Army: Pioneers Proving Transparency Works',
  description: 'The 20% Army represents Phase 1 beta partners leading the transformation. Pioneers proving that transparency beats manipulation, paving the way for mass adoption.',
  canonical: '/community/20-percent',
});

export default function TwentyPercentArmyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The <span className="text-gradient">20% Army</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-6">
            Pioneers Proving Transparency Beats Manipulation
          </p>
          <p className="text-xl text-gray-300">
            Phase 1 beta partners leading the transformation that will level the playing field for everyone
          </p>
        </div>
      </Section>

      {/* What The 20% Army Represents */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What the 20% Army <span className="text-gradient">Represents</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More than early adopters. This is a movement of pioneers proving a fundamental truth.
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-12 h-12 text-accent-pink flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">The Core Belief</h3>
                <p className="text-xl text-gray-300 mb-4">
                  Transparency beats manipulation. Every. Single. Time.
                </p>
                <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                  <p className="text-lg text-gray-300">
                    For decades, the technology industry has thrived on manufactured complexity. Vendor lock-in. Opaque pricing. Technical jargon that excludes rather than empowers. The 20% Army is proving there&apos;s a better way.
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
                Proving that artificial complexity is just that - artificial. The 20% are dismantling barriers that never should have existed.
              </p>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-accent-pink flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Validating Approaches</h3>
              </div>
              <p className="text-gray-300">
                Testing transparent translation in real businesses with real stakes. Their success becomes undeniable proof for the 80%.
              </p>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-secondary-purple-light flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Leading Change</h3>
              </div>
              <p className="text-gray-300">
                Not just adopting new technology - fundamentally changing how business transformation happens through radical transparency.
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
              Who the <span className="text-gradient">20% Army</span> Is
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Phase 1 beta partners with a specific mindset and mission
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Not Traditional Clients</h3>
              <p className="text-xl text-gray-300">
                These are partners. Co-creators. Validators of a movement that&apos;s bigger than any single business.
              </p>
            </div>

            <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20">
              <h4 className="text-xl font-bold mb-6 text-center text-primary-blue">The 20% Army Characteristics</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background-dark/50 rounded-xl p-6">
                  <h5 className="text-lg font-bold mb-3 text-accent-pink">The Challengers</h5>
                  <p className="text-gray-300">
                    Leaders who question &quot;that&apos;s how it&apos;s always been done&quot; and see opportunity where others see obstacles
                  </p>
                </div>

                <div className="bg-background-dark/50 rounded-xl p-6">
                  <h5 className="text-lg font-bold mb-3 text-accent-pink">The Innovators</h5>
                  <p className="text-gray-300">
                    Tired of vendor dependency and artificial complexity. They want to understand, not just consume
                  </p>
                </div>

                <div className="bg-background-dark/50 rounded-xl p-6">
                  <h5 className="text-lg font-bold mb-3 text-accent-pink">The Experts</h5>
                  <p className="text-gray-300">
                    Whose authentic voices get drowned out by marketing budgets and paid placements. Ready to amplify genuine expertise
                  </p>
                </div>

                <div className="bg-background-dark/50 rounded-xl p-6">
                  <h5 className="text-lg font-bold mb-3 text-accent-pink">The Transformers</h5>
                  <p className="text-gray-300">
                    Who see technology, data, and AI as amplifiers of human capability, not replacements for human expertise
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="bordered" className="border-accent-pink/30">
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-accent-pink flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Phase 1 Beta Partners</h3>
                <p className="text-lg text-gray-300 mb-4">
                  The first wave. The brave ones. Partners across multiple domains - search, data, education, special needs, digital safety - proving that transparent translation works regardless of industry.
                </p>
                <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                  <p className="text-gray-300">
                    Each success in one domain strengthens the case for the next. Each validation makes the movement more undeniable.
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
              The Movement&apos;s <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Not measured in numbers, but in transformation
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Beyond Metrics</h3>
              <p className="text-xl text-gray-300">
                The impact isn&apos;t about conversion rates or revenue growth. It&apos;s about fundamental shifts in how businesses compete.
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
                    20% Army partners are breaking free from vendor lock-in. They&apos;re gaining the understanding to make informed decisions instead of being sold solutions.
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
                    The 20% are using AI authentically, not fearfully. They&apos;re amplifying their expertise instead of being paralyzed by hype or anxiety.
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
                    Data that was opaque is now interpreted. Insights that were overwhelming are now actionable. Strategy that was guesswork is now informed.
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
                    Small teams competing with enterprise capabilities. Authentic expertise cutting through marketing noise. Real value winning over paid placement.
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
              <h3 className="text-2xl font-bold mb-4 text-white">The Ripple Effect</h3>
              <p className="text-xl text-gray-300 mb-6">
                Every 20% partner who proves transparent translation works makes it easier for the next. Each success builds momentum. Each transformation validates the movement.
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
                The 20% Army isn&apos;t just transforming their own businesses. They&apos;re proving that this exclusion was never necessary. That transparency works. That translation is possible.
              </p>
              <p className="text-lg text-accent-pink font-semibold">
                They&apos;re paving the road for 43% of the economy to compete on merit instead of marketing budget.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="bordered">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-pink mb-3">20%</div>
                <h4 className="text-lg font-bold mb-2 text-white">Pioneers</h4>
                <p className="text-gray-300">
                  Proving transparent translation works in real businesses
                </p>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-3">80%</div>
                <h4 className="text-lg font-bold mb-2 text-white">Beneficiaries</h4>
                <p className="text-gray-300">
                  Following validated paths without being guinea pigs
                </p>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary-purple-light mb-3">100%</div>
                <h4 className="text-lg font-bold mb-2 text-white">Winners</h4>
                <p className="text-gray-300">
                  When transparency becomes inevitable and barriers fall
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
              Join the <span className="text-gradient">20% Army</span>
            </h2>
            <p className="text-xl text-gray-300">
              Be part of the movement proving transparency beats manipulation
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">What Phase 1 Partnership Means</h3>

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
                Not everyone qualifies - and that&apos;s by design. We&apos;re looking for the 20% who will prove the path for the 80%.
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
              <h3 className="text-xl font-bold mb-4 text-white">Not Ready to Be a Pioneer?</h3>
              <p className="text-lg text-gray-300 mb-6">
                That&apos;s completely fine. Follow the journey. Watch transformations unfold transparently. Benefit from proven approaches when you&apos;re ready.
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
              The 20% Army <span className="text-gradient">Isn&apos;t Just a Group</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              It&apos;s a movement. A proof point. A demonstration that transparency beats manipulation, that authentic expertise can cut through marketing noise, that small businesses can compete on merit.
            </p>
            <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
              <p className="text-lg text-white font-semibold">
                Every partner who proves this works makes the case more undeniable. Every success brings us closer to inevitable transformation.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-accent-pink text-lg font-semibold">
                Are you part of the 20% who will prove the path? Or the 80% who will benefit from what they validate?
              </p>
              <p className="text-gray-400 mt-4">
                Either way, we all win when transparency becomes inevitable.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
