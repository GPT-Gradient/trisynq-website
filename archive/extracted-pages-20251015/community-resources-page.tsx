import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { BookOpen, FileText, Wrench, Users, Video, Download, Code, Lightbulb, Rocket } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Resources',
  description: 'Free community resources, methodology documentation, learning materials, tools and templates. Transparent knowledge sharing to democratize enterprise capabilities.',
  canonical: '/community/resources',
});

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Community <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Knowledge Shared Openly
          </p>
          <p className="text-xl text-gray-300 mb-4">
            Delivered through Xynergy Launch - our primary learning platform
          </p>
          <div className="inline-flex items-center gap-2 bg-accent-pink/20 border border-accent-pink/50 rounded-full px-6 py-2">
            <span className="text-accent-pink font-semibold">Coming 2025</span>
          </div>
        </div>
      </Section>

      {/* Xynergy Launch Section */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="mb-8 border-2 border-accent-pink/50">
            <div className="flex items-start gap-6 mb-6">
              <Rocket className="w-16 h-16 text-accent-pink flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Xynergy Launch: <span className="text-gradient">Our Training Platform</span>
                </h2>
                <p className="text-xl text-gray-300 mb-4">
                  The primary delivery mechanism for all educational content - from fundamentals to advanced implementation.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent-pink/20 to-secondary-purple/20 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 text-white">Freemium Learning Model</h3>
              <p className="text-lg text-gray-300 mb-4">
                Three tiers designed to democratize enterprise capabilities while supporting deep expertise development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-primary/40 rounded-xl p-4 border border-accent-pink/30">
                  <h4 className="font-bold text-white mb-2">Free Tier</h4>
                  <p className="text-sm text-gray-300">Foundation concepts and core methodology</p>
                </div>
                <div className="bg-primary/40 rounded-xl p-4 border border-primary-blue/30">
                  <h4 className="font-bold text-white mb-2">Premium Tier</h4>
                  <p className="text-sm text-gray-300">Implementation guides and advanced topics</p>
                </div>
                <div className="bg-primary/40 rounded-xl p-4 border border-secondary-purple/30">
                  <h4 className="font-bold text-white mb-2">Expert Tier</h4>
                  <p className="text-sm text-gray-300">Deep-dive expertise and custom support</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 text-white">First 5 Topics</h3>
              <p className="text-gray-300 mb-4">
                Starting with foundational topics that democratize enterprise capabilities:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Data Strategy Fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>AI Integration for Small Business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Technology Translation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Digital Transformation Roadmapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Measurement & Validation</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button href="/community/xynergy-launch" size="lg" className="mb-2">
                Explore Xynergy Launch
              </Button>
              <p className="text-sm text-gray-400">Learn more about our comprehensive training platform</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Overview */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="mb-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Free <span className="text-gradient">Access</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Community resources openly available. Partner resources provide additional depth. All updated based on learning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/30">
                  <BookOpen className="w-12 h-12 text-accent-pink mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-white">Methodology</h3>
                  <p className="text-gray-300">How our approaches work</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/30">
                  <Wrench className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-white">Tools</h3>
                  <p className="text-gray-300">Templates and frameworks</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple/30">
                  <Users className="w-12 h-12 text-secondary-purple-light mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-white">Community</h3>
                  <p className="text-gray-300">Partner-shared learnings</p>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="bordered" className="border-accent-pink/30">
            <div className="bg-gradient-to-r from-accent-pink/20 to-secondary-purple/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white text-center">Living Documents</h3>
              <p className="text-lg text-gray-300 text-center">
                All resources updated based on real-world learning. What works, what doesn&apos;t, and why - documented transparently.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Resource Categories */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resource <span className="text-gradient">Categories</span>
            </h2>
          </div>

          {/* Methodology Documentation */}
          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="w-12 h-12 text-accent-pink flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">Methodology Documentation</h3>
                <p className="text-lg text-gray-300 mb-6">
                  How our approaches work - transparent processes and frameworks
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                <h4 className="text-lg font-bold mb-2 text-white">How Our Approaches Work</h4>
                <p className="text-gray-300 mb-3">
                  Complete breakdown of our methodology across technology, data, and AI
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                <h4 className="text-lg font-bold mb-2 text-white">Implementation Guides</h4>
                <p className="text-gray-300 mb-3">
                  Step-by-step guides for implementing transparency-first approaches
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                <h4 className="text-lg font-bold mb-2 text-white">Best Practices</h4>
                <p className="text-gray-300 mb-3">
                  Proven strategies from real-world implementations
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                <h4 className="text-lg font-bold mb-2 text-white">Adaptation Strategies</h4>
                <p className="text-gray-300 mb-3">
                  How to adapt our approaches to your specific situation
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
            </div>
          </Card>

          {/* Learning Materials */}
          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Lightbulb className="w-12 h-12 text-primary-blue flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">Learning Materials</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Educational content to build understanding, not dependency
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                <h4 className="text-lg font-bold mb-2 text-white">Technology Translation Guides</h4>
                <p className="text-gray-300 mb-3">
                  Enterprise capabilities explained in business terms - delivered through Xynergy Launch
                </p>
                <div className="text-sm text-gray-400">Available via Xynergy Launch (Coming 2025)</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                <h4 className="text-lg font-bold mb-2 text-white">Data Literacy Resources</h4>
                <p className="text-gray-300 mb-3">
                  Understanding and leveraging data for competitive advantage
                </p>
                <div className="text-sm text-gray-400">Available via Xynergy Launch (Coming 2025)</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                <h4 className="text-lg font-bold mb-2 text-white">AI Understanding Content</h4>
                <p className="text-gray-300 mb-3">
                  How AI amplifies expertise without replacing authenticity
                </p>
                <div className="text-sm text-gray-400">Available via Xynergy Launch (Coming 2025)</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                <h4 className="text-lg font-bold mb-2 text-white">Xynergy Launch Platform Tutorials</h4>
                <p className="text-gray-300 mb-3">
                  Using the Xynergy Launch platform effectively for learning and transformation
                </p>
                <div className="text-sm text-gray-400">Available via Xynergy Launch (Coming 2025)</div>
              </div>
            </div>
          </Card>

          {/* Tools and Templates */}
          <Card variant="elevated" className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Wrench className="w-12 h-12 text-secondary-purple-light flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">Tools and Templates</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Practical resources for implementing transformation
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple/20">
                <h4 className="text-lg font-bold mb-2 text-white">Assessment Frameworks</h4>
                <p className="text-gray-300 mb-3">
                  Evaluate current state and identify opportunities
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple/20">
                <h4 className="text-lg font-bold mb-2 text-white">Planning Templates</h4>
                <p className="text-gray-300 mb-3">
                  Structure your transformation roadmap
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple/20">
                <h4 className="text-lg font-bold mb-2 text-white">Implementation Checklists</h4>
                <p className="text-gray-300 mb-3">
                  Step-by-step execution guides
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple/20">
                <h4 className="text-lg font-bold mb-2 text-white">Measurement Tools</h4>
                <p className="text-gray-300 mb-3">
                  Track progress and validate transformation
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
            </div>
          </Card>

          {/* Community Contributions */}
          <Card variant="elevated">
            <div className="flex items-start gap-4 mb-6">
              <Users className="w-12 h-12 text-accent-pink flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">Community Contributions</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Partner-shared learnings and collective wisdom
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                <h4 className="text-lg font-bold mb-2 text-white">Partner-Shared Learnings</h4>
                <p className="text-gray-300 mb-3">
                  Real experiences from partners implementing transformation
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                <h4 className="text-lg font-bold mb-2 text-white">Implementation Variations</h4>
                <p className="text-gray-300 mb-3">
                  How different businesses adapt our approaches
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                <h4 className="text-lg font-bold mb-2 text-white">Industry-Specific Adaptations</h4>
                <p className="text-gray-300 mb-3">
                  Vertical-specific modifications and insights
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
              <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                <h4 className="text-lg font-bold mb-2 text-white">Challenge Solutions</h4>
                <p className="text-gray-300 mb-3">
                  How partners overcame specific obstacles
                </p>
                <div className="text-sm text-gray-400">Coming Soon</div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Resource Formats */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resource <span className="text-gradient">Formats</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Multiple formats for different learning styles
            </p>
            <p className="text-lg text-accent-pink">
              All delivered through Xynergy Launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="bordered" className="border-accent-pink/30">
              <div className="text-center">
                <FileText className="w-12 h-12 text-accent-pink mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-white">Written Guides</h3>
                <p className="text-gray-300">
                  Detailed documentation and articles
                </p>
              </div>
            </Card>

            <Card variant="bordered" className="border-primary-blue/30">
              <div className="text-center">
                <Video className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-white">Video Tutorials</h3>
                <p className="text-gray-300">
                  Visual walkthroughs and explanations
                </p>
              </div>
            </Card>

            <Card variant="bordered" className="border-secondary-purple/30">
              <div className="text-center">
                <Download className="w-12 h-12 text-secondary-purple-light mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-white">Downloadables</h3>
                <p className="text-gray-300">
                  Templates and frameworks to use
                </p>
              </div>
            </Card>

            <Card variant="bordered" className="border-accent-pink/30">
              <div className="text-center">
                <Code className="w-12 h-12 text-accent-pink mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-white">Code Examples</h3>
                <p className="text-gray-300">
                  Technical implementations
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Attribution & Updates */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Clear Attribution</h3>
              <p className="text-gray-300 mb-4">
                All community contributions credited to their authors. We value the expertise partners share.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Clear sourcing on all resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Partner contribution credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>Transparent authorship</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Living Documents</h3>
              <p className="text-gray-300 mb-4">
                Resources updated based on real-world learning and partner feedback.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">•</span>
                  <span>Regular updates based on learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">•</span>
                  <span>What works and what doesn&apos;t</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue">•</span>
                  <span>Transparent evolution tracking</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Access Levels */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Access <span className="text-gradient">Levels</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="bordered" className="border-accent-pink/50">
              <h3 className="text-2xl font-bold mb-6 text-accent-pink text-center">Community Resources</h3>
              <div className="bg-primary/30 rounded-xl p-6 mb-6">
                <p className="text-lg font-bold mb-3 text-white">Xynergy Launch Free Tier</p>
                <p className="text-gray-300">
                  Core methodology, implementation guides, basic tools, and community learnings available to everyone through Xynergy Launch.
                </p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink text-xl">✓</span>
                  <span>Methodology documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink text-xl">✓</span>
                  <span>Basic implementation guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink text-xl">✓</span>
                  <span>Essential templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink text-xl">✓</span>
                  <span>Community contributions</span>
                </li>
              </ul>
            </Card>

            <Card variant="bordered" className="border-primary-blue/50">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue text-center">Partner Resources</h3>
              <div className="bg-primary/30 rounded-xl p-6 mb-6">
                <p className="text-lg font-bold mb-3 text-white">Beta Partner Access</p>
                <p className="text-gray-300">
                  Advanced resources, detailed implementations, custom adaptations, and direct support. Benefits include Xynergy Launch paid tiers.
                </p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue text-xl">✓</span>
                  <span>Xynergy Launch Premium/Expert tiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue text-xl">✓</span>
                  <span>Advanced methodology deep-dives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue text-xl">✓</span>
                  <span>Detailed implementation support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue text-xl">✓</span>
                  <span>Custom adaptation guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue text-xl">✓</span>
                  <span>Direct team access</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Resources <span className="text-gradient">Growing</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We&apos;re just starting. Resources will grow as we document learnings from the first 100 partners.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-primary/30 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-2 text-primary-blue">Watch</h3>
                  <p className="text-gray-300 text-sm">Resources added as we learn</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-2 text-primary-blue">Learn</h3>
                  <p className="text-gray-300 text-sm">Benefit from transparent sharing</p>
                </div>
                <div className="bg-primary/30 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-2 text-primary-blue">Contribute</h3>
                  <p className="text-gray-300 text-sm">Partners shape these resources</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/community/xynergy-launch" size="lg">
                  Explore Xynergy Launch
                </Button>
                <Button href="/beta" variant="outline" size="lg">
                  Become a Beta Partner
                </Button>
                <Button href="/community/20-percent-army" variant="outline" size="lg">
                  Join the 20%
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Transparency Note */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <Card variant="bordered" className="border-accent-pink/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                <span className="text-gradient">Transparency</span> in Resources
              </h3>
              <p className="text-xl text-gray-300 italic">
                &quot;We&apos;re documenting our journey from the beginning. Resources grow as partners prove what works. No pretending we have years of case studies when we&apos;re just starting. That&apos;s transparency.&quot;
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
