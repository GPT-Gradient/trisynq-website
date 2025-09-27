import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { generateImagePlaceholder } from '@/lib/utils'
import { Crown, Shield, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

export default function BetaProgramSection() {
  const benefits = [
    {
      icon: Crown,
      title: 'Lifetime Access to All 5 Technology Platforms',
      value: '$100K+ Value',
      description: 'Never pay for platform access again'
    },
    {
      icon: Users,
      title: 'Direct Access to Our Team',
      description: 'Methodology refinement across all domains'
    },
    {
      icon: TrendingUp,
      title: 'Public Case Study Opportunities',
      description: 'Industry recognition across multiple sectors'
    },
    {
      icon: Shield,
      title: 'Community Authority Status',
      description: 'Our team backing and endorsement'
    }
  ]

  return (
    <Section background="dark" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content Side */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Crown className="w-8 h-8 text-secondary-pink" />
              <span className="px-4 py-2 bg-secondary-pink/20 text-secondary-pink rounded-full text-sm font-semibold">
                EXCLUSIVE OPPORTUNITY
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white">
              First 100 Partners Get{' '}
              <span className="gradient-text">Lifetime Access</span>{' '}
              to Everything
            </h2>

            <div className="space-y-4">
              <Card variant="glow" padding="lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-pink">
                    Not First 100 Customers
                  </h3>
                  <p className="text-neutral-light">
                    First 100 organizations who qualify to work with our full team.
                    Partner with us to prove what's possible across multiple technology domains.
                  </p>
                </div>
              </Card>

              <div className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl">
                <h3 className="text-lg font-semibold text-green-400 mb-3">
                  Bold Guarantee:
                </h3>
                <p className="text-neutral-light">
                  If our team's methodologies don't eliminate 60%+ of your vendor dependency,
                  full refund + we'll implement any competitor's approach for free.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-white">
              Partner Benefits:
            </h3>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} variant="minimal" padding="md">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-secondary-pink to-secondary-purple-bright rounded-xl">
                      <Icon className="w-6 h-6 text-neutral-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-neutral-white">
                          {benefit.title}
                        </h4>
                        {benefit.value && (
                          <span className="px-2 py-1 bg-secondary-pink/20 text-secondary-pink rounded-lg text-sm font-medium">
                            {benefit.value}
                          </span>
                        )}
                      </div>
                      <p className="text-neutral-light">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* CTA */}
          <Card variant="glow" padding="lg">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-neutral-white">
                  Ready to Partner with the Technology Translation Team?
                </h3>
                <p className="text-neutral-light">
                  Not everyone qualifies. Applications are reviewed by our team.
                </p>
              </div>
              <Link href="/beta" className="btn-primary inline-flex items-center justify-center">
                Apply for Beta Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </Card>
        </div>

        {/* Image and Success Indicators Side */}
        <div className="space-y-6">
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <Image
              src={generateImagePlaceholder('business', 600, 400)}
              alt="Team partnership and collaborative success"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-purple/30 to-transparent" />

            {/* Floating Success Indicators */}
            <div className="absolute top-4 right-4 p-3 bg-neutral-white/10 backdrop-blur-md rounded-xl">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-neutral-white font-medium">23 Partners</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 p-3 bg-neutral-white/10 backdrop-blur-md rounded-xl">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary-pink" />
                <span className="text-sm text-neutral-white font-medium">60%+ Success Rate</span>
              </div>
            </div>
          </div>

          {/* Partnership Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card variant="minimal" padding="md" className="text-center">
              <div className="text-2xl font-bold gradient-text">77</div>
              <div className="text-sm text-neutral-light">Spots Left</div>
            </Card>
            <Card variant="minimal" padding="md" className="text-center">
              <div className="text-2xl font-bold gradient-text">23</div>
              <div className="text-sm text-neutral-light">Current Partners</div>
            </Card>
            <Card variant="minimal" padding="md" className="text-center">
              <div className="text-2xl font-bold gradient-text">$2.3M</div>
              <div className="text-sm text-neutral-light">Partner Savings</div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
}