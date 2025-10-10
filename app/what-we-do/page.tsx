import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { continuumProjects } from '@/data/projects';
import {
  Target,
  Handshake,
  Cpu,
  Code,
  Users,
  BookOpen,
  Search,
  BarChart,
  GraduationCap,
  Heart,
  Shield,
  Building,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'What We Do',
  description: 'We turn advanced technology into obvious outcomes.',
  canonical: '/what-we-do',
});

const iconMap: Record<string, any> = {
  Search,
  BarChart,
  GraduationCap,
  Heart,
  Shield,
  Building,
};

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What We <span className="text-gradient">Do</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            We turn advanced technology into obvious outcomes.
          </p>
          <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30 inline-block">
            <p className="text-lg text-white font-semibold">
              Clarity in. Leverage out.
            </p>
          </div>
        </div>
      </Section>

      {/* Solutions Section */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Consulting & Advisory */}
            <Card variant="elevated" className="group hover:shadow-2xl hover:shadow-primary-blue/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <Target className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">Consulting & Advisory</h3>
                  <p className="text-lg text-accent-pink font-semibold mb-4">
                    Technology + Data + AI, Fully Integrated
                  </p>
                  <p className="text-gray-300 mb-6">
                    We don&apos;t separate these because they&apos;re not separate. Complete assessment, strategic roadmap, and implementation support that transfers knowledge to your team.
                  </p>
                  <Button href="/solutions/consulting" variant="ghost" className="group-hover:bg-primary-blue/20">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Partnership Development */}
            <Card variant="elevated" className="group hover:shadow-2xl hover:shadow-primary-blue/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <Handshake className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">Partnership Development</h3>
                  <p className="text-lg text-accent-pink font-semibold mb-4">
                    Great Idea, No Technical Capability? We&apos;ll Build It With You
                  </p>
                  <p className="text-gray-300 mb-6">
                    Turn your vision into reality with enterprise-grade technology. We become your technical partner, building alongside you while transferring knowledge every step.
                  </p>
                  <Button href="/solutions/partnership" variant="ghost" className="group-hover:bg-primary-blue/20">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Platform Solutions */}
            <Card variant="elevated" className="group hover:shadow-2xl hover:shadow-primary-blue/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <Cpu className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">Platform Solutions</h3>
                  <p className="text-lg text-accent-pink font-semibold mb-4">
                    XynergyOS and Proven Systems
                  </p>
                  <p className="text-gray-300 mb-6">
                    Leverage our battle-tested platforms and frameworks. Get enterprise capabilities at human-scale costs with full transparency and control.
                  </p>
                  <Button href="/solutions/platform" variant="ghost" className="group-hover:bg-primary-blue/20">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Custom Development */}
            <Card variant="elevated" className="group hover:shadow-2xl hover:shadow-primary-blue/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <Code className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">Custom Development</h3>
                  <p className="text-lg text-accent-pink font-semibold mb-4">
                    Enterprise-Grade at Human-Scale Costs
                  </p>
                  <p className="text-gray-300 mb-6">
                    Custom solutions built with Fortune 100 expertise, small business pricing, and complete knowledge transfer. You own everything we build.
                  </p>
                  <Button href="/solutions/custom" variant="ghost" className="group-hover:bg-primary-blue/20">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Community Section */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the <span className="text-gradient">Community</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The 20% Army */}
            <Card variant="elevated" className="group hover:shadow-2xl hover:shadow-accent-pink/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-10 h-10 text-accent-pink flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">The 20% Army</h3>
                  <p className="text-lg text-accent-pink font-semibold mb-4">
                    Join the Pioneers
                  </p>
                  <p className="text-gray-300 mb-6">
                    Be part of the movement proving transparency works. Early adopters get lifetime access, unlimited affiliate revenue, and direct team access across all Continuum platforms.
                  </p>
                  <Button href="/community/20-percent-army" variant="primary" className="group-hover:bg-accent-pink/90">
                    Join the Movement <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Resources */}
            <Card variant="elevated" className="group hover:shadow-2xl hover:shadow-secondary-purple/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <BookOpen className="w-10 h-10 text-secondary-purple-light flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">Xynergy Launch</h3>
                  <p className="text-lg text-secondary-purple-light font-semibold mb-4">
                    Coming Soon - Freemium Educational Platform
                  </p>
                  <p className="text-gray-300 mb-6">
                    Learn to do it yourself. We&apos;ll show you what expensive products actually do and how to accomplish the same goals at a fraction of the cost.
                  </p>
                  <div className="bg-secondary-purple/20 rounded-xl p-4 border border-secondary-purple-light/30">
                    <p className="text-sm text-gray-300">
                      Educational content launching soon. No subscription required - just transparent knowledge sharing.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Continuum Projects Section */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-gradient">Continuum Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world proof that transparency works. Six initiatives proving technology can democratize access across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {continuumProjects.map((project) => {
              const IconComponent = iconMap[project.icon];
              return (
                <Card
                  key={project.id}
                  variant="bordered"
                  className="group hover:border-primary-blue/50 hover:shadow-xl hover:shadow-primary-blue/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    {IconComponent && <IconComponent className="w-8 h-8 text-primary-blue flex-shrink-0" />}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                      <p className="text-sm text-accent-pink font-semibold">{project.tagline}</p>
                    </div>
                  </div>

                  <div className="bg-primary/30 rounded-xl p-3 mb-4 border border-primary-blue/20">
                    <p className="text-sm font-semibold text-primary-blue">Status: {project.status}</p>
                  </div>

                  <p className="text-gray-300 mb-6">{project.description}</p>

                  <Button
                    href={project.link}
                    variant="ghost"
                    className="w-full group-hover:bg-primary-blue/20"
                  >
                    {project.status.includes('Beta') ? 'Join Beta' : 'Follow Progress'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section - Multiple Paths */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Get <span className="text-gradient">Started?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Multiple paths based on your interests and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Beta Program */}
            <Card variant="elevated" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Join a Beta Program</h3>
              <p className="text-gray-300 mb-6">
                Get lifetime access and unlimited affiliate revenue as a Phase 1 Pioneer
              </p>
              <Button href="/beta-program" variant="primary" className="w-full">
                Explore Beta Opportunities
              </Button>
            </Card>

            {/* Book a Consultation */}
            <Card variant="elevated" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Book a Consultation</h3>
              <p className="text-gray-300 mb-6">
                Discuss your specific needs with our team
              </p>
              <Button href="/contact" variant="outline" className="w-full">
                Schedule a Call
              </Button>
            </Card>

            {/* View Dashboard */}
            <Card variant="elevated" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">See Our Transparency</h3>
              <p className="text-gray-300 mb-6">
                Check out our live public dashboard
              </p>
              <Button href="/dashboard" variant="ghost" className="w-full">
                View Live Dashboard
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-6">
              Want to learn more about our methodology?
            </p>
            <Button href="/how-we-do-it" variant="outline" size="lg">
              Explore How We Do It
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
