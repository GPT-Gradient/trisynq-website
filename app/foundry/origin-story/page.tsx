import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Lightbulb, MessageSquare, Wrench, Rocket } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'The Origin Story — How ClearForge Foundry Was Born',
  description: 'From ASO automation to enterprise framework. The story of how ClearForge Foundry evolved from solving one problem to becoming a comprehensive orchestration engine.',
  canonical: '/foundry/origin-story',
});

export default function XynergyOriginStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The <span className="text-gradient">Origin Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            How ClearForge Foundry evolved from ASO automation to enterprise framework.
          </p>
          <p className="text-lg text-gray-400">
            Every great system starts with a real problem. Here&apos;s ours.
          </p>
        </div>
      </Section>

      {/* The Beginning: ASO Problem */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-accent-pink/20 rounded-full w-20 h-20 flex items-center justify-center">
              <Lightbulb className="w-10 h-10 text-accent-pink" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            It Started With <span className="text-gradient">ASO</span>
          </h2>

          <Card variant="elevated" className="border-2 border-accent-pink/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                We needed to solve <strong className="text-white">Adaptive Search Optimization (ASO)</strong> at scale. Not just keyword rankings—the entire ecosystem of research, content generation, performance tracking, and intelligent decision-making across SEO, GEO (local search), and VSO (video search).
              </p>

              <p className="text-lg">
                The problem? Every search optimization tool on the market was a black box. You put data in, it spits recommendations out, and you have no idea <strong className="text-white">why</strong> or <strong className="text-white">how</strong> it arrived at those conclusions.
              </p>

              <p className="text-lg">
                We couldn&apos;t accept that. If we&apos;re going to automate critical business decisions, we need to <strong className="text-primary-blue">see the reasoning</strong>, <strong className="text-primary-blue">trace the sources</strong>, and <strong className="text-primary-blue">audit the logic</strong>.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-3 text-accent-pink">The Problem</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Black-box search optimization tools with no transparency</li>
                <li>• No way to understand the &quot;why&quot; behind recommendations</li>
                <li>• Can&apos;t audit decisions or track provenance</li>
                <li>• Zero visibility into what data drove what action</li>
                <li>• Paying repeatedly for the same data and insights</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">What We Needed</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Explainable recommendations with full reasoning</li>
                <li>• Source tracking for every data point</li>
                <li>• Intelligence that compounds over time</li>
                <li>• Audit trails for compliance and optimization</li>
                <li>• Systems that show their work, not hide it</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Evolution: Bouncing Ideas */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary-blue/20 rounded-full w-20 h-20 flex items-center justify-center">
              <MessageSquare className="w-10 h-10 text-primary-blue" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Then We Started <span className="text-gradient">Talking</span>
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                As we built the ASO system, we kept bouncing ideas off each other. Late-night architecture discussions. Whiteboard sessions about data flows. Debates about how to structure reasoning engines.
              </p>

              <p className="text-lg">
                And we started recognizing patterns. The same orchestration layer we built for ASO research could handle <strong className="text-white">content generation</strong>. The reasoning engine we used for keyword analysis could drive <strong className="text-white">campaign optimization</strong>. The governance layer tracking ASO decisions could audit <strong className="text-white">any automated workflow</strong>.
              </p>

              <p className="text-lg">
                <strong className="text-primary-blue">Wait.</strong> We weren&apos;t building an ASO tool anymore. We were building something bigger.
              </p>
            </div>
          </Card>

          <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">The Breakthrough Moment</h3>
            <p className="text-lg text-gray-300 text-center mb-4">
              &quot;What if we abstracted the pattern? What if we built the <strong className="text-primary-blue">framework</strong> that enterprises use—contextual orchestration, reasoning engines, provenance tracking—and made it accessible to everyone?&quot;
            </p>
            <p className="text-accent-pink text-center font-semibold">
              That&apos;s when Xynergy CORE was born.
            </p>
          </div>
        </div>
      </Section>

      {/* The Build: From Concept to Reality */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-secondary-purple/20 rounded-full w-20 h-20 flex items-center justify-center">
              <Wrench className="w-10 h-10 text-secondary-purple-light" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Building <span className="text-gradient">CORE</span>
          </h2>

          <Card variant="elevated" className="border-2 border-secondary-purple/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                We took everything we learned from 20+ years building Fortune 100 systems and distilled it into composable patterns:
              </p>
            </div>
          </Card>

          <div className="space-y-6 mb-8">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-blue font-bold">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-blue">Contextual</h3>
                  <p className="text-gray-300">
                    Every business is different. Your data, operations, goals, constraints—CORE understands your context and reasons within it.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-pink font-bold">OR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent-pink">Orchestration & Reasoning</h3>
                  <p className="text-gray-300">
                    Coordinates multiple specialized engines. Makes decisions with explainable logic. Shows its work at every step.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-purple/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary-purple-light font-bold">E</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary-purple-light">Engine</h3>
                  <p className="text-gray-300">
                    Not a product. A framework. Composable modules you can configure, extend, and audit. No vendor lock-in. No black boxes.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card>
            <h3 className="text-2xl font-bold mb-4 text-white">What Makes It Different</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-primary-blue mb-2">Traditional Enterprise Systems:</p>
                <ul className="space-y-1">
                  <li>• Proprietary black boxes</li>
                  <li>• Vendor lock-in by design</li>
                  <li>• No visibility into reasoning</li>
                  <li>• Enterprise pricing, enterprise complexity</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-accent-pink mb-2">Xynergy CORE:</p>
                <ul className="space-y-1">
                  <li>• Explainable at every step</li>
                  <li>• Open patterns, no lock-in</li>
                  <li>• Full audit trails and provenance</li>
                  <li>• Enterprise capabilities, accessible pricing</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* The Launch: Public v1 */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-accent-pink/20 rounded-full w-20 h-20 flex items-center justify-center">
              <Rocket className="w-10 h-10 text-accent-pink" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our First <span className="text-gradient">Public Version</span>
          </h2>

          <Card variant="elevated" className="border-2 border-accent-pink/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                What you see today is Xynergy CORE v1—our first public release of the framework.
              </p>

              <p className="text-lg">
                It&apos;s not perfect. It&apos;s not complete. But it&apos;s <strong className="text-white">real</strong>, it&apos;s <strong className="text-white">working</strong>, and it&apos;s <strong className="text-white">transparent</strong>.
              </p>

              <p className="text-lg">
                We&apos;re launching it the same way enterprises test new systems: with <strong className="text-primary-blue">proof partners</strong> who help us validate, refine, and prove the patterns work at scale.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <h3 className="text-lg font-bold mb-2 text-primary-blue">Phase 1</h3>
              <p className="text-sm text-gray-300">
                First 100 partners. Work directly with us. Help refine the framework. Get lifetime access to everything.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-2 text-accent-pink">Phase 2</h3>
              <p className="text-sm text-gray-300">
                Validated methodology. Documented patterns. Broader access. Higher pricing reflects proven ROI.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-2 text-secondary-purple-light">Phase 3</h3>
              <p className="text-sm text-gray-300">
                Full proof at scale. Complete documentation. Standard pricing. Then open to everyone.
              </p>
            </Card>
          </div>

          <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30 text-center">
            <p className="text-lg font-semibold text-accent-pink mb-2">
              This is how enterprise systems are really built.
            </p>
            <p className="text-gray-400">
              Not with marketing promises. With real partners, real testing, and real results—documented transparently every step of the way.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of the <span className="text-gradient">Story</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Xynergy CORE is evolving. Help us prove that transparency, explainability, and accessibility can beat proprietary complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta-program" size="lg">
              Join Phase 1
            </Button>
            <Button href="/foundry" variant="outline" size="lg">
              Explore Xynergy CORE
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
