import Link from 'next/link'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { top5Projects } from '@/data/projects'
import { ArrowRight, Zap, GraduationCap, Heart, Shield, Building } from 'lucide-react'

const projectIcons = {
  'nexus': Zap,
  'educational-ai': GraduationCap,
  'inclusive-innovation': Heart,
  'safe-digital-spaces': Shield,
  'business-platform': Building
}

const categoryColors = {
  technology: 'from-secondary-purple to-primary-accent',
  business: 'from-secondary-pink to-secondary-purple-bright',
  community: 'from-primary-accent to-secondary-purple-bright'
}

export default function Top5InitiativesSection() {
  return (
    <Section background="gradient" padding="xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-white mb-6">
          Bridging the <span className="gradient-text">Possible Gap</span>
        </h2>
        <p className="text-xl text-neutral-light max-w-3xl mx-auto">
          Five strategic initiatives connecting creative minds with transparent technology capabilities.
          Each project is designed to amplify possibility and eliminate barriers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {top5Projects.map((project, index) => {
          const Icon = projectIcons[project.id as keyof typeof projectIcons]
          const gradientClass = categoryColors[project.category as keyof typeof categoryColors]

          return (
            <Card key={project.id} variant="glow" padding="lg" className="group h-full">
              <div className="space-y-6">
                {/* Icon and Status */}
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradientClass}`}>
                    <Icon className="w-8 h-8 text-neutral-white" />
                  </div>
                  <div className="text-right">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'live' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status.toUpperCase()}
                    </div>
                    <div className="text-sm text-neutral-light mt-1">
                      {project.progress}% Complete
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-primary-blue rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${gradientClass} transition-all duration-1000`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-neutral-white group-hover:text-secondary-pink transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-neutral-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-neutral-light">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-neutral-light flex items-center">
                          <div className="w-1 h-1 bg-secondary-pink rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 2 && (
                        <li className="text-sm text-secondary-purple-bright">
                          +{project.features.length - 2} more features
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/top-5/${project.id}`}
                  className="flex items-center justify-center w-full py-3 text-secondary-pink hover:text-neutral-white border-2 border-secondary-pink hover:bg-secondary-pink rounded-xl transition-all duration-300 group-hover:scale-105"
                >
                  Explore This Bridge
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </Card>
          )
        })}

        {/* Call to Action Card */}
        <Card variant="minimal" padding="lg" className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-secondary-pink/10 to-secondary-purple-bright/10 border-2 border-secondary-pink/30">
          <div className="text-center space-y-6 h-full flex flex-col justify-center">
            <div className="space-y-4">
              <div className="p-4 bg-secondary-pink rounded-2xl w-fit mx-auto">
                <ArrowRight className="w-8 h-8 text-neutral-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-white">
                See All Initiatives
              </h3>
              <p className="text-neutral-light">
                Explore our complete technology translation platform and see how we're building bridges across every domain.
              </p>
            </div>
            <Link href="/top-5" className="btn-primary w-full">
              View Full Portfolio
            </Link>
          </div>
        </Card>
      </div>
    </Section>
  )
}