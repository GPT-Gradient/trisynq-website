'use client';

import { Activity } from 'lucide-react';

// Placeholder metrics data until Intelligence Gateway metrics endpoint is implemented
interface MetricsData {
  betaParticipants?: number | string;
  communityMembers?: number | string;
}

const PLACEHOLDER_METRICS: MetricsData = {
  betaParticipants: 'Coming Soon',
  communityMembers: 'Coming Soon',
};

export default function LiveDashboardWidget() {
  // Using placeholder data until real API is ready
  const metrics = PLACEHOLDER_METRICS;
  const loading = false;

  if (loading) {
    return (
      <div className="bg-primary/50 rounded-2xl p-6 border border-primary-blue/30 animate-pulse">
        <div className="h-32"></div>
      </div>
    );
  }

  return (
    <div className="bg-primary/50 rounded-2xl p-6 border border-primary-blue/30 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-accent-pink animate-pulse" />
        <h3 className="text-lg font-semibold text-white">Live Dashboard Preview</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-400">Beta Participants</p>
          <p className="text-2xl font-bold text-primary-blue">
            {metrics?.betaParticipants || 'Coming Soon'}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Community Members</p>
          <p className="text-2xl font-bold text-secondary-purple-light">
            {metrics?.communityMembers || 'Coming Soon'}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Dashboard goes live as first beta partners come on board
      </p>
    </div>
  );
}
