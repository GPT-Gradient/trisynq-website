import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Zap, Eye, BookOpen, Users, FileText, BarChart } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Culture Hub — For Team, Partners & Clients',
  description: 'Explore our mission, values, team philosophy, and stories. See how we work, what we believe, and who we are—transparently and operationally.',
  canonical: '/about/culture',
});

export default function CulturePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Culture <span className="text-gradient">Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            For our team, our partners, and our clients—this is how we work, what we believe, and who we are.
          </p>
          <p className="text-lg text-gray-400">
            Not aspirational. Operational.
          </p>
        </div>
      </Section>

      {/* Culture Hub Navigation */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our <span className="text-gradient">Culture</span>
            </h2>
            <p className="text-xl text-gray-300">
              Dig into the principles, values, and stories that define ClearForge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-primary-blue/30 hover:border-primary-blue/60">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Mission & Vision</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Why we exist and where we&apos;re headed. Democratizing enterprise capabilities through transparent translation.
              </p>
              <Button href="/about/mission-vision" variant="outline" className="w-full text-sm">
                Read Mission & Vision
              </Button>
            </Card>

            <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-accent-pink/30 hover:border-accent-pink/60">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Values</h3>
              <p className="text-gray-300 mb-4 text-sm">
                The principles that guide every decision. Transparency, humility, impact, and ownership.
              </p>
              <Button href="/about/values" variant="outline" className="w-full text-sm border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                Explore Our Values
              </Button>
            </Card>

            <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-secondary-purple/30 hover:border-secondary-purple/60">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Team Philosophy</h3>
              <p className="text-gray-300 mb-4 text-sm">
                How we build teams and treat people. Translation capability, real outcomes, no pretense.
              </p>
              <Button href="/about/team-philosophy" variant="outline" className="w-full text-sm border-secondary-purple-light text-secondary-purple-light hover:bg-secondary-purple hover:text-white">
                See Team Philosophy
              </Button>
            </Card>

            <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-primary-blue/30 hover:border-primary-blue/60">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">How We Started</h3>
              <p className="text-gray-300 mb-4 text-sm">
                The origin story. How we went from frustration to action, and why transparency matters.
              </p>
              <Button href="/about/how-we-started" variant="outline" className="w-full text-sm">
                Read Origin Story
              </Button>
            </Card>

            <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-accent-pink/30 hover:border-accent-pink/60">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Founder Story</h3>
              <p className="text-gray-300 mb-4 text-sm">
                The complete journey. From mechanic and mortgage expert to building enterprise systems for everyone.
              </p>
              <Button href="/about/founder-story-complete" variant="outline" className="w-full text-sm border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                Read Complete Story
              </Button>
            </Card>

            <Card variant="elevated" className="group hover:scale-105 transition-transform duration-300 border-2 border-secondary-purple/30 hover:border-secondary-purple/60">
              <h3 className="text-xl font-bold mb-3 text-secondary-purple-light">Careers</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Join the team. See what it&apos;s like to work here—PTO, culture, compensation, and ownership.
              </p>
              <Button href="/careers" variant="outline" className="w-full text-sm border-secondary-purple-light text-secondary-purple-light hover:bg-secondary-purple hover:text-white">
                Explore Careers
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      {/* Cultural Principles */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our <span className="text-gradient">Working Principles</span>
          </h2>

          <div className="space-y-8">
            {/* The 10x Rule */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-start gap-6">
                <div className="bg-primary-blue/20 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-primary-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-primary-blue">The 10x Rule</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    10x better outcomes at 1/10th the cost. Not incremental improvement—fundamental rethinking.
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p>• If it&apos;s not 10x better, we rethink the approach</p>
                    <p>• Strip away artificial complexity until we find the core pattern</p>
                    <p>• Prove it with numbers, not promises</p>
                    <p>• Test against enterprise implementations, not SMB compromises</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Radical Transparency */}
            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="flex items-start gap-6">
                <div className="bg-accent-pink/20 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-accent-pink" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-accent-pink">Radical Transparency</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    Share successes AND failures. Show the work, not just the results. Document the journey, not just the destination.
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p>• Publish methodologies even when they&apos;re imperfect</p>
                    <p>• Document what doesn&apos;t work alongside what does</p>
                    <p>• Show partner results with full context (wins and losses)</p>
                    <p>• Open-source the patterns that enterprises keep proprietary</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Learning in Public */}
            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-purple/20 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-secondary-purple-light" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-secondary-purple-light">Learning in Public</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    Every project generates learnings. Every failure teaches something. Every success proves a pattern.
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p>• Document insights as we discover them, not after polishing</p>
                    <p>• Share experimental results—good, bad, and inconclusive</p>
                    <p>• Build knowledge bases that anyone can access</p>
                    <p>• Turn every engagement into published patterns</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Partner-First Thinking */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-start gap-6">
                <div className="bg-primary-blue/20 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-primary-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-primary-blue">Partner-First Thinking</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    Partners succeed = we succeed. Build for outcomes, not hours. Transfer knowledge, not create dependency.
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p>• Measure success by partner revenue generated, not billable hours</p>
                    <p>• Train partners to operate independently from day one</p>
                    <p>• Optimize for partner ROI, not our margin</p>
                    <p>• Best outcome: partners no longer need us</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* How We Report */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            How We <span className="text-gradient">Report</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Culture means nothing without accountability. Here&apos;s how we track ourselves:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Quarterly Transparency Reports */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-blue/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Quarterly Transparency Reports</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Published every quarter with full metrics against our values. Not marketing spin—real numbers with context.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm mb-4">
                <li>✓ Partner outcomes documented (revenue, capabilities, ROI)</li>
                <li>✓ Knowledge transfer metrics (training hours, certifications, independence)</li>
                <li>✓ Methodology improvements published</li>
                <li>✓ Failed experiments and what we learned</li>
                <li>✓ Financial transparency (not just revenue—costs and margins)</li>
              </ul>
              <p className="text-xs text-gray-500 italic">
                Next report: Q1 2025 (first partners onboarded)
              </p>
            </Card>

            {/* Public Dashboards */}
            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent-pink/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <BarChart className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Open Metrics Dashboards</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Real-time tracking of key metrics. Not vanity metrics—the ones that matter.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm mb-4">
                <li>✓ Beta participants per project (live count)</li>
                <li>✓ Aggregate partner revenue generated</li>
                <li>✓ Methodologies published vs in development</li>
                <li>✓ Success/failure rates per engagement type</li>
                <li>✓ Community contributions tracked</li>
              </ul>
              <p className="text-xs text-gray-500 italic">
                Dashboard launching with Phase 1 completion
              </p>
            </Card>

            {/* Published Case Studies */}
            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary-purple/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-secondary-purple-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Published Case Studies</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                With partner permission, full documentation of projects—methods, outcomes, and lessons learned.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm mb-4">
                <li>✓ Complete methodology documentation</li>
                <li>✓ Before/after metrics with full context</li>
                <li>✓ What worked, what didn&apos;t, and why</li>
                <li>✓ Replicable patterns extracted</li>
                <li>✓ Partner testimonials (unedited, unfiltered)</li>
              </ul>
              <p className="text-xs text-gray-500 italic">
                Coming as Phase 1 partners complete engagements
              </p>
            </Card>

            {/* Community Learning Shares */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-blue/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Community Learning Shares</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Regular sessions where we share what we&apos;re learning, testing, and building. Live Q&amp;A included.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm mb-4">
                <li>✓ Monthly learning sessions (recorded, published)</li>
                <li>✓ Deep-dives on specific patterns or methodologies</li>
                <li>✓ Partner success stories and lessons</li>
                <li>✓ Failed experiments and pivot decisions</li>
                <li>✓ Open roadmap discussions</li>
              </ul>
              <p className="text-xs text-gray-500 italic">
                First session scheduled for January 2025
              </p>
            </Card>
          </div>

          <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30 text-center">
            <p className="text-lg font-semibold text-accent-pink mb-2">
              Find another company that reports like this.
            </p>
            <p className="text-gray-400">
              We&apos;ll wait. (Spoiler: you won&apos;t find one. That&apos;s why we&apos;re doing it.)
            </p>
          </div>
        </div>
      </Section>

      {/* Transparency Metrics Preview */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-gradient">Transparency Metrics</span> Preview
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Here&apos;s what we&apos;ll track and publish. No fluff. No vanity metrics.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-bold mb-2 text-primary-blue">Partner Success</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Partner revenue generated</li>
                <li>• Average ROI per engagement</li>
                <li>• Time-to-value metrics</li>
                <li>• Partner retention rates</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-2 text-accent-pink">Knowledge Transfer</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Training hours delivered</li>
                <li>• Partners operating independently</li>
                <li>• Certifications earned</li>
                <li>• Capabilities built per team</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-2 text-secondary-purple-light">Transparency</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Methodologies published</li>
                <li>• Case studies documented</li>
                <li>• Failed experiments shared</li>
                <li>• Open-source contributions</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-2 text-primary-blue">Complexity Reduction</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Implementation speed vs enterprise</li>
                <li>• Lines of code reduced</li>
                <li>• Cost per capability</li>
                <li>• Time-to-production</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-2 text-accent-pink">Platform Development</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Features shipped per quarter</li>
                <li>• Beta tester feedback scores</li>
                <li>• Bug fix response times</li>
                <li>• Uptime & performance</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-2 text-secondary-purple-light">Community Impact</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Active community members</li>
                <li>• Contributions from partners</li>
                <li>• Learning sessions attendance</li>
                <li>• Shared knowledge artifacts</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Join Us Section */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-accent-pink/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              This Culture Sounds Like <span className="text-gradient">Your Kind of Place?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              We&apos;re looking for people who value transparency, learning in public, and partner-first thinking.
            </p>
            <p className="text-base text-gray-400 mb-8">
              If this resonates, come build something worth building with us.
            </p>
            <Button href="/careers" size="lg">
              Explore Careers at ClearForge
            </Button>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work With a Team That <span className="text-gradient">Shows the Work</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If radical transparency, learning in public, and partner-first thinking resonate—let&apos;s build together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta-program" size="lg">
              Become a Proof Partner
            </Button>
            <Button href="/dashboard" variant="outline" size="lg">
              View Live Dashboard
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
