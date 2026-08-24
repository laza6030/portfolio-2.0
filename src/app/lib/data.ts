import { Locale } from "@/app/lib/i18n";
import {
  Experience,
  Localized,
  LocalizedExperience,
  LocalizedProject,
  Project,
} from "@/app/types";

function resolve(value: Localized, locale: Locale) {
  return typeof value === "string" ? value : value[locale];
}

const projects: LocalizedProject[] = [
  {
    title: "Kadow Club",
    description: {
      fr: "Projet sur lequel je suis intervenu comme développeur fullstack, côté back-office, aussi bien sur les interfaces React que sur les services back-end en Nest et Hapi.",
      en: "A project I worked on as a fullstack developer, on the back-office side, contributing to the React interfaces as well as to the Nest and Hapi back-end services.",
    },
    tools: ["React", "Typescript", "Nest", "Mongodb", "Hapi"],
  },
  {
    title: "Mozar",
    description: {
      fr: "J’ai contribué au développement de Mozar, une plateforme numérique conçue pour simplifier l’obtention de rapports d’audit dans le cadre d’opérations juridiques.",
      en: "I contributed to the development of Mozar, a digital platform designed to streamline the process of obtaining audit reports for legal operations.",
    },
    tools: [
      "React",
      "Typescript",
      "Material UI",
      "Apollo",
      "GraphQL",
      "NodeJs",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Azure",
      "Stripe",
    ],
    link: "https://app.mozar.io/",
  },
  {
    title: { fr: "Landing page de Mozar", en: "Mozar landing page" },
    description: {
      fr: "J’ai développé la landing page de Mozar, une plateforme numérique d’obtention de rapports d’audit. En plus de créer une interface agréable à utiliser, j’ai optimisé les performances du site et amélioré le SEO, garantissant une meilleure visibilité et une expérience fluide pour les visiteurs.",
      en: "I developed the landing page for Mozar, a digital platform for obtaining audit reports. In addition to creating a user-friendly interface, I optimized site performance and improved SEO, ensuring better visibility and a seamless experience for users",
    },
    tools: ["React", "Gatsby", "Typescript", "Emotion", "Prismic"],
    link: "https://mozar.io/fr/",
  },
  {
    title: { fr: "Application SmartPredict", en: "SmartPredict application" },
    description: {
      fr: "Il s’agit d’une application SaaS de data science. J’y ai travaillé comme développeur fullstack, en collaboration avec une équipe, pour construire et enrichir des fonctionnalités aussi bien côté front-end que back-end.",
      en: "It is a data science SaaS application. I worked as a fullstack developer and collaborated with a team to build and enhance features across both front-end and back-end systems.",
    },
    tools: [
      "React",
      "Typescript",
      "Material UI",
      "GraphQL",
      "NodeJs",
      "Mongo",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "Redis",
    ],
  },
  {
    title: {
      fr: "Landing page de SmartPredict",
      en: "SmartPredict landing page",
    },
    description: {
      fr: "Contribution au développement de la landing page de SmartPredict.",
      en: "Contribution to the development of SmartPredict's Landing page",
    },
    tools: ["React", "Gatsby", "Material UI", "Javascript", "Prismic"],
  },
  {
    title: "Reflexion Capital",
    description: {
      fr: "Une application qui permet de gérer les clients et les utilisateurs d’une entreprise.",
      en: "It is an application that allows to manage customers and users in a company.",
    },
    tools: [
      "React",
      "Typescript",
      "Material UI",
      "Firebase",
      "Firestore",
      "Cloud function",
    ],
    link: "https://app.reflexion.capital/",
  },
];

