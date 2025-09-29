import Link from 'next/link';
import { getDict } from '@/lib/i18n';
import Image from 'next/image';

export default function Footer({ locale }: { locale: 'en' | 'ar' }) {
  const t = getDict(locale);
  return (
    <footer className="mt-20">
      <div className="bg-accent/20">
        <div className="container py-6 flex items-center justify-between gap-4">
          <div className="text-primary font-medium">
            {t.footer.ctaBanner}
          </div>
          <div className="flex gap-3">
            <Link href={`/${locale}/contact`} className="btn btn-outline">{t.hero.ctaTour}</Link>
            <Link href={`/${locale}/admissions`} className="px-4 py-2 rounded-full bg-accent text-primary font-medium shadow">{t.hero.ctaApply}</Link>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white">
        <div className="container py-10 grid gap-8 sm:grid-cols-3 text-sm">
          <div>
            <div className="font-semibold flex items-center gap-2">
              <Image src="/logo.svg" alt={t.brand} width={32} height={32} className="h-8 w-8" />
              <span>{t.brand}</span>
            </div>
            <p className="text-white/80 mt-2">{t.footer.contactLine1}</p>
            <p className="text-white/60 mt-2">{t.footer.contactLine2}</p>
          </div>
          <div>
            <div className="font-semibold mb-2">{t.footer.linksLabel}</div>
            <ul className="space-y-1 text-white/80">
              <li><Link className="hover:text-accent" href={`/${locale}`}>{t.nav.home}</Link></li>
              <li><Link className="hover:text-accent" href={`/${locale}/about`}>{t.nav.about}</Link></li>
              <li><Link className="hover:text-accent" href={`/${locale}/programs`}>{t.nav.programs}</Link></li>
              <li><Link className="hover:text-accent" href={`/${locale}/contact`}>{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">{t.footer.follow}</div>
            <div className="flex items-center gap-2 text-white/90">
              <a href="#" aria-label={t.footer.twitter} className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <span aria-hidden className="text-base">𝕏</span>
                <span className="sr-only">{t.footer.twitter}</span>
              </a>
              <a href="#" aria-label={t.footer.instagram} className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <span aria-hidden className="text-sm font-semibold">IG</span>
                <span className="sr-only">{t.footer.instagram}</span>
              </a>
              <a href="#" aria-label={t.footer.facebook} className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <span aria-hidden className="text-lg font-semibold">f</span>
                <span className="sr-only">{t.footer.facebook}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container py-4 text-xs text-white/60">© {new Date().getFullYear()} {t.brand}. {t.footer.copyrightSuffix}</div>
        </div>
      </div>
    </footer>
  )
}
