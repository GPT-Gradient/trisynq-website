import { Metadata } from 'next';
import { Rocket, DollarSign, Lock, TrendingDown, CheckCircle, Zap, Users, BookOpen, Code, Wrench, Target, Mail, MessageSquare, Store, Search, Lightbulb } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Xynergy: Powering the Forge',
  description: 'The AI engine built for clarity, not control.',
});

export default function XynergyLaunchPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block bg-accent-pink/20 rounded-full px-6 py-2 mb-6 border border-accent-pink/30">
            <p className="text-sm font-bold text-accent-pink">COMING SOON - 2025</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Xynergy:</span>
            <br />
            Powering the Forge
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The AI engine built for clarity, not control.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Explainable pipelines. Observable outcomes. Operator-first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/get-started" size="lg">
              Join the Waitlist
            </Button>
            <Button href="/community" variant="outline" size="lg">
              Explore Community
            </Button>
          </div>
        </div>
      </Section>

      {/* The Problem Section */}
      <Section background="dark">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          The <span className="text-gradient">Subscription Trap</span> Bleeding SMBs Dry
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="bordered">
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="w-8 h-8 text-accent-pink" />
              <h3 className="text-2xl font-bold text-white">Subscription Creep</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Start at $50/month. Add features. Get locked in. Suddenly you&apos;re paying $500-5,000/month for capabilities that should cost you $50.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Email marketing: $300-2,000/month</li>
              <li>• CRM platforms: $500-3,000/month</li>
              <li>• Social media tools: $200-1,000/month</li>
              <li>• Customer support: $400-2,500/month</li>
            </ul>
          </Card>

          <Card variant="bordered">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-primary-blue" />
              <h3 className="text-2xl font-bold text-white">Vendor Lock-In</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your data trapped in proprietary systems. Your workflows dependent on their features. Your business held hostage by annual contracts.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Can&apos;t export data properly</li>
              <li>• Integration costs keep rising</li>
              <li>• Feature removal without notice</li>
              <li>• Price increases every renewal</li>
            </ul>
          </Card>

          <Card variant="bordered">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-secondary-purple-light" />
              <h3 className="text-2xl font-bold text-white">Out of Reach</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Enterprise capabilities seem impossible. The tools exist—open source, free, powerful—but nobody teaches you how to use them.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Technical documentation too complex</li>
              <li>• No clear implementation guides</li>
              <li>• Missing the business context</li>
              <li>• No support for non-technical users</li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30 text-center">
          <p className="text-xl font-bold text-accent-pink">
            You&apos;re paying enterprise prices for basic capabilities. We&apos;re going to change that.
          </p>
        </div>
      </Section>

      {/* Our Solution Section */}
      <Section background="medium">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          A <span className="text-gradient">Comprehensive Training Platform</span> for Independence
        </h2>

        <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
          We don&apos;t just tell you &quot;use this tool instead.&quot; We teach you how to build, implement, and automate enterprise-grade systems using free and low-cost alternatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card variant="elevated">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary-blue" />
              <h3 className="text-xl font-bold text-white">Complete Transparency</h3>
            </div>
            <p className="text-gray-300">
              Every methodology documented. Every decision explained. Every tool comparison detailed. We show you exactly how we built this platform using the same tools we teach.
            </p>
          </Card>

          <Card variant="elevated">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-8 h-8 text-secondary-purple-light" />
              <h3 className="text-xl font-bold text-white">Step-by-Step Implementation</h3>
            </div>
            <p className="text-gray-300">
              Not just theory. Complete installation guides, configuration walkthroughs, video tutorials, and template packages that get you running fast.
            </p>
          </Card>

          <Card variant="elevated">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-accent-pink" />
              <h3 className="text-xl font-bold text-white">Real Business Context</h3>
            </div>
            <p className="text-gray-300">
              We translate technical documentation into business outcomes. You learn what to build, why it matters, and how it replaces expensive subscriptions.
            </p>
          </Card>

          <Card variant="elevated">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary-blue" />
              <h3 className="text-xl font-bold text-white">Community Support</h3>
            </div>
            <p className="text-gray-300">
              Join businesses doing the same thing. Share learnings. Get help. Build together. The community makes vendor independence sustainable.
            </p>
          </Card>
        </div>

        <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30">
          <h4 className="text-2xl font-bold mb-6 text-center">Built on ClearForge Foundry AI Platform</h4>
          <p className="text-lg text-gray-300 text-center mb-4">
            This entire training platform was created using the ClearForge Foundry AI system—the same transparent, locally-controlled AI we teach in the platform. We use exactly what we teach you to build.
          </p>
          <p className="text-accent-pink font-semibold text-center">
            Proof of concept isn&apos;t just theory. It&apos;s this page you&apos;re reading right now.
          </p>
        </div>
      </Section>

      {/* Freemium Tier Structure Section */}
      <Section background="dark">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-gradient">Freemium Tier Structure</span>
        </h2>

        <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
          Start free. Upgrade when you&apos;re ready to implement. Scale to advanced automation only when you need it. No vendor games—just clear value at every level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Free Tier */}
          <Card variant="bordered" className="border-2 border-primary-blue">
            <div className="text-center mb-6">
              <div className="inline-block bg-primary-blue/20 rounded-full px-4 py-2 mb-3">
                <p className="text-sm font-bold text-primary-blue">FREE TIER</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Getting Started</h3>
              <p className="text-4xl font-bold text-primary-blue mb-1">$0</p>
              <p className="text-gray-400 text-sm">Forever free</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Access to foundational concepts</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Basic how-tos and overviews</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Introduction to alternative tools</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Community forum access</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Tool comparison guides</p>
              </div>
            </div>

            <Button href="/get-started" variant="outline" className="w-full">
              Start Free
            </Button>
          </Card>

          {/* Tier 1 */}
          <Card variant="bordered" className="border-2 border-accent-pink">
            <div className="text-center mb-6">
              <div className="inline-block bg-accent-pink/20 rounded-full px-4 py-2 mb-3">
                <p className="text-sm font-bold text-accent-pink">TIER 1</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Implementation</h3>
              <p className="text-4xl font-bold text-accent-pink mb-1">$XX</p>
              <p className="text-gray-400 text-sm">Per month (TBD)</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                <p className="text-gray-300"><strong className="text-white">Everything in Free</strong> +</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Complete step-by-step installation guides</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Detailed configuration walkthroughs</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Video tutorials for each setup</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Template packages and starter kits</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent-pink mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Email support</p>
              </div>
            </div>

            <Button href="/get-started" className="w-full">
              Join Waitlist
            </Button>
          </Card>

          {/* Tier 2 */}
          <Card variant="bordered" className="border-2 border-secondary-purple-light">
            <div className="text-center mb-6">
              <div className="inline-block bg-secondary-purple-light/20 rounded-full px-4 py-2 mb-3">
                <p className="text-sm font-bold text-secondary-purple-light">TIER 2</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Automation & Integration</h3>
              <p className="text-4xl font-bold text-secondary-purple-light mb-1">$XX</p>
              <p className="text-gray-400 text-sm">Per month (TBD)</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-purple-light mt-0.5 flex-shrink-0" />
                <p className="text-gray-300"><strong className="text-white">Everything in Tier 1</strong> +</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-purple-light mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Advanced automation workflows</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-purple-light mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Multi-tool integrations</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-purple-light mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Custom implementation support</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-purple-light mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Live Q&A sessions</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-purple-light mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Priority support</p>
              </div>
            </div>

            <Button href="/get-started" variant="outline" className="w-full">
              Join Waitlist
            </Button>
          </Card>
        </div>

        <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20 text-center">
          <p className="text-gray-400">
            <strong className="text-white">Pricing Philosophy:</strong> We&apos;re setting prices based on real value delivered—not arbitrary market rates. Pricing will be finalized during beta testing based on actual implementation success and cost savings achieved.
          </p>
        </div>
      </Section>

      {/* First Five Topics Section */}
      <Section background="medium">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          First Five Topics: <span className="text-gradient">Complete Coverage Across Tiers</span>
        </h2>

        <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
          Each topic builds from free foundational knowledge to paid implementation guides to advanced automation. You control how deep you go.
        </p>

        <div className="space-y-8">
          {/* Topic 1: Email Marketing */}
          <Card variant="bordered">
            <div className="flex items-start gap-4">
              <Mail className="w-12 h-12 text-accent-pink flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Email Marketing Automation</h3>

                <div className="space-y-4">
                  <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                    <p className="text-sm font-bold text-primary-blue mb-2">FREE TIER</p>
                    <p className="text-gray-300">
                      &quot;Why you don&apos;t need Mailchimp/Constant Contact - Overview of alternatives&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Understanding the email marketing landscape, comparing SendGrid, Postmark, Amazon SES. Why paying $300-2,000/month is unnecessary.
                    </p>
                  </div>

                  <div className="bg-accent-pink/10 rounded-xl p-4 border border-accent-pink/20">
                    <p className="text-sm font-bold text-accent-pink mb-2">TIER 1: IMPLEMENTATION</p>
                    <p className="text-gray-300">
                      &quot;Complete SendGrid + n8n setup guide - Build your own automation platform&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Step-by-step installation, configuration, template building, list management, basic automation workflows. Replace your $500/month tool.
                    </p>
                  </div>

                  <div className="bg-secondary-purple-light/10 rounded-xl p-4 border border-secondary-purple-light/20">
                    <p className="text-sm font-bold text-secondary-purple-light mb-2">TIER 2: AUTOMATION & INTEGRATION</p>
                    <p className="text-gray-300">
                      &quot;Advanced segmentation, A/B testing, and CRM integration workflows&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Sophisticated automation, behavior-based campaigns, CRM sync, analytics dashboards, custom reporting. Enterprise-level capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Topic 2: CRM */}
          <Card variant="bordered">
            <div className="flex items-start gap-4">
              <Users className="w-12 h-12 text-primary-blue flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Relationship Management (CRM)</h3>

                <div className="space-y-4">
                  <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                    <p className="text-sm font-bold text-primary-blue mb-2">FREE TIER</p>
                    <p className="text-gray-300">
                      &quot;Enterprise CRM capabilities without Salesforce - Platform comparison&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      What makes a CRM enterprise-grade. Comparing Baserow, NocoDB, Airtable alternatives. Why $500-3,000/month isn&apos;t necessary.
                    </p>
                  </div>

                  <div className="bg-accent-pink/10 rounded-xl p-4 border border-accent-pink/20">
                    <p className="text-sm font-bold text-accent-pink mb-2">TIER 1: IMPLEMENTATION</p>
                    <p className="text-gray-300">
                      &quot;Building your CRM with Baserow + Automation - Step-by-step implementation&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Database design, field configuration, relationship setup, views and filters, form creation, basic automation. Your custom CRM in days.
                    </p>
                  </div>

                  <div className="bg-secondary-purple-light/10 rounded-xl p-4 border border-secondary-purple-light/20">
                    <p className="text-sm font-bold text-secondary-purple-light mb-2">TIER 2: AUTOMATION & INTEGRATION</p>
                    <p className="text-gray-300">
                      &quot;Sales pipeline automation, email tracking, and custom reporting dashboards&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Automated lead scoring, pipeline stage tracking, email integration, activity logging, custom dashboards, forecasting reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Topic 3: AI Customer Service */}
          <Card variant="bordered">
            <div className="flex items-start gap-4">
              <MessageSquare className="w-12 h-12 text-secondary-purple-light flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Customer Service</h3>

                <div className="space-y-4">
                  <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                    <p className="text-sm font-bold text-primary-blue mb-2">FREE TIER</p>
                    <p className="text-gray-300">
                      &quot;Replacing Intercom/Zendesk - AI chatbot fundamentals&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      How AI chatbots work, comparing Rasa, Botpress, Dialogflow. Understanding natural language processing. Why $400-2,500/month is excessive.
                    </p>
                  </div>

                  <div className="bg-accent-pink/10 rounded-xl p-4 border border-accent-pink/20">
                    <p className="text-sm font-bold text-accent-pink mb-2">TIER 1: IMPLEMENTATION</p>
                    <p className="text-gray-300">
                      &quot;Deploying your own AI support bot - Complete setup with Rasa/Botpress&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Installation, training data creation, intent design, conversation flow building, website integration, testing and refinement.
                    </p>
                  </div>

                  <div className="bg-secondary-purple-light/10 rounded-xl p-4 border border-secondary-purple-light/20">
                    <p className="text-sm font-bold text-secondary-purple-light mb-2">TIER 2: AUTOMATION & INTEGRATION</p>
                    <p className="text-gray-300">
                      &quot;Multi-channel support integration, knowledge base automation, sentiment analysis&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Email, SMS, social integration. Automated knowledge base updates. Sentiment tracking. Escalation workflows. Advanced AI training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Topic 4: Social Media Management */}
          <Card variant="bordered">
            <div className="flex items-start gap-4">
              <Zap className="w-12 h-12 text-accent-pink flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Social Media Management</h3>

                <div className="space-y-4">
                  <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                    <p className="text-sm font-bold text-primary-blue mb-2">FREE TIER</p>
                    <p className="text-gray-300">
                      &quot;Stop paying for Buffer/Hootsuite - Social automation basics&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Understanding social media APIs, scheduling vs. automation, content calendar strategies. Why $200-1,000/month tools are overpriced.
                    </p>
                  </div>

                  <div className="bg-accent-pink/10 rounded-xl p-4 border border-accent-pink/20">
                    <p className="text-sm font-bold text-accent-pink mb-2">TIER 1: IMPLEMENTATION</p>
                    <p className="text-gray-300">
                      &quot;Building your social media command center - n8n workflows + scheduling&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      API setup for all platforms, scheduling workflows, content queue management, basic analytics, unified dashboard creation.
                    </p>
                  </div>

                  <div className="bg-secondary-purple-light/10 rounded-xl p-4 border border-secondary-purple-light/20">
                    <p className="text-sm font-bold text-secondary-purple-light mb-2">TIER 2: AUTOMATION & INTEGRATION</p>
                    <p className="text-gray-300">
                      &quot;Cross-platform posting, content recycling, analytics aggregation, AI content ideation&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Automated evergreen content rotation, AI-powered content suggestions, comprehensive analytics, trend monitoring, engagement automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Topic 5: Local Search Optimization */}
          <Card variant="bordered">
            <div className="flex items-start gap-4">
              <Search className="w-12 h-12 text-primary-blue flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Local Search Optimization</h3>

                <div className="space-y-4">
                  <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                    <p className="text-sm font-bold text-primary-blue mb-2">FREE TIER</p>
                    <p className="text-gray-300">
                      &quot;Beyond paying SEO agencies - Understanding local search fundamentals&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      How local search works, Google Business Profile optimization, citation importance, review strategies. Why agencies charge $1,000-5,000/month for basic work.
                    </p>
                  </div>

                  <div className="bg-accent-pink/10 rounded-xl p-4 border border-accent-pink/20">
                    <p className="text-sm font-bold text-accent-pink mb-2">TIER 1: IMPLEMENTATION</p>
                    <p className="text-gray-300">
                      &quot;DIY local SEO implementation - Google Business Profile optimization + citation building&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Complete GBP setup, category optimization, citation building workflows, review request automation, local content creation templates.
                    </p>
                  </div>

                  <div className="bg-secondary-purple-light/10 rounded-xl p-4 border border-secondary-purple-light/20">
                    <p className="text-sm font-bold text-secondary-purple-light mb-2">TIER 2: AUTOMATION & INTEGRATION</p>
                    <p className="text-gray-300">
                      &quot;Automated review management, local content generation, competitor monitoring&quot;
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      AI-powered review responses, automated local content creation, rank tracking, competitor analysis, citation monitoring, reputation management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Proof of Concept Section */}
      <Section background="dark">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-gradient">Proof of Concept</span>: We Use What We Teach
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Rocket className="w-12 h-12 text-accent-pink flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Built on ClearForge Foundry AI</h3>
                <p className="text-gray-300">
                  This entire platform—every page, every guide, every piece of content—was created using the ClearForge Foundry AI system. The same transparent, locally-controlled AI we teach you to implement.
                </p>
              </div>
            </div>

            <div className="bg-primary/30 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-white mb-4 text-lg">We&apos;re Not Just Teaching Theory</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <span>Our website: Built with free and low-cost tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <span>Our content: Created with ClearForge Foundry AI platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <span>Our automation: n8n workflows we&apos;ll teach you</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                  <span>Our infrastructure: Same alternatives we recommend</span>
                </li>
              </ul>
            </div>

            <p className="text-accent-pink font-semibold text-center">
              Proof of concept isn&apos;t a demo. It&apos;s the platform you&apos;re using right now.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="bordered">
              <h4 className="text-xl font-bold text-white mb-4">Real Small Business Examples</h4>
              <p className="text-gray-300 mb-4">
                As we work with beta partners, we&apos;ll document real cost savings with full transparency:
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Before/after monthly costs</li>
                <li>• Implementation time invested</li>
                <li>• Challenges encountered</li>
                <li>• Actual results achieved</li>
                <li>• Methodology improvements made</li>
              </ul>
            </Card>

            <Card variant="bordered">
              <h4 className="text-xl font-bold text-white mb-4">Complete Transparency</h4>
              <p className="text-gray-300 mb-4">
                Every case study will include:
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Business context (anonymized)</li>
                <li>• Tools replaced and costs saved</li>
                <li>• Implementation roadblocks</li>
                <li>• What worked and what didn&apos;t</li>
                <li>• Updated guidance based on learnings</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Escape Vendor Lock-In</span>?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            ClearForge Foundry Launch is coming in 2025. Join the waitlist now to get early access when we launch beta testing.
          </p>

          <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">What You&apos;ll Get as an Early Partner</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                <p className="text-gray-300">First access to training content as it&apos;s released</p>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                <p className="text-gray-300">Beta pricing significantly below standard rates</p>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                <p className="text-gray-300">Direct input on which topics we prioritize</p>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                <p className="text-gray-300">Community of businesses implementing together</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6">
              This follows the same 3-phase beta model as all Continuum projects. Early partners get the best value and biggest impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/get-started" size="lg">
                Join the Waitlist
              </Button>
              <Button href="/beta-program" variant="outline" size="lg">
                Learn About Beta Program
              </Button>
            </div>
          </div>

          <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30">
            <p className="text-lg font-semibold text-accent-pink mb-2">
              Stop paying for vendor lock-in. Start building independence.
            </p>
            <p className="text-gray-400">
              The tools exist. The knowledge exists. We&apos;re just making it accessible.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
