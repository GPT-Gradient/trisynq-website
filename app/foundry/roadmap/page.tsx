import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Calendar, CheckCircle, Clock, Sparkles } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Product Roadmap — ClearForge Foundry',
  description: 'See what we are building and when. Full transparency on our product development timeline and priorities.',
  canonical: '/foundry/roadmap',
});

export default function FoundryRoadmapPage() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Product <span className="text-gradient">Roadmap</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Full transparency on what we&apos;re building and when.
          </p>
          <p className="text-lg text-gray-400">
            Dates are estimates. Priorities shift based on proof partner feedback.
          </p>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">2025-2026 Timeline</span>
          </h2>

          <div className="space-y-8">
            {/* Now Available */}
            <Card variant="elevated" className="border-l-4 border-green-500">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">Now Available</h3>
                    <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-semibold">
                      LIVE
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• ClearForge Foundry framework (private beta)</li>
                    <li>• Research, Content, Insights engines</li>
                    <li>• Foundry Business: OS (internal deployment)</li>
                    <li>• Project NEXUS (Phase 1 open)</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Q1 2026 */}
            <Card variant="elevated" className="border-l-4 border-primary-blue">
              <div className="flex items-start gap-4 mb-4">
                <Calendar className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">Q1 2026</h3>
                    <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-xs font-semibold">
                      JAN-MAR
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong className="text-white">Foundry Business: OS</strong> - Beta launch for qualified partners</li>
                    <li>• Campaign & Automation engines (public beta)</li>
                    <li>• Foundry Connect API (private beta)</li>
                    <li>• Data Democracy project launch</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Q2-Q3 2026 */}
            <Card variant="elevated" className="border-l-4 border-secondary-purple-light">
              <div className="flex items-start gap-4 mb-4">
                <Clock className="w-6 h-6 text-secondary-purple-light flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">Q2-Q3 2026</h3>
                    <span className="bg-secondary-purple/20 text-secondary-purple-light px-3 py-1 rounded-full text-xs font-semibold">
                      APR-SEP
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong className="text-white">Foundry Search: Visibility</strong> - Full platform launch</li>
                    <li>• Foundry Connect API (general availability)</li>
                    <li>• Governance & Learning engines (public beta)</li>
                    <li>• Additional Continuum projects</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Future */}
            <Card variant="elevated" className="border-l-4 border-accent-pink">
              <div className="flex items-start gap-4 mb-4">
                <Sparkles className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">Future Releases</h3>
                    <span className="bg-accent-pink/20 text-accent-pink px-3 py-1 rounded-full text-xs font-semibold">
                      PLANNED
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Mobile apps (iOS/Android)</li>
                    <li>• Voice-first interface expansion</li>
                    <li>• Additional vertical-specific solutions</li>
                    <li>• Community-requested features</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to <span className="text-gradient">Influence the Roadmap?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Beta partners get direct input on priorities and features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta" size="lg">
              Join Beta Program
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Share Feedback
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
