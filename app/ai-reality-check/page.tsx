import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { CheckCircle, XCircle, AlertTriangle, Lightbulb } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'AI Reality Check',
  description: 'What AI really can do today, what it can&apos;t, and how to use it without the trust fall.',
  canonical: '/ai-reality-check',
});

export default function AIRealityCheckPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Reality <span className="text-gradient">Check</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            What AI really can do today, what it can&apos;t, and how to use it without the trust fall.
          </p>
        </div>
      </Section>

      {/* The Hype vs Reality */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cutting Through the <span className="text-gradient">Noise</span>
          </h2>

          <Card variant="elevated" className="mb-8">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-300">
                You&apos;ve been told AI will either save the world or destroy it. The truth is more useful and less dramatic.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="bordered" className="bg-red-900/20 border-red-500/30">
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">The Hype Says</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>AI will replace all knowledge workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>You need to &quot;trust&quot; the AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>It&apos;s magic that just works</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Small businesses can&apos;t afford it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Wait until it&apos;s &quot;perfect&quot;</span>
                </li>
              </ul>
            </Card>

            <Card variant="bordered" className="bg-green-900/20 border-green-500/30">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">The Reality Is</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>AI amplifies expertise, doesn&apos;t replace it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>You need to verify and understand it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>It&apos;s math that needs good guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Properly deployed, it levels the field</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Your competitors are already using it</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* What AI Actually Does Well */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What AI <span className="text-gradient">Actually Does Well</span>
          </h2>

          <div className="space-y-6">
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Pattern Recognition at Scale</h3>
                  <p className="text-gray-300 mb-3">
                    AI excels at finding patterns humans would miss or take months to discover.
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-2">Real examples:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Analyzing thousands of customer interactions to identify common pain points</li>
                      <li>• Spotting trends in data before they become obvious</li>
                      <li>• Finding correlations across disconnected data sources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Automating Repetitive Analysis</h3>
                  <p className="text-gray-300 mb-3">
                    Tasks that take humans hours can take AI seconds—when properly configured.
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-2">Real examples:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Categorizing and tagging documents</li>
                      <li>• Extracting key information from reports</li>
                      <li>• Summarizing long documents or conversations</li>
                      <li>• Generating first drafts of routine content</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Rapid Research and Synthesis</h3>
                  <p className="text-gray-300 mb-3">
                    AI can process vast amounts of information and provide relevant summaries quickly.
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-2">Real examples:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Competitive intelligence gathering</li>
                      <li>• Market research synthesis</li>
                      <li>• Technical documentation review</li>
                      <li>• Regulatory compliance checking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">24/7 Consistency</h3>
                  <p className="text-gray-300 mb-3">
                    Unlike humans, AI doesn&apos;t get tired, distracted, or have bad days.
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-2">Real examples:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Monitoring systems for anomalies</li>
                      <li>• Maintaining consistent quality standards</li>
                      <li>• Responding to routine inquiries</li>
                      <li>• Enforcing business rules</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* What AI Can't Do (Yet) */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What AI <span className="text-gradient">Can&apos;t Do</span> (Yet)
          </h2>

          <div className="space-y-6">
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <XCircle className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Understand True Context</h3>
                  <p className="text-gray-300">
                    AI doesn&apos;t understand your business like you do. It can&apos;t grasp unspoken cultural nuances, organizational politics, or the subtle context that informs human decisions.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <XCircle className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Exercise Judgment</h3>
                  <p className="text-gray-300">
                    AI can provide data and options, but it can&apos;t make nuanced judgment calls that balance competing priorities, ethical considerations, and strategic implications.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <XCircle className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Build Real Relationships</h3>
                  <p className="text-gray-300">
                    AI can handle transactions, but it can&apos;t build trust, read emotional subtext, or navigate complex human dynamics that drive business relationships.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <XCircle className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Innovate Beyond Patterns</h3>
                  <p className="text-gray-300">
                    AI is trained on what exists. It can recombine patterns but can&apos;t make the intuitive leaps that lead to breakthrough innovation.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-3 flex-shrink-0">
                  <XCircle className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Take Responsibility</h3>
                  <p className="text-gray-300">
                    AI can&apos;t be accountable. When something goes wrong, there&apos;s no AI to answer for it. That responsibility stays human.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="mt-8 bg-primary/30 border border-accent-pink/30">
            <div className="text-center">
              <p className="text-xl font-bold text-white mb-3">
                The Critical Point
              </p>
              <p className="text-lg text-gray-300">
                AI doesn&apos;t replace expertise. It amplifies it. You still need to know your business, understand your customers, and make the judgment calls. AI just helps you do it faster and with more information.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* How to Use AI Safely */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Use AI <span className="text-gradient">Without the Trust Fall</span>
          </h2>

          <div className="space-y-6">
            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">1. Start with Transparency</h3>
                  <p className="text-gray-300 mb-3">
                    Never deploy AI you can&apos;t explain. Every output should show its reasoning.
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-accent-pink font-semibold">
                      If you can&apos;t explain how it reached a conclusion, you can&apos;t know when to trust it.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">2. Use AI as a Research Assistant, Not a Decision Maker</h3>
                  <p className="text-gray-300 mb-3">
                    Let AI gather information, identify patterns, and suggest options. You make the decisions.
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-gray-300 text-sm mb-2">Good uses:</p>
                    <ul className="space-y-1 text-gray-400 text-sm">
                      <li>• &quot;What are the trends in this data?&quot;</li>
                      <li>• &quot;Summarize these customer complaints&quot;</li>
                      <li>• &quot;What options do I have for this problem?&quot;</li>
                    </ul>
                    <p className="text-gray-300 text-sm mb-2 mt-3">Risky uses:</p>
                    <ul className="space-y-1 text-gray-400 text-sm">
                      <li>• &quot;Decide which vendor to use&quot;</li>
                      <li>• &quot;Fire this employee if metrics drop&quot;</li>
                      <li>• &quot;Approve these expense reports&quot;</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">3. Implement Human Review Loops</h3>
                  <p className="text-gray-300 mb-3">
                    Critical decisions always get human review. Routine tasks can be automated with audit trails.
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-primary-blue font-semibold mb-2">Automate with Oversight:</p>
                        <ul className="space-y-1 text-gray-400 text-sm">
                          <li>• Data categorization</li>
                          <li>• Report generation</li>
                          <li>• Routine responses</li>
                          <li>• Status updates</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-accent-pink font-semibold mb-2">Require Human Approval:</p>
                        <ul className="space-y-1 text-gray-400 text-sm">
                          <li>• Strategic decisions</li>
                          <li>• Client communications</li>
                          <li>• Financial commitments</li>
                          <li>• Policy changes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">4. Test in Low-Stakes Scenarios First</h3>
                  <p className="text-gray-300 mb-3">
                    Don&apos;t deploy AI on your most critical processes first. Start small, learn, then scale.
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-gray-300 mb-2">Progressive deployment:</p>
                    <ol className="space-y-2 text-gray-400 list-decimal list-inside">
                      <li>Internal documentation</li>
                      <li>Routine research tasks</li>
                      <li>Draft generation (with review)</li>
                      <li>Pattern analysis on historical data</li>
                      <li>Gradually expand to higher-stakes uses</li>
                    </ol>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">5. Maintain Audit Trails</h3>
                  <p className="text-gray-300 mb-3">
                    Log everything. When something goes wrong (and it will), you need to know why.
                  </p>
                  <div className="bg-background-dark rounded-xl p-4">
                    <p className="text-accent-pink font-semibold">
                      Good AI systems are always reversible. Bad ones lock you in.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Bottom Line */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-secondary-purple-light/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                The Bottom Line
              </h2>
              <div className="space-y-4 text-lg text-gray-300 max-w-3xl mx-auto">
                <p>
                  AI is a tool, not magic. Used well, it&apos;s incredibly powerful. Used blindly, it&apos;s dangerous.
                </p>
                <p>
                  Your competitors—especially the big ones—have been using AI for years. The question isn&apos;t whether to use it. It&apos;s how to use it responsibly.
                </p>
                <p className="text-xl text-accent-pink font-bold">
                  We build AI that shows its work so you can use it with confidence, not faith.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Responsible AI <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No hype. No black boxes. Just AI you can understand and control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/xynergy" size="lg">
              Explore Xynergy
            </Button>
            <Button href="/manifesto" variant="outline" size="lg">
              Read Our Manifesto
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
