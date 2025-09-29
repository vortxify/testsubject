import Link from 'next/link';

export default function ProgramSummaryCard({
  href,
  icon,
  title,
  description,
  tint = 'bg-soft'
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tint?: string; // tailwind class for bg color
}) {
  return (
    <Link href={href} className="block card card-interactive ring-1 ring-slate-100">
      <div className={`h-10 w-10 rounded-md ${tint} flex items-center justify-center text-primary`}>{icon}</div>
      <div className="mt-3 font-semibold text-primary">{title}</div>
      <p className="text-sm text-slate-600 mt-1 line-clamp-2">{description}</p>
    </Link>
  );
}
