import Link from 'next/link';
import React from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'white' | 'outline-white';
type Size = 'sm' | 'md' | 'lg';

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

// Clean button base without conflicting styles
const base = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 text-center';
const variants: Record<Variant, string> = {
  primary: 'bg-accent-500 text-white hover:bg-accent-600 shadow-sm hover:shadow-md rounded-lg',
  outline: 'border border-accent-500 text-accent-600 hover:bg-accent-50 rounded-lg',
  ghost: 'text-slate-700 hover:bg-slate-100 rounded-lg',
  white: 'bg-white text-accent-600 hover:bg-gray-50 shadow-sm hover:shadow-md rounded-lg',
  'outline-white': 'border border-white text-white hover:bg-white hover:text-accent-600 rounded-lg'
};
const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base'
};

export default function Button({ href, children, variant = 'primary', size = 'md', className = '', onClick, ariaLabel }: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={cls} onClick={onClick as any}>
        {children}
      </Link>
    );
  }
  return (
    <button aria-label={ariaLabel} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
