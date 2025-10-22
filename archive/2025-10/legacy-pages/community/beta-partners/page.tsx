import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Users, Award, TrendingUp, Target, CheckCircle, Clock } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Beta Partners: Co-Creators of the Forge',
  description: 'We don\'t have clients. We have collaborators.',
  canonical: '/community/beta-partners',
});

export default function BetaPartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Beta Partners: <span className="text-gradient">Co-Creators of the Forge.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            We don&apos;t have clients. We have collaborators.
          </p>
          <p className="text-xl text-gray-300">
            Early access, lifetime upside, shared proofs.
          </p>
        </div>
      </Section>

      {/* Overview */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                The <span className="text-gradient">Program</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Complete transparency. Real partnerships. Documented results.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/30">
                  <Users className="w-12 h-12 text-accent-pink mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">100</div>
                  <p className="text-gray-300">Partner Limit</p>
                  <p className="text-sm text-gray-400 mt-2">First 100 qualified partners</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/30">
                  <Target className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">6+</div>
                  <p className="text-gray-300">Platforms</p>
                  <p className="text-sm text-gray-400 mt-2">Lifetime access to all</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple/30">
                  <TrendingUp className="w-12 h-12 text-secondary-purple-light mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <p className="text-gray-300">Transparency</p>
                  <p className="text-sm text-gray-400 mt-2">All results documented publicly</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent-pink/20 to-secondary-purple/20 rounded-2xl p-6 border border-accent-pink/30">
                <p className="text-lg text-gray-300">
                  <strong className="text-white">Current Status:</strong> Applications open. Spots filled as qualified partners join.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Partner Showcase */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Partner <span className="text-gradient">Showcase</span>
            </h2>
            <p className="text-xl text-gray-300">
              Real partners. Real results. Real transparency.
            </p>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="text-center py-8">
              <Award className="w-16 h-16 text-accent-pink mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Coming Soon</h3>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                We&apos;re just starting. Private beta complete. Public beta partners joining now.
              </p>
              <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/30 max-w-3xl mx-auto">
                <h4 className="text-lg font-bold mb-3 text-primary-blue">What You&apos;ll See Here</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Individual partner case studies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Real metrics with full context</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Methodology impact documentation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Community leadership examples</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Transparent learning (wins & losses)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-1" />
                    <span className="text-gray-300">How partners refine approaches</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="bordered" className="border-accent-pink/30">
            <div className="text-center">
              <p className="text-lg text-gray-300 italic">
                &quot;We won&apos;t fake success stories. We&apos;re a startup proving something. Check back as the first 100 partners document transformation.&quot;
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Partner Benefits */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Partner <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300">
              For Project NEXUS Beta Partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <Target className="w-10 h-10 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Lifetime Platform Access</h3>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>ALL platforms we build (not just ASO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Every future innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>No subscription fees, ever</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>6+ platforms in the Continuum</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Unlimited Affiliate Revenue</h3>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">•</span>
                  <span>Referral links to every platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">•</span>
                  <span>Revenue share on every referral</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">•</span>
                  <span>Includes all future platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">•</span>
                  <span>No caps, no limits, no expiration</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-10 h-10 text-secondary-purple-light flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Direct Team Access</h3>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-purple-light">•</span>
                  <span>Strategic guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-purple-light">•</span>
                  <span>Methodology refinement collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-purple-light">•</span>
                  <span>Problem-solving partnership</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-purple-light">•</span>
                  <span>Your feedback shapes evolution</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-4">
                <Award className="w-10 h-10 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Implementation Support</h3>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Complete onboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Training and education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Ongoing optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Technical assistance</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="bordered" className="border-accent-pink/50 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Public Success Showcase</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-primary/30 rounded-xl p-4">
                  <p className="text-gray-300">Industry authority positioning</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-4">
                  <p className="text-gray-300">Case study opportunities</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-4">
                  <p className="text-gray-300">Community leadership recognition</p>
                </div>
              </div>
              <p className="text-lg text-gray-300">
                <strong className="text-white">Partnership:</strong> Your success proves methodology. Your results help others. Your expertise matters.
              </p>
            </div>
          </Card>

          <Card variant="elevated">
            <div className="bg-gradient-to-r from-accent-pink/20 to-secondary-purple/20 rounded-2xl p-6 border border-accent-pink/30">
              <h3 className="text-xl font-bold mb-3 text-white text-center">Investment Required</h3>
              <p className="text-lg text-gray-300 text-center">
                Terms discussed during qualification. Flexible for the right fit. No hidden costs.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Application Process */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Application <span className="text-gradient">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card variant="elevated">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Submit</h3>
                <p className="text-gray-300 text-sm">
                  Application with business details
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Assess</h3>
                <p className="text-gray-300 text-sm">
                  Assessment call with team
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Evaluate</h3>
                <p className="text-gray-300 text-sm">
                  Partnership fit evaluation
                </p>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Begin</h3>
                <p className="text-gray-300 text-sm">
                  If qualified, onboarding starts
                </p>
              </div>
            </Card>
          </div>

          <Card variant="bordered" className="border-accent-pink/50 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Qualification Criteria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h4 className="text-lg font-bold mb-3 text-accent-pink">Who Qualifies</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                      <span>Leaders willing to test bold approaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                      <span>Innovators tired of vendor dependency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                      <span>Experts whose voices get drowned out</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                      <span>Businesses valuing transformation over hype</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold mb-3 text-primary-blue">What We Look For</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                      <span>Genuine expertise worth amplifying</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                      <span>Willingness to document journey</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                      <span>Partnership mindset</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                      <span>Commitment to implementation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/30 rounded-xl p-4">
                <p className="text-lg text-gray-300">
                  <strong className="text-white">Timeline:</strong> Assessment within 48 hours
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button href="/beta" size="lg" className="mb-4">
              Apply for Beta Partnership
            </Button>
            <p className="text-gray-300 mb-2">
              Not everyone qualifies. That&apos;s okay.
            </p>
            <p className="text-gray-400">
              We&apos;re looking for the 20% who want to prove something.
            </p>
          </div>
        </div>
      </Section>

      {/* Guarantee */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <Card variant="bordered" className="border-accent-pink/50">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our <span className="text-gradient">Guarantee</span>
              </h2>
              <p className="text-2xl font-bold text-accent-pink mb-6">
                If it doesn&apos;t work, we don&apos;t deserve your partnership. Period.
              </p>
              <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/30">
                <p className="text-xl text-gray-300 mb-4">
                  <strong className="text-white">What We Promise:</strong> We&apos;ll make this work. Complete transparency. Real partnership.
                </p>
                <p className="text-xl text-gray-300">
                  <strong className="text-white">What We Don&apos;t Promise:</strong> Overnight success. Zero failures. Magic. We&apos;re building together.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
