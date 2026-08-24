import type { MetadataRoute } from "next";

import { localePath } from "@/app/lib/i18n";
import { siteUrl } from "@/app/lib/site";

const paths = ["", "/experiences"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return paths.flatMap((path, index) => {
    const languages = {
      fr: `${siteUrl}${localePath("fr", path)}`,
      en: `${siteUrl}${localePath("en", path)}`,
    };

    return [
      {
        url: languages.fr,
        lastModified,
        priority: index === 0 ? 1 : 0.8,
        alternates: { languages },
      },
      {
        url: languages.en,
        lastModified,
        priority: index === 0 ? 0.9 : 0.7,
        alternates: { languages },
      },
    ];
  });
}
