import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Users, Heart, Award, MessageCircle } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Community — The Forge',
  description: 'Join the 20% Army, connect with beta partners, and help build transparent enterprise technology.',
  canonical: '/forge/community',
});

export default function ForgeCommunityPage() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-accent-pink/20 text-accent-pink text-sm font-semibold px-4 py-2 rounded-full">
              The Forge • Community
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Community</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Engage, ask, learn, earn. Build the future of transparent enterprise technology together.
          </p>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">How to Get Involved</span>
          </h2>

          <div className="space-y-8">
            <Card variant="elevated" className="border-l-4 border-accent-pink">
              <div className="flex items-start gap-6">
                <div className="bg-accent-pink/20 rounded-full p-4 flex-shrink-0">
                  <Heart className="w-10 h-10 text-accent-pink" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">The 20% Army</h3>
                  <p className="text-gray-300 mb-4">
                    Our community of builders, operators, and advocates who contribute 20% of their time to making enterprise technology accessible and transparent.
                  </p>
                  <div className="bg-primary/30 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-300">
                      <strong className="text-white">Contribute your expertise:</strong> Write content, build tools, share knowledge, test systems. Get compensated fairly for your contributions.
                    </p>
                  </div>
                  <Button href="/community/20-percent-army" size="sm">
                    Learn About the 20% Army
                  </Button>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-primary-blue">
              <div className="flex items-start gap-6">
                <div className="bg-primary-blue/20 rounded-full p-4 flex-shrink-0">
                  <Award className="w-10 h-10 text-primary-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Beta Partners</h3>
                  <p className="text-gray-300 mb-4">
                    Early adopters who help shape the product roadmap, test features, and provide real-world feedback. Get locked-in pricing and direct access to our team.
                  </p>
                  <div className="flex gap-3">
                    <Button href="/beta" size="sm">
                      Apply for Beta
                    </Button>
                    <Button href="/community/beta-partners" variant="outline" size="sm">
                      See Partner Stories
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-secondary-purple-light">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-purple/20 rounded-full p-4 flex-shrink-0">
                  <MessageCircle className="w-10 h-10 text-secondary-purple-light" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Community Forum</h3>
                    <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-xs font-semibold">
                      COMING SOON
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Ask questions, share solutions, and connect with other builders. A dedicated space for technical discussions and collaboration.
                  </p>
                  <Button href="/contact" variant="outline" size="sm">
                    Join the Waitlist
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Real outcomes from real partners. No fluff, just results.
          </p>

          <Card variant="elevated" className="text-center py-12">
            <Users className="w-16 h-16 text-accent-pink mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Partner Stories Coming Soon</h3>
            <p className="text-lg text-gray-300 mb-6">
              We&apos;re collecting case studies from our beta partners. Check back soon for full outcomes with honest context.
            </p>
            <Button href="/community/success-stories" variant="outline">
              Learn More
            </Button>
          </Card>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Join?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you want to build, test, or contribute—there&apos;s a place for you in The Forge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta" size="lg">
              Apply for Beta
            </Button>
            <Button href="/community/20-percent-army" variant="outline" size="lg">
              Join the 20% Army
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
