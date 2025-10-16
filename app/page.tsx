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
  title: 'Tech Isn\'t a Cost Center. It\'s a Revenue Engine.',
  description: 'Fortune 500s figured this out 15 years ago. We tear down the walls and show you how enterprise tech generates revenue—without the enterprise price tag.',
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
            Tech Isn&apos;t a <span className="text-gradient">Cost Center</span>.<br />
            It&apos;s a <span className="text-gradient">Revenue Engine</span>.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Fortune 500s figured this out 15 years ago. They stopped buying tools and started building systems that generate revenue.
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-8">
            We tear down the walls. Show you how enterprise tech actually works. Build you the same revenue-generating systems—without the enterprise price tag or complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta-program" size="lg">
              See If You Qualify
            </Button>
            <Button href="/continuum/nexus" variant="outline" size="lg">
              Show Me How It Works
            </Button>
          </div>
        </div>
      </Section>

      {/* Xynergy Feature Section */}
      <Section background="dark" id="xynergy_feature">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Meet Xynergy — The Engine Behind Everything.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built because black-box AI wasn&apos;t enough. Xynergy shows its logic, cites its sources, and gets work done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card variant="bordered" className="text-center">
              <h3 className="text-lg font-bold text-primary-blue mb-2">Research Engine</h3>
              <p className="text-sm text-gray-400">surfaces insights before you ask.</p>
            </Card>
            <Card variant="bordered" className="text-center">
              <h3 className="text-lg font-bold text-primary-blue mb-2">Content Engine</h3>
              <p className="text-sm text-gray-400">generates, scores, and refines with feedback.</p>
            </Card>
            <Card variant="bordered" className="text-center">
              <h3 className="text-lg font-bold text-primary-blue mb-2">Campaign Engine</h3>
              <p className="text-sm text-gray-400">amplifies what works, pauses what doesn&apos;t.</p>
            </Card>
            <Card variant="bordered" className="text-center">
              <h3 className="text-lg font-bold text-primary-blue mb-2">Automation Engine</h3>
              <p className="text-sm text-gray-400">executes approved workflows in real time.</p>
            </Card>
            <Card variant="bordered" className="text-center">
              <h3 className="text-lg font-bold text-secondary-purple-light mb-2">Insights Engine</h3>
              <p className="text-sm text-gray-400">detects patterns and opportunities early.</p>
            </Card>
            <Card variant="bordered" className="text-center">
              <h3 className="text-lg font-bold text-secondary-purple-light mb-2">AI Assistant</h3>
              <p className="text-sm text-gray-400">runs tasks in the background and reports results.</p>
            </Card>
            <Card variant="bordered" className="text-center">
              <h3 className="text-lg font-bold text-accent-pink mb-2">Governance Engine</h3>
              <p className="text-sm text-gray-400">logs decisions, sources, and context.</p>
            </Card>
            <Card variant="bordered" className="text-center">
              <h3 className="text-lg font-bold text-accent-pink mb-2">Learning Engine</h3>
              <p className="text-sm text-gray-400">improves from every outcome and shares what&apos;s learned.</p>
            </Card>
          </div>

          <div className="text-center">
            <Button href="/xynergy" size="lg">
              See the Power
            </Button>
          </div>
        </div>
      </Section>

      {/* The 20% Who Lead Change */}
      <Section background="medium" id="twenty_percent_army">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-gradient">20% Who Lead Change</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
              You&apos;re not afraid to test new approaches. You understand that enterprise capabilities shouldn&apos;t require enterprise budgets.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Join the leaders who are proving transparency wins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Early Access to Xynergy CORE</h3>
              <p className="text-gray-300 mb-4">
                The framework Fortune 500s use to generate billions—now accessible without the enterprise complexity tax.
              </p>
              <p className="text-sm text-gray-400">
                Build contextual orchestration and reasoning into your systems.
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Proof Partner Opportunities</h3>
              <p className="text-gray-300 mb-4">
                Work directly with our team. Help validate methodologies. Share learnings, keep the keys.
              </p>
              <p className="text-sm text-gray-400">
                Your success proves it for everyone else.
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Training &amp; Knowledge Transfer</h3>
              <p className="text-gray-300 mb-4">
                Learn how enterprise systems actually work. Virtual or on-site. Patterns, not just tools.
              </p>
              <p className="text-sm text-gray-400">
                Build capability, not dependency.
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Transparent Results, Shared Learnings</h3>
              <p className="text-gray-300 mb-4">
                See what works. See what doesn&apos;t. No black boxes. No vendor lock-in.
              </p>
              <p className="text-sm text-gray-400">
                Real metrics, full context, honest assessment.
              </p>
            </Card>
          </div>

          <div className="text-center space-x-4">
            <Button href="/beta-program" size="lg">
              Become a Proof Partner
            </Button>
            <Button href="/training" variant="outline" size="lg">
              Explore Training
            </Button>
          </div>
        </div>
      </Section>

      {/* The Problem Section */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-gradient">The Problem</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-4">
            The world is drowning in complexity disguised as innovation.
          </p>
          <p className="text-xl text-gray-300 text-center">
            Big tech hides behind jargon and layers of opacity. You don&apos;t need to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="bordered">
            <h3 className="text-2xl font-bold mb-4 text-primary-blue">Technology Opacity</h3>
            <p className="text-gray-300 mb-4">
              Tools locked behind jargon walls. Vendor complexity protecting profit margins.
            </p>
            <p className="text-gray-300">
              You can&apos;t use what you can&apos;t understand.
            </p>
          </Card>

          <Card variant="bordered">
            <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Data Opacity</h3>
            <p className="text-gray-300 mb-4">
              Your data sits in silos. Enterprise analytics demand six-figure salaries.
            </p>
            <p className="text-gray-300">
              You can&apos;t leverage insights you can&apos;t interpret.
            </p>
          </Card>

          <Card variant="bordered">
            <h3 className="text-2xl font-bold mb-4 text-accent-pink">AI Fear</h3>
            <p className="text-gray-300 mb-4">
              AI painted as a threat while enterprises use it to pull ahead.
            </p>
            <p className="text-gray-300">
              You can&apos;t compete when you&apos;re afraid of the tools.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Promise Section */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-gradient">Our Promise</span>
          </h2>
          <p className="text-xl text-center text-gray-300">
            We make advanced technology understandable, actionable, and profitable.
          </p>
        </div>

        <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30">
          <h4 className="text-2xl font-bold mb-6 text-center">Authority Through Evidence</h4>
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

      {/* What We Build Section */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">What We Build</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
            We don&apos;t just talk about clarity. We forge it.
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Each project dismantles a black box and rebuilds it with transparency at the core.
          </p>
        </div>

        {/* Featured showcase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          <Card variant="elevated" className="border-2 border-primary-blue/50">
            <div className="mb-3">
              <span className="inline-block bg-accent-pink/20 text-accent-pink text-xs font-semibold px-3 py-1 rounded-full">
                Powered by Xynergy
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary-blue">Build.</h3>
            <h4 className="text-xl font-semibold text-white mb-3">Nexus: Beating the SEO Black Box.</h4>
            <p className="text-gray-300 mb-4">
              Google&apos;s algorithm is opaque by design. We make it understandable.
            </p>
            <Button href="/continuum/nexus" variant="outline" size="sm" className="w-full">
              See How We Do It
            </Button>
          </Card>

          <Card variant="elevated" className="border-2 border-secondary-purple-light/50">
            <div className="mb-3">
              <span className="inline-block bg-accent-pink/20 text-accent-pink text-xs font-semibold px-3 py-1 rounded-full">
                Powered by Xynergy
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-secondary-purple-light">Empower.</h3>
            <h4 className="text-xl font-semibold text-white mb-3">Data Democracy: Translating data for the 43%.</h4>
            <p className="text-gray-300 mb-4">
              Enterprise analytics shouldn&apos;t require enterprise budgets.
            </p>
            <Button href="/continuum/data-democracy" variant="outline" size="sm" className="w-full">
              Learn More
            </Button>
          </Card>

          <Card variant="elevated" className="border-2 border-accent-pink/50">
            <div className="mb-3">
              <span className="inline-block bg-accent-pink/20 text-accent-pink text-xs font-semibold px-3 py-1 rounded-full">
                Powered by Xynergy
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-accent-pink">Protect.</h3>
            <h4 className="text-xl font-semibold text-white mb-3">Safe Spaces: Transparency without surveillance.</h4>
            <p className="text-gray-300 mb-4">
              Privacy doesn&apos;t require opacity. We prove it.
            </p>
            <Button href="/continuum/safe-spaces" variant="outline" size="sm" className="w-full">
              Explore Project
            </Button>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">The Complete Continuum</h3>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
            Six domains. One mission: Make complexity transparent.
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
          <p className="text-lg text-gray-300">
            Six domains now. More to come.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            The community decides where we forge next.
          </p>
        </div>

        <div className="text-center space-x-4">
          <Button href="/continuum" size="lg">
            Explore All Projects
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Suggest a Domain
          </Button>
        </div>
      </Section>

      {/* Public Dashboard Preview */}
      <Section background="medium">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Proof.</span> Not Promises.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Every claim backed by data. Every methodology documented. Every failure shown.
          </p>
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
              <div>• Platform development progress</div>
            </div>

            <p className="text-accent-pink font-semibold mt-6">
              Find another company that shows their failures alongside their wins. We&apos;ll wait.
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
              <span className="text-gradient">Join the Forge</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
              Each project launches in three phases.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Earlier entry means greater rewards—and a bigger role in proving clarity beats complexity.
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
              After Phase 3, platforms move to standard pricing. Beta partners keep their lifetime access—no takeaways.
            </p>
          </div>

          <div className="text-center">
            <Button href="/beta-program" size="lg">
              See Full Beta Structure
            </Button>
          </div>
        </div>
      </Section>

      {/* The 20% Army Section */}
      <Section background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">20%</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We work with the 20%. We build for the 80%.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card variant="elevated">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-accent-pink mb-2">The Pioneers</h3>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>Leaders proving clarity works.</p>
                <p>Innovators testing bold moves.</p>
                <p>Early adopters gaining advantage.</p>
              </div>
              <div className="mt-4 p-3 bg-primary/30 rounded-xl">
                <p className="text-xs text-gray-400 text-center">Phase 1 partners across all projects</p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-primary-blue mb-2">The Proof</h3>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>Real businesses. Real results.</p>
                <p>Documented methodologies.</p>
                <p>Wins and losses shown equally.</p>
              </div>
              <div className="mt-4 p-3 bg-primary/30 rounded-xl">
                <p className="text-xs text-gray-400 text-center">Coming as Phase 1 progresses</p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-secondary-purple-light mb-2">The Movement</h3>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>Watching proof accumulate.</p>
                <p>Waiting for validation.</p>
                <p>Building on proven ground.</p>
              </div>
              <div className="mt-4 p-3 bg-primary/30 rounded-xl">
                <p className="text-xs text-gray-400 text-center">The 80%—for now</p>
              </div>
            </Card>
          </div>

          <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30 mb-8">
            <h4 className="text-2xl font-bold text-center mb-6 text-white">Ready to forge?</h4>
            <p className="text-lg text-gray-300 text-center mb-6">
              Each project needs pioneers. Earlier entry means bigger rewards—and bigger impact.
            </p>
            <div className="text-center">
              <Button href="/beta-program" size="lg">
                See Beta Opportunities
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Social Proof Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Results. <span className="text-gradient">Coming Soon.</span>
          </h2>

          <Card variant="bordered" className="mb-8">
            <p className="text-xl text-gray-300 mb-6">
              We&apos;re just starting. First partners boarding now.
            </p>

            <div className="bg-primary/30 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-white mb-3">What You&apos;ll See:</h4>
              <ul className="text-left space-y-2 text-gray-400">
                <li>✓ Complete transparency in documentation</li>
                <li>✓ Real metrics with full context</li>
                <li>✓ Open methodologies</li>
                <li>✓ Failures shown alongside wins</li>
              </ul>
            </div>

            <p className="text-gray-400">
              <strong className="text-white">Current Status:</strong> Private beta complete. Public beta partners will be documented here.
            </p>
          </Card>

          <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30">
            <p className="text-lg font-semibold text-accent-pink">
              No fabricated stories. Real results with context, methodology, and honest assessment.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/community/success-stories" variant="outline">
              Check Back for Stories
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
