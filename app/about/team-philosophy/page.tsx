import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Eye, Zap, Gift, Network, Users, XCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Team & Philosophy',
  description: 'Our values: transparency first, human amplification, abundance over scarcity. Learn what we are, what we aren&apos;t, and how we work with the 20% to build for the 80%.',
  canonical: '/about/team-philosophy',
});

export default function TeamPhilosophyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Values</span> & <span className="text-gradient">Philosophy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            How we work, what we believe, and why it matters for your transformation.
          </p>
        </div>
      </Section>

      {/* Our Values */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <Eye className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-blue">Transparency First</h3>
                  <p className="text-gray-300 mb-3">
                    Methodology over secrets, learning over perfection
                  </p>
                  <div className="bg-primary/30 rounded-xl p-4">
                    <p className="text-sm text-gray-400">
                      We show you how we work, what we learn, and when we fail. Complete transparency isn&apos;t a marketing claim - it&apos;s our operating principle.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <Zap className="w-10 h-10 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-accent-pink">Human Amplification</h3>
                  <p className="text-gray-300 mb-3">
                    Technology enhancing humans, not replacing
                  </p>
                  <div className="bg-primary/30 rounded-xl p-4">
                    <p className="text-sm text-gray-400">
                      AI and automation should amplify your authentic expertise, not replace your judgment. We build tools that make you more capable, not obsolete.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <Gift className="w-10 h-10 text-secondary-purple-light flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-secondary-purple-light">Abundance Over Scarcity</h3>
                  <p className="text-gray-300 mb-3">
                    Sharing knowledge creates more value than hoarding
                  </p>
                  <div className="bg-primary/30 rounded-xl p-4">
                    <p className="text-sm text-gray-400">
                      The more we share our methodology, the more value we create for everyone. Competition through transparency raises all boats.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <Network className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-blue">Bridge Building</h3>
                  <p className="text-gray-300 mb-3">
                    Connecting possibility with implementation
                  </p>
                  <div className="bg-primary/30 rounded-xl p-4">
                    <p className="text-sm text-gray-400">
                      We translate between enterprise capability and business reality. You shouldn&apos;t need a CS degree to access enterprise tools.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="bordered" className="mt-8 border-accent-pink/30">
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-accent-pink flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-3 text-accent-pink">20%/80% Model</h3>
                <p className="text-xl text-gray-300 mb-4">
                  Work with innovators, build for everyone
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-primary/30 rounded-xl p-4">
                    <p className="text-sm font-semibold text-white mb-2">The 20%</p>
                    <p className="text-sm text-gray-400">
                      Early adopters who prove transformation works through partnership with us
                    </p>
                  </div>
                  <div className="bg-primary/30 rounded-xl p-4">
                    <p className="text-sm font-semibold text-white mb-2">The 80%</p>
                    <p className="text-sm text-gray-400">
                      Benefit from validated approaches once the 20% have proven them
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
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
