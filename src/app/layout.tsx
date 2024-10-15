"use client";

import { useState, useEffect } from "react";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer/Footer";
// import Loading from "@/app/loading";

const inter = Inter({ subsets: ["latin"] });

// TO DO: READ DOCS ABOUT THIS LATER ON
// export const metadata: Metadata = {
//   title: "Laza Nantenaina",
//   description:
//     "Welcome to my portfolio. Thank you for your visit and enjoy. :)",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // To prevent hydration error
  useEffect(() => {
    setIsDarkMode(
      typeof window !== "undefined"
        ? localStorage.getItem("theme") === "dark"
        : false,
    );
  }, []);

  const [showLoading, setShowLoading] = useState<boolean>(true);

  return (
    <html
      lang="en"
      className={isDarkMode ? "dark" : ""}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${inter.className} linear delay-250 flex justify-center bg-light-gray text-gunmetal-blue transition-bg dark:bg-gunmetal-blue dark:text-light-gray`}
      >
        {/* {showLoading && <Loading hideLoading={() => setShowLoading(false)} />} */}

        <main className="flex h-screen w-1/2 flex-col items-center">
          <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
