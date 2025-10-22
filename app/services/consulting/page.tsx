import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Target, TrendingUp, Cpu, Rocket } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Strategic Consulting: Intelligence-Driven, Execution-Focused',
  description: 'We don\'t just deliver recommendations. We implement alongside you, powered by the same Foundry Platform infrastructure managing our own operations.',
});

export default function ConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Strategic Consulting: <span className="text-gradient">Intelligence-Driven, Execution-Focused</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We don&apos;t just deliver recommendations. We implement alongside you, powered by the same Foundry Platform infrastructure managing our own operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=partnership" size="lg">
              Start Conversation
            </Button>
            <Button href="#capabilities" variant="outline" size="lg">
              See Capabilities
            </Button>
          </div>
        </div>
      </Section>

      {/* Our Consulting Approach */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            How We <span className="text-gradient">Work</span>
          </h2>

          <Card variant="elevated" className="border-2 border-accent-pink/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                <strong className="text-white">WE&apos;RE OPERATORS WHO CONSULT, NOT CONSULTANTS WHO THEORIZE.</strong>
              </p>

              <div className="bg-background-dark rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-400">The Standard Consulting Model:</h3>
                <ol className="space-y-2 text-gray-400 list-decimal list-inside">
                  <li>Discovery phase (2-4 weeks)</li>
                  <li>Strategy document delivered (PowerPoint + recommendations)</li>
                  <li>&quot;Good luck with implementation" (consultant exits)</li>
                  <li>Company struggles to execute recommendations</li>
                  <li>Results never materialize, recommendations blamed</li>
                </ol>
                <p className="mt-4 text-gray-400 italic">This model optimizes for billable hours, not client outcomes.</p>
              </div>
            </div>
          </Card>

          <h3 className="text-2xl font-bold mb-6 text-primary-blue">Our Model:</h3>

          <div className="space-y-6">
            <Card variant="elevated">
              <h4 className="text-xl font-bold mb-3 text-primary-blue">Phase 1: Operational Assessment (1-2 weeks)</h4>
              <p className="text-gray-300 mb-3">
                We don&apos;t just interview stakeholders and review docs. We embed in your operations, use your tools, observe workflows, identify friction points.
              </p>
              <p className="text-gray-400 text-sm italic">
                Not &quot;what do you think the problems are?&quot; but &quot;let&apos;s see what's actually happening.&quot;
              </p>
            </Card>

            <Card variant="elevated">
              <h4 className="text-xl font-bold mb-3 text-secondary-purple-light">Phase 2: Strategy + Implementation Plan (1 week)</h4>
              <p className="text-gray-300 mb-3">
                Recommendations aren&apos;t theoretical. They're executable:
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Specific actions with clear owners</li>
                <li>• Timeline with dependencies mapped</li>
                <li>• Tools and infrastructure identified</li>
                <li>• Success metrics defined</li>
                <li>• Risk mitigation planned</li>
              </ul>
              <p className="text-gray-400 text-sm italic mt-3">
                Strategy and execution designed together, not separately.
              </p>
            </Card>

            <Card variant="elevated">
              <h4 className="text-xl font-bold mb-3 text-accent-pink">Phase 3: Execution Partnership (3-6 months)</h4>
              <p className="text-gray-300 mb-3">
                We don&apos;t hand you a document and leave. We implement alongside you:
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Weekly tactical sessions (what's happening this week)</li>
                <li>• Hands-on tool setup and configuration</li>
                <li>• Content creation using our systems</li>
                <li>• Team training and capability transfer</li>
                <li>• Course correction as reality emerges</li>
              </ul>
              <p className="text-gray-400 text-sm italic mt-3">
                We&apos;re in the trenches with you, not observing from conference rooms.
              </p>
            </Card>

            <Card variant="elevated">
              <h4 className="text-xl font-bold mb-3 text-primary-blue">Phase 4: Capability Transfer (final month)</h4>
              <p className="text-gray-300 mb-3">
                Our goal is to make ourselves unnecessary:
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Document all processes built</li>
                <li>• Train team on systems created</li>
                <li>• Establish metrics for ongoing tracking</li>
                <li>• Create escalation paths for future challenges</li>
                <li>• Exit when team is self-sufficient</li>
              </ul>
              <p className="text-white text-lg font-semibold mt-4 text-center">
                We Succeed When You Don't Need Us Anymore.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* What We Consult On */}
      <Section background="medium" id="capabilities">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Consulting <span className="text-gradient">Capabilities</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Strategic Operations */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary-blue" />
                <h3 className="text-2xl font-bold text-primary-blue">Strategic Operations</h3>
              </div>
              <p className="text-lg font-semibold text-white mb-4">
                HELP COMPANIES DESIGN OPERATIONS THAT SCALE.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What We Do:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Multi-project coordination systems</li>
                    <li>• Workflow design and automation</li>
                    <li>• Tool stack optimization</li>
                    <li>• Resource allocation frameworks</li>
                    <li>• Progress tracking and reporting</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Who It's For:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Founders managing multiple initiatives</li>
                    <li>• Consultants coordinating client work</li>
                    <li>• Agencies handling multiple projects</li>
                    <li>• Companies experiencing operational chaos</li>
                  </ul>
                </div>

                <div className="bg-background-dark rounded-lg p-4">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Real Example:</strong> Helped 3-person consulting firm manage 8 concurrent clients without hiring. Designed project structure, automated reporting, reduced admin time by 60%.
                  </p>
                </div>
              </div>
            </Card>

            {/* Content & ASO Strategy */}
            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-accent-pink" />
                <h3 className="text-2xl font-bold text-accent-pink">Content & ASO Strategy</h3>
              </div>
              <p className="text-lg font-semibold text-white mb-4">
                BUILD CONTENT SYSTEMS THAT DRIVE BUSINESS RESULTS.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What We Do:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• ASO/SEO strategy development</li>
                    <li>• Content operations design</li>
                    <li>• Topic and keyword research</li>
                    <li>• Production workflow setup</li>
                    <li>• Distribution and repurposing systems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Who It's For:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Apps needing visibility in stores</li>
                    <li>• SaaS companies building content engines</li>
                    <li>• Service businesses establishing thought leadership</li>
                    <li>• Companies with content but no strategy</li>
                  </ul>
                </div>

                <div className="bg-background-dark rounded-lg p-4">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Real Example:</strong> Designed ASO strategy for B2B SaaS app. Went from page 8 to page 1 for primary keyword in 4 months. 3x organic downloads, 40% cost-per-install reduction.
                  </p>
                </div>
              </div>
            </Card>

            {/* Intelligence Infrastructure */}
            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-8 h-8 text-secondary-purple-light" />
                <h3 className="text-2xl font-bold text-secondary-purple-light">Intelligence Infrastructure</h3>
              </div>
              <p className="text-lg font-semibold text-white mb-4">
                IMPLEMENT AI CAPABILITIES WITHOUT VENDOR LOCK-IN.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What We Do:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• AI use case identification</li>
                    <li>• Model selection and optimization</li>
                    <li>• Cost-effective implementation</li>
                    <li>• Workflow integration</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Who It's For:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Companies wanting AI capability without complexity</li>
                    <li>• Technical teams seeking cost optimization</li>
                    <li>• Organizations with scattered AI usage</li>
                    <li>• Businesses evaluating AI ROI</li>
                  </ul>
                </div>

                <div className="bg-background-dark rounded-lg p-4">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Real Example:</strong> Helped marketing agency reduce AI costs by 55% through intelligent routing. Same output quality, fraction of the cost. Paid for consulting in 2 months through savings alone.
                  </p>
                </div>
              </div>
            </Card>

            {/* Go-To-Market Strategy */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-primary-blue" />
                <h3 className="text-2xl font-bold text-primary-blue">Go-To-Market Strategy</h3>
              </div>
              <p className="text-lg font-semibold text-white mb-4">
                LAUNCH PRODUCTS THAT PEOPLE ACTUALLY WANT.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">What We Do:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Market validation (before building)</li>
                    <li>• Positioning and messaging development</li>
                    <li>• Launch strategy and timeline</li>
                    <li>• Channel selection and optimization</li>
                    <li>• Metrics and tracking setup</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Who It's For:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Startups launching first product</li>
                    <li>• Companies entering new markets</li>
                    <li>• Founders with product but no traction</li>
                    <li>• Teams with good product but wrong positioning</li>
                  </ul>
                </div>

                <div className="bg-background-dark rounded-lg p-4">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Real Example:</strong> Helped founder reposition SaaS product from "project management" to "client coordination." Same features, different messaging. 5x qualified demo requests in 90 days.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Choose ClearForge Consulting */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            What Makes Our Consulting <span className="text-gradient">Different</span>
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <p className="text-2xl text-white font-bold mb-6 text-center">
              WE BRING THREE THINGS OTHER CONSULTANTS DON'T:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary-blue">1. Operational Infrastructure You Can Use</h3>
                <p className="text-gray-300 mb-3">
                  We don&apos;t just recommend tools. We give you access to Foundry Platform capabilities during consulting engagements:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Use our Intelligence Gateway for content generation</li>
                  <li>• Leverage our ASO analysis capabilities</li>
                  <li>• Access our workflow templates and frameworks</li>
                  <li>• Benefit from our cost-optimized AI infrastructure</li>
                </ul>
                <p className="text-white mt-3 font-semibold">You're not just getting advice—you're getting capability.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">2. Battle-Tested Frameworks From Real Operations</h3>
                <p className="text-gray-300 mb-3">
                  Every framework, template, and process we recommend is proven in our own operations. We&apos;re not selling theory. We&apos;re sharing what actually works.
                </p>
                <p className="text-gray-300 mb-2 font-semibold">Examples:</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Project structure managing 23 concurrent projects</li>
                  <li>• Content workflow generating 47 guides + ongoing material</li>
                  <li>• ASO methodology validated through NEXUS partners</li>
                  <li>• Workflow automation reducing admin time by 60%</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-accent-pink">3. Implementation Partnership, Not Just Strategy</h3>
                <p className="text-gray-300 mb-3">
                  We don&apos;t deliver PowerPoints and disappear. We implement alongside you:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Weekly tactical sessions (not monthly check-ins)</li>
                  <li>• Hands-on tool configuration (not vendor introductions)</li>
                  <li>• Real content creation (not just strategy docs)</li>
                  <li>• Team training through doing (not presentation slides)</li>
                  <li>• Course correction in real time (not post-mortem analysis)</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card variant="elevated" className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 border-2 border-accent-pink/30">
            <p className="text-xl text-white font-bold mb-4">The Result:</p>
            <p className="text-lg text-gray-300 mb-3">
              Most consulting engagements deliver reports that sit on shelves.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Our engagements deliver <strong className="text-white">operational systems that run businesses.</strong>
            </p>
            <p className="text-lg text-accent-pink font-semibold">
              Success Metric: Can your team operate without us after engagement ends?
            </p>
            <div className="mt-4 text-gray-300">
              <p>If no → We failed.</p>
              <p>If yes → We succeeded.</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Engagement Model */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            How Consulting Engagements <span className="text-gradient">Work</span>
          </h2>

          <Card variant="elevated" className="mb-8">
            <p className="text-xl text-white font-bold mb-6">
              CONSULTING ENGAGEMENTS ARE STRUCTURED BUT FLEXIBLE.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-gray-300"><strong className="text-white">Duration:</strong> 3-6 months (typical)</p>
              </div>
              <div>
                <p className="text-gray-300"><strong className="text-white">Cadence:</strong> Weekly sessions + async support between</p>
              </div>
              <div>
                <p className="text-gray-300"><strong className="text-white">Team Required:</strong> 1-2 key stakeholders consistently involved</p>
              </div>
              <div>
                <p className="text-gray-300"><strong className="text-white">Our Team:</strong> 1-2 consultants (founder + specialist as needed)</p>
              </div>
            </div>
          </Card>

          <div className="space-y-4 mb-8">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Weeks 1-2: Assessment</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Embed in your operations</li>
                <li>• Use your tools and observe workflows</li>
                <li>• Interview team members</li>
                <li>• Identify friction points and opportunities</li>
                <li>• <strong className="text-white">Deliverable:</strong> Assessment report with findings</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Weeks 3-4: Strategy & Design</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Design future state operations</li>
                <li>• Select tools and frameworks</li>
                <li>• Map implementation timeline</li>
                <li>• Define success metrics</li>
                <li>• <strong className="text-white">Deliverable:</strong> Implementation roadmap</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Weeks 5-20: Implementation (12-16 weeks)</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Build systems alongside you</li>
                <li>• Weekly tactical sessions</li>
                <li>• Hands-on configuration and setup</li>
                <li>• Content creation and workflow establishment</li>
                <li>• Team training through execution</li>
                <li>• <strong className="text-white">Deliverable:</strong> Operational systems in production</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Weeks 21-24: Capability Transfer</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Document all processes</li>
                <li>• Train team comprehensively</li>
                <li>• Establish self-sufficiency</li>
                <li>• Create escalation paths</li>
                <li>• <strong className="text-white">Deliverable:</strong> Independent operational capability</li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated" className="border-2 border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Pricing Model:</h3>
            <p className="text-gray-300 mb-4">
              Engagements are project-based, not hourly:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• Fixed scope and deliverables</li>
              <li>• Defined timeline and milestones</li>
              <li>• Clear success criteria</li>
              <li>• Payment schedule tied to progress</li>
              <li>• No surprise bills or scope creep</li>
            </ul>
            <p className="text-lg font-semibold text-primary-blue">
              Investment range: $15K-$75K depending on complexity and duration.
            </p>

            <div className="mt-6 bg-background-dark rounded-lg p-4">
              <h4 className="text-lg font-bold mb-3 text-accent-pink">NOT A FIT IF:</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• You want strategy without implementation</li>
                <li>• You need ongoing management (not capability transfer)</li>
                <li>• You want us to do the work permanently (we train your team)</li>
                <li>• You're not willing to be hands-on during implementation</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* Client Success Stories */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Real Results From <span className="text-gradient">Real Engagements</span>
          </h2>

          <div className="space-y-8">
            <Card variant="elevated" className="border-l-4 border-l-primary-blue">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Consulting Firm: Operations Overhaul</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm">
                    3-person consulting firm managing 8 concurrent clients. Overwhelmed with admin work, struggling to deliver quality, considering hiring but unprofitable.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Engagement:</h4>
                  <p className="text-gray-300 text-sm">
                    4-month operations consulting. Designed multi-client coordination system, automated reporting, established workflows, trained team.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Results:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• 60% reduction in admin time</li>
                    <li>• Took on 2 additional clients without hiring</li>
                    <li>• Profitability increased 40%</li>
                    <li>• Team reported less stress, better output</li>
                  </ul>
                </div>

                <div className="bg-background-dark rounded-lg p-4">
                  <p className="text-gray-300 italic text-sm">
                    &quot;They didn&apos;t just tell us what to do. They built the systems with us. By the end, we knew how to maintain and improve them ourselves.&quot; <span className="text-gray-400">- Founder</span>
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-l-accent-pink">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">SaaS Startup: ASO Strategy</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm">
                    B2B SaaS app with great product but no organic visibility. 90% of users from paid ads. Cost-per-install $47 and climbing.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Engagement:</h4>
                  <p className="text-gray-300 text-sm">
                    3-month ASO strategy and implementation. Competitive analysis, keyword research, metadata optimization, content strategy, performance tracking.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Results:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Moved from page 8 to page 1 for primary keyword (4 months)</li>
                    <li>• 3x organic downloads</li>
                    <li>• Cost-per-install dropped to $28 (40% reduction)</li>
                    <li>• Organic now 45% of new users</li>
                  </ul>
                </div>

                <div className="bg-background-dark rounded-lg p-4">
                  <p className="text-gray-300 italic text-sm">
                    &quot;They gave us the ASO playbook AND helped us execute it. We learned how to do this ourselves.&quot; <span className="text-gray-400">- Head of Growth</span>
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-l-secondary-purple-light">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Agency: AI Cost Optimization</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm">
                    Marketing agency using AI heavily for client work. Monthly AI bills $8K and rising. Same tasks using expensive models unnecessarily.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Engagement:</h4>
                  <p className="text-gray-300 text-sm">
                    2-month intelligence infrastructure consulting. Analyzed usage patterns, implemented intelligent routing, optimized model selection, set up monitoring.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Results:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• 55% AI cost reduction ($8K → $3.6K monthly)</li>
                    <li>• Same output quality maintained</li>
                    <li>• $52K annual savings</li>
                    <li>• Consulting paid for itself in 2 months</li>
                  </ul>
                </div>

                <div className="bg-background-dark rounded-lg p-4">
                  <p className="text-gray-300 italic text-sm">
                    &quot;We were using GPT-4 for everything. They showed us how to route intelligently and cut costs in half without sacrificing quality.&quot; <span className="text-gray-400">- Agency Owner</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Consulting vs Products */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            When to Choose <span className="text-gradient">Consulting vs Foundry Products</span>
          </h2>

          <Card variant="elevated" className="mb-8">
            <p className="text-xl text-white font-bold mb-6">
              CONSULTING AND PRODUCTS SOLVE DIFFERENT PROBLEMS.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-blue">Choose Consulting If:</h3>
                <ul className="text-gray-300 space-y-3">
                  <li>• You need custom solutions for unique operations</li>
                  <li>• You want to build internal capability (not rely on vendors)</li>
                  <li>• Your situation requires hands-on implementation support</li>
                  <li>• You prefer project-based engagement with defined end</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-accent-pink">Choose Foundry Products If:</h3>
                <ul className="text-gray-300 space-y-3">
                  <li>• You want ready-made solutions with proven track record</li>
                  <li>• You need ongoing capability (not one-time implementation)</li>
                  <li>• Your needs align with standard product offerings</li>
                  <li>• You prefer subscription access vs project investment</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card variant="elevated" className="border-2 border-secondary-purple/30">
            <h3 className="text-xl font-bold mb-4 text-white">Can You Do Both?</h3>
            <p className="text-gray-300 mb-4">
              Yes. Many consulting clients eventually become product customers:
            </p>
            <ol className="text-gray-300 space-y-2 list-decimal list-inside mb-4">
              <li>Consulting builds foundation and capability</li>
              <li>Products provide ongoing leverage after consulting ends</li>
            </ol>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Example:</strong> Consulting establishes operations system → Later adopt Foundry Business: OS for continued capability with less manual work.
            </p>
            <div className="bg-background-dark rounded-lg p-4">
              <p className="text-white font-semibold mb-2">Not Sure Which Path?</p>
              <p className="text-gray-300 text-sm">
                Start with a discovery call. We&apos;ll honestly assess whether consulting, products, or neither is the right fit. We succeed by solving problems, not by selling services.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start a Conversation About <span className="text-gradient">Your Operations</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss your challenges and see if consulting is the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=partnership" size="lg">
              Schedule Discovery Call
            </Button>
            <Button href="/foundry" variant="outline" size="lg">
              Explore Foundry Products
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
