import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Foundry Business: OS - Operating System for Multi-Project Leaders',
  description: 'Finally, an operating system for multi-project leaders. Stop drowning in context switching. Beta Q4 2025.',
});

export default function BusinessOSPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            BETA Q4 2025
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Foundry Business: OS
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Finally, an operating system for multi-project leaders.
            Stop drowning in context switching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=beta-os" size="lg">
              Apply for Beta
            </Button>
            <Button href="#screenshots" variant="outline" size="lg">
              See Screenshots
            </Button>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The Context Switching Problem
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-4">What Drains You</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Switching between 10+ tools daily</li>
                <li>• Losing context every time you switch projects</li>
                <li>• Manually synthesizing information from Slack, Gmail, Calendar</li>
                <li>• Forgetting critical details between weekly check-ins</li>
                <li>• Spending hours on status updates instead of decisions</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-4">What Should Happen</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Single source of truth across all projects</li>
                <li>• AI that remembers context you&apos;d forget</li>
                <li>• Automatic synthesis of communications</li>
                <li>• Proactive alerts only when you need to act</li>
                <li>• Focus on decisions, not status tracking</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Solution/Features Section */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            How Business: OS Solves It
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-semibold mb-4 text-primary-blue">Communication Intelligence</h3>
              <p className="mb-4 text-gray-300">
                AI analyzes your Slack messages, emails, and calendar events.
                Classifies by urgency, extracts action items, generates summaries.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Auto-prioritization of incoming messages</li>
                <li>• Suggested responses (you approve)</li>
                <li>• Meeting prep briefs generated automatically</li>
                <li>• Follow-up tracking across conversations</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-semibold mb-4 text-secondary-purple-light">Living Memory</h3>
              <p className="mb-4 text-gray-300">
                Persistent knowledge graph that grows with your work.
                Remember context across projects, months, years.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Semantic search across all your data</li>
                <li>• Automatic linking of related information</li>
                <li>• Context retrieval when switching projects</li>
                <li>• Historical decision tracking with reasoning</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-2xl font-semibold mb-4 text-accent-pink">Autonomous Operations</h3>
              <p className="mb-4 text-gray-300">
                AI executes routine tasks within boundaries you define.
                You only handle exceptions and strategic decisions.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Confidence scoring on every AI action</li>
                <li>• You approve execution boundaries</li>
                <li>• Automatic escalation when uncertain</li>
                <li>• Full audit trail of AI decisions</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-blue-500/30">
              <h3 className="text-2xl font-semibold mb-4">Multi-Project Dashboard</h3>
              <p className="mb-4 text-gray-300">
                One view across 6+ parallel projects. Real-time status,
                alerts, and recommendations.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Project health scoring with trend analysis</li>
                <li>• Proactive alerts for blockers/risks</li>
                <li>• Resource allocation recommendations</li>
                <li>• Performance tracking with benchmarks</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Screenshots Section */}
      <Section background="dark" id="screenshots">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            See Business: OS in Action
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Actual screenshots from current build (Beta Q4 2025)
          </p>

          {/* Screenshot Placeholders */}
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Multi-Project Dashboard</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 aspect-video flex items-center justify-center">
                <p className="text-gray-500">Screenshot: Dashboard View (Coming Soon)</p>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                Single view across all active projects with AI-generated health scores and proactive alerts
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Communication Intelligence</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 aspect-video flex items-center justify-center">
                <p className="text-gray-500">Screenshot: Communications View (Coming Soon)</p>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                AI classifies Slack/Gmail by urgency, generates response suggestions, tracks action items
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Living Memory</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 aspect-video flex items-center justify-center">
                <p className="text-gray-500">Screenshot: Memory Search (Coming Soon)</p>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                Semantic search across all data with automatic linking and context preservation
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Target Audience */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Who This Is For
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-3">Multi-Venture Founders</h3>
              <p className="text-gray-300">
                Managing 3+ businesses simultaneously. Need context switching without cognitive overload.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-3">Executives with Large Teams</h3>
              <p className="text-gray-300">
                6+ direct reports, each with multiple initiatives. Need visibility without micromanaging.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-3">Consultants & Agencies</h3>
              <p className="text-gray-300">
                10+ client accounts, constant context switching. Need single source of truth.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Beta Program */}
      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beta Program (Q4 2025)
          </h2>

          <p className="text-xl mb-8 text-gray-300">
            We&apos;re taking applications for Business: OS beta. Early access with
            significant benefits for participants who help shape the product.
          </p>

          <div className="bg-gray-900/50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6">Beta Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold">Priority Access</p>
                  <p className="text-sm text-gray-400">First to receive new features</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold">Significant Early Adopter Benefits</p>
                  <p className="text-sm text-gray-400">Preferred terms for beta participants</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold">Product Input</p>
                  <p className="text-sm text-gray-400">Direct feedback shapes features</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold">Dedicated Support</p>
                  <p className="text-sm text-gray-400">Direct access to founding team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8 text-gray-400 text-sm">
            <p>
              Beta opens Q4 2025 (Oct-Dec). Limited spots available.
              We&apos;re looking for 10-20 founding users managing 6+ parallel projects.
            </p>
            <p>
              Commercial launch Q1 2026. Beta participants receive preferred terms
              and benefits that reflect their contribution to product development.
            </p>
          </div>

          <Button href="/contact?type=beta-os" size="lg">
            Apply for Beta Access
          </Button>
        </div>
      </Section>

      {/* Current Status */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Development Status</h2>

          <div className="space-y-4">
            <Card variant="elevated">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Communication Intelligence</h3>
                  <p className="text-sm text-gray-400">Slack, Gmail, Calendar integration with AI classification</p>
                </div>
                <span className="text-green-400 font-semibold">100% Complete</span>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Living Memory</h3>
                  <p className="text-sm text-gray-400">Persistent knowledge graph with semantic search</p>
                </div>
                <span className="text-yellow-400 font-semibold">In Progress</span>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Autonomous Operations</h3>
                  <p className="text-sm text-gray-400">AI execution within defined boundaries</p>
                </div>
                <span className="text-yellow-400 font-semibold">In Progress</span>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Multi-Project Dashboard</h3>
                  <p className="text-sm text-gray-400">Real-time status across 6+ projects</p>
                </div>
                <span className="text-yellow-400 font-semibold">In Progress</span>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button href="/dashboard" variant="outline">
              View Platform Status
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
