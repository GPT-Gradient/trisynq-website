'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { generateImagePlaceholder, formatNumber } from '@/lib/utils'
import {
  Activity,
  TrendingUp,
  Users,
  Zap,
  Eye,
  BarChart3,
  Globe,
  Search,
  DollarSign,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'

const metadata: Metadata = {
  title: 'Public Dashboard - Live Transparency Hub',
  description: 'Real-time metrics showing our methodology effectiveness, community growth, and transparent business results.',
}

interface Metric {
  icon: any
  label: string
  value: string | number
  change: string
  positive: boolean
  category: 'traffic' | 'community' | 'business' | 'technology'
}

interface Experiment {
  id: string
  title: string
  status: 'testing' | 'failed' | 'successful'
  description: string
  duration: string
  results?: string
}

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      icon: Globe,
      label: 'Website Traffic',
      value: '47,382',
      change: '+12.3%',
      positive: true,
      category: 'traffic'
    },
    {
      icon: Search,
      label: 'Organic Search Growth',
      value: '234%',
      change: '+18 positions',
      positive: true,
      category: 'traffic'
    },
    {
      icon: Users,
      label: 'Community Members',
      value: '2,847',
      change: '+23 this week',
      positive: true,
      category: 'community'
    },
    {
      icon: Zap,
      label: 'Ideas Implemented',
      value: '156',
      change: '+8 this month',
      positive: true,
      category: 'community'
    },
    {
      icon: DollarSign,
      label: 'Revenue Attribution',
      value: '$87,420',
      change: '+34%',
      positive: true,
      category: 'business'
    },
    {
      icon: TrendingUp,
      label: 'Beta Applications',
      value: '234',
      change: '+45 this week',
      positive: true,
      category: 'business'
    }
  ])

  const [experiments, setExperiments] = useState<Experiment[]>([
    {
      id: '1',
      title: 'Transparent Pricing Page Performance',
      status: 'successful',
      description: 'Testing radical price transparency vs traditional pricing pages',
      duration: '14 days',
      results: '+127% conversion rate improvement'
    },
    {
      id: '2',
      title: 'Community-First Navigation Structure',
      status: 'testing',
      description: 'Prioritizing community links over traditional sales funnels',
      duration: '7 days ongoing'
    },
    {
      id: '3',
      title: 'Public Failure Documentation',
      status: 'failed',
      description: 'Sharing detailed failure analysis to build trust',
      duration: '21 days',
      results: '-8% engagement, too overwhelming for first-time visitors'
    }
  ])

  const [algorithmResponses, setAlgorithmResponses] = useState([
    {
      date: '2024-01-15',
      change: 'Google Core Update Detected',
      response: 'Increased focus on E-A-T signals, added more author bios',
      impact: '+15% organic traffic'
    },
    {
      date: '2024-01-12',
      change: 'Social Media Algorithm Shift',
      response: 'Adapted content format to favor community engagement',
      impact: '+28% community growth'
    },
    {
      date: '2024-01-08',
      change: 'Search Intent Pattern Change',
      response: 'Updated content to match "how to" vs "what is" queries',
      impact: '+12% click-through rate'
    }
  ])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        if (metric.category === 'community') {
          const currentValue = typeof metric.value === 'string' ?
            parseInt(metric.value.replace(/,/g, '')) : metric.value
          const newValue = currentValue + Math.floor(Math.random() * 3)
          return {
            ...metric,
            value: newValue.toLocaleString()
          }
        }
        return metric
      }))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'traffic': return 'text-blue-400'
      case 'community': return 'text-green-400'
      case 'business': return 'text-secondary-pink'
      case 'technology': return 'text-secondary-purple-bright'
      default: return 'text-neutral-light'
    }
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Eye className="w-8 h-8 text-secondary-pink" />
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                LIVE TRANSPARENCY
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-neutral-white">
              Public <span className="gradient-text">Dashboard</span>
            </h1>

            <p className="text-xl text-neutral-light max-w-4xl mx-auto leading-relaxed">
              Real-time metrics showing our methodology effectiveness, community growth,
              and transparent business results. First platform to publicly document
              the journey from 'impossible' to 'implemented.'
            </p>
          </div>

          <Card variant="glow" padding="lg" className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary-pink">
                Transparency Mission:
              </h3>
              <p className="text-neutral-light">
                We show what's possible because possibility shouldn't be a secret.
                Every metric, every failure, every breakthrough - documented in real-time.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Real-Time Metrics */}
      <Section background="default" padding="xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              <span className="gradient-text">Real-Time</span> Metrics
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto">
              Live data showing how transparency and community-first approach affects
              every aspect of our business and community growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card key={index} variant="minimal" padding="lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-6 h-6 ${getCategoryColor(metric.category)}`} />
                        <span className="text-sm text-neutral-light uppercase tracking-wide">
                          {metric.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-green-400">LIVE</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-neutral-light">
                        {metric.label}
                      </h3>
                      <div className="flex items-end justify-between">
                        <span className="text-3xl font-bold text-neutral-white">
                          {metric.value}
                        </span>
                        <span className={`text-sm font-medium ${
                          metric.positive ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Algorithm Response Log */}
      <Section background="dark" padding="xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              Algorithm <span className="gradient-text">Response Log</span>
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto">
              How we detect and adapt to changes in real-time. Transparent methodology
              evolution based on platform algorithm shifts.
            </p>
          </div>

          <div className="space-y-6">
            {algorithmResponses.map((response, index) => (
              <Card key={index} variant="minimal" padding="lg">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-secondary-purple-bright" />
                    <span className="text-sm text-neutral-light">{response.date}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-white mb-1">
                      {response.change}
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-neutral-light">
                      {response.response}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium">
                      {response.impact}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Failed Experiments */}
      <Section background="gradient" padding="xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              Methodology <span className="gradient-text">Evolution</span>
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto">
              What we learned, what didn't work, and how we adapted. Transparent
              experimentation showing both successes and failures.
            </p>
          </div>

          <div className="space-y-6">
            {experiments.map((experiment) => (
              <Card key={experiment.id} variant="glow" padding="lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${
                        experiment.status === 'successful' ? 'bg-green-500/20' :
                        experiment.status === 'failed' ? 'bg-red-500/20' :
                        'bg-yellow-500/20'
                      }`}>
                        {experiment.status === 'successful' ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : experiment.status === 'failed' ? (
                          <AlertCircle className="w-5 h-5 text-red-400" />
                        ) : (
                          <Clock className="w-5 h-5 text-yellow-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-white">
                          {experiment.title}
                        </h3>
                        <p className="text-sm text-neutral-light">
                          {experiment.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-neutral-light">
                        {experiment.duration}
                      </div>
                      {experiment.results && (
                        <div className={`text-sm font-medium mt-1 ${
                          experiment.status === 'successful' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {experiment.results}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Community Impact */}
      <Section background="default" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
                Community <span className="gradient-text">Impact</span>
              </h2>

              <p className="text-xl text-neutral-light leading-relaxed">
                How transparency affects results. Real data showing the correlation
                between open methodology and community trust.
              </p>

              <Card variant="glow" padding="lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-pink">
                    Key Insight:
                  </h3>
                  <p className="text-neutral-light">
                    Communities grow 3x faster when methodology is transparent vs. hidden.
                    Trust accelerates implementation success by 240%.
                  </p>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card variant="minimal" padding="md" className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">240%</div>
                <div className="text-sm text-neutral-light">Trust Acceleration</div>
              </Card>
              <Card variant="minimal" padding="md" className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3x</div>
                <div className="text-sm text-neutral-light">Growth Rate</div>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('dashboard', 600, 400)}
                alt="Real-time monitoring screens and analytics visualization"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-purple/20 to-transparent" />
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('technology', 600, 256)}
                alt="Analytics and forecasting imagery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Financial Transparency */}
      <Section background="dark" padding="xl">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              Financial <span className="gradient-text">Transparency</span>
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto">
              Monthly investment and returns. How transparency marketing performs
              versus traditional approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card variant="minimal" padding="lg" className="text-center">
              <div className="space-y-4">
                <BarChart3 className="w-12 h-12 text-secondary-pink mx-auto" />
                <div>
                  <div className="text-2xl font-bold text-neutral-white mb-1">$23,450</div>
                  <div className="text-sm text-neutral-light">Monthly Marketing Spend</div>
                  <div className="text-xs text-green-400 mt-1">-67% vs industry average</div>
                </div>
              </div>
            </Card>

            <Card variant="minimal" padding="lg" className="text-center">
              <div className="space-y-4">
                <TrendingUp className="w-12 h-12 text-primary-accent mx-auto" />
                <div>
                  <div className="text-2xl font-bold text-neutral-white mb-1">$87,420</div>
                  <div className="text-sm text-neutral-light">Monthly Revenue</div>
                  <div className="text-xs text-green-400 mt-1">+34% month over month</div>
                </div>
              </div>
            </Card>

            <Card variant="minimal" padding="lg" className="text-center">
              <div className="space-y-4">
                <DollarSign className="w-12 h-12 text-secondary-purple-bright mx-auto" />
                <div>
                  <div className="text-2xl font-bold text-neutral-white mb-1">$63,970</div>
                  <div className="text-sm text-neutral-light">Net Profit</div>
                  <div className="text-xs text-green-400 mt-1">73% profit margin</div>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="glow" padding="lg" className="max-w-3xl mx-auto">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-neutral-white">
                Transparency ROI
              </h3>
              <p className="text-neutral-light">
                By sharing our real numbers, we've built trust that converts 240% better
                than traditional marketing approaches while spending 67% less.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}