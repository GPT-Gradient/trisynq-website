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
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Continuum Partnership: Co-Create Products Together
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Become a validation partner for new Foundry products. Help us prove methodologies, build case studies organically,
            and share in success. 12-18 month partnerships with preferred terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=partnership" size="lg">
              Partner Inquiry
            </Button>
            <Button href="/continuum" size="lg" variant="outline">
              Learn About The Continuum
            </Button>
          </div>
        </div>
      </Section>

      {/* The Problem with Traditional Beta Programs */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            The Problem with Traditional Beta Programs
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Most companies launch products with fake case studies, superficial testing, and promises instead of proof. We do it differently.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Launch First, Validate Never</h3>
              <p className="text-gray-300 mb-4">
                Most SaaS companies launch products without real validation. Beta programs are marketing exercises - get a few users, call it "tested," and sell hard.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> Product launches with "50+ beta users!" Reality: 48 free trials, 2 actually used it, zero paid after trial ended. No validation happened.
              </p>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Fake Case Studies</h3>
              <p className="text-gray-300 mb-4">
                "Company X increased productivity by 40%" - based on a 2-week trial where they didn't change any processes. Not real validation, just marketing claims.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> AI tool claims "3x faster content creation." Reality: They timed one user making one blog post. No long-term usage, no process change.
              </p>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">No Real Partnership</h3>
              <p className="text-gray-300 mb-4">
                Beta programs give you a discount code and a feedback form. No collaboration on methodology, no input on product direction, no shared success.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> Company becomes "beta partner" - gets 20% off and a survey every quarter. Product team never responds to feedback.
              </p>
            </Card>

            <Card variant="elevated" className="border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Promises, Not Proof</h3>
              <p className="text-gray-300 mb-4">
                Products launch with roadmaps full of "coming soon" features. Beta partners get promises, not working capabilities. You're paying to be a tester.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Real Example:</strong> Platform sells enterprise features "coming Q2." Q2 arrives - now it's "delayed to Q4." Beta partners stuck paying for incomplete product.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* How The Continuum Works */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            How The Continuum Works: Our Validation Approach
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We build products through a 3-phase validation process. No product launches until it's proven. Continuum partners are phase 2 - where real validation happens.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">1️⃣</div>
                <h3 className="text-2xl font-bold text-primary-blue">Internal Use</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We use it ourselves first. Manage our own operations. Build our own business with it. If it doesn't work for us internally, we don't move to phase 2.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Duration: 3-6 months</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Build core capabilities</li>
                  <li>• Use in our daily operations</li>
                  <li>• Validate problem/solution fit</li>
                  <li>• Prove we'd pay for it ourselves</li>
                </ul>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-secondary-purple/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">2️⃣</div>
                <h3 className="text-2xl font-bold text-secondary-purple-light">Continuum Partners</h3>
              </div>
              <p className="text-gray-300 mb-4">
                12-18 month validation with 10-20 real companies. Build case studies organically through actual usage. This is where you come in.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Duration: 12-18 months</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Validate methodology across industries</li>
                  <li>• Build real case studies with metrics</li>
                  <li>• Refine features based on partner usage</li>
                  <li>• Prove value at scale</li>
                </ul>
              </div>
            </Card>

            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">3️⃣</div>
                <h3 className="text-2xl font-bold text-accent-pink">Product Launch</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Commercial release with proven methodology, real case studies, and documented results. Your success becomes proof for everyone else.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Post-Validation: Public Launch</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Launch with 10-20 real case studies</li>
                  <li>• Partners featured in marketing</li>
                  <li>• Proven methodology, not promises</li>
                  <li>• Partners keep preferred terms</li>
                </ul>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-green-500/30">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Why This Approach Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-white">We Validate First</h4>
                <p className="text-sm text-gray-400">
                  No product launches without 12-18 months of real-world validation. Partners aren't paying to beta test - they're co-creating proven methodologies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Real Case Studies</h4>
                <p className="text-sm text-gray-400">
                  Case studies are built organically from actual usage over 12+ months. Not fake metrics from 2-week trials - real business transformation you can verify.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Shared Success</h4>
                <p className="text-sm text-gray-400">
                  Partners succeed with the product, then benefit when it launches commercially. Preferred pricing, revenue share opportunities, and recognition.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* What Partners Get */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What Continuum Partners Get
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">During Validation (12-18 months)</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Monthly Transparency Reports</strong>
                    <p className="text-sm text-gray-400">
                      Your progress metrics + methodology refinements + how you compare to other partners (anonymized). Full visibility into what's working.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Direct Access to Founding Team</strong>
                    <p className="text-sm text-gray-400">
                      Slack channel, monthly partner calls, quarterly strategy sessions. You're working directly with the people building the product.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Input on Product Development</strong>
                    <p className="text-sm text-gray-400">
                      Your feedback shapes the product roadmap. We build features based on partner usage patterns, not guesses about what market wants.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Co-Created Case Studies</strong>
                    <p className="text-sm text-gray-400">
                      We document your results together. Real metrics, honest challenges, actual methodology. Case study is built from your real business transformation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Preferred Partner Terms</strong>
                    <p className="text-sm text-gray-400">
                      Significantly reduced pricing during validation. You're helping us validate - we provide enterprise capabilities at fraction of cost.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Implementation Support</strong>
                    <p className="text-sm text-gray-400">
                      Monthly check-ins, troubleshooting support, methodology coaching. We want you to succeed - your success validates the product.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">After Commercial Launch</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Continued Preferred Pricing</strong>
                    <p className="text-sm text-gray-400">
                      Partners keep validation pricing permanently. Others pay 2-3x more. You helped us validate - you get rewarded.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Priority Feature Access</strong>
                    <p className="text-sm text-gray-400">
                      New capabilities go to validation partners first. You helped build it - you get first access to what's next.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Public Case Study Recognition</strong>
                    <p className="text-sm text-gray-400">
                      Featured in marketing materials, conference presentations, public dashboard. Your success story helps others discover what's possible.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Revenue Share Opportunities</strong>
                    <p className="text-sm text-gray-400">
                      Select partners who help us refine go-to-market can participate in revenue share. Help us sell to similar companies, share in growth.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">First Access to New Continuum Projects</strong>
                    <p className="text-sm text-gray-400">
                      Successful partners get invited to validate next product first. Build long-term partnership across multiple products.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Advisory Board Opportunity</strong>
                    <p className="text-sm text-gray-400">
                      Top partners invited to join product advisory board. Shape long-term roadmap, influence company strategy.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 border-purple-500/30">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">What We're NOT Offering</h3>
            <p className="text-gray-300 mb-4">
              This is not a discount program. We're not looking for "beta users" who get 20% off to be testers. We're looking for real partners who will:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-400">
              <li>• Actually use the product in daily operations (not just "try it")</li>
              <li>• Provide honest feedback about what works and what doesn't</li>
              <li>• Help us refine methodology through real business application</li>
              <li>• Be willing to share results publicly (with your approval)</li>
              <li>• Commit to 12-18 month partnership (not 30-day trial)</li>
              <li>• Accept that features will evolve based on collective partner feedback</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Current Opportunities */}
      <Section background="medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Current Continuum Partnership Opportunities
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Two active projects recruiting validation partners now. Choose the one that matches your business challenge.
          </p>

          <div className="space-y-8">
            <Card variant="elevated" className="border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div>
                  <span className="text-sm font-semibold text-purple-400 block mb-2">
                    PHASE 1 STARTING Q1 2026
                  </span>
                  <h3 className="text-3xl font-bold">Project NEXUS: Search Visibility Validation</h3>
                </div>
                <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                  <p className="text-sm text-purple-300 font-semibold">Recruiting: 10-20 partners</p>
                </div>
              </div>

              <p className="text-xl text-gray-300 mb-6">
                Validate methodology for search visibility in the AI era. Traditional SEO + AI overviews + answer engines. 12-18 month partner program.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">The Problem We're Validating:</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Traditional SEO dying as AI answers bypass websites</li>
                    <li>• Content marketing ROI collapsing (80% less traffic)</li>
                    <li>• No one knows how to optimize for ChatGPT, Perplexity, Gemini</li>
                    <li>• Businesses losing organic discovery to zero-click results</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">What Partners Will Test:</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Content strategy optimized for AI answer inclusion</li>
                    <li>• Visibility across search engines + AI platforms</li>
                    <li>• Measurement framework (traditional + AI metrics)</li>
                    <li>• Sustainable methodology (not gaming algorithms)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-4">Ideal Partner Profile:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <p className="font-semibold text-white mb-2">Company Type:</p>
                    <ul className="space-y-1">
                      <li>• SaaS/software companies</li>
                      <li>• Professional services (consulting, agencies)</li>
                      <li>• E-commerce/retail</li>
                      <li>• B2B service providers</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Requirements:</p>
                    <ul className="space-y-1">
                      <li>• Existing website with some content</li>
                      <li>• Willing to publish new content monthly</li>
                      <li>• Can share traffic/ranking data</li>
                      <li>• Commit to 12-18 month program</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 bg-purple-900/20 p-4 rounded-lg mb-6">
                <div>
                  <p className="text-sm text-gray-400">Timeline</p>
                  <p className="font-semibold">Q4 2025: Recruitment</p>
                  <p className="font-semibold">Q1-Q3 2026: Validation</p>
                  <p className="font-semibold">Q3 2026: Launch</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Partner Investment</p>
                  <p className="font-semibold">$500-$1,500/month</p>
                  <p className="text-sm text-gray-400">(Based on company size)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Commercial Pricing (Post-Launch)</p>
                  <p className="font-semibold">$2,000-$5,000/month</p>
                  <p className="text-sm text-gray-400">(Partners keep validation pricing)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button href="/continuum/nexus">Learn More About NEXUS</Button>
                <Button href="/contact?type=partnership" variant="outline">Apply to Partner</Button>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div>
                  <span className="text-sm font-semibold text-blue-400 block mb-2">
                    EARLY DEVELOPMENT - PHASE 1
                  </span>
                  <h3 className="text-3xl font-bold">Project RE-Connect: Real Estate Intelligence</h3>
                </div>
                <div className="bg-blue-900/30 px-4 py-2 rounded-lg">
                  <p className="text-sm text-blue-300 font-semibold">Early conversations</p>
                </div>
              </div>

              <p className="text-xl text-gray-300 mb-6">
                Real estate intelligence and transparency platform. Still in phase 1 (internal use). Early partner discussions for future validation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">The Problem We're Exploring:</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Real estate data fragmented across 20+ sources</li>
                    <li>• Agents spend 15-20 hours/week on research</li>
                    <li>• Buyers overwhelmed by listings, can't compare properly</li>
                    <li>• No transparency on property history, market trends</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">What We're Building (Phase 1):</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Unified property intelligence platform</li>
                    <li>• AI-powered property analysis and matching</li>
                    <li>• Market transparency and historical data</li>
                    <li>• Agent productivity tools</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-4">Interested? Here's What Happens Next:</h4>
                <p className="text-sm text-gray-400 mb-4">
                  We're currently using RE-Connect internally to manage our own real estate operations. We're 3-6 months from partner validation phase.
                  If you're interested in becoming a validation partner when we're ready:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• We'll add you to our partner interest list</li>
                  <li>• Share monthly updates on development progress</li>
                  <li>• Invite you to early product demos (Q1-Q2 2026)</li>
                  <li>• Reach out when we start recruiting partners (likely Q2 2026)</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-4 bg-blue-900/20 p-4 rounded-lg mb-6">
                <div>
                  <p className="text-sm text-gray-400">Current Phase</p>
                  <p className="font-semibold">Phase 1: Internal Use</p>
                  <p className="text-sm text-gray-400">Building core capabilities</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Partner Validation Timeline</p>
                  <p className="font-semibold">Est. Q2-Q3 2026</p>
                  <p className="text-sm text-gray-400">Subject to phase 1 success</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Ideal Partners</p>
                  <p className="font-semibold">Real estate agents/brokers</p>
                  <p className="text-sm text-gray-400">Property management firms</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button href="/continuum/re-connect">Learn More About RE-Connect</Button>
                <Button href="/contact?type=partnership" variant="outline">Express Interest</Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Partnership Requirements & Expectations */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Partnership Requirements & Expectations
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated" className="border-2 border-green-500/30">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Good Fit Partners</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>Real Business Problem:</strong> You have the specific problem the product solves. Not "interested to try" - you need this.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>Commitment to Use:</strong> You'll actually use the product in daily operations, not "test it when we have time."
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>Willing to Share Results:</strong> Comfortable having your results (anonymized or attributed) used in case studies.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>Honest Feedback:</strong> You'll tell us what's not working, not just what we want to hear. We need truth, not politeness.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>12-18 Month Timeline:</strong> You understand validation takes time. This isn't a 30-day trial.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong>Collaborative Mindset:</strong> You see this as partnership, not vendor/customer relationship. We succeed together.
                  </div>
                </li>
              </ul>
            </Card>

            <Card variant="elevated" className="border-2 border-red-500/30">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Not a Good Fit If...</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <strong>Just Curious:</strong> You want to "check it out" or "see what this is about" - not solving a real problem.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <strong>Expecting Finished Product:</strong> You want polished, complete product with no bugs. Phase 2 partners co-create - it evolves.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <strong>Need Fast Results:</strong> You want immediate ROI in 30-60 days. Real transformation takes 6-12+ months.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <strong>Can't Share Results:</strong> Your company won't allow public case studies or data sharing (even anonymized).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <strong>Want Custom Features:</strong> You need product built specifically for your unique workflow - this is methodology validation, not custom dev.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <strong>Looking for Free/Cheap:</strong> You're price-shopping for discounts. We offer reduced pricing, but you're investing in validation, not getting freebies.
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-gray-800 to-gray-900">
            <h3 className="text-xl font-semibold mb-4">Partner Responsibilities (What We Expect)</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div>
                <p className="font-semibold text-white mb-2">Monthly Time Commitment:</p>
                <ul className="space-y-1">
                  <li>• Use product in daily operations (varies)</li>
                  <li>• 30-min monthly partner call</li>
                  <li>• Quarterly feedback sessions (1 hour)</li>
                  <li>• Case study development (2-3 hours total)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Data Sharing:</p>
                <ul className="space-y-1">
                  <li>• Usage metrics (aggregated)</li>
                  <li>• Business results (can be anonymized)</li>
                  <li>• Feedback on features and methodology</li>
                  <li>• Honest assessment of what works/doesn't</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Financial:</p>
                <ul className="space-y-1">
                  <li>• Pay monthly partner fee (significantly reduced)</li>
                  <li>• Commit to 12-18 month program</li>
                  <li>• Transition to commercial pricing if you leave early</li>
                  <li>• Keep preferred pricing after validation</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Application Process */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            How to Become a Continuum Partner
          </h2>

          <div className="space-y-6">
            <Card variant="elevated" className="border-l-4 border-primary-blue">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-primary-blue">1</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Submit Partnership Inquiry</h3>
                  <p className="text-gray-300 mb-4">
                    Tell us about your company, the problem you're solving, and which Continuum project interests you. Be specific about your business challenge.
                  </p>
                  <Button href="/contact?type=partnership">Submit Partnership Inquiry</Button>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-secondary-purple-light">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-secondary-purple-light">2</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Discovery Call (30-45 min)</h3>
                  <p className="text-gray-300 mb-4">
                    We discuss your business, confirm fit, explain validation process in detail. You ask questions, we share current methodology. No sales pitch.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-accent-pink">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-accent-pink">3</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Partnership Agreement</h3>
                  <p className="text-gray-300 mb-4">
                    If mutual fit, we send partnership terms. Review timeline, pricing, expectations, deliverables. Ask questions, negotiate terms if needed.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="border-l-4 border-blue-400">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-blue-400">4</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Onboarding & Kickoff</h3>
                  <p className="text-gray-300 mb-4">
                    Welcome to the program! Product access, partner Slack channel, methodology training, implementation support. Monthly check-ins start immediately.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Co-Create the Next Product?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Tell us about your company and which Continuum project interests you. We'll assess fit and get back to you within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact?type=partnership" size="lg">
              Submit Partnership Inquiry
            </Button>
            <Button href="/continuum" size="lg" variant="outline">
              Learn More About The Continuum
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
