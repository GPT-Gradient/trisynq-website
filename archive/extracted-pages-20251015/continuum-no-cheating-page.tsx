import { Metadata } from 'next';
import { GraduationCap, BookOpen, Brain, Users, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Project No-Cheating - AI That Actually Educates | TriSynq Continuum',
  description: 'Proving AI enhances learning vs. enabling shortcuts. Adaptive educational AI that tutors, personalizes, and teaches proper AI usage from early age. Planning 2025.',
});

export default function ProjectNoCheatingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-blue/20 p-4 rounded-full border border-primary-blue/30">
              <GraduationCap className="w-12 h-12 text-primary-blue" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Project No-Cheating</span>
            <br />
            Educational AI Done Right
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Proving AI enhances learning vs. enabling shortcuts
          </p>

          <div className="inline-flex items-center gap-2 bg-purple-400/20 border border-purple-400/30 rounded-full px-6 py-3 mb-8">
            <BookOpen className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold">Planning 2025 - Research Active</span>
          </div>

          <div className="bg-primary/50 rounded-2xl p-6 border border-accent-pink/30 backdrop-blur-sm">
            <p className="text-lg md:text-xl font-semibold text-white">
              Education transformation matters to our entire team. This one&apos;s personal.
            </p>
          </div>
        </div>
      </Section>

      {/* The Current Problem */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The <span className="text-gradient">Educational Dilemma</span>
          </h2>

          <Card variant="bordered" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-accent-pink">Two Broken Approaches</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <h4 className="text-xl font-bold text-red-400">AI Banned from Education</h4>
                </div>
                <p className="text-gray-300">Fear of cheating leads to complete prohibition. Students miss learning critical future skills.</p>
              </div>

              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <h4 className="text-xl font-bold text-red-400">AI Used as Shortcut</h4>
                </div>
                <p className="text-gray-300">Students use AI to skip learning entirely. Understanding and retention suffer.</p>
              </div>
            </div>

            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20">
              <p className="text-lg text-gray-300">
                <strong className="text-white">The Real Issue:</strong> Educational technology hasn&apos;t figured out how to personalize at scale or teach proper AI usage.
              </p>
            </div>
          </Card>

          <div className="bg-accent-pink/10 rounded-2xl p-8 border border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-accent-pink">The Missed Opportunity</h3>
            <p className="text-xl text-center text-white">
              AI could revolutionize personalized learning if used transparently and correctly. We&apos;re letting fear prevent transformation.
            </p>
          </div>
        </div>
      </Section>

      {/* The Vision */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">AI That Actually Educates</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">Tutoring & Mentoring</h3>
                  <p className="text-gray-300">Age and grade-appropriate assistance that guides understanding instead of providing answers.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-secondary-purple-light flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Self-Learning System</h3>
                  <p className="text-gray-300">AI adapts to each student&apos;s optimal learning method through continuous observation and adjustment.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-accent-pink flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent-pink">Individual Learning Patterns</h3>
                  <p className="text-gray-300">Identify what works for each student. Visual? Auditory? Kinesthetic? The system figures it out.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">Teaching AI Tool Usage</h3>
                  <p className="text-gray-300">Students learn proper AI usage from early age—a critical skill for their future.</p>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="bordered">
            <h3 className="text-2xl font-bold mb-6 text-center text-gradient">Starting Point</h3>
            <p className="text-lg text-gray-300 mb-6 text-center">
              Chat interface that adapts to each student&apos;s learning style, pace, and needs. Simple to use, powerful in impact.
            </p>

            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20">
              <h4 className="text-xl font-bold mb-3 text-secondary-purple-light">Long-term Goal</h4>
              <p className="text-gray-300">
                Data analysis identifying patterns that improve education for everyone. What works for students with similar learning profiles? How can we make education more effective across the board?
              </p>
            </div>
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
                  <h3 className="text-xl font-bold mb-2 text-white">Students Demonstrably Learning Better</h3>
                  <p className="text-gray-300">Not just better grades—better understanding and retention. Measurable educational outcomes.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">AI Enhancing vs. Replacing Learning</h3>
                  <p className="text-gray-300">Clear evidence that AI usage improves understanding rather than bypassing it.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Teachers/Parents Tracking Progress</h3>
                  <p className="text-gray-300">Transparent visibility into actual learning progress and AI interaction patterns.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Students Learning Proper AI Usage</h3>
                  <p className="text-gray-300">Understanding how to use AI as a tool for learning, not a replacement for thinking.</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Measurable Outcome Improvements</h3>
                  <p className="text-gray-300">Quantifiable improvements in comprehension, retention, and application of knowledge.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Research Approach */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            The <span className="text-gradient">Research Approach</span>
          </h2>

          <div className="space-y-6 mb-8">
            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Phase 1: Build Adaptive AI Tutor Platform</h3>
              <p className="text-gray-300">Create the foundation. Chat-based learning that adapts to individual students in real-time.</p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Beta Testing: Partner with Educators and Parents</h3>
              <p className="text-gray-300">Real students. Real learning environments. Real feedback from teachers and parents who care about outcomes.</p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Documentation: What Works, What Doesn&apos;t, Why</h3>
              <p className="text-gray-300">Complete transparency. Failures documented alongside successes. Learning shared openly with the education community.</p>
            </Card>

            <Card variant="bordered">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">White-Label: Platform for Educational AI Done Right</h3>
              <p className="text-gray-300">Once proven, make it available. Schools, homeschoolers, tutoring centers—anyone committed to actual learning.</p>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-2xl p-8 border border-accent-pink/30 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Why This Matters</h3>
            <p className="text-lg text-gray-300 mb-4">
              We&apos;re at a crossroads. AI in education either becomes a tool for cheating or the greatest personalized learning breakthrough in history.
            </p>
            <p className="text-xl font-bold text-accent-pink">
              We&apos;re proving it can be the latter.
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Timeline</span> and Participation
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Current: Research & Planning</h3>
              <p className="text-gray-300">Building foundation. Consulting educators. Designing adaptive learning systems.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">2025: Platform Development & Beta Testing</h3>
              <p className="text-gray-300">Partner with schools, educators, and parents to validate approach. Document everything publicly.</p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Beyond: Proven Platform for All</h3>
              <p className="text-gray-300">White-label platform available to any educational organization committed to proper AI usage in learning.</p>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary-blue/20 to-accent-pink/20 rounded-2xl p-8 border border-accent-pink/30 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Interested in Beta Testing?</h3>
            <p className="text-gray-300 mb-6">
              First 100 partners across ALL Continuum projects get access when each project launches—including Project No-Cheating.
            </p>
            <Button href="/beta" size="lg">
              Join the First 100 (All Projects)
            </Button>
          </div>
        </div>
      </Section>

      {/* The Commitment */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Commitment</span>
          </h2>

          <Card variant="bordered">
            <p className="text-xl text-gray-300 mb-6">
              We won&apos;t release this until it actually works. Until students are provably learning better. Until teachers and parents have transparent control. Until AI enhances education instead of undermining it.
            </p>

            <div className="bg-primary/30 rounded-2xl p-6 border border-primary-blue/20 mb-6">
              <p className="text-lg text-white mb-4">
                This isn&apos;t about moving fast and breaking things. It&apos;s about getting education right.
              </p>
              <p className="text-2xl font-bold text-accent-pink">
                Too important to rush. Too critical to fail.
              </p>
            </div>

            <p className="text-lg text-gray-400">
              Education transformation matters to our entire team. We&apos;re going to prove AI can make learning better for everyone.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
