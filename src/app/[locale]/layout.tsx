import { getDict, isRTL, type Locale } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';
import { notFound } from 'next/navigation';
import { Inter, Noto_Kufi_Arabic } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const kufi = Noto_Kufi_Arabic({ subsets: ['arabic'] });

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;
  if (!['en', 'ar'].includes(locale)) return notFound();
  const t = getDict(locale);
  const dir = isRTL(locale) ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="icon" href="/logo.png?v=4" type="image/png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png?v=4" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png?v=4" />
        <link rel="apple-touch-icon" href="/logo.png?v=4" />
        <meta name="theme-color" content="#0f1b2d" />
      </head>
      <body className={locale === 'ar' ? kufi.className : inter.className}>
        <a href="#main" className="skip-link">{t.nav.skipLink}</a>
        <Navbar t={t} locale={locale} />
        <main id="main" className="container py-10">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
