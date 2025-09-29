type Props = {
  children: React.ReactNode;
  variant?: 'accent' | 'outline' | 'soft';
  className?: string;
};

export default function Badge({ children, variant = 'accent', className = '' }: Props) {
  const styles = {
    accent: 'bg-accent/30 text-primary shadow px-3 py-1',
    outline: 'border border-accent text-primary px-3 py-1',
    soft: 'bg-soft text-primary px-3 py-1'
  }[variant];
  return <span className={`inline-flex items-center rounded-full text-xs ${styles} ${className}`}>{children}</span>;
}
