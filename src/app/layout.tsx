import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer/Footer";
import { themeInitScript } from "@/app/lib/theme";
// import Loading from "@/app/loading";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} bg-light-gray text-gunmetal-blue transition-bg dark:bg-gunmetal-blue dark:text-light-gray flex justify-center`}
      >
        {/* {showLoading && <Loading hideLoading={() => setShowLoading(false)} />} */}

        <main className="flex min-h-screen w-full flex-col items-center sm:w-4/5 lg:w-1/2">
          <NavBar />
          <div className="mt-16">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
