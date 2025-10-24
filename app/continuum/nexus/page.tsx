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

      {/* ClearForge Foundry Integration */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20 mb-12">
            <p className="text-lg text-gray-300 mb-6">
              This domain is powered by ClearForge Foundry services with explainable workflows.
            </p>
            <div className="text-center">
              <Button href="/foundry" variant="outline" size="lg">
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
            <Button href="/contact?type=nexus" size="lg">
              Apply for Beta Partnership
            </Button>
          </div>
        </div>
      </Section>

      {/* Partnership Investment & Terms */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Partnership <span className="text-gradient">Investment & Terms</span>
          </h2>

          <Card variant="bordered" className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">First 100 Partner Investment</h3>

            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-white">$997</span>
                <span className="text-xl text-gray-400">/ month</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">12-18 month partnership period</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-lg font-semibold text-white mb-2">Total Investment: $11,964 - $17,946</p>
                <p className="text-sm text-gray-400">For lifetime access to all Continuum platforms + unlimited affiliate revenue</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">What You Get During Partnership:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Full ASO platform access with all features</li>
                  <li>• Weekly team check-ins and implementation support</li>
                  <li>• Monthly transparency reports (your metrics + methodology refinements)</li>
                  <li>• Direct access to founders and product team</li>
                  <li>• Public case study showcase (industry authority building)</li>
                  <li>• Priority feature requests and roadmap influence</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="font-bold text-secondary-purple-light mb-2">What You Get After Partnership:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Lifetime access to ASO platform (normally $497/month)</li>
                  <li>• Lifetime access to ALL future Continuum platforms (6+ planned)</li>
                  <li>• Unlimited affiliate revenue across all platforms forever (30% recurring)</li>
                  <li>• No monthly fees, no usage caps, no price increases</li>
                  <li>• Founder-tier status in ClearForge ecosystem</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <h4 className="font-bold text-primary-blue mb-2">The Math:</h4>
              <p className="text-gray-300 text-sm mb-3">
                Partnership investment: ~$12K-$18K. Lifetime ASO value alone: $5,964/year. Break-even in 2-3 years if you never refer anyone.
              </p>
              <p className="text-gray-300 text-sm mb-3">
                <strong className="text-white">Refer 3 customers:</strong> $179/month recurring (30% of $597/mo). That&apos;s $2,148/year. Break-even in 6-8 years total.
              </p>
              <p className="text-accent-pink text-sm font-semibold">
                This isn&apos;t a get-rich-quick scheme. It&apos;s a long-term partnership bet that transparency wins.
              </p>
            </div>
          </Card>

          <div className="bg-background-dark rounded-2xl p-6 border border-gray-700">
            <h4 className="text-lg font-bold mb-3 text-white">Payment Terms</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Monthly recurring payment ($997/month) via credit card or ACH</li>
              <li>• Cancel anytime (but you forfeit lifetime access and affiliate revenue)</li>
              <li>• Completion bonus: Stay for full 12-18 months → unlock all benefits</li>
              <li>• Early termination: You keep what you built, lose future benefits</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* What to Expect: Timeline */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What to Expect: <span className="text-gradient">The 12-18 Month Journey</span>
          </h2>

          <div className="space-y-6">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-pink">Months 1-3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-accent-pink">Expertise Capture & Setup</h3>
                  <p className="text-gray-300 mb-4">
                    We learn your voice, expertise, and business. The AI model trains on your authentic knowledge.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-white">Weekly Activities:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 1-2 hour expertise interviews with our team</li>
                      <li>• Review and approve AI-generated content drafts</li>
                      <li>• Set publishing preferences and boundaries</li>
                      <li>• Technical setup (website integration, analytics, social accounts)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-blue">Months 4-9</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-primary-blue">Optimization & Learning</h3>
                  <p className="text-gray-300 mb-4">
                    Content publishing begins. The system learns what performs, adapts strategy, and refines approach.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-white">Weekly Activities:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 30-60 minute check-ins (review performance, approve upcoming content)</li>
                      <li>• Monthly transparency reports (metrics, learnings, methodology updates)</li>
                      <li>• Platform publishes 8-12 pieces of content per week (you control what goes live)</li>
                      <li>• System tracks performance across Google, social, voice search, AI overviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-purple-light/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-secondary-purple-light">Months 10-18</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-secondary-purple-light">Scaling & Validation</h3>
                  <p className="text-gray-300 mb-4">
                    Momentum builds. Automation increases. Results compound. We document everything publicly.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2 text-white">Weekly Activities:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Bi-weekly check-ins (system largely autonomous)</li>
                      <li>• Quarterly public case study updates (your results showcased)</li>
                      <li>• Affiliate program onboarding (start referring)</li>
                      <li>• Advanced features unlocked (video content, podcast optimization, etc.)</li>
                    </ul>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p className="text-sm text-green-400 font-semibold mb-2">Partnership Completion:</p>
                    <p className="text-sm text-gray-300">
                      At month 12-18, partnership converts to lifetime access. All benefits activate. You&apos;re now a founding member of the ClearForge ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Ideal Partner Profile */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Ideal <span className="text-gradient">Partner Profile</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card variant="elevated" className="border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-400">You&apos;re a Great Fit If:</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You have real expertise</strong> — You&apos;ve built something, solved problems, and have knowledge worth sharing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You&apos;re willing to bet on transparency</strong> — You believe authentic expertise should outrank manipulation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You can commit 12-18 months</strong> — This isn&apos;t a quick win. It&apos;s a long-term validation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You want to prove something</strong> — Not just gain visibility, but validate a better approach.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You&apos;re okay with public documentation</strong> — Your results (good and bad) will be shared transparently.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You see the long-term value</strong> — Lifetime access + affiliate revenue + industry authority.</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-4 text-red-400">You&apos;re NOT a Fit If:</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You want instant results</strong> — SEO takes 6-12 months minimum. ASO is the same.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You don&apos;t have real expertise</strong> — We can&apos;t manufacture authority you don&apos;t have.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You want a magic button</strong> — This requires participation, review, and collaboration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You can&apos;t afford $997/month</strong> — This is an investment, not a guarantee. Don&apos;t overextend.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You&apos;re not comfortable with transparency</strong> — Your results will be published. That&apos;s the point.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You just want cheap SEO</strong> — There are cheaper options. This is about proving methodology.</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="bordered" className="bg-primary/10 border-primary-blue/30">
            <h3 className="text-xl font-bold mb-4 text-primary-blue">The Real Question:</h3>
            <p className="text-lg text-gray-300 mb-4">
              Do you believe that transparency, real expertise, and human knowledge should win over algorithmic gaming?
            </p>
            <p className="text-white font-semibold">
              If yes, you&apos;re probably a fit. If not, this isn&apos;t for you.
            </p>
          </Card>
        </div>
      </Section>

      {/* Decision Framework */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Is NEXUS <span className="text-gradient">Right For You?</span>
          </h2>

          <div className="space-y-6 mb-8">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Choose NEXUS If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink text-xl">→</span>
                  <span>You have <strong className="text-white">deep expertise</strong> in a specific domain (consulting, SaaS, professional services, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink text-xl">→</span>
                  <span>You want <strong className="text-white">automated content creation</strong> that maintains your authentic voice and expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink text-xl">→</span>
                  <span>You&apos;re willing to <strong className="text-white">invest 12-18 months</strong> to build long-term search authority</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink text-xl">→</span>
                  <span>You want <strong className="text-white">multi-modal search presence</strong> (Google, voice, AI overviews, social discovery)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink text-xl">→</span>
                  <span>You&apos;re interested in <strong className="text-white">lifetime platform access + affiliate revenue</strong> as long-term value</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Choose Traditional SEO If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue text-xl">→</span>
                  <span>You want <strong className="text-white">full control</strong> over every keyword, meta tag, and backlink</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue text-xl">→</span>
                  <span>You have <strong className="text-white">in-house SEO expertise</strong> or prefer managing agencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue text-xl">→</span>
                  <span>You&apos;re focused on <strong className="text-white">one channel</strong> (just Google search, not voice/AI/social)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue text-xl">→</span>
                  <span>You prefer <strong className="text-white">pay-as-you-go pricing</strong> rather than partnership investment</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Choose Content Agencies If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-purple-light text-xl">→</span>
                  <span>You need <strong className="text-white">one-time content projects</strong> (whitepapers, website copy, sales materials)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-purple-light text-xl">→</span>
                  <span>You don&apos;t have expertise to capture (you need <strong className="text-white">ghostwritten thought leadership</strong>)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-purple-light text-xl">→</span>
                  <span>You want <strong className="text-white">human writers</strong> creating every piece from scratch</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-background-dark rounded-2xl p-8 border border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-accent-pink">Still Unsure?</h3>
            <p className="text-lg text-gray-300 text-center mb-6">
              The application process includes a qualification call. We&apos;ll tell you honestly if NEXUS is right for you.
            </p>
            <p className="text-center text-sm text-gray-400">
              We&apos;d rather turn you away than take your money for something that won&apos;t work for you.
            </p>
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
            <Button href="/contact?type=nexus" size="lg">
              Join the First 100
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
