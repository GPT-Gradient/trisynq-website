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

      {/* A CTO's Rebellion Section */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A CTO&apos;s <span className="text-gradient">Rebellion</span>
            </h2>
            <p className="text-xl text-gray-300 italic">
              The Case for Honest Systems
            </p>
            <p className="text-sm text-gray-400 mt-2">
              By Shawn Sloan, Founder & CTO, ClearForge Technologies
            </p>
          </div>

          <div className="space-y-8">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">The Breakaway</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  For 20 years, I architected within the machine — enterprise systems with limitless scale and even less soul. The brief was always the same: automate, optimize, control. But somewhere along the way, I realized something dangerous — we&apos;d stopped <strong className="text-white">building systems for people</strong> and started building systems that manage them.
                </p>
                <p>
                  I wasn&apos;t burned out. I was <em>walled in.</em> Every new product promised empowerment but delivered more dependency. Every innovation meeting began with &quot;What can&apos;t we show?&quot; instead of &quot;What should we share?&quot;
                </p>
                <p>
                  That&apos;s when I walked. Not because I had another job — but because I had a conviction: <strong className="text-accent-pink">the future belongs to the honest systems.</strong>
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">The Problem We Created (And the Lie We Believed)</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Big Tech has a transparency allergy. It confuses secrecy with security, and complexity with value. We built black boxes and called them progress. We wrapped simple ideas in acronyms and gatekept clarity for sport.
                </p>
                <p>
                  The lie? That opacity protects innovation. It doesn&apos;t. It isolates it. We&apos;ve created a world where the very people who fund the future — small businesses, nonprofits, educators, builders — are told they &quot;don&apos;t get it.&quot;
                </p>
                <p className="text-accent-pink font-semibold">
                  We made technology harder to understand because it was easier to sell that way.
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">What I Saw From the Inside</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Every launch cycle, I watched teams try to speak truth to strategy — only to be met with &quot;we&apos;ll abstract that later.&quot; We shipped metrics instead of meaning. We gamified productivity while eroding purpose. Organizations optimized for dashboards, not decisions.
                </p>
                <p>
                  I realized the next great leap in technology wouldn&apos;t come from better AI — it would come from better <em>intent.</em> From re-engineering trust at the infrastructure level.
                </p>
                <p className="text-white font-semibold">
                  So I started over. From zero. With ClearForge.
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Building ClearForge: Where the System Serves the Story</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  ClearForge began as a rebellion disguised as a platform — a place to build what Big Tech forgot: <strong className="text-white">clarity, comprehension, and connection.</strong> We don&apos;t sell opacity; we sell understanding. Every part of our ecosystem is designed to be seen.
                </p>
                <p>
                  <strong className="text-primary-blue">The Foundry</strong>, our product platform, isn&apos;t a mystery model — it&apos;s a transparent ecosystem where data flows are traceable, automation is explainable, and every decision has receipts. From network orchestration to business intelligence, visibility is built into the architecture.
                </p>
                <p>
                  <strong className="text-secondary-purple-light">Foundry Business: OS</strong>, our cognitive operating system, doesn&apos;t replace human thought — it reflects it. It learns <em>with</em> you, not over you. Built for people managing multiple projects simultaneously, it preserves context instead of demanding you abandon your way of thinking.
                </p>
                <p className="text-accent-pink font-semibold italic">
                  Because intelligence without understanding isn&apos;t innovation — it&apos;s surveillance in slow motion.
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">The Crisis of Translation</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Technology doesn&apos;t fail because it can&apos;t do enough. It fails because we don&apos;t explain what it already can. Architects think in systems; humans think in stories. Somewhere in between, trust dies.
                </p>
                <p className="text-white font-semibold">
                  Translation is the new currency of progress.
                </p>
                <p>
                  That&apos;s why at ClearForge, our north star isn&apos;t scalability — it&apos;s <em>comprehensibility.</em> We design systems that don&apos;t just run — they <em>report back.</em> Every AI decision in The Foundry explains its reasoning, every automation chain tells you what triggered it, and every integration is human-readable.
                </p>
                <p className="text-accent-pink font-semibold">
                  Transparency beats paranoia. Every. Single. Time.
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">The Honest System Philosophy</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  An honest system doesn&apos;t mean open source everything. It means:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Users can see how decisions are made</li>
                  <li>• Stakeholders can verify outcomes</li>
                  <li>• Errors are traceable, fixable, and owned</li>
                  <li>• The system learns from accountability, not avoidance</li>
                </ul>
                <p>
                  This is the foundation of <strong className="text-primary-blue">ClearForge Foundry</strong> — infrastructure built for precision <em>and proof.</em>
                </p>
                <p className="text-accent-pink font-semibold italic">
                  When the system itself becomes self-evident, it becomes self-correcting. That&apos;s the next evolution of AI — not artificial intelligence, but <em>accountable intelligence.</em>
                </p>
              </div>
            </Card>

            <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">The Rebellion Isn&apos;t Against Technology</h3>
              <div className="space-y-4 text-gray-200 text-center">
                <p className="text-xl">
                  It&apos;s against pretending.
                </p>
                <p>
                  This isn&apos;t anti-tech. It&apos;s anti-theater. We&apos;re not rejecting progress — we&apos;re rejecting performance. The world doesn&apos;t need another platform that promises simplicity while deploying complexity as a business model.
                </p>
                <p className="text-accent-pink font-bold text-lg">
                  At ClearForge, we call it <strong>The Honest Advantage</strong> — systems that compound value by compounding trust.
                </p>
                <p className="text-white font-semibold">
                  Transparency scales. Sunlight compounds. And honesty — finally — becomes a competitive edge.
                </p>
              </div>
            </Card>

            <Card variant="bordered" className="bg-background-dark border-primary-blue/30">
              <div className="text-center">
                <p className="text-2xl font-bold mb-4 text-white">
                  The Pledge of the Honest Builder
                </p>
                <div className="space-y-3 text-gray-300 text-lg">
                  <p>
                    If you build with us, build in daylight.
                  </p>
                  <p>
                    If you partner with us, expect your assumptions to be challenged.
                  </p>
                  <p>
                    If you join us, remember: your logic is part of the product.
                  </p>
                  <p className="text-white font-semibold mt-6">
                    ClearForge isn&apos;t a company. It&apos;s a correction.
                  </p>
                  <p className="text-accent-pink italic">
                    Because the rebellion isn&apos;t about leaving Big Tech. It&apos;s about leaving behind the idea that innovation requires secrecy.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-primary-blue/20">
                  <p className="text-gray-400 italic">
                    — Shawn Sloan
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Founder & CTO, ClearForge Technologies
                  </p>
                  <p className="text-primary-blue font-semibold mt-2">
                    &quot;Build visibly. Translate relentlessly. Trust by design.&quot;
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Real-World Impact */}
      <Section background="dark">
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
            <Button href="/foundry" variant="outline" size="lg">
              See How ClearForge Foundry Works
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
