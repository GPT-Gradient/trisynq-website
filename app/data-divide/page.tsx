import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { TrendingDown, TrendingUp, AlertCircle, Zap } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'The Data Divide',
  description: 'Why most orgs drown in data and how we close the gap—practically.',
  canonical: '/data-divide',
});

export default function DataDividePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Data <span className="text-gradient">Divide</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Why most orgs drown in data and how we close the gap—practically.
          </p>
        </div>
      </Section>

      {/* The Problem */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                The Paradox
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                More data than ever. Less clarity than before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background-dark rounded-xl p-6 border border-red-500/30">
                <div className="flex items-start gap-3 mb-4">
                  <TrendingDown className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-white">What You Have</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Spreadsheets everywhere</li>
                  <li>• Dashboards no one understands</li>
                  <li>• Reports that take weeks</li>
                  <li>• Data silos across departments</li>
                  <li>• Metrics that don&apos;t drive decisions</li>
                  <li>• Tools that require specialists</li>
                </ul>
              </div>

              <div className="bg-background-dark rounded-xl p-6 border border-accent-pink/30">
                <div className="flex items-start gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-accent-pink flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-white">What You Need</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Answers to actual questions</li>
                  <li>• Insights that drive action</li>
                  <li>• Context that makes sense</li>
                  <li>• Patterns you can use</li>
                  <li>• Clarity that empowers decisions</li>
                  <li>• Understanding without a PhD</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Gap
            </p>
            <p className="text-xl text-gray-300">
              Between having data and being able to use it effectively
            </p>
          </div>
        </div>
      </Section>

      {/* Why This Happens */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Most Organizations <span className="text-gradient">Drown</span>
          </h2>

          <div className="space-y-6">
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">1. Enterprise Tools Built for Enterprise Teams</h3>
                  <p className="text-gray-300 mb-3">
                    The tools that work at scale were designed for teams of analysts. They assume you have:
                  </p>
                  <ul className="space-y-2 text-gray-400 ml-4">
                    <li>• Data engineers to clean and structure</li>
                    <li>• Analysts to interpret and visualize</li>
                    <li>• Business intelligence specialists to maintain dashboards</li>
                    <li>• Database administrators to optimize queries</li>
                  </ul>
                  <p className="text-accent-pink font-semibold mt-3">
                    Small teams don&apos;t have these roles. They need tools that include this expertise.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">2. Data Without Context is Noise</h3>
                  <p className="text-gray-300 mb-3">
                    Raw numbers don&apos;t tell stories. You need:
                  </p>
                  <ul className="space-y-2 text-gray-400 ml-4">
                    <li>• Baselines to compare against</li>
                    <li>• Trends to understand direction</li>
                    <li>• Benchmarks to measure success</li>
                    <li>• Context to know what&apos;s normal</li>
                    <li>• Explanation for why things changed</li>
                  </ul>
                  <p className="text-accent-pink font-semibold mt-3">
                    Most tools give you the numbers. None of them give you the understanding.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">3. The Translation Layer is Missing</h3>
                  <p className="text-gray-300 mb-3">
                    Between technical capability and business need sits a gap that requires:
                  </p>
                  <ul className="space-y-2 text-gray-400 ml-4">
                    <li>• Understanding what questions actually matter</li>
                    <li>• Knowing which data answers which questions</li>
                    <li>• Translating technical metrics to business impact</li>
                    <li>• Filtering signal from noise</li>
                    <li>• Presenting insights in actionable format</li>
                  </ul>
                  <p className="text-accent-pink font-semibold mt-3">
                    This translation requires both technical depth and business experience. Most tools have one but not both.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* How ClearForge Closes the Gap */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How ClearForge <span className="text-gradient">Closes the Gap</span>
          </h2>

          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Zap className="w-10 h-10 text-primary-blue flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Built-in Translation</h3>
                <p className="text-lg text-gray-300 mb-4">
                  We don&apos;t just give you data tools. We embed the expertise most teams lack.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3 text-primary-blue">Automatic Context</h4>
                <p className="text-gray-300 mb-3">
                  Every metric comes with:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Historical comparison</li>
                  <li>• Industry benchmarks</li>
                  <li>• Explanation of significance</li>
                  <li>• Recommended actions</li>
                </ul>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3 text-primary-blue">Natural Language Interface</h4>
                <p className="text-gray-300 mb-3">
                  Ask questions in plain English:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• &quot;Why did revenue drop last month?&quot;</li>
                  <li>• &quot;Which customers are at risk of churning?&quot;</li>
                  <li>• &quot;What&apos;s driving our costs up?&quot;</li>
                  <li>• &quot;Where should we focus next quarter?&quot;</li>
                </ul>
                <p className="text-accent-pink font-semibold mt-3">
                  Get answers, not dashboards to interpret.
                </p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3 text-primary-blue">Proactive Insights</h4>
                <p className="text-gray-300 mb-3">
                  Instead of requiring you to check dashboards:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• We surface anomalies automatically</li>
                  <li>• Alert you to trends before they become problems</li>
                  <li>• Highlight opportunities you might miss</li>
                  <li>• Connect patterns across data sources</li>
                </ul>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3 text-primary-blue">Transparent Reasoning</h4>
                <p className="text-gray-300 mb-3">
                  Every insight shows its work:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• What data was analyzed</li>
                  <li>• What patterns were found</li>
                  <li>• Why it matters</li>
                  <li>• What to do about it</li>
                </ul>
                <p className="text-accent-pink font-semibold mt-3">
                  Build understanding, not dependency.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="bordered" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-secondary-purple-light/30">
            <div className="text-center">
              <p className="text-2xl font-bold mb-4 text-white">
                The Difference
              </p>
              <p className="text-lg text-gray-300">
                We don&apos;t replace your analysts. We give you the capability enterprises pay teams of analysts to provide—with full transparency so you learn as you use it.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Real-World Impact */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The <span className="text-gradient">Real-World</span> Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-accent-pink">Before ClearForge</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Weeks to get answers</li>
                <li>• Decisions based on gut feel</li>
                <li>• Data sitting unused</li>
                <li>• Expensive consulting for basic insights</li>
                <li>• Critical patterns missed</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">After ClearForge</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Minutes to get answers</li>
                <li>• Decisions backed by data</li>
                <li>• Insights driving action</li>
                <li>• Self-service analysis</li>
                <li>• Proactive opportunity identification</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Close Your <span className="text-gradient">Data Divide</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Turn data from a burden into a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/solutions" size="lg">
              Explore Solutions
            </Button>
            <Button href="/xynergy" variant="outline" size="lg">
              See How Xynergy Works
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
