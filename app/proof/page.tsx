import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { FileCheck, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Proof — Live Outcomes, Playbooks, and Public Demos',
  description: 'Real outcomes from real businesses. No manufactured case studies. Just transparent results.',
  canonical: '/proof',
});

export default function ProofPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Proof</span> is the Product.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Live outcomes, playbooks, and public demos. No manufactured case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/dashboard" size="lg">
              View Dashboard
            </Button>
            <Button href="/continuum" variant="outline" size="lg">
              Explore Projects
            </Button>
          </div>
        </div>
      </Section>

      {/* What You'll Find Here */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What You&apos;ll Find <span className="text-gradient">Here</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated">
              <div className="flex flex-col items-center text-center">
                <FileCheck className="w-12 h-12 text-accent-pink mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Live Outcomes</h3>
                <p className="text-gray-300">
                  Real metrics from Continuum projects. Updated as results come in.
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="w-12 h-12 text-primary-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Public Playbooks</h3>
                <p className="text-gray-300">
                  Step-by-step guides showing exactly how we achieve results.
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-secondary-purple-light mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Partner Stories</h3>
                <p className="text-gray-300">
                  Real businesses sharing their transparent transformation journeys.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Continuum Projects */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-gradient">Continuum</span> Projects
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              These six are the start. What comes next is decided with the Community.
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Transparent Results Coming</h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                We&apos;re building in public. As beta partners achieve results, you&apos;ll see them here with full context and metrics.
              </p>
              <div className="bg-primary/30 rounded-xl p-6 max-w-3xl mx-auto">
                <p className="text-gray-300">
                  No fake testimonials. No cherry-picked wins. Just real outcomes from real operators testing Xynergy-powered solutions.
                </p>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/continuum" size="lg">
              Explore All Projects
            </Button>
            <Button href="/community#waitlist" variant="outline" size="lg">
              Propose the Next Continuum
            </Button>
          </div>
        </div>
      </Section>

      {/* Dashboard Preview */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Live <span className="text-gradient">Dashboard</span>
            </h2>
            <p className="text-xl text-gray-300">
              Complete transparency. Real-time metrics. No smoke screens.
            </p>
          </div>

          <Card variant="elevated">
            <div className="text-center py-8">
              <p className="text-lg text-gray-300 mb-6">
                Track progress across all Continuum domains, see what&apos;s working (and what isn&apos;t), and watch as we build proof through transparent execution.
              </p>
              <Button href="/dashboard" size="lg">
                View Live Dashboard
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to Be Part of the <span className="text-gradient">Proof?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join as a beta partner and help prove transparency wins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta-program" size="lg">
              Apply for Beta
            </Button>
            <Button href="/solutions/partnership" variant="outline" size="lg">
              Build on Xynergy
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
