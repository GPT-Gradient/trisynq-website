import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { CheckCircle, Users, Award, Target, ArrowRight, AlertCircle, X } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Beta Program',
  description: 'Eligibility, expectations, and how we measure progress.',
  canonical: '/beta-program',
});

interface ProjectStatus {
  name: string;
  description: string;
  status: string;
  statusColor: string;
  phase1Details: string;
  phase1Investment: string;
  phase2Investment: string;
  phase3Investment: string;
  ctaText: string;
  ctaLink: string;
}

const projects: ProjectStatus[] = [
  {
    name: 'Project NEXUS',
    description: 'Neural EXpert Unified Search - Transparent search optimization across all modalities',
    status: '🟢 Launching Phase 1 Beta',
    statusColor: 'bg-green-400/20 border-green-400/30 text-green-400',
    phase1Details: 'XX/100 spots available - Proving transparent search optimization beats black-box manipulation',
    phase1Investment: 'Partnership terms discussed during qualification',
    phase2Investment: 'TBD based on Phase 1 proof data',
    phase3Investment: 'TBD based on Phase 2 proof data',
    ctaText: 'Apply for Phase 1',
    ctaLink: '/continuum/nexus/apply',
  },
  {
    name: 'Project RE-Connect',
    description: 'Real Estate Transparency - Breaking the MLS cartel through data democratization',
    status: '🟢 Phase 1 Opens 2025',
    statusColor: 'bg-green-400/20 border-green-400/30 text-green-400',
    phase1Details: 'Join waitlist for 2025 launch - First 100 partners get lifetime access to ALL platforms',
    phase1Investment: 'Custom per partner (disclosed during qualification)',
    phase2Investment: 'TBD after Phase 1 validation',
    phase3Investment: 'TBD after Phase 2 validation',
    ctaText: 'Join Phase 1 Waitlist',
    ctaLink: '/beta-program',
  },
  {
    name: 'Project No-Cheating',
    description: 'Educational AI - Detecting AI-generated work while preserving student privacy',
    status: '🟡 Private Beta Testing',
    statusColor: 'bg-yellow-400/20 border-yellow-400/30 text-yellow-400',
    phase1Details: 'Opens after private beta validation - Testing complete methodology before public launch',
    phase1Investment: 'To be announced upon Phase 1 opening',
    phase2Investment: 'TBD based on Phase 1 results',
    phase3Investment: 'TBD based on Phase 2 results',
    ctaText: 'Join Phase 1 Waitlist',
    ctaLink: '/beta-program',
  },
  {
    name: 'Project CTO\'s Heart',
    description: 'Special Needs Technology - AI-powered tools for families supporting special needs individuals',
    status: '🟡 In Development',
    statusColor: 'bg-yellow-400/20 border-yellow-400/30 text-yellow-400',
    phase1Details: 'Opens late 2025 - Building transparent AI amplification for underserved families',
    phase1Investment: 'To be announced closer to Phase 1 launch',
    phase2Investment: 'TBD after Phase 1 completion',
    phase3Investment: 'TBD after Phase 2 completion',
    ctaText: 'Join Phase 1 Waitlist',
    ctaLink: '/beta-program',
  },
  {
    name: 'Project Safe Spaces',
    description: 'Kids Digital Safety - Protecting children online while preserving their privacy',
    status: '🔵 Research Phase',
    statusColor: 'bg-blue-400/20 border-blue-400/30 text-blue-400',
    phase1Details: 'Opens 2026 - Deep research into privacy-preserving child protection',
    phase1Investment: 'Timeline and investment TBD',
    phase2Investment: 'TBD after Phase 1',
    phase3Investment: 'TBD after Phase 2',
    ctaText: 'Join Phase 1 Waitlist',
    ctaLink: '/beta-program',
  },
  {
    name: 'Data Democracy',
    description: 'Analytics for SMBs - Enterprise-level analytics accessible to small businesses',
    status: '🔵 Research Phase',
    statusColor: 'bg-blue-400/20 border-blue-400/30 text-blue-400',
    phase1Details: 'Timeline TBD - Democratizing data capabilities for the 20%',
    phase1Investment: 'To be determined',
    phase2Investment: 'TBD after Phase 1',
    phase3Investment: 'TBD after Phase 2',
    ctaText: 'Join Phase 1 Waitlist',
    ctaLink: '/beta-program',
  },
];

