import type { Metadata } from "next";

import "@/app/globals.css";

import RootShell from "@/app/components/RootShell";
import { buildHomeMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = buildHomeMetadata("en");

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="en">{children}</RootShell>;
}
