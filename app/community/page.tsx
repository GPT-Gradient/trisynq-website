import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import WaitlistForm from '@/components/forms/WaitlistForm';
import { generateMetadata } from '@/components/seo/SEOHead';
import { FileText, Users, Award, GraduationCap } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Community — Coming Soon',
  description: 'A live layer of Q&As, office hours, AMAs, and collaborative build threads — tied directly into Xynergy.',
  canonical: '/community',
});

export default function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="bg-accent-pink/20 text-accent-pink px-4 py-2 rounded-full text-sm font-semibold">
              Coming Soon
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Forge it together (Coming Soon).
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            A live layer of Q&As, office hours, AMAs, and collaborative build threads — tied directly into Xynergy.
          </p>
          <div className="flex justify-center">
            <Button href="/community#waitlist" size="lg">
              Get Notified
            </Button>
          </div>
        </div>
      </Section>

      {/* Phase 1: Content Forge */}
      <Section id="phase1" background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-primary-blue/30">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-primary-blue/20 rounded-full p-6 flex-shrink-0">
                <FileText className="w-12 h-12 text-primary-blue" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Phase 1 — Content Forge
                  </h2>
                  <span className="bg-accent-pink/20 text-accent-pink px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                High-value, authentic content to build momentum and help operators now.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Blogs, opinion pieces, how-to guides, &apos;who you don&apos;t need to hire&apos;, white papers, and success stories.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-primary-blue text-xl">•</span>
                <p className="text-base text-gray-300 italic">
                  Drafts may be Xynergy-assisted; every published item is human-edited.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-blue text-xl">•</span>
                <p className="text-base text-gray-300 italic">
                  All items map to Topics and link back to The Forge.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Button href="/forge/topics" variant="outline">
                Read Articles
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Phase 2: Engagement Layer */}
      <Section id="phase2" background="medium">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-accent-pink/30">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-accent-pink/20 rounded-full p-6 flex-shrink-0">
                <Users className="w-12 h-12 text-accent-pink" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Phase 2 — Engagement Layer
                  </h2>
                  <span className="bg-accent-pink/20 text-accent-pink px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                Forums, AMAs, and live sessions to help each other solve real problems.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Accepted answers and high-signal threads auto-generate draft articles for editorial review.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent-pink text-xl">•</span>
                <p className="text-base text-gray-300">
                  Weekly office hours
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-pink text-xl">•</span>
                <p className="text-base text-gray-300">
                  Monthly AMAs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-pink text-xl">•</span>
                <p className="text-base text-gray-300">
                  Quarterly live workshops
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Phase 3: Rewards & Recognition */}
      <Section id="phase3" background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-secondary-purple-light/30">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-secondary-purple/20 rounded-full p-6 flex-shrink-0">
                <Award className="w-12 h-12 text-secondary-purple-light" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Phase 3 — Rewards & Recognition
                  </h2>
                  <span className="bg-accent-pink/20 text-accent-pink px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-200 leading-relaxed">
                Earn points for helpful answers, shipped tutorials, verified outcomes, and bug reports.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Redeem for perks, early access, and template revenue share.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Phase 4: Cohorts & Mentorship */}
      <Section id="phase4" background="medium">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-primary-blue/30">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-primary-blue/20 rounded-full p-6 flex-shrink-0">
                <GraduationCap className="w-12 h-12 text-primary-blue" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Phase 4 — Cohorts & Mentorship
                  </h2>
                  <span className="bg-accent-pink/20 text-accent-pink px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-200 leading-relaxed">
                Guided peer groups and mentor-led builds with measurable outcomes.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Topic-specific sprints tied to Proof and Topic hubs.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Get Notified / Waitlist */}
      <Section id="waitlist" background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Notified
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the waitlist and get early invites to private workshops.
            </p>
          </div>

          <WaitlistForm />
        </div>
      </Section>
    </>
  );
}
