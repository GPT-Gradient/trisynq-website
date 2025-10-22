import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { DollarSign, TrendingDown, CheckCircle } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Pricing — ClearForge Foundry',
  description: 'Transparent, usage-based pricing. Pay for what you use. Costs decrease as intelligence compounds. No enterprise complexity tax.',
  canonical: '/foundry/pricing',
});

export default function FoundryPricingPage() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Pay for what you use. Costs decrease as intelligence compounds.
          </p>
          <p className="text-lg text-gray-400">
            No enterprise complexity tax. No hidden fees. Full transparency.
          </p>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient">Pricing Philosophy</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="elevated" className="text-center">
              <DollarSign className="w-12 h-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Usage-Based</h3>
              <p className="text-gray-300 text-sm">
                Pay only for what you actually use. No seat licenses. No platform fees.
              </p>
            </Card>

            <Card variant="elevated" className="text-center">
              <TrendingDown className="w-12 h-12 text-accent-pink mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Decreasing Costs</h3>
              <p className="text-gray-300 text-sm">
                As our intelligence compounds, your costs go down. Not up.
              </p>
            </Card>

            <Card variant="elevated" className="text-center">
              <CheckCircle className="w-12 h-12 text-secondary-purple-light mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Transparent</h3>
              <p className="text-gray-300 text-sm">
                See exact costs before each operation. No surprises.
              </p>
            </Card>
          </div>

          <Card variant="elevated" className="border-2 border-primary-blue/30">
            <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-primary-blue font-bold">1.</span>
                <p><strong className="text-white">First use:</strong> You pay for external API calls, processing, and storage.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-blue font-bold">2.</span>
                <p><strong className="text-white">Intelligence builds:</strong> Verified facts get cached. Patterns get recognized. Less external data needed.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-blue font-bold">3.</span>
                <p><strong className="text-white">Costs decrease:</strong> Month 1: High costs. Month 6: 40% reduction. Month 12: 70% reduction.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-blue font-bold">4.</span>
                <p><strong className="text-white">You benefit:</strong> Better intelligence at lower cost. The opposite of traditional SaaS.</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="text-gradient">Beta Pricing</span>
          </h2>

          <Card variant="elevated" className="border-2 border-accent-pink/30 mb-8">
            <p className="text-xl text-gray-200 text-center mb-6">
              We&apos;re still finalizing standard pricing. Beta partners get special early-access rates.
            </p>

            <div className="bg-primary/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Beta Partner Benefits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Locked-in rates:</strong> Your beta pricing never increases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Volume discounts:</strong> Start immediately, not after hitting thresholds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Feature access:</strong> Beta partners get early access to new capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Direct support:</strong> Work directly with our team</span>
                </li>
              </ul>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              Interested in beta pricing? Apply to the program or contact our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/beta" size="lg">
                Apply for Beta
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About <span className="text-gradient">Pricing?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re happy to walk you through how usage-based pricing works for your specific use case.
          </p>
          <Button href="/contact" size="lg">
            Schedule a Call
          </Button>
        </div>
      </Section>
    </>
  );
}
