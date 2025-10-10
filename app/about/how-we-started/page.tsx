import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Flame, MapPin, Building2, Zap } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'How We Started.',
  description: 'It didn&apos;t start with AI. It started with burnout — and a refusal to accept complexity as normal.',
  canonical: '/about/how-we-started',
});

export default function FounderStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How We Started.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            It didn&apos;t start with AI. It started with burnout — and a refusal to accept complexity as normal.
          </p>
        </div>
      </Section>

      {/* The Spark That Forged the Company */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              The Spark That Forged <span className="text-gradient">the Company</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-300">
                ClearForge was born from frustration: brilliant people trapped by systems that complicated their work.
              </p>
              <p className="text-xl text-gray-300">
                Frustration became obsession. Obsession became vision. Vision became ClearForge.
              </p>
            </div>
          </Card>

          {/* Collaboration Became ClearForge */}
          <Card variant="elevated">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Collaboration Became <span className="text-gradient">ClearForge</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-300">
                One of our founders started reaching out to technologists and industry leaders who believed technology should be transparent and empowering.
              </p>
              <p className="text-xl text-gray-300">
                That collaboration became ClearForge — and Xynergy became the engine.
              </p>
              <div className="text-center mt-8">
                <Button href="/about/founder-story-complete" variant="outline" size="lg">
                  Read the Full Story
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Act I - The Enterprise Years */}
      <Section background="medium" id="full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Act I — <span className="text-gradient">The Enterprise Years</span>
            </h2>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-10 h-10 text-primary-blue flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Mastering global systems. Watching them fail small businesses.</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Power without clarity is power wasted.
                </p>
              </div>
            </div>

            <div className="bg-primary/30 rounded-2xl p-6 border border-accent-pink/30 mb-6">
              <h4 className="text-xl font-bold mb-3 text-accent-pink">From Mechanic to Enterprise Architect</h4>
              <p className="text-lg text-gray-300">
                Firefighter → Tow truck driver → Mechanic → Enterprise tech. Six months after joining helpdesk, I was in IBM boardrooms. Not for tech knowledge — for operations understanding.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-secondary-purple-light">20 Years Behind the Curtain</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background-dark rounded-xl p-5 border border-primary-blue/20">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white mb-2">Global networks spanning continents</p>
                      <p className="text-sm text-gray-400">Building infrastructure at enterprise scale</p>
                    </div>
                  </div>
                </div>
                <div className="bg-background-dark rounded-xl p-5 border border-primary-blue/20">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white mb-2">Professional sports stadiums</p>
                      <p className="text-sm text-gray-400">Mission-critical systems under extreme pressure</p>
                    </div>
                  </div>
                </div>
                <div className="bg-background-dark rounded-xl p-5 border border-primary-blue/20">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white mb-2">Federal agencies (off-grid buildings)</p>
                      <p className="text-sm text-gray-400">Security-critical implementations</p>
                    </div>
                  </div>
                </div>
                <div className="bg-background-dark rounded-xl p-5 border border-primary-blue/20">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white mb-2">Financial institutions</p>
                      <p className="text-sm text-gray-400">High-stakes systems requiring perfection</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center bg-gradient-to-r from-primary-blue/20 to-secondary-purple/20 rounded-2xl p-6 border border-primary-blue/30">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">Billions</p>
                <p className="text-gray-300">In implementations I&apos;ve architected</p>
              </div>
            </div>
          </Card>

          <Card variant="bordered" className="border-accent-pink/30">
            <div className="flex items-start gap-4">
              <Flame className="w-10 h-10 text-accent-pink flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent-pink">The Systematic Lockout</h3>
                <p className="text-xl text-gray-300">
                  The whole time, I watched them keep everyone else out. Not maliciously - economically.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Act II - The Awakening */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Act II — <span className="text-gradient">The Awakening</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-6">
                <Zap className="w-10 h-10 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Transparency isn&apos;t a feature; it&apos;s the foundation.</h3>
                  <p className="text-xl text-gray-300 mb-4">
                    If people can&apos;t see how it works, they can&apos;t trust it.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered" className="border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">The Layoff</h3>
              <div className="space-y-4">
                <div className="bg-primary/30 rounded-xl p-6">
                  <p className="text-lg text-gray-300">
                    135% of target. Awards. Then unemployed at 10:30 AM on Friday.
                  </p>
                </div>
                <div className="bg-background-dark/50 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-3 text-secondary-purple-light">The Revelation</h4>
                  <p className="text-lg text-gray-300 italic">
                    &quot;First networking event, I walked out furious. These people account for 43% of GDP and don&apos;t even know what technology can do.&quot;
                  </p>
                </div>
                <div className="bg-background-dark/50 rounded-xl p-6">
                  <p className="text-lg text-gray-300">
                    We productized that knowledge and locked it away.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Act III - The Rebellion */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Act III — <span className="text-gradient">The Rebellion</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card variant="bordered" className="bg-gradient-to-br from-accent-pink/10 to-secondary-purple/10 border-accent-pink/30">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Leaving corporate comfort to build the forge.</h3>
                <p className="text-2xl md:text-3xl font-bold text-accent-pink mb-6">
                  &quot;Nope. This stops. NOW.&quot;
                </p>
                <div className="bg-background-dark/70 rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-3 text-secondary-purple-light">Not Another Company</h4>
                  <p className="text-lg text-gray-300">
                    I didn&apos;t want to build another company. I wanted to fix what broke trust in technology.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Full Story CTA */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <Card variant="bordered" className="border-accent-pink/50 bg-gradient-to-br from-accent-pink/10 to-primary-blue/10">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Want the unfiltered, 20-year journey?</h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                From mechanic&apos;s hands to billion-dollar systems to walking out of that networking event absolutely furious... the complete story of why ClearForge exists.
              </p>
              <Button href="/about/founder-story-complete" size="lg">
                Read the Complete Story
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* What This Means */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">What This Journey Means for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/30 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-3 text-primary-blue">I&apos;ve Seen Both Sides</h4>
                <p className="text-gray-300">
                  From fixing cars to architecting billion-dollar systems - I understand both the technical and the practical.
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-3 text-primary-blue">I Know What&apos;s Possible</h4>
                <p className="text-gray-300">
                  20 years building enterprise systems means I know exactly what you&apos;re being locked out of.
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-3 text-accent-pink">I Know The Barriers Are Artificial</h4>
                <p className="text-gray-300">
                  The complexity keeping you out isn&apos;t necessary - it&apos;s manufactured to protect margins.
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-3 text-accent-pink">I&apos;m Done Watching</h4>
                <p className="text-gray-300">
                  This isn&apos;t a business opportunity. It&apos;s a mission to tear down walls that should never have existed.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the <span className="text-gradient">Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            This journey led to a mission. Be part of tearing down the barriers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta" size="lg">
              Apply for Beta Partnership
            </Button>
            <Button href="/about/team-philosophy" variant="outline" size="lg">
              Our Values & Philosophy
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
