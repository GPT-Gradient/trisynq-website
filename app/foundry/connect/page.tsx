import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Foundry Connect: Enterprise AI Without Enterprise Costs',
  description: 'API access to our Intelligence Gateway. Get intelligent model routing, cost optimization, and enterprise infrastructure—without managing any of it yourself.',
  canonical: '/foundry/connect',
});

export default function FoundryConnectPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Foundry Connect: Enterprise AI Without Enterprise Costs
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            API access to our Intelligence Gateway. Get intelligent model routing, cost optimization,
            and enterprise infrastructure—without managing any of it yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=connect-demo" size="lg">
              Schedule Demo
            </Button>
            <Button href="/contact?type=connect-signup" variant="outline" size="lg">
              Get API Key (Free)
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 1: The Problem with Direct API Usage */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Why Direct LLM APIs Cost More Than They Should
          </h2>
          <p className="text-2xl font-bold text-accent-pink mb-8 text-center">
            MOST DEVELOPERS USE AI WRONG. NOT TECHNICALLY—ECONOMICALLY.
          </p>

          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <Card variant="elevated" className="mb-8 bg-gradient-to-r from-accent-pink/10 to-primary-blue/10 border-2 border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-4">The Pattern:</h3>
              <p className="text-gray-300 mb-4">
                You need AI capability. You sign up for OpenAI or Anthropic. You integrate
                their API. You start making calls. Your bill arrives. It&apos;s 3x what you expected.
              </p>
              <p className="text-xl font-bold text-white">What Went Wrong?</p>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card variant="elevated" className="border-2 border-primary-blue/30">
                <h4 className="text-xl font-bold mb-3 text-primary-blue">Ignorant Routing</h4>
                <p className="text-gray-300 mb-4">
                  You&apos;re using GPT-4 for EVERY request because it&apos;s the &quot;best model.&quot; But 80%
                  of your requests don&apos;t need GPT-4. A simple query that could run on GPT-3.5
                  for $0.0005 is costing you $0.03 on GPT-4. That&apos;s 60x more expensive for
                  zero additional value.
                </p>
                <p className="text-sm font-bold text-accent-pink">You&apos;re paying for capability you don&apos;t need.</p>
              </Card>

              <Card variant="elevated" className="border-2 border-secondary-purple/30">
                <h4 className="text-xl font-bold mb-3 text-secondary-purple-light">No Caching Strategy</h4>
                <p className="text-gray-300 mb-4">
                  Same question asked 100 times? You&apos;re making 100 API calls and paying 100
                  times. No cache, no intelligence, just waste.
                </p>
                <p className="text-sm font-bold text-accent-pink">You&apos;re paying for repetition.</p>
              </Card>

              <Card variant="elevated" className="border-2 border-accent-pink/30">
                <h4 className="text-xl font-bold mb-3 text-accent-pink">Single Provider Lock-In</h4>
                <p className="text-gray-300 mb-4">
                  OpenAI has an outage? Your app is down. Claude releases a better model for
                  your use case? Can&apos;t use it without refactoring. You&apos;re locked to one vendor&apos;s
                  availability, pricing, and roadmap.
                </p>
                <p className="text-sm font-bold text-accent-pink">You&apos;re paying for inflexibility.</p>
              </Card>

              <Card variant="elevated" className="border-2 border-primary-blue/30">
                <h4 className="text-xl font-bold mb-3 text-primary-blue">No Cost Guardrails</h4>
                <p className="text-gray-300 mb-4">
                  User makes 1000 requests because your app has no rate limiting? Your bill
                  explodes. No budget caps, no warnings, no controls.
                </p>
                <p className="text-sm font-bold text-accent-pink">You&apos;re paying for vulnerability.</p>
              </Card>
            </div>

            <Card variant="elevated" className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 border-2 border-primary-blue/50">
              <p className="text-xl font-bold text-white mb-4">The Result:</p>
              <p className="text-lg text-gray-300 mb-6">
                Your AI costs are 2-5x higher than necessary. You&apos;re subsidizing poor
                architecture with budget. And you&apos;re stuck—because switching providers or
                optimizing routing requires rebuilding your integration.
              </p>
              <p className="text-2xl font-bold text-accent-pink text-center">
                FOUNDRY CONNECT SOLVES ALL OF THIS.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Section 2: What Is Foundry Connect? */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Intelligent API Layer Between You and LLM Providers
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-12 text-center">
            FOUNDRY CONNECT IS API ACCESS TO OUR INTELLIGENCE GATEWAY.
          </p>

          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">
              Instead of calling OpenAI or Anthropic directly, you call our Gateway. We
              analyze your request, route to the optimal model, handle caching, manage
              fallbacks, and return results. You get one API. We handle the complexity.
            </p>

            <h3 className="text-3xl font-bold mb-6 text-center">How It Works:</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card variant="elevated" className="border-2 border-primary-blue/30">
                <h4 className="text-xl font-bold mb-4 text-primary-blue">1. You Make One API Call</h4>
                <pre className="bg-background-dark p-4 rounded text-sm overflow-x-auto">
{`POST https://api.clearforge.com/v1/completion
{
  "prompt": "Explain quantum computing...",
  "max_tokens": 500,
  "preference": "cost-optimized"
}`}
                </pre>
              </Card>

              <Card variant="elevated" className="border-2 border-secondary-purple/30">
                <h4 className="text-xl font-bold mb-4 text-secondary-purple-light">2. Intelligence Gateway Analyzes</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Request complexity (simple = lower tier)</li>
                  <li>• Cache status (seen this before?)</li>
                  <li>• User preference (cost vs quality vs speed)</li>
                  <li>• Model availability (provider healthy?)</li>
                  <li>• Budget constraints (any caps set?)</li>
                </ul>
              </Card>

              <Card variant="elevated" className="border-2 border-accent-pink/30">
                <h4 className="text-xl font-bold mb-4 text-accent-pink">3. Gateway Routes Intelligently</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Cached response? → Return instantly ($0)</li>
                  <li>• Simple + cost-optimized? → GPT-3.5 ($0.0005)</li>
                  <li>• Complex reasoning? → Claude Sonnet ($0.003)</li>
                  <li>• Maximum quality? → Claude Opus ($0.015)</li>
                  <li>• Primary down? → Fallback automatically</li>
                </ul>
              </Card>

              <Card variant="elevated" className="border-2 border-primary-blue/30">
                <h4 className="text-xl font-bold mb-4 text-primary-blue">4. You Get Response</h4>
                <pre className="bg-background-dark p-4 rounded text-sm overflow-x-auto">
{`{
  "completion": "Quantum computers...",
  "model_used": "gpt-3.5-turbo",
  "cost": 0.0005,
  "cached": false,
  "latency_ms": 1200
}`}
                </pre>
              </Card>
            </div>

            <Card variant="elevated" className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10">
              <p className="text-xl font-bold text-white mb-6">
                You don&apos;t manage models. You don&apos;t handle fallbacks. You don&apos;t optimize routing. We do.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-primary-blue mb-2">Single Integration</h5>
                  <p className="text-sm text-gray-300">
                    One API endpoint. Works forever. We add new models, you get access automatically. No refactoring.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-secondary-purple-light mb-2">Intelligent Routing</h5>
                  <p className="text-sm text-gray-300">
                    We pick the right model for each request. Average cost savings: 40-60% vs direct API usage.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-accent-pink mb-2">Built-In Caching</h5>
                  <p className="text-sm text-gray-300">
                    Repeated requests served instantly from cache. Zero API cost. Sub-100ms latency.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-primary-blue mb-2">Automatic Fallbacks</h5>
                  <p className="text-sm text-gray-300">
                    Primary model down? We route to alternatives seamlessly. You never see the outage.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-secondary-purple-light mb-2">Cost Controls</h5>
                  <p className="text-sm text-gray-300">
                    Set budget caps per user, per day, per request type. Hard stop at 100%. No surprise bills.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-accent-pink mb-2">Multi-Provider Access</h5>
                  <p className="text-sm text-gray-300">
                    OpenAI, Anthropic, Google Gemini, Mistral, and more. One API, many models.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Section 3: Cost Optimization Deep Dive */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            How We Save You 40-60% on AI Costs
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-12 text-center">
            THE COST DIFFERENCE IS ARCHITECTURAL, NOT MAGICAL.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Direct API Usage (Wasteful)</h3>
              <div className="space-y-2 text-gray-300 mb-4">
                <p>• Every request → GPT-4 ($0.03 per 1K tokens)</p>
                <p>• Monthly requests: 100,000</p>
                <p className="text-xl font-bold text-white">Monthly cost: $3,000</p>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Foundry Connect (Optimized)</h3>
              <div className="space-y-2 text-gray-300 text-sm mb-4">
                <p>• 80% requests → GPT-3.5-turbo ($0.0005)</p>
                <p>• 15% requests → Claude Sonnet ($0.003)</p>
                <p>• 5% requests → GPT-4 ($0.03)</p>
                <p className="text-xl font-bold text-white mt-2">Monthly cost: $1,200</p>
                <p className="text-lg font-bold text-primary-blue">(60% savings)</p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <h4 className="text-xl font-bold mb-4 text-secondary-purple-light">Aggressive Caching</h4>
              <p className="text-gray-300 mb-3">FAQ asked 500 times/day:</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Without caching:</span>
                  <span className="text-white">$30/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">With caching:</span>
                  <span className="text-white">$0.06/month</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-accent-pink">Savings:</span>
                  <span className="text-accent-pink">99.8%</span>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <h4 className="text-xl font-bold mb-4 text-primary-blue">Batch Processing</h4>
              <p className="text-gray-300 mb-3">1,000 small requests:</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Without batching:</span>
                  <span className="text-white">$50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">With batching:</span>
                  <span className="text-white">$25</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-accent-pink">Savings:</span>
                  <span className="text-accent-pink">50%</span>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-r from-accent-pink/10 to-primary-blue/10 border-2 border-accent-pink/50">
            <h3 className="text-2xl font-bold mb-6 text-center">Real-World Cost Comparison</h3>
            <p className="text-lg text-gray-300 mb-6 text-center">
              Scenario: Medium-sized app with 1M requests/month
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="border-l-4 border-l-gray-600 pl-4">
                <h4 className="font-bold mb-3 text-gray-400">Direct OpenAI API (No optimization)</h4>
                <p className="text-gray-300 mb-2">1M requests × $0.03 average</p>
                <p className="text-3xl font-bold text-white">$30,000/month</p>
                <p className="text-sm text-gray-400 mt-2">No caching, no routing, no optimization</p>
              </div>

              <div className="border-l-4 border-l-primary-blue pl-4">
                <h4 className="font-bold mb-3 text-primary-blue">Foundry Connect (Full optimization)</h4>
                <div className="text-sm text-gray-300 space-y-1 mb-2">
                  <p>• 40% cached (400K × $0) = $0</p>
                  <p>• 40% GPT-3.5 (400K × $0.0005) = $200</p>
                  <p>• 15% Claude (150K × $0.003) = $450</p>
                  <p>• 5% GPT-4 (50K × $0.03) = $1,500</p>
                </div>
                <p className="text-3xl font-bold text-primary-blue">$2,150/month</p>
                <p className="text-xl font-bold text-accent-pink mt-2">(93% savings)</p>
              </div>
            </div>

            <div className="bg-background-dark p-6 rounded-lg">
              <p className="text-lg font-bold text-white mb-3 text-center">PLUS:</p>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300 text-sm">
                <p>✓ Better reliability (automatic fallbacks)</p>
                <p>✓ Faster responses (caching + batching)</p>
                <p>✓ Multi-provider flexibility</p>
                <p>✓ Cost controls and budgeting</p>
              </div>
              <p className="text-lg font-bold text-accent-pink mt-6 text-center">
                This isn&apos;t theoretical. These are actual savings we deliver.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Section 4: Use Cases */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What Customers Build with Foundry Connect
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Customer Support Automation</h3>
              <p className="text-sm text-gray-400 mb-4">Mid-sized SaaS (5,000 tickets/month)</p>
              <div className="space-y-3 text-sm text-gray-300 mb-4">
                <p><strong>Challenge:</strong> Repetitive tickets, slow agent response times</p>
                <p><strong>Solution:</strong> Classification + caching + draft generation</p>
              </div>
              <div className="bg-background-dark p-4 rounded space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Cached responses:</span>
                  <span className="text-primary-blue font-bold">70%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Agent productivity:</span>
                  <span className="text-primary-blue font-bold">+40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly cost:</span>
                  <span className="text-primary-blue font-bold">$300 (vs $1,500)</span>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Content Generation Platform</h3>
              <p className="text-sm text-gray-400 mb-4">Marketing agency (100+ clients)</p>
              <div className="space-y-3 text-sm text-gray-300 mb-4">
                <p><strong>Challenge:</strong> High volume (10K+ generations/month), varied quality needs</p>
                <p><strong>Solution:</strong> Intelligent model routing based on content type</p>
              </div>
              <div className="bg-background-dark p-4 rounded space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost per generation:</span>
                  <span className="text-secondary-purple-light font-bold">$0.002 avg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">vs Direct API:</span>
                  <span className="text-gray-400 line-through">$0.03</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost savings:</span>
                  <span className="text-accent-pink font-bold">93%</span>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Business Intelligence (ClearForge)</h3>
              <p className="text-sm text-gray-400 mb-4">Our own internal operations</p>
              <div className="space-y-3 text-sm text-gray-300 mb-4">
                <p><strong>Challenge:</strong> 1000+ intelligence items/day across multiple projects</p>
                <p><strong>Solution:</strong> Internal models + external routing + caching</p>
              </div>
              <div className="bg-background-dark p-4 rounded space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Daily processing:</span>
                  <span className="text-accent-pink font-bold">1000+ items</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Daily cost:</span>
                  <span className="text-accent-pink font-bold">&lt;$5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cached/internal:</span>
                  <span className="text-accent-pink font-bold">60%</span>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Educational Platform</h3>
              <p className="text-sm text-gray-400 mb-4">Online learning (50K students)</p>
              <div className="space-y-3 text-sm text-gray-300 mb-4">
                <p><strong>Challenge:</strong> 24/7 student support on thin margins</p>
                <p><strong>Solution:</strong> FAQ caching + intelligent routing + budget caps</p>
              </div>
              <div className="bg-background-dark p-4 rounded space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Cache hit rate:</span>
                  <span className="text-primary-blue font-bold">80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost per query:</span>
                  <span className="text-primary-blue font-bold">$0.0008</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Student support:</span>
                  <span className="text-primary-blue font-bold">24/7 Automated</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Section 5: Security & Compliance */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Enterprise-Grade Security Built-In
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-12 text-center">
            YOUR DATA. YOUR CONTROL. OUR PROTECTION.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">What We Store</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• API request metadata</li>
                <li>• Cached responses (24h TTL)</li>
                <li>• Usage metrics</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-xl font-bold mb-4 text-accent-pink">What We DON&apos;T Store</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Raw prompts (after cache)</li>
                <li>• Response data (after delivery)</li>
                <li>• User PII (unless in prompt)</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-xl font-bold mb-4 text-secondary-purple-light">You Control</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Cache duration (0-7 days)</li>
                <li>• Data residency (US, EU)</li>
                <li>• Retention policies</li>
              </ul>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Security Measures</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ TLS 1.3 for all connections</li>
                <li>✓ Bearer token authentication</li>
                <li>✓ Scope-based permissions</li>
                <li>✓ Google Cloud Platform (SOC 2 Type II)</li>
                <li>✓ Encryption at rest</li>
                <li>✓ DDoS protection built-in</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-secondary-purple-light">Compliance</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-white mb-2">Current:</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>✓ SOC 2 Type II (via GCP)</li>
                    <li>✓ GDPR compliant</li>
                    <li>✓ CCPA compliant</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Coming Soon:</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• HIPAA compliance</li>
                    <li>• ISO 27001</li>
                    <li>• PCI DSS</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 border-2 border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Commitments</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <p>✓ Never train models on your data</p>
              <p>✓ Never share data with third parties</p>
              <p>✓ Never sell usage patterns</p>
              <p>✓ Delete data per your policy</p>
            </div>
            <p className="text-xl font-bold text-accent-pink mt-6 text-center">
              If you trust us with intelligence, we protect it like our own.
            </p>
          </Card>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Transparent, Usage-Based Pricing
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-12 text-center">
            PAY FOR WHAT YOU USE. NO SURPRISES.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card variant="elevated" className="border-2 border-gray-600">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p className="text-sm text-gray-400">For testing</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-4xl font-bold">100</p>
                <p className="text-gray-400">requests/day</p>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li>• All models available</li>
                <li>• Basic caching</li>
                <li>• Community support</li>
              </ul>
              <Button href="/contact?type=connect-signup" variant="outline" className="w-full">
                Get Started
              </Button>
            </Card>

            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2 text-primary-blue">Starter</h3>
                <p className="text-sm text-gray-400">Small apps</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-primary-blue">$99</p>
                <p className="text-gray-400">per month</p>
                <p className="text-sm text-gray-500">10K requests included</p>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li>• $0.003/request after</li>
                <li>• Standard caching</li>
                <li>• Email support</li>
              </ul>
              <Button href="/contact?type=connect-signup" className="w-full">
                Start Trial
              </Button>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2 text-secondary-purple-light">Professional</h3>
                <p className="text-sm text-gray-400">Growing products</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-secondary-purple-light">$499</p>
                <p className="text-gray-400">per month</p>
                <p className="text-sm text-gray-500">100K requests included</p>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li>• $0.002/request after</li>
                <li>• Advanced caching</li>
                <li>• Priority support</li>
              </ul>
              <Button href="/contact?type=connect-signup" className="w-full">
                Start Trial
              </Button>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2 text-accent-pink">Enterprise</h3>
                <p className="text-sm text-gray-400">High-volume</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-accent-pink">Custom</p>
                <p className="text-gray-400">pricing</p>
                <p className="text-sm text-gray-500">1M+ requests</p>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li>• $0.001/request or lower</li>
                <li>• Dedicated capacity</li>
                <li>• White-glove support</li>
              </ul>
              <Button href="/contact?type=connect-demo" variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10">
            <h3 className="text-2xl font-bold mb-4 text-center">What&apos;s Included in All Plans</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-300">
              <p>✅ Intelligent model routing</p>
              <p>✅ Cost optimization (40-60% savings)</p>
              <p>✅ Automatic fallbacks</p>
              <p>✅ Multi-provider access</p>
              <p>✅ WebSocket support</p>
              <p>✅ API documentation</p>
              <p>✅ Usage dashboard</p>
              <p>✅ Budget controls</p>
              <p>✅ Security features</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your AI Costs?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Get started with our free tier. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=connect-signup" size="lg">
              Get API Key (Free)
            </Button>
            <Button href="/contact?type=connect-demo" variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
