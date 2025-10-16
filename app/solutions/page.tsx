import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Cpu, Users, Wrench, Handshake, GraduationCap, Briefcase } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Solutions — Method, Not Magic',
  description: 'Composable outcomes powered by Xynergy. Transparent. Explainable. Yours.',
  canonical: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Solutions — Method, <span className="text-gradient">Not Magic</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Composable outcomes powered by Xynergy. Transparent. Explainable. Yours.
          </p>
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Platform */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-primary-blue/30 hover:border-primary-blue/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary-blue/20 rounded-full p-4">
                    <Cpu className="w-10 h-10 text-primary-blue" />
                  </div>
                  <div className="bg-accent-pink/20 text-accent-pink px-4 py-1 rounded-full text-xs font-semibold">
                    Powered by Xynergy
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">Platform</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Stand up explainable automation, content ops, and analytics with provenance.
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/solutions/platform" className="w-full group-hover:bg-primary-blue/90">
                  Explore Platform
                </Button>
              </div>
            </div>
          </Card>

          {/* Consulting */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-accent-pink/30 hover:border-accent-pink/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-accent-pink/20 rounded-full p-4">
                    <Users className="w-10 h-10 text-accent-pink" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">Consulting</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Hands-on experts who build with you—no black boxes, no vendor lock-in.
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/solutions/consulting" variant="outline" className="w-full border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                  Explore Consulting
                </Button>
              </div>
            </div>
          </Card>

          {/* Custom */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-secondary-purple/30 hover:border-secondary-purple/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-secondary-purple/20 rounded-full p-4">
                    <Wrench className="w-10 h-10 text-secondary-purple-light" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">Custom</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Bespoke systems on top of Xynergy services, fully owned and auditable.
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/solutions/custom" variant="outline" className="w-full border-secondary-purple-light text-secondary-purple-light hover:bg-secondary-purple hover:text-white">
                  Explore Custom
                </Button>
              </div>
            </div>
          </Card>

          {/* Partnership */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-primary-blue/30 hover:border-primary-blue/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary-blue/20 rounded-full p-4">
                    <Handshake className="w-10 h-10 text-primary-blue" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">Partnership</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Co-build products and playbooks. Share the learnings, keep the keys.
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/solutions/partnership" className="w-full group-hover:bg-primary-blue/90">
                  Explore Partnership
                </Button>
              </div>
            </div>
          </Card>

          {/* Training */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-accent-pink/30 hover:border-accent-pink/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-accent-pink/20 rounded-full p-4">
                    <GraduationCap className="w-10 h-10 text-accent-pink" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">Training</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Learn enterprise data and AI patterns. Virtual or on-site. Transfer knowledge, not dependency.
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/training" variant="outline" className="w-full border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                  Explore Training
                </Button>
              </div>
            </div>
          </Card>

          {/* B2B */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-secondary-purple/30 hover:border-secondary-purple/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-secondary-purple/20 rounded-full p-4">
                    <Briefcase className="w-10 h-10 text-secondary-purple-light" />
                  </div>
                  <div className="bg-accent-pink/20 text-accent-pink px-4 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">B2B Services</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Comprehensive B2B solutions and services designed for scale. Roadmap in development.
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/solutions/b2b" variant="outline" className="w-full border-secondary-purple-light text-secondary-purple-light hover:bg-secondary-purple hover:text-white">
                  View Roadmap
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore how Xynergy powers transparent, explainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/xynergy" size="lg">
              See the Power
            </Button>
            <Button href="/transparency" variant="outline" size="lg">
              Transparency Commitment
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
