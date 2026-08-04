import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer/Footer";
import SplashScreen from "@/app/components/SplashScreen";
import { themeInitScript } from "@/app/lib/theme";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Laza Nantenaina",
  description:
    "Welcome to my portfolio. Thank you for your visit and enjoy. :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth", scrollbarGutter: "stable" }}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} bg-light-gray text-gunmetal-blue transition-bg dark:bg-gunmetal-blue dark:text-light-gray flex justify-center font-sans`}
      >
        <SplashScreen />

        <main className="flex min-h-screen w-full max-w-xl flex-col items-center">
          <NavBar />
          <div className="mt-16">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
