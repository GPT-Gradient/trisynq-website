import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Custom Development - We Build, You Own',
  description: 'Custom solutions on The Foundry platform. White-label capabilities. You own the code and IP.',
});

export default function CustomDevPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Custom Development: We Build, You Own
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Custom applications built on The Foundry platform. White-label solutions for agencies and enterprises.
            You own the code, IP, and infrastructure. We provide the intelligence and execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=partnership" size="lg">
              Discuss Your Project
            </Button>
            <Button href="/foundry/platform" size="lg" variant="outline">
              Explore The Platform
            </Button>
          </div>
        </div>
      </Section>

      {/* The Problem with Traditional Development */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            The Problem with Traditional Custom Development
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Most custom development projects deliver code, not capability. You get an application, but you're stuck with the original team for changes, updates, and scaling.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Vendor Lock-In</h3>
              <p className="text-gray-300 mb-4">
                Custom code built by agencies often creates dependency. You can't easily modify it, extend it, or move to another team without starting over.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> Marketing agency builds custom CRM for $150K. Every new feature request costs $10-20K because only they understand the codebase.
              </p>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">No Intelligence Layer</h3>
              <p className="text-gray-300 mb-4">
                Traditional development doesn't include AI capabilities. You pay separately for AI integrations, and they're often brittle, expensive, and hard to maintain.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> Company spends $80K building a custom platform, then realizes they need AI features. Adding AI costs another $50K+ and takes 6 months.
              </p>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Scaling Complexity</h3>
              <p className="text-gray-300 mb-4">
                Custom apps often don't scale well. Infrastructure, performance optimization, and reliability become ongoing challenges that require constant investment.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> SaaS startup's custom platform works for 100 users but crashes at 500. Rebuild costs $200K and 8 months of lost growth.
              </p>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Hidden Maintenance Costs</h3>
              <p className="text-gray-300 mb-4">
                Ongoing maintenance, security updates, and platform upgrades add 20-30% annual costs. Most agencies don't disclose this upfront.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> E-commerce platform costs $100K to build, but requires $25-30K/year in maintenance. After 3 years, total cost is $175K+.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* How ClearForge Custom Development Works */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            How ClearForge Custom Development Works
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We build on The Foundry platform, which means your application inherits enterprise-grade intelligence, infrastructure, and scalability from day one.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Custom Applications</h3>
              <p className="text-gray-300 mb-4">
                Built on The Foundry platform with all the intelligence included. You own the application, we provide the AI engine underneath.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue mt-1">•</span>
                  <div>
                    <strong>Custom business applications:</strong> CRM systems, project management tools, client portals, internal operations platforms
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue mt-1">•</span>
                  <div>
                    <strong>Industry-specific solutions:</strong> Healthcare, real estate, consulting, professional services, e-commerce
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue mt-1">•</span>
                  <div>
                    <strong>Integration with your systems:</strong> Slack, Gmail, Salesforce, HubSpot, QuickBooks, custom databases
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue mt-1">•</span>
                  <div>
                    <strong>Full code ownership and IP rights:</strong> You own everything. No licensing fees. No vendor lock-in.
                  </div>
                </li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">White-Label Solutions</h3>
              <p className="text-gray-300 mb-4">
                Agencies and enterprises can license The Foundry as white-label. Your brand, our platform intelligence.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-purple-light mt-1">•</span>
                  <div>
                    <strong>Complete white-label platform access:</strong> Rebrand The Foundry Platform as your own product
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-purple-light mt-1">•</span>
                  <div>
                    <strong>Your branding, your customers:</strong> We stay invisible. You own the customer relationship.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-purple-light mt-1">•</span>
                  <div>
                    <strong>We provide the AI infrastructure:</strong> 48+ microservices, intelligence routing, cost optimization
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-purple-light mt-1">•</span>
                  <div>
                    <strong>Revenue share or licensing models:</strong> Flexible commercial terms based on your go-to-market strategy
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-accent-pink">What Makes Foundry-Built Apps Different</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-white">Intelligence Included</h4>
                <p className="text-sm text-gray-400">
                  Every app has access to The Foundry's 48+ AI microservices. Communication intelligence, research, data processing, content generation - all built in.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Scales Automatically</h4>
                <p className="text-sm text-gray-400">
                  Built on proven cloud infrastructure. Handles 10 users or 10,000 without code changes. Auto-scaling, caching, and optimization included.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">You Control Everything</h4>
                <p className="text-sm text-gray-400">
                  Full access to code, infrastructure, and data. Deploy to your own cloud. Modify anything. No platform fees after delivery.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Development Process */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Transparent, collaborative, and ownership-focused. You're involved at every stage.
          </p>

          <div className="space-y-6">
            <Card variant="elevated" className="border-l-4 border-primary-blue">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-primary-blue">1</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Discovery & Scoping (1-2 weeks)</h3>
                  <p className="text-gray-300 mb-4">
                    We understand your business problem, requirements, and goals. Define clear scope, timelines, and deliverables.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">What you get:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Detailed requirements document</li>
                      <li>• Technical architecture plan</li>
                      <li>• Project timeline and milestones</li>
                      <li>• Fixed-price proposal or monthly retainer options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-secondary-purple-light">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-secondary-purple-light">2</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Design & Planning (1-2 weeks)</h3>
                  <p className="text-gray-300 mb-4">
                    System architecture, UI/UX design, technical planning, and infrastructure setup. You review and approve before we build.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">What you get:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Wireframes and UI mockups</li>
                      <li>• System architecture diagrams</li>
                      <li>• Data models and integration plans</li>
                      <li>• Security and compliance review</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-accent-pink">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-accent-pink">3</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Build & Iterate (4-12 weeks)</h3>
                  <p className="text-gray-300 mb-4">
                    We build on The Foundry platform in 2-week sprints. You review working software every sprint. Changes and refinements are expected.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">What you get:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Working software every 2 weeks</li>
                      <li>• Weekly progress updates and demos</li>
                      <li>• Access to staging environment</li>
                      <li>• Continuous testing and quality assurance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-blue-400">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-blue-400">4</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Deploy & Transfer (1-2 weeks)</h3>
                  <p className="text-gray-300 mb-4">
                    We deploy to your infrastructure (or ours initially), train your team, document everything, and transfer full ownership.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">What you get:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Complete source code and documentation</li>
                      <li>• Deployment scripts and infrastructure setup</li>
                      <li>• Team training (technical and end-user)</li>
                      <li>• 30-day post-launch support included</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Real Project Examples */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Real Custom Development Examples
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            These are actual projects we've built or would build using The Foundry platform.
          </p>

          <div className="space-y-8">
            <Card variant="elevated" className="border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-semibold text-purple-400 block mb-2">CONSULTING FIRM</span>
                  <h3 className="text-2xl font-bold">Custom Client Portal & Operations Platform</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                <strong>The Problem:</strong> Consulting firm managing 15+ simultaneous client engagements across Slack, email, Google Drive, and spreadsheets.
                Lost 10-15 hours/week to context switching and manual updates.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>What We Built:</strong> Custom operations platform on The Foundry that centralizes all client communications, automatically extracts action items,
                tracks project status, and generates client reports. Client portal shows real-time progress without manual updates.
              </p>
              <div className="grid md:grid-cols-3 gap-4 bg-gray-800 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-400">Timeline</p>
                  <p className="font-semibold">8 weeks to launch</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Investment</p>
                  <p className="font-semibold">$45K (fixed price)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Results</p>
                  <p className="font-semibold">60% admin time reduction</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-semibold text-blue-400 block mb-2">REAL ESTATE AGENCY</span>
                  <h3 className="text-2xl font-bold">AI-Powered Listing Management & Client Matching</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                <strong>The Problem:</strong> Agency with 200+ listings struggled to match clients to properties. Agents spent hours manually reviewing listings
                and writing custom property descriptions for different client types.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>What We Built:</strong> Custom platform that analyzes client preferences, automatically matches properties, generates personalized descriptions,
                and creates comparison reports. AI extracts property features from photos and descriptions.
              </p>
              <div className="grid md:grid-cols-3 gap-4 bg-gray-800 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-400">Timeline</p>
                  <p className="font-semibold">10 weeks to launch</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Investment</p>
                  <p className="font-semibold">$65K (fixed price)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Results</p>
                  <p className="font-semibold">3x faster client matching</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-semibold text-green-400 block mb-2">MARKETING AGENCY (WHITE-LABEL)</span>
                  <h3 className="text-2xl font-bold">Rebranded Foundry Platform for Client Campaigns</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                <strong>The Problem:</strong> Marketing agency wanted to offer AI-powered campaign management to clients but didn't have the technical capability
                to build and maintain a platform.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>What We Built:</strong> White-label version of The Foundry with agency branding. They sell it to clients as their own product.
                We handle infrastructure, updates, and support behind the scenes.
              </p>
              <div className="grid md:grid-cols-3 gap-4 bg-gray-800 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-400">Timeline</p>
                  <p className="font-semibold">4 weeks to rebrand</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Model</p>
                  <p className="font-semibold">Revenue share (30%)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Results</p>
                  <p className="font-semibold">5 clients in first quarter</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Pricing & Engagement Models */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Pricing & Engagement Models
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Transparent pricing. No hidden costs. You choose the model that fits your budget and timeline.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Fixed-Price Projects</h3>
              <p className="text-gray-300 mb-6">
                We scope the project, provide a fixed quote, and deliver on that price. Best for well-defined applications with clear requirements.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Small Projects ($20K-$40K)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Simple custom applications (4-6 weeks)</li>
                    <li>• Single integration or workflow</li>
                    <li>• 1-2 user roles, basic features</li>
                    <li>• Example: Client portal, intake system</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Medium Projects ($40K-$80K)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Multi-feature applications (8-12 weeks)</li>
                    <li>• Multiple integrations</li>
                    <li>• 3-5 user roles, complex workflows</li>
                    <li>• Example: Operations platform, CRM</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Large Projects ($80K-$150K+)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Enterprise applications (12-20 weeks)</li>
                    <li>• Complex integrations and data migrations</li>
                    <li>• Advanced AI features, multi-tenant</li>
                    <li>• Example: Industry platform, SaaS product</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Monthly Retainer</h3>
              <p className="text-gray-300 mb-6">
                Ongoing development partnership. We work on your roadmap month-to-month. Best for evolving products or long-term projects.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Part-Time ($15K-$25K/month)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• 40-60 hours/month of development</li>
                    <li>• Feature additions and improvements</li>
                    <li>• Maintenance and support included</li>
                    <li>• Best for: Ongoing product development</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Full-Time ($35K-$50K/month)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• 120-160 hours/month of development</li>
                    <li>• Dedicated team (2-3 developers)</li>
                    <li>• Priority support and rapid iterations</li>
                    <li>• Best for: Fast-moving products, agencies</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">White-Label Licensing</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Revenue share: 20-30% of your revenue</li>
                    <li>• OR flat licensing: $5K-$15K/month</li>
                    <li>• Includes infrastructure and updates</li>
                    <li>• Best for: Agencies reselling our platform</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-gray-800 to-gray-900">
            <h3 className="text-xl font-semibold mb-4">What's Included in Every Engagement</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Full source code ownership</li>
                  <li>✓ Complete documentation</li>
                  <li>✓ Infrastructure setup</li>
                  <li>✓ Deployment scripts</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Team training (technical + users)</li>
                  <li>✓ 30-day post-launch support</li>
                  <li>✓ Weekly progress updates</li>
                  <li>✓ Quality assurance testing</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Access to Foundry intelligence</li>
                  <li>✓ Security & compliance review</li>
                  <li>✓ Performance optimization</li>
                  <li>✓ Cloud infrastructure guidance</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* When to Choose Custom vs Products */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Custom Development vs. Foundry Products
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="border-2 border-green-500/30">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Choose Custom Development If...</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>Industry-specific workflows:</strong> Your business has unique processes that don't fit standard products
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>White-label needs:</strong> You want to resell platform capabilities under your own brand
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>Complex integrations:</strong> You need to connect multiple legacy systems or custom databases
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>Full control required:</strong> You want to own the code, infrastructure, and deployment
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>Budget for upfront investment:</strong> You have $20K-$150K+ to build the right solution once
                  </div>
                </li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Choose Foundry Products If...</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <strong>Standard business operations:</strong> Multi-project management, communication, task tracking
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <strong>Fast time-to-value:</strong> You want to start using the platform immediately
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <strong>Lower upfront cost:</strong> Prefer subscription pricing over custom development investment
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <strong>Standard integrations:</strong> Slack, Gmail, Google Drive, common tools
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <strong>Ongoing updates included:</strong> You want new features and improvements without additional cost
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated" className="mt-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 border-purple-500/30">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">You Can Do Both</h3>
            <p className="text-gray-300 mb-4">
              Many clients start with <a href="/foundry/business/os" className="text-primary-blue hover:underline">Foundry Business: OS</a> for standard operations,
              then add custom development for industry-specific features. Or vice versa: build custom first, then migrate standard features to our products.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Example:</strong> Consulting firm uses Business: OS for client communication and project tracking (subscription),
              plus custom-built reporting dashboard for industry-specific compliance needs ($35K one-time).
            </p>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss what you need, how The Foundry platform can help, and what ownership looks like for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=partnership" size="lg">
              Discuss Your Project
            </Button>
            <Button href="/services/consulting" size="lg" variant="outline">
              Or Start with Consulting
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
