import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { generateImagePlaceholder } from '@/lib/utils'
import { Target, DollarSign, Users, TrendingUp, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Mission - Transparency Revolution in Technology',
  description: 'Breaking the $100 billion Google tax and vendor dependency through education, community, and systematic independence.',
}

export default function MissionPage() {
  const problems = [
    {
      icon: DollarSign,
      title: 'The $100 Billion Google Tax',
      description: 'Businesses pay unnecessarily for search visibility when they could build organic reach',
      impact: '$100B+ annually'
    },
    {
      icon: AlertTriangle,
      title: 'Vendor Lock-in Epidemic',
      description: 'Companies become dependent on platforms that extract value rather than create it',
      impact: '90% of businesses affected'
    },
    {
      icon: Users,
      title: 'Creative Minds Locked Out',
      description: 'Brilliant ideas never see implementation due to technology complexity barriers',
      impact: '90% of breakthrough ideas lost'
    }
  ]

  const solutions = [
    {
      icon: Target,
      title: 'Education & Translation',
      description: 'Human-language explanations of technology capabilities and possibilities'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Connect creative minds with transparent technology resources and support'
    },
    {
      icon: CheckCircle,
      title: 'Systematic Independence',
      description: 'Step-by-step liberation from vendor dependency across all technology domains'
    }
  ]

  return (
    <>
      {/* Manifesto Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-white">
              <span className="gradient-text">Transparency Revolution</span>
              <br />
              in Technology
            </h1>

            <p className="text-2xl text-neutral-light max-w-4xl mx-auto leading-relaxed">
              Technology Speaks One Language. Creative Minds Speak Another.
            </p>
          </div>

          <Card variant="glow" padding="lg" className="max-w-5xl mx-auto text-left">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-secondary-pink text-center">
                The Recognition
              </h2>
              <p className="text-xl text-neutral-light leading-relaxed">
                Every tool has its purpose. Every vendor has their place. But 90% of creative minds
                are locked out of today's technology revolution.
              </p>
              <p className="text-lg text-neutral-light">
                It's not that technology is bad. It's that possibility is hidden behind complexity and fear.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card variant="minimal" padding="md" className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">$100B</div>
              <div className="text-neutral-light">Annual Google Tax</div>
            </Card>
            <Card variant="minimal" padding="md" className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">90%</div>
              <div className="text-neutral-light">Creative Minds Locked Out</div>
            </Card>
            <Card variant="minimal" padding="md" className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-neutral-light">Transparency Commitment</div>
            </Card>
          </div>
        </div>
      </Section>

      {/* The Problem Section */}
      <Section background="default" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
                The <span className="gradient-text">Real Problem</span>
              </h2>

              <p className="text-xl text-neutral-light leading-relaxed">
                We're not here to destroy. We're here to translate. To bridge. To amplify.
                But first, we need to acknowledge what's broken.
              </p>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => {
                const Icon = problem.icon
                return (
                  <Card key={index} variant="minimal" padding="lg">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-red-500/20 rounded-xl">
                          <Icon className="w-6 h-6 text-red-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-neutral-white">
                              {problem.title}
                            </h3>
                            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm font-medium">
                              {problem.impact}
                            </span>
                          </div>
                          <p className="text-neutral-light">
                            {problem.description}
                          </p>
                        </div>
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
                src={generateImagePlaceholder('problems', 600, 400)}
                alt="Technology barriers and vendor dependency visualization"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent" />
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('transparency', 600, 256)}
                alt="Breaking down complexity barriers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* The Solution Section */}
      <Section background="dark" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src={generateImagePlaceholder('diy', 600, 400)}
                alt="Self-reliance and systematic independence building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-2xl overflow-hidden">
                <Image
                  src={generateImagePlaceholder('community', 300, 160)}
                  alt="Community-driven solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-2xl overflow-hidden">
                <Image
                  src={generateImagePlaceholder('transparency', 300, 160)}
                  alt="Transparent methodology sharing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
                Our <span className="gradient-text">Solution</span>
              </h2>

              <p className="text-xl text-neutral-light leading-relaxed">
                Education, community, and systematic independence. Create a market where
                transparency beats fear-mongering.
              </p>

              <Card variant="glow" padding="lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-pink">
                    The Vision:
                  </h3>
                  <p className="text-neutral-light italic">
                    What if automation didn't just replace jobs, but created entirely new
                    categories of work we haven't imagined?
                  </p>
                </div>
              </Card>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <Card key={index} variant="minimal" padding="lg">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-green-500/20 rounded-xl">
                        <Icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-neutral-white mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-neutral-light">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* The Commitment Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              Our <span className="gradient-text">Commitment</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <Card variant="glow" padding="lg">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-secondary-pink">
                    The Bridge
                  </h3>
                  <p className="text-xl text-neutral-light leading-relaxed">
                    Transparent technology explanations. Human-language possibilities. Creative amplification.
                  </p>
                </div>
              </Card>

              <Card variant="minimal" padding="lg">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-primary-accent">
                    The Community
                  </h3>
                  <p className="text-xl text-neutral-light leading-relaxed">
                    The 20% who see barriers and imagine bridges. Who hear 'impossible' and ask 'what if?'
                  </p>
                </div>
              </Card>

              <Card variant="glow" padding="lg">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-neutral-white">
                    Revolutionary Call:
                  </h3>
                  <p className="text-2xl text-neutral-light leading-relaxed font-medium">
                    Stop Looking at the 'Possible.' See the <span className="gradient-text">POSSIBLE.</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/manifesto" className="btn-primary inline-flex items-center justify-center">
              Read Full Manifesto
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/beta" className="btn-secondary inline-flex items-center justify-center">
              Join the Revolution
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}