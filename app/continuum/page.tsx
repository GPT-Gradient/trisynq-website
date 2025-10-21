import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, BarChart, GraduationCap, Heart, Shield, Building } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { continuumProjects } from '@/data/projects';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'The Continuum: Where Vision Becomes Practice',
  description: 'Our proving ground for transparent AI, data accessibility, and human impact.',
});

const iconMap: Record<string, any> = {
  Search,
  BarChart,
  GraduationCap,
  Heart,
  Shield,
  Building,
};

export default function ContinuumOverviewPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/logos/continuum-logo-with-tagline-primary.png"
              alt="The Continuum - Evolving. Connecting. Proving."
              width={400}
              height={300}
              className="max-w-sm"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Continuum: <span className="text-gradient">Where Vision Becomes Practice.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Every domain is an experiment in transparency, AI accessibility, and human impact.
          </p>

          <div className="bg-primary/50 rounded-2xl p-6 border border-accent-pink/30 backdrop-blur-sm">
            <p className="text-lg md:text-xl font-semibold text-white">
              Every Continuum domain is powered by Xynergy.
            </p>
          </div>
        </div>
      </Section>

      {/* The Strategy Explained */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The <span className="text-gradient">Continuum Strategy</span>
          </h2>

          <Card variant="bordered" className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-blue">The Approach</h3>
            <p className="text-gray-300 mb-4">
              We don&apos;t just claim transparency works—we prove it systematically across multiple domains. Each project validates our methodology in a different context, building an unbreakable chain of evidence.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Why Multiple Domains?</strong> Because one success can be dismissed as luck. Six successes across completely different industries becomes a pattern. An undeniable pattern that changes everything.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <h4 className="text-xl font-bold mb-3 text-accent-pink">The Public Process</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Research and methodology development</li>
                <li>• Partner beta testing (Phase 1-3)</li>
                <li>• Public documentation of results</li>
                <li>• White-label platform creation</li>
                <li>• Community access and implementation</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h4 className="text-xl font-bold mb-3 text-secondary-purple-light">The Evolution</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Each project informs the next</li>
                <li>• Methodology refined across domains</li>
                <li>• Community drives future projects</li>
                <li>• Transparency becomes inevitable</li>
                <li>• Playing field gets leveled</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Current Status Overview */}
      <Section background="medium">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Current Status</span> Across All Projects
          </h2>
          <p className="text-xl text-gray-400">
            From active beta to future planning, here&apos;s where we are
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {continuumProjects.map((project) => {
            const Icon = iconMap[project.icon];
            const statusColors: Record<string, string> = {
              'Phase 1 Beta (First 100)': 'text-green-400 border-green-400/30 bg-green-400/10',
              'Research Phase': 'text-blue-400 border-blue-400/30 bg-blue-400/10',
              'Planning 2025': 'text-purple-400 border-purple-400/30 bg-purple-400/10',
              'Planning Late 2025': 'text-purple-400 border-purple-400/30 bg-purple-400/10',
              'Planning 2026': 'text-pink-400 border-pink-400/30 bg-pink-400/10',
              'Planning Mid 2026': 'text-pink-400 border-pink-400/30 bg-pink-400/10',
            };
            const statusClass = statusColors[project.status] || 'text-gray-400 border-gray-400/30 bg-gray-400/10';

            return (
              <Link key={project.id} href={project.link}>
                <Card variant="bordered" className="hover:border-accent-pink/50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-6">
                    {Icon && <Icon className="w-12 h-12 text-accent-pink flex-shrink-0" />}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                          <p className="text-sm text-primary-blue">{project.tagline}</p>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusClass}`}>
                            {project.status}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold border border-secondary-purple-light/30 bg-secondary-purple-light/10 text-secondary-purple-light">
                            Powered by ClearForge Foundry
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* How Projects Connect */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            How <span className="text-gradient">Projects Connect</span>
          </h2>

          <div className="space-y-6">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Search Foundation</h3>
                  <p className="text-gray-300">Discovery drives everything. If people can&apos;t find you, nothing else matters. Project NEXUS proves authentic expertise can compete with marketing budgets.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary-purple-light">Data Intelligence</h3>
                  <p className="text-gray-300">Once they find you, decisions matter. Data Democracy proves SMBs can make enterprise-quality decisions with the data they already have.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Education Application</h3>
                  <p className="text-gray-300">Learning and growth drive progress. Project No-Cheating proves AI enhances education instead of enabling shortcuts.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary-purple-light">Inclusive Technology</h3>
                  <p className="text-gray-300">Serving all minds unlocks potential. Project CTO&apos;s Heart proves technology adapts to individuals, not vice versa.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Safety Infrastructure</h3>
                  <p className="text-gray-300">Protecting expression enables creativity. Project Safe Spaces proves safety and freedom coexist transparently.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary-purple-light">Industry Transformation</h3>
                  <p className="text-gray-300">Proven business models scale change. Project RE-Connect proves transparency creates competitive advantage in traditional industries.</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 bg-primary/30 rounded-2xl p-8 border border-primary-blue/20">
            <h3 className="text-2xl font-bold mb-4 text-center text-gradient">The Compounding Effect</h3>
            <p className="text-lg text-gray-300 text-center mb-4">
              Each success doesn&apos;t just stand alone—it accelerates the next. Search optimization creates data. Data insights inform education. Educational tools adapt for special needs. Safety principles protect kids. Real estate proves business value.
            </p>
            <p className="text-xl font-bold text-accent-pink text-center">
              The chain becomes unbreakable. Transparency becomes inevitable.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of <span className="text-gradient">Building the Chain</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the first 100 partners proving transparency works across all these domains
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta" size="lg">
              Apply for Beta Partnership
            </Button>
            <Button href="/community/20-percent-army" variant="outline" size="lg">
              Join the 20% Army
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
