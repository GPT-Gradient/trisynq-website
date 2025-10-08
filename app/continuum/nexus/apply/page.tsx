import { Metadata } from 'next';
import {
  CheckCircle, XCircle, TrendingUp, Shield, Users, Zap,
  DollarSign, Clock, ArrowRight, AlertCircle, Star,
  Search, Target, Lightbulb, Award, FileCheck, Rocket
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Apply for NEXUS Phase 1 Beta Partnership | $4,500 Lifetime ASO Access',
  description: 'Join the first 100 businesses in Project NEXUS Phase 1. One-time $4,500 investment for lifetime ASO access across all search modalities. Eliminate ongoing SEO costs forever. Break-even in 2-9 months.',
});

export default function NEXUSApplyPage() {
  return (
    <>
      {/* Hero with Executive Summary */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/30 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Phase 1 Beta - First 100 Partners</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Project NEXUS</span>
            <br />
            Phase 1 Beta Partnership
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            A one-time investment in permanently eliminating your ongoing search marketing costs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-background-dark/50 rounded-2xl p-6 border border-accent-pink/30">
              <div className="text-4xl font-bold text-accent-pink mb-2">$4,500</div>
              <p className="text-gray-300">One-time investment</p>
            </div>
            <div className="bg-background-dark/50 rounded-2xl p-6 border border-primary-blue/30">
              <div className="text-4xl font-bold text-primary-blue mb-2">2-9 mo</div>
              <p className="text-gray-300">Break-even timeline</p>
            </div>
            <div className="bg-background-dark/50 rounded-2xl p-6 border border-secondary-purple-light/30">
              <div className="text-4xl font-bold text-secondary-purple-light mb-2">$175K+</div>
              <p className="text-gray-300">5-year savings</p>
            </div>
            <div className="bg-background-dark/50 rounded-2xl p-6 border border-green-400/30">
              <div className="text-4xl font-bold text-green-400 mb-2">Lifetime</div>
              <p className="text-gray-300">Access forever</p>
            </div>
          </div>

          <div className="bg-background-dark/70 rounded-2xl p-8 border border-primary-blue/30 text-left max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-blue">The Opportunity</h2>
            <p className="text-gray-300 mb-4">
              We&apos;re inviting 100 businesses to join the ground floor of a fundamental shift in how search optimization works. This isn&apos;t another SEO service—it&apos;s a one-time investment in permanently eliminating your ongoing search marketing costs while gaining competitive advantage during a critical market transition period.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Never pay for SEO services again</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Unlimited affiliate revenue potential</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Access to all future platforms</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">2-3 year legacy period advantage</p>
              </div>
            </div>
          </div>

          <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-accent-pink">The Risk Mitigation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Deposit-based onboarding with clear refund terms</p>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Direct CEO/CTO access throughout partnership</p>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Complete transparency via public dashboard</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Bi-monthly Q&amp;A sessions for entire beta + 12 months</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Market Problem */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The Market Problem <span className="text-gradient">We&apos;re Solving</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink">Current SEO Reality</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Traditional Agency Costs:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Low-tier:</span>
                      <span className="font-bold">$1,500-$3,000/month ($18K-$36K annually)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mid-tier:</span>
                      <span className="font-bold">$3,000-$7,500/month ($36K-$90K annually)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>High-tier:</span>
                      <span className="font-bold">$7,500-$15,000/month ($90K-$180K annually)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-accent-pink/10 rounded-lg p-4 border border-accent-pink/30">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Typical contracts:</strong> 6-12 months minimum, often taking 12-18 months to see meaningful ROI
                  </p>
                </div>
                <div className="bg-accent-pink/10 rounded-lg p-4 border border-accent-pink/30">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">The hidden cost:</strong> Most businesses cycle through 2-3 agencies before finding one that works, meaning real investment over 2-3 years is often 2-3x the base contract cost.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">Why Traditional Approaches Are Failing</h3>
              <div className="space-y-4 mb-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">The platforms changed the rules in 2023-2024:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                      <span>Google prioritizes E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                      <span>AI overviews require transparent, citation-worthy content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                      <span>Voice search demands conversational, directly-answerable content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                      <span>Social algorithms reward authentic engagement over paid promotion</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Traditional SEO agencies are still optimizing for the old rules:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                      <span>Keyword density and technical manipulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                      <span>Link buying and black-box tactics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                      <span>Single-channel optimization (Google only)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                      <span>Manual, labor-intensive processes</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-accent-pink/20 rounded-lg p-4 border border-accent-pink/30">
                <p className="font-semibold text-white">
                  Result: You&apos;re paying for approaches that are becoming less effective every quarter.
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20">
            <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light flex items-center gap-3">
              <Clock className="w-8 h-8" />
              The Legacy Period Opportunity
            </h3>
            <p className="text-gray-300 mb-4">
              We&apos;re in a 2-3 year transition window where old and new search approaches both work. This creates a massive opportunity for early adopters.
            </p>
            <p className="text-lg font-semibold text-accent-pink mb-3">
              The Urgency: Early adopters gain compounding advantages before the window closes.
            </p>
            <p className="text-gray-400">
              <strong className="text-white">Historical parallel:</strong> When Google shifted from keyword-based to semantic search (2018-2020), businesses that adapted early maintained advantages for years. We&apos;re at a similar inflection point.
            </p>
          </div>
        </div>
      </Section>

      {/* What We've Built - ASO */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            What We&apos;ve Built: <span className="text-gradient">Adaptive Search Optimization</span>
          </h2>

          <div className="text-center mb-12">
            <Card variant="elevated" className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">The Core Difference</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <p className="text-gray-400 text-sm mb-2">Traditional SEO:</p>
                  <p className="text-white font-semibold">
                    Optimizes for one channel (Google search) using manipulation tactics.
                  </p>
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm mb-2">ASO:</p>
                  <p className="text-white font-semibold">
                    Optimizes across all search modalities using transparent expertise amplification—completely automated.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <h3 className="text-3xl font-bold mb-8 text-center">How ASO Actually Works</h3>

          <div className="space-y-6 mb-12">
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-pink">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3 text-accent-pink">Your Authentic Expertise as Foundation</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">We capture your genuine knowledge, experience, and voice</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Not AI pretending to be you—AI amplifying what you actually know</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Your expertise remains the core; technology handles distribution</p>
                    </div>
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
                  <h4 className="text-2xl font-bold mb-3 text-primary-blue">Multi-Modal Optimization <span className="text-sm text-accent-pink">(Automated)</span></h4>
                  <p className="text-gray-300 mb-3">Content automatically optimized for:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Search className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Traditional search (Google, Bing)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Voice search (Alexa, Siri, Google Assistant)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">AI overviews (featured in AI-generated search results)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Social media (LinkedIn, Twitter, Facebook, Instagram)</p>
                    </div>
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
                  <h4 className="text-2xl font-bold mb-3 text-secondary-purple-light">Intelligent Learning System <span className="text-sm text-accent-pink">(Automated)</span></h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Tracks performance across all channels</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Identifies what resonates with your audience</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Generates additional content based on insights</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Adapts to platform changes automatically</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-pink">4</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3 text-accent-pink">Trending Content Integration <span className="text-sm text-secondary-purple-light">(Automated)</span></h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Monitors industry trends and news</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileCheck className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Creates timely content connecting trends to your expertise</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Maintains your authentic voice throughout</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Keeps you relevant and visible on current topics</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-green-400/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-green-400">5</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3 text-green-400">Social Amplification <span className="text-sm text-accent-pink">(Automated)</span></h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">High-performing content automatically adapted for social platforms</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Platform-specific optimization while maintaining voice consistency</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Engagement monitoring informs future content creation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">Cross-channel amplification of your expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary-blue">What &quot;Automated&quot; Actually Means</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-accent-pink mb-3">You provide:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Your expertise and knowledge (initial onboarding interviews)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Approval of content before publication (you maintain control)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Strategic direction on topics and focus areas</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-blue mb-3">ASO handles:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Content generation across all formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Multi-channel optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Performance tracking and learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Adaptation to platform changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Social media content creation and scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>Trending topic integration</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 text-center">
              <p className="text-xl font-bold text-white">
                Time commitment after onboarding: <span className="text-accent-pink">2-4 hours per month</span> for content review and approval
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Why Now */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Why This Investment <span className="text-gradient">Makes Sense Now</span>
          </h2>

          <Card variant="elevated" className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-accent-pink">The Platform Direction</h3>
            <p className="text-gray-300 mb-4">
              All major platforms are moving toward the same requirements:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Transparent sourcing and expertise demonstration</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Authentic voices over corporate marketing speak</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Quality depth over keyword manipulation</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Multi-modal content availability</p>
              </div>
            </div>
            <div className="bg-primary-blue/10 rounded-lg p-4 border border-primary-blue/30">
              <p className="font-semibold text-white mb-2">
                ASO aligns with this direction systematically, not tactically.
              </p>
              <p className="text-gray-300">
                <strong className="text-accent-pink">Result:</strong> When platforms continue evolving, you adapt automatically instead of paying agencies to &quot;figure out the latest changes.&quot;
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Investment Structure and ROI */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Investment Structure and <span className="text-gradient">ROI</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink flex items-center gap-3">
                <DollarSign className="w-8 h-8" />
                One-Time Investment: $4,500
              </h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Payment Structure:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                      <span><strong className="text-white">$1,500 deposit</strong> upon application acceptance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                      <span><strong className="text-white">$3,000 balance</strong> upon onboarding completion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span><strong className="text-green-400">Refund terms clearly defined</strong> (detailed below)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="font-semibold text-white mb-3">What You Receive</h4>

              <div className="space-y-3 mb-4">
                <div className="bg-accent-pink/10 rounded-lg p-3 border border-accent-pink/30">
                  <h5 className="font-semibold text-accent-pink mb-2">Immediate:</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Comprehensive onboarding (1-3 weeks depending on complexity)</li>
                    <li>• ASO platform access and setup</li>
                    <li>• Direct CEO/CTO contact via email throughout partnership</li>
                    <li>• Bi-monthly Q&amp;A sessions with CEO and CTO (entire beta program + 12 months post-completion)</li>
                    <li>• Complete methodology documentation</li>
                  </ul>
                </div>

                <div className="bg-primary-blue/10 rounded-lg p-3 border border-primary-blue/30">
                  <h5 className="font-semibold text-primary-blue mb-2">Ongoing (Lifetime):</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Automated content generation and optimization across all channels</li>
                    <li>• Performance tracking and adaptive learning</li>
                    <li>• Platform adaptation to algorithm changes</li>
                    <li>• Social media content automation</li>
                    <li>• Trending topic integration</li>
                    <li>• All future platform updates and improvements</li>
                  </ul>
                </div>

                <div className="bg-secondary-purple-light/10 rounded-lg p-3 border border-secondary-purple-light/30">
                  <h5 className="font-semibold text-secondary-purple-light mb-2">Future Access:</h5>
                  <p className="text-sm text-gray-300 mb-2">Lifetime access to all platforms we build in the Continuum:</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Project No-Cheating (Educational AI)</li>
                    <li>• Project CTO&apos;s Heart (Special Needs Technology)</li>
                    <li>• Project Safe Spaces (Digital Safety for Youth)</li>
                    <li>• Project RE-Connect (Real Estate Transformation)</li>
                    <li>• Future projects identified by the community</li>
                  </ul>
                </div>

                <div className="bg-green-400/10 rounded-lg p-3 border border-green-400/30">
                  <h5 className="font-semibold text-green-400 mb-2">Revenue Opportunities:</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Unlimited lifetime affiliate revenue on all platforms</li>
                    <li>• Available for white-label commercial usage</li>
                    <li>• Revenue sharing on enterprise referrals using your case studies</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">ROI Analysis: 5-Year Comparison</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-accent-pink mb-3">Traditional SEO Agency (Mid-Tier Example):</h4>
                <div className="space-y-2 text-gray-300 mb-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <span>Year 1:</span>
                    <span className="font-bold text-white">$36,000-$60,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <span>Year 2:</span>
                    <span className="font-bold text-white">$36,000-$60,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <span>Years 3-5:</span>
                    <span className="font-bold text-white">$108,000-$180,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-xl font-bold text-white">5-year total:</span>
                    <span className="text-2xl font-bold text-accent-pink">$180K-$300K</span>
                  </div>
                </div>
                <div className="bg-accent-pink/10 rounded-lg p-3 border border-accent-pink/30">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Plus:</strong> Risk of agency switching, strategy changes, contract renegotiations
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-green-400 mb-3">Phase 1 Beta with TriSynq:</h4>
                <div className="space-y-2 text-gray-300 mb-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <span>One-time:</span>
                    <span className="font-bold text-white">$4,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <span>Ongoing:</span>
                    <span className="font-bold text-green-400">$0 (lifetime access)</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-xl font-bold text-white">5-year total:</span>
                    <span className="text-2xl font-bold text-green-400">$4,500</span>
                  </div>
                </div>
                <div className="bg-green-400/10 rounded-lg p-3 border border-green-400/30 mb-3">
                  <p className="text-sm text-gray-300 mb-1">
                    <strong className="text-white">Plus:</strong>
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Affiliate revenue potential ($10K-$100K+ depending on referrals)</li>
                    <li>• Access to all future Continuum platforms (value TBD)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent-pink/20 to-primary-blue/20 rounded-lg p-6 border border-accent-pink/30">
                <h4 className="text-xl font-bold mb-4 text-white">Conservative ROI Calculation:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">5-year savings:</span>
                    <span className="text-2xl font-bold text-green-400">$175.5K-$295.5K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Break-even:</span>
                    <span className="text-xl font-bold text-white">2-9 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">5-year return:</span>
                    <span className="text-2xl font-bold text-accent-pink">39x - 66x</span>
                  </div>
                  <p className="text-sm text-gray-400 italic pt-2 border-t border-gray-600">
                    (savings alone, not including affiliate revenue or future platform access)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Risk Mitigation Framework */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Risk Mitigation</span> Framework
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card variant="bordered">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-accent-pink/20 p-3 rounded-xl">
                  <Shield className="w-8 h-8 text-accent-pink" />
                </div>
                <h3 className="text-2xl font-bold text-accent-pink">Deposit and Refund Structure</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Initial Deposit: $1,500</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Secures your Phase 1 position</li>
                    <li>• Refundable during onboarding process under specific conditions</li>
                    <li>• Applied to final balance upon onboarding completion</li>
                  </ul>
                </div>

                <div className="bg-green-400/10 rounded-lg p-4 border border-green-400/30">
                  <h4 className="font-bold text-green-400 mb-3">Full Refund Available If:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>We determine your business isn&apos;t a fit for ASO methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Technical limitations prevent effective implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>You determine the platform doesn&apos;t meet your needs (within 14 days of onboarding start)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Either party identifies fundamental misalignment in approach or expectations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Onboarding extends beyond 6 weeks due to our delays (not client delays)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent-pink/10 rounded-lg p-4 border border-accent-pink/30">
                  <h4 className="font-bold text-accent-pink mb-2">No Refund After:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 30 days post-onboarding completion</li>
                    <li>• Content generation and optimization has begun</li>
                    <li>• You&apos;ve received access to the full platform and methodology</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Final Balance: $3,000</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Due upon onboarding completion and platform activation</li>
                    <li>• Only collected after you&apos;ve seen the platform in action</li>
                    <li>• Only collected after initial content samples approved</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary-blue/20 p-3 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-2xl font-bold text-primary-blue">Transparency Commitments</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-primary-blue/10 rounded-lg p-4 border border-primary-blue/30">
                  <h4 className="font-bold text-primary-blue mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Public Dashboard
                  </h4>
                  <p className="text-sm text-gray-300 mb-2">You&apos;ll have access to our public dashboard showing:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Aggregate results from all Phase 1 participants (anonymized)</li>
                    <li>• What&apos;s working and what isn&apos;t across different industries</li>
                    <li>• Methodology adjustments and why we&apos;re making them</li>
                    <li>• Real-time progress toward Phase 2</li>
                  </ul>
                </div>

                <div className="bg-secondary-purple-light/10 rounded-lg p-4 border border-secondary-purple-light/30">
                  <h4 className="font-bold text-secondary-purple-light mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Direct Communication
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Email access to CEO and CTO throughout your partnership</li>
                    <li>• Bi-monthly Q&amp;A sessions with CEO and CTO for entire beta program + 12 months after completion</li>
                    <li>• Not 24/7 on-call, but genuine responsiveness</li>
                    <li>• Direct answers to questions about methodology, results, and strategy</li>
                    <li>• No filtering through account managers or support tiers</li>
                  </ul>
                </div>

                <div className="bg-accent-pink/10 rounded-lg p-4 border border-accent-pink/30">
                  <h4 className="font-bold text-accent-pink mb-2 flex items-center gap-2">
                    <FileCheck className="w-5 h-5" />
                    Progress Documentation
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Monthly reports on your performance across all channels</li>
                    <li>• Clear metrics on what&apos;s working and what needs adjustment</li>
                    <li>• Honest assessment of results vs. expectations</li>
                    <li>• Roadmap visibility for platform improvements</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Performance Expectations (Realistic)</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-accent-pink mb-3">What we&apos;re NOT promising:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Overnight results (meaningful traction takes 3-6 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Guaranteed #1 rankings (nobody can honestly guarantee that)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Perfect execution from day one (we&apos;re refining as we scale)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">That you&apos;ll never think about search again (you approve content, maintain strategic control)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-400 mb-3">What we ARE promising:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Methodology that aligns with platform evolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Complete transparency about what&apos;s working and what isn&apos;t</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Automatic adaptation to platform changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Lifetime access regardless of how the business evolves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Your investment funds infrastructure that serves you, not executive compensation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="font-bold text-white mb-3 text-center">Realistic Timeline:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-accent-pink/10 rounded-lg p-4 border border-accent-pink/30 text-center">
                  <p className="font-bold text-accent-pink mb-1">Months 1-2</p>
                  <p className="text-sm text-gray-300">Onboarding and initial content generation</p>
                </div>
                <div className="bg-primary-blue/10 rounded-lg p-4 border border-primary-blue/30 text-center">
                  <p className="font-bold text-primary-blue mb-1">Months 3-6</p>
                  <p className="text-sm text-gray-300">Early results, optimization, learning</p>
                </div>
                <div className="bg-secondary-purple-light/10 rounded-lg p-4 border border-secondary-purple-light/30 text-center">
                  <p className="font-bold text-secondary-purple-light mb-1">Months 6-12</p>
                  <p className="text-sm text-gray-300">Meaningful traction, compounding effects</p>
                </div>
                <div className="bg-green-400/10 rounded-lg p-4 border border-green-400/30 text-center">
                  <p className="font-bold text-green-400 mb-1">Year 2+</p>
                  <p className="text-sm text-gray-300">Established presence, ongoing automated optimization</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Onboarding Process - Continuing in next part due to length */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The <span className="text-gradient">Onboarding Process</span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-12">
            From application to activation in 1-3 weeks depending on complexity
          </p>

          <div className="space-y-6">
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-pink">Week 1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-accent-pink">Discovery and Expertise Capture</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Initial Consultation (2-3 hours):</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Business model and value proposition deep-dive</li>
                        <li>• Target audience and market understanding</li>
                        <li>• Current marketing efforts and results</li>
                        <li>• Expertise areas and unique knowledge</li>
                        <li>• Voice and communication style analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Competitive Analysis:</h4>
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
                  <span className="text-2xl font-bold text-primary-blue">Week 2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-primary-blue">Platform Configuration and Content Foundation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Technical Setup:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Platform access and configuration</li>
                        <li>• Integration with your existing web properties</li>
                        <li>• Social media account connections</li>
                        <li>• Analytics and tracking implementation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Initial Content Development:</h4>
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
                  <span className="text-2xl font-bold text-secondary-purple-light">Week 3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Activation and Training</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Content Approval and Refinement:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Review initial content output</li>
                        <li>• Adjust voice, tone, and messaging as needed</li>
                        <li>• Approve publication schedule</li>
                        <li>• Set up approval workflows</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Platform Training:</h4>
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
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Ongoing (Post-Onboarding)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Your Time Commitment:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Weekly: 30-60 minutes reviewing/approving content</li>
                        <li>• Monthly: 1-2 hours reviewing performance and providing strategic input</li>
                        <li>• Bi-monthly: Q&amp;A sessions with CEO and CTO (entire beta + 12 months after)</li>
                        <li>• Quarterly: Optional strategy session with leadership</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">What Runs Automatically:</h4>
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

      {/* Phase 1 Exclusive Benefits - PART 2 CONTINUES */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Phase 1 Exclusive</span> Benefits
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink flex items-center gap-3">
                <Award className="w-8 h-8" />
                Ground Floor Positioning
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Status Recognition:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                      <span>&quot;Phase 1 Founder&quot; designation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                      <span>Permanent recognition in community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                      <span>First access to all future Continuum projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                      <span>Voice in methodology development</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-accent-pink/10 rounded-lg p-4 border border-accent-pink/30">
                  <h4 className="font-semibold text-white mb-2">Direct Access:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Email contact with CEO and CTO</li>
                    <li>• Bi-monthly Q&amp;A sessions for entire beta program + 12 months post-completion</li>
                    <li>• Not account managers, the actual leadership</li>
                    <li>• Strategic input on platform evolution</li>
                    <li>• Early visibility into roadmap</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue flex items-center gap-3">
                <DollarSign className="w-8 h-8" />
                Financial Advantages
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Lowest Price Point:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Phase 1:</span>
                      <span className="font-bold text-green-400">$4,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Phase 2:</span>
                      <span className="font-bold text-white">$9,500 <span className="text-sm text-accent-pink">(+111%)</span></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Phase 3:</span>
                      <span className="font-bold text-white">$22,500 <span className="text-sm text-accent-pink">(+400%)</span></span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                      <span className="text-gray-300">After Phase 3:</span>
                      <span className="font-bold text-accent-pink">White-label only, no direct access</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-blue/10 rounded-lg p-4 border border-primary-blue/30">
                  <h4 className="font-semibold text-white mb-2">Affiliate Revenue:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Unlimited lifetime commissions on all platform referrals</li>
                    <li>• Not just ASO—every Continuum project we build</li>
                    <li>• Percentage increases with tier (20-30% based on referral size)</li>
                    <li>• No caps, no expiration</li>
                  </ul>
                </div>
                <div className="bg-secondary-purple-light/10 rounded-lg p-4 border border-secondary-purple-light/30">
                  <h4 className="font-semibold text-white mb-2">White-Label Availability:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Available for commercial usage</li>
                    <li>• Rebrand and resell to your own clients</li>
                    <li>• Keep 100% of revenue from your implementations</li>
                    <li>• Access to our methodology and updates</li>
                  </ul>
                </div>
                <div className="bg-green-400/10 rounded-lg p-4 border border-green-400/30">
                  <h4 className="font-semibold text-white mb-2">Revenue Sharing:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 10% of revenue from enterprise implementations using your case studies</li>
                    <li>• Ongoing passive income from your documented success</li>
                    <li>• Recognition for contribution to the movement</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* What Happens After Phase 1 */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            What Happens <span className="text-gradient">After Phase 1</span>
          </h2>

          <div className="space-y-6">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-blue">Phase 2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-primary-blue">Validation at Scale (5,000 businesses)</h3>
                  <p className="text-gray-400 mb-3">Timing: Q2-Q4 2025 (projected)</p>
                  <p className="text-gray-300 mb-4">
                    <strong className="text-white">Price increase to $9,500</strong> justified by:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Proven results with 100 businesses (public dashboard data)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Comprehensive case studies across industries</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Full infrastructure maturity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Reduced risk for new participants</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-accent-pink/10 rounded-lg p-3 border border-accent-pink/30">
                    <p className="text-sm font-semibold text-white">
                      <strong className="text-accent-pink">Phase 1 advantage:</strong> You&apos;re already established and optimizing while others are just starting
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-purple-light/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-secondary-purple-light">Phase 3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-secondary-purple-light">Market Launch (10,000 businesses)</h3>
                  <p className="text-gray-400 mb-3">Timing: 2026 (projected)</p>
                  <p className="text-gray-300 mb-4">
                    <strong className="text-white">Price increase to $22,500</strong> justified by:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Proven at 5,000+ business scale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Comprehensive support infrastructure</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>White-label partners launching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Mature methodology with extensive documentation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-accent-pink/10 rounded-lg p-3 border border-accent-pink/30">
                    <p className="text-sm font-semibold text-white mb-2">
                      <strong className="text-accent-pink">Phase 1 advantage:</strong>
                    </p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• You&apos;ve been building authority for 12-18 months</li>
                      <li>• Your content is established across all channels</li>
                      <li>• Your affiliate network is generating revenue</li>
                      <li>• Competitors are just beginning their journey</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 p-3 rounded-xl flex-shrink-0">
                  <AlertCircle className="w-8 h-8 text-accent-pink" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-accent-pink">Beyond Phase 3: White-Label Only</h3>
                  <p className="text-gray-300 mb-4">
                    <strong className="text-white">Direct sales close after 10,000 lifetime licenses issued</strong>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">New customers access through:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• White-label partners</li>
                        <li>• Agency implementations</li>
                        <li>• Enterprise licensing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Phase 1 advantage:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• You have lifetime direct access (unavailable to future customers)</li>
                        <li>• You can utilize white-label availability if desired</li>
                        <li>• Your grandfathered pricing can never be changed</li>
                        <li>• You&apos;re established before the market floods</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Frequently Asked</span> Questions
          </h2>

          <div className="space-y-6">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">&quot;Why should we trust an unproven platform?&quot;</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Fair question. Here&apos;s our answer:</strong>
              </p>
              <p className="text-gray-300 mb-3">We&apos;re not asking you to trust us blindly. We&apos;re asking you to:</p>
              <ol className="text-gray-300 space-y-2 ml-4 mb-4">
                <li>1. Evaluate our methodology (does it align with where platforms are going?)</li>
                <li>2. Review our private beta results (scrubbed for privacy, but real data)</li>
                <li>3. Understand the risk mitigation (deposit refund, direct access, transparency)</li>
                <li>4. Compare the investment (2-9 months of traditional spend for lifetime access)</li>
                <li>5. Assess the downside (comparable to what you&apos;d spend anyway on traditional SEO)</li>
              </ol>
              <div className="bg-accent-pink/10 rounded-lg p-4 border border-accent-pink/30">
                <p className="font-semibold text-white">
                  If it doesn&apos;t work, you&apos;ve spent what you would&apos;ve spent in 2-9 months with an agency. If it works, you&apos;ve eliminated a permanent expense.
                </p>
              </div>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">&quot;What if the platforms change their algorithms again?&quot;</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">That&apos;s exactly why this approach works.</strong>
              </p>
              <p className="text-gray-300 mb-3">
                Traditional agencies charge you every time platforms change because they have to &quot;figure out the new rules.&quot;
              </p>
              <p className="text-gray-300 mb-4">
                ASO adapts automatically because it&apos;s built on principles (transparent expertise, authentic voice, multi-modal optimization) that remain valuable regardless of specific algorithmic changes.
              </p>
              <div className="bg-primary-blue/10 rounded-lg p-4 border border-primary-blue/30">
                <p className="font-semibold text-white">
                  You&apos;re not paying for tactics that break. You&apos;re investing in methodology that evolves.
                </p>
              </div>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">&quot;How do we know you&apos;ll still be around in 5 years?&quot;</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Our business model ensures longevity:</strong>
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Phase 1 ($450K) funds Phase 2 infrastructure</li>
                <li>• Phase 2 ($47.5M) funds complete platform maturity and all Continuum projects</li>
                <li>• Phase 3 ($225M) establishes sustainable operations</li>
                <li>• White-label transition creates ongoing revenue without acquisition costs</li>
              </ul>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">We&apos;re not VC-funded with pressure to exit. We&apos;re building a sustainable business that serves lifetime customers.</strong>
              </p>
              <div className="bg-secondary-purple-light/10 rounded-lg p-4 border border-secondary-purple-light/30">
                <p className="text-gray-300">
                  Plus, your lifetime license is exactly that—lifetime. Even if the business changed hands, your access is contractually guaranteed.
                </p>
              </div>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">&quot;What if our industry/business is too unique for automated content?&quot;</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Good question. Some businesses aren&apos;t a fit, and we&apos;ll tell you that in discovery.</strong>
              </p>
              <p className="text-gray-300 mb-3">ASO works best when:</p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>You have genuine expertise worth amplifying</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>Your business can be explained clearly (not highly technical jargon requiring deep domain knowledge to understand)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>You serve customers through education and authority (not just lowest price)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>Your competitive advantage is knowledge, not just convenience or cost</span>
                </li>
              </ul>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Industries we&apos;ve successfully tested:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Professional services (legal, accounting, consulting)</li>
                  <li>• Real estate and mortgage</li>
                  <li>• Healthcare and wellness</li>
                </ul>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Technology and SaaS</li>
                  <li>• Education and training</li>
                  <li>• Home services and trades</li>
                </ul>
              </div>
              <div className="bg-green-400/10 rounded-lg p-4 border border-green-400/30">
                <p className="font-semibold text-green-400">
                  If we determine during onboarding that ASO isn&apos;t a fit, full deposit refund—no questions asked.
                </p>
              </div>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">&quot;Why only 100 businesses in Phase 1?&quot;</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Infrastructure and support capacity.</strong>
              </p>
              <p className="text-gray-300 mb-4">
                We want to give Phase 1 partners direct CEO/CTO access, bi-monthly Q&amp;A sessions, and genuine partnership in development. That doesn&apos;t scale beyond 100 businesses while maintaining quality.
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Phase 2 (5,000 businesses) will have:</strong>
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Mature infrastructure that can handle scale</li>
                <li>• Support team (not just CEO/CTO)</li>
                <li>• Documented processes from Phase 1 learning</li>
                <li>• Proven methodology from 100 diverse implementations</li>
              </ul>
              <div className="bg-primary-blue/10 rounded-lg p-4 border border-primary-blue/30">
                <p className="font-semibold text-white">
                  Phase 1 is genuinely limited because we&apos;re prioritizing quality over quantity at this stage.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Decision Framework */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Decision Framework</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                This is Right for You If:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You currently spend (or should spend) $1,500-$5,000/month on search marketing</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You have genuine expertise in your field worth amplifying</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You&apos;re willing to be an early adopter for significant long-term advantage</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You value transparency and want to understand how your marketing works</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You&apos;re frustrated with black-box agency relationships</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You want to eliminate a permanent recurring expense</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You believe in competing on expertise rather than just outspending competitors</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You&apos;re comfortable with 3-6 months to meaningful traction</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink flex items-center gap-3">
                <XCircle className="w-8 h-8" />
                This is NOT Right for You If:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You need immediate results (this takes time to build momentum)</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You don&apos;t have genuine expertise to amplify (ASO won&apos;t create it)</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You compete purely on price (expertise marketing won&apos;t help)</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You&apos;re unwilling to invest time in onboarding and content approval</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You want a &quot;set it and forget it&quot; solution with zero involvement</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You&apos;re not comfortable with early-stage partnership (wait for Phase 2/3)</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">You prefer traditional agency relationships where you&apos;re hands-off</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Investment Summary Table */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
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
                    <td className="py-4 text-white text-right">Full refund during onboarding (including if exceeds 6 weeks)</td>
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

      {/* Pricing Comparison Table */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Pricing Comparison <span className="text-gradient">Across Phases</span>
          </h2>

          <Card variant="elevated">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-700">
                    <th className="py-4 text-left text-gray-300 font-semibold">Phase</th>
                    <th className="py-4 text-center text-gray-300 font-semibold">Spots</th>
                    <th className="py-4 text-right text-gray-300 font-semibold">Price</th>
                    <th className="py-4 text-right text-gray-300 font-semibold">Increase from Phase 1</th>
                    <th className="py-4 text-right text-gray-300 font-semibold">Justification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="py-4 text-accent-pink font-bold">Phase 1</td>
                    <td className="py-4 text-center text-white">100</td>
                    <td className="py-4 text-right text-white font-bold">$4,500</td>
                    <td className="py-4 text-right text-gray-400">—</td>
                    <td className="py-4 text-right text-gray-300">Ground floor, highest risk, direct CEO/CTO access</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-primary-blue font-bold">Phase 2</td>
                    <td className="py-4 text-center text-white">5,000</td>
                    <td className="py-4 text-right text-white font-bold">$9,500</td>
                    <td className="py-4 text-right text-accent-pink font-bold">+111%</td>
                    <td className="py-4 text-right text-gray-300">Proven with 100 businesses, mature infrastructure</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-secondary-purple-light font-bold">Phase 3</td>
                    <td className="py-4 text-center text-white">10,000</td>
                    <td className="py-4 text-right text-white font-bold">$22,500</td>
                    <td className="py-4 text-right text-accent-pink font-bold">+400%</td>
                    <td className="py-4 text-right text-gray-300">Proven at 5,000+ scale, last chance for direct access</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray-400 font-bold">Post-Phase 3</td>
                    <td className="py-4 text-center text-gray-400">—</td>
                    <td className="py-4 text-right text-gray-400">White-label only</td>
                    <td className="py-4 text-right text-gray-400">N/A</td>
                    <td className="py-4 text-right text-gray-300">Direct sales close, white-label partners only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-accent-pink/10 rounded-lg p-6 border border-accent-pink/30">
              <h4 className="text-xl font-bold mb-4 text-accent-pink text-center">Phase 1 Savings vs. Waiting:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Wait for Phase 2</p>
                  <p className="text-3xl font-bold text-white">Pay $5,000 more</p>
                  <p className="text-sm text-gray-400">($9,500 vs. $4,500)</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Wait for Phase 3</p>
                  <p className="text-3xl font-bold text-white">Pay $18,000 more</p>
                  <p className="text-sm text-gray-400">($22,500 vs. $4,500)</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Wait beyond Phase 3</p>
                  <p className="text-2xl font-bold text-accent-pink">Direct access unavailable</p>
                  <p className="text-sm text-gray-400">at any price</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final Thoughts from Leadership */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Final Thoughts <span className="text-gradient">from Leadership</span>
          </h2>

          <div className="space-y-8">
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent-pink/20 p-3 rounded-full flex-shrink-0">
                  <Users className="w-8 h-8 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent-pink">From the CEO:</h3>
                </div>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  &quot;We&apos;re not building another SEO agency. We&apos;re building a methodology that makes the old SEO strategies obsolete, and rewarding authentic content—at least for the businesses that join us early enough.
                </p>
                <p>
                  The platforms changed their rules. Traditional approaches are dying. We&apos;ve figured out how to align with where platforms are going, not where they&apos;ve been.
                </p>
                <p>
                  100 businesses will help us prove this works. 5,000 will validate it at scale. 10,000 will establish it as the standard. After that, direct access closes.
                </p>
                <p className="font-semibold text-white text-lg">
                  If you&apos;re reading this, you&apos;re early enough to be one of the 100. That&apos;s a position of permanent advantage.&quot;
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-blue/20 p-3 rounded-full flex-shrink-0">
                  <Zap className="w-8 h-8 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-blue">From the CTO:</h3>
                </div>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  &quot;I wasn&apos;t always technical. I was a mechanic who got pulled into enterprise tech because I understood how things worked operationally. That&apos;s what we&apos;re doing here—translating complex enterprise capabilities into terms that actual business owners can understand and use.
                </p>
                <p>
                  ASO isn&apos;t magic. It&apos;s systematic application of what the biggest companies have been doing for years, made accessible and automated. We&apos;ve built it. We&apos;ve tested it. Now we&apos;re opening it to 100 businesses willing to help us prove it at scale.
                </p>
                <p className="font-semibold text-white text-lg">
                  Your expertise is valuable. Let&apos;s amplify it properly.&quot;
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-accent-pink/20 p-4 rounded-full border border-accent-pink/30">
              <Rocket className="w-12 h-12 text-accent-pink" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Join the <span className="text-gradient">First 100?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            One-time $4,500 investment. Lifetime access to everything we build. Break-even in 2-9 months.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background-dark/50 rounded-2xl p-6 border border-accent-pink/30">
              <div className="text-4xl font-bold text-accent-pink mb-2">$175.5K+</div>
              <p className="text-gray-300">5-year savings vs. traditional SEO</p>
            </div>
            <div className="bg-background-dark/50 rounded-2xl p-6 border border-primary-blue/30">
              <div className="text-4xl font-bold text-primary-blue mb-2">Unlimited</div>
              <p className="text-gray-300">Affiliate revenue potential</p>
            </div>
            <div className="bg-background-dark/50 rounded-2xl p-6 border border-secondary-purple-light/30">
              <div className="text-4xl font-bold text-secondary-purple-light mb-2">Lifetime</div>
              <p className="text-gray-300">Access to all platforms</p>
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <Button href="/beta-program" size="lg" className="text-xl px-12 py-6">
              Apply for Phase 1 Partnership
            </Button>
            <p className="text-gray-400">
              3-5 business day application review · Discovery call if qualified · $1,500 deposit to secure position
            </p>
          </div>

          <div className="bg-background-dark/70 rounded-2xl p-8 border border-accent-pink/30 max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/30 rounded-full px-6 py-3 mb-4">
              <Clock className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Applications close when 100 positions filled or March 31, 2025</span>
            </div>
          </div>

          <div className="bg-background-dark/70 rounded-2xl p-8 border border-primary-blue/30 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-white">Not ready to apply yet?</strong>
            </p>
            <p className="text-gray-300 mb-6">
              Learn more about the ASO methodology and Project NEXUS details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/continuum/nexus" variant="outline">
                About Project NEXUS
              </Button>
              <Button href="/continuum/nexus/pricing" variant="outline">
                View Pricing Details
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Final TriSynq Continuum Footer */}
      <Section background="dark" className="text-center py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl font-bold text-gradient mb-4">TriSynq Continuum</p>
          <p className="text-xl text-gray-400 mb-8">Transparency Without End</p>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-white">Project NEXUS Phase 1 Beta</p>
            <p className="text-gray-300">100 Positions Available</p>
            <p className="text-2xl font-bold text-accent-pink">$4,500 One-Time Investment</p>
            <p className="text-gray-300">Lifetime Access to Everything We Build</p>
          </div>
        </div>
      </Section>
    </>
  );
}
