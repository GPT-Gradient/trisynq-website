import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Foundry Business: Intelligence for Multi-Project Leaders',
  description: 'Run multiple projects simultaneously without losing your mind. AI-powered operating system that manages complexity so you can focus on decisions that matter.',
  canonical: '/foundry/business',
});

export default function FoundryBusinessPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Foundry Business: Intelligence for Multi-Project Leaders
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Run multiple projects simultaneously without losing your mind. AI-powered operating system
            that manages complexity so you can focus on decisions that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/foundry/business/os" size="lg">
              Explore Business: OS
            </Button>
            <Button href="/continuum" variant="outline" size="lg">
              See It In Action
            </Button>
          </div>
        </div>
      </Section>

      {/* The Multi-Project Problem */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Why Managing Multiple Projects Shouldn&apos;t Require Superhuman Focus
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-12 text-center">
            IF YOU&apos;RE RUNNING 3+ PROJECTS, YOU KNOW THIS STRUGGLE:
          </p>

          <div className="prose prose-invert prose-lg max-w-none">
            <Card variant="elevated" className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Context Switching Kills Momentum</h3>
              <ul className="text-gray-300 space-y-2">
                <li>23 minutes to regain focus after each interruption</li>
                <li>Multiply by 20 interruptions/day = 7.6 hours lost</li>
                <li>Most &quot;work&quot; is just remembering where you left off</li>
              </ul>
            </Card>

            <Card variant="elevated" className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">
                Tools Create Work Instead of Removing It
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>Project A in Asana, Project B in Monday, Project C in Notion</li>
                <li>47 browser tabs open &quot;just in case&quot;</li>
                <li>Spending hours in tools instead of doing actual work</li>
              </ul>
            </Card>

            <Card variant="elevated" className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Strategic Decisions Get Delayed</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Can&apos;t see the full picture across all projects</li>
                <li>Data exists but it&apos;s scattered</li>
                <li>By the time you gather context, the opportunity passed</li>
              </ul>
            </Card>

            <div className="bg-background-dark p-8 rounded-lg border-2 border-accent-pink/30 mt-8">
              <h4 className="text-xl font-bold mb-4 text-accent-pink">The Traditional &quot;Solution&quot;:</h4>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Hire a project manager</li>
                <li>• Buy more tools</li>
                <li>• Work longer hours</li>
                <li>• Just &quot;power through&quot;</li>
              </ul>
              <p className="text-lg font-bold text-white">
                None of these solve the actual problem.
              </p>
            </div>

            <Card variant="elevated" className="mt-8 bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 border-2 border-primary-blue/30">
              <p className="text-lg text-gray-300 mb-4">
                The problem isn&apos;t that you need better discipline or more tools. The problem
                is that traditional project management was designed for people managing ONE
                thing at a time.
              </p>
              <p className="text-xl font-bold text-white mb-6">
                You&apos;re not managing one thing. You&apos;re juggling six.
              </p>
              <h4 className="text-xl font-bold text-primary-blue mb-3">What You Actually Need:</h4>
              <p className="text-gray-300 mb-3">An operating system that:</p>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Remembers context across ALL projects automatically</li>
                <li>✓ Surfaces what needs attention without you looking for it</li>
                <li>✓ Handles routine decisions within boundaries you set</li>
                <li>✓ Preserves your strategic thinking energy for things that matter</li>
              </ul>
              <p className="text-xl font-bold text-accent-pink mt-6">
                That&apos;s Foundry Business.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Foundry Business Product Line */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Built for Parallel-Project Reality
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-12 text-center">
            FOUNDRY BUSINESS IS A PRODUCT SUITE, NOT A SINGLE TOOL
          </p>

          <div className="space-y-8">
            <Card variant="elevated" className="border-2 border-primary-blue/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-blue/20 px-4 py-2 rounded-full">
                  <span className="text-sm font-bold text-primary-blue">CURRENT PRODUCT</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Foundry Business: OS</h3>
              <div className="mb-4">
                <span className="text-accent-pink font-semibold">Launches:</span> Q1 2026 (Commercial)<br/>
                <span className="text-secondary-purple-light font-semibold">Status:</span> Internal validation complete, partner validation starting Q4 2025
              </div>
              <p className="text-lg text-gray-300 mb-6">
                An AI-powered operating system that:
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Manages multiple projects in one unified interface</li>
                <li>• Automates routine decisions within your rules</li>
                <li>• Preserves context across all interactions</li>
                <li>• Surfaces what needs attention proactively</li>
              </ul>
              <p className="text-lg text-gray-400 mb-6">
                <strong>Think:</strong> macOS for your business operations.
              </p>
              <Button href="/foundry/business/os">View Details</Button>
            </Card>

            <h3 className="text-3xl font-bold mt-16 mb-8">Future Products (Post-OS Success)</h3>

            <Card variant="elevated" className="border-2 border-secondary-purple/30 opacity-75">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary-purple/20 px-4 py-2 rounded-full">
                  <span className="text-sm font-bold text-secondary-purple-light">FUTURE</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Foundry Business: Analytics</h3>
              <div className="mb-4">
                <span className="text-gray-400 font-semibold">Timeline:</span> Post-OS commercial launch (2026+)<br/>
                <span className="text-gray-400 font-semibold">Status:</span> Concept validated, specification in progress
              </div>
              <p className="text-gray-300 mb-4">
                Multi-project intelligence:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Cross-project trend detection</li>
                <li>• Resource allocation optimization</li>
                <li>• Predictive analytics (what&apos;s likely to need attention)</li>
                <li>• Strategic decision support</li>
              </ul>
              <p className="text-gray-400 mt-4">
                <strong>Think:</strong> Your business intelligence analyst, but for ALL projects.
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30 opacity-75">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent-pink/20 px-4 py-2 rounded-full">
                  <span className="text-sm font-bold text-accent-pink">FUTURE</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Foundry Business: Workflows</h3>
              <div className="mb-4">
                <span className="text-gray-400 font-semibold">Timeline:</span> Post-Analytics (2027+)<br/>
                <span className="text-gray-400 font-semibold">Status:</span> Concept stage
              </div>
              <p className="text-gray-300 mb-4">
                Advanced automation:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Cross-system workflow orchestration</li>
                <li>• Custom automation without code</li>
                <li>• Integration with existing tools</li>
                <li>• Workflow templates for common patterns</li>
              </ul>
              <p className="text-gray-400 mt-4">
                <strong>Think:</strong> Zapier, but it understands your business context.
              </p>
            </Card>
          </div>

          <Card variant="elevated" className="mt-12 bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 border-2 border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-4">Why This Sequence</h3>
            <p className="text-lg text-gray-300 mb-4">
              We&apos;re following The Continuum methodology:
            </p>
            <ol className="text-gray-300 space-y-2">
              <li>1. Build Business: OS → Prove operating system concept</li>
              <li>2. Build Analytics → Prove intelligence layer adds value</li>
              <li>3. Build Workflows → Prove automation saves time</li>
            </ol>
            <p className="text-lg font-bold text-accent-pink mt-6">
              Each product validates before the next one starts. No vaporware, no promises we can&apos;t keep.
            </p>
          </Card>
        </div>
      </Section>

      {/* Who Is Foundry Business For? */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Built for Multi-Project Leaders
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-12 text-center">
            YOU KNOW YOU NEED THIS IF:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">
                The Entrepreneur Running Multiple Businesses
              </h3>
              <ul className="text-gray-300 text-sm space-y-2 mb-4">
                <li>• You own 2-3 companies</li>
                <li>• Each has different systems, processes, customers</li>
                <li>• You&apos;re constantly switching mental contexts</li>
                <li>• Strategic decisions wait because you can&apos;t see the full picture</li>
              </ul>
              <p className="text-gray-400 text-sm">
                <strong>Example:</strong> Sarah runs a marketing agency, a SaaS product, and a consulting
                practice. Business: OS gives her one view of everything, with AI highlighting what needs attention.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-secondary-purple-light">
                The Operations Leader Managing Many Initiatives
              </h3>
              <ul className="text-gray-300 text-sm space-y-2 mb-4">
                <li>• You&apos;re responsible for 5+ simultaneous projects</li>
                <li>• Leadership wants status updates yesterday</li>
                <li>• Your team needs direction but you&apos;re drowning in details</li>
                <li>• Projects succeed but you&apos;re exhausted</li>
              </ul>
              <p className="text-gray-400 text-sm">
                <strong>Example:</strong> Marcus leads product operations managing 8 initiatives across
                4 teams. Business: OS handles routine coordination, freeing him for blockers and strategy.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-accent-pink">
                The Solopreneur Wearing All Hats
              </h3>
              <ul className="text-gray-300 text-sm space-y-2 mb-4">
                <li>• You&apos;re the CEO, CFO, CMO, and CTO</li>
                <li>• Client projects + marketing + operations + strategy</li>
                <li>• You&apos;re capable, but overwhelmed</li>
                <li>• Something always gets dropped</li>
              </ul>
              <p className="text-gray-400 text-sm">
                <strong>Example:</strong> Jennifer is a fractional CFO for 6 companies. Business: OS tracks
                all client contexts so she never walks into a call unprepared.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Common Patterns</h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">✅ Managing 3+ projects/businesses simultaneously</p>
                <p className="text-gray-300 text-sm">✅ Context switching multiple times per day</p>
                <p className="text-gray-300 text-sm">✅ Capable of strategic thinking but drowning in details</p>
                <p className="text-gray-300 text-sm">✅ Current tools create work instead of eliminating it</p>
                <p className="text-gray-300 text-sm">✅ Revenue is good, but you&apos;re burning out</p>
                <p className="text-gray-300 text-sm">✅ Want to scale without hiring a full team</p>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-background-dark border-2 border-gray-600">
            <h3 className="text-xl font-bold mb-4">Who This Is NOT For</h3>
            <div className="space-y-2 text-gray-400">
              <p>❌ Single-project teams (traditional PM tools work fine)</p>
              <p>❌ People wanting fully automated businesses (we augment, not replace)</p>
              <p>❌ Those needing industry-specific compliance (legal, medical, finance)</p>
              <p>❌ Enterprise teams with dedicated PMs (different problem)</p>
            </div>
            <p className="text-lg font-bold text-white mt-6">
              If you&apos;re managing multiple things and drowning in context switching, Business: OS was built for you.
            </p>
          </Card>
        </div>
      </Section>

      {/* The Technology Behind It */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Built on Foundry Platform
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-12 text-center">
            BUSINESS: OS IS A PRODUCT, NOT INFRASTRUCTURE
          </p>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              It&apos;s built on Foundry Platform (our 48+ microservice backend), which means:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card variant="elevated">
                <h3 className="text-xl font-bold mb-4 text-primary-blue">You Get Enterprise Capabilities</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• AI-powered intelligence (via Intelligence Gateway)</li>
                  <li>• Cost-optimized processing (40-60% savings vs direct AI usage)</li>
                  <li>• Fault-tolerant architecture (no single point of failure)</li>
                  <li>• Real-time updates (WebSocket connections)</li>
                  <li>• Security built-in (enterprise-grade from day one)</li>
                </ul>
              </Card>

              <Card variant="elevated">
                <h3 className="text-xl font-bold mb-4 text-secondary-purple-light">
                  Without Enterprise Complexity
                </h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• No infrastructure to manage</li>
                  <li>• No servers to maintain</li>
                  <li>• No scaling concerns</li>
                  <li>• No security updates to deploy</li>
                </ul>
              </Card>
            </div>

            <Card variant="elevated" className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10">
              <p className="text-xl font-bold text-white mb-6">
                All of this is invisible to you.
              </p>
              <p className="text-gray-300">
                You use Business: OS, it uses Foundry Platform, everything just works.
              </p>
              <div className="mt-6">
                <Button href="/foundry/platform" variant="outline">
                  Learn More About Foundry Platform
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Coming Q1 2026 */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Coming Q1 2026
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-8">
            BUSINESS: OS LAUNCHES COMMERCIALLY Q1 2026
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Q4 2025 (Now)</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✅ Product complete (12 phases built)</li>
                <li>✅ Internal validation finished (we use it daily)</li>
                <li>⚙️ Final testing and polish underway</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-secondary-purple-light">Q1 2026</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>🚀 Commercial launch opens</li>
                <li>📋 Waitlist members get early access</li>
                <li>💰 Launch pricing (discount for early adopters)</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-accent-pink">How to Get Early Access</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>1. Join The Waitlist</li>
                <li>2. Track Development</li>
                <li>3. Learn The Philosophy</li>
              </ul>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=beta-os" size="lg">
              Join Waitlist
            </Button>
            <Button href="/forge/build" variant="outline" size="lg">
              Track Development
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start with Business: OS
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            The first Foundry Business product. More coming after we prove this one works.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Button href="/foundry/business/os" size="lg" className="w-full">
              Explore Business: OS Details
            </Button>
            <Button href="/contact?type=beta-os" variant="outline" size="lg" className="w-full">
              Join Waitlist
            </Button>
            <Button href="/continuum" variant="outline" size="lg" className="w-full">
              See It Working
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
