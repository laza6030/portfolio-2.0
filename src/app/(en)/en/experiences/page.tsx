import type { Metadata } from "next";

import { buildExperiencesMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = buildExperiencesMetadata("en");

export { default } from "@/app/components/ExperiencesPage";
