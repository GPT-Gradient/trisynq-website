import { Metadata } from 'next';
import Image from 'next/image';
import { Search, CheckCircle, ArrowRight, Zap, TrendingUp } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Nexus: Beating the SEO Black Box',
  description: 'Proving that truth and human expertise can outrank algorithmic manipulation.',
});

export default function ProjectNEXUSPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/logos/nexus-with-text-primary.png"
              alt="Project Nexus"
              width={300}
              height={250}
              className="max-w-xs"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Nexus: Beating the SEO Black Box.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            We&apos;re proving that truth, clarity, and human expertise can outrank algorithmic manipulation.
          </p>

          <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/30 rounded-full px-6 py-3 mb-8">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Phase 1 Beta - First 100 Partners</span>
          </div>

          <p className="text-lg text-gray-400">
            Timeline: Now through Q2 2025
          </p>
        </div>
      </Section>

      {/* The Problem */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">The Problem</span>
          </h2>

          <Card variant="bordered" className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">Opaque rankings reward spam over expertise.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Marketing budgets beat genuine expertise</p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-gray-300">SMBs can&apos;t compete with corporate visibility spending</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Opacity rewarded over transparency</p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Authentic voices drowned out by manipulation</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20 mb-8">
            <h3 className="text-xl font-bold mb-4 text-secondary-purple-light">The Legacy Period Window</h3>
            <p className="text-gray-300 mb-4">
              We&apos;re in a 2-3 year window where old and new search approaches both work. This creates a massive opportunity for early adopters.
            </p>
            <p className="text-lg font-semibold text-accent-pink">
              The Urgency: Early adopters gain compounding advantages before the window closes.
            </p>
          </div>
        </div>
      </Section>

      {/* The ASO Solution */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">The Approach</span>
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-4">
              Explainable content, citations, structured data, and multi-modal consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card variant="elevated">
              <h4 className="font-bold text-primary-blue mb-2">Traditional Search</h4>
              <p className="text-sm text-gray-400">SEO optimization</p>
            </Card>
            <Card variant="elevated">
              <h4 className="font-bold text-secondary-purple-light mb-2">Voice Search</h4>
              <p className="text-sm text-gray-400">VSO optimization</p>
            </Card>
            <Card variant="elevated">
              <h4 className="font-bold text-primary-blue mb-2">AI Overviews</h4>
              <p className="text-sm text-gray-400">GEO optimization</p>
            </Card>
            <Card variant="elevated">
              <h4 className="font-bold text-secondary-purple-light mb-2">Social Discovery</h4>
              <p className="text-sm text-gray-400">Algorithmic reach</p>
            </Card>
          </div>

          <div className="bg-accent-pink/10 rounded-2xl p-8 border border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-accent-pink">The Outcome</h3>
            <p className="text-xl font-semibold text-center text-white">
              Search that surfaces real authority — not tricks.
            </p>
          </div>
        </div>
      </Section>

      {/* How ASO Works */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            How <span className="text-gradient">ASO Works</span>
          </h2>

          <div className="space-y-6">
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 p-3 rounded-xl">
                  <span className="text-2xl font-bold text-accent-pink">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-primary-blue">Core Expertise Capture</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">System learns your authentic voice</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Maps your actual expertise</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Preserves your unique perspective</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">AI learns, doesn&apos;t replace</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-purple-light/20 p-3 rounded-xl">
                  <span className="text-2xl font-bold text-secondary-purple-light">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-secondary-purple-light">Multi-Modal Optimization <span className="text-sm text-accent-pink">(Automated)</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Content optimized for all search types simultaneously</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Platform-specific adaptation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Transparent sourcing throughout</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">You control what publishes</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 p-3 rounded-xl">
                  <span className="text-2xl font-bold text-primary-blue">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-primary-blue">Intelligence and Learning <span className="text-sm text-accent-pink">(Automated)</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Performance tracking across channels</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Pattern identification</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Adaptive improvement</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Platform change response</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 p-3 rounded-xl">
                  <span className="text-2xl font-bold text-accent-pink">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-accent-pink">Social Integration <span className="text-sm text-secondary-purple-light">(Automated)</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">High-performing content identified</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Social content generated automatically</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Cross-platform promotion</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Engagement drives new web content</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why ASO Is Different */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why ASO Is <span className="text-gradient">Different</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink">vs. Traditional SEO</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent-pink" />
                  <p className="text-gray-300">One channel → <strong className="text-white">All search modalities</strong></p>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent-pink" />
                  <p className="text-gray-300">Manual optimization → <strong className="text-white">Automated learning</strong></p>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent-pink" />
                  <p className="text-gray-300">Black box tactics → <strong className="text-white">Transparent methodology</strong></p>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent-pink" />
                  <p className="text-gray-300">Hours of weekly work → <strong className="text-white">Automated with your control</strong></p>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent-pink" />
                  <p className="text-gray-300">Platform gaming → <strong className="text-white">Aligned with platform goals</strong></p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">Future-Proof Design</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary-blue" />
                  <p className="text-gray-300">Built on transparency platforms reward</p>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary-blue" />
                  <p className="text-gray-300">Adaptive to algorithm changes</p>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary-blue" />
                  <p className="text-gray-300">Authentic foundation remains valid</p>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary-blue" />
                  <p className="text-gray-300">Learning system adjusts automatically</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Xynergy Integration */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20 mb-12">
            <p className="text-lg text-gray-300 mb-6">
              This domain is powered by Xynergy services with explainable workflows.
            </p>
            <div className="text-center">
              <Button href="/xynergy" variant="outline" size="lg">
                See the Power
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Beta Program Details */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">First 100</span> Beta Partnership
          </h2>

          <Card variant="bordered" className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">What You Get</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Lifetime access to ALL platforms (not just ASO)</p>
                  <p className="text-sm text-gray-400">6+ platforms across the entire Continuum</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Unlimited affiliate revenue across all platforms forever</p>
                  <p className="text-sm text-gray-400">Every referral, every platform, no caps, no limits</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Direct team access</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Implementation support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Public success showcase (industry authority)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Partnership in proving methodology</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6 mb-8">
            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20">
              <p className="text-lg text-gray-300">
                <strong className="text-white">The Reality:</strong> No fancy pricing tiers. No hidden costs. Partnership terms discussed during qualification.
              </p>
            </div>

            <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30">
              <p className="text-lg text-gray-300">
                <strong className="text-accent-pink">Qualification:</strong> Not everyone is a fit. That&apos;s okay. We&apos;re looking for the 20% who want to prove something.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button href="/beta" size="lg">
              Apply for Beta Partnership
            </Button>
          </div>
        </div>
      </Section>

      {/* The Proof Strategy */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            The <span className="text-gradient">Proof Strategy</span>
          </h2>

          <div className="space-y-6 mb-8">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Phase 1 (First 100)</h3>
              <p className="text-gray-300">Prove ASO works across diverse industries. Document everything publicly.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Phase 2 (Next 5,000)</h3>
              <p className="text-gray-300">Scale and refine methodology based on Phase 1 learnings.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Phase 3 (White-label)</h3>
              <p className="text-gray-300">Platform available for implementation. Community-driven expansion.</p>
            </Card>
          </div>

          <div className="bg-background-dark rounded-2xl p-8 border border-primary-blue/30">
            <h4 className="text-xl font-bold mb-4 text-gradient">Public Documentation</h4>
            <p className="text-gray-300">
              All results, learnings, and adaptations shown transparently. No hiding failures. No inflating successes. Just honest documentation of what works and what doesn&apos;t.
            </p>
          </div>
        </div>
      </Section>

      {/* Evidence So Far */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Evidence</span> So Far
          </h2>

          <Card variant="bordered" className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-blue">Private Beta Results</h3>
            <p className="text-gray-300 mb-6">
              Tested with businesses we have relationships with before opening to public partners.
            </p>

            <h4 className="text-xl font-bold mb-4 text-secondary-purple-light">What We&apos;ve Proven:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <p className="text-gray-300">Platform algorithms do reward transparency</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <p className="text-gray-300">Learning system adapts effectively</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <p className="text-gray-300">Automation maintains quality and authentic voice</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <p className="text-gray-300">Methodology works across different business types</p>
              </div>
            </div>
          </Card>

          <div className="bg-primary/30 rounded-2xl p-8 border border-accent-pink/30 mb-8">
            <h4 className="text-xl font-bold mb-4 text-accent-pink">Honest Assessment</h4>
            <p className="text-gray-300 mb-4">
              We don&apos;t have thousands of case studies. We have private validation and the conviction to prove it publicly.
            </p>
            <p className="text-lg font-semibold text-white">
              That&apos;s why the first 100 get everything—they&apos;re proving this with us.
            </p>
          </div>

          <div className="text-center">
            <Button href="/beta" size="lg">
              Join the First 100
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
