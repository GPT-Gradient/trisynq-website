import { Metadata } from 'next';
import { Heart, Brain, Puzzle, Users, TrendingUp, CheckCircle, Lightbulb } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'The CTO&apos;s Heart: Tech That Adapts',
  description: 'From accessibility to automation — we make technology empathize.',
});

export default function ProjectCTOsHeartPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-accent-pink/20 p-4 rounded-full border border-accent-pink/30">
              <Heart className="w-12 h-12 text-accent-pink" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">The CTO&apos;s Heart: Tech That Adapts.</span>
          </h1>

          <div className="inline-flex items-center gap-2 bg-purple-400/20 border border-purple-400/30 rounded-full px-6 py-3 mb-8">
            <Puzzle className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold">Planning Late 2025</span>
          </div>

          <div className="bg-primary/50 rounded-2xl p-6 border border-accent-pink/30 backdrop-blur-sm">
            <p className="text-lg md:text-xl font-semibold text-white">
              This project is near and dear to our CTO&apos;s heart. Personal mission meets technical capability.
            </p>
          </div>
        </div>
      </Section>

      {/* The Special Needs Challenge */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">The Principle</span>
          </h2>

          <Card variant="bordered" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">Human variability is a feature, not a bug.</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Brain className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Individual Processing Differences</h4>
                  <p className="text-gray-300">Every individual learns and processes differently, but educational and therapeutic approaches are often one-size-fits-all.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Puzzle className="w-6 h-6 text-secondary-purple-light mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">The Data Gap</h4>
                  <p className="text-gray-300">We lack comprehensive data on what actually works for different learning modalities and conditions. Trial and error when we should have evidence.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">The Consequence</h4>
                  <p className="text-gray-300">Incredible potential locked away because we can&apos;t systematically identify and implement optimal learning approaches for each individual.</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-accent-pink/10 rounded-2xl p-8 border border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-accent-pink">The Opportunity</h3>
            <p className="text-xl text-center text-white">
              Technology can finally individualize at scale. We can systematically discover what works for each person.
            </p>
          </div>
        </div>
      </Section>

      {/* The Vision */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">The Practice</span>
          </h2>

          <div className="mb-12">
            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">Adaptive interfaces, assistive flows, elastic automation.</h3>
              <p className="text-lg text-gray-300 mb-6">
                Apps, games, and interactive software that systematically determine what learning approaches work best for each individual.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/30 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Brain className="w-6 h-6 text-accent-pink flex-shrink-0" />
                    <h4 className="text-xl font-bold text-white">Adaptive Tools</h4>
                  </div>
                  <p className="text-gray-300">Interactive applications that adjust in real-time to individual responses and processing patterns.</p>
                </div>

                <div className="bg-primary/30 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-secondary-purple-light flex-shrink-0" />
                    <h4 className="text-xl font-bold text-white">Modality Identification</h4>
                  </div>
                  <p className="text-gray-300">Systematically identify which learning modalities work best through observation and testing.</p>
                </div>

                <div className="bg-primary/30 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Users className="w-6 h-6 text-primary-blue flex-shrink-0" />
                    <h4 className="text-xl font-bold text-white">Educational Support</h4>
                  </div>
                  <p className="text-gray-300">Tools that support both educational and therapeutic approaches with data-driven insights.</p>
                </div>

                <div className="bg-primary/30 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-accent-pink flex-shrink-0" />
                    <h4 className="text-xl font-bold text-white">IEP Development</h4>
                  </div>
                  <p className="text-gray-300">Data-driven Individualized Education Program creation based on proven effectiveness.</p>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated">
            <h3 className="text-2xl font-bold mb-6 text-center text-gradient">The Proof</h3>
            <p className="text-lg text-gray-300 text-center mb-6">
              Case blurbs with measurable outcomes (placeholders for now).
            </p>
            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20">
              <p className="text-xl font-semibold text-accent-pink text-center">
                From individual support to field-wide advancement through transparent data sharing.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Success Metrics */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            How We&apos;ll <span className="text-gradient">Measure Success</span>
          </h2>

          <div className="space-y-6">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Identifying Optimal Learning Modality</h3>
                  <p className="text-gray-300">Successfully determining the most effective learning approach for each individual through systematic testing.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Measurable Educational Improvements</h3>
                  <p className="text-gray-300">Quantifiable outcomes showing better learning results when using identified optimal modalities.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Better-Informed IEP Development</h3>
                  <p className="text-gray-300">Data-driven insights leading to more effective Individualized Education Programs.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">More Effective Therapeutic Approaches</h3>
                  <p className="text-gray-300">Therapy outcomes improving through understanding of individual processing patterns.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Pattern Data Advancing Solutions</h3>
                  <p className="text-gray-300">Aggregated insights helping develop new approaches and tools for the entire special needs community.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Quality of Life Improvements</h3>
                  <p className="text-gray-300">Measurable improvements in daily functioning and well-being for individuals and families.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Approach */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            The <span className="text-gradient">Approach</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">Technology That Learns</h3>
              <p className="text-gray-300 mb-4">
                Interactive tools that observe responses, identify patterns, and adapt approaches in real-time.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Apps that adjust difficulty and presentation</li>
                <li>• Games that identify engagement patterns</li>
                <li>• Software that maps learning preferences</li>
                <li>• Tools that communicate findings clearly</li>
              </ul>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-4 text-accent-pink">Data-Driven Insights</h3>
              <p className="text-gray-300 mb-4">
                Converting observation into actionable recommendations for educators, therapists, and families.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Clear reporting on what works</li>
                <li>• Evidence for IEP development</li>
                <li>• Therapeutic approach guidance</li>
                <li>• Progress tracking over time</li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated">
            <h3 className="text-2xl font-bold mb-6 text-center text-secondary-purple-light">Privacy and Ethics First</h3>
            <p className="text-lg text-gray-300 mb-4">
              This work requires extraordinary care with data privacy and ethical considerations. Individual data protected. Aggregated insights shared only with permission.
            </p>
            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20">
              <p className="text-white">
                <strong className="text-accent-pink">Commitment:</strong> We won&apos;t compromise individual privacy to advance the field. Both are possible with proper architecture.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* The Research Commitment */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            The <span className="text-gradient">Research Commitment</span>
          </h2>

          <div className="space-y-6 mb-8">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Phase 1: Build Adaptive Learning Tools</h3>
              <p className="text-gray-300">Create interactive applications that identify optimal learning modalities through systematic observation.</p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Beta Testing: Partner with Special Needs Community</h3>
              <p className="text-gray-300">Work directly with families, educators, and therapists. Real individuals. Real needs. Real feedback.</p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Transparent Documentation: What Helps Whom and Why</h3>
              <p className="text-gray-300">Complete transparency in findings. Share what works and what doesn&apos;t—advancing the entire field.</p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">White-Label: Proven Tools for Individualized Learning</h3>
              <p className="text-gray-300">Once validated, make tools available to any organization serving the special needs community.</p>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-accent-pink/20 to-primary-blue/20 rounded-2xl p-8 border border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Why This Is Personal</h3>
            <p className="text-lg text-gray-300 mb-4 text-center">
              Our CTO has seen firsthand how the right approach unlocks potential. How understanding individual learning patterns changes everything.
            </p>
            <p className="text-xl font-bold text-accent-pink text-center">
              This isn&apos;t just another project. It&apos;s a personal mission backed by enterprise-level technical capability.
            </p>
          </div>
        </div>
      </Section>

      {/* ClearForge Foundry Integration */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20 mb-12">
            <p className="text-lg text-gray-300 mb-6">
              This domain is powered by ClearForge Foundry services with explainable workflows.
            </p>
            <div className="text-center">
              <Button href="/foundry" variant="outline" size="lg">
                See the Power
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Timeline</span>
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Current: Research & Planning</h3>
              <p className="text-gray-300">Consulting with special needs community. Designing adaptive tools. Building ethical framework.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Late 2025: Development & Beta Testing</h3>
              <p className="text-gray-300">Partner with families and organizations to validate approach. Document learnings transparently.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Beyond: Proven Tools for All</h3>
              <p className="text-gray-300">White-label platform available to any organization committed to individualized learning support.</p>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-accent-pink/30 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Stay Informed</h3>
            <p className="text-gray-300 mb-6">
              First 100 partners across ALL Continuum projects get access when each launches—including Project CTO&apos;s Heart.
            </p>
            <Button href="/beta" size="lg">
              Join the First 100 (All Projects)
            </Button>
          </div>
        </div>
      </Section>

      {/* The Promise */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient">Promise</span>
          </h2>

          <Card variant="bordered">
            <p className="text-xl text-gray-300 mb-6">
              We won&apos;t release this until it genuinely helps. Until individuals are demonstrably learning better. Until families have tools that actually work. Until the special needs community benefits.
            </p>

            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20 mb-6">
              <p className="text-2xl font-bold text-accent-pink mb-4">
                Too important to get wrong.
              </p>
              <p className="text-lg text-white">
                This work requires getting it right—not just getting it done. We&apos;re committed to both.
              </p>
            </div>

            <p className="text-lg text-gray-400">
              Technology finally makes individualized learning at scale possible. We&apos;re going to prove it can serve everyone.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
