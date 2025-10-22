import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Custom Development - We Build, You Own',
  description: 'Custom solutions on The Foundry platform. White-label capabilities. You own the code and IP.',
});

export default function CustomDevPage() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Custom Development
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            We build, you own. Custom solutions on The Foundry platform.
            White-label capabilities for agencies and enterprises.
          </p>
          <Button href="/contact?type=partnership" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What We Build
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Custom Applications</h3>
              <p className="text-gray-300 mb-4">
                Built on The Foundry platform with all the intelligence included.
                You own the application, we provide the AI engine.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Custom business applications</li>
                <li>• Industry-specific solutions</li>
                <li>• Integration with your existing systems</li>
                <li>• Full code ownership and IP rights</li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <h3 className="text-2xl font-bold mb-4 text-secondary-purple-light">White-Label Solutions</h3>
              <p className="text-gray-300 mb-4">
                Agencies and enterprises can license The Foundry as white-label.
                Your brand, our platform intelligence.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Complete white-label platform access</li>
                <li>• Your branding, your customers</li>
                <li>• We provide the AI infrastructure</li>
                <li>• Revenue share or licensing models</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            How It Works
          </h2>

          <div className="space-y-6">
            <Card>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-primary-blue">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                  <p className="text-gray-300">
                    We understand your needs, requirements, and goals. Define scope and timelines.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-secondary-purple-light">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design & Planning</h3>
                  <p className="text-gray-300">
                    Architecture design, technical planning, and project roadmap.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-accent-pink">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build</h3>
                  <p className="text-gray-300">
                    We build on The Foundry platform, keeping you updated throughout.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-blue-400">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deploy & Transfer</h3>
                  <p className="text-gray-300">
                    We deploy, train your team, and transfer full ownership. Ongoing support available.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss what you need and how we can help.
          </p>
          <Button href="/contact?type=partnership" size="lg">
            Start Your Project
          </Button>
        </div>
      </Section>
    </>
  );
}
