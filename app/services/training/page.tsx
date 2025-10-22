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
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Training & Enablement
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            We teach your team how enterprise systems work.
            Build capability, not dependency. Virtual or on-site.
          </p>
          <Button href="/contact?type=partnership" size="lg">
            Inquire About Training
          </Button>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Training Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-3">Team Workshops</h3>
              <p className="text-gray-300 mb-4">
                1-2 day intensive workshops on specific topics.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• AI & Automation fundamentals</li>
                <li>• System architecture patterns</li>
                <li>• Data strategy & analytics</li>
                <li>• Custom topics available</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-3">Technical Bootcamps</h3>
              <p className="text-gray-300 mb-4">
                1-2 week deep dives for technical teams.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Hands-on implementation</li>
                <li>• Real-world projects</li>
                <li>• Code reviews & mentoring</li>
                <li>• Best practices & patterns</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-3">Ongoing Enablement</h3>
              <p className="text-gray-300 mb-4">
                Monthly programs for continuous learning.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Monthly workshops</li>
                <li>• Office hours & Q&A</li>
                <li>• Access to resources</li>
                <li>• Community support</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            What We Teach
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-lg font-semibold mb-3">AI & Intelligence Systems</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• How to implement AI effectively</li>
                <li>• Building intelligent workflows</li>
                <li>• Avoiding common pitfalls</li>
                <li>• Enterprise AI patterns</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold mb-3">System Architecture</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Scalable system design</li>
                <li>• Integration patterns</li>
                <li>• API architecture</li>
                <li>• Cloud infrastructure</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold mb-3">Data & Analytics</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Data strategy fundamentals</li>
                <li>• Analytics implementation</li>
                <li>• Business intelligence</li>
                <li>• Decision support systems</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold mb-3">Product & Platform</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Using The Foundry platform</li>
                <li>• Custom development</li>
                <li>• Integration & APIs</li>
                <li>• Best practices</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Invest in Your Team
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Build internal capability that lasts. Contact us to design a training program for your team.
          </p>
          <Button href="/contact?type=partnership" size="lg">
            Plan Your Training
          </Button>
        </div>
      </Section>
    </>
  );
}
