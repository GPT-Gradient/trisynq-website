import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Search, TrendingUp, Target, Zap, Database, BarChart, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'ASO — Adaptive Search Optimization',
  description: 'The new way to conduct business search. Intelligence that compounds, costs that decrease, transparency at every step. Multi-modality search optimization (SEO, GEO, VSO) powered by Xynergy CORE.',
  canonical: '/aso',
});

export default function ASOPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-accent-pink/20 text-accent-pink text-sm font-semibold px-4 py-2 rounded-full">
              Adaptive Search Optimization
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The New Way to Conduct <span className="text-gradient">Business Search</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Intelligence that compounds. Costs that decrease. Transparency at every step.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Multi-modality search optimization (SEO, GEO, VSO) powered by Xynergy CORE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#problem" size="lg">
              See the Problem
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </Section>

      {/* The Problem */}
      <Section background="dark" id="problem">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            The <span className="text-gradient">Problem</span>
          </h2>

          <Card variant="elevated" className="border-2 border-accent-pink/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                Traditional search optimization is broken. You pay the same vendors every month for the same data. You get recommendations with zero transparency. You can&apos;t see why decisions were made. And your costs never decrease—they only increase.
              </p>

              <p className="text-lg">
                <strong className="text-white">Worse</strong>: The tools don&apos;t learn from your specific business. They treat every client the same. What works for a SaaS company gets recommended to a real estate agent. Generic strategies. Generic results.
              </p>

              <p className="text-lg">
                <strong className="text-primary-blue">Search isn&apos;t just Google anymore.</strong> Your customers find you through traditional search (SEO), local search (GEO), and video search (VSO). But most tools only handle one modality. You need three different platforms. Three bills. Three dashboards. Zero integration.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-accent-pink" />
                <h3 className="text-lg font-bold text-accent-pink">Opacity</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Black-box recommendations</li>
                <li>• No reasoning shown</li>
                <li>• Can&apos;t audit decisions</li>
                <li>• Zero provenance tracking</li>
              </ul>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-accent-pink" />
                <h3 className="text-lg font-bold text-accent-pink">Waste</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Pay for same data repeatedly</li>
                <li>• No intelligence accumulation</li>
                <li>• Costs never decrease</li>
                <li>• Start from zero each time</li>
              </ul>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-accent-pink" />
                <h3 className="text-lg font-bold text-accent-pink">Fragmentation</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Separate tools for SEO/GEO/VSO</li>
                <li>• Multiple dashboards</li>
                <li>• No unified strategy</li>
                <li>• Data silos everywhere</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="medium" id="solution">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our <span className="text-gradient">Solution</span>
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                <strong className="text-white">Adaptive Search Optimization (ASO)</strong> is a multi-tenant platform that treats search optimization as an intelligence problem, not a data problem.
              </p>

              <p className="text-lg">
                Every API call becomes a reusable asset. Every verification gets cached. Every pattern discovered gets shared (with privacy controls). Your intelligence <strong className="text-primary-blue">compounds over time</strong>, and your costs <strong className="text-primary-blue">decrease</strong> as the system learns.
              </p>

              <p className="text-lg">
                Powered by <strong className="text-white">Xynergy CORE</strong>, ASO handles all three search modalities (SEO, GEO, VSO) in one unified platform. Complete transparency. Full explainability. Audit trails for every decision.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-primary-blue" />
                <h3 className="text-lg font-bold text-primary-blue">Transparent</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• See full reasoning for every recommendation</li>
                <li>• Track source data for all insights</li>
                <li>• Audit trails built-in</li>
                <li>• Explainable AI at every step</li>
              </ul>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-primary-blue" />
                <h3 className="text-lg font-bold text-primary-blue">Intelligent</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Intelligence compounds over time</li>
                <li>• Verified facts cached and reused</li>
                <li>• Cross-client patterns (privacy-safe)</li>
                <li>• Costs decrease as learning grows</li>
              </ul>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-primary-blue" />
                <h3 className="text-lg font-bold text-primary-blue">Unified</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• SEO, GEO, VSO in one platform</li>
                <li>• Single dashboard, unified data</li>
                <li>• Cross-modality insights</li>
                <li>• One strategy, all channels</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="dark" id="how-it-works">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            How It <span className="text-gradient">Works</span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-12">
            ASO is built on <strong className="text-white">intelligent caching</strong>, <strong className="text-white">pattern recognition</strong>, and <strong className="text-white">multi-modality orchestration</strong>.
          </p>

          {/* High-Level Workflow */}
          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">High-Level Workflow</h3>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-blue font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-primary-blue">Opportunity Detection</h4>
                  <p className="text-gray-300 mb-3">
                    ASO continuously monitors trending keywords (Google Trends), calculates Keyword Golden Ratio (KGR) using Google Search Console data, identifies content gaps by analyzing competitors, and detects seasonal opportunities automatically.
                  </p>
                  <div className="bg-background-dark rounded-lg p-4">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Example:</strong> Detects &quot;best CRM software 2025&quot; is trending, has low competition (KGR 0.25), and your competitors haven&apos;t covered it yet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-pink font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-accent-pink">Intelligent Content Generation</h4>
                  <p className="text-gray-300 mb-3">
                    AI Routing Engine selects the right AI for the task (80% internal LLM, 20% frontier models). Content gets generated in your voice using your brand guidelines. Fact Checking Layer verifies claims (checks internal database first, then external APIs only if needed).
                  </p>
                  <div className="bg-background-dark rounded-lg p-4">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Cost Savings:</strong> First verification costs $0.004. Every reuse costs $0. By Month 6, 70% of facts are cached (70% cost reduction).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-secondary-purple/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary-purple-light font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-secondary-purple-light">Performance Prediction</h4>
                  <p className="text-gray-300 mb-3">
                    Before publishing, ML models predict ranking probability, estimated traffic, conversion likelihood, and time-to-ranking based on 100s-1000s of similar articles in the system.
                  </p>
                  <div className="bg-background-dark rounded-lg p-4">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Intelligence:</strong> Month 1 accuracy: 50%. Month 6 accuracy: 70%. Month 12 accuracy: 85%. The system learns what works for your business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-blue font-bold text-xl">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-primary-blue">Multi-Modality Tracking</h4>
                  <p className="text-gray-300 mb-3">
                    Track performance across all three modalities: SEO (traditional search rankings and traffic), GEO (local pack positions and map visibility), VSO (video search rankings and video views). One dashboard. Unified insights.
                  </p>
                  <div className="bg-background-dark rounded-lg p-4">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Smart Tracking:</strong> Tier 1 content: Daily tracking. Tier 2: Weekly. Tier 3/4: Monthly via free Google Search Console API. Cost optimization built-in.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-pink font-bold text-xl">5</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-accent-pink">Continuous Intelligence Accumulation</h4>
                  <p className="text-gray-300 mb-3">
                    Every API response gets cached. Every verified fact gets stored. Every competitor insight gets shared (with privacy controls). Patterns discovered across clients benefit everyone.
                  </p>
                  <div className="bg-background-dark rounded-lg p-4">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Compounding Value:</strong> New client gets instant access to 1000s of verified facts, 100+ competitor profiles, and cross-industry patterns. Start ahead, not behind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Architecture Diagram */}
          <Card variant="elevated" className="border-2 border-secondary-purple/30">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">System Architecture</h3>
            <div className="bg-background-dark rounded-lg p-6 font-mono text-xs md:text-sm overflow-x-auto">
              <pre className="text-gray-300">
{`┌─────────────────────────────────────────────────────────┐
│                  CLIENT REQUEST                         │
│         (Opportunity, Content, Analytics)               │
└────────────────────┬────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│              ASO ENGINE (Orchestrator)                  │
│  • Hub/spoke content management                         │
│  • Opportunity detection (KGR, trending)                │
│  • Performance tracking (SEO/GEO/VSO)                   │
│  • SERP monitoring (tiered strategy)                    │
└─────┬──────────────┬──────────────┬──────────────┬──────┘
      │              │              │              │
      ↓              ↓              ↓              ↓
┌──────────┐  ┌─────────────┐ ┌────────────┐ ┌────────────┐
│AI Router │  │Fact Check   │ │Competitive │ │Performance │
│          │  │             │ │Intelligence│ │Prediction  │
│├Internal │  │├Internal DB │ │├ScraperAPI │ │├ML Models  │
│└Frontier │  │└Perplexity  │ │└Free APIs  │ │└BigQuery   │
└──────────┘  └─────────────┘ └────────────┘ └────────────┘
      │              │              │              │
      ↓              ↓              ↓              ↓
┌─────────────────────────────────────────────────────────┐
│        INTELLIGENCE LAYER (BigQuery + Storage)          │
│  • Verified facts database (reusable)                   │
│  • Competitor profiles (cross-tenant)                   │
│  • Performance patterns (industry-specific)             │
│  • Keyword cache (search volume, difficulty)            │
└─────────────────────────────────────────────────────────┘
      ↓
┌─────────────────────────────────────────────────────────┐
│      DATA COLLECTION (Cloud Scheduler - Automated)      │
│  FREE: GSC, Trends, GA4, Reddit, Twitter, Wikipedia     │
│  PAID: Perplexity, Serper, DataForSEO, ScraperAPI       │
└─────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Key Principle:</strong> Every external data source becomes internal intelligence. Collect once, use forever.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* The Hub & Spoke Model */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Hub &amp; Spoke <span className="text-gradient">Content Strategy</span>
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                ASO uses a proven content architecture: <strong className="text-white">Hub articles</strong> (10-20 pillar pages) supported by <strong className="text-white">Spoke articles</strong> (180-480 supporting content pieces).
              </p>

              <p className="text-lg">
                Hub pages target high-value, competitive keywords. Spokes target long-tail, low-competition opportunities (KGR-optimized). All spokes link back to hubs. The architecture creates topical authority and passes link equity strategically.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Hub Articles (10-20)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Purpose:</strong> Target high-value keywords with commercial intent</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Length:</strong> 3000-5000 words, comprehensive guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Links:</strong> Receive internal links from 10-30 spokes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Update:</strong> Refreshed quarterly based on performance</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Spoke Articles (180-480)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Purpose:</strong> Target long-tail keywords (KGR &lt; 0.25)</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Length:</strong> 1500-2500 words, focused and actionable</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Links:</strong> Link to relevant hub + 2-3 related spokes</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Strategy:</strong> Quick wins, rank fast, drive traffic</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Intelligence Accumulation */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Intelligence <span className="text-gradient">Accumulation</span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-12">
            The longer you use ASO, the smarter it gets—and the less you pay.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="elevated" className="border-l-4 border-accent-pink">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-accent-pink" />
                <h3 className="text-xl font-bold text-accent-pink">Month 1-3</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                <strong className="text-white">Building Phase:</strong> High external API usage. System is learning your business, verifying facts, analyzing competitors.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Fact cache: 0% → 40% hit rate</p>
                <p>• Keyword cache: 0% → 30% hit rate</p>
                <p>• Prediction accuracy: 50%</p>
                <p>• External API costs: High</p>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-primary-blue">
              <div className="flex items-center gap-3 mb-4">
                <BarChart className="w-6 h-6 text-primary-blue" />
                <h3 className="text-xl font-bold text-primary-blue">Month 4-6</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                <strong className="text-white">Maturing Phase:</strong> Intelligence patterns emerge. Cache hit rates increase. Costs start decreasing.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Fact cache: 60% hit rate</p>
                <p>• Keyword cache: 50% hit rate</p>
                <p>• Prediction accuracy: 70%</p>
                <p>• External API costs: 40% reduction</p>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-secondary-purple-light">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-secondary-purple-light" />
                <h3 className="text-xl font-bold text-secondary-purple-light">Month 7+</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                <strong className="text-white">Optimized Phase:</strong> System is highly intelligent. Most queries answered from cache. Predictions highly accurate.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Fact cache: 70-80% hit rate</p>
                <p>• Keyword cache: 70% hit rate</p>
                <p>• Prediction accuracy: 85%</p>
                <p>• External API costs: 70% reduction</p>
              </div>
            </Card>
          </div>

          <div className="mt-8 bg-primary/30 rounded-2xl p-6 border border-primary-blue/30 text-center">
            <p className="text-lg font-semibold text-primary-blue mb-2">
              This is the opposite of traditional SaaS.
            </p>
            <p className="text-gray-300">
              Most platforms charge the same price forever while delivering the same value. ASO delivers <strong className="text-white">increasing value</strong> at <strong className="text-white">decreasing cost</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Rethink Search</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            ASO is powered by Xynergy CORE and available through our Platform and Partnership solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/solutions/platform" size="lg">
              Explore Platform
            </Button>
            <Button href="/solutions/partnership" variant="outline" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
