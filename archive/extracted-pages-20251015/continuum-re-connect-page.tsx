import { Metadata } from 'next';
import { Building, TrendingUp, Users, DollarSign, FileText, CheckCircle, Zap } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Project RE-Connect - Transparent Real Estate | TriSynq Continuum',
  description: 'Proving transparency creates competitive advantage in real estate. Complete fee transparency, value-driven practices, and technology-amplified expertise. Planning Mid 2026.',
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
            <span className="text-gradient">Project RE-Connect</span>
            <br />
            Transparent Real Estate
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Proving transparency creates competitive advantage in real estate
          </p>

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
            The <span className="text-gradient">Industry Disruption</span>
          </h2>

          <Card variant="bordered" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">What Changed</h3>

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
            <span className="text-gradient">Transparent Real Estate</span>
          </h2>

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
            <h3 className="text-2xl font-bold mb-6 text-center text-gradient">Data-Driven Intelligence</h3>
            <p className="text-lg text-gray-300 mb-6 text-center">
              Technology helping agents and clients make truly informed decisions. Market intelligence, pricing strategies, timing optimization—all transparent.
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

      {/* Timeline */}
      <Section background="medium">
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
            <Button href="/beta" size="lg">
              Join the First 100 (All Projects)
            </Button>
          </div>
        </div>
      </Section>

      {/* The Vision */}
      <Section background="gradient">
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
