import { Metadata } from 'next';
import Link from 'next/link';
import { Eye, CheckCircle, XCircle, Shield, TrendingUp, Users } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Transparency Revolution: Complete Transparency or Nothing',
  description: 'TriSynq shows all methodology, learnings, failures, and results. First platform documenting transformation journey publicly with complete transparency.',
});

export default function TransparencyRevolutionPage() {
  return (
    <>
      {/* The Core Commitment */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Complete Transparency</span> or Nothing
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We don&apos;t ask for trust. We show you it works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-8 h-8 text-primary-blue flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">What We Show</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink font-bold">•</span>
                  <span><strong className="text-white">All methodology</strong> - How we achieve results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink font-bold">•</span>
                  <span><strong className="text-white">All learnings</strong> - What works and what doesn&apos;t</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink font-bold">•</span>
                  <span><strong className="text-white">All failures</strong> - Experiments that didn&apos;t pan out</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink font-bold">•</span>
                  <span><strong className="text-white">All adaptations</strong> - How we respond to changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink font-bold">•</span>
                  <span><strong className="text-white">All results</strong> - With full context</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <XCircle className="w-8 h-8 text-accent-pink flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">What We Don&apos;t Show (and why)</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink font-bold">•</span>
                  <span><strong className="text-white">Individual client specifics</strong> - Privacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink font-bold">•</span>
                  <span><strong className="text-white">Proprietary implementations</strong> - Competitive protection for partners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink font-bold">•</span>
                  <span><strong className="text-white">Personal information</strong> - Security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink font-bold">•</span>
                  <span><strong className="text-white">Anything compromising safety</strong> - Protection</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Public Dashboard */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            The <span className="text-gradient">Public Dashboard</span>
          </h2>

          <p className="text-xl text-center text-gray-400 mb-12">
            Real-Time Transparency
          </p>

          <Card variant="bordered" className="mb-12">
            <div className="text-center mb-8">
              <Eye className="w-16 h-16 text-accent-pink mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">What You&apos;ll Find</h3>
              <p className="text-gray-400">
                Live metrics, honest documentation, and complete transparency across all Continuum projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="font-bold text-primary-blue mb-3">Live Metrics</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Beta participants across all projects</li>
                  <li>• Real-time performance tracking</li>
                  <li>• Community contribution counts</li>
                  <li>• Financial sustainability metrics</li>
                </ul>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="font-bold text-secondary-purple-light mb-3">Methodology Evolution</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Documentation of all changes</li>
                  <li>• Why we made each decision</li>
                  <li>• What worked, what didn&apos;t</li>
                  <li>• Lessons learned publicly</li>
                </ul>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="font-bold text-accent-pink mb-3">Failed Experiments</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Complete analysis of failures</li>
                  <li>• Why approaches didn&apos;t work</li>
                  <li>• What we learned from mistakes</li>
                  <li>• How we adapted and improved</li>
                </ul>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="font-bold text-primary-blue mb-3">Community Contributions</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Partner feedback integration</li>
                  <li>• Community-driven improvements</li>
                  <li>• Collective learning tracking</li>
                  <li>• Shared success documentation</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="bg-gradient-to-r from-accent-pink/20 to-primary-blue/20 rounded-2xl p-8 border border-accent-pink/30 mb-8">
            <p className="text-xl font-bold text-center text-white mb-3">
              The Unprecedented Nature
            </p>
            <p className="text-lg text-center text-gray-200 mb-4">
              First platform documenting transformation journey publicly
            </p>
            <p className="text-2xl font-bold text-center text-accent-pink">
              The Challenge: Find another company showing this level of transparency
            </p>
          </div>

          <div className="text-center">
            <Button href="/dashboard" size="lg">
              View Live Dashboard
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Dashboard goes live as first beta partners come on board. Check back soon.
            </p>
          </div>
        </div>
      </Section>

      {/* Why This Matters */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why This <span className="text-gradient">Matters</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <Shield className="w-12 h-12 text-primary-blue mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Trust Through Proof</h3>
              <p className="text-gray-300 mb-4">
                Not asking for trust. Showing you it works.
              </p>
              <p className="text-sm text-gray-400">
                Every claim backed by public documentation. Every result shown with full context. Every methodology open for scrutiny.
              </p>
            </Card>

            <Card variant="elevated">
              <Users className="w-12 h-12 text-secondary-purple-light mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Community Learning</h3>
              <p className="text-gray-300 mb-4">
                Your success faster through our transparent learning
              </p>
              <p className="text-sm text-gray-400">
                Learn from our mistakes. Benefit from our discoveries. Skip the failures we&apos;ve already documented. Accelerate your transformation.
              </p>
            </Card>

            <Card variant="elevated">
              <TrendingUp className="w-12 h-12 text-accent-pink mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Market Transformation</h3>
              <p className="text-gray-300 mb-4">
                Transparency becoming expected, not exceptional
              </p>
              <p className="text-sm text-gray-400">
                As we prove transparency works, others must follow. The market shifts from opacity to openness. Everyone benefits.
              </p>
            </Card>

            <Card variant="elevated">
              <CheckCircle className="w-12 h-12 text-primary-blue mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Vendor Accountability</h3>
              <p className="text-gray-300 mb-4">
                Raising standards across entire industry
              </p>
              <p className="text-sm text-gray-400">
                When one company operates transparently, others can&apos;t hide behind opacity. Industry standards rise. Customers win.
              </p>
            </Card>
          </div>

          <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30 text-center">
            <h4 className="text-2xl font-bold mb-4 text-white">Our Commitment</h4>
            <p className="text-lg text-gray-300 mb-4">
              We show methodology, not secrets. Results, not promises. Learning, not perfection.
            </p>
            <p className="text-xl font-semibold text-accent-pink">
              This is how transformation should work. This is how trust is earned. This is the transparency revolution.
            </p>
          </div>

          <div className="mt-12 text-center space-y-4">
            <Button href="/beta" size="lg">
              Join the Revolution
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mission" className="text-primary-blue hover:text-primary-blue/80 font-semibold">
                ← Back to Manifesto
              </Link>
              <Link href="/mission/economic-liberation" className="text-accent-pink hover:text-accent-pink/80 font-semibold">
                Learn About Economic Liberation →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Transparency in Action */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Transparency <span className="text-gradient">In Action</span>
          </h2>

          <Card variant="bordered" className="text-left">
            <h3 className="text-xl font-bold mb-6 text-white">What Transparency Looks Like</h3>

            <div className="space-y-6">
              <div className="bg-background-dark rounded-xl p-6">
                <p className="font-semibold text-primary-blue mb-2">When Something Works:</p>
                <p className="text-gray-300 text-sm">
                  We document exactly what we did, why it worked, and how you can replicate it. Full methodology shared publicly.
                </p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <p className="font-semibold text-accent-pink mb-2">When Something Fails:</p>
                <p className="text-gray-300 text-sm">
                  We document exactly what we tried, why it failed, and what we learned. No hiding mistakes. No pretending everything works.
                </p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <p className="font-semibold text-secondary-purple-light mb-2">When We Make Changes:</p>
                <p className="text-gray-300 text-sm">
                  We explain why we&apos;re changing, what we hope to achieve, and how we&apos;ll measure success. Then we document the results.
                </p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <p className="font-semibold text-primary-blue mb-2">When Partners Contribute:</p>
                <p className="text-gray-300 text-sm">
                  We give credit, integrate improvements, and show how community input makes everything better. This is built together.
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-12 bg-gradient-to-r from-accent-pink/20 to-primary-blue/20 rounded-2xl p-8 border border-accent-pink/30">
            <p className="text-xl font-bold text-white mb-3">
              This isn&apos;t marketing. This is methodology.
            </p>
            <p className="text-lg text-gray-300">
              Complete transparency isn&apos;t a feature. It&apos;s how we operate. It&apos;s who we are. It&apos;s the only way this works.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
