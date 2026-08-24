import type { Metadata } from "next";

import "@/app/globals.css";

import RootShell from "@/app/components/RootShell";
import { buildHomeMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = buildHomeMetadata("fr");

export default function FrLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="fr">{children}</RootShell>;
}