export default function BetaProgramHubPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Beta Program.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Eligibility, expectations, and how we measure progress.
          </p>
        </div>
      </Section>

      {/* How Beta Programs Work */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Eligibility</span>
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-300">
              Operators. Builders. No passengers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Phase 1 */}
            <Card variant="elevated" className="border-accent-pink/30">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-accent-pink/20 p-3 rounded-xl">
                  <span className="text-2xl font-bold text-accent-pink">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent-pink">The Pioneers</h3>
                  <p className="text-sm text-gray-400">First 100</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Private beta testing complete</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Public Phase 1 validates methodology</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Maximum benefits for maximum risk</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-sm font-semibold text-white">Lifetime access to ALL platforms</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-sm font-semibold text-white">Unlimited affiliate revenue across ALL projects</p>
                </div>
              </div>
            </Card>

            {/* Phase 2 */}
            <Card variant="elevated" className="border-secondary-purple-light/30">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-secondary-purple-light/20 p-3 rounded-xl">
                  <span className="text-2xl font-bold text-secondary-purple-light">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-purple-light">The Validators</h3>
                  <p className="text-sm text-gray-400">Next Cohort</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary-purple-light mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Phase 1 proof data available</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary-purple-light mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Reduced risk, reduced benefits</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-sm font-semibold text-white">Lifetime access to THIS platform</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-sm font-semibold text-white">Affiliate revenue on THIS platform</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary-purple-light mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Higher pricing reflects validation</p>
                </div>
              </div>
            </Card>

            {/* Phase 3 */}
            <Card variant="elevated" className="border-primary-blue/30">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-primary-blue/20 p-3 rounded-xl">
                  <span className="text-2xl font-bold text-primary-blue">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-blue">The Final Proof</h3>
                  <p className="text-sm text-gray-400">Final Cohort</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Phase 1 + 2 proof data available</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Methodology fully validated</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-sm font-semibold text-white">Lifetime access to THIS platform</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-sm font-semibold text-white">Affiliate revenue on THIS platform</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Highest pricing - risk nearly eliminated</p>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="bordered" className="bg-background-dark">
            <h3 className="text-xl font-bold mb-4 text-white">After Phase 3: Commercial Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <X className="w-5 h-5 text-gray-500 mt-0.5" />
                <p className="text-gray-400">Subscription model</p>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-5 h-5 text-gray-500 mt-0.5" />
                <p className="text-gray-400">No lifetime access</p>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-5 h-5 text-gray-500 mt-0.5" />
                <p className="text-gray-400">Standard commercial terms</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Current Beta Opportunities */}
      <Section background="medium">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Current Beta <span className="text-gradient">Opportunities</span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-12">
            Explore all 6 Continuum projects and their current beta status
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} variant="elevated">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                  <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${project.statusColor}`}>
                    <AlertCircle className="w-4 h-4" />
                    <span className="font-semibold text-sm">{project.status}</span>
                  </div>
                </div>

                <div className="bg-background-dark/50 rounded-xl p-4 mb-4">
                  <h4 className="text-sm font-bold text-primary-blue mb-2">Phase 1 Status:</h4>
                  <p className="text-sm text-gray-300">{project.phase1Details}</p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Phase 1 Investment:</span>
                    <span className="text-sm font-semibold text-white">{project.phase1Investment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Phase 2 Investment:</span>
                    <span className="text-sm font-semibold text-gray-500">{project.phase2Investment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Phase 3 Investment:</span>
                    <span className="text-sm font-semibold text-gray-500">{project.phase3Investment}</span>
                  </div>
                </div>

                <Button href={project.ctaLink} variant="primary" className="w-full">
                  {project.ctaText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Join Beta */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Expectations</span>
          </h2>

          <p className="text-2xl text-center text-gray-300 mb-12">
            We ship. You ship. We learn together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card variant="elevated" className="border-accent-pink/30">
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-10 h-10 text-accent-pink flex-shrink-0" />
                <h3 className="text-2xl font-bold text-accent-pink">Phase 1 Partners Get</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Shape methodology development</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Your success proves it for everyone</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Public success showcase (with permission)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Industry authority positioning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Direct team access</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Partnership in building something bigger</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-primary-blue/30">
              <div className="flex items-start gap-4 mb-6">
                <Award className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <h3 className="text-2xl font-bold text-primary-blue">Phase 2 & 3 Partners Get</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Validated methodology at lower risk</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Lifetime platform access</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Ongoing affiliate income</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Implementation support</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Success community access</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Qualification Reality Check */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Measurement</span>
          </h2>

          <p className="text-2xl text-center text-gray-300 mb-12">
            Proof beats promises. We track outcomes, not vanity.
          </p>

          <Card variant="bordered" className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">We&apos;re Looking for the 20%</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Leaders willing to test bold approaches</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Innovators tired of vendor dependency</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Businesses valuing transformation over hype</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Partners willing to document journey</p>
                </div>
              </div>
            </div>

            <div className="bg-background-dark rounded-2xl p-6 border border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-gray-400">If You&apos;re Seeking:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400">Passive solutions without participation</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400">Guaranteed outcomes without risk</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400">Another vendor relationship</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400">Quick fixes or magic bullets</p>
                </div>
              </div>
              <p className="text-gray-400 mt-6 text-center">
                ...this probably isn&apos;t the right fit.
              </p>
            </div>
          </Card>

          <div className="text-center">
            <Button href="/beta" size="lg">
              Apply Anyway - Let&apos;s Find Out
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Target className="w-12 h-12 text-accent-pink" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Prove Something?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join a beta program and help build the transparent alternative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/continuum/nexus" size="lg">
              Apply for NEXUS Phase 1
            </Button>
            <Button href="/beta" variant="outline" size="lg">
              Join General Waitlist
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
