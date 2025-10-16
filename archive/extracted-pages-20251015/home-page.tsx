import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, BarChart, GraduationCap, Heart, Shield, Building } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import LiveDashboardWidget from '@/components/ui/LiveDashboardWidget';
import CommunityStats from '@/components/ui/CommunityStats';
import { continuumProjects } from '@/data/projects';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'TriSynq AI | Democratizing Enterprise Technology for SMBs',
  description: '43% of U.S. GDP locked out by artificial complexity. We translate enterprise technology, democratize data, and amplify authentic expertise with AI through complete transparency.',
});

const iconMap: Record<string, any> = {
  Search,
  BarChart,
  GraduationCap,
  Heart,
  Shield,
  Building,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">43% of U.S. GDP</span>
            <br />
            Locked Out by Artificial Complexity
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            We spent 20 years building billion-dollar systems for Fortune 100s. Now we&apos;re tearing down the walls that keep small businesses from the same capabilities.
          </p>

          <div className="bg-primary/50 rounded-2xl p-6 mb-8 border border-accent-pink/30 backdrop-blur-sm">
            <p className="text-lg md:text-xl font-semibold text-white">
              Enterprise technology isn&apos;t too complex for SMBs. It&apos;s been deliberately made inaccessible. We&apos;re the translators who speak both languages—and we&apos;re done watching you get locked out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta" size="lg">
              See What You&apos;ve Been Missing
            </Button>
            <Button href="/mission" variant="outline" size="lg">
              Join the Revolution
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            No fancy counters yet - we&apos;re just starting. Stay tuned for tracking our progress.
          </p>
        </div>
      </Section>

      {/* The Problem Section */}
      <Section background="dark">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          The Artificial Barrier That Costs SMBs <span className="text-gradient">Billions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="bordered">
            <h3 className="text-2xl font-bold mb-4 text-primary-blue">Technology Opacity</h3>
            <p className="text-gray-400 mb-4 font-semibold">You can&apos;t use tools you don&apos;t understand</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Enterprise capabilities hidden behind jargon</li>
              <li>• Vendor complexity protecting margins</li>
              <li>• Innovation limited to tech bubble</li>
            </ul>
          </Card>

          <Card variant="bordered">
            <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Data Opacity</h3>
            <p className="text-gray-400 mb-4 font-semibold">You can&apos;t leverage insights you can&apos;t interpret</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Data sitting in silos, unused</li>
              <li>• Enterprise analytics requiring $200K+ salaries</li>
              <li>• Competitive intelligence inaccessible</li>
            </ul>
          </Card>

          <Card variant="bordered">
            <h3 className="text-2xl font-bold mb-4 text-accent-pink">AI Fear</h3>
            <p className="text-gray-400 mb-4 font-semibold">You can&apos;t compete when you&apos;re afraid of the tools</p>
            <ul className="space-y-2 text-gray-300">
              <li>• AI painted as job-killer instead of amplifier</li>
              <li>• Generic content flooding vs. authentic expertise</li>
              <li>• Enterprise AI advantages compounding</li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl font-bold text-accent-pink">
            While you&apos;ve been told AI is dangerous, Fortune 500s have been using it to leave you further behind for 3-5 years.
          </p>
        </div>
      </Section>

      {/* The Solution Section */}
      <Section background="medium">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-gradient">Transparency + Translation + Amplification</span>
        </h2>

        <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
          We don&apos;t replace your expertise. We give you the teams Fortune 500s have.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3 text-primary-blue">Technology Translation</h3>
            <p className="text-gray-300">Enterprise capabilities explained in business terms</p>
          </Card>

          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Data Democratization</h3>
            <p className="text-gray-300">Your existing data working like enterprise analytics</p>
          </Card>

          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3 text-accent-pink">AI Amplification</h3>
            <p className="text-gray-300">Your authentic expertise reaching enterprise scale</p>
          </Card>
        </div>

        <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30">
          <h4 className="text-2xl font-bold mb-6 text-center">Our Evidence</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">20+</p>
              <p className="text-gray-400">Years inside enterprise systems</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">Billions</p>
              <p className="text-gray-400">In implementations we&apos;ve architected</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">100%</p>
              <p className="text-gray-400">Complete transparency in methodology</p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Continuum Preview */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Continuum: Our <span className="text-gradient">Systematic Proof Strategy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-4">
            We don&apos;t just build one solution and hope you believe us. We systematically prove transparency works across multiple domains—one proof at a time.
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Each project adds another link to the unbroken chain of evidence. Each success makes transparency more expected. Each demonstration makes the case stronger.
          </p>
          <p className="text-lg text-accent-pink font-semibold mt-4">
            Starting with these six domains... then expanding to wherever the community identifies the next critical need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {continuumProjects.map((project) => {
            const Icon = iconMap[project.icon];

            // Determine status indicator
            let statusColor = 'bg-blue-500';
            let statusText = project.status;

            if (project.status.includes('Phase 1 Open') || project.status.includes('Launching')) {
              statusColor = 'bg-green-500';
            } else if (project.status.includes('Private Beta') || project.status.includes('Development')) {
              statusColor = 'bg-yellow-500';
            } else if (project.status.includes('Research')) {
              statusColor = 'bg-blue-500';
            }

            return (
              <Link key={project.id} href={project.link}>
                <Card variant="bordered" className="h-full hover:border-accent-pink/50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4">
                    {Icon && <Icon className="w-8 h-8 text-accent-pink flex-shrink-0" />}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-2 h-2 rounded-full ${statusColor} animate-pulse`}></div>
                        <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      </div>
                      <p className="text-sm text-primary-blue mb-2">{project.tagline}</p>
                      <p className="text-gray-400 mb-3">{project.description}</p>
                      <p className="text-xs font-semibold text-gray-300">{statusText}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center bg-primary/30 rounded-2xl p-6 border border-primary-blue/20 mb-6">
          <p className="text-lg text-gray-400 mb-2">
            First Six Domains—Community Drives What&apos;s Next
          </p>
        </div>

        <div className="text-center space-x-4">
          <Button href="/continuum" size="lg">
            Explore the Complete Continuum
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Suggest the Next Domain
          </Button>
        </div>
      </Section>

      {/* Public Dashboard Preview */}
      <Section background="medium">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete <span className="text-gradient">Transparency</span> in Real-Time
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <LiveDashboardWidget />

          <div className="mt-12 bg-background-dark rounded-3xl p-8 border border-primary-blue/30">
            <h4 className="text-xl font-bold mb-4">What You&apos;ll See (When Live)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
              <div>• Beta participants across projects</div>
              <div>• Methodology improvements published</div>
              <div>• Failed experiments and learnings</div>
              <div>• Success metrics with full context</div>
              <div>• Community contributions tracked</div>
              <div>• Financial sustainability progress</div>
            </div>

            <p className="text-accent-pink font-semibold mt-6">
              First platform proving transformation works through public documentation. Find another company showing their failures alongside successes. We&apos;ll wait.
            </p>

            <div className="mt-6 text-center">
              <Button href="/dashboard" variant="outline">
                Stay Tuned for Live Dashboard
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Beta Program Spotlight */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join a Project Beta: <span className="text-gradient">Prove It Works</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Each Continuum project launches with three public beta phases. The earlier you join, the greater the benefits—and the bigger your role in proving transparency works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Phase 1 */}
            <Card variant="elevated" className="border-2 border-accent-pink/50">
              <div className="text-center mb-4">
                <div className="inline-block bg-accent-pink/20 rounded-full px-4 py-2 mb-3">
                  <p className="text-sm font-bold text-accent-pink">Phase 1: The Pioneers</p>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">First 100 per project</h3>
                <p className="text-gray-400 text-sm">The Foundation Builders</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Lifetime access to <strong className="text-white">ALL platforms</strong> (every Continuum project)</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Unlimited affiliate revenue across <strong className="text-white">ALL platforms forever</strong></p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Direct team access for methodology refinement</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Your success proves it for everyone else</p>
                </div>
              </div>

              <div className="bg-primary/30 rounded-xl p-3 mb-4">
                <p className="text-xs text-gray-400 text-center">Investment: Custom per project</p>
                <p className="text-sm font-semibold text-primary-blue text-center mt-1">Project NEXUS - Launching Now</p>
              </div>

              <Button href="/continuum/nexus/apply" className="w-full" size="sm">
                Apply for Phase 1
              </Button>
            </Card>

            {/* Phase 2 */}
            <Card variant="bordered" className="border-primary-blue/30">
              <div className="text-center mb-4">
                <div className="inline-block bg-primary-blue/20 rounded-full px-4 py-2 mb-3">
                  <p className="text-sm font-bold text-primary-blue">Phase 2: The Validators</p>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Next cohort</h3>
                <p className="text-gray-400 text-sm">The Proof Expanders</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Lifetime access to <strong className="text-white">THIS platform</strong></p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Affiliate revenue on <strong className="text-white">THIS platform</strong></p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Implementation support and training</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Higher pricing reflects validated methodology</p>
                </div>
              </div>

              <div className="bg-primary/30 rounded-xl p-3 mb-4">
                <p className="text-xs text-gray-400 text-center">Pricing based on Phase 1 results</p>
                <p className="text-sm font-semibold text-gray-500 text-center mt-1">Opens after Phase 1 completion</p>
              </div>

              <Button href="/beta-program" variant="outline" className="w-full" size="sm">
                Join Waitlist
              </Button>
            </Card>

            {/* Phase 3 */}
            <Card variant="bordered" className="border-secondary-purple-light/30">
              <div className="text-center mb-4">
                <div className="inline-block bg-secondary-purple-light/20 rounded-full px-4 py-2 mb-3">
                  <p className="text-sm font-bold text-secondary-purple-light">Phase 3: The Final Proof</p>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Final cohort</h3>
                <p className="text-gray-400 text-sm">The Scale Confirmers</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary-purple-light mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Lifetime access to <strong className="text-white">THIS platform</strong></p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary-purple-light mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Affiliate revenue on <strong className="text-white">THIS platform</strong></p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary-purple-light mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Standard implementation support</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary-purple-light mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Highest pricing - full methodology proven</p>
                </div>
              </div>

              <div className="bg-primary/30 rounded-xl p-3 mb-4">
                <p className="text-xs text-gray-400 text-center">Pricing based on Phase 2 results</p>
                <p className="text-sm font-semibold text-gray-500 text-center mt-1">Opens after Phase 2 completion</p>
              </div>

              <Button href="/beta-program" variant="outline" className="w-full" size="sm">
                Join Waitlist
              </Button>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-6 mb-8 border border-primary-blue/20 text-center">
            <p className="text-sm text-gray-400">
              After Phase 3, platforms move to standard commercial pricing with subscription model. Beta partners across all phases keep their lifetime access—we don&apos;t play takeaway games.
            </p>
          </div>

          <div className="text-center">
            <Button href="/beta-program" size="lg">
              See Detailed Beta Program Structure
            </Button>
          </div>
        </div>
      </Section>

      {/* The 20% Army Section */}
      <Section background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">20% Army</span>: Building the Movement
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            We work WITH the 20%, build FOR the 80%
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card variant="elevated">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-accent-pink mb-2">The Pioneers</h3>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>Leaders proving transparency beats manipulation</p>
                <p>Innovators willing to test bold approaches</p>
                <p>Early adopters building competitive advantage</p>
              </div>
              <div className="mt-4 p-3 bg-primary/30 rounded-xl">
                <p className="text-xs text-gray-400 text-center">These are the Phase 1 partners across all projects</p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-primary-blue mb-2">The Transformations</h3>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>Real businesses getting real results</p>
                <p>Documented methodology improvements</p>
                <p>Transparent wins and learning from losses</p>
              </div>
              <div className="mt-4 p-3 bg-primary/30 rounded-xl">
                <p className="text-xs text-gray-400 text-center">Success stories coming as Phase 1 progresses</p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-secondary-purple-light mb-2">The Movement</h3>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>Following the journey, watching proof accumulate</p>
                <p>Waiting for validated approaches before jumping in</p>
                <p>Building on proven foundations</p>
              </div>
              <div className="mt-4 p-3 bg-primary/30 rounded-xl">
                <p className="text-xs text-gray-400 text-center">This is everyone else—the 80%</p>
              </div>
            </Card>
          </div>

          <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30 mb-8">
            <h4 className="text-2xl font-bold text-center mb-6 text-white">Ready to be part of the 20%?</h4>
            <p className="text-lg text-gray-300 text-center mb-6">
              Each Continuum project needs pioneers willing to prove it works. The earlier you join, the more you get—and the bigger your impact.
            </p>
            <div className="text-center">
              <Button href="/beta-program" size="lg">
                Explore Current Beta Opportunities
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Social Proof Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Businesses. Real Transformation. <span className="text-gradient">Coming Soon.</span>
          </h2>

          <Card variant="bordered" className="mb-8">
            <p className="text-xl text-gray-300 mb-4">
              We&apos;re just starting. First partners coming on board now.
            </p>

            <div className="bg-primary/30 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-white mb-3">What&apos;s Coming:</h4>
              <ul className="text-left space-y-2 text-gray-400">
                <li>✓ Complete transparency in results documentation</li>
                <li>✓ Real metrics with full context</li>
                <li>✓ Methodology shared openly</li>
                <li>✓ Failures shown alongside successes</li>
              </ul>
            </div>

            <p className="text-gray-400">
              <strong className="text-white">Current Status:</strong> Private beta testing complete with businesses we have relationships with. Public beta partners will have their success documented here.
            </p>
          </Card>

          <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30">
            <p className="text-lg font-semibold text-accent-pink">
              We won&apos;t make up success stories. When they exist, you&apos;ll see them - complete with context, methodology, and honest assessment.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/community/success-stories" variant="outline">
              Check Back for Partner Stories
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
