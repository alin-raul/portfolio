import {
  SiExpress,
  SiRedux,
  SiMongodb,
  SiTailwindcss,
  SiSqlite,
  SiShadcnui,
  SiReactquery,
  SiReactrouter,
  SiPostman,
  SiVite,
  SiMongoosedotws,
  SiThreedotjs,
} from "react-icons/si";
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiFirebaseFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";

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
    skill_name: "React",
    icon: FaReact,
  },
  {
    skill_name: "Html 5",
    icon: FaHtml5,
  },
  {
    skill_name: "Css",
    icon: FaCss3Alt,
  },
  {
    skill_name: "Java Script",
    icon: RiJavascriptFill,
  },
  {
    skill_name: "Tailwind Css",
    icon: SiTailwindcss,
  },
  {
    skill_name: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
  {
    skill_name: "Next js 15",
    icon: RiNextjsFill,
  },
  {
    skill_name: "Three js",
    icon: SiThreedotjs,
  },
];

export const Frontend_Skills = [
  {
    skill_name: "React",
    icon: FaReact,
  },
  {
    skill_name: "Html 5",
    icon: FaHtml5,
  },
  {
    skill_name: "Css",
    icon: FaCss3Alt,
  },
  {
    skill_name: "Java Script",
    icon: RiJavascriptFill,
  },
  {
    skill_name: "Tailwind Css",
    icon: SiTailwindcss,
  },
  {
    skill_name: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
  {
    skill_name: "Redux",
    icon: SiRedux,
  },
  {
    skill_name: "Shadcn UI",
    icon: SiShadcnui,
  },
  {
    skill_name: "Next js 15",
    icon: RiNextjsFill,
  },
  {
    skill_name: "Three js",
    icon: SiThreedotjs,
  },
  {
    skill_name: "TypeScript",
    icon: BiLogoTypescript,
  },
];

export const Backend_Skills = [
  {
    skill_name: "Express js",
    icon: SiExpress,
  },
  {
    skill_name: "Mongo db",
    icon: SiMongodb,
  },
  {
    skill_name: "SQLite",
    icon: SiSqlite,
  },
  {
    skill_name: "React Query",
    icon: SiReactquery,
  },
  {
    skill_name: "Firebase",
    icon: RiFirebaseFill,
  },
  {
    skill_name: "Postman",
    icon: SiPostman,
  },
  {
    skill_name: "Vite",
    icon: SiVite,
  },
  {
    skill_name: "Mongoose",
    icon: SiMongoosedotws,
  },
  {
    skill_name: "Node",
    icon: FaNodeJs,
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
    icon: "/assets/projects/icons/cardinal.svg",
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
    icon: "/assets/projects/icons/nextquiz.webp",
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
    icon: "/assets/projects/icons/journal.svg",
    image: {
      light: "/assets/projects/diary-light.webp",
      dark: "/assets/projects/diary-dark.webp",
    },
    source_code_link: "https://github.com/ssupream/apple-like-diary",
  },
];

export const Hobbies = [
  "Old consoles",
  "Developing",
  "Photography",
  "Gaming",
  "Traveling",
  "Cars",
  "Gym",
  "Exploring",
  "Music",
  "Computers",
  "Reading manga's",
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alinraul/",
    icon: "/assets/linkedin.svg",
    alt: "LinkedIn",
    width: 22,
    height: 22,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/alin.raul/",
    icon: "/assets/instagram.svg",
    alt: "Instagram",
    width: 26,
    height: 26,
  },
  {
    name: "GitHub",
    url: "https://github.com/alin-raul",
    icon: "/assets/github-142-svgrepo-com.svg",
    alt: "GitHub",
    width: 26,
    height: 26,
  },
  {
    name: "CV Download",
    url: "/path/to/your-cv.pdf",
    icon: "/assets/download.svg",
    alt: "Download CV",
    width: 22,
    height: 22,
  },
];
