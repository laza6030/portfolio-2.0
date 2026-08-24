import { Locale } from "@/app/lib/i18n";

export type Localized = string | Record<Locale, string>;

export type Project = {
  title: string;
  description: string;
  tools: string[];
  link?: string;
  githubLink?: string;
};

export type Experience = {
  from: string;
  to: string;
  society: string;
  post: string;
  description: string;
};

export type LocalizedProject = Omit<Project, "title" | "description"> & {
  title: Localized;
  description: Localized;
};

export type LocalizedExperience = Omit<
  Experience,
  "from" | "to" | "post" | "description" | "society"
> & {
  from: Localized;
  to: Localized;
  post: Localized;
  description: Localized;
  society: Localized;
};
