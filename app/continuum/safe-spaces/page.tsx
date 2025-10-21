import { Metadata } from 'next';
import { Shield, Video, MessageCircle, Eye, Lock, Users, CheckCircle, AlertTriangle } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Safe Spaces: Transparency Without Surveillance',
  description: 'We design systems where people feel secure because they understand what&apos;s happening behind the curtain.',
});

export default function ProjectSafeSpacesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-blue/20 p-4 rounded-full border border-primary-blue/30">
              <Shield className="w-12 h-12 text-primary-blue" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Safe Spaces: Transparency Without Surveillance.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Safety built on comprehension, not fear.
          </p>

          <div className="inline-flex items-center gap-2 bg-pink-400/20 border border-pink-400/30 rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-semibold">Planning 2026</span>
          </div>

          <div className="bg-primary/50 rounded-2xl p-6 border border-accent-pink/30 backdrop-blur-sm">
            <p className="text-lg md:text-xl font-semibold text-white">
              Kids need safe digital expression environments. This isn&apos;t optional—it&apos;s critical.
            </p>
          </div>
        </div>
      </Section>

      {/* The Current Problem */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">The Problem</span>
          </h2>

          <Card variant="bordered" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">Trust dies where surveillance begins.</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Video className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Kids Want to Create</h4>
                  <p className="text-gray-300">Podcasts, vlogs, content creation—this generation expresses themselves digitally. It&apos;s how they communicate and learn.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Current Platforms Are Dangerous</h4>
                  <p className="text-gray-300">Bullying, predators, inappropriate content, toxic commenting—existing platforms expose kids to real harm.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-secondary-purple-light mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Neither Extreme Works</h4>
                  <p className="text-gray-300">Parents either over-restrict (stifling development) or under-protect (exposing to harm). There&apos;s no good middle ground.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
              <p className="text-lg text-white">
                <strong className="text-red-400">The Consequence:</strong> Creative expression gets stifled or safety gets compromised. We&apos;re forcing an impossible choice.
              </p>
            </div>
          </Card>

          <div className="bg-accent-pink/10 rounded-2xl p-8 border border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-accent-pink">There Has To Be a Better Way</h3>
            <p className="text-xl text-center text-white">
              What if kids could express themselves creatively AND be actually safe? What if parents had real control without being helicopter monitors?
            </p>
          </div>
        </div>
      </Section>

      {/* The Vision */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">The Approach</span>
          </h2>

          <div className="text-center mb-8">
            <p className="text-xl text-gray-300">
              Visible controls, audit trails, explainable AI moderation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <Video className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">Kids Create Content Safely</h3>
                  <p className="text-gray-300">Podcasts, vlogs, creative expression—but in an environment designed for their safety from the ground up.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent-pink">Parents Maintain Control</h3>
                  <p className="text-gray-300">Ultimate control with age-appropriate transparency. See everything. Control everything. Without being overbearing.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-6 h-6 text-secondary-purple-light flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Reimagined Engagement</h3>
                  <p className="text-gray-300">Public engagement without toxic commenting. Interaction that encourages, not tears down.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">Multiple Security Layers</h3>
                  <p className="text-gray-300">External and internal security. Content review before publishing. Anti-bullying and anti-grooming monitoring.</p>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="bordered">
            <h3 className="text-2xl font-bold mb-6 text-center text-gradient">The Outcome</h3>
            <p className="text-xl text-center text-white mb-4">
              Users who feel safe because they are informed.
            </p>
            <p className="text-lg text-center text-gray-300">
              Not by restricting creativity. By engineering safety into every interaction.
            </p>
          </Card>
        </div>
      </Section>

      {/* Success Metrics */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            How We&apos;ll <span className="text-gradient">Measure Success</span>
          </h2>

          <div className="space-y-6">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Less than 1% Predatory Incidents</h3>
                  <p className="text-gray-300">Grooming and predatory behavior stopped before reaching children. Security layers actually working.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Dramatic Cyberbullying Reduction</h3>
                  <p className="text-gray-300">Measurably lower bullying rates vs. traditional platforms. Kids feel safe to express themselves.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Age-Appropriate Content Maintained</h3>
                  <p className="text-gray-300">Consistently appropriate content through effective review and filtering systems.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Kids Feel Safe to Express</h3>
                  <p className="text-gray-300">Children report feeling safe, heard, and encouraged. Creative expression flourishing.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Effective Parental Control</h3>
                  <p className="text-gray-300">Parents have meaningful control without stifling healthy development. Balance achieved.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Positive Mental Health Impact</h3>
                  <p className="text-gray-300">Measurable improvements in mental health and creative development vs. traditional platforms.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Security Approach */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            The <span className="text-gradient">Security Approach</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-3">
                <Eye className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <h3 className="text-xl font-bold text-primary-blue">Parental Control</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Ultimate control with age-appropriate transparency. Parents see everything and control publishing.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Content approval before publishing</li>
                <li>• Interaction monitoring and control</li>
                <li>• Age-appropriate dashboard visibility</li>
                <li>• Granular permission settings</li>
              </ul>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-6 h-6 text-accent-pink flex-shrink-0" />
                <h3 className="text-xl font-bold text-accent-pink">Content Review</h3>
              </div>
              <p className="text-gray-300 mb-4">
                All content reviewed before going live. Multiple layers ensuring appropriateness.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• AI-powered initial screening</li>
                <li>• Human review for flagged content</li>
                <li>• Parent final approval</li>
                <li>• Age-appropriate standards enforcement</li>
              </ul>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-3">
                <MessageCircle className="w-6 h-6 text-secondary-purple-light flex-shrink-0" />
                <h3 className="text-xl font-bold text-secondary-purple-light">Interaction Monitoring</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Public interactions and DMs actively monitored for safety concerns.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Real-time pattern detection</li>
                <li>• Grooming behavior identification</li>
                <li>• Bullying prevention systems</li>
                <li>• Inappropriate contact blocking</li>
              </ul>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-3 mb-3">
                <Lock className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <h3 className="text-xl font-bold text-primary-blue">AI-Powered Protection</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Advanced pattern detection with human oversight. Technology protecting, humans deciding.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Threat pattern recognition</li>
                <li>• Behavioral analysis</li>
                <li>• Automatic flagging system</li>
                <li>• Parent notification on concerns</li>
              </ul>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Security Architecture</h3>
            <p className="text-lg text-center text-gray-300 mb-4">
              Multiple independent security layers. If one layer misses something, others catch it.
            </p>
            <p className="text-xl font-bold text-center text-accent-pink">
              Redundancy by design. Safety isn&apos;t optional.
            </p>
          </div>
        </div>
      </Section>

      {/* Engagement Reimagined */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Engagement Reimagined</span>
          </h2>

          <Card variant="bordered" className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-primary-blue">Beyond Toxic Comments</h3>
            <p className="text-lg text-gray-300 mb-6">
              Traditional platform engagement is broken. Comments become weapons. Likes become validation addiction. We&apos;re rethinking the entire model.
            </p>

            <div className="space-y-4">
              <div className="bg-primary/30 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-2">Encouraging, Not Tearing Down</h4>
                <p className="text-gray-300">Interaction designed to uplift. Constructive feedback. Genuine encouragement. No anonymous attacks.</p>
              </div>

              <div className="bg-primary/30 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-2">Moderated Community Participation</h4>
                <p className="text-gray-300">Community can engage, but through safe channels with active monitoring. Connection without exposure.</p>
              </div>

              <div className="bg-primary/30 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-2">Age-Appropriate Feedback</h4>
                <p className="text-gray-300">Feedback systems designed for children&apos;s development. Building confidence, not destroying it.</p>
              </div>
            </div>
          </Card>

          <div className="bg-accent-pink/10 rounded-2xl p-8 border border-accent-pink/30">
            <p className="text-xl text-center text-white">
              What if platforms encouraged kids instead of exposing them to the worst of humanity?
            </p>
          </div>
        </div>
      </Section>

      {/* Xynergy Integration */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/30 rounded-2xl p-8 border border-primary-blue/20 mb-12">
            <p className="text-lg text-gray-300 mb-6">
              This domain is powered by Xynergy services with explainable workflows.
            </p>
            <div className="text-center">
              <Button href="/foundry" variant="outline" size="lg">
                See the Power
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Timeline</span> and Development
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Current: Research & Planning</h3>
              <p className="text-gray-300">Studying child safety, consulting experts, designing security architecture. Getting this right from foundation.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">2026: Development & Beta Testing</h3>
              <p className="text-gray-300">Build platform. Partner with families for testing. Validate security layers work. Document everything.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Beyond: Proven Safe Platform</h3>
              <p className="text-gray-300">White-label platform for organizations committed to child safety. Proven model for safe digital expression.</p>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-accent-pink/30 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Want Updates?</h3>
            <p className="text-gray-300 mb-6">
              First 100 partners across ALL Continuum projects get access when each launches—including Project Safe Spaces.
            </p>
            <Button href="/beta" size="lg">
              Join the First 100 (All Projects)
            </Button>
          </div>
        </div>
      </Section>

      {/* The Commitment */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient">Non-Negotiable Commitment</span>
          </h2>

          <Card variant="bordered">
            <p className="text-xl text-gray-300 mb-6">
              We won&apos;t launch this until kids are provably safer than on traditional platforms. Until parents have real control. Until creative expression and safety genuinely coexist.
            </p>

            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20 mb-6">
              <p className="text-2xl font-bold text-accent-pink mb-4">
                Children&apos;s safety is non-negotiable.
              </p>
              <p className="text-lg text-white">
                We&apos;ll delay. We&apos;ll rebuild. We&apos;ll scrap and restart if needed. But we won&apos;t compromise on keeping kids safe.
              </p>
            </div>

            <p className="text-lg text-gray-400 mb-6">
              This is bigger than us. This is about giving the next generation a safe place to express themselves digitally.
            </p>

            <p className="text-xl font-bold text-white">
              That responsibility demands perfection. We&apos;re committed to achieving it.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
