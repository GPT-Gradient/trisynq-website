import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';
import { DollarSign, Target, Map, Users, CheckCircle, Calendar } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Revenue Generator Workshop — 2-Day Strategic Session',
  description: 'Transform technology from a budget item to a revenue engine. Virtual or on-site whiteboard session to identify opportunities and produce an actionable roadmap.',
  canonical: '/training/revenue-workshop',
});

export default function RevenueWorkshopPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-accent-pink/20 text-accent-pink text-sm font-semibold px-4 py-2 rounded-full">
              2-Day Workshop
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Technology as a <span className="text-gradient">Revenue Generator</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Stop treating tech as a cost center. Turn it into a revenue engine.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            2-day virtual or on-site whiteboard session to identify opportunities and build your roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Schedule Workshop
            </Button>
            <Button href="#overview" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </Section>

      {/* The Problem */}
      <Section background="dark" id="overview">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            The <span className="text-gradient">Problem</span>
          </h2>

          <Card variant="elevated" className="border-2 border-accent-pink/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                Most businesses treat technology as a necessary expense. A line item on the budget. Something you have to spend money on to keep the lights on.
              </p>

              <p className="text-lg">
                <strong className="text-white">Fortune 500s figured out 15 years ago</strong> that technology isn&apos;t a cost center—it&apos;s a revenue engine. They use tech to identify opportunities, automate revenue generation, and create competitive moats.
              </p>

              <p className="text-lg">
                The difference? <strong className="text-primary-blue">Strategic thinking.</strong> Not just &quot;what tools should we buy&quot; but <strong className="text-primary-blue">&quot;how can technology make us money?&quot;</strong>
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-3 text-accent-pink">Cost Center Thinking</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• &quot;We need to keep costs down&quot;</li>
                <li>• &quot;What&apos;s the cheapest option?&quot;</li>
                <li>• &quot;Let&apos;s delay that investment&quot;</li>
                <li>• Technology is overhead to minimize</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Revenue Engine Thinking</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• &quot;How does this make us money?&quot;</li>
                <li>• &quot;What&apos;s the ROI potential?&quot;</li>
                <li>• &quot;Can we automate revenue generation?&quot;</li>
                <li>• Technology is investment that compounds</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            What We <span className="text-gradient">Do</span>
          </h2>

          <Card variant="elevated" className="border-2 border-primary-blue/30 mb-8">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl text-gray-200">
                Over 2 days (virtual or on-site), we work with your leadership team to shift from cost-center thinking to revenue-engine strategy.
              </p>

              <p className="text-lg">
                This isn&apos;t a lecture. It&apos;s a <strong className="text-white">working session</strong>. We use whiteboards, your actual business data, and real scenarios to identify specific opportunities where technology can generate revenue.
              </p>

              <p className="text-lg">
                You leave with an <strong className="text-primary-blue">actionable roadmap</strong>—not generic recommendations, but specific projects mapped to revenue potential, timeline, and resource requirements.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-blue/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="text-lg font-bold text-primary-blue">Identify</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Map revenue opportunities across your business. Where can tech make you money?
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent-pink/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-accent-pink" />
                </div>
                <h3 className="text-lg font-bold text-accent-pink">Quantify</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Estimate ROI for each opportunity. Prioritize by revenue potential and implementation complexity.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary-purple/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <Map className="w-6 h-6 text-secondary-purple-light" />
                </div>
                <h3 className="text-lg font-bold text-secondary-purple-light">Roadmap</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Build an execution roadmap with phases, milestones, and resource requirements.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* 2-Day Agenda */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-gradient">2-Day Agenda</span>
          </h2>

          <div className="space-y-6">
            {/* Day 1 */}
            <Card variant="elevated" className="border-l-4 border-accent-pink">
              <div className="flex items-start gap-6">
                <div className="bg-accent-pink/20 rounded-full px-6 py-3 flex-shrink-0">
                  <span className="text-accent-pink font-bold text-2xl">Day 1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">Discovery & Opportunity Mapping</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-primary-blue mb-2">Morning Session (3-4 hours)</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span><strong>Current State Assessment:</strong> Map your existing technology stack, processes, and pain points</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span><strong>Revenue Model Analysis:</strong> How do you make money today? Where are the bottlenecks?</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span><strong>Customer Journey Mapping:</strong> Identify friction points and automation opportunities</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-accent-pink mb-2">Afternoon Session (3-4 hours)</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                          <span><strong>Opportunity Identification:</strong> Whiteboard session to identify 10-20 potential revenue-generation opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                          <span><strong>Enterprise Pattern Transfer:</strong> Show how Fortune 500s approach the same challenges</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                          <span><strong>Quick-Win Identification:</strong> Flag opportunities that can be implemented fast with high ROI</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Day 2 */}
            <Card variant="elevated" className="border-l-4 border-primary-blue">
              <div className="flex items-start gap-6">
                <div className="bg-primary-blue/20 rounded-full px-6 py-3 flex-shrink-0">
                  <span className="text-primary-blue font-bold text-2xl">Day 2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">Prioritization & Roadmap</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-primary-blue mb-2">Morning Session (3-4 hours)</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span><strong>ROI Estimation:</strong> Quantify revenue potential for each opportunity (conservative, realistic, optimistic)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span><strong>Complexity Assessment:</strong> Estimate implementation effort, timeline, and resource requirements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span><strong>Priority Matrix:</strong> Plot opportunities on ROI vs Complexity matrix to identify best candidates</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-accent-pink mb-2">Afternoon Session (3-4 hours)</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                          <span><strong>Roadmap Development:</strong> Build phased implementation plan (30/60/90 days + long-term)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                          <span><strong>Resource Planning:</strong> Identify team, budget, and partner requirements for each phase</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
                          <span><strong>Success Metrics:</strong> Define KPIs and measurement strategy for each initiative</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* What You Get */}
      <Section background="medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            What You <span className="text-gradient">Leave With</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-primary-blue">Deliverables</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue flex-shrink-0">•</span>
                  <span><strong className="text-white">Opportunity Matrix:</strong> 10-20 revenue opportunities identified, quantified, and prioritized</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue flex-shrink-0">•</span>
                  <span><strong className="text-white">Phased Roadmap:</strong> Implementation plan with timelines, resources, and milestones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue flex-shrink-0">•</span>
                  <span><strong className="text-white">ROI Models:</strong> Financial projections for each opportunity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-blue flex-shrink-0">•</span>
                  <span><strong className="text-white">Success Metrics:</strong> KPIs and measurement framework</span>
                </li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h3 className="text-2xl font-bold mb-4 text-accent-pink">Strategic Shift</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink flex-shrink-0">•</span>
                  <span><strong className="text-white">New Lens:</strong> Learn to evaluate tech investments through revenue-generation potential</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink flex-shrink-0">•</span>
                  <span><strong className="text-white">Enterprise Patterns:</strong> Understand how Fortune 500s think about technology ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink flex-shrink-0">•</span>
                  <span><strong className="text-white">Shared Language:</strong> Align leadership on technology strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-pink flex-shrink-0">•</span>
                  <span><strong className="text-white">Action Plan:</strong> Know exactly what to do next (and who does it)</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="bg-background-dark border border-primary-blue/30">
            <p className="text-lg text-gray-300 text-center">
              <strong className="text-white">This isn&apos;t a report you file away.</strong> It&apos;s a working plan your team can execute immediately.
            </p>
          </Card>
        </div>
      </Section>

      {/* Format & Pricing */}
      <Section background="dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-gradient">Format & Pricing</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Virtual */}
            <Card variant="elevated" className="border-2 border-primary-blue/30">
              <h3 className="text-3xl font-bold mb-6 text-primary-blue">Virtual Workshop</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Format</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• 2 consecutive days, 6-8 hours per day</li>
                    <li>• Video conference with digital whiteboard tools</li>
                    <li>• Up to 10 participants from your team</li>
                    <li>• Recorded sessions for review</li>
                    <li>• Digital deliverables (deck, spreadsheets, diagrams)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Best For</h4>
                  <p className="text-gray-300 text-sm">
                    Distributed teams, budget-conscious orgs, or quick turnaround needs
                  </p>
                </div>
              </div>

              <div className="bg-primary/30 rounded-xl p-4 mb-6">
                <p className="text-2xl font-bold text-white mb-1">Custom Pricing</p>
                <p className="text-sm text-gray-400">Based on team size and scope</p>
              </div>

              <Button href="/contact" className="w-full">
                Schedule Virtual Workshop
              </Button>
            </Card>

            {/* On-Site */}
            <Card variant="elevated" className="border-2 border-accent-pink/30">
              <h3 className="text-3xl font-bold mb-6 text-accent-pink">On-Site Workshop</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Format</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• 2 consecutive days at your location</li>
                    <li>• Physical whiteboard sessions & facilitation</li>
                    <li>• Up to 15 participants from your team</li>
                    <li>• In-person collaboration and team building</li>
                    <li>• Physical + digital deliverables</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Best For</h4>
                  <p className="text-gray-300 text-sm">
                    Co-located leadership teams, major strategic shifts, or hands-on facilitation needs
                  </p>
                </div>
              </div>

              <div className="bg-primary/30 rounded-xl p-4 mb-6">
                <p className="text-2xl font-bold text-white mb-1">Custom Pricing</p>
                <p className="text-sm text-gray-400">Based on location, team size, and scope</p>
              </div>

              <Button href="/contact" variant="outline" className="w-full border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                Schedule On-Site Workshop
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Stop <span className="text-gradient">Bleeding Budget</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            2 days. One strategic shift. Technology that generates revenue instead of consuming it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Schedule Workshop
            </Button>
            <Button href="/training" variant="outline" size="lg">
              Explore All Training
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
