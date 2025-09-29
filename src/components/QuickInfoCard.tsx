import type { ReactNode } from 'react';

interface QuickInfoCardProps {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
  lines?: string[];
  className?: string;
}

export default function QuickInfoCard({
  icon,
  title,
  children,
  lines,
  className = '',
}: QuickInfoCardProps) {
  return (
    <div className={`card-interactive hover:scale-[1.02] group ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center text-2xl group-hover:from-accent-200 group-hover:to-accent-300 transition-all duration-300">
          {icon}
        </div>
        <h3 className="font-bold text-lg text-primary-600 group-hover:text-accent-600 transition-colors">{title}</h3>
      </div>
      <div className="text-sm text-slate-600 space-y-2 leading-relaxed">
        {children}
        {lines && lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}
