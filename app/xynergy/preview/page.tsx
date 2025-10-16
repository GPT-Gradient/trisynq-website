import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import {
  Cpu,
  Brain,
  Zap,
  Search,
  TrendingUp,
  Clock,
  Eye,
  Target,
  Sparkles,
  MessageSquare,
  Database,
  Activity
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'XynergyOS Preview — Your AI Operating System',
  description: 'Get a sneak peek at XynergyOS: the ADHD-optimized AI platform that manages your entire business universe. Command Center, Morning Briefing, Research Sessions, and more.',
  canonical: '/xynergy/preview',
});

export default function XynergyPreviewPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-block bg-primary-blue/20 text-primary-blue px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary-blue/30">
            Coming Soon • Beta Access Available
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Meet <span className="text-gradient">XynergyOS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Your AI operating system for managing complexity. Built for founders who juggle 6+ projects,
            think in parallel streams, and refuse to drown in busywork.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            ADHD-optimized design. Glassmorphic beauty. Voice-first interface. Transparent costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta" size="lg">
              Join Beta Waitlist
            </Button>
            <Button href="#features" variant="outline" size="lg">
              Explore Features
            </Button>
          </div>
        </div>

        {/* Hero Visual Placeholder */}
        <div className="max-w-6xl mx-auto">
          <Card variant="elevated" className="border-2 border-primary-blue/30 bg-primary/50 backdrop-blur-xl">
            <div className="aspect-video bg-gradient-to-br from-primary-blue/20 via-secondary-purple/20 to-accent-pink/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Cpu className="w-20 h-20 text-primary-blue mx-auto mb-4" />
                <p className="text-xl text-gray-300 font-semibold">Command Center Dashboard</p>
                <p className="text-sm text-gray-400 mt-2">Screenshot Coming Soon</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* What Makes It Different */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not Another <span className="text-gradient">Dashboard</span>
            </h2>
            <p className="text-xl text-gray-300">
              XynergyOS is an operating system for your entire business universe. Not a tool. Not a platform. An OS.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="elevated">
              <div className="text-center">
                <div className="bg-primary-blue/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">ADHD-Optimized</h3>
                <p className="text-gray-300 text-sm">
                  High contrast. Instant recognition. Parallel processing. Dopamine feedback loops. Built for how your brain actually works.
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <div className="bg-secondary-purple/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-secondary-purple-light" />
                </div>
                <h3 className="text-xl font-bold mb-3">Jony Ive Beauty</h3>
                <p className="text-gray-300 text-sm">
                  Glassmorphic design with subtle depth, glows, and gradients. Every pixel serves a purpose. No clutter. Just clarity.
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <div className="bg-accent-pink/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-accent-pink" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cost Transparent</h3>
                <p className="text-gray-300 text-sm">
                  $0.50 per query vs. $20/seat/month. See exactly what you&apos;re paying for. No hidden fees. No seat licenses. Just usage.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Core Features */}
      <Section background="medium" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-300">
              Five major systems working in harmony to run your entire operation.
            </p>
          </div>

          <div className="space-y-12">
            {/* Command Center */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary-blue/20 rounded-full p-3">
                      <Cpu className="w-6 h-6 text-primary-blue" />
                    </div>
                    <h3 className="text-3xl font-bold">Command Center</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-4">
                    Your executive dashboard. See everything that matters across all your projects in one unified view.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue mt-1">✓</span>
                      <span>Multi-business project management (6+ projects simultaneously)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue mt-1">✓</span>
                      <span>Real-time metrics with glassmorphic cards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue mt-1">✓</span>
                      <span>Priority-based task surfacing (what needs attention NOW)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue mt-1">✓</span>
                      <span>Cross-project dependency tracking</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary-blue/20 via-secondary-purple/10 to-transparent rounded-xl p-8 border border-primary-blue/20 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Cpu className="w-24 h-24 text-primary-blue mx-auto mb-4 opacity-50" />
                    <p className="text-sm text-gray-400">Dashboard Screenshot</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Morning Briefing */}
            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gradient-to-br from-secondary-purple/20 via-primary-blue/10 to-transparent rounded-xl p-8 border border-secondary-purple/20 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Clock className="w-24 h-24 text-secondary-purple-light mx-auto mb-4 opacity-50" />
                    <p className="text-sm text-gray-400">Briefing Overlay</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary-purple/20 rounded-full p-3">
                      <Clock className="w-6 h-6 text-secondary-purple-light" />
                    </div>
                    <h3 className="text-3xl font-bold">Morning Briefing</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-4">
                    Your daily intelligence digest. What happened overnight. What needs your attention. What opportunities emerged.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light mt-1">✓</span>
                      <span>Dopamine-optimized overlay modal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light mt-1">✓</span>
                      <span>AI-curated news and market signals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light mt-1">✓</span>
                      <span>Action items prioritized by urgency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light mt-1">✓</span>
                      <span>Quick-action buttons for immediate responses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Research Sessions */}
            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent-pink/20 rounded-full p-3">
                      <Search className="w-6 h-6 text-accent-pink" />
                    </div>
                    <h3 className="text-3xl font-bold">Research Sessions</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-4">
                    Your strategy lab. AI-powered competitive intelligence with full source tracking and context preservation.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink mt-1">✓</span>
                      <span>Multi-threaded research with parallel queries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink mt-1">✓</span>
                      <span>Source attribution for every claim (no hallucination tolerance)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink mt-1">✓</span>
                      <span>Living Memory system (institutional knowledge capture)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink mt-1">✓</span>
                      <span>Export to reports, presentations, or dashboards</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-accent-pink/20 via-secondary-purple/10 to-transparent rounded-xl p-8 border border-accent-pink/20 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Search className="w-24 h-24 text-accent-pink mx-auto mb-4 opacity-50" />
                    <p className="text-sm text-gray-400">Research Workspace</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Assistant */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gradient-to-br from-primary-blue/20 via-accent-pink/10 to-transparent rounded-xl p-8 border border-primary-blue/20 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="w-24 h-24 text-primary-blue mx-auto mb-4 opacity-50" />
                    <p className="text-sm text-gray-400">AI Assistant</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary-blue/20 rounded-full p-3">
                      <MessageSquare className="w-6 h-6 text-primary-blue" />
                    </div>
                    <h3 className="text-3xl font-bold">Floating AI Assistant</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-4">
                    Your persistent AI companion. Always available, context-aware, and ready to help across every page and feature.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue mt-1">✓</span>
                      <span>Persistent sidebar with contextual suggestions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue mt-1">✓</span>
                      <span>Voice-first interface (Apple Shortcuts integration)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue mt-1">✓</span>
                      <span>Cross-platform awareness (knows what you&apos;re working on)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue mt-1">✓</span>
                      <span>Instant responses with transparent cost display</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* ASO Engine */}
            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary-purple/20 rounded-full p-3">
                      <TrendingUp className="w-6 h-6 text-secondary-purple-light" />
                    </div>
                    <h3 className="text-3xl font-bold">ASO Engine</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-4">
                    Automated SEO opportunity discovery. Find the keywords your competitors missed. Track rankings. Execute campaigns.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light mt-1">✓</span>
                      <span>Real-time keyword opportunity feed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light mt-1">✓</span>
                      <span>Competitor gap analysis with traffic estimates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light mt-1">✓</span>
                      <span>Automated content brief generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light mt-1">✓</span>
                      <span>Campaign tracking with ROI transparency</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-secondary-purple/20 via-primary-blue/10 to-transparent rounded-xl p-8 border border-secondary-purple/20 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-24 h-24 text-secondary-purple-light mx-auto mb-4 opacity-50" />
                    <p className="text-sm text-gray-400">ASO Dashboard</p>
                    <p className="text-xs text-gray-500">Coming Soon</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Design Philosophy */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-gradient">Your Brain</span>
            </h2>
            <p className="text-xl text-gray-300">
              ADHD-optimized design isn&apos;t just a feature. It&apos;s the foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">High Contrast Visual Hierarchy</h3>
              <p className="text-gray-300 mb-4">
                Electric blue (#0066CC), hot pink (#FF0080), purple (#6600CC) against near-black (#0A0A0B).
                Instant recognition. No squinting. No confusion.
              </p>
              <p className="text-gray-400 text-sm">
                Every color choice is intentional. Every gradient serves a purpose. Your eyes know where to go.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Dopamine Feedback Loops</h3>
              <p className="text-gray-300 mb-4">
                Hover states glow. Buttons respond instantly (&lt; 100ms). Completed tasks celebrate. Progress bars animate.
              </p>
              <p className="text-gray-400 text-sm">
                Your brain gets the reward it needs to stay engaged. No sluggish interfaces. No dead clicks.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Parallel Information Processing</h3>
              <p className="text-gray-300 mb-4">
                Multiple streams of information visible simultaneously. No tabbing. No context switching. Just flow.
              </p>
              <p className="text-gray-400 text-sm">
                Dashboard + AI Assistant + Briefing Overlay = three parallel threads without cognitive overload.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Voice-First Interface</h3>
              <p className="text-gray-300 mb-4">
                Apple Shortcuts integration. Speak your commands. Get instant responses. No typing required.
              </p>
              <p className="text-gray-400 text-sm">
                Perfect for when your hands are full or your brain is in flow state. Just talk. XynergyOS listens.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Technical Specs */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Under the <span className="text-gradient">Hood</span>
            </h2>
            <p className="text-xl text-gray-300">
              Production-deployed on Google Cloud Platform. Built to scale.
            </p>
          </div>

          <Card variant="elevated" className="border-2 border-primary-blue/30">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-blue/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Database className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>React + TypeScript</li>
                  <li>FastAPI Backend</li>
                  <li>Supabase Database</li>
                  <li>GCP Deployment</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-secondary-purple/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-secondary-purple-light" />
                </div>
                <h3 className="text-xl font-bold mb-2">Performance</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>94 React Components</li>
                  <li>25+ Page Views</li>
                  <li>&lt; 100ms Interactions</li>
                  <li>Real-time Updates</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-accent-pink/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">Design System</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Glassmorphic UI</li>
                  <li>Inter + JetBrains Mono</li>
                  <li>ADHD-Optimized</li>
                  <li>Jony Ive Inspired</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Beta CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Try It?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Beta access is limited. Join the waitlist now to get early access to XynergyOS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/beta" size="lg">
              Join Beta Waitlist
            </Button>
            <Button href="/xynergy" variant="outline" size="lg">
              Learn More About Xynergy
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            Current Status: Production-Deployed • Beta Launch: Q1 2025 • Pricing: Usage-Based ($0.50/query)
          </p>
        </div>
      </Section>
    </>
  );
}
