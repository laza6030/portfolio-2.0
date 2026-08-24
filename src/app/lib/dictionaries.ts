import { Locale } from "@/app/lib/i18n";

const fr = {
  nav: {
    label: "Navigation principale",
    home: "Accueil",
    projects: "Projets",
    experiences: "Expériences",
  },
  theme: {
    toLight: "Passer au thème clair",
    toDark: "Passer au thème sombre",
  },
  localeSwitch: {
    label: (name: string) => `Langue : ${name}`,
  },
  intro: {
    greeting: "Bonjour ! Je suis Laza Nantenaina",
    bio: "Je suis un Software Engineer passionné, avec 6 ans d’expérience. Je crée des applications web rapides et faciles à faire évoluer, surtout en JavaScript. Je soigne les interfaces pour qu’elles restent simples à utiliser. J’aime travailler en équipe et livrer un travail propre. J’essaie aussi souvent de nouvelles technologies, pour continuer à apprendre et améliorer l’expérience des utilisateurs.",
  },
  projects: {
    professional: "Projets professionnels",
    side: "Projets personnels",
    visit: (title: string) => `Visiter ${title}`,
    github: (title: string) => `${title} sur GitHub`,
  },
  experiences: {
    title: "Expériences",
    description:
      "Parcours professionnel de Laza Nantenaina, Software Engineer.",
    at: "-",
  },
  footer: {
    reachMeOut: "Me contacter",
    email: "E-mail",
    copyDiscord: (username: string) => `Copier le pseudo Discord ${username}`,
    copied: "Pseudo Discord copié",
  },
  loading: "Chargement…",
  meta: {
    description:
      "Portfolio de Laza Nantenaina, Software Engineer avec 6 ans d’expérience dans la conception d’applications web performantes et évolutives.",
  },
};

const en: typeof fr = {
  nav: {
    label: "Main navigation",
    home: "Home",
    projects: "Projects",
    experiences: "Experiences",
  },
  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  localeSwitch: {
    label: (name: string) => `Language: ${name}`,
  },
  intro: {
    greeting: "Hello! I’m Laza Nantenaina",
    bio: "I’m a passionate Software Engineer with 6 years of experience. I build web applications that are fast and easy to scale, mostly with JavaScript. I care about interfaces that stay simple to use. I like working with a team and shipping clean work. I also try new technologies often, to keep learning and improve the experience for users.",
  },
  projects: {
    professional: "Professional projects",
    side: "Side projects",
    visit: (title: string) => `Visit ${title}`,
    github: (title: string) => `${title} on GitHub`,
  },
  experiences: {
    title: "Experiences",
    description:
      "Professional experiences of Laza Nantenaina, software engineer.",
    at: "-",
  },
  footer: {
    reachMeOut: "Reach me out",
    email: "Email",
    copyDiscord: (username: string) => `Copy Discord username ${username}`,
    copied: "Discord username copied",
  },
  loading: "Loading…",
  meta: {
    description:
      "Portfolio of Laza Nantenaina, software engineer with 6 years of experience building efficient and scalable web applications.",
  },
};

const dictionaries = { fr, en };

export type Dictionary = typeof fr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