const sideProjects: LocalizedProject[] = [
  {
    title: { fr: "Portfolio actuel", en: "Current portfolio" },
    description: {
      fr: "Le portfolio que vous consultez, entièrement conçu et développé par moi-même.",
      en: "Current portfolio which is designed and developed entirely by myself. For me, it's big accomplishment.",
    },
    tools: ["Next", "Typescript", "tailwind css", "Vercel"],
    githubLink: "https://github.com/laza6030/portfolio-2.0",
  },
  {
    title: { fr: "Mon premier portfolio", en: "My first portfolio" },
    description: {
      fr: "Mon premier portfolio, entièrement conçu et développé par moi-même.",
      en: "My first portfolio which is designed and developed entirely by myself. For me, it's big accomplishment.",
    },
    tools: ["Gatsby", "Typescript", "styled-component", "styled-icons"],
    githubLink: "https://github.com/laza6030/my-portfolio",
  },
  {
    title: { fr: "Mon application de todo-list", en: "My todo-list app" },
    description: {
      fr: "Comme son nom l’indique, c’est une application qui permet de gérer ses tâches. C’est un projet assez commun à tous les développeurs, et il m’a permis de me familiariser davantage avec les technologies utilisées pour le développer.",
      en: "In fact, as its name suggests, it is an application that allows you to manage your tasks. It's a project quite common to all developers, and it allowed me to get more familiar with the technologies I used to develop it.",
    },
    tools: [
      "React",
      "Apollo",
      "GraphQL",
      "Material UI",
      "Storybook",
      "Jest",
      "NodeJs",
      "Docker",
    ],
    githubLink: "https://github.com/laza6030/my-todo-list-app",
  },
];

const experiences: LocalizedExperience[] = [
  {
    from: { fr: "Juil. 2024", en: "Jul 2024" },
    to: { fr: "Aujourd’hui", en: "current" },
    description: {
      fr: "En tant que Software Engineer Consultant, j’interviens sur différents projets web pour accompagner des clients dans le développement de leurs applications. Je travaille principalement sur des environnements JavaScript/TypeScript, avec des expériences en frontend, backend et développement fullstack.",
      en: "As a Software Engineer Consultant, I work on a range of web projects, supporting clients in building their applications. I work mainly in JavaScript/TypeScript environments, with experience across frontend, backend and fullstack development.",
    },
    post: {
      fr: "Software Engineer Consultant",
      en: "Software Engineer (Consultant)",
    },
    society: { fr: "Indépendant", en: "Independent" },
  },
  {
    from: { fr: "Oct. 2020", en: "Oct 2020" },
    to: { fr: "Juin 2024", en: "Jun 2024" },
    description: {
      fr: "Chez SmartPredict, j’ai participé au développement et à l’évolution de la plateforme en contribuant à l’implémentation de nouvelles fonctionnalités et à la maintenance de la codebase. J’ai également travaillé sur différents projets clients avec des technologies comme React, Node.js, GraphQL, MongoDB, Docker et Kubernetes.",
      en: "At SmartPredict, I took part in developing and growing the platform, contributing to the implementation of new features and to the maintenance of the codebase. I also worked on various client projects with technologies such as React, Node.js, GraphQL, MongoDB, Docker and Kubernetes.",
    },
    post: { fr: "Software Engineer", en: "Software Engineer" },
    society: "SmartPredict",
  },
  {
    from: { fr: "Fév. 2020", en: "Feb 2020" },
    to: { fr: "Juil. 2020", en: "Jul 2020" },
    description: {
      fr: "Chez Easytech Madagascar, j’ai travaillé sur des problématiques d’administration et de support informatique. Mon expérience portait notamment sur l’administration de serveurs Citrix, Active Directory et Exchange via VMware vSphere.",
      en: "At Easytech Madagascar, I worked on IT administration and support. My work focused in particular on administering Citrix, Active Directory and Exchange servers through VMware vSphere.",
    },
    post: {
      fr: "Ingénieur Support Informatique",
      en: "IT Support Engineer",
    },
    society: "Easytech Madagascar",
  },
];

function toProject(project: LocalizedProject, locale: Locale): Project {
  return {
    ...project,
    title: resolve(project.title, locale),
    description: resolve(project.description, locale),
  };
}

export function getProjectList(locale: Locale): Project[] {
  return projects.map((project) => toProject(project, locale));
}

export function getSideProjectList(locale: Locale): Project[] {
  return sideProjects.map((project) => toProject(project, locale));
}

export function getExperiences(locale: Locale): Experience[] {
  return experiences.map((experience) => ({
    ...experience,
    from: resolve(experience.from, locale),
    to: resolve(experience.to, locale),
    post: resolve(experience.post, locale),
    society: resolve(experience.society, locale),
    description: resolve(experience.description, locale),
  }));
}
