export type Locale = 'en' | 'ar';

import en from '@/i18n/en.json';
import ar from '@/i18n/ar.json';

export type AppDict = typeof en;

export function getDict(locale: Locale): AppDict {
  return (locale === 'ar' ? ar : en) as AppDict;
}

export function isRTL(locale: Locale) {
  return locale === 'ar';
}
