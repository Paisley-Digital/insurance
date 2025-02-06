import {registerLocaleData} from "@angular/common";
import en from "./lib/en";
import ar from "./lib/ar";
const locales = {
  ar,
  en,
};
export function overrideLocaleData(localeId: string) {
  const localeData = findLocaleData(localeId);
  registerLocaleData(localeData);
}

function findLocaleData(locale: string) {
  const normalizedLocale = locale.toLowerCase().replace(/_/g, '-');

  let match = getLocaleData(normalizedLocale);
  if (match) {
    return match;
  }

  const parentLocale = normalizedLocale.split('-')[0];
  match = getLocaleData(parentLocale);
  if (match) {
    return match;
  }

  return locales.en;
}

function getLocaleData(normalizedLocale: string) {
  return locales[normalizedLocale as 'en' | 'ar'];
}

