import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Target, Users, TrendingUp, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Who We Are',
  description: 'Technologists, translators, and unapologetic simplifiers.',
});

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Who We <span className="text-gradient">Are</span>.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Technologists, translators, and unapologetic simplifiers.
          </p>

          <p className="text-xl md:text-2xl text-white font-semibold">
            We measure success in reduced friction and increased trust.
          </p>
        </div>
      </Section>

      {/* Content Sections - Cards with Links */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

            {/* Our Story Card */}
            <Card variant="elevated" className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-10 h-10 text-accent-pink" />
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
              </div>

              <p className="text-lg text-gray-300 mb-6 flex-grow">
                How a fired enterprise architect became a revolutionary. From building enterprise systems to breaking down the barriers that keep SMBs locked out of enterprise capabilities.
              </p>

              <div className="space-y-4">
                <Link
                  href="/about/how-we-started"
                  className="flex items-center justify-between p-4 bg-background-dark rounded-xl border border-primary-blue/30 hover:border-accent-pink/50 transition-all group"
                >
                  <span className="text-primary-blue font-semibold group-hover:text-accent-pink transition-colors">
                    Read Founder Story
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary-blue group-hover:text-accent-pink transition-colors" />
                </Link>

                <Link
                  href="/about/founder-story-complete"
                  className="flex items-center justify-between p-4 bg-background-dark rounded-xl border border-primary-blue/30 hover:border-accent-pink/50 transition-all group"
                >
                  <span className="text-primary-blue font-semibold group-hover:text-accent-pink transition-colors">
                    Complete Journey
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary-blue group-hover:text-accent-pink transition-colors" />
                </Link>
              </div>
            </Card>

            {/* Our Mission Card */}
            <Card variant="elevated" className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-10 h-10 text-primary-blue" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>

              <p className="text-lg text-gray-300 mb-6 flex-grow">
                Democratizing enterprise capabilities through transparent translation. We disrupt through clarity, not complexity. Our mission is to make enterprise-grade technology accessible to everyone.
              </p>

              <div className="space-y-4">
                <Link
                  href="/mission"
                  className="flex items-center justify-between p-4 bg-background-dark rounded-xl border border-primary-blue/30 hover:border-accent-pink/50 transition-all group"
                >
                  <span className="text-primary-blue font-semibold group-hover:text-accent-pink transition-colors">
                    The Full Manifesto
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary-blue group-hover:text-accent-pink transition-colors" />
                </Link>
              </div>
            </Card>

            {/* Our Team Card */}
            <Card variant="elevated" className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-10 h-10 text-secondary-purple-light" />
                <h2 className="text-3xl font-bold text-white">Our Team</h2>
              </div>

              <p className="text-lg text-gray-300 mb-6 flex-grow">
                Technologists + Industry leaders = Complete translation. We combine deep enterprise expertise with real-world industry leadership to translate complex technology into actionable solutions.
              </p>

              <div className="space-y-4">
                <Link
                  href="/about/team-philosophy"
                  className="flex items-center justify-between p-4 bg-background-dark rounded-xl border border-primary-blue/30 hover:border-accent-pink/50 transition-all group"
                >
                  <span className="text-primary-blue font-semibold group-hover:text-accent-pink transition-colors">
                    Meet the Team
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary-blue group-hover:text-accent-pink transition-colors" />
                </Link>
              </div>
            </Card>

            {/* The Continuum Card */}
            <Card variant="elevated" className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-10 h-10 text-accent-pink" />
                <h2 className="text-3xl font-bold text-white">The Continuum</h2>
              </div>

              <p className="text-lg text-gray-300 mb-6 flex-grow">
                Systematic proof that transparency works, one domain at a time. Each project validates our approach and strengthens the next, building undeniable evidence for a transparent future.
              </p>

              <div className="space-y-4">
                <Link
                  href="/continuum"
                  className="flex items-center justify-between p-4 bg-background-dark rounded-xl border border-primary-blue/30 hover:border-accent-pink/50 transition-all group"
                >
                  <span className="text-primary-blue font-semibold group-hover:text-accent-pink transition-colors">
                    Explore the Continuum
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary-blue group-hover:text-accent-pink transition-colors" />
                </Link>
              </div>
            </Card>

          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Work With Us?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Join the 20% of innovators proving transparency works, or follow as the 80% who benefit from validated transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta-program" size="lg">
              Apply for Beta Partnership
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
