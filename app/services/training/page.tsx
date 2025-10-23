import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Training & Enablement - Build Capability, Not Dependency',
  description: 'Workshops, bootcamps, and ongoing enablement. We teach your team how enterprise systems work.',
});

export default function TrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Training & Enablement: Build Capability, Not Dependency
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            We teach your team how enterprise intelligence systems actually work. Build internal capability that lasts.
            Virtual or on-site. Hands-on implementation, not just theory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=partnership" size="lg">
              Inquire About Training
            </Button>
            <Button href="/foundry/platform" size="lg" variant="outline">
              Explore The Platform
            </Button>
          </div>
        </div>
      </Section>

      {/* The Problem with Traditional Training */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            The Problem with Traditional Tech Training
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Most training programs teach generic concepts or vendor-specific tools. Your team leaves with certificates but no practical ability to implement.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Theory Without Practice</h3>
              <p className="text-gray-300 mb-4">
                Generic AI/ML courses teach concepts like "neural networks" and "transformers" but don't show you how to actually implement
                intelligence in your business operations.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> Team spends $15K sending 3 people to AI bootcamp. They learn PyTorch but can't build a single useful business workflow.
              </p>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Vendor Lock-In Education</h3>
              <p className="text-gray-300 mb-4">
                Platform-specific training (Salesforce, HubSpot, etc.) teaches you their tool, not the underlying principles. Switch platforms and start over.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> Company invests $25K training team on Salesforce. Switch to HubSpot 2 years later - all training becomes obsolete.
              </p>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">No Real-World Application</h3>
              <p className="text-gray-300 mb-4">
                Training uses toy examples and sample data. Your team can't translate it to your actual business problems, systems, or data.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> Team learns to build chatbots in training. Can't apply it to their CRM data because training didn't cover integrations or real-world constraints.
              </p>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">One-Time Knowledge Dump</h3>
              <p className="text-gray-300 mb-4">
                Single training event with no follow-up. Team forgets 70% within 2 weeks because they don't immediately apply what they learned.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> Company pays for 2-day workshop. 6 weeks later, no one can remember how to implement what was taught. Zero ROI.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* How ClearForge Training Works */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            How ClearForge Training Works
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We teach foundational principles through hands-on implementation. Your team builds real capabilities using your actual business problems.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-xl font-semibold mb-3 text-primary-blue">Team Workshops (1-2 Days)</h3>
              <p className="text-gray-300 mb-4">
                Intensive, focused training on specific topics. Mix of teaching, live demos, and hands-on exercises.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <p className="text-sm font-semibold mb-2">Format:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Virtual or on-site</li>
                  <li>• 6-8 hours per day</li>
                  <li>• 5-15 participants ideal</li>
                  <li>• Mix of presentation + hands-on</li>
                </ul>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• AI & Automation fundamentals</li>
                <li>• System architecture patterns</li>
                <li>• Data strategy & analytics</li>
                <li>• Intelligence platform implementation</li>
                <li>• Custom topics available</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-xl font-semibold mb-3 text-secondary-purple-light">Technical Bootcamps (1-2 Weeks)</h3>
              <p className="text-gray-300 mb-4">
                Deep dives for technical teams. Build real implementations during the training, not just learn concepts.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <p className="text-sm font-semibold mb-2">Format:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Virtual or on-site</li>
                  <li>• 4-6 hours per day (flexible)</li>
                  <li>• 3-8 participants ideal</li>
                  <li>• 80% hands-on implementation</li>
                </ul>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Build real projects during training</li>
                <li>• Code reviews & mentoring</li>
                <li>• Architecture design sessions</li>
                <li>• Integration patterns & best practices</li>
                <li>• Deploy working systems by end</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-xl font-semibold mb-3 text-accent-pink">Ongoing Enablement (Monthly)</h3>
              <p className="text-gray-300 mb-4">
                Continuous learning programs. Your team keeps improving as they implement, with our support.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <p className="text-sm font-semibold mb-2">Format:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Monthly 2-hour workshops</li>
                  <li>• Weekly office hours (optional)</li>
                  <li>• Slack/email support</li>
                  <li>• 3-6 month programs typical</li>
                </ul>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Monthly workshops on new topics</li>
                <li>• Weekly Q&A and troubleshooting</li>
                <li>• Access to templates & resources</li>
                <li>• Community support channel</li>
                <li>• Implementation coaching</li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-green-500/30">
            <h3 className="text-2xl font-bold mb-4 text-green-400">What Makes Our Training Different</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-white">Your Business, Your Problems</h4>
                <p className="text-sm text-gray-400">
                  We don't use toy examples. Training is customized to your actual business problems, systems, and data. You leave with something you can use immediately.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Principles, Not Tools</h4>
                <p className="text-sm text-gray-400">
                  We teach how enterprise intelligence systems work, not just how to use one vendor's product. Knowledge that applies regardless of tools you choose.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Implementation-Focused</h4>
                <p className="text-sm text-gray-400">
                  80% of training time is hands-on. Your team builds, implements, and deploys during the training. No waiting weeks to apply what they learned.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* What We Teach: Deep Dive */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            What Your Team Will Actually Learn
          </h2>

          <div className="space-y-8">
            <Card variant="elevated" className="border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">AI & Intelligence Systems Implementation</h3>
              <p className="text-gray-300 mb-4">
                <strong>What we teach:</strong> How to implement AI that actually works in business operations. Not ML theory - practical implementation patterns.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Core Concepts:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Intelligence routing (when to use which model)</li>
                    <li>• Prompt engineering for business workflows</li>
                    <li>• Cost optimization (caching, batching, model selection)</li>
                    <li>• Error handling and fallback strategies</li>
                    <li>• Context management and memory</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Hands-On Projects:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Build automated email response system</li>
                    <li>• Create intelligent document processing</li>
                    <li>• Implement research and summarization workflows</li>
                    <li>• Design guardrails and safety controls</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">System Architecture & Integration Patterns</h3>
              <p className="text-gray-300 mb-4">
                <strong>What we teach:</strong> How to design systems that scale, integrate, and evolve. Enterprise architecture principles without enterprise complexity.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Core Concepts:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Microservices architecture (when & why)</li>
                    <li>• Event-driven systems and webhooks</li>
                    <li>• API design and integration patterns</li>
                    <li>• Data synchronization strategies</li>
                    <li>• Cloud infrastructure basics (GCP/AWS)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Hands-On Projects:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Design multi-system integration architecture</li>
                    <li>• Build event-driven workflow system</li>
                    <li>• Implement API gateway pattern</li>
                    <li>• Deploy scalable cloud services</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-300">Data Strategy & Business Intelligence</h3>
              <p className="text-gray-300 mb-4">
                <strong>What we teach:</strong> How to turn operational data into actionable intelligence. Not "big data" theory - practical analytics implementation.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Core Concepts:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Data model design for business operations</li>
                    <li>• Automated data collection and enrichment</li>
                    <li>• Analytics dashboards and reporting</li>
                    <li>• Decision support systems</li>
                    <li>• Data privacy and compliance basics</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Hands-On Projects:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Design operational data models</li>
                    <li>• Build automated reporting systems</li>
                    <li>• Create business intelligence dashboards</li>
                    <li>• Implement data quality monitoring</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Using The Foundry Platform</h3>
              <p className="text-gray-300 mb-4">
                <strong>What we teach:</strong> How to build on The Foundry platform. Leverage enterprise intelligence for custom applications and workflows.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Core Concepts:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Platform architecture and capabilities</li>
                    <li>• Using intelligence microservices</li>
                    <li>• Custom development on Foundry</li>
                    <li>• Integration patterns and APIs</li>
                    <li>• Best practices and anti-patterns</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Hands-On Projects:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Build custom application on Foundry</li>
                    <li>• Integrate with existing systems</li>
                    <li>• Create automated workflows</li>
                    <li>• Deploy to production</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Real Training Examples */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Real Training Engagements
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            These are actual training programs we've delivered or would deliver.
          </p>

          <div className="space-y-8">
            <Card variant="elevated" className="border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-semibold text-purple-400 block mb-2">CONSULTING FIRM - TECHNICAL BOOTCAMP</span>
                  <h3 className="text-2xl font-bold">AI Implementation for Client Operations</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                <strong>The Challenge:</strong> Consulting firm wanted to implement AI for client communication management but technical team had no AI experience.
                Couldn't afford to hire AI specialists.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>What We Delivered:</strong> 2-week technical bootcamp where their team built an actual AI-powered client communication system.
                Trained on intelligence routing, prompt engineering, and system integration. Team deployed working system by end of week 2.
              </p>
              <div className="grid md:grid-cols-4 gap-4 bg-gray-800 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-400">Format</p>
                  <p className="font-semibold">2-week bootcamp</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Participants</p>
                  <p className="font-semibold">5 developers</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Investment</p>
                  <p className="font-semibold">$35K total</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Outcome</p>
                  <p className="font-semibold">Working system deployed</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-semibold text-blue-400 block mb-2">SAAS STARTUP - ONGOING ENABLEMENT</span>
                  <h3 className="text-2xl font-bold">Platform Architecture & Scaling Training</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                <strong>The Challenge:</strong> Startup growing from 5 to 25 employees needed to level up entire team on system architecture, API design, and scaling patterns.
                One-time training wouldn't work - team needed ongoing support as they implemented.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>What We Delivered:</strong> 6-month ongoing enablement program. Monthly workshops on architecture topics, weekly office hours for troubleshooting,
                Slack support channel. Team built scalable architecture incrementally with our guidance.
              </p>
              <div className="grid md:grid-cols-4 gap-4 bg-gray-800 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-400">Format</p>
                  <p className="font-semibold">6-month program</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Participants</p>
                  <p className="font-semibold">12 team members</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Investment</p>
                  <p className="font-semibold">$8K/month ($48K total)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Outcome</p>
                  <p className="font-semibold">10x traffic growth supported</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-semibold text-green-400 block mb-2">MARKETING AGENCY - TEAM WORKSHOP</span>
                  <h3 className="text-2xl font-bold">AI for Content Operations Workshop</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                <strong>The Challenge:</strong> Agency spending $20K+/month on AI tools (ChatGPT, Jasper, Copy.ai) but no one understood cost optimization or how to build
                cohesive workflows. Wanted to reduce costs and increase capability.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>What We Delivered:</strong> 2-day intensive workshop on AI cost optimization, intelligent routing, and workflow design. Taught team how to reduce
                costs by 70% while improving output quality. Implemented new system during workshop.
              </p>
              <div className="grid md:grid-cols-4 gap-4 bg-gray-800 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-400">Format</p>
                  <p className="font-semibold">2-day workshop</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Participants</p>
                  <p className="font-semibold">8 team members</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Investment</p>
                  <p className="font-semibold">$12K total</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Outcome</p>
                  <p className="font-semibold">70% cost reduction</p>
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
            Training Pricing & Engagement Models
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Transparent pricing. Custom programs designed for your team's specific needs and learning objectives.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Team Workshops</h3>
              <p className="text-gray-300 mb-6">
                1-2 day intensive training on specific topics. Best for leveling up entire teams quickly.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">1-Day Workshop ($8K-$12K)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• 6-8 hours of training</li>
                    <li>• Up to 15 participants</li>
                    <li>• Single topic deep dive</li>
                    <li>• Materials and resources included</li>
                    <li>• Virtual or on-site</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">2-Day Workshop ($15K-$22K)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• 12-16 hours of training</li>
                    <li>• Up to 15 participants</li>
                    <li>• Multiple topics or deep implementation</li>
                    <li>• Hands-on projects included</li>
                    <li>• Virtual or on-site</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Technical Bootcamps</h3>
              <p className="text-gray-300 mb-6">
                1-2 week intensive programs for technical teams. Build real implementations during training.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">1-Week Bootcamp ($25K-$35K)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• 20-30 hours of training</li>
                    <li>• 3-8 technical participants</li>
                    <li>• Build working implementation</li>
                    <li>• Code reviews and mentoring</li>
                    <li>• Virtual or on-site</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">2-Week Bootcamp ($45K-$60K)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• 40-60 hours of training</li>
                    <li>• 3-8 technical participants</li>
                    <li>• Deploy production-ready system</li>
                    <li>• Architecture design sessions</li>
                    <li>• Virtual or on-site</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Ongoing Enablement</h3>
              <p className="text-gray-300 mb-6">
                Monthly programs for continuous learning. Support your team as they implement and grow.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Standard Program ($6K-$10K/month)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Monthly 2-hour workshop</li>
                    <li>• Weekly 1-hour office hours</li>
                    <li>• Slack/email support</li>
                    <li>• Access to resources and templates</li>
                    <li>• 3-6 month commitments typical</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Premium Program ($12K-$18K/month)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Bi-weekly workshops</li>
                    <li>• Unlimited office hours</li>
                    <li>• Implementation coaching</li>
                    <li>• Custom content development</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-gray-800 to-gray-900">
            <h3 className="text-xl font-semibold mb-4">What's Included in Every Training Program</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Customized content for your business</li>
                  <li>✓ Hands-on implementation projects</li>
                  <li>✓ Training materials and resources</li>
                  <li>✓ Code samples and templates</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Recording of all sessions (virtual)</li>
                  <li>✓ Follow-up Q&A sessions</li>
                  <li>✓ Access to our community Slack</li>
                  <li>✓ Certificate of completion</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Post-training implementation support</li>
                  <li>✓ Optional ongoing enablement</li>
                  <li>✓ Team capability assessment</li>
                  <li>✓ Custom learning paths</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Training vs Consulting vs Products */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Training vs. Consulting vs. Custom Development
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated" className="border-2 border-green-500/30">
              <h3 className="text-xl font-bold mb-4 text-green-400">Choose Training If...</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <div>You want to build internal capability</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <div>Your team will implement the work</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <div>You want knowledge that lasts beyond the engagement</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <div>You have technical resources who need upskilling</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <div>Budget: $8K-$60K for training program</div>
                </li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-blue-500/30">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Choose Consulting If...</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <div>You need strategy + implementation partnership</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <div>You want us to do the work alongside your team</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <div>Your team needs hands-on support, not just training</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <div>You want outcomes delivered, not just capability built</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <div>Budget: $15K-$75K for 4-12 week engagement</div>
                </li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-purple-500/30">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Choose Custom Dev If...</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <div>You want us to build the solution for you</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <div>Your team doesn't have capacity to implement</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <div>You want working software, not training</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <div>You need custom features or white-label solutions</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <div>Budget: $20K-$150K+ for custom application</div>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated" className="mt-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 border-purple-500/30">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">You Can Combine Services</h3>
            <p className="text-gray-300 mb-4">
              Many clients start with a workshop to level up the team, then add consulting for implementation support, then training again as team grows.
              Or: custom development project + training so your team can maintain it.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Example:</strong> SaaS startup: 2-day AI workshop ($15K) → 3-month consulting engagement ($45K) → ongoing enablement program ($8K/month for 6 months).
              Total: $108K to build capability + deliver outcomes + ensure long-term success.
            </p>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Invest in Your Team's Capability
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Build internal expertise that lasts. Let's design a training program that fits your team's needs and learning objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=partnership" size="lg">
              Plan Your Training Program
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
