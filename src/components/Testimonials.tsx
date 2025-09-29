import { Star } from '@/components/Icons';
import { getDict, type Locale } from '@/lib/i18n';

export default function Testimonials({ locale = 'en' as Locale }: { locale?: Locale }) {
  const t = getDict(locale);
  const items = t.testimonials.items as { quote: string; author: string; role: string }[];
  const ariaLabel = t.testimonials.ariaLabel as string;
  return (
    <div className="grid gap-6 md:grid-cols-3 stagger-container">
      {items.map((it) => (
        <figure key={it.author} className="card">
          <div className="flex items-center gap-1 text-amber-500 mb-2" aria-label={ariaLabel}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4" />
            ))}
          </div>
          <blockquote className="text-slate-700 text-sm">“{it.quote}”</blockquote>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-soft flex items-center justify-center text-xs font-semibold text-primary">
              {it.author.split(' ').map(x=>x[0]).slice(0,2).join('')}
            </div>
            <div>
              <figcaption className="text-sm font-medium text-primary">{it.author}</figcaption>
              <div className="text-xs text-slate-500">{it.role}</div>
            </div>
          </div>
        </figure>
      ))}
    </div>
  );
}
