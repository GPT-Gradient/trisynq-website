import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Eye, Zap, Gift, Network, Users, XCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Philosophy of the Forge',
  description: 'Principles we won&apos;t compromise: clarity, transparency, human impact.',
  canonical: '/about/team-philosophy',
});

export default function TeamPhilosophyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Philosophy of the <span className="text-gradient">Forge</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Principles we won&apos;t compromise: clarity, transparency, human impact.
          </p>
        </div>
      </Section>

      {/* Four Principles */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Four <span className="text-gradient">Principles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-3 text-primary-blue">Clarity Over Cleverness</h3>
              <p className="text-xl text-gray-300">
                If it reads smart but says nothing, it&apos;s gone.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-3 text-accent-pink">Explainable by Design</h3>
              <p className="text-xl text-gray-300">
                Every system we build can be explained.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-3 text-secondary-purple-light">Human First</h3>
              <p className="text-xl text-gray-300">
                Tools amplify judgment; they never replace it.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-3 text-primary-blue">Receipts, Not Rhetoric</h3>
              <p className="text-xl text-gray-300">
                Claims come with proof. Always.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* What We're NOT */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We&apos;re <span className="text-gradient">NOT</span>
            </h2>
            <p className="text-xl text-gray-400">
              Clear differentiation matters. Here&apos;s what we refuse to be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="bordered" className="border-red-500/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">NOT another agency promising miracles</h3>
              </div>
              <p className="text-gray-400">
                We&apos;re not selling dreams. We&apos;re building real capabilities with transparent methodology.
              </p>
            </Card>

            <Card variant="bordered" className="border-red-500/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">NOT selling get-rich courses</h3>
              </div>
              <p className="text-gray-400">
                We build platforms and partnerships, not educational products pretending to be business solutions.
              </p>
            </Card>

            <Card variant="bordered" className="border-red-500/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">NOT building another lock-in SaaS</h3>
              </div>
              <p className="text-gray-400">
                Our goal is your independence, not your dependency. We teach understanding, not reliance.
              </p>
            </Card>

            <Card variant="bordered" className="border-red-500/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">NOT asking for trust without showing work</h3>
              </div>
              <p className="text-gray-400">
                Trust is earned through transparency. We show our methodology before asking for partnership.
              </p>
            </Card>

            <Card variant="bordered" className="border-red-500/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">NOT claiming AI solves everything</h3>
              </div>
              <p className="text-gray-400">
                AI is a tool for amplification, not a magic solution. It requires strategy, implementation, and human expertise.
              </p>
            </Card>

            <Card variant="bordered" className="border-red-500/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">NOT pretending there aren&apos;t tradeoffs</h3>
              </div>
              <p className="text-gray-400">
                Every approach has limitations. We&apos;re honest about what works, what doesn&apos;t, and why.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* What We ARE */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-gradient">ARE</span>
            </h2>
            <p className="text-xl text-gray-400">
              Our commitments to you and the transformation movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated" className="border border-primary-blue/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Systematically proving transparency works</h3>
              </div>
              <p className="text-gray-300">
                Through the Continuum projects, we&apos;re building an unbreakable chain of evidence across multiple domains.
              </p>
            </Card>

            <Card variant="elevated" className="border border-primary-blue/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Building WITH partners, not FOR them</h3>
              </div>
              <p className="text-gray-300">
                You&apos;re not a customer - you&apos;re a partner. Your feedback shapes what we build. Your success proves our methodology.
              </p>
            </Card>

            <Card variant="elevated" className="border border-accent-pink/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Showing methodology openly</h3>
              </div>
              <p className="text-gray-300">
                Our competitive advantage is execution, not secrets. We share how we work so you can understand and benefit.
              </p>
            </Card>

            <Card variant="elevated" className="border border-accent-pink/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Documenting failures alongside successes</h3>
              </div>
              <p className="text-gray-300">
                Learning happens through failures. We show what doesn&apos;t work so you learn faster than we did.
              </p>
            </Card>

            <Card variant="elevated" className="border border-secondary-purple-light/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-secondary-purple-light flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Teaching understanding vs. dependency</h3>
              </div>
              <p className="text-gray-300">
                We want you to understand technology, not just use it. Independence is the goal, not subscription revenue.
              </p>
            </Card>

            <Card variant="elevated" className="border border-secondary-purple-light/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-secondary-purple-light flex-shrink-0" />
                <h3 className="text-xl font-bold text-white">Using enterprise capabilities to level playing field</h3>
              </div>
              <p className="text-gray-300">
                20 years of enterprise experience translating to SMB competitive advantage. You get the teams Fortune 500s have.
              </p>
            </Card>
          </div>

          <Card variant="bordered" className="mt-8 bg-gradient-to-br from-primary-blue/10 to-accent-pink/10 border-accent-pink/30">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Our Promise</h3>
              <p className="text-xl text-gray-300 mb-6">
                We&apos;ll bust our asses to make this work. We&apos;ll be completely transparent about the journey. We&apos;ll show you everything - successes and failures.
              </p>
              <p className="text-lg text-accent-pink font-semibold">
                If our methodology doesn&apos;t work, we don&apos;t deserve your partnership. Period.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Join the Team Section */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-accent-pink/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Want to Be Part of <span className="text-gradient">This Philosophy?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              We&apos;re building a team that lives these values every day. No pretense. Just real work with real people.
            </p>
            <p className="text-base text-gray-400 mb-8">
              Join us. Shape what we&apos;re building. Grow as we grow.
            </p>
            <Button href="/careers" size="lg">
              Explore Careers at ClearForge
            </Button>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With a <span className="text-gradient">Different Kind</span> of Partner?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If our values align with yours, let&apos;s explore partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta" size="lg">
              Apply for Beta Partnership
            </Button>
            <Button href="/mission" variant="outline" size="lg">
              Read Our Manifesto
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
