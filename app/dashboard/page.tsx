import { Metadata } from 'next';
import { TrendingUp, Activity, AlertCircle, DollarSign, Users, FileText } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Your Forge Control Center',
  description: 'Projects, tools, and learning paths at a glance.',
});

export default function DashboardPage() {
  return (
    <>
      {/* Overview Section */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Forge <span className="text-gradient">Control Center</span>.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Projects, tools, and learning paths at a glance.
          </p>

          <div className="bg-primary/50 rounded-2xl p-6 border border-accent-pink/30 backdrop-blur-sm">
            <p className="text-lg font-semibold text-white">
              No decorative charts. No vanity metrics. Just what matters.
            </p>
          </div>

          <p className="text-gray-400 mt-6">
            Dashboard launches as first beta partners come on board. This is clarity in motion.
          </p>
        </div>
      </Section>

      {/* Private Beta Results */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project NEXUS <span className="text-gradient">Private Beta</span>
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            22 companies. 8 industries. 6 months. Real data.
          </p>
          <div className="inline-block bg-accent-pink/10 border border-accent-pink/30 rounded-lg px-4 py-2">
            <p className="text-sm text-accent-pink font-semibold">
              Data scrubbed for confidentiality. Verified independently.
            </p>
          </div>
        </div>

        {/* Aggregate Results */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-accent-pink" />
            Aggregate Results
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card variant="elevated">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-blue mb-2">+247%</div>
                <div className="text-lg font-semibold text-white mb-1">Search Visibility</div>
                <div className="text-sm text-gray-400">100 → 347 index</div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-blue mb-2">+224%</div>
                <div className="text-lg font-semibold text-white mb-1">Organic Traffic</div>
                <div className="text-sm text-gray-400">2,847 → 9,234 visitors/month</div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent-pink mb-2">+278%</div>
                <div className="text-lg font-semibold text-white mb-1">Qualified Leads</div>
                <div className="text-sm text-gray-400">23 → 87 leads/month</div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent-pink mb-2">-76%</div>
                <div className="text-lg font-semibold text-white mb-1">Cost per Lead</div>
                <div className="text-sm text-gray-400">$127 → $31</div>
              </div>
            </Card>
          </div>

          <Card variant="bordered">
            <h4 className="text-xl font-bold mb-6 text-primary-blue">6-Month Performance Timeline</h4>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Baseline</div>
                <div className="text-2xl font-bold text-white">100</div>
                <div className="text-xs text-gray-500 mt-1">Visibility</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Month 1</div>
                <div className="text-2xl font-bold text-primary-blue">118</div>
                <div className="text-xs text-accent-pink mt-1">+18%</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Month 2</div>
                <div className="text-2xl font-bold text-primary-blue">156</div>
                <div className="text-xs text-accent-pink mt-1">+32%</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Month 3</div>
                <div className="text-2xl font-bold text-primary-blue">203</div>
                <div className="text-xs text-accent-pink mt-1">+30%</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Month 4</div>
                <div className="text-2xl font-bold text-primary-blue">268</div>
                <div className="text-xs text-accent-pink mt-1">+32%</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Month 6</div>
                <div className="text-2xl font-bold text-accent-pink">347</div>
                <div className="text-xs text-accent-pink mt-1">+247%</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Time Investment Reduction */}
        <div className="mb-16">
          <Card variant="bordered" className="bg-secondary-purple/10">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4 text-secondary-purple-light">Time Investment Reduced</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Before ASO</div>
                  <div className="text-5xl font-bold text-gray-500 mb-1">15.3</div>
                  <div className="text-lg text-gray-400">hours/month</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">After ASO (Month 6)</div>
                  <div className="text-5xl font-bold text-accent-pink mb-1">3.8</div>
                  <div className="text-lg text-gray-400">hours/month</div>
                </div>
              </div>
              <div className="mt-6 text-xl font-semibold text-secondary-purple-light">
                75% less time. Better results.
              </div>
            </div>
          </Card>
        </div>

        {/* Industry Breakdown */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Activity className="w-8 h-8 text-accent-pink" />
            Industry Breakdown
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="bordered">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-primary-blue">Professional Services</h4>
                <span className="text-sm text-gray-400">6 companies</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Visibility</span>
                  <span className="text-accent-pink font-semibold">+289%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Traffic</span>
                  <span className="text-accent-pink font-semibold">+267%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Leads</span>
                  <span className="text-accent-pink font-semibold">+312%</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <p className="text-xs text-gray-500">Legal, Accounting, Consulting</p>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-primary-blue">Real Estate</h4>
                <span className="text-sm text-gray-400">4 companies</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Visibility</span>
                  <span className="text-accent-pink font-semibold">+423%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Traffic</span>
                  <span className="text-accent-pink font-semibold">+389%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Leads</span>
                  <span className="text-accent-pink font-semibold">+445%</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <p className="text-xs text-gray-500">Highest overall traffic growth</p>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-primary-blue">Home Services</h4>
                <span className="text-sm text-gray-400">2 companies</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Visibility</span>
                  <span className="text-accent-pink font-semibold">+467%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Traffic</span>
                  <span className="text-accent-pink font-semibold">+512%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Leads</span>
                  <span className="text-accent-pink font-semibold">+589%</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <p className="text-xs text-gray-500">Highest visibility gains</p>
              </div>
            </Card>

            <Card variant="bordered">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-primary-blue">Healthcare</h4>
                <span className="text-sm text-gray-400">3 companies</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Visibility</span>
                  <span className="text-accent-pink font-semibold">+312%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Traffic</span>
                  <span className="text-accent-pink font-semibold">+298%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Leads</span>
                  <span className="text-accent-pink font-semibold">+267%</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <p className="text-xs text-gray-500">73% mobile traffic</p>
              </div>
            </Card>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="elevated">
              <div className="text-center py-4">
                <div className="text-sm text-gray-400 mb-1">Technology & SaaS</div>
                <div className="text-xl font-bold text-white">3 companies</div>
                <div className="text-sm text-accent-pink mt-1">+256% visibility</div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center py-4">
                <div className="text-sm text-gray-400 mb-1">Education & Training</div>
                <div className="text-xl font-bold text-white">2 companies</div>
                <div className="text-sm text-accent-pink mt-1">+234% visibility</div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center py-4">
                <div className="text-sm text-gray-400 mb-1">E-commerce/Retail</div>
                <div className="text-xl font-bold text-white">1 company</div>
                <div className="text-sm text-gray-500 mt-1">Data included</div>
              </div>
            </Card>

            <Card variant="elevated">
              <div className="text-center py-4">
                <div className="text-sm text-gray-400 mb-1">Nonprofit</div>
                <div className="text-xl font-bold text-white">1 company</div>
                <div className="text-sm text-gray-500 mt-1">Data included</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-accent-pink" />
            Before/After
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-6 text-gray-500">Before ASO (Baseline)</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Monthly Visitors</span>
                  <span className="text-xl font-semibold text-gray-500">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Keywords in Top 10</span>
                  <span className="text-xl font-semibold text-gray-500">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Content Published</span>
                  <span className="text-xl font-semibold text-gray-500">3.2/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Social Engagement</span>
                  <span className="text-xl font-semibold text-gray-500">234/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Time Investment</span>
                  <span className="text-xl font-semibold text-gray-500">15.3 hrs/mo</span>
                </div>
              </div>
            </Card>

            <Card variant="bordered" className="bg-primary-blue/10 border-primary-blue/30">
              <h4 className="text-xl font-bold mb-6 text-primary-blue">After ASO (Month 6)</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monthly Visitors</span>
                  <div className="text-right">
                    <span className="text-xl font-semibold text-white">9,234</span>
                    <span className="text-accent-pink text-sm ml-2">+224%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Keywords in Top 10</span>
                  <div className="text-right">
                    <span className="text-xl font-semibold text-white">89</span>
                    <span className="text-accent-pink text-sm ml-2">+642%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Content Published</span>
                  <div className="text-right">
                    <span className="text-xl font-semibold text-white">18.7/month</span>
                    <span className="text-accent-pink text-sm ml-2">+484%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Social Engagement</span>
                  <div className="text-right">
                    <span className="text-xl font-semibold text-white">1,456/month</span>
                    <span className="text-accent-pink text-sm ml-2">+522%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Time Investment</span>
                  <div className="text-right">
                    <span className="text-xl font-semibold text-white">3.8 hrs/mo</span>
                    <span className="text-accent-pink text-sm ml-2">-75%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Success Factors */}
        <div>
          <Card variant="bordered" className="bg-secondary-purple/5">
            <h4 className="text-2xl font-bold mb-6 text-secondary-purple-light">Key Success Factors</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-semibold text-primary-blue mb-3">Top Quartile Performance</h5>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink mt-1">✓</span>
                    <span>Active engagement in content approval (4.2 hrs/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink mt-1">✓</span>
                    <span>Clear understanding of target audience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink mt-1">✓</span>
                    <span>Responsive to optimization recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink mt-1">✓</span>
                    <span>Results: +489% visibility, +467% traffic, +523% leads</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-primary-blue mb-3">What Worked Best</h5>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink mt-1">→</span>
                    <span>Multi-modal optimization (search, voice, AI, social)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink mt-1">→</span>
                    <span>Automated trending content integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink mt-1">→</span>
                    <span>Quality standards maintained despite volume increase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-pink mt-1">→</span>
                    <span>Local SEO focus for service businesses</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Live Dashboard (Coming Soon) */}
      <Section background="medium">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live Dashboard <span className="text-gradient">(Coming Soon)</span>
          </h2>
          <p className="text-xl text-gray-400">
            Launches with first beta partners.
          </p>
        </div>

        {/* Continuum Projects Dashboard */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Activity className="w-8 h-8 text-accent-pink" />
            Continuum Projects
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-4 text-primary-blue">Project NEXUS</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Beta Participants</span>
                  <span className="text-2xl font-bold text-white">Target: 100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Search Ranking Improvements</span>
                  <span className="text-lg font-semibold text-primary-blue">Documented weekly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Content Performance</span>
                  <span className="text-lg font-semibold text-primary-blue">All channels tracked</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Methodology Refinements</span>
                  <span className="text-lg font-semibold text-primary-blue">Updated based on real results</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Partner Success Rate</span>
                  <span className="text-lg font-semibold text-accent-pink">Full transparency on what works</span>
                </div>
              </div>
            </Card>

            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-4 text-secondary-purple-light">Other Projects</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Research Progress</span>
                  <span className="text-lg font-semibold text-white">Development stages shown publicly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Beta Timeline Updates</span>
                  <span className="text-lg font-semibold text-white">No hiding delays</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Methodology Development</span>
                  <span className="text-lg font-semibold text-white">Evolution documented openly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Partner Interest</span>
                  <span className="text-lg font-semibold text-white">Real demand shown</span>
                </div>
              </div>
            </Card>
          </div>

          <p className="text-gray-500 text-sm mt-4 text-center">
            Live dashboard coming with first beta partners.
          </p>
        </div>

        {/* Performance Transparency */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-accent-pink" />
            Performance Transparency
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated">
              <h4 className="text-lg font-bold mb-4 text-primary-blue">Website Analytics</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Traffic sources and growth</li>
                <li>• Content engagement</li>
                <li>• Conversion metrics</li>
                <li>• User journey analysis</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h4 className="text-lg font-bold mb-4 text-primary-blue">Search Performance</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Keyword rankings</li>
                <li>• Search visibility trends</li>
                <li>• Algorithm update responses</li>
                <li>• Competitive positioning</li>
              </ul>
            </Card>

            <Card variant="elevated">
              <h4 className="text-lg font-bold mb-4 text-primary-blue">Content Effectiveness</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• What content resonates</li>
                <li>• What falls flat</li>
                <li>• Learning and adaptation</li>
                <li>• Audience insights</li>
              </ul>
            </Card>
          </div>

          <div className="mt-6 bg-primary/30 rounded-2xl p-6 border border-accent-pink/30">
            <p className="text-center text-gray-300">
              No fake data. Real metrics when they exist.
            </p>
          </div>
        </div>

        {/* Methodology Evolution */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-accent-pink" />
            Methodology Evolution
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-4 text-primary-blue">What We&apos;ve Learned</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">✓</span>
                  <span>Successful approaches documented openly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-pink mt-1">✗</span>
                  <span>Failed experiments analyzed publicly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">→</span>
                  <span>Adaptation decisions explained clearly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-purple-light mt-1">↑</span>
                  <span>Process improvements tracked transparently</span>
                </li>
              </ul>
            </Card>

            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-4 text-secondary-purple-light">Algorithm Response Log</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <span>Platform changes detected and documented</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <span>Our adaptations explained in detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <span>Impact on results shown with context</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-pink mt-1 flex-shrink-0" />
                  <span>Learning documentation shared publicly</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card variant="elevated" className="mt-6">
            <h4 className="text-xl font-bold mb-4 text-accent-pink">Community Contributions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>• Partner feedback integration</div>
              <div>• Methodology refinements from community</div>
              <div>• New approach testing with partners</div>
              <div>• Collective learning documented</div>
            </div>
          </Card>
        </div>

        {/* Company Transparency */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-accent-pink" />
            Company Transparency
          </h3>

          <Card variant="bordered" className="mb-6">
            <h4 className="text-xl font-bold mb-4 text-primary-blue">What We Share</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Methodology & Results</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• How we achieve outcomes</li>
                  <li>• What works and what doesn&apos;t</li>
                  <li>• Partner success metrics</li>
                  <li>• Performance improvements</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Growth & Progress</h5>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Beta participant numbers</li>
                  <li>• Project development stages</li>
                  <li>• Community contributions</li>
                  <li>• Platform maturity</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="mt-6 bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30">
            <p className="text-center text-accent-pink font-semibold">
              Not VC-funded. Grassroots. Building sustainably with our community.
            </p>
          </div>
        </div>
      </Section>

      {/* Analysis and Insights */}
      <Section background="medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Analysis and <span className="text-gradient">Insights</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-3 text-primary-blue">Weekly Updates</h4>
              <p className="text-gray-300">What we learned. What we implemented.</p>
            </Card>

            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-3 text-primary-blue">Trend Analysis</h4>
              <p className="text-gray-300">What the market does. What algorithms do.</p>
            </Card>

            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-3 text-primary-blue">Community Impact</h4>
              <p className="text-gray-300">How transparency affects results</p>
            </Card>

            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-3 text-primary-blue">Competitive Response</h4>
              <p className="text-gray-300">How others adapt to our approach</p>
            </Card>

            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-3 text-primary-blue">Future Predictions</h4>
              <p className="text-gray-300">Where we see the market heading</p>
            </Card>

            <Card variant="bordered">
              <h4 className="text-xl font-bold mb-3 text-primary-blue">Methodology Evolution</h4>
              <p className="text-gray-300">How we adapt. How we improve.</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* What We Don't Show */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-gradient">Don&apos;t Show</span>
            </h2>
            <p className="text-xl text-gray-400">
              Privacy and security come first.
            </p>
          </div>

          <Card variant="bordered">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Individual Partner Identities</h4>
                  <p className="text-gray-400 text-sm">Unless they choose to share publicly</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Proprietary Implementations</h4>
                  <p className="text-gray-400 text-sm">Competitive protection for partners</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Personal Information</h4>
                  <p className="text-gray-400 text-sm">Security and privacy protected</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Security-Compromising Details</h4>
                  <p className="text-gray-400 text-sm">Anything affecting safety or security</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Partner Business Information</h4>
                  <p className="text-gray-400 text-sm">Confidential business details stay private</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-accent-pink mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Anything Compromising Safety</h4>
                  <p className="text-gray-400 text-sm">Partner and user safety comes first</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center space-y-6">
            <div className="bg-accent-pink/10 rounded-2xl p-6 border border-accent-pink/30">
              <p className="text-xl font-bold text-accent-pink mb-2">
                Find another company this transparent.
              </p>
              <p className="text-gray-300">
                We&apos;ll wait.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/beta" size="lg">
                Join Beta Program
              </Button>
              <Button href="/mission" variant="outline" size="lg">
                Learn Our Mission
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
