import { Metadata } from 'next';
import { GraduationCap, Handshake, Users, Briefcase, Mail, Phone } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Contact — Let\'s Talk',
  description: 'Choose how you want to work with ClearForge. Each path is designed to capture what matters and route it properly.',
  canonical: '/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let&apos;s <span className="text-gradient">Talk</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Choose Your Path. We&apos;ll Ask The Right Questions.
          </p>

          <p className="text-lg text-gray-400">
            Each conversation starts with understanding what you need. Pick the path that fits, answer the questions that matter, and we&apos;ll route it to the right place.
          </p>
        </div>
      </Section>

      {/* 6 Tiles */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Beta Program */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-accent-pink/30 hover:border-accent-pink/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="bg-accent-pink/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-accent-pink" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Beta Program</h2>
                <p className="text-gray-300 mb-4">
                  Join the first 100 partners. Answer qualification questions. Get scored. Get started.
                </p>
                <p className="text-sm text-gray-500">
                  Response: 48 hours
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/beta" className="w-full group-hover:bg-accent-pink/90">
                  Apply for Beta
                </Button>
              </div>
            </div>
          </Card>

          {/* Training */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-primary-blue/30 hover:border-primary-blue/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="bg-primary-blue/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary-blue" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Training Inquiry</h2>
                <p className="text-gray-300 mb-4">
                  Data, AI, or Combined. Virtual or on-site. Tell us what your team needs to learn.
                </p>
                <p className="text-sm text-gray-500">
                  Response: 48-72 hours
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/training" className="w-full group-hover:bg-primary-blue/90">
                  Explore Training
                </Button>
              </div>
            </div>
          </Card>

          {/* Partnership */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-secondary-purple/30 hover:border-secondary-purple/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="bg-secondary-purple/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Handshake className="w-8 h-8 text-secondary-purple-light" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Partnership</h2>
                <p className="text-gray-300 mb-4">
                  Co-build products and playbooks. Share learnings, keep the keys. Let&apos;s talk.
                </p>
                <p className="text-sm text-gray-500">
                  Response: 48-72 hours
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/solutions/partnership" variant="outline" className="w-full border-secondary-purple-light text-secondary-purple-light hover:bg-secondary-purple hover:text-white">
                  Explore Partnership
                </Button>
              </div>
            </div>
          </Card>

          {/* Consulting */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-primary-blue/30 hover:border-primary-blue/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="bg-primary-blue/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary-blue" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Consulting</h2>
                <p className="text-gray-300 mb-4">
                  Technology + Data + AI integration. Hands-on experts who build with you.
                </p>
                <p className="text-sm text-gray-500">
                  Response: 48-72 hours
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/solutions/consulting" className="w-full group-hover:bg-primary-blue/90">
                  Explore Consulting
                </Button>
              </div>
            </div>
          </Card>

          {/* Custom Solutions */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-accent-pink/30 hover:border-accent-pink/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="bg-accent-pink/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-accent-pink" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Custom Solutions</h2>
                <p className="text-gray-300 mb-4">
                  Bespoke systems on top of ClearForge Foundry. Fully owned and auditable by you.
                </p>
                <p className="text-sm text-gray-500">
                  Response: 48-72 hours
                </p>
              </div>

              <div className="mt-auto">
                <Button href="/solutions/custom" variant="outline" className="w-full border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                  Explore Custom
                </Button>
              </div>
            </div>
          </Card>

          {/* General / Other */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-secondary-purple/30 hover:border-secondary-purple/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="bg-secondary-purple/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-secondary-purple-light" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Something Else</h2>
                <p className="text-gray-300 mb-4">
                  Media, speaking, community, or anything else. Direct email works best.
                </p>
                <p className="text-sm text-gray-500">
                  Response: 24-48 hours
                </p>
              </div>

              <div className="mt-auto">
                <a
                  href="mailto:hello@clearforgetech.com"
                  className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-secondary-purple-light text-secondary-purple-light hover:bg-secondary-purple hover:text-white focus:ring-secondary-purple-light px-6 py-3 text-base w-full text-center"
                >
                  Email Us Directly
                </a>
              </div>
            </div>
          </Card>

        </div>
      </Section>

      {/* Why This Way */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why <span className="text-gradient">This Approach</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Better Qualification</h3>
              <p className="text-gray-300">
                Each path asks the right questions for that type of engagement. We learn what matters. You don&apos;t waste time explaining context.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Smarter Routing</h3>
              <p className="text-gray-300">
                Your inquiry gets routed to the right person with the right context. Scored for fit. Tracked in our system. No information gets lost.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Office Info */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient">Based</span> in Port St. Lucie, Florida
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Virtual first. Remote collaboration primary.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Business hours EST: Monday - Friday, 9am - 5pm
          </p>
          <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30 max-w-2xl mx-auto">
            <p className="text-accent-pink font-semibold">
              We&apos;re a small, focused team building in public. Response times may vary during intensive development, but we&apos;ll always get back to you.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
