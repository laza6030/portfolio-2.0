import type { ReactNode } from "react";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer/Footer";
import SplashScreen from "@/app/components/SplashScreen";
import { inter, instrumentSerif } from "@/app/lib/fonts";
import { Locale } from "@/app/lib/i18n";
import { LocaleProvider } from "@/app/lib/locale-client";
import { setLocale } from "@/app/lib/locale-server";
import { personJsonLd } from "@/app/lib/site";
import { themeInitScript } from "@/app/lib/theme";

export default function RootShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  setLocale(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth", scrollbarGutter: "stable" }}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd(locale)),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} bg-light-gray text-gunmetal-blue transition-bg dark:bg-gunmetal-blue dark:text-light-gray flex justify-center font-sans`}
      >
        <LocaleProvider locale={locale}>
          <SplashScreen />

          <div className="flex min-h-screen w-full max-w-xl flex-col items-center pb-32">
            <NavBar />
            <main className="mt-16 w-full">{children}</main>
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
