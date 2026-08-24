import type { Metadata } from "next";

import { getDictionary } from "@/app/lib/dictionaries";
import { Locale, localePath } from "@/app/lib/i18n";
import { author, siteUrl } from "@/app/lib/site";

const ogLocale: Record<Locale, string> = { fr: "fr_FR", en: "en_US" };

function alternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      fr: localePath("fr", path),
      en: localePath("en", path),
      "x-default": localePath("fr", path),
    },
  };
}

export function buildHomeMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);
  const title = `${author.name} — ${author.jobTitle[locale]}`;

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s — ${author.name}` },
    description: meta.description,
    authors: [{ name: author.name, url: siteUrl }],
    creator: author.name,
    alternates: alternates(locale, ""),
    openGraph: {
      type: "website",
      url: localePath(locale),
      siteName: author.name,
      title,
      description: meta.description,
      locale: ogLocale[locale],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.description,
    },
  };
}

export function buildExperiencesMetadata(locale: Locale): Metadata {
  const { experiences } = getDictionary(locale);

  return {
    title: experiences.title,
    description: experiences.description,
    alternates: alternates(locale, "/experiences"),
  };
}
