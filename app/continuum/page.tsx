import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'The Continuum: Proof Before Promises',
  description: 'How we validate products before launch. Internal use → Partner validation → Commercial release.',
});

export default function ContinuumOverviewPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Continuum
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            Proof before promises.
          </p>
          <p className="text-xl text-gray-400">
            Every Foundry product starts here—validated through real use, proven with real companies, then released commercially.
          </p>
        </div>
      </Section>

      {/* The 3-Step Process */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            How The Continuum Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Internal Use</h3>
              <p className="text-gray-300">
                We use it ourselves first. Manage our own operations with it. If it doesn&apos;t work for us, we don&apos;t ship it.
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Continuum Partners</h3>
              <p className="text-gray-300">
                12-18 month validation with 10-20 real companies. Build case studies organically. Iterate based on real feedback.
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Product Launch</h3>
              <p className="text-gray-300">
                Commercial release with proven methodology. Not promises—proof. Your success becomes evidence for everyone else.
              </p>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20 text-center">
            <p className="text-xl text-gray-300">
              This isn&apos;t a beta program where you test bugs. It&apos;s a validation partnership where we prove methodologies together—and you benefit significantly from being early.
            </p>
          </div>
        </div>
      </Section>

      {/* Current Projects */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Current Continuum Projects
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Two active validation tracks. One launching Q1 2026, one in early development.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="border-l-4 border-purple-500">
              <div className="mb-4">
                <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  PHASE 1 STARTING Q1 2026
                </span>
                <h3 className="text-3xl font-bold mb-2">Project NEXUS</h3>
                <p className="text-lg text-primary-blue mb-4">Search Visibility Intelligence</p>
              </div>

              <p className="text-gray-300 mb-6">
                Traditional SEO + AI Overviews. 12-18 month partner validation program. Recruiting 10-20 companies now for Q1 2026 launch.
              </p>

              <div className="bg-primary/30 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">What Partners Get:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Preferred pricing during validation</li>
                  <li>• Monthly transparency reports</li>
                  <li>• Direct team access</li>
                  <li>• Revenue share opportunities (select partners)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button href="/continuum/nexus" className="w-full">
                  Learn About NEXUS
                </Button>
                <Button href="/contact?type=nexus" variant="outline" className="w-full">
                  Apply for Partnership
                </Button>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-blue-500">
              <div className="mb-4">
                <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  EARLY DEVELOPMENT
                </span>
                <h3 className="text-3xl font-bold mb-2">Project RE-Connect</h3>
                <p className="text-lg text-primary-blue mb-4">Real Estate Intelligence & Transparency</p>
              </div>

              <p className="text-gray-300 mb-6">
                Bringing transparency to real estate search and transaction intelligence. Currently in early development with initial partner conversations.
              </p>

              <div className="bg-primary/30 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Development Status:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Internal architecture design</li>
                  <li>• Data source validation</li>
                  <li>• Early partner discussions</li>
                  <li>• Timeline: TBD based on NEXUS learnings</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button href="/continuum/re-connect" className="w-full">
                  Learn About RE-Connect
                </Button>
                <Button href="/contact?type=partnership" variant="outline" className="w-full">
                  Express Interest
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Partner? */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Become a Continuum Partner?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-semibold mb-3">During Validation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Preferred pricing (significant discount)</li>
                <li>• Monthly transparency reports</li>
                <li>• Direct access to founding team</li>
                <li>• Input on product development</li>
                <li>• Co-creation of case studies</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">After Launch</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Continued preferred pricing</li>
                <li>• Priority feature access</li>
                <li>• Public case study recognition</li>
                <li>• Revenue share opportunities (select partners)</li>
                <li>• First access to new Continuum projects</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Transparency */}
      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Full Transparency
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Track real-time progress, methodology updates, and partner results on our Public Dashboard.
          </p>
          <Button href="/dashboard" size="lg">
            View Public Dashboard
          </Button>
        </div>
      </Section>
    </>
  );
}
