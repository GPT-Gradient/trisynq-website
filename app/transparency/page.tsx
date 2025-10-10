import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { FileText, GitBranch, History, CheckCircle } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Transparency Commitment',
  description: 'How we show our work—on every output that matters. Complete visibility into our AI processes.',
  canonical: '/transparency',
});

export default function TransparencyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transparency <span className="text-gradient">Commitment</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            How we show our work—on every output that matters.
          </p>
        </div>
      </Section>

      {/* Introduction */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Why Transparency is Non-Negotiable</h2>
              <p className="text-lg text-gray-300 mb-4">
                Black box AI is convenient for vendors. It&apos;s dangerous for users.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                When you can&apos;t see how a decision was made, you can&apos;t trust it. You can&apos;t improve it. You can&apos;t identify when it&apos;s wrong.
              </p>
              <div className="bg-primary/30 rounded-xl p-6 border border-primary-blue/20 mt-6">
                <p className="text-xl font-bold text-accent-pink">
                  We built our entire stack around one principle: If we can&apos;t explain it, we don&apos;t ship it.
                </p>
              </div>
            </div>
          </Card>

          {/* Three Core Commitments */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient">Transparency Standards</span>
          </h2>

          <div className="space-y-8">
            {/* Explain-This View */}
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-primary-blue/20 rounded-full p-4 flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Explain-This View on Major Outputs</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    Every significant AI output includes an &quot;Explain This&quot; button. Not a simplified summary. The actual reasoning chain.
                  </p>
                  <div className="bg-background-dark rounded-xl p-6">
                    <h4 className="text-lg font-bold mb-3 text-primary-blue">What You See:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span><strong>Input Analysis:</strong> What data the AI received and how it was interpreted</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span><strong>Processing Steps:</strong> Each stage of reasoning, in order</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span><strong>Decision Points:</strong> Where choices were made and why</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span><strong>Alternatives Considered:</strong> Other options and why they weren&apos;t chosen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span><strong>Confidence Levels:</strong> Where the AI is certain vs. making educated guesses</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Provenance */}
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-accent-pink/20 rounded-full p-4 flex-shrink-0">
                  <GitBranch className="w-8 h-8 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Provenance: Sources, Steps, Assumptions</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    Every piece of information has a lineage. We track it all.
                  </p>
                  <div className="bg-background-dark rounded-xl p-6 mb-4">
                    <h4 className="text-lg font-bold mb-3 text-accent-pink">Source Tracking:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-pink">•</span>
                        <span>Where did this data come from?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-pink">•</span>
                        <span>When was it collected?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-pink">•</span>
                        <span>How reliable is the source?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-pink">•</span>
                        <span>What biases might it contain?</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-background-dark rounded-xl p-6 mb-4">
                    <h4 className="text-lg font-bold mb-3 text-primary-blue">Assumption Documentation:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue">•</span>
                        <span>What assumptions did we make?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue">•</span>
                        <span>Why were they necessary?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue">•</span>
                        <span>What happens if they&apos;re wrong?</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-accent-pink font-semibold">
                    No hidden guesses. No unstated premises. Everything visible.
                  </p>
                </div>
              </div>
            </Card>

            {/* Audit Logs */}
            <Card variant="bordered">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-purple-light/20 rounded-full p-4 flex-shrink-0">
                  <History className="w-8 h-8 text-secondary-purple-light" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Audit Logs on Automations and Changes</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    When AI makes changes or takes actions, you get a complete record.
                  </p>
                  <div className="bg-background-dark rounded-xl p-6">
                    <h4 className="text-lg font-bold mb-3 text-secondary-purple-light">What Gets Logged:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span><strong>What changed:</strong> Specific fields, values, or actions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span><strong>When it changed:</strong> Exact timestamps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span><strong>Why it changed:</strong> The triggering event or logic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span><strong>Who authorized it:</strong> Human approval or automated rule</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                        <span><strong>What it was before:</strong> Complete change history</span>
                      </li>
                    </ul>
                    <div className="bg-primary/30 rounded-lg p-4 mt-4 border border-primary-blue/20">
                      <p className="text-gray-300">
                        <strong className="text-primary-blue">Rollback Ready:</strong> Because we track everything, we can undo anything. Every automation is reversible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Real-World Benefits */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why This <span className="text-gradient">Matters</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">For You</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Know when to trust AI outputs</li>
                <li>• Catch errors before they compound</li>
                <li>• Improve results over time</li>
                <li>• Meet compliance requirements</li>
                <li>• Train your team with confidence</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-bold mb-3 text-accent-pink">For Your Clients</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Show your work</li>
                <li>• Build trust through visibility</li>
                <li>• Demonstrate due diligence</li>
                <li>• Differentiate from black-box competitors</li>
                <li>• Provide audit trails when needed</li>
              </ul>
            </Card>
          </div>

          <Card variant="bordered" className="bg-gradient-to-br from-primary via-primary to-secondary-purple border-secondary-purple-light/30">
            <div className="text-center">
              <p className="text-2xl font-bold mb-4 text-white">
                The Competitive Advantage
              </p>
              <p className="text-lg text-gray-300">
                While others ask you to trust blindly, we give you the tools to verify. That&apos;s not just better ethics—it&apos;s better business.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Transparency <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            These aren&apos;t just principles. They&apos;re built into every line of code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/xynergy" size="lg">
              Explore Xynergy
            </Button>
            <Button href="/proof" variant="outline" size="lg">
              See the Proof
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
