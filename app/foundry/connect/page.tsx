import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { Code, Zap, Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Foundry Connect — API Access',
  description: 'Direct API access to ClearForge Foundry intelligence. Build custom integrations and leverage enterprise AI capabilities.',
  canonical: '/foundry/connect',
});

export default function FoundryConnectPage() {
  return (
    <div>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-primary-blue/20 text-primary-blue text-sm font-semibold px-4 py-2 rounded-full">
              API Access • Coming Soon
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Foundry <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Direct API access to ClearForge Foundry intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta" size="lg">Join Beta</Button>
            <Button href="/contact" variant="outline" size="lg">Contact Sales</Button>
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="text-gradient">What is Foundry Connect?</span>
          </h2>
          <Card variant="elevated" className="mb-8">
            <p className="text-xl text-gray-200 mb-4">
              Foundry Connect is our API layer that gives you programmatic access to all ClearForge Foundry capabilities.
            </p>
            <p className="text-gray-300">
              Same powerful engines. Same transparent reasoning. But on your terms, in your infrastructure.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-primary-blue" />
                <h3 className="text-lg font-bold">RESTful API</h3>
              </div>
              <p className="text-gray-300 text-sm">Standard REST endpoints with JSON responses.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-accent-pink" />
                <h3 className="text-lg font-bold">Secure</h3>
              </div>
              <p className="text-gray-300 text-sm">API key authentication with full audit trails.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-secondary-purple-light" />
                <h3 className="text-lg font-bold">Real-Time</h3>
              </div>
              <p className="text-gray-300 text-sm">Sub-second response times for most queries.</p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-gradient">Coming Soon</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Foundry Connect is in private beta. Join the waitlist for early access.
          </p>
          <Button href="/beta" size="lg">Join Beta Waitlist</Button>
        </div>
      </Section>
    </div>
  );
}
