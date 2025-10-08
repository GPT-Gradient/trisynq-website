import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Users, Award, BookOpen, Rocket, Target, Heart, TrendingDown, Unlock } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Community Hub',
  description: 'Join the TriSynq community of innovators, beta partners, and changemakers democratizing enterprise capabilities through transparency and collaboration.',
  canonical: '/community',
});

export default function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">The Community</span>
            <br />
            Driving Change Together
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            We&apos;re not just building technology. We&apos;re building a movement of innovators, partners, and believers who know transparency wins.
          </p>
          <div className="bg-primary/50 rounded-2xl p-6 border border-accent-pink/30 backdrop-blur-sm">
            <p className="text-lg text-white font-semibold">
              From early adopters proving the model to followers benefiting from validated transformation - everyone has a role in democratizing enterprise capabilities.
            </p>
          </div>
        </div>
      </Section>

      {/* Community Pillars */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Four Pillars of <span className="text-gradient">Our Community</span>
            </h2>
            <p className="text-xl text-gray-300">
              Different roles, shared mission: Making enterprise capabilities accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The 20% Army */}
            <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-accent-pink/20 rounded-full p-4 flex-shrink-0">
                  <Target className="w-8 h-8 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">The 20% Army</h3>
                  <p className="text-sm text-accent-pink font-semibold mb-3">Early Adopters & Innovators</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                The brave 20% who embrace change first. Beta partners proving transparency works, validating approaches, and paving the way for mass adoption.
              </p>
              <div className="bg-primary/30 rounded-xl p-4 mb-6 border border-accent-pink/20">
                <h4 className="text-sm font-bold mb-2 text-primary-blue">What They Do</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Test and validate new approaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Provide real-world feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Shape product development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Lead the transformation movement</span>
                  </li>
                </ul>
              </div>
              <Button href="/community/20-percent-army" className="w-full">
                Join the 20% Army
              </Button>
            </Card>

            {/* Beta Partners */}
            <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary-blue/20 rounded-full p-4 flex-shrink-0">
                  <Rocket className="w-8 h-8 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Beta Partners</h3>
                  <p className="text-sm text-primary-blue font-semibold mb-3">Active Collaborators</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Businesses actively working with TriSynq solutions. Real partners, not just customers - collaborating to refine tools and validate transparency.
              </p>
              <div className="bg-primary/30 rounded-xl p-4 mb-6 border border-primary-blue/20">
                <h4 className="text-sm font-bold mb-2 text-accent-pink">Partner Benefits</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue">•</span>
                    <span>Early access to new capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue">•</span>
                    <span>Direct influence on product roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue">•</span>
                    <span>Preferential pricing and terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue">•</span>
                    <span>Recognition as movement leaders</span>
                  </li>
                </ul>
              </div>
              <Button href="/community/beta-partners" variant="outline" className="w-full">
                Explore Partnerships
              </Button>
            </Card>

            {/* Success Stories */}
            <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary-purple/20 rounded-full p-4 flex-shrink-0">
                  <Award className="w-8 h-8 text-secondary-purple-light" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Success Stories</h3>
                  <p className="text-sm text-secondary-purple-light font-semibold mb-3">Proof Points & Case Studies</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Real transformations from real businesses. Transparent results showing what happens when SMBs gain enterprise capabilities.
              </p>
              <div className="bg-primary/30 rounded-xl p-4 mb-6 border border-secondary-purple/20">
                <h4 className="text-sm font-bold mb-2 text-accent-pink">Featured Stories</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-purple-light">•</span>
                    <span>Documented transformations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-purple-light">•</span>
                    <span>Measurable impact metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-purple-light">•</span>
                    <span>Lessons learned and insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-purple-light">•</span>
                    <span>Before and after comparisons</span>
                  </li>
                </ul>
              </div>
              <Button href="/community/success-stories" variant="outline" className="w-full">
                Read Success Stories
              </Button>
            </Card>

            {/* Resources & Content */}
            <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-accent-pink/20 rounded-full p-4 flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Resources & Content</h3>
                  <p className="text-sm text-accent-pink font-semibold mb-3">Learn & Stay Updated</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Educational content, guides, and updates from the transparency movement. Everything you need to understand and leverage enterprise capabilities.
              </p>
              <div className="bg-primary/30 rounded-xl p-4 mb-6 border border-accent-pink/20">
                <h4 className="text-sm font-bold mb-2 text-primary-blue">Available Resources</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Xynergy Launch Platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>AI amplification tutorials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Best practices and frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink">•</span>
                    <span>Community updates and insights</span>
                  </li>
                </ul>
              </div>
              <Button href="/community/xynergy-launch" variant="outline" className="w-full">
                Explore Resources
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      {/* Xynergy Launch Section */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-accent-pink/30">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-accent-pink/20 rounded-full p-6 flex-shrink-0">
                <Rocket className="w-12 h-12 text-accent-pink" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  Xynergy Launch: <span className="text-gradient">Escape Vendor Dependency</span>
                </h2>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-200 leading-relaxed">
                We&apos;re building a comprehensive training platform that teaches small businesses how to break free from expensive software subscriptions and build enterprise-grade solutions on bootstrap budgets. Through detailed guides, video tutorials, and live implementation sessions, we show you exactly how to replace tools costing $500-5,000/month with free or low-cost alternatives that actually work better for your business.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                Our first five focus areas tackle the biggest cost drains for small businesses: email marketing automation, customer relationship management, AI-powered customer service, social media management, and local search optimization. Each area includes free educational content to get started, complete implementation guides for those ready to build, and advanced training for businesses that want enterprise-level capabilities without enterprise pricing.
              </p>

              <div className="bg-background-dark/50 rounded-xl p-6 border border-accent-pink/30">
                <div className="flex items-start gap-4 mb-4">
                  <Unlock className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">What Makes This Different?</h3>
                    <p className="text-gray-200 mb-4">
                      <strong className="text-accent-pink">Complete transparency.</strong> We show you our actual processes, our real tool stacks, and exactly how we use AI to accomplish in hours what traditionally takes weeks. Every piece of content is generated using our own Xynergy AI platform—proving that the methodology works while teaching you to do the same. You&apos;re not just learning theory; you&apos;re seeing working implementations from real small businesses that went from paying thousands monthly to paying pennies, all while gaining more control and better results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingDown className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-200">
                      Whether you&apos;re a one-person operation tired of subscription creep or a growing business ready to compete with larger companies through technology, Xynergy Launch gives you the enterprise playbook translated for your scale and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button href="/community/xynergy-launch" size="lg" className="text-lg px-8 py-6">
                Explore Xynergy Launch
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Community Impact */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Collective Impact</span>
            </h2>
            <p className="text-xl text-gray-300">
              When innovators collaborate, barriers fall faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card variant="bordered">
              <div className="text-center">
                <Users className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Shared Learning</h3>
                <p className="text-gray-300">
                  Every success teaches the community. Every challenge makes us stronger together.
                </p>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="text-center">
                <Heart className="w-12 h-12 text-accent-pink mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Authentic Collaboration</h3>
                <p className="text-gray-300">
                  Real partnerships, not vendor relationships. We succeed when you succeed.
                </p>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="text-center">
                <Target className="w-12 h-12 text-secondary-purple-light mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Movement Building</h3>
                <p className="text-gray-300">
                  Together we&apos;re proving transparency works and demanding it everywhere.
                </p>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-secondary-purple-light/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">The Community Vision</h3>
              <p className="text-lg text-gray-200 mb-6">
                A world where 43% of GDP isn&apos;t systematically excluded from technology advantages. Where SMBs compete on creativity and expertise, not access to enterprise capabilities.
              </p>
              <div className="bg-background-dark/50 rounded-xl p-6">
                <p className="text-accent-pink font-bold text-xl">
                  Until transparency becomes inevitable. Until barriers come down. Until the playing field is level.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Join the Movement CTA */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-gradient">Movement</span>
            </h2>
            <p className="text-xl text-gray-300">
              Whether you&apos;re ready to lead as part of the 20% or follow as part of the 80%, there&apos;s a place for you in this community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">For Innovators</h3>
              <p className="text-gray-300 mb-6">
                Be part of the 20% proving transparency works. Apply for beta partnership and help shape the future.
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">✓</span>
                  <span>Early access to all capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">✓</span>
                  <span>Direct influence on development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">✓</span>
                  <span>Recognition as movement leader</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">✓</span>
                  <span>Preferential partnership terms</span>
                </li>
              </ul>
              <Button href="/beta" className="w-full" size="lg">
                Apply for Beta Partnership
              </Button>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">For Followers</h3>
              <p className="text-gray-300 mb-6">
                Join the 80% benefiting from validated transformation. Stay updated and ready for when transparency arrives.
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">✓</span>
                  <span>Regular updates on progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">✓</span>
                  <span>Access to educational resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">✓</span>
                  <span>Transparent success stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">✓</span>
                  <span>Early notification of new offerings</span>
                </li>
              </ul>
              <Button href="/contact" variant="outline" className="w-full" size="lg">
                Stay Connected
              </Button>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-accent-pink/30 text-center">
            <p className="text-2xl font-bold mb-4 text-white">
              Everyone Has a Role
            </p>
            <p className="text-lg text-gray-300">
              From beta partners proving the model to followers benefiting from validated solutions - together we&apos;re making enterprise capabilities accessible to all.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
