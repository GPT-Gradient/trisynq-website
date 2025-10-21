import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { FileText, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Knowledge — The Forge',
  description: 'Blogs, opinions, how-tos, white papers. Learn how to build transparent, accessible enterprise systems.',
  canonical: '/forge/knowledge',
});

export default function ForgeKnowledgePage() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-secondary-purple/20 text-secondary-purple-light text-sm font-semibold px-4 py-2 rounded-full">
              The Forge • Knowledge
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Knowledge</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Blogs, opinions, how-tos, white papers. Learn how we forge complexity into clarity.
          </p>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">What You&apos;ll Find Here</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card variant="elevated">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-secondary-purple-light" />
                <h3 className="text-xl font-bold">Technical How-Tos</h3>
              </div>
              <p className="text-gray-300">
                Step-by-step guides for building AI systems, automation workflows, and data pipelines without the enterprise complexity tax.
              </p>
            </Card>

            <Card variant="elevated">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-primary-blue" />
                <h3 className="text-xl font-bold">Thought Leadership</h3>
              </div>
              <p className="text-gray-300">
                Our takes on the AI industrial complex, data democracy, transparency, and what business technology should actually look like.
              </p>
            </Card>

            <Card variant="elevated">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-accent-pink" />
                <h3 className="text-xl font-bold">White Papers</h3>
              </div>
              <p className="text-gray-300">
                Deep research on enterprise AI, automation ROI, cost modeling, and the economic impact of transparent technology.
              </p>
            </Card>

            <Card variant="elevated">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-secondary-purple-light" />
                <h3 className="text-xl font-bold">Playbooks</h3>
              </div>
              <p className="text-gray-300">
                Tactical playbooks for revenue operations, data integration, campaign automation, and building internal AI systems.
              </p>
            </Card>
          </div>

          <Card variant="elevated" className="border-2 border-secondary-purple/30 text-center py-12">
            <h3 className="text-2xl font-bold mb-4">Content Hub Launching Soon</h3>
            <p className="text-lg text-gray-300 mb-6">
              We&apos;re building a comprehensive knowledge base with blogs, tutorials, white papers, and playbooks. Check back soon.
            </p>
            <Button href="/beta" size="lg">
              Join Beta for Early Access
            </Button>
          </Card>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to <span className="text-gradient">Contribute?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We welcome guest posts, case studies, and research from our community. Share your knowledge.
          </p>
          <Button href="/contact" size="lg">
            Pitch an Article
          </Button>
        </div>
      </Section>
    </>
  );
}
