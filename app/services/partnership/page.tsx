import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Continuum Partnership - Co-Create Products With Us',
  description: 'Become a Continuum partner to validate methodologies, build case studies, and share in success. 12-18 month validation programs.',
});

export default function PartnershipPage() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Continuum Partnership
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Co-create products with us. Become a Continuum partner to validate
            methodologies, build case studies, and share in success.
          </p>
          <Button href="/contact?type=partnership" size="lg">
            Partner Inquiry
          </Button>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            How The Continuum Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Internal Use</h3>
              <p className="text-gray-300">
                We use it ourselves first. Manage our own operations. If it doesn&apos;t work for us, we don&apos;t ship it.
              </p>
            </Card>

            <Card variant="elevated">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Continuum Partners</h3>
              <p className="text-gray-300">
                12-18 month validation with 10-20 real companies. Build case studies organically. This is where you come in.
              </p>
            </Card>

            <Card variant="elevated">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-2xl font-bold mb-3">Product Launch</h3>
              <p className="text-gray-300">
                Commercial release with proven methodology. Your success becomes proof for everyone else.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Partner Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-4">During Validation (12-18 mo)</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Monthly transparency reports (your progress + methodology)</li>
                <li>• Direct access to founding team</li>
                <li>• Input on product development</li>
                <li>• Co-creation of case studies</li>
                <li>• Preferred terms for early supporters</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-4">After Commercial Launch</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Continued preferred pricing</li>
                <li>• Priority feature access</li>
                <li>• Public case study recognition</li>
                <li>• Revenue share opportunities (select partners)</li>
                <li>• First access to new Continuum projects</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Current Opportunities
          </h2>

          <div className="space-y-6 mb-12">
            <Card variant="elevated" className="border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-semibold text-purple-400 block mb-2">
                    PHASE 1 STARTING Q1 2026
                  </span>
                  <h3 className="text-2xl font-bold">Project NEXUS</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Search visibility validation. Traditional SEO + AI overviews.
                12-18 month partner program. Recruiting 10-20 partners now.
              </p>
              <Button href="/continuum/nexus">Learn More About NEXUS</Button>
            </Card>

            <Card variant="elevated" className="border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm font-semibold text-blue-400 block mb-2">
                    EARLY DEVELOPMENT
                  </span>
                  <h3 className="text-2xl font-bold">Project RE-Connect</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Real estate intelligence and transparency platform.
                Early conversations with potential partners.
              </p>
              <Button href="/continuum/re-connect" variant="outline">Learn More</Button>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Want to Discuss Partnership?</h3>
            <p className="text-gray-300 mb-6">
              Tell us about your company and what interests you about The Continuum.
            </p>
            <Button href="/contact?type=partnership" size="lg">
              Start the Conversation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
