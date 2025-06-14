import { Project, Experience } from "@/app/types";

export const projectList: Project[] = [
  {
    title: "Kadow Club",
    description:
      "Integer ullamcorper ut sem id pulvinar. Etiam sit amet quam suscipit, hendrerit enim eget.",
    tools: ["React", "Typescript", "Nest", "Mongodb", "Hapi"],
  },
  {
    title: "Mozar",
    description:
      "I contributed to the development of Mozar, a digital platform designed to streamline the process of obtaining audit reports for legal operations.",
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
    title: "Mozar landing page",
    description:
      "I developed the landing page for Mozar, a digital platform for obtaining audit reports. In addition to creating a user-friendly interface, I optimized site performance and improved SEO, ensuring better visibility and a seamless experience for users",
    tools: ["React", "Gatsby", "Typescript", "Emotion", "Prismic"],
    link: "https://mozar.io/fr/",
  },

  {
    title: "SmartPredict application",
    description:
      "It is a data science SaaS application. I worked as a fullstack developer and collaborated with a team to build and enhance features across both front-end and back-end systems.",
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
    link: "https://cloud.smartpredict.ai/",
  },
  {
    title: "SmartPredict landing page",
    description:
      "Contribution to the development of SmartPredict's Landing page",
    tools: ["React", "Gatsby", "Material UI", "Javascript", "Prismic"],
    link: "https://smartpredict.ai",
  },
  {
    title: "Reflexion Capital",
    description:
      "It is an application that allows to manage customers and users in a company.",
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

export const sideProjectList: Project[] = [
  {
    title: "Current portfolio",
    description:
      "Current portfolio which is designed and developed entirely by myself. For me, it's big accomplishment.",
    tools: ["Next", "Typescript", "tailwind css"],
    githubLink: "https://github.com/laza6030/portfolio-2.0",
  },
  {
    title: "My first portfolio",
    description:
      "My first portfolio which is designed and developed entirely by myself. For me, it's big accomplishment.",
    tools: ["Gatsby", "Typescript", "styled-component", "styled-icons"],
    githubLink: "https://github.com/laza6030/my-portfolio",
  },
  {
    title: "My todo-list app",
    description:
      "In fact, as its name suggests, it is an application that allows you to manage your tasks. It's a project quite common to all developers, and it allowed me to get more familiar with the technologies I used to develop it.",
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

export const experiences: Experience[] = [
  {
    from: "Jul 2024",
    to: "current",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem nulla, ultrices eget nisi tempor, egestas consequat risus. Fusce hendrerit mauris at sollicitudin ullamcorper. Nunc porta turpis quis ligula imperdiet laoreet. Aenean faucibus at tortor at pulvinar. Aenean faucibus leo vitae suscipit bibendum. Nunc id vestibulum magna. Phasellus aliquam sagittis tincidunt. Curabitur molestie magna id dapibus consectetur. Quisque non justo blandit, elementum nulla fringilla, aliquam ante. Phasellus venenatis suscipit metus et condimentum. Phasellus sit amet velit quam. Nam dapibus elit commodo lobortis facilisis. Quisque ornare, sapien vel porta ultrices, urna erat pharetra sem, at porta lectus quam id nisi. Sed eget dolor feugiat, posuere ante ac, dignissim ligula.",
    post: "Software Engineer (Consultant)",
    society: "ValanoTech",
  },
  {
    from: "Oct 2020",
    to: "Jun 2024",
    description:
      "Integer ullamcorper ut sem id pulvinar. Etiam sit amet quam suscipit, hendrerit enim eget, malesuada massa. Sed dapibus luctus arcu, nec iaculis ligula mollis vitae. Integer urna massa, varius at facilisis non, vulputate eget tortor. Praesent sagittis dignissim diam eu eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque aliquam lorem eget diam ullamcorper aliquam. Maecenas nec sapien porttitor, tincidunt leo quis, dignissim risus. Morbi at consectetur purus. Phasellus et eros enim.",
    post: "Software Engineer",
    society: "SmartPredict",
  },
  {
    from: "Feb 2020",
    to: "Jul 2020",
    description:
      "Integer scelerisque imperdiet est. Pellentesque pharetra tincidunt ullamcorper. Morbi ut mi vel leo dignissim dictum ut at tellus. Vivamus vel finibus felis. Nullam ullamcorper augue id semper posuere. Nam varius odio nibh, nec ultricies arcu lacinia ac. Etiam ut eleifend tortor. Phasellus nibh leo, convallis nec leo a, suscipit tristique arcu.",
    post: "Desktop Support Engineer",
    society: "Easytech",
  },
];
