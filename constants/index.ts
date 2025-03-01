import { useTheme } from "next-themes";

export const Socials = [
  {
    name: "Linkedin",
    src: "/assets/linkedin.svg",
  },
  {
    name: "Instagram",
    src: "/assets/instagram.svg",
  },
];

export const TechStack = [
  {
    name: "Next js 15",
    image: "/assets/next.webp",
    width: 44,
    height: 44,
    dynamic: true,
  },
  {
    name: "Tailwind CSS",
    image: "/assets/tailwind.webp",
    width: 60,
    height: 60,
  },
  {
    name: "Framer Motion",
    image: "/assets/framer.webp",
    width: 38,
    height: 38,
  },
  {
    name: "Type Script",
    image: "/assets/ts.webp",
    width: 40,
    height: 40,
  },
  {
    name: "Three JS",
    image: "/assets/threejs.webp",
    width: 60,
    height: 60,
  },
  {
    name: "React",
    image: "/assets/react.webp",
    width: 60,
    height: 60,
  },
];

export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: "/assets/html.webp",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Css",
    Image: "/assets/css.webp",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Java Script",
    Image: "/assets/js.webp",
    width: 45,
    height: 45,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/assets/tailwind.webp",
    width: 60,
    height: 60,
  },
  {
    skill_name: "shadcn",
    Image: "/assets/shadcn.webp",
    width: 30,
    height: 30,
    dynamicClass: true,
  },
  {
    skill_name: "React",
    Image: "/assets/react.webp",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Redux",
    Image: "/assets/redux.webp",
    width: 45,
    height: 45,
  },
  {
    skill_name: "React Query",
    Image: "/assets/reactquery.webp",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Type Script",
    Image: "/assets/ts.webp",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Next js 15",
    Image: "/assets/next.webp",
    width: 40,
    height: 40,
    dynamicClass: true,
  },
];

export const Backend_skill = [
  {
    skill_name: "Express js",
    Image: "/assets/express.webp",
    width: 40,
    height: 40,
    dynamicClass: true,
  },
  {
    skill_name: "Mongo db",
    Image: "/assets/mongodb.webp",
    width: 30,
    height: 30,
  },
  {
    skill_name: "Fire base",
    Image: "/assets/Firebase.webp",
    width: 40,
    height: 40,
  },
  {
    skill_name: "SQLite",
    Image: "/assets/sqlite.webp",
    width: 50,
    height: 50,
  },
];

export const projects = [
  {
    name: "Favorite Cities",
    description:
      "A complete full-stack application where users can search for cities, display city information, and plan journeys (still in progress). This app leverages modern technologies for a seamless user experience.",
    tags: [
      { name: "react", color: "text-cyan-600" },
      { name: "nextjs", color: "" },
      { name: "typeorm", color: "text-red-500" },
      { name: "sqlite", color: "text-blue-500" },
      { name: "tailwind", color: "text-cyan-500" },
      { name: "shadcn/ui", color: "" },
    ],
    image: {
      light: "/assets/projects/favCities-light.webp",
      dark: "/assets/projects/favCities-dark.webp",
    },
    source_code_link: "https://github.com/ssupream/favoriteCities",
  },
  {
    name: "Next Quiz",
    description:
      "A modern, feature-rich platform for creating, managing, and taking quizzes. Built with cutting-edge technologies, it provides a seamless user experience and a robust backend to handle your data needs.",
    tags: [
      { name: "react", color: "text-cyan-600" },
      { name: "nextjs", color: "" },
      { name: "mongodb", color: "text-green-700" },
      { name: "tailwind", color: "text-cyan-500" },
    ],
    image: {
      light: "/assets/projects/quiz.webp",
      dark: "/assets/projects/quiz.webp",
    },
    source_code_link: "https://github.com/ssupream/InteractiveQuizApp",
  },
  {
    name: "Journal",
    description:
      "A beautiful and functional diary application inspired by Apple's design philosophy. This project is built using modern web technologies to provide a smooth and intuitive user experience.",
    tags: [
      { name: "react", color: "text-cyan-600" },
      { name: "redux", color: "text-violet-700" },
      { name: "firebase", color: "text-yellow-500" },
      { name: "tailwind", color: "text-cyan-500" },
    ],
    image: {
      light: "/assets/projects/diary-light.webp",
      dark: "/assets/projects/diary-dark.webp",
    },
    source_code_link: "https://github.com/ssupream/apple-like-diary",
  },
];
