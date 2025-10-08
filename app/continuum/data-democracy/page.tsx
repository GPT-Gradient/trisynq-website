import { Metadata } from 'next';
import { BarChart, Database, Brain, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Data Democracy - AI-Powered Analytics for SMBs | TriSynq Continuum',
  description: 'Proving AI gives SMBs the data teams enterprises have. Transform siloed data into enterprise-quality intelligence without data scientist salaries. Research phase active.',
});

export default function DataDemocracyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-secondary-purple-light/20 p-4 rounded-full border border-secondary-purple-light/30">
              <BarChart className="w-12 h-12 text-secondary-purple-light" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Data Democracy</span>
            <br />
            Analytics for All
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Proving AI gives SMBs the data teams enterprises have
          </p>

          <div className="inline-flex items-center gap-2 bg-blue-400/20 border border-blue-400/30 rounded-full px-6 py-3 mb-8">
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Research Phase - Beta Targeting 2025</span>
          </div>
        </div>
      </Section>

      {/* The Data Divide */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            You Already Have the Data. <span className="text-gradient">You Just Can&apos;t Use It.</span>
          </h2>

          <Card variant="bordered" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">The Reality</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Database className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Data Sitting in Silos</h4>
                  <p className="text-gray-300">Analytics, CRM, Finance, Marketing—each tool uses data for its intended purpose only. No cross-system pattern recognition.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-secondary-purple-light mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Enterprise Advantage: Data Teams</h4>
                  <p className="text-gray-300">Fortune 500s have teams blending data from every system, finding patterns you can&apos;t see, making decisions you can&apos;t make.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">The Barrier</h4>
                  <p className="text-gray-300">Technical expertise to blend and interpret data across systems.</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-accent-pink">The Cost</h3>
              <div className="space-y-3">
                <div className="bg-primary/30 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white mb-1">$120-200K+/year</p>
                  <p className="text-sm text-gray-400">Data scientists salary</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white mb-1">$50-500K+</p>
                  <p className="text-sm text-gray-400">Infrastructure and tools</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">The Consequence</h3>
              <p className="text-gray-300 mb-4">
                While you see basic metrics, enterprises see:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Cross-system patterns</li>
                <li>• Predictive opportunities</li>
                <li>• Hidden competitive advantages</li>
                <li>• Strategic insights you&apos;re missing</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* What Enterprises Do Differently */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What <span className="text-gradient">Enterprises Do</span> Differently
          </h2>

          <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-accent-pink">Example Comparison</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary/30 rounded-2xl p-6 border border-gray-600">
                <h4 className="text-xl font-bold mb-4 text-gray-400">Siloed Approach (SMB)</h4>
                <div className="space-y-2 text-gray-300">
                  <p>📊 5,000 visitors</p>
                  <p>🤝 50 deals</p>
                  <p>💰 $25K revenue</p>
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">Basic metrics from separate systems</p>
              </div>

              <div className="bg-gradient-to-br from-accent-pink/20 to-primary-blue/20 rounded-2xl p-6 border border-accent-pink/50">
                <h4 className="text-xl font-bold mb-4 text-white">Blended Approach (Enterprise)</h4>
                <div className="space-y-3 text-gray-200">
                  <p className="text-sm">
                    <strong className="text-accent-pink">Discovery:</strong> Visitors reading blog X are <strong>340% more likely</strong> to buy product Y
                  </p>
                  <p className="text-sm">
                    <strong className="text-primary-blue">Timing:</strong> Q2 customers have <strong>2.3x higher</strong> lifetime value
                  </p>
                  <p className="text-sm">
                    <strong className="text-secondary-purple-light">Triggers:</strong> Blog posts mentioning pain point Z spike sales <strong>67%</strong>
                  </p>
                </div>
                <p className="text-sm text-accent-pink mt-4 italic font-semibold">Strategic intelligence from blended data</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-primary/30 rounded-2xl p-8 border border-primary-blue/20">
            <p className="text-2xl font-bold text-white mb-2">
              Same data. Different understanding.
            </p>
            <p className="text-xl text-accent-pink">
              Completely different decisions.
            </p>
          </div>
        </div>
      </Section>

      {/* The AI Solution */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The <span className="text-gradient">AI Solution</span>
          </h2>

          <Card variant="bordered" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary-blue">What Changed</h3>
            <p className="text-lg text-gray-300 mb-6">
              AI can now analyze all data sources simultaneously and explain insights in plain English. No data scientist required.
            </p>

            <div className="bg-primary/30 rounded-2xl p-6">
              <p className="text-xl font-semibold text-accent-pink mb-4">
                This changes everything.
              </p>
              <p className="text-gray-300">
                What required a $200K salary and years of training can now be automated transparently—giving you the same competitive intelligence enterprises use.
              </p>
            </div>
          </Card>

          <h3 className="text-2xl font-bold mb-6 text-center text-gradient">The Capability</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-accent-pink flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Pattern Recognition</h4>
                  <p className="text-gray-300">AI identifies patterns across siloed data sources you couldn&apos;t see manually</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Predictive Modeling</h4>
                  <p className="text-gray-300">Forecast outcomes and opportunities before they happen</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-secondary-purple-light flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Opportunity Identification</h4>
                  <p className="text-gray-300">Automatically surface hidden opportunities in your data</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Plain English Insights</h4>
                  <p className="text-gray-300">Complex analysis explained in clear business terms</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-accent-pink/10 rounded-2xl p-8 border border-accent-pink/30">
            <h4 className="text-xl font-bold mb-4 text-center text-accent-pink">The Result</h4>
            <p className="text-lg text-center text-white">
              Data you already have becomes the competitive intelligence enterprises use—without the enterprise costs.
            </p>
          </div>
        </div>
      </Section>

      {/* Research Focus */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Research Focus</span>
          </h2>

          <Card variant="bordered" className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-primary-blue">Proving Data Literacy Is Democratizable</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">AI Translates Technical Patterns to Business Insights</h4>
                  <p className="text-gray-300">Complex statistical analysis becomes clear strategic recommendations</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">SMBs Make Enterprise-Quality Decisions</h4>
                  <p className="text-gray-300">Same insights, same confidence, same competitive advantage</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">No Data Scientist Salary Required</h4>
                  <p className="text-gray-300">AI provides the analysis. You make the strategic calls.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Authentic Competitive Advantage from Existing Data</h4>
                  <p className="text-gray-300">Leverage what you already have—just like enterprises do</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-secondary-purple-light">Beta Testing Plan</h3>
              <p className="text-gray-300">
                Partner with diverse businesses across industries to validate our approach. Document what works, what doesn&apos;t, and why—completely transparently.
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-accent-pink">White-Label Goal</h3>
              <p className="text-gray-300">
                Platform that gives any SMB enterprise analytics capability. Democratize data intelligence the same way we&apos;re democratizing search.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Timeline and Next Steps */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Timeline</span> and Next Steps
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Current Phase: Research & Development</h3>
              <p className="text-gray-300">Building the foundation. Validating the approach. Preparing for beta testing.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">2025: Beta Testing</h3>
              <p className="text-gray-300">Partner with SMBs to prove data democratization works. Full transparency in results.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Future: White-Label Platform</h3>
              <p className="text-gray-300">Proven platform available for implementation. Enterprise analytics for everyone.</p>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-accent-pink/30 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Want to Be Notified?</h3>
            <p className="text-gray-300 mb-6">
              We&apos;re building this systematically. When beta opens, first 100 partners across ALL Continuum projects get access to Data Democracy too.
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
              A future where every small business has the same data intelligence as Fortune 500s. Where decisions are made with enterprise-quality insights, regardless of budget.
            </p>

            <p className="text-2xl font-bold text-accent-pink mb-4">
              Where the playing field is actually level.
            </p>

            <p className="text-lg text-gray-400">
              Not because data science became cheaper. Because AI made it democratizable.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
