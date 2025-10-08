import { Metadata } from 'next';
import { ArrowRight, Check, X, HelpCircle, Zap, Users, Shield, Rocket } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Beta Program | First 100 Partners Building the Future',
  description: 'Join the first 100 qualified partners. Lifetime access to ALL platforms, unlimited affiliate revenue, direct team access. Not customers—partners proving transformation works.',
});

export default function BetaPage() {
  return (
    <>
      {/* Program Overview */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            First <span className="text-gradient">100 Partners</span> Building the Future
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Not first 100 customers. First 100 qualified partners.
          </p>

          <div className="bg-primary/50 rounded-2xl p-6 border border-accent-pink/30 backdrop-blur-sm">
            <p className="text-lg font-semibold text-white">
              Applications open now. Spots filled as qualified partners come on board.
            </p>
          </div>
        </div>
      </Section>

      {/* Complete Value Proposition */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What You <span className="text-gradient">Get</span>
          </h2>
          <p className="text-xl text-gray-400">
            Complete value proposition for beta partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card variant="bordered">
            <div className="flex items-start gap-4">
              <Rocket className="w-8 h-8 text-accent-pink flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Lifetime Platform Access</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>ALL platforms we build (6+ platforms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Not just Project NEXUS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Every future innovation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>No subscription fees, ever</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card variant="bordered">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-accent-pink flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Unlimited Affiliate Revenue</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Referral links to every platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Revenue share on every referral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Includes all future platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>No caps, no limits, no expiration</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card variant="bordered">
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-accent-pink flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Direct Team Access</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Strategic guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Implementation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Methodology refinement collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Problem-solving partnership</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card variant="bordered">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-accent-pink flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Implementation Support</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Complete onboarding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Training and education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Ongoing optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Technical assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3 text-primary-blue">Public Success Showcase</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Industry authority positioning</li>
              <li>• Case study opportunities (with permission)</li>
              <li>• Community leadership recognition</li>
              <li>• Transparent results documentation</li>
            </ul>
          </Card>

          <Card variant="elevated">
            <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Partnership in Building</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Your feedback shapes evolution</li>
              <li>• Your success proves methodology</li>
              <li>• Your results help others</li>
              <li>• Your expertise valued</li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 bg-primary/30 rounded-2xl p-6 border border-accent-pink/30">
          <p className="text-lg text-center text-white">
            We&apos;re a startup. No fancy pricing tiers. No hidden costs. Partnership terms discussed during qualification. If you&apos;re the right fit, we&apos;ll make it work.
          </p>
        </div>
      </Section>

      {/* The Commitment */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            The <span className="text-gradient">Commitment</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-4 text-primary-blue flex items-center gap-2">
                <Check className="w-6 h-6 text-accent-pink" />
                What We Promise
              </h3>
              <p className="text-gray-300">
                We&apos;ll bust our asses to make this work. Complete transparency. Real partnership.
              </p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-4 text-accent-pink flex items-center gap-2">
                <X className="w-6 h-6 text-accent-pink" />
                What We Don&apos;t Promise
              </h3>
              <p className="text-gray-300">
                Overnight success. Zero failures. Magic solutions. We&apos;re building this together.
              </p>
            </Card>
          </div>

          <Card variant="elevated">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">The Honesty</h3>
              <p className="text-xl text-white">
                If methodology doesn&apos;t work, we don&apos;t deserve your partnership. But we&apos;ve tested this privately and we&apos;re confident enough to prove it publicly.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Qualification Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Qualification</span> Process
          </h2>
          <p className="text-xl text-gray-400">
            Not everyone qualifies. That&apos;s okay.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Who Qualifies */}
            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue flex items-center gap-2">
                <Check className="w-7 h-7 text-accent-pink" />
                Who Qualifies
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-white mb-2">The 20% Characteristics:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Leaders willing to test bold approaches</li>
                    <li>• Innovators tired of vendor dependency</li>
                    <li>• Experts whose voices get drowned out</li>
                    <li>• Businesses valuing transformation over hype</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">What We Look For:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Genuine expertise worth amplifying</li>
                    <li>• Willingness to document journey</li>
                    <li>• Partnership mindset</li>
                    <li>• Commitment to implementation</li>
                    <li>• Openness to transparent results sharing</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Who Doesn't Qualify */}
            <Card variant="bordered">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink flex items-center gap-2">
                <X className="w-7 h-7 text-accent-pink" />
                Who Doesn&apos;t Qualify
              </h3>

              <div className="space-y-4">
                <h4 className="font-bold text-white mb-2">Not For:</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Those seeking passive solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Businesses unwilling to try new approaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Organizations demanding guaranteed outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Those uncomfortable with transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-accent-pink mt-1 flex-shrink-0" />
                    <span>Entities just looking for another vendor</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Application Process */}
          <Card variant="elevated" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Application Process</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="bg-accent-pink/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent-pink">1</span>
                </div>
                <h4 className="font-bold text-white mb-2">Submit Application</h4>
                <p className="text-sm text-gray-400">Business details and goals</p>
              </div>

              <div className="text-center">
                <div className="bg-accent-pink/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent-pink">2</span>
                </div>
                <h4 className="font-bold text-white mb-2">Assessment Call</h4>
                <p className="text-sm text-gray-400">Direct conversation with team</p>
              </div>

              <div className="text-center">
                <div className="bg-accent-pink/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent-pink">3</span>
                </div>
                <h4 className="font-bold text-white mb-2">Partnership Fit</h4>
                <p className="text-sm text-gray-400">Mutual evaluation</p>
              </div>

              <div className="text-center">
                <div className="bg-accent-pink/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent-pink">4</span>
                </div>
                <h4 className="font-bold text-white mb-2">Onboarding</h4>
                <p className="text-sm text-gray-400">If qualified, we begin</p>
              </div>
            </div>

            <p className="text-center text-gray-400">
              <strong className="text-white">Timeline:</strong> Assessment within 48 hours
            </p>
          </Card>
        </div>
      </Section>

      {/* Current Beta Partners */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Current <span className="text-gradient">Beta Partners</span>
          </h2>

          <Card variant="bordered" className="mb-8">
            <p className="text-xl text-gray-300 mb-6">
              Success stories coming soon. We&apos;re just getting started.
            </p>

            <div className="bg-primary/30 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">What&apos;s Coming:</h4>
              <ul className="text-left space-y-2 text-gray-400">
                <li>✓ Anonymized results (unless partner approves public identity)</li>
                <li>✓ Industry diversity proving methodology</li>
                <li>✓ Real metrics with context</li>
                <li>✓ Learning showcase across implementations</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* The Opportunity */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            The <span className="text-gradient">Opportunity</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Legacy Period</h3>
              <p className="text-gray-300">
                2-3 year window where early movers gain compounding advantages
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">First-Mover Advantage</h3>
              <p className="text-gray-300">
                Proving transparency works before market saturates
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Community Authority</h3>
              <p className="text-gray-300">
                Being known as pioneer in transformation
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Lifetime Value</h3>
              <p className="text-gray-300">
                Access to everything we build, forever
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient">FAQ</span>
          </h2>

          <div className="space-y-6">
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Why only 100?</h3>
                  <p className="text-gray-300">
                    Focused partnerships for quality refinement. We&apos;re a startup, not a corporation. We need to prove this works before scaling.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">What happens after 100?</h3>
                  <p className="text-gray-300">
                    Phase 2 opens to more partners at different terms once we&apos;ve proven methodology publicly.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Can I lose access?</h3>
                  <p className="text-gray-300">
                    No. Lifetime means lifetime. We don&apos;t play games.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">What if I don&apos;t use all platforms?</h3>
                  <p className="text-gray-300">
                    Access remains regardless. You&apos;re partnering in building all of this.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">How do affiliate revenues work?</h3>
                  <p className="text-gray-300">
                    Transparent calculation shared during qualification. No hidden math.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">What about cost?</h3>
                  <p className="text-gray-300">
                    Partnership terms discussed during qualification. We&apos;re flexible for the right fit.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">What if methodology doesn&apos;t work for me?</h3>
                  <p className="text-gray-300">
                    We&apos;re confident it will. But if we&apos;re wrong, we&apos;re wrong. We&apos;ll figure it out together.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Build the Future</span>?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Join the first 100 partners proving transparency works
          </p>

          <div className="bg-accent-pink/10 rounded-2xl p-8 border border-accent-pink/30 mb-8">
            <p className="text-2xl font-bold text-accent-pink mb-4">
              If our methodology doesn&apos;t work, we don&apos;t deserve your partnership. Period.
            </p>
            <p className="text-gray-300">
              But we&apos;ve tested this privately and we&apos;re confident enough to prove it publicly.
            </p>
          </div>

          <Button href="/contact" size="lg">
            Apply for Beta Partnership
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </Section>
    </>
  );
}
