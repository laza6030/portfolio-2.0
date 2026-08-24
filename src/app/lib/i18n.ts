export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const otherLocale: Record<Locale, Locale> = { fr: "en", en: "fr" };

// Endonyms: each language is named in its own language, as users expect.
export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export function localePath(locale: Locale, path: string = "") {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${prefix}${path}` || "/";
}

export function switchLocalePath(pathname: string, target: Locale) {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return localePath(target, bare === "/" ? "" : bare);
}
