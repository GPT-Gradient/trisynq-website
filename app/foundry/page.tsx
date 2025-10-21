import { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { CheckCircle, Cpu, FileText, Zap, BarChart, Activity } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'ClearForge Foundry — Contextual Orchestration & Reasoning Engine',
  description: 'The framework Fortune 500s use to generate billions—now accessible without the enterprise complexity tax. Researches, Plans, Executes, Proves.',
  canonical: '/foundry',
});

export default function XynergyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/logos/x-core-1-secondary.png"
              alt="ClearForge Foundry"
              width={350}
              height={250}
              className="max-w-xs"
              priority
            />
          </div>
          <div className="mb-4">
            <span className="inline-block bg-accent-pink/20 text-accent-pink text-sm font-semibold px-4 py-2 rounded-full">
              Contextual Orchestration &amp; Reasoning Engine
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ClearForge <span className="text-gradient">Foundry</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Researches, Plans, Executes, <span className="text-primary-blue font-semibold">Proves</span>.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Not a black box. An engine you can read, direct, and trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/foundry/origin-story" size="lg">
              Learn the Story
            </Button>
            <Button href="/solutions/partnership" variant="outline" size="lg">
              Build on ClearForge Foundry
            </Button>
          </div>
        </div>
      </Section>

      {/* The Backstory */}
      <Section background="medium" id="backstory">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            The <span className="text-gradient">Backstory</span>
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                After 20 years building enterprise systems for Fortune 100s, we saw the pattern.
              </p>

              <p className="text-lg leading-relaxed">
                The same architectures. The same data flows. The same AI patterns—just wrapped in different vendor packaging and priced for enterprise budgets.
              </p>

              <p className="text-lg leading-relaxed">
                <strong className="text-white">ClearForge Foundry</strong> is what happens when you strip away the vendor lock-in, remove the artificial complexity, and expose the actual patterns that make these systems work.
              </p>

              <p className="text-lg leading-relaxed">
                It&apos;s not a product. It&apos;s a <strong className="text-primary-blue">framework</strong>. A proven approach to contextual orchestration and reasoning that enterprises use to generate billions—now accessible to businesses that make up 43% of GDP.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">C — Contextual</h3>
              <p className="text-gray-300 text-sm">
                Understands your business context. Your data. Your operations. Your goals.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-accent-pink">O+R — Orchestration &amp; Reasoning</h3>
              <p className="text-gray-300 text-sm">
                Coordinates multiple engines. Reasons about next-best actions. Shows its work.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">E — Engine</h3>
              <p className="text-gray-300 text-sm">
                Not a tool. A framework. Composable, explainable, and fully auditable.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Your Voice, Your Brand, Your Expertise */}
      <Section background="dark" id="content_expertise">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Your Voice. Your Brand. <span className="text-gradient">Your Expertise</span>.
          </h2>

          <Card variant="elevated" className="border-2 border-accent-pink/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl md:text-2xl text-gray-200 text-center leading-relaxed">
                Here&apos;s the truth about content and AI: <strong className="text-white">The engine is only as good as what you feed it.</strong>
              </p>

              <p className="text-lg leading-relaxed">
                Xynergy CORE doesn&apos;t replace your expertise. It <strong className="text-primary-blue">amplifies</strong> it. It doesn&apos;t write in some generic &quot;AI voice.&quot; It learns <strong className="text-primary-blue">your voice</strong>, understands <strong className="text-primary-blue">your brand</strong>, and reasons with <strong className="text-primary-blue">your knowledge</strong>.
              </p>

              <p className="text-lg leading-relaxed">
                Without your domain expertise, your brand guidelines, your strategic context—CORE is just another automation tool. <strong className="text-white">With it</strong>, CORE becomes an extension of your team that thinks, writes, and operates the way you do.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">What CORE Needs From You</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink flex-shrink-0">•</span>
                  <span><strong className="text-white">Your Voice:</strong> Brand guidelines, tone, style, what sounds like you vs what doesn&apos;t</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink flex-shrink-0">•</span>
                  <span><strong className="text-white">Your Knowledge:</strong> Domain expertise, industry context, what matters to your customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink flex-shrink-0">•</span>
                  <span><strong className="text-white">Your Strategy:</strong> Business goals, competitive positioning, where you&apos;re going</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink flex-shrink-0">•</span>
                  <span><strong className="text-white">Your Data:</strong> Customer insights, performance metrics, what&apos;s actually working</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">What CORE Gives Back</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue flex-shrink-0">•</span>
                  <span><strong className="text-white">Content at Scale:</strong> Generate dozens of variants in your voice, not generic AI-speak</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue flex-shrink-0">•</span>
                  <span><strong className="text-white">Strategic Reasoning:</strong> Recommendations grounded in your data and your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue flex-shrink-0">•</span>
                  <span><strong className="text-white">Consistent Execution:</strong> Every piece follows your brand, every decision uses your logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue flex-shrink-0">•</span>
                  <span><strong className="text-white">Explainable Outputs:</strong> See exactly why CORE made each decision based on your inputs</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-white">The Content Truth</h3>
            <p className="text-lg text-gray-300 text-center mb-4">
              Generic AI tools produce generic content. CORE produces content that sounds like you, because it learns from you.
            </p>
            <p className="text-accent-pink text-center font-semibold">
              Your expertise is the secret sauce. CORE just helps you scale it.
            </p>
          </div>
        </div>
      </Section>

      {/* What the Engine Does (Plain English) */}
      <Section background="medium" id="plain_english">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What the Engine Does <span className="text-gradient">(Plain English)</span>
            </h2>
          </div>

          <Card variant="elevated">
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-accent-pink flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl">It studies your world: customers, operations, competitors, and content.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-accent-pink flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl">It proposes the next best moves — in your language — with reasons and sources.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-accent-pink flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl">It executes approved tasks in the background and reports back with receipts.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-accent-pink flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl">It learns from results and adjusts the plan — automatically, with your oversight.</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* The Xynergy Assistant — Your Background Operator */}
      <Section background="medium" id="assistant">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Xynergy Assistant — Your <span className="text-gradient">Background Operator</span>
            </h2>
          </div>

          <Card variant="elevated" className="mb-10">
            <div className="space-y-4 text-center">
              <p className="text-xl md:text-2xl text-gray-200">
                Give it a goal. Approve a playbook. The Assistant schedules, runs, and monitors tasks while you work.
              </p>
              <p className="text-xl md:text-2xl text-gray-200">
                Every action is logged: what ran, why it ran, what changed, and what&apos;s next.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Marketing Example */}
            <Card variant="elevated" className="border-l-4 border-accent-pink">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-6 h-6 text-accent-pink" />
                <h3 className="text-2xl font-bold text-accent-pink">Marketing</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase">Steps</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink">•</span>
                      <span>Researches topic clusters and drafts posts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink">•</span>
                      <span>Schedules content, watches early traction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-pink">•</span>
                      <span>Amplifies winners and pauses duds</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase">Proof</h4>
                  <p className="text-sm text-gray-300 italic">
                    Shows sources, drafts, timelines, and impact deltas
                  </p>
                </div>
              </div>
            </Card>

            {/* Operations Example */}
            <Card variant="elevated" className="border-l-4 border-primary-blue">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6 text-primary-blue" />
                <h3 className="text-2xl font-bold text-primary-blue">Operations</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase">Steps</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue">•</span>
                      <span>Monitors inbound tickets for patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue">•</span>
                      <span>Flags process gaps and drafts SOP updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-blue">•</span>
                      <span>Routes updates to the right owner</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase">Proof</h4>
                  <p className="text-sm text-gray-300 italic">
                    Before/after metrics with annotated diffs
                  </p>
                </div>
              </div>
            </Card>

            {/* Sales Example */}
            <Card variant="elevated" className="border-l-4 border-secondary-purple-light">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-secondary-purple-light" />
                <h3 className="text-2xl font-bold text-secondary-purple-light">Sales</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase">Steps</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light">•</span>
                      <span>Watches signals across CRM, site, and content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light">•</span>
                      <span>Surfaces hot accounts and reasons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-purple-light">•</span>
                      <span>Prepares tailored outreach kits</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase">Proof</h4>
                  <p className="text-sm text-gray-300 italic">
                    Opportunity cards with evidence and confidence
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Engines, In Terms People Actually Get */}
      <Section background="dark" id="engines_in_terms_people_get">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Engines, In Terms People <span className="text-gradient">Actually Get</span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Research Engine */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-accent-pink flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-accent-pink">Research Engine</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Does</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-accent-pink">•</span>
                          <span>Finds real answers in your data first, then the web</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Out</h4>
                      <p className="text-lg font-semibold text-white">Briefs you can trust</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Content Engine */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-primary-blue flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-primary-blue">Content Engine</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Does</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-blue">•</span>
                          <span>Drafts, variants, repurposing; quality scoring</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Out</h4>
                      <p className="text-lg font-semibold text-white">Ship-ready with rationale</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Campaign Engine */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <Activity className="w-8 h-8 text-secondary-purple-light flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Campaign Engine</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Does</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary-purple-light">•</span>
                          <span>Plans posts, emails, pages; boosts winners</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Out</h4>
                      <p className="text-lg font-semibold text-white">Compounding reach</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Automation Engine */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <Cpu className="w-8 h-8 text-accent-pink flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-accent-pink">Automation Engine</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Does</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-accent-pink">•</span>
                          <span>Runs approved workflows and syncs</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Out</h4>
                      <p className="text-lg font-semibold text-white">Time back, with receipts</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Insights Engine */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <BarChart className="w-8 h-8 text-primary-blue flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-primary-blue">Insights Engine</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Does</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-blue">•</span>
                          <span>Finds trends, anomalies, segments; explains why</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Out</h4>
                      <p className="text-lg font-semibold text-white">Decisions with context</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Governance Engine */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-secondary-purple-light flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Governance Engine</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Does</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary-purple-light">•</span>
                          <span>Tracks sources, steps, policies</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Out</h4>
                      <p className="text-lg font-semibold text-white">Audit-ready compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Learning Engine */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <Activity className="w-8 h-8 text-accent-pink flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-accent-pink">Learning Engine</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Does</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-accent-pink">•</span>
                          <span>Improves from outcomes, shares learnings</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Out</h4>
                      <p className="text-lg font-semibold text-white">Better every cycle</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Assistant Engine */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-primary-blue flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-primary-blue">Assistant Engine</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Does</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-blue">•</span>
                          <span>Schedules, executes, monitors</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Out</h4>
                      <p className="text-lg font-semibold text-white">Work done while you work</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* How We Use Your Data to Serve You Better */}
      <Section background="medium" id="data_use">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Use Your Data to <span className="text-gradient">Serve You Better</span>
            </h2>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg md:text-xl">
                Your data stays your data. We isolate it by default and log how it&apos;s used.
              </p>
              <p className="text-lg md:text-xl">
                We build learning on patterns, not identities — and we show the math.
              </p>
              <p className="text-lg md:text-xl">
                Opt-in lets you contribute anonymized insights to a shared brain — and benefit from it.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="bordered" className="border-accent-pink/50">
              <div className="text-center">
                <CheckCircle className="w-10 h-10 text-accent-pink mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Faster ramp with relevant playbooks</h3>
              </div>
            </Card>
            <Card variant="bordered" className="border-primary-blue/50">
              <div className="text-center">
                <CheckCircle className="w-10 h-10 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Better predictions tuned to your context</h3>
              </div>
            </Card>
            <Card variant="bordered" className="border-secondary-purple-light/50">
              <div className="text-center">
                <CheckCircle className="w-10 h-10 text-secondary-purple-light mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Audit-ready compliance posture</h3>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* How Opportunities Are Tracked */}
      <Section background="dark" id="opportunity_tracking">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How Opportunities Are <span className="text-gradient">Tracked</span>
            </h2>
          </div>

          <Card variant="elevated" className="mb-8">
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-start gap-4">
                <Activity className="w-7 h-7 text-accent-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Signals watched</h3>
                  <p className="text-lg">Content engagement, CRM changes, site behavior, support themes, pipeline variance</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FileText className="w-7 h-7 text-primary-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Opportunity Cards</h3>
                  <p className="text-lg">Summary, evidence, confidence, next-best-actions</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Zap className="w-7 h-7 text-secondary-purple-light flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Lifecycle</h3>
                  <p className="text-lg">Created → prioritized → acted → measured → learned</p>
                </div>
              </li>
            </ul>
          </Card>

          <div className="text-center">
            <Button href="#assistant" size="lg">
              See the Power
            </Button>
          </div>
        </div>
      </Section>

      {/* Proof is the Product */}
      <Section background="medium" id="transparency_loop">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proof is the <span className="text-gradient">Product</span>
            </h2>
          </div>

          <Card variant="elevated">
            <div className="space-y-6 text-center">
              <p className="text-xl md:text-2xl text-gray-200">
                Every recommendation and action includes an &apos;Explain this&apos; view: sources, steps, and assumptions.
              </p>
              <p className="text-xl md:text-2xl text-gray-200">
                No mystery knobs. No trust fall. Just systems you can read and direct.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Build on Xynergy CORE */}
      <Section background="gradient" id="build">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build on <span className="text-gradient">ClearForge Foundry</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The framework is accessible. The patterns are proven. Let&apos;s build together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/solutions/partnership" size="lg">
              Partner With Us
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Start a Conversation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
