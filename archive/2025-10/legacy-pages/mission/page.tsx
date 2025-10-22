import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Target, Zap } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'The Mission: Restore Trust in Technology',
  description: 'Strip away the noise and return power to the people who create value.',
});

export default function ManifestoPage() {
  return (
    <>
      {/* Revolutionary Opening */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Mission: Restore Trust in <span className="text-gradient">Technology</span>.
          </h1>

          <div className="bg-primary/50 rounded-2xl p-6 mb-8 border border-accent-pink/30 backdrop-blur-sm">
            <p className="text-xl md:text-2xl font-semibold text-white">
              We strip away the noise and return power to the people who create value: small businesses, educators, communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Who We Are</h3>
              <p className="text-gray-300">
                Deep enterprise expertise + Real-world industry leadership = Complete translation capability
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">The Mission</h3>
              <p className="text-gray-300">
                Take enterprise-grade capabilities and translate them for creative minds locked out by artificial complexity.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Problem We're Solving */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            The Problem We&apos;re <span className="text-gradient">Solving</span>
          </h2>

          <div className="bg-primary/30 rounded-2xl p-8 mb-12 border border-primary-blue/20">
            <p className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
              43% of GDP
            </p>
            <p className="text-lg text-center text-gray-300">
              Small and mid-sized businesses systematically excluded from technology advantages
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-primary-blue">The Artificial Barriers:</h3>

          <div className="space-y-6 mb-12">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-pink">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Technology Complexity</h4>
                  <p className="text-gray-400">Can&apos;t use tools you don&apos;t understand</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-pink">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Data Opacity</h4>
                  <p className="text-gray-400">Can&apos;t leverage insights you can&apos;t interpret</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-pink">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">AI Fear</h4>
                  <p className="text-gray-400">Can&apos;t compete while afraid of amplification tools</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-background-dark rounded-2xl p-6 border border-accent-pink/30">
            <p className="text-xl font-bold text-center text-white mb-2">The Real Cost</p>
            <p className="text-lg text-center text-gray-300 mb-3">
              Enterprises competing with teams and capabilities SMBs can&apos;t access
            </p>
            <p className="text-lg text-center text-accent-pink font-semibold">
              The Unnecessary Exclusion: Not because SMBs lack capability. Because complexity was manufactured to create moats.
            </p>
          </div>
        </div>
      </Section>

      {/* The Continuum Explained */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            The <span className="text-gradient">Continuum</span> Explained
          </h2>

          <p className="text-xl text-center text-gray-300 mb-12">
            Proving transparency works across multiple domains
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card variant="bordered">
              <Target className="w-12 h-12 text-primary-blue mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">The Strategy</h3>
              <p className="text-gray-300">
                Systematic validation across multiple domains
              </p>
            </Card>

            <Card variant="bordered">
              <Zap className="w-12 h-12 text-accent-pink mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Why Multiple Domains</h3>
              <p className="text-gray-300">
                Each success strengthens the next. Each proof makes the case more undeniable.
              </p>
            </Card>

            <Card variant="bordered">
              <Users className="w-12 h-12 text-secondary-purple-light mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">The Vision</h3>
              <p className="text-gray-300">
                Until transparency becomes inevitable. Until barriers come down. Until playing field is level.
              </p>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20 mb-8">
            <h4 className="text-2xl font-bold mb-6 text-center text-white">The Chain</h4>
            <div className="flex flex-wrap items-center justify-center gap-2 text-gray-300">
              <span className="font-semibold text-primary-blue">Search</span>
              <ArrowRight className="w-5 h-5 text-accent-pink" />
              <span className="font-semibold text-primary-blue">Data</span>
              <ArrowRight className="w-5 h-5 text-accent-pink" />
              <span className="font-semibold text-primary-blue">Education</span>
              <ArrowRight className="w-5 h-5 text-accent-pink" />
              <span className="font-semibold text-primary-blue">Special Needs</span>
              <ArrowRight className="w-5 h-5 text-accent-pink" />
              <span className="font-semibold text-primary-blue">Digital Safety</span>
              <ArrowRight className="w-5 h-5 text-accent-pink" />
              <span className="font-semibold text-primary-blue">Real Estate</span>
              <ArrowRight className="w-5 h-5 text-accent-pink" />
              <span className="font-semibold text-primary-blue">Whatever comes next</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-400 mb-6">
              Each project links to detailed pages showing methodology, progress, and transparent results
            </p>
            <Button href="/continuum" size="lg">
              Explore The Continuum
            </Button>
          </div>
        </div>
      </Section>

      {/* The AI Reality Check */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            The AI <span className="text-gradient">Reality Check</span>
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">The Fear</h3>
              <p className="text-gray-300">
                You&apos;ve been told AI will take jobs, replace authenticity, favor corporations
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">The Reality</h3>
              <p className="text-gray-300">
                Enterprises have been using AI to compound advantages for 3-5 years while you&apos;ve been afraid
              </p>
            </Card>

            <Card variant="elevated" className="bg-primary">
              <h3 className="text-2xl font-bold mb-4 text-white">The Truth</h3>
              <p className="text-lg text-gray-200 mb-4">
                AI replaces the TEAMS enterprises have, not your expertise
              </p>
              <div className="bg-background-dark rounded-xl p-6">
                <p className="text-white font-semibold mb-3">AI gives small businesses:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Marketing teams</li>
                  <li>• Data analysts</li>
                  <li>• Research capability</li>
                  <li>• Strategy support</li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-accent-pink/20 to-primary-blue/20 rounded-2xl p-8 border border-accent-pink/30 mb-8">
            <p className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">
              The Difference
            </p>
            <p className="text-xl text-center text-gray-200">
              AI doesn&apos;t replace you. It amplifies you at enterprise scale.
            </p>
          </div>

          <div className="bg-background-dark rounded-2xl p-6 border border-primary-blue/20 text-center">
            <p className="text-xl font-bold text-accent-pink">
              The Choice: Stay afraid and fall further behind, or understand and compete
            </p>
          </div>
        </div>
      </Section>

      {/* The Movement Call */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Join the <span className="text-gradient">Movement</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Join the 20%</h3>
              <p className="text-gray-300 mb-4">
                Innovators proving transparency works
              </p>
              <Button href="/beta" className="w-full">
                Apply for Beta Partnership
              </Button>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-secondary-purple-light">Follow as the 80%</h3>
              <p className="text-gray-300 mb-4">
                Benefit from validated transformation
              </p>
              <Button href="/community" variant="outline" className="w-full">
                Follow the Journey
              </Button>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-accent-pink">Challenge Us</h3>
              <p className="text-gray-300 mb-4">
                Make our approaches better
              </p>
              <Button href="/contact" variant="outline" className="w-full">
                Get in Touch
              </Button>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Build With Us</h3>
              <p className="text-gray-300 mb-4">
                Partnership over vendor relationships
              </p>
              <Button href="/solutions/partnership" variant="outline" className="w-full">
                Explore Partnership
              </Button>
            </Card>
          </div>

          <div className="bg-background-dark rounded-2xl p-8 border border-accent-pink/30 text-center">
            <p className="text-2xl font-bold mb-4 text-white">Demand Transparency</p>
            <p className="text-lg text-gray-300">
              Everywhere you interact with technology
            </p>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20 text-center mt-8">
            <p className="text-lg text-gray-200">
              ClearForge Foundry is the technical expression of our mission: transparency that people can use.
            </p>
          </div>

          <div className="mt-12 text-center space-y-4">
            <Button href="/mission/transparency" size="lg">
              Read Our Transparency Commitment
            </Button>
            <div>
              <Link href="/mission/economic-liberation" className="text-accent-pink hover:text-accent-pink/80 font-semibold">
                Learn About Economic Liberation →
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
