import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Database, Brain, Zap, Wrench, DollarSign } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Training — Learn Enterprise Capabilities',
  description: 'Virtual and on-site training programs for Data, AI, and combined enterprise capabilities. Custom training solutions available.',
  canonical: '/training',
});

export default function TrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Enterprise <span className="text-gradient">Training</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Virtual & On-Site Programs That Demystify Enterprise Technology
          </p>
          <p className="text-lg text-gray-400 mb-8">
            We don&apos;t just teach tools. We teach the thinking behind enterprise data and AI systems—transparently, practically, and without the complexity tax.
          </p>
        </div>
      </Section>

      {/* Why Our Training Is Different */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Training That Actually <span className="text-primary-blue">Transfers</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Perspective</h3>
              <p className="text-gray-400">
                Learn how Fortune 500s actually implement these systems—not just the marketing version.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Hands-On Application</h3>
              <p className="text-gray-400">
                Work with real scenarios from your industry. Leave with implementations, not just slides.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">No Vendor Lock-In</h3>
              <p className="text-gray-400">
                Teach principles and patterns that work across tools—not product training disguised as education.
              </p>
            </div>
          </div>
        </div>

        {/* Training Offerings Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Data Training */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-primary-blue/30 hover:border-primary-blue/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary-blue/20 rounded-full p-4">
                    <Database className="w-10 h-10 text-primary-blue" />
                  </div>
                  <div className="bg-primary-blue/20 text-primary-blue px-4 py-1 rounded-full text-xs font-semibold">
                    Virtual or On-Site
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">Data Training</h2>
                <p className="text-lg text-gray-300 mb-4">
                  Master enterprise data architecture, governance, and analytics without the enterprise complexity.
                </p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Data pipeline design & optimization</li>
                  <li>• Governance frameworks that actually work</li>
                  <li>• Analytics architecture for scale</li>
                  <li>• Real-time data processing patterns</li>
                </ul>
              </div>

              <div className="mt-auto">
                <Button href="/training/data" className="w-full group-hover:bg-primary-blue/90">
                  Explore Data Training
                </Button>
              </div>
            </div>
          </Card>

          {/* AI Training */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-accent-pink/30 hover:border-accent-pink/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-accent-pink/20 rounded-full p-4">
                    <Brain className="w-10 h-10 text-accent-pink" />
                  </div>
                  <div className="bg-accent-pink/20 text-accent-pink px-4 py-1 rounded-full text-xs font-semibold">
                    Virtual or On-Site
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">AI Training</h2>
                <p className="text-lg text-gray-300 mb-4">
                  Cut through the AI hype. Learn to build, deploy, and govern AI systems that actually create value.
                </p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• AI strategy beyond the buzzwords</li>
                  <li>• Model selection & deployment patterns</li>
                  <li>• Responsible AI & governance</li>
                  <li>• ROI measurement & validation</li>
                </ul>
              </div>

              <div className="mt-auto">
                <Button href="/training/ai" variant="outline" className="w-full border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                  Explore AI Training
                </Button>
              </div>
            </div>
          </Card>

          {/* Combined Training */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-secondary-purple/30 hover:border-secondary-purple/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-secondary-purple/20 rounded-full p-4">
                    <Zap className="w-10 h-10 text-secondary-purple-light" />
                  </div>
                  <div className="bg-secondary-purple/20 text-secondary-purple-light px-4 py-1 rounded-full text-xs font-semibold">
                    Virtual or On-Site
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">Data + AI Combined</h2>
                <p className="text-lg text-gray-300 mb-4">
                  The complete picture: how enterprise data and AI systems work together to generate revenue.
                </p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• End-to-end data-to-AI pipelines</li>
                  <li>• Integrated governance frameworks</li>
                  <li>• MLOps & DataOps convergence</li>
                  <li>• Business value delivery patterns</li>
                </ul>
              </div>

              <div className="mt-auto">
                <Button href="/training/combined" variant="outline" className="w-full border-secondary-purple-light text-secondary-purple-light hover:bg-secondary-purple hover:text-white">
                  Explore Combined Training
                </Button>
              </div>
            </div>
          </Card>

          {/* Revenue Generator Workshop */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-accent-pink/30 hover:border-accent-pink/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-accent-pink/20 rounded-full p-4">
                    <DollarSign className="w-10 h-10 text-accent-pink" />
                  </div>
                  <div className="bg-accent-pink/20 text-accent-pink px-4 py-1 rounded-full text-xs font-semibold">
                    2-Day Workshop
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">Revenue Generator Workshop</h2>
                <p className="text-lg text-gray-300 mb-4">
                  Turn technology from a budget item into a revenue engine. 2-day strategic session to identify opportunities and build your roadmap.
                </p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Shift from cost-center to revenue-engine thinking</li>
                  <li>• Identify 10-20 revenue opportunities</li>
                  <li>• Quantify ROI and complexity for each</li>
                  <li>• Leave with actionable roadmap</li>
                </ul>
              </div>

              <div className="mt-auto">
                <Button href="/training/revenue-workshop" variant="outline" className="w-full border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                  Explore Workshop
                </Button>
              </div>
            </div>
          </Card>

          {/* Custom Training */}
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-primary-blue/30 hover:border-primary-blue/60">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary-blue/20 rounded-full p-4">
                    <Wrench className="w-10 h-10 text-primary-blue" />
                  </div>
                  <div className="bg-accent-pink/20 text-accent-pink px-4 py-1 rounded-full text-xs font-semibold">
                    Tailored to You
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-3 text-white">Custom Training</h2>
                <p className="text-lg text-gray-300 mb-4">
                  Build a program around your specific industry, technology stack, and business challenges.
                </p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Industry-specific scenarios</li>
                  <li>• Your tools & tech stack</li>
                  <li>• Flexible format & duration</li>
                  <li>• Ongoing support options</li>
                </ul>
              </div>

              <div className="mt-auto">
                <Button href="/training/custom" className="w-full group-hover:bg-primary-blue/90">
                  Design Custom Training
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Format Options */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-gradient">Virtual or On-Site</span> — Your Choice
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Virtual Training</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Live, interactive sessions (not recordings)</li>
                <li>• Hands-on labs in cloud environments</li>
                <li>• Flexible scheduling for distributed teams</li>
                <li>• Recorded sessions for review</li>
                <li>• Direct access to instructors via Slack/Teams</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">On-Site Training</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Immersive team experience</li>
                <li>• Work with your actual systems</li>
                <li>• Workshop-style problem solving</li>
                <li>• Architecture reviews included</li>
                <li>• Build implementation roadmaps together</li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Build Capability?</h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s talk about what your team needs to learn and how we can make it stick.
            </p>
            <Button href="/contact" size="lg">
              Discuss Training Options
            </Button>
          </div>
        </div>
      </Section>

      {/* Why Learn From Us */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Learn From <span className="text-gradient">ClearForge</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;ve spent 20+ years building these systems for Fortune 100 companies. Now we&apos;re teaching the patterns, strategies, and thinking—without the enterprise price tag or complexity.
          </p>
          <div className="bg-primary/30 rounded-xl p-8 border border-primary-blue/30 mb-8">
            <p className="text-lg text-gray-300 italic">
              &quot;Most training teaches you what buttons to click. We teach you why the system exists, how it works, and how to build it yourself. That knowledge doesn&apos;t expire when the vendor changes their UI.&quot;
            </p>
            <p className="text-accent-pink mt-4">— Shawn Sloan, Co-Founder & CTO</p>
          </div>
          <Button href="/about/founder-story-complete" variant="outline" size="lg">
            Meet the Team
          </Button>
        </div>
      </Section>
    </>
  );
}
