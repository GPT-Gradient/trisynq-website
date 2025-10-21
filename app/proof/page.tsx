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
                  No fake testimonials. No cherry-picked wins. Just real outcomes from real operators testing Foundry-powered solutions.
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

      {/* Foundry Business: OS: Real Product, Real Interface */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary-blue/20 text-primary-blue px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary-blue/30">
              Production-Deployed • Beta Coming Soon
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Foundry Business: OS</span>: Real Product. Real Interface.
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Not a mockup. Not a concept. A fully functional AI operating system deployed on Google Cloud Platform.
            </p>
            <p className="text-lg text-gray-400">
              94 React components. 25+ pages. Context-switching optimized glassmorphic design. Production-ready.
            </p>
          </div>

          {/* Feature Screenshots Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="bg-gradient-to-br from-primary-blue/20 via-secondary-purple/10 to-transparent rounded-xl p-8 border border-primary-blue/20 aspect-video flex items-center justify-center mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-blue mb-2">Command Center</p>
                  <p className="text-sm text-gray-400">Screenshot Coming Soon</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Command Center Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Multi-business project management with real-time metrics. Manage 6+ projects simultaneously with glassmorphic cards and instant visual feedback.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>✓ Real-time metrics across all projects</li>
                <li>✓ Priority-based task surfacing</li>
                <li>✓ Cross-project dependency tracking</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="bg-gradient-to-br from-secondary-purple/20 via-primary-blue/10 to-transparent rounded-xl p-8 border border-secondary-purple/20 aspect-video flex items-center justify-center mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary-purple-light mb-2">Morning Briefing</p>
                  <p className="text-sm text-gray-400">Screenshot Coming Soon</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Morning Briefing Overlay</h3>
              <p className="text-gray-300 mb-4">
                Daily intelligence digest with dopamine-optimized UI. What happened overnight, what needs attention, what opportunities emerged.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>✓ AI-curated news and market signals</li>
                <li>✓ Action items prioritized by urgency</li>
                <li>✓ Quick-action buttons for responses</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="bg-gradient-to-br from-accent-pink/20 via-secondary-purple/10 to-transparent rounded-xl p-8 border border-accent-pink/20 aspect-video flex items-center justify-center mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent-pink mb-2">Research Sessions</p>
                  <p className="text-sm text-gray-400">Screenshot Coming Soon</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Research Sessions (Strategy Lab)</h3>
              <p className="text-gray-300 mb-4">
                AI-powered competitive intelligence with full source tracking. Living Memory system captures institutional knowledge.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>✓ Multi-threaded research queries</li>
                <li>✓ Source attribution (no hallucinations)</li>
                <li>✓ Export to reports and dashboards</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="bg-gradient-to-br from-primary-blue/20 via-accent-pink/10 to-transparent rounded-xl p-8 border border-primary-blue/20 aspect-video flex items-center justify-center mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-blue mb-2">ASO Engine</p>
                  <p className="text-sm text-gray-400">Screenshot Coming Soon</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">ASO Engine (Automated SEO)</h3>
              <p className="text-gray-300 mb-4">
                Real-time keyword opportunity feed with competitor gap analysis. Automated content briefs with ROI transparency.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>✓ Keyword opportunities with traffic estimates</li>
                <li>✓ Competitor tracking and analysis</li>
                <li>✓ Campaign tracking with transparent ROI</li>
              </ul>
            </Card>
          </div>

          {/* Design System Proof */}
          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Context-Switching Optimized Design System</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary-blue/20 rounded-xl p-4 mb-3">
                  <p className="text-3xl font-bold text-primary-blue">#0066CC</p>
                </div>
                <p className="text-sm text-gray-400">Electric Blue</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary-purple/20 rounded-xl p-4 mb-3">
                  <p className="text-3xl font-bold text-secondary-purple-light">#6600CC</p>
                </div>
                <p className="text-sm text-gray-400">Purple</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-pink/20 rounded-xl p-4 mb-3">
                  <p className="text-3xl font-bold text-accent-pink">#FF0080</p>
                </div>
                <p className="text-sm text-gray-400">Hot Pink</p>
              </div>
              <div className="text-center">
                <div className="bg-white/5 rounded-xl p-4 mb-3">
                  <p className="text-3xl font-bold text-white">#0A0A0B</p>
                </div>
                <p className="text-sm text-gray-400">Near Black</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-300 mb-2">High contrast for instant recognition. Dopamine feedback loops. Parallel information processing.</p>
              <p className="text-sm text-gray-400">Built for managing complexity. Stunning for everyone.</p>
            </div>
          </Card>

          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20 mb-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary-blue mb-2">94</p>
                <p className="text-gray-300">React Components</p>
                <p className="text-sm text-gray-400 mt-2">Production-tested UI library</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary-purple-light mb-2">25+</p>
                <p className="text-gray-300">Page Views</p>
                <p className="text-sm text-gray-400 mt-2">Full feature coverage</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent-pink mb-2">&lt; 100ms</p>
                <p className="text-gray-300">Interaction Speed</p>
                <p className="text-sm text-gray-400 mt-2">Instant visual feedback</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button href="/foundry/business" size="lg" className="mr-4">
              See Full Preview
            </Button>
            <Button href="/beta" variant="outline" size="lg">
              Join Beta Waitlist
            </Button>
          </div>
        </div>
      </Section>

      {/* Dashboard Preview */}
      <Section background="medium">
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
              Build on ClearForge Foundry
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
