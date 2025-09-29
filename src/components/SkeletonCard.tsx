type SkeletonCardProps = {
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
};

export default function SkeletonCard({ variant = 'default', className = '' }: SkeletonCardProps) {
  if (variant === 'compact') {
    return (
      <div className={`card animate-pulse ${className}`}>
        <div className="h-10 w-10 bg-slate-200 rounded-md mb-3"></div>
        <div className="h-4 bg-slate-200 rounded mb-2"></div>
        <div className="h-3 bg-slate-200 rounded w-2/3"></div>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={`card animate-pulse ${className}`}>
        <div className="h-12 w-12 bg-slate-200 rounded-md mb-4"></div>
        <div className="h-5 bg-slate-200 rounded mb-3"></div>
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-slate-200 rounded"></div>
          <div className="h-3 bg-slate-200 rounded w-5/6"></div>
          <div className="h-3 bg-slate-200 rounded w-4/6"></div>
        </div>
        <div className="h-8 bg-slate-200 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className={`card animate-pulse ${className}`}>
      <div className="h-12 w-12 bg-slate-200 rounded-md mb-4"></div>
      <div className="h-4 bg-slate-200 rounded mb-2"></div>
      <div className="h-3 bg-slate-200 rounded w-2/3 mb-4"></div>
      <div className="h-8 bg-slate-200 rounded w-1/3"></div>
    </div>
  );
}

export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`animate-pulse space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i}
          className={`h-3 bg-slate-200 rounded ${
            i === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
}

export function SkeletonList({ items = 5, className = '' }: { items?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center space-x-3 animate-pulse">
          <div className="h-8 w-8 bg-slate-200 rounded-full"></div>
          <div className="flex-1 space-y-1">
            <div className="h-3 bg-slate-200 rounded w-3/4"></div>
            <div className="h-2 bg-slate-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
