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
            The <span className="text-gradient">Forge</span> — Where Technology and Transparency Meet.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            One hub. Four doors: Topics, Xynergy, Proof, Community.
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
