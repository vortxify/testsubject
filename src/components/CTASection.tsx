import Link from 'next/link';

export default function CTASection({
  title,
  subtitle,
  primary,
  secondary
}: {
  title: string;
  subtitle?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-10 text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-balance">{title}</h3>
        {subtitle && <p className="mt-2 text-white/90 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href={primary.href as any} className="px-5 py-2.5 rounded-full bg-white text-primary font-medium shadow hover:brightness-95">
            {primary.label}
          </Link>
          {secondary && (
            <Link href={secondary.href as any} className="px-5 py-2.5 rounded-full border border-white/60 text-white/95 font-medium hover:bg-white/10">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
