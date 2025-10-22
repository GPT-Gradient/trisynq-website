import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import LiveDashboardWidget from '@/components/ui/LiveDashboardWidget';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Enterprise Capability. Small Business Reality.',
  description: 'Intelligence-driven platform that doesn\'t require enterprise budgets. Built in The Foundry. Proven in The Forge. Delivered with transparency.',
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark z-10" />
          <img
            src="/images/hero-background.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center max-w-4xl mx-auto relative z-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Enterprise Capability. Small Business Reality.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Intelligence-driven platform that doesn&apos;t require enterprise budgets.
            Built in The Foundry. Proven in The Forge. Delivered with transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/foundry/platform" size="lg">
              Explore Products
            </Button>
            <Button href="/forge" variant="outline" size="lg">
              Learn & Build Free
            </Button>
          </div>
        </div>
      </Section>

      {/* The Foundry Platform Overview */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Intelligence-Driven Platform
            </h2>
            <p className="text-xl text-gray-300">
              42+ AI-powered microservices. Real-time context. Enterprise-grade clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-3 text-primary-blue">Foundry Platform</h3>
              <p className="text-gray-300 mb-6">
                The proprietary AI engine powering everything
              </p>
              <Button href="/foundry/platform" variant="outline">Learn More</Button>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-bold mb-3 text-secondary-purple-light">Product Suites</h3>
              <p className="text-gray-300 mb-6">
                Business OS. Search Visibility. More coming.
              </p>
              <Button href="/foundry/business/os" variant="outline">View Products</Button>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-3 text-accent-pink">Foundry Connect</h3>
              <p className="text-gray-300 mb-6">
                API access for developers and integrators
              </p>
              <Button href="/foundry/connect" variant="outline">Request Access</Button>
            </Card>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Not Just Products. Full Partnership.
            </h2>
            <p className="text-xl text-gray-300">
              Consulting. Custom development. Training. Continuum partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4">Consulting & Training</h3>
              <p className="text-gray-300 mb-4">
                Operators-first knowledge transfer. No consultant-speak. Practical enablement.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300 mb-6">
                <li>• Strategy & implementation consulting</li>
                <li>• Team training & workshops</li>
                <li>• Ongoing advisory partnerships</li>
              </ul>
              <Button href="/services/consulting">Learn More</Button>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4">Custom Development</h3>
              <p className="text-gray-300 mb-4">
                We build, you own. White-label capabilities. Continuum co-creation.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300 mb-6">
                <li>• Custom product development</li>
                <li>• White-label platform access</li>
                <li>• Continuum partnership program</li>
              </ul>
              <Button href="/services/custom">Discuss Your Needs</Button>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why ClearForge Exists (No Gatekeeping) */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            No Gatekeeping
          </h2>

          <div className="text-xl space-y-6 text-gray-300 mb-12">
            <p>
              Technology shouldn&apos;t require enterprise budgets. We&apos;re changing that by
              making intelligence accessible—not just affordable, but actually usable.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div>
                <h3 className="text-2xl font-semibold mb-3">What Should Change</h3>
                <ul className="space-y-3">
                  <li>• $50K agency bills → $5K platform access</li>
                  <li>• 6-month implementations → 6-week deployments</li>
                  <li>• Consultant dependency → Your team ownership</li>
                  <li>• Black-box tools → Transparent intelligence</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Built For</h3>
                <ul className="space-y-3">
                  <li>• Founders managing 6+ projects</li>
                  <li>• SMBs competing with enterprise brands</li>
                  <li>• Teams who need control, not consultants</li>
                  <li>• Builders who want proof, not promises</li>
                </ul>
              </div>
            </div>

            <p className="mt-12 text-2xl font-semibold">
              We built The Foundry to prove it&apos;s possible.
            </p>
          </div>

          <div className="mt-12">
            <Button href="/about/mission" variant="outline">
              Read Our Mission
            </Button>
          </div>
        </div>
      </Section>

      {/* The Continuum */}
      <Section background="gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Validate: The Continuum
            </h2>
            <p className="text-xl text-gray-300">
              We prove products work before we launch them. Every Foundry product
              starts as a Continuum project—used internally, validated with partners,
              then released commercially.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Internal Use</h3>
              <p className="text-gray-300">
                We use it ourselves first. If it doesn&apos;t work for us, we don&apos;t ship it.
              </p>
            </Card>

            <Card variant="elevated">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Continuum Partners</h3>
              <p className="text-gray-300">
                12-18 month validation with real companies. Build case studies organically.
              </p>
            </Card>

            <Card variant="elevated">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Product Launch</h3>
              <p className="text-gray-300">
                Commercial release with proven methodology. Not promises—proof.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Current Continuum Projects</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              <Card variant="bordered" className="border-2 border-purple-500/50">
                <h4 className="text-xl font-semibold mb-2">Project NEXUS</h4>
                <p className="mb-4 text-gray-300">Search visibility validation → Foundry Search suite</p>
                <span className="text-sm text-blue-400">Phase 1 Starting Q1 2026</span>
              </Card>

              <Card variant="bordered" className="border-2 border-blue-500/50">
                <h4 className="text-xl font-semibold mb-2">Project RE-Connect</h4>
                <p className="mb-4 text-gray-300">Real estate transparency & intelligence</p>
                <span className="text-sm text-purple-400">Early Development</span>
              </Card>
            </div>

            <Button href="/continuum" variant="outline">
              Explore The Continuum
            </Button>
          </div>
        </div>
      </Section>

      {/* Proof & Transparency */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Public Dashboard
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Full transparency into platform health, product development, and Continuum progress.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="elevated">
              <div className="text-3xl font-bold text-blue-400 mb-2">42+</div>
              <p className="text-gray-300">Microservices Operational</p>
            </Card>
            <Card variant="elevated">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <p className="text-gray-300">Platform Uptime</p>
            </Card>
            <Card variant="elevated">
              <div className="text-3xl font-bold text-pink-400 mb-2">Q4 2025</div>
              <p className="text-gray-300">Business: OS Beta</p>
            </Card>
          </div>

          <Button href="/dashboard" size="lg">
            View Full Dashboard
          </Button>
        </div>
      </Section>

      {/* Beta CTA */}
      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Beta Program
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get early access to Foundry Business: OS with significant benefits for beta users.
          </p>

          <div className="space-y-4 mb-8 text-left max-w-xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-gray-300">Priority access to new features</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-gray-300">Significant early adopter benefits</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-gray-300">Direct input on product development</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-gray-300">Dedicated support during beta period</p>
            </div>
          </div>

          <Button href="/contact?type=beta-os" size="lg">
            Apply for Beta Access
          </Button>
        </div>
      </Section>
    </>
  );
}
