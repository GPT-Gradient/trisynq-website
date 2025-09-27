'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { generateImagePlaceholder, formatNumber } from '@/lib/utils'
import {
  Users,
  MessageSquare,
  TrendingUp,
  Target,
  Award,
  BookOpen,
  ArrowRight,
  Star,
  CheckCircle,
  Zap
} from 'lucide-react'

const metadata: Metadata = {
  title: 'Community - Movement Headquarters',
  description: 'Join the 20% who see barriers and imagine bridges. Connect with creative minds building transparent technology solutions.',
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { icon: Users, label: 'Community Members', value: 2847, change: '+23 this week' },
    { icon: TrendingUp, label: 'Success Stories', value: 156, change: '+8 this month' },
    { icon: MessageSquare, label: 'Support Discussions', value: 1234, change: '+47 today' },
    { icon: Award, label: 'Implementations', value: 89, change: '+5 this week' }
  ]

  const successStories = [
    {
      id: 1,
      title: 'Local Restaurant Eliminated 80% Delivery Fees',
      category: 'DIY Implementation',
      author: 'Maria Santos',
      description: 'Built custom ordering system using our transparent methodologies, saving $2,400/month',
      impact: '$28K annual savings',
      timeframe: '3 weeks implementation'
    },
    {
      id: 2,
      title: 'Design Agency Broke Free from Adobe Dependency',
      category: 'Vendor Liberation',
      author: 'Alex Chen',
      description: 'Implemented open-source design workflow, maintaining client quality while cutting costs',
      impact: '90% cost reduction',
      timeframe: '6 weeks transition'
    },
    {
      id: 3,
      title: 'Nonprofit Solved Complex Data Management',
      category: 'Creative Solution',
      author: 'Jamie Rodriguez',
      description: 'Connected existing tools in innovative way to solve "impossible" data integration challenge',
      impact: '500+ hours saved monthly',
      timeframe: '2 weeks solution'
    }
  ]

  const the20Percent = [
    {
      icon: Target,
      title: 'Risk Takers',
      description: 'Choose the hard path because it leads somewhere better'
    },
    {
      icon: Zap,
      title: 'Rule Breakers',
      description: 'Question "that\'s how it\'s always been done"'
    },
    {
      icon: TrendingUp,
      title: 'Uphill Runners',
      description: 'See challenges as opportunities for breakthrough'
    },
    {
      icon: Star,
      title: 'Bridge Builders',
      description: 'Look at barriers and imagine connections'
    }
  ]

  return (
    <>
      {/* Movement Headquarters Hero */}
      <Section background="gradient" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-white">
                Movement <span className="gradient-text">Headquarters</span>
              </h1>

              <p className="text-xl text-neutral-light leading-relaxed">
                Join the 20% who see barriers and imagine bridges. Connect with creative minds
                building transparent technology solutions and sharing what actually works.
              </p>

              <Card variant="glow" padding="lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-pink">
                    Community Mission:
                  </h3>
                  <p className="text-neutral-light">
                    Connect creative minds with transparent technology capabilities. Share real implementations.
                    Eliminate vendor dependency through collective knowledge.
                  </p>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/beta" className="btn-primary inline-flex items-center justify-center">
                Join the Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#success-stories" className="btn-secondary inline-flex items-center justify-center">
                See Success Stories
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('community', 600, 500)}
                alt="Community collaboration and support imagery"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-purple/20 to-transparent" />
            </div>

            {/* Live Community Indicators */}
            <div className="absolute -top-4 -right-4 p-4 bg-green-500 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">LIVE</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 bg-secondary-pink rounded-2xl shadow-lg">
              <Users className="w-6 h-6 text-neutral-white" />
            </div>
          </div>
        </div>
      </Section>

      {/* Community Stats */}
      <Section background="default" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} variant="minimal" padding="lg" className="text-center">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-secondary-pink to-secondary-purple-bright rounded-2xl">
                      <Icon className="w-8 h-8 text-neutral-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-1">
                      {formatNumber(stat.value)}
                    </div>
                    <div className="text-neutral-white font-medium mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-green-400">
                      {stat.change}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="dark" padding="xl" id="success-stories">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              <span className="gradient-text">Success Stories</span> Showcase
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto">
              Real implementations, real results. Community members sharing what actually works
              in the real world, not theoretical possibilities.
            </p>
          </div>

          <div className="space-y-8">
            {successStories.map((story) => (
              <Card key={story.id} variant="glow" padding="lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-neutral-white">
                          {story.title}
                        </h3>
                        <div className="flex items-center space-x-4">
                          <span className="px-3 py-1 bg-secondary-pink/20 text-secondary-pink rounded-lg text-sm font-medium">
                            {story.category}
                          </span>
                          <span className="text-neutral-light text-sm">
                            by {story.author}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-light leading-relaxed">
                      {story.description}
                    </p>

                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-medium">{story.impact}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-accent" />
                        <span className="text-neutral-light">{story.timeframe}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="relative h-40 rounded-2xl overflow-hidden">
                      <Image
                        src={generateImagePlaceholder('community', 300, 160)}
                        alt={`Success story: ${story.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/community/success-stories" className="btn-primary inline-flex items-center">
              View All Success Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>

      {/* The 20% Deep Dive */}
      <Section background="gradient" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
                The <span className="gradient-text">20%</span> Deep Dive
              </h2>

              <p className="text-xl text-neutral-light leading-relaxed">
                How to know if you're part of the 20% who see differently. These aren't just personality traits—
                they're indicators of minds that build bridges where others see walls.
              </p>

              <Card variant="glow" padding="lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-pink">
                    Identification Framework:
                  </h3>
                  <p className="text-neutral-light">
                    You hear "automation eliminates jobs" and ask "what jobs could this create?"
                    You see barriers and imagine bridges. You hear "impossible" and ask "what if?"
                  </p>
                </div>
              </Card>
            </div>

            <div className="space-y-4">
              {the20Percent.map((trait, index) => {
                const Icon = trait.icon
                return (
                  <Card key={index} variant="minimal" padding="md">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-secondary-pink to-secondary-purple-bright rounded-xl">
                        <Icon className="w-6 h-6 text-neutral-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-white">
                          {trait.title}
                        </h4>
                        <p className="text-neutral-light">
                          {trait.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('community', 600, 400)}
                alt="The 20% who see differently - achievement and collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-purple/20 to-transparent" />
            </div>

            <Card variant="minimal" padding="lg" className="text-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-white">
                  Ready to Test If You're Part of the 20%?
                </h3>
                <p className="text-neutral-light">
                  Take our community assessment and connect with like-minded bridge builders.
                </p>
                <Link href="/community/the-20-percent" className="btn-primary inline-flex items-center justify-center">
                  Take the Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Community Resources */}
      <Section background="default" padding="xl">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              Community <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto">
              Everything you need to implement transparent technology solutions and break free from vendor dependency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="glow" padding="lg" className="text-center">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <BookOpen className="w-12 h-12 text-secondary-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-white mb-3">
                    Resource Library
                  </h3>
                  <p className="text-neutral-light mb-6">
                    Tutorials, guides, and templates for DIY implementations
                  </p>
                  <Button variant="outline" size="sm">
                    Browse Resources
                  </Button>
                </div>
              </div>
            </Card>

            <Card variant="glow" padding="lg" className="text-center">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <MessageSquare className="w-12 h-12 text-primary-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-white mb-3">
                    Support Forums
                  </h3>
                  <p className="text-neutral-light mb-6">
                    Get unstuck on implementations with community help
                  </p>
                  <Button variant="outline" size="sm">
                    Join Discussion
                  </Button>
                </div>
              </div>
            </Card>

            <Card variant="glow" padding="lg" className="text-center">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Award className="w-12 h-12 text-secondary-purple-bright" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-white mb-3">
                    Recognition System
                  </h3>
                  <p className="text-neutral-light mb-6">
                    Community achievements and implementation showcases
                  </p>
                  <Button variant="outline" size="sm">
                    View Achievements
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}