import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Cpu, Brain, Mic2, BarChart3, Building2, FileText, TrendingUp, Bell, BookOpen, MessageSquare, Trophy, Rocket } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Platform Meets Philosophy',
  description: 'Tools designed for transparency, interoperability, and control.',
  canonical: '/solutions/platform',
});

export default function PlatformSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Powered by Xynergy Badge */}
          <div className="mb-6 inline-block">
            <div className="bg-gradient-to-r from-primary-blue/20 to-secondary-purple-light/20 rounded-full px-6 py-2 border border-primary-blue/30">
              <p className="text-sm font-bold text-primary-blue">
                Powered by Xynergy
              </p>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Platform</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Spin up explainable workflows, content engines, and dashboards in weeks—not quarters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/foundry" size="lg">
              See the Power
            </Button>
            <Button href="/ai-reality-check" variant="outline" size="lg">
              AI Reality Check
            </Button>
          </div>
        </div>
      </Section>

      {/* What You Get */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What You <span className="text-gradient">Get</span>
            </h2>
          </div>

          <Card variant="elevated">
            <div className="space-y-4">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <h4 className="text-xl font-bold text-white mb-3">Research & Insights</h4>
                <p className="text-gray-300">
                  Internal-first signals with cited external context.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <h4 className="text-xl font-bold text-white mb-3">Content & Campaigns</h4>
                <p className="text-gray-300">
                  Drafts, scoring, amplification with proof.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20">
                <h4 className="text-xl font-bold text-white mb-3">Automation</h4>
                <p className="text-gray-300">
                  Approved workflows with step-by-step logs.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <h4 className="text-xl font-bold text-white mb-3">Dashboards & Proof</h4>
                <p className="text-gray-300">
                  Outcomes you can audit and share.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Why It Works */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why It <span className="text-gradient">Works</span>
            </h2>
          </div>

          <Card variant="elevated">
            <div className="space-y-4">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <h4 className="text-xl font-bold text-white mb-3">Xynergy&apos;s &apos;Explain this&apos; view on every major action</h4>
                <p className="text-gray-300">
                  Full transparency into how AI arrives at every decision.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <h4 className="text-xl font-bold text-white mb-3">Composable services: adopt, extend, or replace as you grow</h4>
                <p className="text-gray-300">
                  Mix and match capabilities to fit your evolving needs.
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20">
                <h4 className="text-xl font-bold text-white mb-3">Your data stays your data—isolated by default</h4>
                <p className="text-gray-300">
                  Complete control and privacy of your business intelligence.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Dual Purpose */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Dual <span className="text-gradient">Purpose</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <div className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-xl p-6 border border-primary-blue/30">
                <h3 className="text-2xl font-bold text-white mb-4">Internal Backbone</h3>
                <p className="text-lg text-gray-300">
                  Powers all ClearForge operations, managing multiple LLCs and projects across The Continuum
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="bg-gradient-to-br from-accent-pink/20 to-accent-pink/5 rounded-xl p-6 border border-accent-pink/30">
                <h3 className="text-2xl font-bold text-white mb-4">Future Commercial Platform</h3>
                <p className="text-lg text-gray-300">
                  AI foundation for clients seeking enterprise operating capabilities
                </p>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Brain className="w-10 h-10 text-secondary-purple-light flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">The Vision</h3>
                <p className="text-xl text-gray-300">
                  Every business decision, process, and insight becomes part of intelligent, searchable, actionable knowledge ecosystem
                </p>
              </div>
            </div>

            <div className="bg-primary-blue/10 rounded-2xl p-6 border border-primary-blue/30">
              <p className="text-lg text-white font-semibold text-center">
                Coming Soon: Watch us prove this works internally first. Then we&apos;ll show you how it can work for you.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Core Capabilities */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core <span className="text-gradient">Capabilities</span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* Living Business Memory */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-6">
                <Brain className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Living Business Memory</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Persistent AI Profile Management</h4>
                  <p className="text-gray-300">
                    AI that remembers your business context, decisions, and preferences
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Complete Context Preservation</h4>
                  <p className="text-gray-300">
                    Never lose the thread - every conversation builds on what came before
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Cross-Conversation Knowledge</h4>
                  <p className="text-gray-300">
                    Insights from one project inform decisions across all areas
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Decision Archaeology</h4>
                  <p className="text-gray-300">
                    Understand why decisions were made and learn from history
                  </p>
                </div>
              </div>
            </Card>

            {/* Voice-First Command System */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-6">
                <Mic2 className="w-10 h-10 text-accent-pink flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Voice-First Command System</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                  <h4 className="text-lg font-bold text-white mb-2">Apple Intelligence Integration</h4>
                  <p className="text-gray-300">
                    Natural voice commands for business operations
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                  <h4 className="text-lg font-bold text-white mb-2">Strategic Analysis from Voice</h4>
                  <p className="text-gray-300">
                    Speak your thoughts, get strategic insights back
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                  <h4 className="text-lg font-bold text-white mb-2">Automated Execution</h4>
                  <p className="text-gray-300">
                    Voice commands trigger complex business workflows
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                  <h4 className="text-lg font-bold text-white mb-2">Idea-to-Product Pipeline</h4>
                  <p className="text-gray-300">
                    From conversation to execution without friction
                  </p>
                </div>
              </div>
            </Card>

            {/* Unified Business Interface */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-6">
                <BarChart3 className="w-10 h-10 text-secondary-purple-light flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Unified Business Interface</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple-light/20">
                  <h4 className="text-lg font-bold text-white mb-2">State of the Union Briefing</h4>
                  <p className="text-gray-300">
                    Daily comprehensive business status at a glance
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple-light/20">
                  <h4 className="text-lg font-bold text-white mb-2">AI-Driven Prioritization</h4>
                  <p className="text-gray-300">
                    Intelligence suggests what needs attention and when
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple-light/20">
                  <h4 className="text-lg font-bold text-white mb-2">Real-Time Business Metrics</h4>
                  <p className="text-gray-300">
                    All critical data in one beautiful interface
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple-light/20">
                  <h4 className="text-lg font-bold text-white mb-2">Revolutionary Design</h4>
                  <p className="text-gray-300">
                    Johnny Ive aesthetic - purposeful simplicity
                  </p>
                </div>
              </div>
            </Card>

            {/* Multi-Business Management */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Multi-Business Management</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Multi-LLC Financial Tracking</h4>
                  <p className="text-gray-300">
                    Manage multiple entities from single interface
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Real-Time Monitoring</h4>
                  <p className="text-gray-300">
                    Cross-entity visibility and consolidated reporting
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Automated Operations</h4>
                  <p className="text-gray-300">
                    Routine tasks handled intelligently across businesses
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Predictive Analytics</h4>
                  <p className="text-gray-300">
                    AI-powered insights for each business and combined
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Advanced Intelligence */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced <span className="text-gradient">Intelligence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Predictive Business Intelligence */}
            <Card variant="elevated">
              <div className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-xl p-6 border border-primary-blue/30 h-full">
                <TrendingUp className="w-10 h-10 text-primary-blue mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Predictive Business Intelligence</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Opportunity radar system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>External correlation engine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Timing optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Revenue forecasting</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Automated Content/Marketing */}
            <Card variant="elevated">
              <div className="bg-gradient-to-br from-accent-pink/20 to-accent-pink/5 rounded-xl p-6 border border-accent-pink/30 h-full">
                <Bell className="w-10 h-10 text-accent-pink mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Automated Content/Marketing</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue">•</span>
                    <span>Development progress content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue">•</span>
                    <span>Multi-channel distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue">•</span>
                    <span>Brand voice consistency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue">•</span>
                    <span>Launch sequence automation</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Business Documentation */}
            <Card variant="elevated">
              <div className="bg-gradient-to-br from-secondary-purple-light/20 to-secondary-purple/5 rounded-xl p-6 border border-secondary-purple-light/30 h-full">
                <FileText className="w-10 h-10 text-secondary-purple-light mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Business Documentation</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Legal and compliance integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Automated documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Notion integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Knowledge management</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Target Markets */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Target <span className="text-gradient">Markets</span>
            </h2>
          </div>

          <Card variant="elevated">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20 text-center">
                <Building2 className="w-10 h-10 text-primary-blue mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">SMB Professional Services</h4>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20 text-center">
                <Building2 className="w-10 h-10 text-accent-pink mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Real Estate Organizations</h4>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20 text-center">
                <Building2 className="w-10 h-10 text-secondary-purple-light mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Educational Institutions</h4>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20 text-center">
                <Building2 className="w-10 h-10 text-accent-pink mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Process-Heavy Industries</h4>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20 text-center">
                <Building2 className="w-10 h-10 text-secondary-purple-light mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Nonprofits</h4>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20 text-center">
                <Building2 className="w-10 h-10 text-primary-blue mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Multi-Entity Operators</h4>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Community Section */}
      <Section background="medium" id="community_section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Community Is Part of the <span className="text-gradient">Solution</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Education Card */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Education</h3>
                  <p className="text-gray-300 mb-3">
                    Tiered education that scales with your needs—from foundational guides to advanced integrations.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue">•</span>
                      <span>Free: Step-by-step playbooks for 1-5 person shops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue">•</span>
                      <span>Pro: Advanced workflows & Xynergy labs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue">•</span>
                      <span>Integrations+: API workspace & co-build sessions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Forum Card */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <MessageSquare className="w-8 h-8 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Forum</h3>
                  <p className="text-gray-300 mb-3">
                    Reddit-style community forum coming soon with searchable solutions and expert support.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink">•</span>
                      <span>Threaded discussions & searchable solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink">•</span>
                      <span>Expert AMAs & office hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink">•</span>
                      <span>Community-driven knowledge base</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Rewards Card */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <Trophy className="w-8 h-8 text-secondary-purple-light flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Rewards</h3>
                  <p className="text-gray-300 mb-3">
                    Earn while you learn—points for completing courses, sharing wins, and helping others.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light">•</span>
                      <span>Points for courses, tutorials & forum answers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light">•</span>
                      <span>Badges, discounts & beta priority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light">•</span>
                      <span>Revenue-share opportunities on templates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Beta Card */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <Rocket className="w-8 h-8 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Beta</h3>
                  <p className="text-gray-300 mb-3">
                    Beta partners are risk-takers who help steer the roadmap and get early access.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink">•</span>
                      <span>Early access to new features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink">•</span>
                      <span>Direct influence on roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink">•</span>
                      <span>Real-world testing & feedback loops</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/community" size="lg">
              Join the Community
            </Button>
            <Button href="/solutions/partnership" variant="outline" size="lg">
              Build on Xynergy
            </Button>
          </div>
        </div>
      </Section>

      {/* Coming Soon Note */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" className="bg-gradient-to-br from-primary via-secondary-purple to-primary border-secondary-purple-light/30">
            <div className="text-center">
              <Cpu className="w-16 h-16 text-secondary-purple-light mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Platform Details & Availability
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We&apos;re using Foundry Business: OS internally to power all ClearForge operations. Once we&apos;ve proven it works at scale through The Continuum projects, we&apos;ll make it available to qualified partners.
              </p>
              <div className="bg-primary-blue/10 rounded-xl p-6 border border-primary-blue/30">
                <p className="text-lg text-white font-semibold">
                  Platform details and availability timing discussed with qualified beta partners.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in <span className="text-gradient">Foundry Business: OS?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the beta program to get early access when it&apos;s ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta" size="lg">
              Apply for Beta Access
            </Button>
            <Button href="/solutions" variant="outline" size="lg">
              View All Solutions
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
