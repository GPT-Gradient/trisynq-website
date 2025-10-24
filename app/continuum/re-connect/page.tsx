import { Metadata } from 'next';
import { Building, TrendingUp, Users, DollarSign, FileText, CheckCircle, Zap } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'RE-Connect: Restoring Honesty in Real Estate',
  description: 'We&apos;re proving that transparency and trust can be business models.',
});

export default function ProjectREConnectPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-secondary-purple-light/20 p-4 rounded-full border border-secondary-purple-light/30">
              <Building className="w-12 h-12 text-secondary-purple-light" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">RE-Connect: Restoring Honesty in Real Estate.</span>
          </h1>

          <div className="inline-flex items-center gap-2 bg-pink-400/20 border border-pink-400/30 rounded-full px-6 py-3 mb-8">
            <Building className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-semibold">Planning Mid 2026</span>
          </div>

          <div className="bg-primary/50 rounded-2xl p-6 border border-accent-pink/30 backdrop-blur-sm">
            <p className="text-lg md:text-xl font-semibold text-white">
              Recent NAR changes disrupted the industry. Perfect opportunity to rebuild around transparency.
            </p>
          </div>
        </div>
      </Section>

      {/* The Industry Disruption */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">The Problem</span>
          </h2>

          <Card variant="bordered" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">Fees and incentives misaligned with value.</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">NAR Law Changes</h4>
                  <p className="text-gray-300">New regulations requiring exclusive buyer agreements. The old commission structure and practices got disrupted.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">The Opportunity</h4>
                  <p className="text-gray-300">Industry disruption creates opportunity to rebuild around better principles. Transparency. Value. People-first practices.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-secondary-purple-light mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Current Industry Reality</h4>
                  <p className="text-gray-300">Commission-driven vs. value-driven. Opacity in fees and processes. Access-hoarding instead of value creation.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20">
              <p className="text-lg text-white">
                <strong className="text-accent-pink">The Timing:</strong> With exclusive buyer agreements required, it&apos;s the perfect moment to prove transparency and value beat opacity and access-hoarding.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* The Vision */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">The Approach</span>
          </h2>

          <div className="text-center mb-8">
            <p className="text-xl text-gray-300">
              Open-book pricing, disclosure-first process, trust dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">Complete Fee Transparency</h3>
                  <p className="text-gray-300">All fees, commissions, and costs clearly explained upfront. No surprises. No hidden charges. Complete visibility.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent-pink">Clear Value at Each Stage</h3>
                  <p className="text-gray-300">Explain what value you&apos;re providing at every step of the transaction. Not just what&apos;s happening, but why it matters.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-secondary-purple-light flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Buyer and Seller Education</h3>
                  <p className="text-gray-300">Educate clients about the actual process. Understanding empowers better decisions and smoother transactions.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">Technology-Amplified Expertise</h3>
                  <p className="text-gray-300">AI and automation amplifying agent expertise and market knowledge, not replacing the human relationship.</p>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="bordered">
            <h3 className="text-2xl font-bold mb-6 text-center text-gradient">The Outcome</h3>
            <p className="text-lg text-gray-300 mb-6 text-center">
              Less friction. More confidence. Better deals.
            </p>

            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20">
              <h4 className="text-xl font-bold mb-3 text-secondary-purple-light">The Competitive Advantage</h4>
              <p className="text-gray-300">
                With exclusive buyer agreements required, this is the perfect moment to prove transparency and value beat opacity and access-hoarding as competitive strategies.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Success Metrics */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            How We&apos;ll <span className="text-gradient">Measure Success</span>
          </h2>

          <div className="space-y-6">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Complete Process Transparency</h3>
                  <p className="text-gray-300">Buyers and sellers have clear understanding of every step, every fee, every decision point in the transaction.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Professionals Competing on Value</h3>
                  <p className="text-gray-300">Real estate professionals winning business through demonstrated expertise and value, not just listing access.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Reduced Transaction Friction</h3>
                  <p className="text-gray-300">Smoother transactions and lower stress through transparency and clear expectations. Fewer surprises, better outcomes.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Increased Trust in Professionals</h3>
                  <p className="text-gray-300">Trust in real estate professionals increasing through demonstrated transparency and value creation.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Better Outcomes Through Transparency</h3>
                  <p className="text-gray-300">Measurably better transaction outcomes when transparency and clear value proposition are the foundation.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Transparent Model */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            The <span className="text-gradient">Transparent Model</span>
          </h2>

          <div className="space-y-6 mb-8">
            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">Upfront Fee Clarity</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/30 rounded-2xl p-6">
                  <h4 className="font-bold text-white mb-3">What You&apos;re Paying</h4>
                  <p className="text-gray-300">Complete breakdown of all fees and commissions before agreements are signed.</p>
                </div>
                <div className="bg-primary/30 rounded-2xl p-6">
                  <h4 className="font-bold text-white mb-3">What You&apos;re Getting</h4>
                  <p className="text-gray-300">Clear explanation of services provided, value delivered at each stage.</p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-secondary-purple-light">Process Education</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <p className="text-gray-300">Buyers and sellers understand each step of the transaction</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <p className="text-gray-300">Clear expectations set from the beginning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <p className="text-gray-300">Decision points explained with context and options</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <p className="text-gray-300">Empowered clients making informed choices</p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink">Technology-Enhanced Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/30 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-white mb-2">Market Intelligence</p>
                  <p className="text-sm text-gray-400">AI-powered market analysis and pricing strategies</p>
                </div>
                <div className="bg-primary/30 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-white mb-2">Timing Optimization</p>
                  <p className="text-sm text-gray-400">Data-driven insights on optimal timing</p>
                </div>
                <div className="bg-primary/30 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-white mb-2">Automated Research</p>
                  <p className="text-sm text-gray-400">Comprehensive property and market research</p>
                </div>
                <div className="bg-primary/30 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-white mb-2">Communication Tools</p>
                  <p className="text-sm text-gray-400">Clear, documented communication throughout</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-accent-pink/10 rounded-2xl p-8 border border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-accent-pink">The Competitive Edge</h3>
            <p className="text-xl text-center text-white mb-4">
              In a world of exclusive buyer agreements, transparency becomes the differentiator.
            </p>
            <p className="text-lg text-center text-gray-300">
              Agents competing on value and expertise beat those competing on access and opacity.
            </p>
          </div>
        </div>
      </Section>

      {/* The Research Approach */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            The <span className="text-gradient">Research Approach</span>
          </h2>

          <div className="space-y-6 mb-8">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Phase 1: Build Transparent Practices Framework</h3>
              <p className="text-gray-300">Develop comprehensive transparency framework for real estate transactions. Complete fee disclosure, value documentation, process education.</p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Beta Testing: Partner with Forward-Thinking Agents</h3>
              <p className="text-gray-300">Work with agents and brokerages ready to embrace transparency as competitive advantage. Real transactions. Real results.</p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Documentation: Proving Transparency Works</h3>
              <p className="text-gray-300">Document that transparency and value creation lead to better outcomes for all parties. Evidence-based transformation.</p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">White-Label: Platform for Transparent Real Estate</h3>
              <p className="text-gray-300">Once proven, make framework and tools available to any real estate professional committed to transparency-first practices.</p>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Why This Matters Now</h3>
            <p className="text-lg text-gray-300 mb-4 text-center">
              Industry disruption creates rare opportunity to reset norms. To rebuild around better principles.
            </p>
            <p className="text-xl font-bold text-accent-pink text-center">
              The timing for transparent real estate has never been better.
            </p>
          </div>
        </div>
      </Section>

      {/* ClearForge Foundry Integration */}
      <Section background="medium">
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

      {/* Timeline */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Timeline</span> and Participation
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Current: Research & Framework Development</h3>
              <p className="text-gray-300">Building transparency framework. Consulting with forward-thinking real estate professionals. Designing supporting technology.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Mid 2026: Beta Testing with Agents</h3>
              <p className="text-gray-300">Partner with agents and brokerages to prove transparency as competitive advantage. Document results publicly.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Beyond: Platform for Transparent Practices</h3>
              <p className="text-gray-300">White-label platform and framework available to real estate professionals ready to embrace transparency-first approach.</p>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary-blue/20 to-accent-pink/20 rounded-2xl p-8 border border-accent-pink/30 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Interested in Participating?</h3>
            <p className="text-gray-300 mb-6">
              First 100 partners across ALL Continuum projects get access when each launches—including Project RE-Connect.
            </p>
            <Button href="/contact?type=nexus" size="lg">
              Join the First 100 (All Projects)
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
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">Beta Agent/Brokerage Partnership</h3>

            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-white">$497</span>
                <span className="text-xl text-gray-400">/ month per agent</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">12-18 month beta partnership period (Mid 2026 launch)</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-lg font-semibold text-white mb-2">Total Investment: $5,964 - $8,946 per agent</p>
                <p className="text-sm text-gray-400">For lifetime access to RE-Connect platform + unlimited affiliate revenue</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">What You Get During Beta Partnership:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Full RE-Connect platform access (transparency dashboards, fee calculators, client education tools)</li>
                  <li>• Weekly implementation support and coaching</li>
                  <li>• Transaction-by-transaction feedback and refinement</li>
                  <li>• Monthly transparency reports (your results vs. traditional approaches)</li>
                  <li>• Direct access to ClearForge team for questions and strategy</li>
                  <li>• Public case study showcasing (build your reputation as transparency leader)</li>
                  <li>• Marketing materials and messaging support</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="font-bold text-secondary-purple-light mb-2">What You Get After Beta Completion:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Lifetime access to RE-Connect platform (normally $297/month per agent)</li>
                  <li>• Lifetime access to ALL future Continuum platforms (6+ planned)</li>
                  <li>• Unlimited affiliate revenue (30% recurring) for every agent/brokerage you refer</li>
                  <li>• No monthly fees, no usage caps, no price increases</li>
                  <li>• Founding partner status in ClearForge ecosystem</li>
                  <li>• Priority access to new features and tools</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <h4 className="font-bold text-primary-blue mb-2">The Math for Brokerages:</h4>
              <p className="text-gray-300 text-sm mb-3">
                10 agents × $497/month × 18 months = $89,460 total beta investment. Lifetime platform value: 10 agents × $297/month = $35,640/year. Break-even in ~2.5 years if you never refer anyone.
              </p>
              <p className="text-gray-300 text-sm mb-3">
                <strong className="text-white">Refer 5 agents/brokerages:</strong> Average 3 agents each = 15 users × $297 = $4,455/month revenue pool. Your 30% = $1,336/month recurring ($16,032/year). Combined with platform value, break-even in ~1.5-2 years.
              </p>
              <p className="text-accent-pink text-sm font-semibold">
                Plus: Transparency as competitive differentiator in exclusive buyer agreement era. That&apos;s where the real ROI comes from.
              </p>
            </div>
          </Card>

          <div className="bg-background-dark rounded-2xl p-6 border border-gray-700">
            <h4 className="text-lg font-bold mb-3 text-white">Payment Terms</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Monthly recurring payment ($497/month per agent) via credit card or ACH</li>
              <li>• Brokerage-level pricing available for 5+ agents</li>
              <li>• Cancel anytime (but you forfeit lifetime access and affiliate revenue)</li>
              <li>• Completion bonus: Stay for full 12-18 months → unlock all lifetime benefits</li>
              <li>• Early termination: You keep tools you built, lose future platform access</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* What to Expect: Partnership Journey */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What to Expect: <span className="text-gradient">The Partnership Journey</span>
          </h2>

          <div className="space-y-6">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-pink">Months 1-3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-accent-pink">Onboarding & Framework Setup</h3>
                  <p className="text-gray-300 mb-4">
                    Learn the transparency framework. Set up tools. Prepare your first transparent buyer/seller agreements.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-white">Weekly Activities:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 1-2 hour training sessions on transparency practices</li>
                      <li>• Platform setup (dashboards, fee calculators, client education materials)</li>
                      <li>• Messaging and positioning coaching (how to sell transparency as advantage)</li>
                      <li>• Marketing materials customization (your brand + transparency messaging)</li>
                      <li>• First buyer/seller agreement reviews and feedback</li>
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
                  <h3 className="text-2xl font-bold mb-3 text-primary-blue">Active Transactions & Refinement</h3>
                  <p className="text-gray-300 mb-4">
                    Use the transparency framework in real transactions. Track results. Refine approach based on what works.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-white">Weekly Activities:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 30-60 minute check-ins per active transaction</li>
                      <li>• Transaction-by-transaction feedback and support</li>
                      <li>• Monthly transparency reports (your results vs. traditional methods)</li>
                      <li>• Ongoing coaching on positioning transparency as competitive edge</li>
                      <li>• Platform feature requests and customization</li>
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
                  <h3 className="text-2xl font-bold mb-3 text-secondary-purple-light">Validation & Case Study</h3>
                  <p className="text-gray-300 mb-4">
                    Document your results. Build your reputation as transparency leader. Start referring other agents.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2 text-white">Weekly Activities:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Bi-weekly check-ins (you&apos;re largely autonomous now)</li>
                      <li>• Quarterly case study updates (your wins publicly showcased)</li>
                      <li>• Affiliate program onboarding (start earning referral revenue)</li>
                      <li>• Industry thought leadership support (you&apos;re now the expert)</li>
                    </ul>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p className="text-sm text-green-400 font-semibold mb-2">Partnership Completion:</p>
                    <p className="text-sm text-gray-300">
                      At month 12-18, partnership converts to lifetime access. All benefits activate. You&apos;re a founding member of the transparent real estate movement.
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
                  <span><strong className="text-white">You&apos;re already known for integrity</strong> — Your reputation is built on trust and client advocacy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You see transparency as competitive advantage</strong> — In the exclusive buyer agreement era, clarity wins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You want to differentiate on value</strong> — Not just listing access, but demonstrated expertise.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You&apos;re willing to document publicly</strong> — Your transparent approach will be showcased as case study.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You can commit 12-18 months</strong> — Building new norms takes time and consistency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">You want to lead industry change</strong> — Be the transparency pioneer in your market.</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-4 text-red-400">You&apos;re NOT a Fit If:</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You want instant market share</strong> — Building transparency reputation takes consistent demonstration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You rely on opacity for leverage</strong> — Transparency requires competing on value, not information asymmetry.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You want set-it-and-forget-it tools</strong> — This requires active participation and feedback.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You can&apos;t afford $497/month per agent</strong> — Don&apos;t overextend. This is an investment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You&apos;re not comfortable with public documentation</strong> — Your results will be shared transparently.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl mt-0.5">✕</span>
                  <span><strong className="text-white">You just want cheaper CRM</strong> — This is about proving a better industry model, not saving money on software.</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="bordered" className="bg-primary/10 border-primary-blue/30">
            <h3 className="text-xl font-bold mb-4 text-primary-blue">The Real Question:</h3>
            <p className="text-lg text-gray-300 mb-4">
              Do you believe transparency and value creation should replace opacity and access-hoarding as the foundation of real estate?
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
            Is RE-Connect <span className="text-gradient">Right For You?</span>
          </h2>

          <div className="space-y-6 mb-8">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Choose RE-Connect If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink text-xl">→</span>
                  <span>You want to <strong className="text-white">differentiate through transparency</strong> in the exclusive buyer agreement era</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink text-xl">→</span>
                  <span>You&apos;re ready to <strong className="text-white">compete on value and expertise</strong>, not information asymmetry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink text-xl">→</span>
                  <span>You want <strong className="text-white">tools and coaching</strong> to implement transparent practices systematically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink text-xl">→</span>
                  <span>You&apos;re willing to <strong className="text-white">document your results publicly</strong> to build industry reputation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink text-xl">→</span>
                  <span>You see <strong className="text-white">lifetime platform access + affiliate revenue</strong> as long-term value</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Keep Your Current Approach If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue text-xl">→</span>
                  <span>Your <strong className="text-white">current practices are working well</strong> and you see no need to change</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue text-xl">→</span>
                  <span>You prefer <strong className="text-white">traditional fee structures</strong> without complete upfront transparency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue text-xl">→</span>
                  <span>You&apos;re <strong className="text-white">not interested in being an early adopter</strong> of new industry practices</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Choose Traditional Tech Providers If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-purple-light text-xl">→</span>
                  <span>You just need <strong className="text-white">basic CRM or transaction management</strong> without methodology change</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-purple-light text-xl">→</span>
                  <span>You want <strong className="text-white">proven, established tools</strong> rather than beta programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-purple-light text-xl">→</span>
                  <span>You prefer <strong className="text-white">pay-monthly SaaS</strong> without partnership commitments</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-background-dark rounded-2xl p-8 border border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-accent-pink">Still Unsure?</h3>
            <p className="text-lg text-gray-300 text-center mb-6">
              When beta opens (Mid 2026), the application process will include a qualification call. We&apos;ll tell you honestly if RE-Connect is right for your practice.
            </p>
            <p className="text-center text-sm text-gray-400">
              We&apos;d rather turn you away than take your money for an approach that won&apos;t work for you.
            </p>
          </div>
        </div>
      </Section>

      {/* The Vision */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient">Vision</span>
          </h2>

          <Card variant="bordered">
            <p className="text-xl text-gray-300 mb-6">
              A real estate industry where transparency is expected, not exceptional. Where professionals compete on value and expertise. Where buyers and sellers make truly informed decisions.
            </p>

            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20 mb-6">
              <p className="text-2xl font-bold text-accent-pink mb-4">
                Industry disruption created the opportunity.
              </p>
              <p className="text-lg text-white mb-4">
                We&apos;re proving transparency fills the gap better than the old opacity ever did.
              </p>
            </div>

            <p className="text-lg text-gray-400">
              One transparent transaction at a time, we&apos;re showing there&apos;s a better way to do real estate.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
