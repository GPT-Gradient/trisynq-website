import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Brain, DollarSign, Unlock } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Intelligence Without Gatekeeping - ClearForge Technologies',
  description: 'ClearForge builds AI-powered platforms that amplify human capability—not replace it. We\'re removing the artificial walls that complexity creates, making enterprise-grade intelligence accessible to everyone.',
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark z-10" />
          <img
            src="/images/hero-background.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center max-w-5xl mx-auto relative z-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Intelligence Without Gatekeeping
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            ClearForge builds AI-powered platforms that amplify human capability—not replace it.
            We&apos;re removing the artificial walls that complexity creates, making enterprise-grade
            intelligence accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/foundry/platform" size="lg">
              Explore The Foundry
            </Button>
            <Button href="/forge" variant="outline" size="lg">
              Join Our Community
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 1: No Gatekeeping (Immediately Below Hero) */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Breaking Down Complexity Walls
          </h2>

          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-300 mb-4">
              Most technology is built with invisible gates. You need technical expertise.
              You need enterprise budgets. You need teams of specialists. These aren&apos;t
              accidents—they&apos;re walls built by complexity, defended by &quot;this is just how
              it works.&quot;
            </p>

            <p className="text-lg font-bold text-white mb-4">
              We believe differently.
            </p>

            <p className="text-lg text-gray-300 mb-4">
              The 90% locked out aren&apos;t less capable—they just don&apos;t have a $50,000/month
              consulting budget. Solo entrepreneurs managing 6 projects aren&apos;t less
              intelligent—they&apos;re just drowning in context switching. Small businesses
              wanting search visibility aren&apos;t less worthy—they&apos;re just priced out by
              agencies charging $10k/month.
            </p>

            <p className="text-lg text-gray-300 mb-4">
              ClearForge exists to remove these walls. Not by simplifying the technology
              (that&apos;s patronizing), but by wrapping sophisticated capability in interfaces
              that respect your intelligence.
            </p>

            <div className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 p-8 rounded-lg border-2 border-primary-blue/30 my-8">
              <p className="text-xl font-bold text-white mb-4">
                You shouldn&apos;t need a computer science degree to use AI effectively. You
                shouldn&apos;t need venture funding to access enterprise-grade intelligence. And
                you definitely shouldn&apos;t need to choose between capability and affordability.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                That&apos;s not innovation. That&apos;s gatekeeping.
              </p>
              <p className="text-xl font-bold text-accent-pink">
                We&apos;re building something different.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-blue/20 rounded-full p-4">
                  <Brain className="w-8 h-8 text-primary-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-primary-blue">
                Intelligence for Everyone
              </h3>
              <p className="text-gray-300">
                Enterprise AI capability without enterprise complexity. Our platform routes to
                the right models, optimizes costs, and handles the technical details so you can
                focus on your work.
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="flex justify-center mb-4">
                <div className="bg-secondary-purple/20 rounded-full p-4">
                  <DollarSign className="w-8 h-8 text-secondary-purple-light" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-secondary-purple-light">
                Transparent Pricing
              </h3>
              <p className="text-gray-300">
                No hidden costs. No surprise bills. We publish our pricing publicly and show
                you exactly where your money goes. Free tier for community tools, clear upgrade
                paths.
              </p>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="flex justify-center mb-4">
                <div className="bg-accent-pink/20 rounded-full p-4">
                  <Unlock className="w-8 h-8 text-accent-pink" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-accent-pink">
                Open by Default
              </h3>
              <p className="text-gray-300">
                We publish our methodologies, share our approaches, and operate transparently.
                The Forge (our free community platform) proves we&apos;re serious about accessibility.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button href="/about/mission" variant="outline" size="lg">
              See How We&apos;re Different
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 2: Intelligence-Driven Platform */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Built on Foundry Platform: 48+ Microservices, One Purpose
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            Every ClearForge product—paid and free—runs on Foundry Platform. It&apos;s our
            proprietary backend infrastructure: an Intelligence Gateway orchestrating 48+
            specialized microservices on Google Cloud Platform. While competitors build
            monoliths or cobble together APIs, we built an architecture designed for
            intelligent routing, cost optimization, and fault tolerance from day one.
          </p>

          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center">What Is Foundry Platform?</h3>

            <p className="text-lg text-gray-300 mb-6">
              Think of it as AWS for business intelligence—but actually understandable.
              Foundry Platform is the invisible powerhouse behind everything we build.
              It&apos;s why our products can offer enterprise capability at startup prices.
              It&apos;s why we can route AI requests to the most cost-effective model without
              you thinking about it. It&apos;s why we can scale from solo entrepreneur to
              enterprise client on the same infrastructure.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card variant="elevated" className="border-2 border-primary-blue/30">
                <h4 className="text-2xl font-bold mb-4 text-primary-blue">Intelligence Gateway: The Orchestrator</h4>
                <p className="text-gray-300 mb-4">
                  Every request comes through our Intelligence Gateway—a TypeScript-based
                  routing engine that decides which backend service should handle what task.
                  Need to process Slack messages? Gateway routes to our Slack Intelligence
                  Service. Analyzing search data? Marketing Engine gets the call. This isn&apos;t
                  basic load balancing—it&apos;s intelligent orchestration with context awareness.
                </p>
              </Card>

              <Card variant="elevated" className="border-2 border-secondary-purple/30">
                <h4 className="text-2xl font-bold mb-4 text-secondary-purple-light">48+ Specialized Microservices</h4>
                <p className="text-gray-300 mb-4">
                  Each service has one job and does it exceptionally well:
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Slack Intelligence: Message processing, urgency classification</li>
                  <li>• Gmail Intelligence: Email parsing, priority detection, auto-drafting</li>
                  <li>• Marketing Engine: Adaptive Search Optimization</li>
                  <li>• Content Hub: Generate, store, version all content</li>
                  <li>• Memory Service: Persistent knowledge across interactions</li>
                  <li>• Analytics Engine: Real-time metrics, predictive insights</li>
                  <li>• And 42+ more specialized services</li>
                </ul>
              </Card>

              <Card variant="elevated" className="border-2 border-accent-pink/30">
                <h4 className="text-2xl font-bold mb-4 text-accent-pink">Cost Optimization Built In</h4>
                <p className="text-gray-300 mb-4">
                  Here&apos;s where we&apos;re different: we don&apos;t just use AI—we USE IT INTELLIGENTLY.
                  The Gateway analyzes each request and routes to the most cost-effective solution:
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Simple query → Fast, cheap models</li>
                  <li>• Complex reasoning → Premium models</li>
                  <li>• Already cached → $0 (we remember previous answers)</li>
                  <li>• User preference → Honor their model choice</li>
                  <li>• Budget concern → Downgrade gracefully</li>
                </ul>
                <p className="text-sm font-bold text-accent-pink mt-4">
                  Result: 40-60% lower AI costs vs naive &quot;use the best model for everything&quot; approaches
                </p>
              </Card>

              <Card variant="elevated" className="border-2 border-primary-blue/30">
                <h4 className="text-2xl font-bold mb-4 text-primary-blue">Real-Time, Event-Driven Architecture</h4>
                <p className="text-gray-300 mb-4">
                  Everything happens asynchronously. Services publish events, other services subscribe. This means:
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• No waiting for slow operations</li>
                  <li>• Services can fail independently without cascading</li>
                  <li>• Updates happen in real-time via WebSockets</li>
                  <li>• Scale happens automatically (Google Cloud Run)</li>
                  <li>• Audit trails for everything (compliance built-in)</li>
                </ul>
              </Card>
            </div>

            <Card variant="elevated" className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 border-2 border-primary-blue/50">
              <h4 className="text-2xl font-bold mb-4">Proven in Production</h4>
              <p className="text-lg text-gray-300 mb-4">
                This isn&apos;t vaporware. Foundry Platform is operational TODAY:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-300">• Running all ClearForge internal operations</p>
                  <p className="text-gray-300">• Managing 6+ Continuum projects simultaneously</p>
                  <p className="text-gray-300">• Processing thousands of intelligence items daily</p>
                </div>
                <div>
                  <p className="text-gray-300">• 99.9% uptime on production infrastructure</p>
                  <p className="text-gray-300">• Auto-scaling from 0 to thousands of requests</p>
                  <p className="text-gray-300">• Average request processing: 1.2 seconds</p>
                </div>
              </div>
              <div className="bg-background-dark p-6 rounded-lg">
                <h5 className="text-xl font-bold mb-3 text-white">Why This Matters to You</h5>
                <p className="text-gray-300 mb-3">
                  <strong className="text-primary-blue">Because Free Doesn&apos;t Mean Cheap:</strong> The Forge
                  (our free community platform) runs on the same Foundry Platform infrastructure as paid
                  products. You get the same sophisticated backend, the same intelligent routing, the same
                  cost optimization. The only difference? Usage limits and feature access.
                </p>
                <p className="text-gray-300 mb-3">
                  <strong className="text-secondary-purple-light">Because Your Growth Doesn&apos;t Break Anything:</strong> Start
                  on free tier, upgrade to paid products—same infrastructure. Your data stays consistent,
                  integrations don&apos;t break, context doesn&apos;t get lost. We built this to scale with you.
                </p>
                <p className="text-gray-300">
                  <strong className="text-accent-pink">Because Transparency Isn&apos;t Optional:</strong> We publish
                  our architecture. We explain our approach. We show you how the sausage gets made. This
                  platform isn&apos;t magic—it&apos;s sophisticated engineering built on principles we stand behind.
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button href="/foundry/platform" size="lg">
              Explore Platform Details
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 3: The Continuum (Social Justice Framing) */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            The Continuum: Proving Transparency Prevails
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-8 text-center">
            THE CONTINUUM IS OUR COMMITMENT TO PROOF OVER PROMISES.
          </p>

          <div className="prose prose-invert prose-lg max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-300 mb-6">
              Most companies launch products and pray they work. We take a different
              approach: prove it works internally first, validate with partners for
              12-18 months, THEN commercialize. We call this The Continuum—a deliberate
              3-phase validation process where transparency isn&apos;t just talk, it&apos;s data.
            </p>

            <div className="bg-gradient-to-r from-accent-pink/10 to-primary-blue/10 p-8 rounded-lg border-2 border-accent-pink/30 mb-8">
              <p className="text-xl font-bold text-white mb-4">
                But The Continuum is more than product validation. These projects are our
                stand against artificial complexity walls. Every Continuum project tackles
                a domain where gatekeepers claim &quot;it&apos;s just too complicated for regular
                people.&quot; We&apos;re proving they&apos;re wrong.
              </p>
            </div>

            <h3 className="text-3xl font-bold mb-6">The Three Phases</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card variant="elevated" className="border-2 border-primary-blue/30">
                <div className="text-4xl mb-4">1</div>
                <h4 className="text-2xl font-bold mb-4 text-primary-blue">Internal Use</h4>
                <p className="text-gray-300 mb-4">
                  We build it. We use it. We break it. We fix it. If it can&apos;t survive our own
                  operations at Continuum Property Group (managing real estate, asset management,
                  construction, and more), it&apos;s not ready for anyone else.
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Example:</strong> Foundry Business: OS currently manages all ClearForge
                  operations plus 6 Continuum projects simultaneously. Every feature gets
                  battle-tested in real multi-project chaos before we even consider external validation.
                </p>
              </Card>

              <Card variant="elevated" className="border-2 border-secondary-purple/30">
                <div className="text-4xl mb-4">2</div>
                <h4 className="text-2xl font-bold mb-4 text-secondary-purple-light">Partner Validation (12-18 Months)</h4>
                <p className="text-gray-300 mb-4">
                  We select 10-20 partner companies and give them free access. They use real
                  products solving real problems. We publish real metrics—successes AND failures.
                  No cherry-picking, no hiding data, no spin.
                </p>
                <p className="text-sm text-gray-400">
                  This is where Continuum projects live. Each project focuses on a specific
                  domain where complexity has become a weapon of exclusion.
                </p>
              </Card>

              <Card variant="elevated" className="border-2 border-accent-pink/30">
                <div className="text-4xl mb-4">3</div>
                <h4 className="text-2xl font-bold mb-4 text-accent-pink">Commercial Launch</h4>
                <p className="text-gray-300 mb-4">
                  After 12-18 months of partner validation with published results, we
                  commercialize. By this point, we KNOW it works because we have data.
                  Not promises. Not projections. Actual. Data.
                </p>
              </Card>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-center">Current Continuum Projects</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card variant="elevated" className="border-2 border-primary-blue/50">
                <h4 className="text-2xl font-bold mb-4">Project NEXUS: Search Visibility</h4>
                <div className="mb-4">
                  <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm font-semibold">
                    Launching Q1 2026
                  </span>
                </div>
                <p className="text-lg font-bold text-accent-pink mb-3">The Problem:</p>
                <p className="text-gray-300 mb-4">
                  AI spam is destroying search results. Traditional SEO is dead. Small businesses
                  can&apos;t afford $10k/month agencies, but &quot;SEO is complicated&quot; keeps them locked out.
                </p>
                <p className="text-lg font-bold text-secondary-purple-light mb-3">Our Stand:</p>
                <p className="text-gray-300 mb-4">
                  Search optimization isn&apos;t complicated—it&apos;s gatekept. We&apos;re publishing our
                  Adaptive Search Optimization methodology (scrubbed for public consumption),
                  sharing real results from 10-20 partners, and proving that transparency in
                  search is possible.
                </p>
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <p className="text-sm text-gray-400 mb-2">
                    <strong>Timeline:</strong> 12-18 month validation, public metrics dashboard
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong>Product:</strong> Foundry Search: Visibility (commercial launch Q3 2026)
                  </p>
                </div>
                <div className="mt-4">
                  <Button href="/continuum/nexus" variant="outline">
                    See NEXUS Details
                  </Button>
                </div>
              </Card>

              <Card variant="elevated" className="border-2 border-secondary-purple/50">
                <h4 className="text-2xl font-bold mb-4">Project RE-Connect: Real Estate Transparency</h4>
                <div className="mb-4">
                  <span className="bg-secondary-purple/20 text-secondary-purple-light px-3 py-1 rounded-full text-sm font-semibold">
                    In Development
                  </span>
                </div>
                <p className="text-lg font-bold text-accent-pink mb-3">The Problem:</p>
                <p className="text-gray-300 mb-4">
                  Real estate data is fragmented across dozens of sources. Agents hoard information
                  as competitive advantage. &quot;It&apos;s too complex for consumers&quot; means buyers and
                  sellers stay dependent on middlemen.
                </p>
                <p className="text-lg font-bold text-secondary-purple-light mb-3">Our Stand:</p>
                <p className="text-gray-300 mb-4">
                  Real estate isn&apos;t complex—it&apos;s deliberately opaque. We&apos;re aggregating public
                  data, showing prices and trends anyone can access, and proving transparency
                  doesn&apos;t destroy the industry—it elevates it.
                </p>
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <p className="text-sm text-gray-400 mb-2">
                    <strong>Timeline:</strong> Launching 2026
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong>Product:</strong> Foundry Real Estate Intelligence (post-validation)
                  </p>
                </div>
                <div className="mt-4">
                  <Button href="/continuum/re-connect" variant="outline">
                    Learn About RE-Connect
                  </Button>
                </div>
              </Card>
            </div>

            <Card variant="elevated" className="bg-gradient-to-r from-primary-blue/10 to-accent-pink/10 border-2 border-primary-blue/50">
              <h4 className="text-2xl font-bold mb-6 text-center">The Continuum Is Our Social Justice Stand</h4>
              <p className="text-lg text-gray-300 mb-6">
                We&apos;re not just building products. We&apos;re proving that transparency prevails.
                That complexity isn&apos;t a valid excuse for gatekeeping. That giving people
                capability doesn&apos;t hurt industries—it elevates them.
              </p>
              <p className="text-xl font-bold text-white mb-6 text-center">
                Every Continuum project is a direct challenge to &quot;it&apos;s just too complicated.&quot;
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <h5 className="font-bold text-primary-blue mb-2">We Publish Everything</h5>
                  <p className="text-sm text-gray-300">Real metrics, success AND failure rates, monthly updates</p>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-secondary-purple-light mb-2">We Prove Social Impact</h5>
                  <p className="text-sm text-gray-300">Each project removes an artificial complexity wall</p>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-accent-pink mb-2">We Build in the Open</h5>
                  <p className="text-sm text-gray-300">Methodologies, tools, approaches all shared via The Forge</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-accent-pink text-center">
                Prove us wrong.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button href="/continuum" size="lg">
              Explore The Continuum
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 4: Public Dashboard (Expanded) */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Transparency in Action: Our Public Dashboard
          </h2>
          <p className="text-2xl font-bold text-primary-blue mb-8 text-center">
            MOST COMPANIES HIDE THEIR METRICS. WE PUBLISH OURS.
          </p>

          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-300 mb-6">
              The ClearForge Public Dashboard shows real data from our operations:
            </p>
            <ul className="text-gray-300 space-y-2 mb-8">
              <li>• System uptime and performance metrics</li>
              <li>• Continuum project progress and partner adoption</li>
              <li>• Cost optimization savings (how much we save users)</li>
              <li>• Infrastructure health and incident response</li>
              <li>• Community engagement and tool usage</li>
            </ul>

            <h3 className="text-3xl font-bold mb-6">Why We Do This</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card variant="elevated" className="border-2 border-primary-blue/30">
                <h4 className="text-xl font-bold mb-3 text-primary-blue">Transparency Isn&apos;t Optional</h4>
                <p className="text-gray-300">
                  If we&apos;re claiming to remove gatekeeping, we can&apos;t hide behind &quot;proprietary
                  metrics&quot; and &quot;confidential data.&quot; You deserve to see if we walk our talk.
                </p>
              </Card>

              <Card variant="elevated" className="border-2 border-secondary-purple/30">
                <h4 className="text-xl font-bold mb-3 text-secondary-purple-light">Data Builds Trust</h4>
                <p className="text-gray-300">
                  Anyone can make promises. We publish proof. See our uptime. See how many
                  partners are using Continuum projects. See the cost savings we deliver.
                  Judge us on outcomes, not marketing.
                </p>
              </Card>

              <Card variant="elevated" className="border-2 border-accent-pink/30">
                <h4 className="text-xl font-bold mb-3 text-accent-pink">Openness Elevates Everyone</h4>
                <p className="text-gray-300">
                  When we show how we operate, competitors have to follow suit. Industry
                  standards rise. Users win. That&apos;s the goal.
                </p>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card variant="elevated">
                <h4 className="text-xl font-bold mb-4">Platform Performance</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Uptime (90 days)</span>
                    <span className="text-2xl font-bold text-primary-blue">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Avg Response Time</span>
                    <span className="text-2xl font-bold text-secondary-purple-light">1.2s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Savings</span>
                    <span className="text-2xl font-bold text-accent-pink">58%</span>
                  </div>
                </div>
              </Card>

              <Card variant="elevated">
                <h4 className="text-xl font-bold mb-4">Continuum Progress</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-300 mb-1">NEXUS Partners</p>
                    <p className="text-2xl font-bold text-primary-blue">Recruiting (Q1 2026)</p>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1">RE-Connect Status</p>
                    <p className="text-2xl font-bold text-secondary-purple-light">Early Development</p>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1">Monthly Updates</p>
                    <p className="text-2xl font-bold text-accent-pink">Published</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card variant="elevated" className="bg-gradient-to-r from-accent-pink/10 to-primary-blue/10 border-2 border-accent-pink/30">
              <h4 className="text-2xl font-bold mb-4">The Boldness of Public Metrics</h4>
              <p className="text-lg text-gray-300 mb-4">
                Publishing our numbers means we can&apos;t hide when things go wrong. Server
                outage? You&apos;ll see it. Continuum project struggling? You&apos;ll know. Partner
                churn? We&apos;ll report it.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                That&apos;s not comfortable. But it&apos;s right.
              </p>
              <p className="text-xl font-bold text-white mb-4">
                We&apos;re betting that transparency builds more trust than perfect marketing ever
                could. We&apos;re betting that showing our failures and how we fix them matters
                more than pretending we&apos;re flawless.
              </p>
              <p className="text-xl font-bold text-accent-pink">
                We&apos;re betting on radical openness. Time will tell if we&apos;re right.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button href="/public-dashboard" size="lg">
              View Full Dashboard
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 5: Product Showcase */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            The Foundry: Commercial Products Built on Proof
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            We build products that solve real problems, proven through The Continuum before commercialization.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Foundry Business: OS</h3>
              <p className="text-gray-300 mb-4">
                AI-powered business operating system for multi-project leaders. Manage 6+ projects
                without losing your mind.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Status:</strong> Q1 2026 Commercial Launch
              </p>
              <Button href="/foundry/business/os" variant="outline">
                Explore Business: OS
              </Button>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Foundry Search: Visibility</h3>
              <p className="text-gray-300 mb-4">
                AI-native search optimization. No $10k/month agency. No black-box SEO. Real visibility.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Status:</strong> Continuum Validation (NEXUS) Q1 2026
              </p>
              <Button href="/continuum/nexus" variant="outline">
                Track NEXUS Progress
              </Button>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Foundry Connect</h3>
              <p className="text-gray-300 mb-4">
                API access for developers. Build on our platform. No infrastructure headaches.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Status:</strong> Available Now (Limited Beta)
              </p>
              <Button href="/foundry/connect" variant="outline">
                Request Access
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      {/* Beta CTA */}
      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get early access to products that prove intelligence doesn&apos;t require gatekeeping.
          </p>

          <div className="space-y-4 mb-8 text-left max-w-xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-gray-300">Priority access to Foundry Business: OS</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-gray-300">NEXUS partner opportunities (search validation)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-gray-300">Direct input on product development</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-gray-300">Free access to The Forge community tools</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=beta-os" size="lg">
              Apply for Beta Access
            </Button>
            <Button href="/forge" variant="outline" size="lg">
              Explore The Forge (Free)
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
