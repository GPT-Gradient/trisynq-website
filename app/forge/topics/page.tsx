import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { FileText, TrendingUp, BookOpen } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Explore Topics — Content Hub Coming Soon',
  description: 'Blogs, opinions, how-tos, playbooks, and insights on transparency, automation, and growth.',
  canonical: '/forge/topics',
});

export default function TopicsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Explore <span className="text-gradient">Topics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Deep dives, how-tos, playbooks, and thought leadership — all tied to The Forge.
          </p>
        </div>
      </Section>

      {/* Coming Soon Content */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="text-center py-12">
            <div className="mb-8">
              <span className="bg-accent-pink/20 text-accent-pink px-4 py-2 rounded-full text-sm font-semibold">
                Coming Soon
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Content Hub Launching Soon
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re building a comprehensive content library covering AI transparency, data accessibility, content operations, automation, and SMB growth.
            </p>
          </Card>
        </div>
      </Section>

      {/* What to Expect */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What to <span className="text-gradient">Expect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated">
              <div className="text-center">
                <FileText className="w-12 h-12 text-accent-pink mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Blogs & Opinions</h3>
                <p className="text-gray-300">
                  Real perspectives on AI, transparency, and building in public.
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">How-Tos & Playbooks</h3>
                <p className="text-gray-300">
                  Step-by-step guides for operators building with transparency.
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-secondary-purple-light mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">White Papers & Research</h3>
                <p className="text-gray-300">
                  Deep analysis on automation, governance, and data democracy.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Topic Areas Preview */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Topic Areas</span>
            </h2>
            <p className="text-xl text-gray-300">
              Content organized around the themes that matter most to operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="bordered">
              <h3 className="text-lg font-bold text-primary-blue mb-2">AI Transparency</h3>
              <p className="text-gray-400 text-sm">How AI should explain itself and why it matters</p>
            </Card>
            <Card variant="bordered">
              <h3 className="text-lg font-bold text-primary-blue mb-2">Data Accessibility</h3>
              <p className="text-gray-400 text-sm">Making enterprise insights available to everyone</p>
            </Card>
            <Card variant="bordered">
              <h3 className="text-lg font-bold text-secondary-purple-light mb-2">Content Operations</h3>
              <p className="text-gray-400 text-sm">Scaling content without losing quality or voice</p>
            </Card>
            <Card variant="bordered">
              <h3 className="text-lg font-bold text-secondary-purple-light mb-2">Automation</h3>
              <p className="text-gray-400 text-sm">Workflows that execute with oversight and proof</p>
            </Card>
            <Card variant="bordered">
              <h3 className="text-lg font-bold text-accent-pink mb-2">Search & Discovery</h3>
              <p className="text-gray-400 text-sm">Finding what matters in the noise</p>
            </Card>
            <Card variant="bordered">
              <h3 className="text-lg font-bold text-accent-pink mb-2">Ethics & Governance</h3>
              <p className="text-gray-400 text-sm">Building AI systems with accountability</p>
            </Card>
            <Card variant="bordered">
              <h3 className="text-lg font-bold text-primary-blue mb-2">SMB Growth</h3>
              <p className="text-gray-400 text-sm">Strategies that scale without enterprise budgets</p>
            </Card>
            <Card variant="bordered">
              <h3 className="text-lg font-bold text-secondary-purple-light mb-2">Playbooks</h3>
              <p className="text-gray-400 text-sm">Proven frameworks you can deploy today</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want Early Access?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the waitlist to get notified when we publish new content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/community#waitlist" size="lg">
              Join the Waitlist
            </Button>
            <Button href="/forge" variant="outline" size="lg">
              Back to The Forge
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
