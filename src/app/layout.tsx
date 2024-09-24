"use client";

import { useState } from "react";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer/Footer";

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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body
        className={`${inter.className} bg-light-gray dark:bg-gunmetal-blue flex justify-center text-gunmetal-blue dark:text-light-gray transition-bg linear delay-250`}
      >
        <main className="flex flex-col items-center w-3/5 h-screen ">
          <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
