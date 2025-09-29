"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Locale, type AppDict } from '@/lib/i18n';
import { Menu, X } from '@/components/Icons';
import Image from 'next/image';

type Props = {
  t: AppDict;
  locale: Locale;
};

export default function Navbar({ t, locale }: Props) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname?.startsWith(href);
  const isExact = (href: string) => pathname === href;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = '' };
  }, [open]);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 shadow-lg border-b border-slate-100' 
        : 'bg-white/80 border-b border-slate-50'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 p-1 flex items-center justify-center">
              <Image 
                src="/brand-logo.svg" 
                alt={t.brand} 
                width={48} 
                height={48} 
                className="w-full h-full object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback if brand-logo.svg doesn't exist  
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                AM
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-primary-500 group-hover:text-accent-500 transition-colors">{t.brand}</span>
              <div className="text-xs text-slate-500 font-medium">International School</div>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main">
          <Link href={`/${locale}`} aria-current={isExact(`/${locale}`) ? 'page' : undefined} className="nav-link">
            {t.nav.home}
          </Link>
          
          <Link href={`/${locale}/about`} aria-current={isActive(`/${locale}/about`) ? 'page' : undefined} className="nav-link">
            {t.nav.about}
          </Link>

          <Link href={`/${locale}/academics`} aria-current={isActive(`/${locale}/academics`) ? 'page' : undefined} className="nav-link">
            {t.nav.academics}
          </Link>
          
          <Link href={`/${locale}/admissions`} aria-current={isActive(`/${locale}/admissions`) ? 'page' : undefined} className="nav-link">
            {t.nav.admissions}
          </Link>

          <Link href={`/${locale}/student-life`} aria-current={isActive(`/${locale}/student-life`) ? 'page' : undefined} className="nav-link">
            Student Life
          </Link>
          
          <Link href={`/${locale}/news-events`} aria-current={isActive(`/${locale}/news-events`) ? 'page' : undefined} className="nav-link">
            News & Events
          </Link>

          <Link href={`/${locale}/parent-resources`} aria-current={isActive(`/${locale}/parent-resources`) ? 'page' : undefined} className="nav-link">
            Parents
          </Link>
          
          <Link href={`/${locale}/contact`} aria-current={isActive(`/${locale}/contact`) ? 'page' : undefined} className="nav-link">
            {t.nav.contact}
          </Link>
        </nav>
        
          {/* Right Actions Section */}
          <div className="flex items-center gap-6">
            {/* Visual separator */}
            <div className="hidden lg:block w-px h-6 bg-slate-200"></div>
            
            {/* CTA and Language Switcher */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                href={`/${locale}/admissions`} 
                size="md" 
                variant="primary" 
                ariaLabel={t.hero.ctaApply}
                className="font-semibold tracking-wide h-10 px-6 whitespace-nowrap"
              >
                {t.hero.ctaApply}
              </Button>
              <LanguageSwitcher locale={locale} size="md" />
            </div>
            
            {/* Mobile actions */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageSwitcher locale={locale} size="sm" />
              <button 
                aria-label={t.nav?.openMenu || 'Open menu'} 
                aria-expanded={open} 
                aria-controls="mobile-menu" 
                className="p-2 rounded-md border border-slate-200 hover:border-accent-500 transition-colors" 
                onClick={()=>setOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={()=>setOpen(false)}>
          <div id="mobile-menu" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title" className={`absolute top-0 h-full w-72 bg-white shadow-xl p-6 ${locale === 'ar' ? 'left-0' : 'right-0'}`} onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 p-0.5 flex items-center justify-center">
                  <Image 
                    src="/brand-logo.svg" 
                    alt={t.brand} 
                    width={32} 
                    height={32} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if brand-logo.svg doesn't exist
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    AM
                  </div>
                </div>
                <div id="mobile-menu-title" className="font-semibold text-primary-500">{t.brand}</div>
              </div>
              <button 
                className="p-2 rounded-md hover:bg-slate-100 transition-colors" 
                aria-label={t.nav?.closeMenu || 'Close menu'} 
                onClick={()=>setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4">
              <LanguageSwitcher locale={locale} size="sm" />
            </div>
            <div className="mt-6 space-y-1">
              {/* Main Navigation */}
              <Link href={`/${locale}`} onClick={()=>setOpen(false)} className="mobile-nav-link" aria-current={isExact(`/${locale}`)?'page':undefined}>
                <span className="text-lg">🏠</span>
                <span>{t.nav.home}</span>
              </Link>
              <Link href={`/${locale}/about`} onClick={()=>setOpen(false)} className="mobile-nav-link" aria-current={isActive(`/${locale}/about`)?'page':undefined}>
                <span className="text-lg">ℹ️</span>
                <span>{t.nav.about}</span>
              </Link>
              
              <div className="my-4 border-t border-slate-200"></div>
              
              {/* Academics Group */}
              <div className="mobile-nav-group">
                <div className="text-xs uppercase font-semibold text-slate-500 px-3 py-2">Education</div>
                <Link href={`/${locale}/academics`} onClick={()=>setOpen(false)} className="mobile-nav-link" aria-current={isActive(`/${locale}/academics`)?'page':undefined}>
                  <span className="text-lg">📚</span>
                  <span>{t.nav.academics}</span>
                </Link>
                <Link href={`/${locale}/admissions`} onClick={()=>setOpen(false)} className="mobile-nav-link" aria-current={isActive(`/${locale}/admissions`)?'page':undefined}>
                  <span className="text-lg">🎓</span>
                  <span>{t.nav.admissions}</span>
                </Link>
              </div>
              
              <div className="my-4 border-t border-slate-200"></div>
              
              {/* School Life */}
              <div className="mobile-nav-group">
                <div className="text-xs uppercase font-semibold text-slate-500 px-3 py-2">School Life</div>
                <Link href={`/${locale}/student-life`} onClick={()=>setOpen(false)} className="mobile-nav-link" aria-current={isActive(`/${locale}/student-life`)?'page':undefined}>
                  <span className="text-lg">🌟</span>
                  <span>Student Life</span>
                </Link>
                <Link href={`/${locale}/news-events`} onClick={()=>setOpen(false)} className="mobile-nav-link" aria-current={isActive(`/${locale}/news-events`)?'page':undefined}>
                  <span className="text-lg">📰</span>
                  <span>News & Events</span>
                </Link>
              </div>
              
              <div className="my-4 border-t border-slate-200"></div>
              
              <Link href={`/${locale}/parent-resources`} onClick={()=>setOpen(false)} className="mobile-nav-link" aria-current={isActive(`/${locale}/parent-resources`)?'page':undefined}>
                <span className="text-lg">👨‍👩‍👧‍👦</span>
                <span>Parents</span>
              </Link>
              <Link href={`/${locale}/contact`} onClick={()=>setOpen(false)} className="mobile-nav-link" aria-current={isActive(`/${locale}/contact`)?'page':undefined}>
                <span className="text-lg">📞</span>
                <span>{t.nav.contact}</span>
              </Link>
            </div>
            <Link href={`/${locale}/admissions`} onClick={()=>setOpen(false)} className="mt-6 px-6 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold shadow-lg text-center block mx-3 transition-colors tracking-wide">{t.hero.ctaApply}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
