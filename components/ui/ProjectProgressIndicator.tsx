'use client';

interface ProjectProgressIndicatorProps {
  name: string;
  progress: number;
  status: string;
  className?: string;
}

export default function ProjectProgressIndicator({
  name,
  progress,
  status,
  className = '',
}: ProjectProgressIndicatorProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-medium text-white">{name}</h4>
        <span className="text-xs text-gray-400">{status}</span>
      </div>

      <div className="relative w-full h-2 bg-primary rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-blue to-secondary-purple-light transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-xs text-gray-500">{progress}% Complete</p>
    </div>
  );
}
