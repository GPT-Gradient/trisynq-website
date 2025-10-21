import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Cpu, Search, Code, Wrench } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Tools — The Forge',
  description: 'Access ClearForge Foundry tools: Foundry Business: OS, Foundry Search: Visibility, and Foundry Connect API.',
  canonical: '/forge/tools',
});

export default function ForgeToolsPage() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-primary-blue/20 text-primary-blue text-sm font-semibold px-4 py-2 rounded-full">
              The Forge • Tools
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Tools</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            The products we forge. Ready to use. Built for transparency.
          </p>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">ClearForge Products</span>
          </h2>

          <div className="space-y-8">
            <Card variant="elevated" className="border-l-4 border-primary-blue">
              <div className="flex items-start gap-6">
                <div className="bg-primary-blue/20 rounded-full p-4 flex-shrink-0">
                  <Cpu className="w-10 h-10 text-primary-blue" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Foundry Business: OS</h3>
                    <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-semibold">
                      BETA
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Your AI operating system for managing 6+ projects. Context-switching optimized. Researches, plans, executes, proves.
                  </p>
                  <div className="flex gap-3">
                    <Button href="/foundry/business" size="sm">
                      Learn More
                    </Button>
                    <Button href="/beta" variant="outline" size="sm">
                      Apply for Beta
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-accent-pink">
              <div className="flex items-start gap-6">
                <div className="bg-accent-pink/20 rounded-full p-4 flex-shrink-0">
                  <Search className="w-10 h-10 text-accent-pink" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Foundry Search: Visibility</h3>
                    <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-xs font-semibold">
                      Q2-Q3 2026
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Adaptive search optimization. The new way to get found. Built on ClearForge Foundry intelligence.
                  </p>
                  <div className="flex gap-3">
                    <Button href="/foundry/search" size="sm">
                      Learn More
                    </Button>
                    <Button href="/beta" variant="outline" size="sm">
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-secondary-purple-light">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-purple/20 rounded-full p-4 flex-shrink-0">
                  <Code className="w-10 h-10 text-secondary-purple-light" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Foundry Connect (API)</h3>
                    <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-xs font-semibold">
                      Q1 2026
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Direct API access to ClearForge Foundry intelligence. Build custom integrations on your terms.
                  </p>
                  <div className="flex gap-3">
                    <Button href="/foundry/connect" size="sm">
                      Learn More
                    </Button>
                    <Button href="/contact" variant="outline" size="sm">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="text-gradient">Why These Tools?</span>
          </h2>

          <Card variant="elevated" className="mb-8">
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Every tool we build starts with the same question: <strong className="text-white">What do businesses actually need?</strong>
              </p>
              <p>
                Not what Big Tech wants to sell. Not what sounds impressive in a pitch deck. What solves real problems for the 44M small and mid-market businesses that make up 43% of GDP.
              </p>
              <p>
                We forge tools that are transparent, accessible, and built to compound value over time—not extract it.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <Wrench className="w-8 h-8 text-primary-blue mb-3" />
              <h3 className="text-lg font-bold mb-2">Built to Own</h3>
              <p className="text-sm text-gray-300">
                Not black boxes you rent. Systems you understand and control.
              </p>
            </Card>
            <Card>
              <Wrench className="w-8 h-8 text-accent-pink mb-3" />
              <h3 className="text-lg font-bold mb-2">Built to Scale</h3>
              <p className="text-sm text-gray-300">
                Start small, grow intelligently. No enterprise complexity tax.
              </p>
            </Card>
            <Card>
              <Wrench className="w-8 h-8 text-secondary-purple-light mb-3" />
              <h3 className="text-lg font-bold mb-2">Built to Prove</h3>
              <p className="text-sm text-gray-300">
                Every claim backed by public demos, code, and outcomes.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Start Building?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore the full ClearForge Foundry platform and see how it all fits together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/foundry" size="lg">
              Explore Foundry
            </Button>
            <Button href="/public-dashboard" variant="outline" size="lg">
              See the Proof
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
