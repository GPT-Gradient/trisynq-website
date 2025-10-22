import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Search, TrendingUp, Target } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Foundry Search: Visibility — Coming Q3 2026',
  description: 'Intelligent search optimization (SEO, GEO, VSO) powered by ClearForge Foundry. Currently in Continuum validation through Project NEXUS.',
  canonical: '/foundry/search',
});

export default function FoundrySearchPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-accent-pink/20 text-accent-pink text-sm font-semibold px-4 py-2 rounded-full">
              COMING Q3 2026
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Foundry Search: <span className="text-gradient">Visibility</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Multi-modality search optimization (SEO, GEO, VSO) powered by intelligent caching and cost-optimized AI.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Currently validating methodology through <strong className="text-white">Project NEXUS</strong> (Continuum Phase 1).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/continuum/nexus" size="lg">
              Learn About NEXUS
            </Button>
            <Button href="/contact?type=partnership" variant="outline" size="lg">
              Become a Validation Partner
            </Button>
          </div>
        </div>
      </Section>

      {/* What Is Foundry Search */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            What Is <span className="text-gradient">Foundry Search: Visibility</span>?
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                Foundry Search: Visibility is the commercial product that will emerge from our <strong className="text-white">NEXUS Continuum validation</strong>.
              </p>

              <p className="text-lg">
                It&apos;s an intelligent search optimization platform that handles all three visibility modalities (SEO, GEO, VSO) in one unified system. Unlike traditional tools that charge the same price forever while delivering the same value, Foundry Search uses <strong className="text-primary-blue">intelligent caching</strong> and <strong className="text-primary-blue">cost-optimized AI routing</strong> to deliver increasing value at decreasing cost over time.
              </p>

              <p className="text-lg">
                <strong className="text-white">We&apos;re not selling it yet.</strong> We&apos;re validating the methodology with real partners through NEXUS (Q1-Q3 2026), proving it works before we commercialize it.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-6 h-6 text-primary-blue" />
                <h3 className="text-lg font-bold text-primary-blue">SEO</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Traditional search optimization with intelligent keyword research, content generation, and performance tracking.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-accent-pink" />
                <h3 className="text-lg font-bold text-accent-pink">GEO</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Local search optimization with map visibility, local pack positioning, and review management.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-secondary-purple-light" />
                <h3 className="text-lg font-bold text-secondary-purple-light">VSO</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Video search optimization with YouTube ranking, discoverability, and video content strategy.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Continuum Approach */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Why We&apos;re <span className="text-gradient">Not Selling Yet</span>
          </h2>

          <Card variant="elevated" className="border-2 border-accent-pink/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                <strong className="text-white">Most companies build products, promise results, then discover what actually works after customers pay.</strong>
              </p>

              <p className="text-lg">
                We do the opposite. We validate methodology through <strong className="text-white">The Continuum</strong>—our 3-phase validation process that proves products work before we commercialize them.
              </p>

              <p className="text-lg">
                <strong className="text-primary-blue">Phase 1: Internal Use</strong> — We built the Foundry Search methodology for our own content needs. Proven internally over 18+ months.
              </p>

              <p className="text-lg">
                <strong className="text-primary-blue">Phase 2: Continuum Partners</strong> — NEXUS validation (Q1-Q3 2026). 6-12 partners use the system. We prove methodology at scale with real businesses. Partners pay nothing, get full access, help shape the product.
              </p>

              <p className="text-lg">
                <strong className="text-primary-blue">Phase 3: Commercial Launch</strong> — Foundry Search: Visibility becomes a commercial product (Q3 2026) after methodology is validated with partner data.
              </p>

              <p className="text-lg">
                <strong className="text-white">This Is The Opposite of &quot;Move Fast and Break Things.&quot;</strong> We move deliberately. We prove before we promise. We validate with partners before we charge customers.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Project NEXUS */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Project <span className="text-gradient">NEXUS</span>
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                <strong className="text-white">NEXUS is the Continuum validation for Foundry Search.</strong>
              </p>

              <p className="text-lg">
                We&apos;re recruiting 6-12 validation partners (Q1 2026) who will use the full Foundry Search system for free while we prove the methodology works at scale.
              </p>

              <div className="bg-background-dark rounded-lg p-6 mt-6">
                <h3 className="text-xl font-bold mb-4 text-primary-blue">What Validation Partners Get:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• <strong className="text-white">Full platform access</strong> for 6-12 months (Q1-Q3 2026)</li>
                  <li>• <strong className="text-white">No cost during validation</strong> — you pay nothing</li>
                  <li>• <strong className="text-white">Direct influence</strong> on product direction and features</li>
                  <li>• <strong className="text-white">Founder-level support</strong> and strategic guidance</li>
                  <li>• <strong className="text-white">Discounted pricing</strong> when product launches (Q3 2026)</li>
                  <li>• <strong className="text-white">Founding partner status</strong> and public recognition</li>
                </ul>
              </div>

              <div className="bg-background-dark rounded-lg p-6 mt-6">
                <h3 className="text-xl font-bold mb-4 text-accent-pink">What We Need From Partners:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• <strong className="text-white">Real business with content needs</strong> (not testing for curiosity)</li>
                  <li>• <strong className="text-white">Active engagement</strong> — use the system, provide feedback, share results</li>
                  <li>• <strong className="text-white">Transparency</strong> — share data on what works and what doesn't</li>
                  <li>• <strong className="text-white">Patience</strong> — this is validation, not a finished product</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button href="/continuum/nexus" size="lg">
              Read Full NEXUS Details
            </Button>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Foundry Search <span className="text-gradient">Timeline</span>
          </h2>

          <div className="space-y-6">
            <Card variant="elevated" className="border-l-4 border-l-primary-blue">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-primary-blue">Q4 2025</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Partner Recruitment</h3>
                  <p className="text-gray-300">
                    Identifying and onboarding 6-12 NEXUS validation partners. Application process open now.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-l-accent-pink">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-accent-pink">Q1-Q3 2026</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">NEXUS Validation</h3>
                  <p className="text-gray-300">
                    Partners use full platform. We prove methodology, gather data, refine product based on real operational feedback.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-l-secondary-purple-light">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-secondary-purple-light">Q3 2026</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Commercial Launch</h3>
                  <p className="text-gray-300">
                    Foundry Search: Visibility becomes available as a commercial product with proven methodology and real partner results.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in <span className="text-gradient">Validation Partnership</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            NEXUS partner applications are open now for Q1 2026 start. If you have real content needs and want to help validate the methodology, we want to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/continuum/nexus" size="lg">
              Learn About NEXUS
            </Button>
            <Button href="/contact?type=partnership" variant="outline" size="lg">
              Apply for Partnership
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
