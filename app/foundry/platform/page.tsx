import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Foundry Platform: The Intelligence Engine Behind Everything We Build',
  description: '48+ microservices. Real-time orchestration. Cost-optimized AI routing. The backend infrastructure powering every ClearForge product.',
});

export default function FoundryPlatformPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Foundry Platform: The Intelligence Engine Behind Everything We Build
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            48+ microservices. Real-time orchestration. Cost-optimized AI routing. The backend
            infrastructure powering every ClearForge product—from free community tools to enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#architecture" size="lg">
              See Architecture
            </Button>
            <Button href="/continuum" variant="outline" size="lg">
              Watch It Work
            </Button>
          </div>
        </div>
      </Section>

      {/* Platform Stats */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <Card variant="elevated" className="text-center">
              <div className="text-4xl font-bold text-primary-blue mb-2">48+</div>
              <div className="text-gray-300">Microservices Operational</div>
            </Card>
            <Card variant="elevated" className="text-center">
              <div className="text-4xl font-bold text-secondary-purple-light mb-2">1.2s</div>
              <div className="text-gray-300">Average Request Processing</div>
            </Card>
            <Card variant="elevated" className="text-center">
              <div className="text-4xl font-bold text-accent-pink mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime (Last 90 Days)</div>
            </Card>
            <Card variant="elevated" className="text-center">
              <div className="text-4xl font-bold text-primary-blue mb-2">58%</div>
              <div className="text-gray-300">AI Cost Reduction</div>
            </Card>
            <Card variant="elevated" className="text-center">
              <div className="text-4xl font-bold text-secondary-purple-light mb-2">3.4</div>
              <div className="text-gray-300">Services Per Request</div>
            </Card>
            <Card variant="elevated" className="text-center">
              <div className="text-4xl font-bold text-accent-pink mb-2">40-60%</div>
              <div className="text-gray-300">Typical Cost Savings</div>
            </Card>
          </div>
        </div>
      </Section>

      {/* What Is Foundry Platform? */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The Competitive Advantage You Don&apos;t See
          </h2>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl font-bold text-primary-blue mb-6">
              FOUNDRY PLATFORM IS NOT A PRODUCT YOU BUY.
            </p>

            <p className="text-xl text-gray-300 mb-6">
              It&apos;s the infrastructure behind every product we build.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              Think of it this way:<br/>
              • AWS provides compute, storage, networking<br/>
              • Foundry Platform provides intelligence, orchestration, and optimization
            </p>

            <p className="text-lg text-gray-300 mb-8">
              Every ClearForge product runs on Foundry Platform. It&apos;s the layer between
              our products and raw infrastructure that makes everything smarter, faster,
              and cheaper to operate.
            </p>

            <h3 className="text-3xl font-bold mb-6">What Makes It Different</h3>

            <h4 className="text-2xl font-bold text-primary-blue mb-4">
              Intelligence Gateway - The Orchestration Brain
            </h4>
            <p className="text-lg text-gray-300 mb-4">
              Every request that hits any ClearForge product routes through the Intelligence
              Gateway. It analyzes the request, determines the optimal service path, and
              orchestrates the response across multiple microservices.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              You don&apos;t manually choose &quot;use GPT-4&quot; or &quot;use Claude.&quot; The Gateway analyzes
              your request complexity, cost implications, and performance requirements,
              then routes to the optimal AI model automatically.
            </p>
            <p className="text-lg font-bold text-accent-pink mb-8">
              Result: 40-60% lower AI costs compared to direct API usage, while
              maintaining or improving quality.
            </p>

            <h4 className="text-2xl font-bold text-secondary-purple-light mb-4">
              48+ Specialized Microservices
            </h4>
            <p className="text-lg text-gray-300 mb-4">
              Each service handles one specific capability:<br/>
              • AI routing and model selection<br/>
              • Content generation and optimization<br/>
              • ASO (Adaptive Search Optimization) analysis<br/>
              • Workflow automation and scheduling<br/>
              • Memory management and context persistence<br/>
              • Analytics processing and insights<br/>
              • External integration orchestration<br/>
              • And 42 more specialized functions...
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Services operate independently. If one fails, others keep running. No single
              point of failure.
            </p>

            <h4 className="text-2xl font-bold text-primary-blue mb-4">
              Event-Driven Architecture
            </h4>
            <p className="text-lg text-gray-300 mb-4">
              Services communicate asynchronously via Google Cloud Pub/Sub:<br/>
              • Real-time updates without polling<br/>
              • Parallel processing for speed<br/>
              • Event audit trails for compliance<br/>
              • Fault tolerance built-in
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Average request involves 3.4 services working in parallel. Total handling
              time: 1.2 seconds.
            </p>

            <h4 className="text-2xl font-bold text-secondary-purple-light mb-4">
              Cost Optimization at Every Layer
            </h4>
            <p className="text-lg text-gray-300 mb-4">
              Every request is intelligently routed to minimize cost while maintaining quality:<br/>
              • Simple queries → Cheaper models (GPT-3.5, Claude Haiku)<br/>
              • Complex analysis → Premium models (GPT-4, Claude Sonnet)<br/>
              • Cached responses → $0 (we remember previous answers)<br/>
              • Batch operations → Scheduled for off-peak pricing
            </p>
            <p className="text-lg font-bold text-accent-pink mb-8">
              Our Track Record: 58% reduction in AI costs compared to naive &quot;use the
              best model for everything&quot; approaches, measured across 10,000+ requests.
            </p>

            <div className="bg-background-medium p-8 rounded-lg border border-primary-blue/30 mt-12 mb-8">
              <h4 className="text-2xl font-bold mb-4">Why This Matters to You</h4>
              <p className="text-lg text-gray-300 mb-4">
                Whether you&apos;re using our free Forge tools or paid Foundry products, you benefit
                from enterprise-grade infrastructure without building or managing it yourself.
              </p>
              <p className="text-lg text-gray-300">
                You get:<br/>
                • Performance that scales from 1 to 10,000 users<br/>
                • Cost optimization that improves over time<br/>
                • Fault tolerance that keeps things running<br/>
                • Intelligence that gets smarter with usage<br/><br/>
                And you never think about the infrastructure. It just works.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* C-O-R-E Architecture */}
      <Section background="dark" id="architecture">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Built on C-O-R-E Principles
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16">
            FOUNDRY PLATFORM IS ORGANIZED AROUND FOUR PILLARS
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-primary-blue">C</div>
                <h3 className="text-2xl font-bold">Communication Intelligence</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Processes all inbound communication across channels:
              </p>
              <ul className="text-gray-300 mb-4 space-y-2">
                <li>• Slack messages analyzed for urgency and intent</li>
                <li>• Gmail threads categorized and prioritized</li>
                <li>• Calendar events extracted and contextualized</li>
                <li>• Teams conversations indexed and searchable</li>
              </ul>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Services:</strong> Slack Intelligence, Gmail Intelligence, Calendar Intelligence, Teams Connector
              </p>
              <p className="text-sm text-accent-pink">
                <strong>Status:</strong> ⚙️ OAuth pending for external services, fully operational for internal use
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-secondary-purple-light">O</div>
                <h3 className="text-2xl font-bold">Orchestration Services</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Coordinates workflows across systems:
              </p>
              <ul className="text-gray-300 mb-4 space-y-2">
                <li>• AI routing to optimal models based on request</li>
                <li>• Multi-service coordination for complex requests</li>
                <li>• External API integration management</li>
                <li>• Workflow automation and scheduling</li>
              </ul>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Services:</strong> Intelligence Gateway, AI Routing Engine, Workflow Manager, Integration Hub
              </p>
              <p className="text-sm text-accent-pink">
                <strong>Status:</strong> ✅ Fully Operational
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-accent-pink">R</div>
                <h3 className="text-2xl font-bold">Research & Analysis</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Generates insights from your data:
              </p>
              <ul className="text-gray-300 mb-4 space-y-2">
                <li>• ASO (Adaptive Search Optimization) analysis</li>
                <li>• Content generation and optimization</li>
                <li>• Trend detection and forecasting</li>
                <li>• Competitive intelligence gathering</li>
              </ul>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Services:</strong> Marketing Engine, Content Hub, ASO Analyzer, ML Training Pipeline
              </p>
              <p className="text-sm text-accent-pink">
                <strong>Status:</strong> ✅ Fully Operational
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-primary-blue">E</div>
                <h3 className="text-2xl font-bold">Execution & Memory</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Learns and acts on your behalf:
              </p>
              <ul className="text-gray-300 mb-4 space-y-2">
                <li>• Living Memory that persists across all interactions</li>
                <li>• Task automation within defined boundaries</li>
                <li>• Decision tracking and audit trails</li>
                <li>• Context preservation across time</li>
              </ul>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Services:</strong> Memory Manager, Task Executor, Decision Logger, Context Engine
              </p>
              <p className="text-sm text-accent-pink">
                <strong>Status:</strong> ✅ Fully Operational
              </p>
            </Card>
          </div>

          <Card variant="elevated" className="mt-12 bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 border-2 border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-4">The Power of Integration</h3>
            <p className="text-lg text-gray-300 mb-4">
              These aren&apos;t siloed systems. They work together:
            </p>
            <ol className="text-lg text-gray-300 space-y-2">
              <li>1. Communication Intelligence detects an urgent email</li>
              <li>2. Orchestration Services route it to the right handler</li>
              <li>3. Research & Analysis provide context from past interactions</li>
              <li>4. Execution & Memory log the decision and automate the follow-up</li>
            </ol>
            <p className="text-xl font-bold text-accent-pink mt-6">
              All of this happens in under 2 seconds.
            </p>
          </Card>
        </div>
      </Section>

      {/* Infrastructure Deep Dive */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            How It Actually Works
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-12 text-center">
            THE TECHNICAL REALITY BEHIND THE RESULTS
          </p>

          <div className="prose prose-invert prose-lg max-w-none">
            <h3 className="text-3xl font-bold mb-4">Microservices Architecture</h3>

            <h4 className="text-xl font-bold text-secondary-purple-light mb-3">Why Microservices:</h4>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Independent deployment (update one service without touching others)</li>
              <li>Technology flexibility (Python for ML, TypeScript for real-time, Go for performance)</li>
              <li>Fault isolation (one service fails, others keep running)</li>
              <li>Team autonomy (different teams own different services)</li>
            </ul>

            <h4 className="text-xl font-bold text-secondary-purple-light mb-3">Our Implementation:</h4>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li>48+ services deployed on Google Cloud Run</li>
              <li>Serverless auto-scaling (scale to zero when not in use)</li>
              <li>Service mesh for communication (authentication, rate limiting, circuit breakers)</li>
              <li>Centralized logging and monitoring</li>
            </ul>

            <h3 className="text-3xl font-bold mb-4">Cost Optimization Strategy</h3>
            <p className="text-lg text-gray-300 mb-6">
              We don&apos;t just route to &quot;the best&quot; AI model. We route to the <strong>most cost-effective</strong>
              model that can handle the request quality requirements.
            </p>

            <h4 className="text-xl font-bold text-primary-blue mb-3">Our Decision Tree:</h4>
            <ol className="text-gray-300 mb-6 space-y-2">
              <li>1. Can cached response satisfy? → Return cache ($0 cost)</li>
              <li>2. Is request simple/routine? → Route to GPT-3.5 or Claude Haiku (~$0.001)</li>
              <li>3. Does request need reasoning? → Route to GPT-4 or Claude Sonnet (~$0.03)</li>
              <li>4. Is request highly complex? → Route to Claude Opus (~$0.15)</li>
              <li>5. Can request be batched? → Defer to off-peak processing</li>
            </ol>

            <Card variant="elevated" className="bg-gradient-to-r from-accent-pink/10 to-primary-blue/10 border-2 border-accent-pink/30 my-8">
              <h4 className="text-xl font-bold mb-4">Real Example:</h4>
              <p className="text-gray-300 mb-4">
                <strong>Request:</strong> &quot;Summarize this email thread&quot;
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Naive approach: GPT-4 every time = $0.03/request</li>
                <li>• Our approach: Check cache first, use GPT-3.5 if miss = $0.001/request</li>
                <li className="font-bold text-accent-pink">• Savings: 97% cost reduction with zero quality loss</li>
              </ul>
              <p className="text-lg font-bold text-accent-pink mt-4">
                Multiply by 10,000 requests: $300 vs. $10.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Technology Stack */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What We Build With
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Primary Languages</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold mb-2">Python (50% of services)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• ML/AI services (TensorFlow, PyTorch)</li>
                    <li>• Data processing (pandas, NumPy)</li>
                    <li>• API backends (FastAPI)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">TypeScript/Node.js (40%)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Intelligence Gateway (Express)</li>
                    <li>• Real-time services (WebSocket)</li>
                    <li>• Frontend integrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Go (10%)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• High-performance needs</li>
                    <li>• CPU-intensive operations</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Infrastructure</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div>
                  <h4 className="font-bold">Google Cloud Platform</h4>
                  <p>Cloud Run, Storage, Pub/Sub, Secret Manager, Logging</p>
                </div>
                <div>
                  <h4 className="font-bold">Databases</h4>
                  <p>Firestore, BigQuery, Redis, PostgreSQL</p>
                </div>
                <div>
                  <h4 className="font-bold">AI & ML</h4>
                  <p>OpenAI API, Anthropic API, Vertex AI, Custom TensorFlow models</p>
                </div>
                <div>
                  <h4 className="font-bold">DevOps</h4>
                  <p>GitHub Actions, Terraform, Docker, Cloud Build</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Observability</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Google Cloud Monitoring (metrics)</li>
                <li>• Google Cloud Logging (logs)</li>
                <li>• Google Cloud Trace (distributed tracing)</li>
                <li>• Error Reporting (aggregation)</li>
                <li>• Custom dashboards (Grafana-style)</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Who Uses Foundry Platform */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The Foundation for Everything We Build
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-12 text-center">
            FOUNDRY PLATFORM POWERS ALL CLEARFORGE PRODUCTS
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Foundry Business: OS</h3>
              <p className="text-gray-300 mb-3">Multi-project management interface</p>
              <p className="text-sm text-gray-400 mb-3">
                <strong>Uses:</strong> Intelligence Gateway, Memory Manager, Task Executor
              </p>
              <p className="text-sm text-gray-300">
                <strong>Benefit:</strong> AI-powered project management without manual orchestration
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-secondary-purple-light">Foundry Search: Visibility</h3>
              <p className="text-gray-300 mb-3">ASO analysis and optimization (via NEXUS Continuum)</p>
              <p className="text-sm text-gray-400 mb-3">
                <strong>Uses:</strong> Marketing Engine, Content Hub, ASO Analyzer
              </p>
              <p className="text-sm text-gray-300">
                <strong>Benefit:</strong> Real-time search visibility insights
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-accent-pink">The Forge</h3>
              <p className="text-gray-300 mb-3">Free community tools</p>
              <p className="text-sm text-gray-400 mb-3">
                <strong>Uses:</strong> Content Hub, Search Engine, Community Manager
              </p>
              <p className="text-sm text-gray-300">
                <strong>Benefit:</strong> Enterprise infrastructure for free tools
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Continuum Partners</h3>
              <p className="text-gray-300 mb-3">Validation projects using platform services</p>
              <p className="text-sm text-gray-300">
                NEXUS project (10-20 companies), RE-Connect, Future validation projects
              </p>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 border-2 border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-4">Why Platform-First</h3>
            <p className="text-lg text-gray-300 mb-4">
              Building on Foundry Platform means:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Faster product development (services already exist)</li>
              <li>• Consistent user experience (same infrastructure)</li>
              <li>• Shared improvements (one optimization benefits all products)</li>
              <li>• Lower costs (infrastructure amortized across products)</li>
            </ul>
            <div className="mt-6 p-4 bg-background-dark rounded-lg">
              <h4 className="font-bold text-accent-pink mb-2">Not For Sale (Yet)</h4>
              <p className="text-gray-300">
                Foundry Platform is not currently available as a standalone product. It&apos;s the
                infrastructure powering our commercial products and free tools. For now: Use our
                products, benefit from the platform.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Foundry Platform In Action
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Experience the platform through our products and transparency initiatives
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Button href="/foundry/business/os" size="lg" className="w-full">
              Try Foundry Business: OS
            </Button>
            <Button href="/forge" variant="outline" size="lg" className="w-full">
              Explore Free Tools
            </Button>
            <Button href="/forge/build" variant="outline" size="lg" className="w-full">
              Track Development
            </Button>
            <Button href="/continuum" variant="outline" size="lg" className="w-full">
              View Continuum Projects
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
