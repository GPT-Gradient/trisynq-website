import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Code, Cpu, Database, TrendingUp, Shield, FileCode, CheckCircle, Cloud } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Custom Development - Enterprise-Grade Solutions at Human-Scale Costs',
  description: 'Production-ready custom platforms, system integrations, analytics, and AI amplification. Built to scale with your success, not punish growth. 20+ years Fortune 100 expertise applied to SMB reality.',
  canonical: '/solutions/custom',
});

export default function CustomDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Enterprise-Grade Solutions</span>
            <br />
            at Human-Scale Costs
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Production-ready from day one, not prototypes
          </p>
          <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30 inline-block">
            <p className="text-lg text-white font-semibold">
              Built to scale with your success, not punish growth
            </p>
          </div>
        </div>
      </Section>

      {/* Development Philosophy */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Development <span className="text-gradient">Philosophy</span>
            </h2>
          </div>

          <Card variant="elevated" className="mb-8">
            <div className="bg-gradient-to-br from-primary via-secondary-purple to-primary rounded-2xl p-8 border border-secondary-purple-light/30 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Production-ready from day one, not prototypes
              </h3>
              <p className="text-xl text-gray-300 text-center">
                20+ years of Fortune 100 expertise means we know how to build systems that last
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20 text-center">
                <CheckCircle className="w-10 h-10 text-primary-blue mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Enterprise Quality</h4>
                <p className="text-gray-300">
                  Same standards as billion-dollar systems
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20 text-center">
                <TrendingUp className="w-10 h-10 text-accent-pink mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">SMB Reality</h4>
                <p className="text-gray-300">
                  Costs and timelines that make sense
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20 text-center">
                <Shield className="w-10 h-10 text-secondary-purple-light mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Built to Last</h4>
                <p className="text-gray-300">
                  Scalable foundation from the start
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* What We Build */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-gradient">Build</span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* Technology Translation */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-6">
                <Code className="w-10 h-10 text-primary-blue flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Technology Translation</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Enterprise capabilities made accessible
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Custom Platforms & Applications</h4>
                  <p className="text-gray-300">
                    Tailored solutions that solve your specific challenges
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">System Integrations</h4>
                  <p className="text-gray-300">
                    Making your tools work together seamlessly
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">API Development</h4>
                  <p className="text-gray-300">
                    Connecting systems with enterprise-grade APIs
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-primary-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Database Architecture</h4>
                  <p className="text-gray-300">
                    Data foundations built for scale and performance
                  </p>
                </div>
              </div>
            </Card>

            {/* Data Intelligence */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-6">
                <Database className="w-10 h-10 text-accent-pink flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Data Intelligence</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Making your data work like enterprise analytics
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                  <h4 className="text-lg font-bold text-white mb-2">Analytics Systems</h4>
                  <p className="text-gray-300">
                    Transform raw data into strategic insights
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                  <h4 className="text-lg font-bold text-white mb-2">Reporting Platforms</h4>
                  <p className="text-gray-300">
                    Real-time visibility into what matters
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                  <h4 className="text-lg font-bold text-white mb-2">Predictive Modeling</h4>
                  <p className="text-gray-300">
                    AI-powered forecasting for better decisions
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-accent-pink/20">
                  <h4 className="text-lg font-bold text-white mb-2">Pattern Recognition Tools</h4>
                  <p className="text-gray-300">
                    Discover insights hiding in your data
                  </p>
                </div>
              </div>
            </Card>

            {/* AI Amplification */}
            <Card variant="elevated">
              <div className="flex items-start gap-4 mb-6">
                <Cpu className="w-10 h-10 text-secondary-purple-light flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">AI Amplification</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Your authentic voice at enterprise scale
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple-light/20">
                  <h4 className="text-lg font-bold text-white mb-2">Content Generation Systems</h4>
                  <p className="text-gray-300">
                    AI that maintains your authentic expertise
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple-light/20">
                  <h4 className="text-lg font-bold text-white mb-2">Intelligent Automation</h4>
                  <p className="text-gray-300">
                    Automating routine tasks while you focus on strategy
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple-light/20">
                  <h4 className="text-lg font-bold text-white mb-2">Decision Support Tools</h4>
                  <p className="text-gray-300">
                    AI-powered analysis for complex decisions
                  </p>
                </div>

                <div className="bg-primary/30 rounded-xl p-5 border border-secondary-purple-light/20">
                  <h4 className="text-lg font-bold text-white mb-2">Natural Language Interfaces</h4>
                  <p className="text-gray-300">
                    Interact with systems using plain language
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Development Standards */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Development <span className="text-gradient">Standards</span>
            </h2>
            <p className="text-xl text-gray-300">
              Non-negotiable quality across everything we build
            </p>
          </div>

          <Card variant="elevated">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Production Quality</h4>
                </div>
                <p className="text-gray-300">
                  All code production-ready from deployment - no MVPs that need rebuilding
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Comprehensive Testing</h4>
                </div>
                <p className="text-gray-300">
                  Unit, integration, and security testing before launch
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <div className="flex items-start gap-3 mb-3">
                  <FileCode className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Documentation</h4>
                </div>
                <p className="text-gray-300">
                  Complete implementation and maintenance documentation
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Training</h4>
                </div>
                <p className="text-gray-300">
                  Your team understands systems, not just uses them
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20">
                <div className="flex items-start gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-secondary-purple-light flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Scalability</h4>
                </div>
                <p className="text-gray-300">
                  Built for growth from foundation - success doesn&apos;t break your systems
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-6 h-6 text-secondary-purple-light flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Security</h4>
                </div>
                <p className="text-gray-300">
                  Enterprise-grade security practices as standard
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary-blue/20 to-accent-pink/20 rounded-xl p-6 border border-accent-pink/30 md:col-span-2">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent-pink flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-bold text-white">Transparency</h4>
                </div>
                <p className="text-gray-300">
                  You understand what we build and why - no black boxes
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Technology Stack */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technology <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-xl text-gray-300">
              Enterprise-grade tools, SMB-friendly implementation
            </p>
          </div>

          <Card variant="elevated">
            <div className="space-y-6">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-start gap-4 mb-3">
                  <Cloud className="w-8 h-8 text-primary-blue flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Infrastructure</h4>
                    <p className="text-gray-300">
                      <strong className="text-white">Google Cloud Platform</strong> - Enterprise-grade reliability at SMB costs
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <div className="flex items-start gap-4 mb-3">
                  <Code className="w-8 h-8 text-accent-pink flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Development</h4>
                    <p className="text-gray-300">
                      <strong className="text-white">Modern frameworks</strong> - React, FastAPI, Node.js, TypeScript
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20">
                <div className="flex items-start gap-4 mb-3">
                  <Database className="w-8 h-8 text-secondary-purple-light flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Data</h4>
                    <p className="text-gray-300">
                      <strong className="text-white">BigQuery, Firestore, Cloud Storage</strong> - Scalable data infrastructure
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-start gap-4 mb-3">
                  <Cpu className="w-8 h-8 text-primary-blue flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">AI Integration</h4>
                    <p className="text-gray-300">
                      <strong className="text-white">Claude API, OpenAI, custom models</strong> - Best AI for each use case
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary via-secondary-purple to-primary rounded-xl p-6 border border-secondary-purple-light/30">
                <div className="flex items-start gap-4 mb-3">
                  <Cloud className="w-8 h-8 text-secondary-purple-light flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Deployment</h4>
                    <p className="text-gray-300">
                      <strong className="text-white">Containerized, auto-scaling, monitored</strong> - Enterprise operations simplified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Development <span className="text-gradient">Process</span>
            </h2>
          </div>

          <Card variant="elevated">
            <div className="space-y-6">
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-primary-blue text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">1</span>
                  <h4 className="text-xl font-bold text-white">Discovery</h4>
                </div>
                <p className="text-gray-300 ml-14">
                  Deep understanding of needs and opportunities - what problems are we actually solving?
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-primary-blue text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">2</span>
                  <h4 className="text-xl font-bold text-white">Architecture</h4>
                </div>
                <p className="text-gray-300 ml-14">
                  System design with scalability from start - building foundations that last
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-accent-pink text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">3</span>
                  <h4 className="text-xl font-bold text-white">Development</h4>
                </div>
                <p className="text-gray-300 ml-14">
                  Iterative building with regular feedback - you stay involved throughout
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-accent-pink/20">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-accent-pink text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">4</span>
                  <h4 className="text-xl font-bold text-white">Testing</h4>
                </div>
                <p className="text-gray-300 ml-14">
                  Comprehensive validation before deployment - catching issues before users do
                </p>
              </div>

              <div className="bg-primary/30 rounded-xl p-6 border border-secondary-purple-light/20">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-secondary-purple-light text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">5</span>
                  <h4 className="text-xl font-bold text-white">Deployment</h4>
                </div>
                <p className="text-gray-300 ml-14">
                  Smooth launch with monitoring - we don&apos;t deploy and disappear
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary via-secondary-purple to-primary rounded-xl p-6 border border-secondary-purple-light/30">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-secondary-purple-light text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">6</span>
                  <h4 className="text-xl font-bold text-white">Support</h4>
                </div>
                <p className="text-gray-300 ml-14">
                  Ongoing maintenance and evolution - systems that grow with you
                </p>
              </div>
            </div>

            <div className="mt-6 bg-primary-blue/10 rounded-xl p-6 border border-primary-blue/30">
              <p className="text-gray-300 text-center">
                <strong className="text-white">Partnership terms and engagement details</strong> discussed during qualification process
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for <span className="text-gradient">Enterprise-Grade Development?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss what you need to build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Discuss Your Project
            </Button>
            <Button href="/solutions" variant="outline" size="lg">
              View All Solutions
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
