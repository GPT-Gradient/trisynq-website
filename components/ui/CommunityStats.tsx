'use client';

import { useEffect, useState } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

interface CommunityStatsProps {
  stats: Stat[];
}

export default function CommunityStats({ stats }: CommunityStatsProps) {
  const [displayValues, setDisplayValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setDisplayValues(
        stats.map((stat) => Math.floor(stat.value * progress))
      );

      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayValues(stats.map((stat) => stat.value));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-secondary-purple-light">
            {displayValues[index]}{stat.suffix || ''}
          </div>
          <div className="text-gray-400 mt-2">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
