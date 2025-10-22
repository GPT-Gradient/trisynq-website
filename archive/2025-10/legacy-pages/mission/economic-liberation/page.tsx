import { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Unlock, TrendingUp, Target, Zap, Users, DollarSign, Clock } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Economic Liberation: Giving the 43% Their Share',
  description: 'Data fluency creates equitable growth.',
});

export default function EconomicLiberationPage() {
  return (
    <>
      {/* The Systematic Lockout */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Economic Liberation: Giving the 43% Their <span className="text-gradient">Share</span>.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              SMBs drive 43% of U.S. GDP. They deserve enterprise-grade insight at their scale.
            </p>
            <p className="text-xl text-gray-300">
              Access without translation is theater. We deliver both.
            </p>
          </div>

          <Card variant="elevated" className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Lock className="w-12 h-12 text-accent-pink flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">The Mechanism</h2>
                <p className="text-gray-400">How artificial complexity creates economic barriers</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-background-dark rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-accent-pink">1</span>
                  <div>
                    <p className="font-bold text-white mb-2">Make tools complex enough to require specialists</p>
                    <p className="text-gray-400 text-sm">
                      Hide capabilities behind technical jargon. Create unnecessary complexity. Make implementation require expensive consultants.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-accent-pink">2</span>
                  <div>
                    <p className="font-bold text-white mb-2">Make implementation expensive enough for only large players</p>
                    <p className="text-gray-400 text-sm">
                      Price implementations at enterprise scale. Require long-term contracts. Bundle unnecessary features to inflate costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-accent-pink">3</span>
                  <div>
                    <p className="font-bold text-white mb-2">Make switching painful enough to lock in customers</p>
                    <p className="text-gray-400 text-sm">
                      Proprietary data formats. Vendor lock-in by design. Migration costs that prevent leaving. Dependency over partnership.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-accent-pink">4</span>
                  <div>
                    <p className="font-bold text-white mb-2">Call it &quot;enterprise-grade&quot; and charge accordingly</p>
                    <p className="text-gray-400 text-sm">
                      Use terminology that excludes SMBs. Create perception that complexity equals quality. Price based on confusion, not value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background-dark rounded-2xl p-8 border border-accent-pink/30">
              <h3 className="text-2xl font-bold text-accent-pink mb-4">The Result</h3>
              <p className="text-xl text-white">
                43% of economy excluded from competitive advantages
              </p>
            </div>

            <div className="bg-background-dark rounded-2xl p-8 border border-primary-blue/30">
              <h3 className="text-2xl font-bold text-primary-blue mb-4">The Truth</h3>
              <p className="text-xl text-white">
                Complexity is manufactured, not inherent
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What Enterprises Actually Have */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            What Enterprises <span className="text-gradient">Actually Have</span>
          </h2>

          <p className="text-xl text-center text-gray-400 mb-12">
            It&apos;s not magic. It&apos;s teams and capabilities you can&apos;t afford. Until now.
          </p>

          <Card variant="bordered" className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary-blue" />
              The Teams
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="font-bold text-primary-blue mb-2">Technology Specialists</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Implementing systems, integrating platforms, building custom solutions
                </p>
                <p className="text-xs text-gray-500">$100K-150K/year per specialist</p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="font-bold text-secondary-purple-light mb-2">Data Analysts</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Interpreting metrics, identifying patterns, forecasting trends
                </p>
                <p className="text-xs text-gray-500">$120K-200K/year per analyst</p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="font-bold text-accent-pink mb-2">AI Experts</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Amplifying every function, automating processes, scaling operations
                </p>
                <p className="text-xs text-gray-500">$150K-250K/year per expert</p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="font-bold text-primary-blue mb-2">Strategy Consultants</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Identifying opportunities, planning implementation, optimizing processes
                </p>
                <p className="text-xs text-gray-500">$150K-300K/year per consultant</p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="font-bold text-secondary-purple-light mb-2">Market Researchers</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Tracking trends, analyzing competition, identifying opportunities
                </p>
                <p className="text-xs text-gray-500">$80K-150K/year per researcher</p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <h4 className="font-bold text-accent-pink mb-2">Marketing Teams</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Content creation, multi-channel campaigns, brand management
                </p>
                <p className="text-xs text-gray-500">$70K-120K/year per specialist</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated">
              <DollarSign className="w-10 h-10 text-accent-pink mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">The Cost</h4>
              <p className="text-3xl font-bold text-gradient mb-2">$500K-2M+</p>
              <p className="text-gray-400 text-sm">Annually in team costs alone</p>
            </Card>

            <Card variant="elevated">
              <Target className="w-10 h-10 text-primary-blue mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">The Capabilities</h4>
              <p className="text-lg text-gray-300 mb-2">All working together</p>
              <p className="text-gray-400 text-sm">For competitive advantage</p>
            </Card>

            <Card variant="elevated">
              <Unlock className="w-10 h-10 text-secondary-purple-light mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">The SMB Reality</h4>
              <p className="text-lg text-gray-300 mb-2">You can&apos;t hire 7-10 people</p>
              <p className="text-gray-400 text-sm">Now you don&apos;t have to</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Liberation Path */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            The <span className="text-gradient">Liberation Path</span>
          </h2>

          <p className="text-xl text-center text-gray-400 mb-12">
            Enterprise capabilities without enterprise costs. Competing on capability, not budget.
          </p>

          <div className="space-y-8 mb-12">
            <Card variant="elevated">
              <div className="flex items-start gap-6">
                <div className="bg-primary-blue/20 rounded-full p-4 flex-shrink-0">
                  <Zap className="w-10 h-10 text-primary-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Technology Translation</h3>
                  <p className="text-gray-300 mb-4">
                    Enterprise capabilities explained in business terms
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-sm text-gray-400 mb-2"><strong className="text-white">What This Means:</strong></p>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• Understanding what technology actually does for you</li>
                      <li>• Implementing 80% of capability for 2% of cost</li>
                      <li>• Distinguishing necessary vs. manufactured complexity</li>
                      <li>• Making informed decisions without technical jargon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-purple-light/20 rounded-full p-4 flex-shrink-0">
                  <TrendingUp className="w-10 h-10 text-secondary-purple-light" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Data Democratization</h3>
                  <p className="text-gray-300 mb-4">
                    Your data working like enterprise analytics
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-sm text-gray-400 mb-2"><strong className="text-white">What This Means:</strong></p>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• AI analyzing all data sources simultaneously</li>
                      <li>• Pattern recognition across siloed systems</li>
                      <li>• Plain English insights you can act on</li>
                      <li>• Competitive intelligence from existing data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-6">
                <div className="bg-accent-pink/20 rounded-full p-4 flex-shrink-0">
                  <Target className="w-10 h-10 text-accent-pink" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">AI Amplification</h3>
                  <p className="text-gray-300 mb-4">
                    Your expertise reaching enterprise scale
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-sm text-gray-400 mb-2"><strong className="text-white">What This Means:</strong></p>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• AI handles marketing, research, analysis tasks</li>
                      <li>• Your authentic voice amplified, not replaced</li>
                      <li>• Enterprise-scale output with your expertise</li>
                      <li>• Competing with Fortune 500 capabilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-accent-pink/20 to-primary-blue/20 rounded-2xl p-8 border border-accent-pink/30">
              <h4 className="text-2xl font-bold text-white mb-4">The Result</h4>
              <p className="text-xl text-gray-200">
                Competing on capability, not budget
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-blue/20 to-secondary-purple-light/20 rounded-2xl p-8 border border-primary-blue/30">
              <Clock className="w-8 h-8 text-primary-blue mb-3" />
              <h4 className="text-2xl font-bold text-white mb-4">The Timeline</h4>
              <p className="text-xl text-gray-200">
                Transformation measured in weeks, not years
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Opportunity */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Your <span className="text-gradient">Economic Liberation</span> Starts Here
          </h2>

          <Card variant="bordered" className="mb-12">
            <div className="text-center mb-8">
              <Unlock className="w-16 h-16 text-accent-pink mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                What Liberation Looks Like
              </h3>
            </div>

            <div className="space-y-6">
              <div className="bg-background-dark rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🚀</span>
                  <h4 className="font-bold text-white">Week 1-2: Assessment & Strategy</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Understanding your current state, data sources, and opportunities. Creating roadmap for transformation.
                </p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⚡</span>
                  <h4 className="font-bold text-white">Week 3-6: Implementation</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Technology translation, data integration, AI amplification setup. Building your enterprise capability foundation.
                </p>
              </div>

              <div className="bg-background-dark rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📈</span>
                  <h4 className="font-bold text-white">Week 7+: Optimization & Scale</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Refining approaches, scaling capabilities, measuring results. Your business competing at enterprise level.
                </p>
              </div>
            </div>
          </Card>

          <div className="bg-gradient-to-r from-accent-pink/20 to-primary-blue/20 rounded-2xl p-8 border border-accent-pink/30 mb-8 text-center">
            <p className="text-2xl font-bold text-white mb-4">
              The Playing Field Gets Level
            </p>
            <p className="text-lg text-gray-300 mb-6">
              When SMBs have enterprise capabilities, competition becomes about expertise and execution. Not budget and access.
            </p>
            <p className="text-xl font-semibold text-accent-pink">
              That&apos;s economic liberation. That&apos;s the future we&apos;re building.
            </p>
          </div>

          <div className="text-center space-y-6">
            <Button href="/beta" size="lg">
              Start Your Liberation Journey
            </Button>

            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <Link href="/mission" className="text-primary-blue hover:text-primary-blue/80 font-semibold">
                ← Back to Manifesto
              </Link>
              <Link href="/mission/transparency" className="text-accent-pink hover:text-accent-pink/80 font-semibold">
                Read Our Transparency Commitment →
              </Link>
            </div>

            <div className="pt-8">
              <Link href="/solutions" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <span>Explore Our Solutions</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Reality Check */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Economic Liberation Isn&apos;t About Getting Rich Quick
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-accent-pink">It&apos;s NOT:</h3>
              <ul className="space-y-2 text-gray-300 text-left text-sm">
                <li>• Magic solutions with zero effort</li>
                <li>• Overnight transformation promises</li>
                <li>• Replacing your work with automation</li>
                <li>• Eliminating need for expertise</li>
                <li>• Get-rich-quick schemes</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">It IS:</h3>
              <ul className="space-y-2 text-gray-300 text-left text-sm">
                <li>• Access to tools you couldn&apos;t afford before</li>
                <li>• Competing on expertise vs. budget</li>
                <li>• Your work amplified to enterprise scale</li>
                <li>• Level playing field for genuine capability</li>
                <li>• Economic barriers systematically removed</li>
              </ul>
            </Card>
          </div>

          <div className="mt-12 bg-background-dark rounded-2xl p-8 border border-primary-blue/30">
            <p className="text-xl font-bold text-white mb-4">
              This is about removing artificial barriers that shouldn&apos;t exist.
            </p>
            <p className="text-lg text-gray-300">
              Your expertise deserves enterprise tools. Your business deserves competitive advantages. Your potential shouldn&apos;t be limited by manufactured complexity.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
