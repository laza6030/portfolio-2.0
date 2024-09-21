import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer/Footer";

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
    <html lang="en">
      <body
        className={`${inter.className} bg-light-gray flex justify-center text-gunmetal-blue`}
      >
        <main className="flex flex-col items-center w-3/5 h-screen ">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
