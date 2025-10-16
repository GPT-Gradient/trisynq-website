import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Cpu, FileCheck, Users, FileText } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'The Forge — Where Technology and Transparency Meet',
  description: 'One hub. Four doors: Topics, Xynergy, Proof, Community.',
  canonical: '/forge',
});

export default function ForgePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The <span className="text-gradient">Forge</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Where technology and transparency meet. Where complexity gets melted down and reforged into clarity.
          </p>
          <p className="text-lg text-gray-400">
            One hub. Four doors: Topics, Xynergy, Proof, Community.
          </p>
        </div>
      </Section>

      {/* What Is The Forge? */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            What Is <span className="text-gradient">The Forge?</span>
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-12">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                <strong className="text-white">The Forge</strong> isn&apos;t just a metaphor—it&apos;s our philosophy made visible.
              </p>

              <p className="text-lg">
                In a real forge, you take raw materials—iron ore, carbon, heat—and through intense pressure and precise technique, you create something stronger, cleaner, more useful. You remove impurities. You reshape what was chaotic into something purposeful.
              </p>

              <p className="text-lg">
                That&apos;s what we do with enterprise technology. We take systems that are bloated, opaque, and artificially complex—the &ldquo;raw ore&rdquo; of Big Tech—and we forge them into something accessible, transparent, and genuinely useful for the businesses that make up 43% of GDP.
              </p>

              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <p className="text-base text-gray-300">
                  <strong className="text-primary-blue">The Forge is where we do the work</strong>—both the technical work of building systems and the human work of translating complexity into clarity. It&apos;s where we share what we learn, prove what we claim, and build together with our community.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">The Old Way</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">×</span>
                  <span>Black boxes you rent but never own</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">×</span>
                  <span>Complexity sold as sophistication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">×</span>
                  <span>Documentation that hides more than it reveals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">×</span>
                  <span>Promises without proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">×</span>
                  <span>Success stories without context or numbers</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">The Forge Way</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span>Explainable systems you can audit and own</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span>Complexity stripped to essential patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span>Documentation that teaches, not obscures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span>Proof before promises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span>Full outcomes with honest context</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Four Doors */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Four <span className="text-gradient">Doors</span>
            </h2>
            <p className="text-xl text-gray-300">
              Every piece of The Forge serves a purpose. Here&apos;s how it all connects.
            </p>
          </div>

          {/* Four Ecosystem Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Topics Card */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-secondary-purple/30 hover:border-secondary-purple/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-secondary-purple/20 rounded-full p-4">
                    <FileText className="w-10 h-10 text-secondary-purple-light" />
                  </div>
                  <div className="bg-secondary-purple/20 text-secondary-purple-light px-4 py-1 rounded-full text-sm font-semibold">
                    Content Hub
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Topics</h2>
                <p className="text-sm text-gray-300 mb-6">
                  Blogs, opinions, how-tos, white papers.
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/forge/topics" variant="outline" className="w-full border-secondary-purple-light text-secondary-purple-light hover:bg-secondary-purple hover:text-white">
                  Explore Topics
                </Button>
              </div>
            </div>
          </Card>

          {/* Xynergy Card */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-primary-blue/30 hover:border-primary-blue/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary-blue/20 rounded-full p-4">
                    <Cpu className="w-10 h-10 text-primary-blue" />
                  </div>
                  <div className="bg-primary-blue/20 text-primary-blue px-4 py-1 rounded-full text-sm font-semibold">
                    Engine
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Xynergy</h2>
                <p className="text-sm text-gray-300 mb-6">
                  Researches, plans, executes, proves.
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/xynergy" className="w-full group-hover:bg-primary-blue/90">
                  Explore Xynergy
                </Button>
              </div>
            </div>
          </Card>

          {/* Proof Card */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-accent-pink/30 hover:border-accent-pink/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-accent-pink/20 rounded-full p-4">
                    <FileCheck className="w-10 h-10 text-accent-pink" />
                  </div>
                  <div className="bg-accent-pink/20 text-accent-pink px-4 py-1 rounded-full text-sm font-semibold">
                    Results
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Proof</h2>
                <p className="text-sm text-gray-300 mb-6">
                  Receipts, outcomes, public demos.
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/proof" variant="outline" className="w-full border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                  See the Proof
                </Button>
              </div>
            </div>
          </Card>

          {/* Community Card */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-accent-pink/30 hover:border-accent-pink/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-accent-pink/20 rounded-full p-4">
                    <Users className="w-10 h-10 text-accent-pink" />
                  </div>
                  <div className="bg-accent-pink/20 text-accent-pink px-4 py-1 rounded-full text-sm font-semibold">
                    Coming Soon
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Community</h2>
                <p className="text-sm text-gray-300 mb-6">
                  Engage, ask, learn, earn. (Coming Soon)
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/community" variant="outline" className="w-full border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
          </div>
        </div>
      </Section>

      {/* Featured Topics Section - Placeholder */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Featured Topics</span>
            </h2>
            <p className="text-xl text-gray-300">
              Blogs, opinions, playbooks, and insights on transparency, automation, and growth.
            </p>
          </div>

          <Card variant="elevated" className="text-center py-12">
            <p className="text-lg text-gray-300 mb-6">
              Content hub launching soon. Stay tuned for deep dives, how-tos, and thought leadership.
            </p>
            <Button href="/forge/topics" variant="outline">
              Explore Topics
            </Button>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Start?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Pick your entry point and explore the ClearForge ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/xynergy" size="lg">
              Explore Xynergy
            </Button>
            <Button href="/proof" variant="outline" size="lg">
              See the Proof
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
