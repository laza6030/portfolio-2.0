import { cache } from "react";

import { getDictionary } from "@/app/lib/dictionaries";
import { defaultLocale, Locale } from "@/app/lib/i18n";

// cache() is scoped to a single render pass, so this holds the locale for the
// current request only. Set by the root layout, read by any server component
// below it. Not available in generateMetadata, which runs outside that tree —
// pass the locale explicitly there.
const store = cache(() => ({ current: defaultLocale }));

export function setLocale(locale: Locale) {
  store().current = locale;
}

export function getLocale(): Locale {
  return store().current;
}

export function getServerDictionary() {
  return getDictionary(getLocale());
}
