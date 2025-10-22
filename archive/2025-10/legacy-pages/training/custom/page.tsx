import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Wrench, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Custom Training — Tailored to Your Reality',
  description: 'Build a training program around your specific industry, technology stack, and business challenges. Completely customized.',
  canonical: '/training/custom',
});

export default function CustomTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <Button href="/training" variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Training
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary-blue/20 rounded-full p-4">
              <Wrench className="w-12 h-12 text-primary-blue" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">Custom</span> Training
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Build a Program Around Your Reality
          </p>
          <p className="text-lg text-gray-400">
            Your industry is unique. Your tech stack is unique. Your challenges are unique. So why would you want generic training?
          </p>
        </div>
      </Section>

      {/* When You Need Custom */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            When You Need <span className="text-primary-blue">Custom Training</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card variant="bordered" className="bg-background-medium">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">You Have...</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Industry-specific regulations or requirements</li>
                <li>• A complex existing tech stack to work with</li>
                <li>• Specific business problems to solve</li>
                <li>• Mixed skill levels across your team</li>
                <li>• Legacy systems that aren&apos;t going anywhere</li>
                <li>• Constraints that don&apos;t fit standard programs</li>
              </ul>
            </Card>

            <Card variant="bordered" className="bg-background-medium">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">You Need...</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Training that addresses your actual reality</li>
                <li>• Hands-on work with your systems, not demos</li>
                <li>• Content at the right depth for your team</li>
                <li>• Solutions to your specific challenges</li>
                <li>• A learning path that fits your timeline</li>
                <li>• Knowledge that transfers immediately</li>
              </ul>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary-blue/20 to-accent-pink/20 rounded-xl p-8 border border-primary-blue/30">
            <p className="text-xl text-gray-300 text-center italic">
              &quot;We don&apos;t sell hours. We sell outcomes. Tell us what your team needs to be able to do, and we&apos;ll design a program that gets them there.&quot;
            </p>
          </div>
        </div>
      </Section>

      {/* Our Custom Training Approach */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="text-gradient">Approach</span>
          </h2>

          <div className="space-y-8 mb-12">
            <Card>
              <div className="flex gap-4">
                <div className="bg-primary-blue/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-blue">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Discovery Session</h3>
                  <p className="text-gray-300 mb-3">
                    We start by understanding your reality—not selling you a pre-packaged solution.
                  </p>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Current state assessment of your systems & team</li>
                    <li>• Specific challenges and pain points</li>
                    <li>• Learning objectives and success criteria</li>
                    <li>• Constraints (timeline, budget, availability)</li>
                    <li>• Desired outcomes and measurable goals</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex gap-4">
                <div className="bg-accent-pink/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-accent-pink">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Program Design</h3>
                  <p className="text-gray-300 mb-3">
                    We design a program specifically for your team, industry, and goals.
                  </p>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Custom curriculum tailored to your needs</li>
                    <li>• Labs using your actual systems and data</li>
                    <li>• Industry-specific examples and scenarios</li>
                    <li>• Right depth for your team&apos;s level</li>
                    <li>• Flexible format (virtual, on-site, hybrid)</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex gap-4">
                <div className="bg-secondary-purple/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-secondary-purple-light">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Delivery & Iteration</h3>
                  <p className="text-gray-300 mb-3">
                    We deliver the training, adapting in real-time based on your team&apos;s progress.
                  </p>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Live instruction with hands-on application</li>
                    <li>• Adjust pace and depth as needed</li>
                    <li>• Address questions about your specific systems</li>
                    <li>• Build solutions to your actual problems</li>
                    <li>• Create implementation roadmaps together</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex gap-4">
                <div className="bg-primary-blue/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-blue">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Post-Training Support</h3>
                  <p className="text-gray-300 mb-3">
                    Training doesn&apos;t end when the session does. We support implementation.
                  </p>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Extended Slack/Teams access for questions</li>
                    <li>• Architecture review of your implementations</li>
                    <li>• Follow-up sessions to address challenges</li>
                    <li>• Resource library and reference materials</li>
                    <li>• Optional ongoing consulting relationship</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Example Custom Programs */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Example <span className="text-accent-pink">Custom Programs</span>
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-2 text-primary-blue">Healthcare Data & AI Governance</h3>
              <p className="text-gray-400 text-sm mb-2">
                <strong className="text-gray-300">Challenge:</strong> Healthcare provider needed to implement AI while maintaining HIPAA compliance and patient data governance.
              </p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-300">Solution:</strong> 5-day custom program covering healthcare-specific data architecture, HIPAA-compliant AI deployment, and governance frameworks. Included hands-on labs with de-identified patient data and architecture review of their EHR integration.
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-2 text-primary-blue">Financial Services Real-Time Analytics</h3>
              <p className="text-gray-400 text-sm mb-2">
                <strong className="text-gray-300">Challenge:</strong> Regional bank needed to build real-time fraud detection without replacing legacy systems.
              </p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-300">Solution:</strong> 4-day custom program on streaming architecture, real-time ML, and legacy integration patterns specific to financial services. Worked with their actual transaction data (anonymized) and built a prototype they implemented within 60 days.
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-2 text-primary-blue">Manufacturing IoT & Predictive Maintenance</h3>
              <p className="text-gray-400 text-sm mb-2">
                <strong className="text-gray-300">Challenge:</strong> Manufacturing company wanted to implement predictive maintenance using IoT sensor data but lacked internal ML capability.
              </p>
              <p className="text-gray-400 text-sm">
                <strong className="text-gray-300">Solution:</strong> 6-day program covering IoT data pipelines, time-series analysis, predictive modeling for maintenance, and edge deployment. Built proof-of-concept with their actual sensor data that saved $2M+ in prevented downtime.
              </p>
            </Card>
          </div>

          <p className="text-center text-gray-400 italic">
            Your industry, your challenge, your custom program. These are just examples of what&apos;s possible.
          </p>
        </div>
      </Section>

      {/* Investment & Process */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-gradient">Investment</span> & Process
          </h2>

          <Card className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">How Custom Training Works</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-primary-blue">1. Discovery Call (Free)</strong>
                <p className="text-gray-400 text-sm">
                  30-60 minute conversation to understand your needs, challenges, and goals.
                </p>
              </div>
              <div>
                <strong className="text-primary-blue">2. Proposal & Design</strong>
                <p className="text-gray-400 text-sm">
                  We design a custom program and provide a detailed proposal with outcomes, timeline, and investment.
                </p>
              </div>
              <div>
                <strong className="text-primary-blue">3. Program Delivery</strong>
                <p className="text-gray-400 text-sm">
                  Training delivered in the format that works best for your team (virtual, on-site, or hybrid).
                </p>
              </div>
              <div>
                <strong className="text-primary-blue">4. Post-Training Support</strong>
                <p className="text-gray-400 text-sm">
                  Extended support period to ensure successful implementation of what you learned.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-primary/30 border-2 border-accent-pink/30">
            <h3 className="text-xl font-bold mb-4 text-white">What&apos;s Included</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300 text-sm">
              <ul className="space-y-2">
                <li>✓ Custom curriculum design</li>
                <li>✓ Industry-specific content</li>
                <li>✓ Labs with your systems/data</li>
                <li>✓ All materials & resources</li>
                <li>✓ Architecture reviews</li>
              </ul>
              <ul className="space-y-2">
                <li>✓ Implementation roadmaps</li>
                <li>✓ Reference code & templates</li>
                <li>✓ Post-training support period</li>
                <li>✓ Recorded sessions (virtual)</li>
                <li>✓ Optional ongoing consulting</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Design Your <span className="text-gradient">Custom Program</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s start with a conversation about what your team needs to learn and what success looks like for you.
          </p>

          <div className="bg-primary/30 rounded-xl p-8 border border-primary-blue/30 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">What to Prepare</h3>
            <div className="text-left max-w-2xl mx-auto text-gray-300">
              <p className="mb-4">Before our discovery call, think about:</p>
              <ul className="space-y-2">
                <li>• What does your team need to be able to <em>do</em> differently?</li>
                <li>• What are the specific challenges you&apos;re facing?</li>
                <li>• What does success look like 90 days after training?</li>
                <li>• What constraints do we need to work within?</li>
                <li>• Who needs to be trained and what&apos;s their current level?</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Schedule Discovery Call
            </Button>
            <Button href="/training" variant="outline" size="lg">
              Explore Standard Programs
            </Button>
          </div>

          <p className="text-gray-400 text-sm mt-8 italic">
            Custom training typically starts at 3-5 days. Larger programs and ongoing consulting relationships available.
          </p>
        </div>
      </Section>
    </>
  );
}
