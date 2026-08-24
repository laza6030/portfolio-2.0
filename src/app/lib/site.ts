import { Locale } from "@/app/lib/i18n";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const author = {
  name: "Laza Nantenaina",
  jobTitle: {
    fr: "Software Engineer",
    en: "Software Engineer",
  },
  summary: {
    fr: "Software Engineer avec 6 ans d’expérience dans la conception d’applications web performantes et évolutives, principalement en JavaScript et TypeScript.",
    en: "Software engineer with 6 years of experience building efficient and scalable web applications, mostly with JavaScript and TypeScript.",
  },
  email: "laza6030@gmail.com",
  discord: "lazanantenaina",
  github: "https://github.com/laza6030",
  linkedin: "https://www.linkedin.com/in/laza-nantenaina-64394b206/",
  whatsapp: "https://wa.me/261342252168",
};

export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.jobTitle[locale],
    description: author.summary[locale],
    url: siteUrl,
    email: `mailto:${author.email}`,
    inLanguage: locale,
    sameAs: [author.github, author.linkedin],
  };
}
