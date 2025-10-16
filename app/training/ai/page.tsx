import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Brain, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'AI Training — Enterprise AI Strategy & Implementation',
  description: 'Cut through AI hype. Learn to build, deploy, and govern AI systems that generate actual business value. Virtual and on-site training.',
  canonical: '/training/ai',
});

export default function AITrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <Button href="/training" variant="bordered" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Training
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-accent-pink/20 rounded-full p-4">
              <Brain className="w-12 h-12 text-accent-pink" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">AI</span> Training
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Cut Through the Hype. Build AI Systems That Actually Generate Value.
          </p>
          <p className="text-lg text-gray-400">
            Learn how enterprises actually implement AI—not the marketing version. From strategy to deployment to governance, get the complete picture.
          </p>
        </div>
      </Section>

      {/* What You'll Learn */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What You&apos;ll <span className="text-accent-pink">Actually Learn</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">AI Strategy Beyond Buzzwords</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Separating AI hype from actual capability</li>
                <li>• Identifying real business use cases</li>
                <li>• Build vs buy vs partner decision frameworks</li>
                <li>• ROI models that actually work</li>
                <li>• Avoiding the $10M AI graveyard</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Model Selection & Deployment</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• When to use which type of model and why</li>
                <li>• Foundation models vs custom vs fine-tuned</li>
                <li>• Deployment patterns that scale</li>
                <li>• Performance monitoring & optimization</li>
                <li>• Cost management at production scale</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Responsible AI & Governance</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Building AI systems you can actually trust</li>
                <li>• Bias detection & mitigation strategies</li>
                <li>• Explainability patterns that work</li>
                <li>• Governance frameworks for AI at scale</li>
                <li>• Compliance & risk management</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">MLOps & Production AI</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• CI/CD for machine learning systems</li>
                <li>• Model versioning & experiment tracking</li>
                <li>• A/B testing & champion/challenger patterns</li>
                <li>• Incident response for AI failures</li>
                <li>• Building reliable AI systems</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Who Should Attend */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Who Should <span className="text-primary-blue">Attend</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="bordered" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Business Leaders</h3>
              <p className="text-gray-400 text-sm">
                Cut through vendor hype. Make informed AI investment decisions based on reality, not marketing.
              </p>
            </Card>

            <Card variant="bordered" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">ML Engineers</h3>
              <p className="text-gray-400 text-sm">
                Learn to build production AI systems, not just notebooks. Enterprise patterns that scale.
              </p>
            </Card>

            <Card variant="bordered" className="text-center">
              <h3 className="text-xl font-bold mb-3 text-white">Data Scientists</h3>
              <p className="text-gray-400 text-sm">
                Bridge the gap between models and production. Deploy systems that actually create value.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Program Structure */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Program <span className="text-gradient">Structure</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Strategy & Foundations</h3>
              <p className="text-gray-300 mb-4">2-3 Days | Virtual or On-Site</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• AI capabilities vs hype reality check</li>
                <li>• Business value identification</li>
                <li>• Model selection frameworks</li>
                <li>• Deployment pattern fundamentals</li>
                <li>• Building your AI roadmap</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                Perfect for teams starting AI initiatives or reassessing current approaches.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Production AI Systems</h3>
              <p className="text-gray-300 mb-4">3-5 Days | Virtual or On-Site</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Enterprise MLOps architecture</li>
                <li>• Advanced deployment patterns</li>
                <li>• Responsible AI implementation</li>
                <li>• Production monitoring & incident response</li>
                <li>• Scaling AI across the organization</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                For teams building production AI systems or scaling existing pilots.
              </p>
            </Card>
          </div>

          <Card className="bg-primary/30 border-2 border-accent-pink/30">
            <h3 className="text-2xl font-bold mb-4 text-white">All Programs Include:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <ul className="space-y-2">
                <li>✓ Hands-on labs with real AI systems</li>
                <li>✓ Use case evaluation workshops</li>
                <li>✓ ROI calculation frameworks</li>
                <li>✓ Vendor evaluation templates</li>
              </ul>
              <ul className="space-y-2">
                <li>✓ Architecture review & roadmapping</li>
                <li>✓ Governance framework templates</li>
                <li>✓ Post-training support (30 days)</li>
                <li>✓ Recorded sessions (virtual)</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* Reality Check Section */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            The AI <span className="text-accent-pink">Reality Check</span>
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="bordered" className="bg-background-dark/50">
              <div className="flex gap-4">
                <div className="text-4xl">❌</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">What We DON&apos;T Teach</h3>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• &quot;AI will solve everything&quot; magical thinking</li>
                    <li>• Vendor product training disguised as education</li>
                    <li>• Building systems that can&apos;t be explained or governed</li>
                    <li>• Chasing AI for AI&apos;s sake without business value</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="bordered" className="bg-background-dark/50">
              <div className="flex gap-4">
                <div className="text-4xl">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent-pink">What We DO Teach</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• When AI is (and isn&apos;t) the right solution</li>
                    <li>• How to build systems you can actually trust and govern</li>
                    <li>• Measuring and delivering real business value</li>
                    <li>• Making AI work reliably in production at scale</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-primary/30 rounded-xl p-8 border border-accent-pink/30 mb-8">
            <p className="text-lg text-gray-300 italic mb-4">
              &quot;Most AI training teaches you to be impressed by demos. We teach you to ask the hard questions: Can this scale? Can we afford it? Can we explain it? Can we govern it? Does it actually solve a real problem?&quot;
            </p>
            <p className="text-accent-pink">— ClearForge AI Training Philosophy</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Build AI That Actually Works?</h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s talk about your AI goals, current challenges, and what success really looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Schedule a Conversation
              </Button>
              <Button href="/training" variant="bordered" size="lg">
                Explore Other Training
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
