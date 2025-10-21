import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Shield, Eye, Lock } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Manifesto',
  description: 'Technology should make humans better—never busier. Our principles for building AI that serves people.',
  canonical: '/manifesto',
});

export default function ManifestoPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Manifesto
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Technology should make humans better—never busier.
          </p>
        </div>
      </Section>

      {/* Three Core Principles */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Clarity Over Hype */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-4 flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary-blue" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-white">Clarity Over Hype</h2>
                  <p className="text-xl text-gray-300 mb-4">
                    We ship proof, not promises.
                  </p>
                  <div className="bg-background-dark rounded-xl p-6">
                    <p className="text-gray-300 mb-3">
                      The tech industry runs on hype. New frameworks every quarter. Revolutionary breakthroughs that vaporize. Demos that never ship.
                    </p>
                    <p className="text-gray-300 mb-3">
                      We don&apos;t do that.
                    </p>
                    <p className="text-gray-300 mb-3">
                      Every claim we make is backed by working code. Every feature we promise exists in production. Every result we show is reproducible.
                    </p>
                    <p className="text-accent-pink font-semibold">
                      If we can&apos;t prove it, we don&apos;t say it.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Explainable by Design */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-4 flex-shrink-0">
                  <Eye className="w-8 h-8 text-accent-pink" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-white">Explainable by Design</h2>
                  <p className="text-xl text-gray-300 mb-4">
                    If we can&apos;t show the steps, we won&apos;t ship it.
                  </p>
                  <div className="bg-background-dark rounded-xl p-6">
                    <p className="text-gray-300 mb-3">
                      Black boxes are dangerous. When you can&apos;t see how a decision was made, you can&apos;t trust it. You can&apos;t improve it. You can&apos;t fix it when it breaks.
                    </p>
                    <p className="text-gray-300 mb-3">
                      That&apos;s why every AI output in our systems comes with an &quot;Explain This&quot; button. Not marketing speak. Not simplified analogies. The actual reasoning chain.
                    </p>
                    <div className="bg-primary/30 rounded-lg p-4 mb-3 border border-primary-blue/20">
                      <h3 className="text-lg font-bold mb-2 text-primary-blue">What You See:</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• What sources were consulted</li>
                        <li>• What steps the AI took</li>
                        <li>• What assumptions were made</li>
                        <li>• What alternatives were considered</li>
                        <li>• Why this answer over others</li>
                      </ul>
                    </div>
                    <p className="text-accent-pink font-semibold">
                      Transparency isn&apos;t a feature. It&apos;s the foundation.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Own Your Stack */}
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-purple-light/20 rounded-full p-4 flex-shrink-0">
                  <Lock className="w-8 h-8 text-secondary-purple-light" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-white">Own Your Stack</h2>
                  <p className="text-xl text-gray-300 mb-4">
                    No lock-in. No gatekeepers. Your data stays yours.
                  </p>
                  <div className="bg-background-dark rounded-xl p-6">
                    <p className="text-gray-300 mb-3">
                      SaaS platforms love to trap you. They make migration painful. They hold your data hostage. They change pricing once you&apos;re dependent.
                    </p>
                    <p className="text-gray-300 mb-3">
                      We build differently.
                    </p>
                    <div className="bg-primary/30 rounded-lg p-4 mb-3 border border-primary-blue/20">
                      <h3 className="text-lg font-bold mb-2 text-primary-blue">Our Commitment:</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Your data exports in standard formats—always</li>
                        <li>• Open APIs with complete documentation</li>
                        <li>• No proprietary lock-in mechanisms</li>
                        <li>• Self-hosting options for those who want them</li>
                        <li>• Migration guides if you want to leave</li>
                      </ul>
                    </div>
                    <p className="text-gray-300 mb-3">
                      We earn your business by being useful, not by making it impossible to leave.
                    </p>
                    <p className="text-accent-pink font-semibold">
                      True partnership means you always have the exit.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Bigger Picture */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <Card variant="bordered">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Why This <span className="text-gradient">Matters</span>
            </h2>
            <div className="bg-background-dark rounded-xl p-8">
              <p className="text-lg text-gray-300 mb-4">
                AI is the most powerful amplification technology since electricity. But amplification without understanding is dangerous.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                When you can&apos;t explain how an AI reached a conclusion, you can&apos;t know when to trust it. You can&apos;t identify bias. You can&apos;t improve the outcome. You&apos;re just hoping.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                That&apos;s not good enough. Not for your business. Not for your clients. Not for the future we&apos;re building.
              </p>
              <p className="text-xl text-accent-pink font-bold text-center mt-6">
                We build AI you can understand, trust, and control.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Our Principles <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            These aren&apos;t just words. They&apos;re the foundation of everything we build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/foundry" size="lg">
              Explore Xynergy
            </Button>
            <Button href="/transparency" variant="outline" size="lg">
              Our Transparency Commitment
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
