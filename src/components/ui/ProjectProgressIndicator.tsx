'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectProgressIndicatorProps {
  project: Project
  showDetails?: boolean
  compact?: boolean
  animated?: boolean
  className?: string
}

export default function ProjectProgressIndicator({
  project,
  showDetails = true,
  compact = false,
  animated = true,
  className
}: ProjectProgressIndicatorProps) {
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayProgress(project.progress)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setDisplayProgress(project.progress)
    }
  }, [project.progress, animated])

  const getStatusIcon = () => {
    switch (project.status) {
      case 'live':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'beta':
        return <Clock className="w-4 h-4 text-yellow-400" />
      case 'development':
        return <AlertCircle className="w-4 h-4 text-blue-400" />
      default:
        return <Clock className="w-4 h-4 text-neutral-light" />
    }
  }

  const getStatusColor = () => {
    switch (project.status) {
      case 'live':
        return 'bg-green-500/20 text-green-400'
      case 'beta':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'development':
        return 'bg-blue-500/20 text-blue-400'
      default:
        return 'bg-neutral-500/20 text-neutral-400'
    }
  }

  const getCategoryGradient = () => {
    switch (project.category) {
      case 'technology':
        return 'from-secondary-purple to-primary-accent'
      case 'business':
        return 'from-secondary-pink to-secondary-purple-bright'
      case 'community':
        return 'from-primary-accent to-secondary-purple-bright'
      default:
        return 'from-neutral-medium to-primary-blue'
    }
  }

  if (compact) {
    return (
      <div className={cn(
        "p-4 bg-primary-blue/30 rounded-xl border border-secondary-purple-bright/10",
        className
      )}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {getStatusIcon()}
            <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor()}`}>
              {project.status.toUpperCase()}
            </span>
          </div>
          <div className="text-sm text-neutral-light">
            {displayProgress}%
          </div>
        </div>

        <h4 className="font-medium text-neutral-white mb-2 text-sm">
          {project.title}
        </h4>

        <div className="w-full bg-primary-blue rounded-full h-2">
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${getCategoryGradient()} transition-all duration-1000 ease-out`}
            style={{ width: `${displayProgress}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
      "p-6 bg-primary-blue/50 backdrop-blur-md rounded-2xl border border-secondary-purple-bright/20",
      className
    )}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {getStatusIcon()}
            <span className={`px-3 py-1 rounded-lg text-xs font-medium ${getStatusColor()}`}>
              {project.status.toUpperCase()}
            </span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-neutral-white">
              {displayProgress}%
            </div>
            <div className="text-xs text-neutral-light">Complete</div>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-neutral-white">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-light">
            {project.description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-neutral-light uppercase tracking-wide">
              Progress
            </span>
            <span className="text-xs text-neutral-light">
              {project.category}
            </span>
          </div>
          <div className="w-full bg-primary-blue rounded-full h-3">
            <div
              className={`h-3 rounded-full bg-gradient-to-r ${getCategoryGradient()} transition-all duration-1000 ease-out relative overflow-hidden`}
              style={{ width: `${displayProgress}%` }}
            >
              {animated && displayProgress > 0 && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              )}
            </div>
          </div>
        </div>

        {/* Features Preview */}
        {showDetails && project.features && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-neutral-light uppercase tracking-wide">
              Key Features
            </h4>
            <div className="space-y-2">
              {project.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-neutral-light">{feature}</span>
                </div>
              ))}
              {project.features.length > 3 && (
                <div className="flex items-center space-x-2">
                  <ArrowRight className="w-3 h-3 text-secondary-purple-bright flex-shrink-0" />
                  <span className="text-sm text-secondary-purple-bright">
                    +{project.features.length - 3} more features
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Milestones */}
        {showDetails && (
          <div className="pt-3 border-t border-secondary-purple-bright/20">
            <div className="flex items-center justify-between text-xs text-neutral-light">
              <span>Started</span>
              <span>In Progress</span>
              <span>Complete</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <div className={`w-2 h-2 rounded-full ${
                displayProgress > 0 ? 'bg-yellow-400' : 'bg-neutral-medium'
              }`} />
              <div className={`w-2 h-2 rounded-full ${
                displayProgress >= 100 ? 'bg-green-400' : 'bg-neutral-medium'
              }`} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}