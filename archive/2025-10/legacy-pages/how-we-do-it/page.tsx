import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { CheckCircle2, Layers, Users, Eye, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Method, Not Magic',
  description: 'Enterprise architecture, AI translation, clear systems design.',
  canonical: '/how-we-do-it',
});

export default function HowWeDoItPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Method, Not Magic.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Enterprise architecture, AI translation, clear systems design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
              <h3 className="text-lg font-bold text-primary-blue mb-2">Discovery</h3>
              <p className="text-gray-300 mb-2">We listen before we automate.</p>
              <p className="text-sm text-gray-400">Xynergy Diagnostics surfaces patterns in your data—and shows its work.</p>
            </div>
            <div className="bg-primary/30 rounded-xl p-4 border border-accent-pink/20">
              <h3 className="text-lg font-bold text-accent-pink mb-2">Design</h3>
              <p className="text-gray-300 mb-2">Every system we build can be explained.</p>
              <p className="text-sm text-gray-400">Composable services fit your workflow. No lock-in, no black boxes.</p>
            </div>
            <div className="bg-primary/30 rounded-xl p-4 border border-secondary-purple-light/20">
              <h3 className="text-lg font-bold text-secondary-purple-light mb-2">Delivery</h3>
              <p className="text-gray-300 mb-2">Transparency by default, not by request.</p>
              <p className="text-sm text-gray-400">Every output ships with provenance and an &apos;Explain this&apos; toggle.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Methodology Section */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-gradient">T.R.A.N.S.L.A.T.E.</span> Framework
            </h2>
            <p className="text-xl text-gray-300">
              A systematic approach to removing barriers and democratizing enterprise capabilities
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary-blue">Framework Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Transparent Process</p>
                      <p className="text-gray-400">No hidden complexity or manufactured barriers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Real Translation</p>
                      <p className="text-gray-400">Enterprise capabilities made accessible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Authentic Implementation</p>
                      <p className="text-gray-400">Solutions that work for your reality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Systematic Approach</p>
                      <p className="text-gray-400">Proven methodology for consistent results</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary via-secondary-purple to-primary rounded-2xl p-8 border border-primary-blue/30">
                <h3 className="text-2xl font-bold mb-6 text-white">The T.R.A.N.S.L.A.T.E. Acronym</h3>
                <div className="space-y-2 text-gray-200">
                  <p><span className="font-bold text-primary-blue">T</span>ransparent</p>
                  <p><span className="font-bold text-primary-blue">R</span>eal</p>
                  <p><span className="font-bold text-primary-blue">A</span>uthentic</p>
                  <p><span className="font-bold text-primary-blue">N</span>ecessary</p>
                  <p><span className="font-bold text-primary-blue">S</span>ystematic</p>
                  <p><span className="font-bold text-primary-blue">L</span>everaged</p>
                  <p><span className="font-bold text-primary-blue">A</span>ccessible</p>
                  <p><span className="font-bold text-primary-blue">T</span>ranslation</p>
                  <p><span className="font-bold text-primary-blue">E</span>cosystem</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button href="/methodology" size="lg" variant="outline">
                See Complete Methodology
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Our Process Section */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              How engagements actually work and what you can expect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-pink/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-accent-pink">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">Discovery</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We start by understanding your reality - your challenges, goals, and constraints.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Initial consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Current state assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Goal alignment</span>
                </li>
              </ul>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-pink/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-accent-pink">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">Translation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We translate enterprise capabilities into solutions that fit your reality.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Solution design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Technology selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Implementation roadmap</span>
                </li>
              </ul>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-pink/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-accent-pink">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">Implementation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We build, deploy, and optimize solutions with full transparency.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Agile development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Continuous feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Knowledge transfer</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated">
            <h3 className="text-2xl font-bold mb-4 text-white">Timeline & Milestones</h3>
            <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-24 text-sm font-semibold text-accent-pink flex-shrink-0">Week 1-2</div>
                  <p className="text-gray-300">Discovery and assessment phase</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-24 text-sm font-semibold text-accent-pink flex-shrink-0">Week 3-4</div>
                  <p className="text-gray-300">Solution design and translation</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-24 text-sm font-semibold text-accent-pink flex-shrink-0">Week 5+</div>
                  <p className="text-gray-300">Implementation and optimization</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Beta Program Structure Section */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Beta Program Structure</span>
            </h2>
            <p className="text-xl text-gray-300">
              A three-phase approach to building real solutions with real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <Users className="w-8 h-8 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white">Phase 1</h3>
                  <p className="text-sm text-accent-pink">Foundation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Core capabilities development with early partners
              </p>
              <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Highest cost reduction (up to 90%)</li>
                  <li>• Direct influence on product</li>
                  <li>• Dedicated support</li>
                  <li>• Lifetime partnership pricing</li>
                </ul>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <Layers className="w-8 h-8 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white">Phase 2</h3>
                  <p className="text-sm text-accent-pink">Expansion</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Proven solutions with expanded capabilities
              </p>
              <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Significant cost reduction (up to 70%)</li>
                  <li>• Early access to features</li>
                  <li>• Priority support</li>
                  <li>• Preferred pricing lock-in</li>
                </ul>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-4">
                <Eye className="w-8 h-8 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white">Phase 3</h3>
                  <p className="text-sm text-accent-pink">Maturity</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Full platform with industry-specific solutions
              </p>
              <div className="bg-primary/30 rounded-xl p-4 border border-primary-blue/20">
                <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Proven ROI (up to 50% savings)</li>
                  <li>• Complete feature set</li>
                  <li>• Standard support</li>
                  <li>• Transparent pricing</li>
                </ul>
              </div>
            </Card>
          </div>

          <Card variant="elevated">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">How to Join the Beta</h3>
              <p className="text-lg text-gray-300 mb-6">
                We&apos;re currently in Phase 1, partnering with businesses ready to be part of the democratization movement.
              </p>
              <Button href="/beta-program" size="lg">
                See All Beta Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Transparency Commitment Section */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Transparency Commitment</span>
            </h2>
            <p className="text-xl text-gray-300">
              What we show, what we don&apos;t, and why it matters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">What We Show</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Real Metrics</p>
                    <p className="text-sm text-gray-400">Actual performance, costs, and outcomes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Process Status</p>
                    <p className="text-sm text-gray-400">Current phase, progress, and blockers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Technology Stack</p>
                    <p className="text-sm text-gray-400">What we use and why we chose it</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Decision Rationale</p>
                    <p className="text-sm text-gray-400">The &apos;why&apos; behind every major choice</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-secondary-purple-light">What We Protect</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Client Privacy</p>
                    <p className="text-sm text-gray-400">Your data and business details stay private</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Proprietary Methods</p>
                    <p className="text-sm text-gray-400">Core IP that gives you competitive advantage</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Security Details</p>
                    <p className="text-sm text-gray-400">Implementation specifics that must stay secure</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Individual Performance</p>
                    <p className="text-sm text-gray-400">Team metrics aggregated, never personal</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated">
            <div className="flex items-start gap-4">
              <Eye className="w-10 h-10 text-primary-blue flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">Public Dashboard Explanation</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Our live dashboard shows real metrics from real projects - both successes and challenges. This isn&apos;t marketing; it&apos;s accountability.
                </p>
                <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20 mb-6">
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Why we do this:</span> Because democratization requires transparency. You can&apos;t trust what you can&apos;t verify.
                  </p>
                </div>
                <div className="text-center">
                  <Button href="/dashboard" size="lg">
                    View Live Dashboard
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* ClearForge Foundry CTA Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">See the Power</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how ClearForge Foundry makes complexity transparent and leverageable.
          </p>
          <Button href="/foundry" size="lg">
            See the Power
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </Section>
    </>
  );
}
