"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { LanguagesIcon } from '@/components/Icons';

export default function LanguageSwitcher({ locale, size = 'md' }: { locale: Locale; size?: 'sm'|'md'|'lg' }) {
  const pathname = usePathname();
  const other = locale === 'en' ? 'ar' : 'en';
  const switchHref = `/${other}${pathname?.replace(/^\/(en|ar)/, '') || ''}` || `/${other}`;
  const label = locale === 'en' ? 'العربية' : 'English';
  const short = locale === 'en' ? 'AR' : 'EN';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs h-8',
    md: 'px-4 py-2 text-sm h-10',
    lg: 'px-6 py-3 text-base h-12'
  };
  
  return (
    <Link 
      href={switchHref} 
      className={`inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-accent-500 hover:text-accent-600 rounded-lg font-medium transition-all duration-200 text-center ${sizeClasses[size]}`}
      aria-label={label}
    >
      <LanguagesIcon className="h-4 w-4 flex-shrink-0" />
      <span className="hidden sm:inline whitespace-nowrap text-center">{label}</span>
      <span className="sm:hidden font-semibold text-center">{short}</span>
    </Link>
  );
}
