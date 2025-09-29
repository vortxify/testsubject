import Badge from '@/components/Badge';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = ''
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}) {
  const alignCls = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  return (
    <div className={`${alignCls} ${className}`}>
      {eyebrow && <Badge className="mb-3">{eyebrow}</Badge>}
      <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight text-balance">{title}</h2>
      {description && <p className="text-slate-700 mt-2 max-w-3xl mx-auto">{description}</p>}
    </div>
  );
}
