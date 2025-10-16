import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Briefcase, Target, Rocket, CheckCircle, Calendar } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'B2B Services — Coming Soon',
  description: 'Comprehensive B2B solutions and services designed for scale. Roadmap in development. Join the waitlist to be notified when we launch.',
  canonical: '/solutions/b2b',
});

export default function B2BSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-accent-pink/20 text-accent-pink text-sm font-semibold px-4 py-2 rounded-full">
              Coming Soon
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            B2B <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Comprehensive solutions designed for B2B scale.
          </p>
          <p className="text-lg text-gray-400">
            We&apos;re building something different. Here&apos;s what&apos;s coming.
          </p>
        </div>
      </Section>

      {/* What We're Building */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            What We&apos;re <span className="text-gradient">Building</span>
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                B2B businesses need more than generic solutions. You need systems that scale, processes that transfer, and outcomes you can measure.
              </p>

              <p className="text-lg">
                We&apos;re developing a comprehensive B2B services offering that combines everything we&apos;ve learned from 20+ years in enterprise systems—tailored specifically for B2B companies that want to use technology as a revenue generator, not a budget line item.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-blue/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-primary-blue">B2B-Specific</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Not generic SaaS. Purpose-built for B2B sales cycles, account-based strategies, and long-term relationships.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent-pink/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-accent-pink" />
                </div>
                <h3 className="text-xl font-bold text-accent-pink">Built to Scale</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Systems that grow with you. From 10 accounts to 10,000. No re-platforming required.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary-purple/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-secondary-purple-light" />
                </div>
                <h3 className="text-xl font-bold text-secondary-purple-light">Proven Patterns</h3>
              </div>
              <p className="text-gray-300 text-sm">
                The same methodologies Fortune 500 B2B companies use. Just without the enterprise complexity tax.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Roadmap */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-gradient">Roadmap</span>
          </h2>

          <div className="space-y-6">
            {/* Q1 2025 */}
            <Card variant="elevated" className="border-l-4 border-accent-pink">
              <div className="flex items-start gap-6">
                <div className="bg-accent-pink/20 rounded-full px-4 py-2 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-accent-pink inline mr-2" />
                  <span className="text-accent-pink font-semibold">Q1 2025</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white">Discovery & Design</h3>
                  <p className="text-gray-300 mb-4">
                    Working with select B2B partners to understand specific pain points, document requirements, and design the first iteration of services.
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Partner interviews and requirements gathering</li>
                    <li>• Service blueprint and methodology design</li>
                    <li>• First proof-of-concept implementations</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Q2 2025 */}
            <Card variant="elevated" className="border-l-4 border-primary-blue">
              <div className="flex items-start gap-6">
                <div className="bg-primary-blue/20 rounded-full px-4 py-2 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary-blue inline mr-2" />
                  <span className="text-primary-blue font-semibold">Q2 2025</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white">Private Beta</h3>
                  <p className="text-gray-300 mb-4">
                    Launch with first 10-20 B2B partners. Test, refine, validate. Document what works and what doesn&apos;t.
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Private beta partner onboarding</li>
                    <li>• Core service offerings refined</li>
                    <li>• First ROI measurements and case studies</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Q3 2025 */}
            <Card variant="elevated" className="border-l-4 border-secondary-purple-light">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-purple/20 rounded-full px-4 py-2 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-secondary-purple-light inline mr-2" />
                  <span className="text-secondary-purple-light font-semibold">Q3 2025</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white">Public Launch</h3>
                  <p className="text-gray-300 mb-4">
                    Open to broader market with validated methodology, documented outcomes, and transparent pricing.
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Public service launch with pricing tiers</li>
                    <li>• Complete documentation and playbooks</li>
                    <li>• Self-service onboarding options</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Planned Services */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Planned <span className="text-gradient">Services</span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-12">
            These are the initial offerings we&apos;re building. Subject to change based on partner feedback.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Account-Based Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Data architecture and systems designed specifically for account-based B2B strategies. Track relationships, not just transactions.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Multi-stakeholder account mapping</li>
                <li>• Relationship intelligence platforms</li>
                <li>• Account health scoring systems</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Revenue Operations</h3>
              <p className="text-gray-300 mb-4">
                End-to-end RevOps implementation. Connect marketing, sales, and customer success with unified data and processes.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Pipeline orchestration and automation</li>
                <li>• Attribution modeling and ROI tracking</li>
                <li>• Forecasting and capacity planning</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">Content at Scale</h3>
              <p className="text-gray-300 mb-4">
                Generate B2B content that actually converts. Powered by Xynergy CORE with your voice, your expertise, your brand.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Account-specific content generation</li>
                <li>• Sales enablement materials at scale</li>
                <li>• Personalization without manual effort</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Partner Ecosystem Management</h3>
              <p className="text-gray-300 mb-4">
                Build and manage partner networks. Channel operations, co-selling, and ecosystem orchestration.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Partner portal and enablement systems</li>
                <li>• Deal registration and tracking</li>
                <li>• Co-marketing automation</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Join Waitlist CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be the <span className="text-gradient">First to Know</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the waitlist to get early access and help shape what we build.
          </p>

          <div className="bg-background-dark rounded-3xl p-8 border border-primary-blue/30 mb-8">
            <p className="text-lg text-gray-300 mb-6">
              We&apos;re looking for 10-20 B2B companies to partner with during Q1 2025 discovery phase. Help us build this right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Express Interest
              </Button>
              <Button href="/beta-program" variant="outline" size="lg">
                Learn About Partnership
              </Button>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            Want to stay updated? <a href="/contact" className="text-primary-blue hover:underline">Contact us</a> and mention B2B services.
          </p>
        </div>
      </Section>
    </>
  );
}
