import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Users, Lightbulb, TrendingUp } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Who We Are',
  description: 'Enterprise expertise meeting small business reality. 50+ combined years building Fortune 100 systems, now democratizing enterprise capabilities through transparent translation.',
  canonical: '/about',
});

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Enterprise Expertise</span>
            <br />
            Meeting Small Business Reality
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            We&apos;re a focused team with 50+ combined years building systems for Fortune 100s. Now we&apos;re using that knowledge to level the playing field.
          </p>
        </div>
      </Section>

      {/* Team Introduction */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Users className="w-10 h-10 text-primary-blue flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Our Team Reality</h2>
                <p className="text-xl text-gray-300 mb-4">
                  We&apos;re a focused team with 50+ combined years building systems for Fortune 100s. Now we&apos;re using that knowledge to level the playing field.
                </p>
              </div>
            </div>

            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Core Philosophy</h3>
              <p className="text-lg text-gray-300">
                The biggest barrier to innovation isn&apos;t technology. It&apos;s the artificial complexity that keeps 90% of creative minds locked out.
              </p>
            </div>

            <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Mission Statement</h3>
              <p className="text-lg text-white font-semibold">
                Democratizing enterprise capabilities through transparent translation across technology, data, and AI.
              </p>
            </div>
          </Card>

          <Card variant="bordered">
            <h3 className="text-2xl font-bold mb-6 text-secondary-purple-light">Team Composition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/30 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3 text-primary-blue">Technologists</h4>
                <p className="text-gray-300">
                  Who understand enterprise systems inside and out
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3 text-primary-blue">Industry Leaders</h4>
                <p className="text-gray-300">
                  Who understand real business needs
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl text-accent-pink font-semibold">
                = Complete translation capability
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* The Unusual Combination */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Not All Technologists. <span className="text-gradient">That&apos;s The Point.</span>
            </h2>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Lightbulb className="w-10 h-10 text-accent-pink flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Philosophy</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Our team includes people who weren&apos;t technical until they were - like our CTO who started as a mechanic.
                </p>
                <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                  <h4 className="text-xl font-bold mb-3 text-primary-blue">Why This Matters</h4>
                  <p className="text-lg text-gray-300">
                    We understand both sides of the curtain. We speak both enterprise technology and business reality.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-white">Translation Capability</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>What enterprises actually do with technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>How to get 80% of capability for 2% of cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Where complexity is necessary vs. manufactured</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>How to maintain authenticity while scaling</span>
                </li>
              </ul>
            </Card>

            <Card variant="bordered" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-secondary-purple-light/30">
              <h3 className="text-xl font-bold mb-4 text-white">Both Sides of the Curtain</h3>
              <div className="space-y-4">
                <div className="bg-background-dark/50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-primary-blue mb-2">Enterprise Technology</p>
                  <p className="text-gray-300">Billion-dollar systems, global networks, Fortune 100 implementations</p>
                </div>
                <div className="bg-background-dark/50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-accent-pink mb-2">Business Reality</p>
                  <p className="text-gray-300">Real-world challenges, budget constraints, practical solutions</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learn More About <span className="text-gradient">Our Story</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how we went from building enterprise systems to democratizing them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/about/founder-story" size="lg">
              Read the Founder Story
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
