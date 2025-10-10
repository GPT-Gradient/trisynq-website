import { Metadata } from 'next';
import { DollarSign, CheckCircle, ArrowRight, TrendingUp, Shield, Clock, Users, Zap, Star, AlertCircle } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Project NEXUS Pricing - Phase 1 Beta Partnership | First 100 at $4,500',
  description: 'Join the first 100 businesses in the NEXUS Phase 1 Beta. One-time $4,500 investment for lifetime ASO access, unlimited affiliate revenue, and access to all future Continuum platforms. Break-even in 2-9 months vs traditional SEO.',
});

export default function NEXUSPricingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-accent-pink/20 p-4 rounded-full border border-accent-pink/30">
              <DollarSign className="w-12 h-12 text-accent-pink" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Phase 1 Beta Partnership</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            One-time investment. Lifetime access. Permanent competitive advantage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-accent-pink/10 border border-accent-pink/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-accent-pink mb-2">$4,500</div>
              <p className="text-gray-300">One-time investment</p>
            </div>
            <div className="bg-primary-blue/10 border border-primary-blue/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-primary-blue mb-2">100</div>
              <p className="text-gray-300">Phase 1 positions</p>
            </div>
            <div className="bg-secondary-purple-light/10 border border-secondary-purple-light/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-secondary-purple-light mb-2">Lifetime</div>
              <p className="text-gray-300">Access to everything</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/30 rounded-full px-6 py-3">
            <Clock className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Applications close when 100 positions filled or March 31, 2025</span>
          </div>
        </div>
      </Section>

      {/* What You Get */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What <span className="text-gradient">You Get</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink flex items-center gap-3">
                <CheckCircle className="w-7 h-7" />
                Immediate Access
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Comprehensive onboarding (1-3 weeks)</p>
                    <p className="text-sm text-gray-400">Discovery, platform setup, content foundation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">ASO platform access and configuration</p>
                    <p className="text-sm text-gray-400">Full automation setup across all search modalities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Direct CEO/CTO email access</p>
                    <p className="text-sm text-gray-400">Throughout your entire partnership</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Bi-monthly Q&amp;A sessions</p>
                    <p className="text-sm text-gray-400">With CEO and CTO - entire beta program + 12 months post-completion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Complete methodology documentation</p>
                    <p className="text-sm text-gray-400">Full transparency into how ASO works</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue flex items-center gap-3">
                <Star className="w-7 h-7" />
                Lifetime Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Automated content generation and optimization</p>
                    <p className="text-sm text-gray-400">Across all search modalities forever</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Performance tracking and adaptive learning</p>
                    <p className="text-sm text-gray-400">Platform automatically improves over time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Automatic platform adaptation</p>
                    <p className="text-sm text-gray-400">To algorithm changes - no additional fees</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Social media content automation</p>
                    <p className="text-sm text-gray-400">Platform-specific optimization maintaining your voice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">All future platform updates</p>
                    <p className="text-sm text-gray-400">No upgrade fees, ever</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-secondary-purple-light flex items-center gap-3">
              <TrendingUp className="w-7 h-7" />
              Future Access &amp; Revenue
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Lifetime access to ALL Continuum platforms</p>
                    <p className="text-sm text-gray-400">No-Cheating, CTO&apos;s Heart, Safe Spaces, RE-Connect, and all future projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Unlimited lifetime affiliate revenue</p>
                    <p className="text-sm text-gray-400">20-30% commissions on all platform referrals, no caps, no expiration</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">White-label availability</p>
                    <p className="text-sm text-gray-400">Rebrand and resell to your clients - keep 100% of revenue</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Revenue sharing on case studies</p>
                    <p className="text-sm text-gray-400">10% of enterprise deals using your documented success</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-accent-pink/10 rounded-2xl p-8 border border-accent-pink/30 text-center">
            <p className="text-xl font-semibold text-white mb-2">
              Your Time Commitment After Onboarding
            </p>
            <p className="text-lg text-gray-300">
              2-4 hours per month for content review and approval. Everything else runs automatically.
            </p>
          </div>
        </div>
      </Section>

      {/* Pricing Comparison Across Phases */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Three-Phase Pricing</span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Price increases with each phase as risk decreases and proof accumulates. Phase 1 partners get the lowest price and highest benefits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated" className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-pink text-white px-4 py-1 rounded-full text-sm font-bold">
                NOW OPEN
              </div>
              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl font-bold text-accent-pink mb-2">Phase 1</h3>
                <p className="text-gray-400 mb-4">First 100 Partners</p>
                <div className="text-5xl font-bold text-white mb-2">$4,500</div>
                <p className="text-sm text-gray-400">One-time investment</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Ground floor positioning</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Direct CEO/CTO access</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Bi-monthly Q&amp;A sessions</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Partnership in proving methodology</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Lifetime affiliate revenue</p>
                </div>
              </div>
              <div className="text-center">
                <Button href="/beta" className="w-full">
                  Apply Now
                </Button>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary-blue mb-2">Phase 2</h3>
                <p className="text-gray-400 mb-4">Next 5,000 Partners</p>
                <div className="text-5xl font-bold text-white mb-2">$9,500</div>
                <p className="text-sm text-accent-pink font-semibold">+111% from Phase 1</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Proven with 100 businesses</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Mature infrastructure</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Comprehensive case studies</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Support team access</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Reduced early-adopter risk</p>
                </div>
              </div>
              <p className="text-center text-gray-400 text-sm">Q2-Q4 2025 (projected)</p>
            </Card>

            <Card variant="bordered">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-purple-light mb-2">Phase 3</h3>
                <p className="text-gray-400 mb-4">Next 10,000 Partners</p>
                <div className="text-5xl font-bold text-white mb-2">$22,500</div>
                <p className="text-sm text-accent-pink font-semibold">+400% from Phase 1</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Proven at 5,000+ scale</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Full support infrastructure</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Mature documentation</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Last chance for direct access</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">After this: White-label only</p>
                </div>
              </div>
              <p className="text-center text-gray-400 text-sm">2026 (projected)</p>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-accent-pink/30 text-center">
            <h4 className="text-2xl font-bold mb-4 text-accent-pink">Phase 1 Savings vs. Waiting</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div>
                <p className="text-sm text-gray-400 mb-1">Wait for Phase 2</p>
                <p className="text-3xl font-bold text-white">+$5,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Wait for Phase 3</p>
                <p className="text-3xl font-bold text-white">+$18,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Wait beyond Phase 3</p>
                <p className="text-lg font-bold text-accent-pink">Unavailable</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ROI Comparison */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">5-Year ROI</span> Comparison
          </h2>

          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Compare the lifetime investment against what you&apos;d spend on traditional SEO agencies over 5 years.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink">Traditional SEO Agency</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span className="text-gray-300">Year 1 (12-month contract)</span>
                  <span className="font-bold text-white">$36K-$60K</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span className="text-gray-300">Year 2 (continued optimization)</span>
                  <span className="font-bold text-white">$36K-$60K</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span className="text-gray-300">Years 3-5 (ongoing maintenance)</span>
                  <span className="font-bold text-white">$108K-$180K</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xl font-bold text-white">5-Year Total</span>
                  <span className="text-3xl font-bold text-accent-pink">$180K-$300K</span>
                </div>
              </div>
              <div className="bg-accent-pink/10 rounded-xl p-4 border border-accent-pink/30">
                <p className="text-sm text-gray-300 mb-2"><strong>Additional Risks:</strong></p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Agency switching costs and delays</li>
                  <li>• Strategy changes and contract renegotiations</li>
                  <li>• Ongoing fees every month forever</li>
                  <li>• Manual optimization and updates</li>
                </ul>
              </div>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">Phase 1 Beta with TriSynq</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span className="text-gray-300">One-time investment</span>
                  <span className="font-bold text-white">$4,500</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span className="text-gray-300">Ongoing fees (Years 1-5)</span>
                  <span className="font-bold text-green-400">$0</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                  <span className="text-gray-300">Affiliate revenue potential</span>
                  <span className="font-bold text-green-400">+$10K-$100K+</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xl font-bold text-white">5-Year Total</span>
                  <span className="text-3xl font-bold text-green-400">$4,500</span>
                </div>
              </div>
              <div className="bg-green-400/10 rounded-xl p-4 border border-green-400/30 mb-4">
                <p className="text-sm text-gray-300 mb-2"><strong>Additional Benefits:</strong></p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Automatic platform adaptation (no extra fees)</li>
                  <li>• Access to all future Continuum platforms</li>
                  <li>• White-label revenue opportunities</li>
                  <li>• Complete automation after onboarding</li>
                </ul>
              </div>
              <div className="bg-accent-pink/20 rounded-xl p-4 border border-accent-pink/30 text-center">
                <p className="text-2xl font-bold text-accent-pink mb-1">$175.5K-$295.5K</p>
                <p className="text-sm text-gray-300">5-Year Savings vs. Traditional SEO</p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20 text-center">
              <div className="text-4xl font-bold text-primary-blue mb-2">2-9 months</div>
              <p className="text-gray-300">Break-even timeline</p>
              <p className="text-sm text-gray-400 mt-2">vs. traditional agency costs</p>
            </div>
            <div className="bg-primary/30 rounded-2xl p-6 border border-secondary-purple-light/20 text-center">
              <div className="text-4xl font-bold text-secondary-purple-light mb-2">39x-66x</div>
              <p className="text-gray-300">5-Year ROI</p>
              <p className="text-sm text-gray-400 mt-2">Based on savings alone</p>
            </div>
            <div className="bg-primary/30 rounded-2xl p-6 border border-green-400/20 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
              <p className="text-gray-300">Ongoing value</p>
              <p className="text-sm text-gray-400 mt-2">No recurring fees, ever</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Risk Mitigation */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Risk Mitigation</span> Framework
          </h2>

          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We&apos;ve structured the partnership to minimize your risk while maximizing transparency and accountability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-accent-pink/20 p-3 rounded-xl">
                  <Shield className="w-8 h-8 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent-pink mb-2">Deposit &amp; Refund Structure</h3>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Initial Deposit: $1,500</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Secures your Phase 1 position</li>
                    <li>• Refundable during onboarding under specific conditions</li>
                    <li>• Applied to final balance upon onboarding completion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Final Balance: $3,000</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Due only after onboarding completion</li>
                    <li>• Only after you&apos;ve seen the platform in action</li>
                    <li>• Only after initial content samples approved</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary-blue/20 p-3 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-blue mb-2">Full Refund Available If:</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">We determine your business isn&apos;t a fit for ASO methodology</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Technical limitations prevent effective implementation</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You determine the platform doesn&apos;t meet your needs (within 14 days of onboarding start)</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Either party identifies fundamental misalignment in approach or expectations</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Onboarding extends beyond 6 weeks due to our delays (not client delays)</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="bordered">
              <h4 className="font-bold text-secondary-purple-light mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Direct Communication
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Email access to CEO and CTO</li>
                <li>• Bi-monthly Q&amp;A sessions</li>
                <li>• No account manager filtering</li>
                <li>• Genuine responsiveness</li>
              </ul>
            </Card>

            <Card variant="bordered">
              <h4 className="font-bold text-secondary-purple-light mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Public Dashboard
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Aggregate Phase 1 results (anonymized)</li>
                <li>• What&apos;s working across industries</li>
                <li>• Methodology adjustments and why</li>
                <li>• Real-time progress toward Phase 2</li>
              </ul>
            </Card>

            <Card variant="bordered">
              <h4 className="font-bold text-secondary-purple-light mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Progress Documentation
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Monthly performance reports</li>
                <li>• Clear metrics on what&apos;s working</li>
                <li>• Honest results vs. expectations</li>
                <li>• Roadmap visibility for improvements</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Onboarding Timeline */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Onboarding Timeline</span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-12">
            From application to activation in 1-3 weeks depending on complexity.
          </p>

          <div className="space-y-6">
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-pink">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-accent-pink">Week 1: Discovery &amp; Expertise Capture</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Initial Consultation (2-3 hours)</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Business model and value proposition deep-dive</li>
                        <li>• Target audience and market understanding</li>
                        <li>• Current marketing efforts and results</li>
                        <li>• Expertise areas and unique knowledge</li>
                        <li>• Voice and communication style analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Competitive Analysis</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Current search visibility assessment</li>
                        <li>• Competitor positioning analysis</li>
                        <li>• Opportunity identification</li>
                        <li>• Keyword and topic research</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-accent-pink/10 rounded-lg p-3 border border-accent-pink/30">
                    <p className="text-sm text-gray-300"><strong className="text-white">Deliverable:</strong> Comprehensive strategy document for your approval</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-blue">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-primary-blue">Week 2: Platform Configuration &amp; Content Foundation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Technical Setup</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Platform access and configuration</li>
                        <li>• Integration with your existing web properties</li>
                        <li>• Social media account connections</li>
                        <li>• Analytics and tracking implementation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Initial Content Development</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Core content pieces capturing your expertise</li>
                        <li>• Multi-modal optimization across all search types</li>
                        <li>• Social content templates aligned with your voice</li>
                        <li>• Trending topic monitoring configuration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-primary-blue/10 rounded-lg p-3 border border-primary-blue/30">
                    <p className="text-sm text-gray-300"><strong className="text-white">Deliverable:</strong> Platform access + initial content samples for approval</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-purple-light/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-secondary-purple-light">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-secondary-purple-light">Week 3: Activation &amp; Training</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Content Approval &amp; Refinement</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Review initial content output</li>
                        <li>• Adjust voice, tone, and messaging as needed</li>
                        <li>• Approve publication schedule</li>
                        <li>• Set up approval workflows</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Platform Training</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• How to review and approve content</li>
                        <li>• How to read performance dashboards</li>
                        <li>• How to provide feedback for optimization</li>
                        <li>• How to access CEO/CTO for questions</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-secondary-purple-light/10 rounded-lg p-3 border border-secondary-purple-light/30">
                    <p className="text-sm text-gray-300"><strong className="text-white">Deliverable:</strong> Activated platform + trained team + content publishing initiated</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-green-400/20 p-3 rounded-xl flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-green-400">Ongoing (Post-Onboarding)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Your Time Commitment</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Weekly: 30-60 minutes reviewing/approving content</li>
                        <li>• Monthly: 1-2 hours reviewing performance and providing strategic input</li>
                        <li>• Bi-monthly: Q&amp;A sessions with CEO and CTO (entire beta + 12 months after)</li>
                        <li>• Quarterly: Optional strategy session with leadership</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">What Runs Automatically</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Content generation and optimization</li>
                        <li>• Social media distribution</li>
                        <li>• Performance tracking and learning</li>
                        <li>• Platform adaptation</li>
                        <li>• Trending topic integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Realistic Timeline */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Realistic</span> Performance Timeline
          </h2>

          <div className="bg-primary/30 rounded-2xl p-8 border border-accent-pink/30 mb-8">
            <h3 className="text-xl font-bold mb-4 text-accent-pink">What We&apos;re NOT Promising</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">×</span>
                  <span>Overnight results (meaningful traction takes 3-6 months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">×</span>
                  <span>Guaranteed #1 rankings (nobody can honestly guarantee that)</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">×</span>
                  <span>Perfect execution from day one (we&apos;re refining as we scale)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">×</span>
                  <span>You&apos;ll never think about search again (you approve content, maintain control)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card variant="elevated">
              <h4 className="font-bold text-accent-pink mb-2">Months 1-2</h4>
              <p className="text-sm text-gray-300">Onboarding and initial content generation</p>
            </Card>
            <Card variant="elevated">
              <h4 className="font-bold text-primary-blue mb-2">Months 3-6</h4>
              <p className="text-sm text-gray-300">Early results, optimization, learning</p>
            </Card>
            <Card variant="elevated">
              <h4 className="font-bold text-secondary-purple-light mb-2">Months 6-12</h4>
              <p className="text-sm text-gray-300">Meaningful traction, compounding effects</p>
            </Card>
            <Card variant="elevated">
              <h4 className="font-bold text-green-400 mb-2">Year 2+</h4>
              <p className="text-sm text-gray-300">Established presence, ongoing automated optimization</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Frequently Asked</span> Questions
          </h2>

          <div className="space-y-6">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Why should we trust an unproven platform?</h3>
              <p className="text-gray-300 mb-4">
                We&apos;re not asking you to trust us blindly. We&apos;re asking you to:
              </p>
              <ol className="text-gray-300 space-y-2 ml-4">
                <li>1. Evaluate our methodology (does it align with where platforms are going?)</li>
                <li>2. Review our private beta results (scrubbed for privacy, but real data)</li>
                <li>3. Understand the risk mitigation (deposit refund, direct access, transparency)</li>
                <li>4. Compare the investment (2-9 months of traditional spend for lifetime access)</li>
                <li>5. Assess the downside (comparable to what you&apos;d spend anyway on traditional SEO)</li>
              </ol>
              <p className="text-white font-semibold mt-4">
                If it doesn&apos;t work, you&apos;ve spent what you would&apos;ve spent in 2-9 months with an agency. If it works, you&apos;ve eliminated a permanent expense.
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">What if the platforms change their algorithms again?</h3>
              <p className="text-gray-300 mb-4">
                That&apos;s exactly why this approach works.
              </p>
              <p className="text-gray-300 mb-4">
                Traditional agencies charge you every time platforms change because they have to &quot;figure out the new rules.&quot;
              </p>
              <p className="text-gray-300 mb-4">
                ASO adapts automatically because it&apos;s built on principles (transparent expertise, authentic voice, multi-modal optimization) that remain valuable regardless of specific algorithmic changes.
              </p>
              <p className="text-white font-semibold">
                You&apos;re not paying for tactics that break. You&apos;re investing in methodology that evolves.
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">How do we know you&apos;ll still be around in 5 years?</h3>
              <p className="text-gray-300 mb-4">
                Our business model ensures longevity:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Phase 1 ($450K) funds Phase 2 infrastructure</li>
                <li>• Phase 2 ($47.5M) funds complete platform maturity and all Continuum projects</li>
                <li>• Phase 3 ($225M) establishes sustainable operations</li>
                <li>• White-label transition creates ongoing revenue without acquisition costs</li>
              </ul>
              <p className="text-white font-semibold mb-2">
                We&apos;re not VC-funded with pressure to exit. We&apos;re building a sustainable business that serves lifetime customers.
              </p>
              <p className="text-gray-300">
                Plus, your lifetime license is exactly that—lifetime. Even if the business changed hands, your access is contractually guaranteed.
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">What if our industry/business is too unique for automated content?</h3>
              <p className="text-gray-300 mb-4">
                Good question. Some businesses aren&apos;t a fit, and we&apos;ll tell you that in discovery.
              </p>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">ASO works best when:</strong>
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• You have genuine expertise worth amplifying</li>
                <li>• Your business can be explained clearly (not highly technical jargon requiring deep domain knowledge)</li>
                <li>• You serve customers through education and authority (not just lowest price)</li>
                <li>• Your competitive advantage is knowledge, not just convenience or cost</li>
              </ul>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Industries we&apos;ve successfully tested:</strong>
              </p>
              <ul className="text-gray-300 space-y-1 mb-4">
                <li>• Professional services (legal, accounting, consulting)</li>
                <li>• Real estate and mortgage</li>
                <li>• Healthcare and wellness</li>
                <li>• Technology and SaaS</li>
                <li>• Education and training</li>
                <li>• Home services and trades</li>
              </ul>
              <p className="text-green-400 font-semibold">
                If we determine during onboarding that ASO isn&apos;t a fit, full deposit refund—no questions asked.
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Why only 100 businesses in Phase 1?</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Infrastructure and support capacity.</strong>
              </p>
              <p className="text-gray-300 mb-4">
                We want to give Phase 1 partners direct CEO/CTO access, bi-monthly Q&amp;A sessions, and genuine partnership in development. That doesn&apos;t scale beyond 100 businesses while maintaining quality.
              </p>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Phase 2 (5,000 businesses) will have:</strong>
              </p>
              <ul className="text-gray-300 space-y-1 mb-4">
                <li>• Mature infrastructure that can handle scale</li>
                <li>• Support team (not just CEO/CTO)</li>
                <li>• Documented processes from Phase 1 learning</li>
                <li>• Proven methodology from 100 diverse implementations</li>
              </ul>
              <p className="text-white font-semibold">
                Phase 1 is genuinely limited because we&apos;re prioritizing quality over quantity at this stage.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Ready to Join</span> the First 100?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            One-time $4,500 investment. Lifetime access to everything we build. Break-even in 2-9 months vs. traditional SEO.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background-dark/50 rounded-2xl p-6 border border-primary-blue/30">
              <div className="text-4xl font-bold text-accent-pink mb-2">$175.5K+</div>
              <p className="text-gray-300">5-year savings vs. traditional SEO</p>
            </div>
            <div className="bg-background-dark/50 rounded-2xl p-6 border border-secondary-purple-light/30">
              <div className="text-4xl font-bold text-primary-blue mb-2">Unlimited</div>
              <p className="text-gray-300">Affiliate revenue potential</p>
            </div>
            <div className="bg-background-dark/50 rounded-2xl p-6 border border-accent-pink/30">
              <div className="text-4xl font-bold text-secondary-purple-light mb-2">Lifetime</div>
              <p className="text-gray-300">Access to all platforms</p>
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <Button href="/continuum/nexus/apply" size="lg" className="text-xl px-12 py-6">
              Apply for Phase 1 Beta Partnership
            </Button>
            <p className="text-gray-400">
              3-5 business day application review · Discovery call if qualified · $1,500 deposit to secure position
            </p>
          </div>

          <div className="bg-background-dark/70 rounded-2xl p-8 border border-accent-pink/30 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-white">Not ready to apply yet?</strong>
            </p>
            <p className="text-gray-300 mb-6">
              Learn more about the ASO methodology and see why transparent search optimization is the future.
            </p>
            <Button href="/continuum/nexus" variant="outline">
              Learn About Project NEXUS
            </Button>
          </div>
        </div>
      </Section>

      {/* Investment Summary */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Investment <span className="text-gradient">Summary</span>
          </h2>

          <Card variant="elevated">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">Total Investment</td>
                    <td className="py-4 text-white text-right">$4,500 one-time</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">Payment Structure</td>
                    <td className="py-4 text-white text-right">$1,500 deposit + $3,000 upon completion</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">Refund Eligibility</td>
                    <td className="py-4 text-white text-right">Full refund during onboarding (see conditions above)</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">Lifetime Access</td>
                    <td className="py-4 text-white text-right">All current and future Continuum platforms</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">Affiliate Revenue</td>
                    <td className="py-4 text-white text-right">Unlimited, lifetime, all platforms</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">Direct Access</td>
                    <td className="py-4 text-white text-right">CEO/CTO email + bi-monthly Q&amp;A sessions</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">Q&amp;A Sessions</td>
                    <td className="py-4 text-white text-right">Bi-monthly for entire beta + 12 months post-completion</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">Time Commitment</td>
                    <td className="py-4 text-white text-right">2-4 hours/month after onboarding</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">Expected Timeline</td>
                    <td className="py-4 text-white text-right">3-6 months to meaningful traction</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">5-Year Savings</td>
                    <td className="py-4 text-green-400 text-right font-bold">$175,500-$295,500 vs. traditional SEO</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-300 font-semibold">Break-Even</td>
                    <td className="py-4 text-green-400 text-right font-bold">2-9 months vs. traditional spend</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
