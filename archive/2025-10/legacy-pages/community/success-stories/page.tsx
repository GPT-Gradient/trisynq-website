import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { FileText, CheckCircle, TrendingUp, Search, Database, Sparkles, Building2 } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Proof Through Progress',
  description: 'Short, scannable case blurbs from the six domains.',
  canonical: '/community/success-stories',
});

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Proof Through Progress.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Real businesses. Real transformation.
          </p>
          <p className="text-xl text-gray-300">
            Coming soon.
          </p>
        </div>
      </Section>

      {/* Current Status */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="mb-8">
            <div className="text-center py-8">
              <FileText className="w-20 h-20 text-accent-pink mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                We&apos;re <span className="text-gradient">Just Starting</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                Private beta complete. Public beta partners joining now.
              </p>
              <div className="bg-gradient-to-r from-accent-pink/20 to-secondary-purple/20 rounded-2xl p-6 border border-accent-pink/30 max-w-3xl mx-auto">
                <p className="text-lg text-gray-300">
                  <strong className="text-white">The Promise:</strong> When partners achieve results, you&apos;ll see them here. Real metrics, full context, honest assessment.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="bordered" className="border-accent-pink/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">No Fabrication</h3>
              <p className="text-xl text-gray-300 mb-6">
                We won&apos;t fake success stories. We&apos;re a startup proving something. Check back as the first 100 partners document transformation.
              </p>
              <div className="bg-primary/30 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-300 italic">
                  &quot;Transparency means showing our journey from the beginning. Including when we don&apos;t have case studies yet.&quot;
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* What You'll See */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What You&apos;ll <span className="text-gradient">See Here</span>
            </h2>
            <p className="text-xl text-gray-300">
              When results are available
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Each Success Story Will Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0" />
                  <h4 className="text-lg font-bold text-white">Partner Background</h4>
                </div>
                <p className="text-gray-300">
                  Industry, size, challenges (with permission)
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0" />
                  <h4 className="text-lg font-bold text-white">The Problem</h4>
                </div>
                <p className="text-gray-300">
                  What they were facing before partnership
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0" />
                  <h4 className="text-lg font-bold text-white">The Solution</h4>
                </div>
                <p className="text-gray-300">
                  How we helped (technology + data + AI)
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0" />
                  <h4 className="text-lg font-bold text-white">The Process</h4>
                </div>
                <p className="text-gray-300">
                  Implementation journey (including struggles)
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0" />
                  <h4 className="text-lg font-bold text-white">The Results</h4>
                </div>
                <p className="text-gray-300">
                  Measurable outcomes with full context
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0" />
                  <h4 className="text-lg font-bold text-white">The Learning</h4>
                </div>
                <p className="text-gray-300">
                  What worked, what didn&apos;t, and why
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-secondary-purple-light flex-shrink-0" />
                  <h4 className="text-lg font-bold text-white">Partner Quote</h4>
                </div>
                <p className="text-gray-300">
                  Authentic testimonial from the partner
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-secondary-purple-light flex-shrink-0" />
                  <h4 className="text-lg font-bold text-white">Supporting Data</h4>
                </div>
                <p className="text-gray-300">
                  Metrics proving transformation occurred
                </p>
              </div>
            </div>
          </Card>

          <Card variant="bordered" className="border-primary-blue/30">
            <div className="bg-gradient-to-r from-primary-blue/20 to-secondary-purple/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white text-center">Complete Transparency</h3>
              <p className="text-lg text-gray-300 text-center">
                Real metrics with full context. Failures alongside successes. Honest assessment of what works and what doesn&apos;t.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Story Categories */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Story <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-xl text-gray-300">
              Future organization of success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated">
              <div className="text-center">
                <Search className="w-12 h-12 text-accent-pink mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Search Transformation</h3>
                <p className="text-gray-300">
                  Project NEXUS success stories showing ASO results
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <Database className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Data Intelligence</h3>
                <p className="text-gray-300">
                  Businesses leveraging analytics for competitive advantage
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <Sparkles className="w-12 h-12 text-secondary-purple-light mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">AI Amplification</h3>
                <p className="text-gray-300">
                  Authentic expertise scaling with AI assistance
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-accent-pink mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Complete Integration</h3>
                <p className="text-gray-300">
                  Full transformation stories across technology, data, and AI
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <Building2 className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Industry-Specific</h3>
                <p className="text-gray-300">
                  Success stories organized by vertical and use case
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <FileText className="w-12 h-12 text-secondary-purple-light mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Methodology Evolution</h3>
                <p className="text-gray-300">
                  How partner feedback refined our approaches
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Be <span className="text-gradient">Part of the Story</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the first 100 partners proving transformation works. Your success will be documented here for others to follow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button href="/beta" size="lg">
                  Apply for Beta Partnership
                </Button>
                <Button href="/community/beta-partners" variant="outline" size="lg">
                  Learn About Beta Program
                </Button>
              </div>
              <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/30">
                <p className="text-lg text-gray-300">
                  <strong className="text-white">Bookmark This Page:</strong> Check back as real results start rolling in from our first partners.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Follow Progress */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <Card variant="bordered" className="border-accent-pink/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Follow Our <span className="text-gradient">Progress</span>
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Watch the transformation journey unfold in real-time through our public dashboard.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-primary/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold mb-2 text-primary-blue">See Progress</h4>
                  <p className="text-gray-300 text-sm">Live metrics as they happen</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold mb-2 text-primary-blue">Learn Openly</h4>
                  <p className="text-gray-300 text-sm">What works and what doesn&apos;t</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold mb-2 text-primary-blue">Join When Ready</h4>
                  <p className="text-gray-300 text-sm">Benefit from proven approaches</p>
                </div>
              </div>
              <Button href="/dashboard" variant="outline" size="lg">
                View Public Dashboard
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
