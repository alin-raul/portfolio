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
import { reverse } from "dns";

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
    skill_name: "Html 5",
    icon: FaHtml5,
    color: "text-orange-600",
  },
  {
    skill_name: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-600",
  },
  {
    skill_name: "JavaScript",
    icon: RiJavascriptFill,
    color: "text-yellow-500",
  },
  {
    skill_name: "React",
    icon: FaReact,
    color: "text-cyan-500",
  },

  {
    skill_name: "Next js 15",
    icon: RiNextjsFill,
  },
  {
    skill_name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    skill_name: "Framer Motion",
    icon: TbBrandFramerMotion,
    color: "text-pink-500",
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

export const workExperiences = [
  {
    name: "Teleperformance",
    icon: "/assets/copanies/teleperformance.webp",
    alt: "Teleperformance",
    width: 50,
    height: 50,
    role: "Content moderator",
    duration: "2024 - now",
    workingHere: true,
    isLong: true,
    list: [
      {
        skill: "Moderation",
        description: "Reviewed user content for policy compliance",
      },
      {
        skill: "Collaboration",
        description: "Worked with teams to optimize workflows",
      },
      {
        skill: "Mentoring",
        description: "Shared best practices to maintain quality",
      },
      {
        skill: "Feedback",
        description: "Provided constructive peer evaluations",
      },
    ],
  },
  {
    name: "DCI",
    icon: "/assets/copanies/dci.webp",
    alt: "DCI",
    width: 55,
    height: 55,
    role: "Data operator",
    duration: "2021 - 2024",
    workingHere: false,
    list: [
      {
        skill: "Data entry",
        description: "Managed high-volume information precisely",
      },
      {
        skill: "Quality control",
        description: "Conducted integrity checks on data",
      },
      {
        skill: "Teamwork",
        description: "Collaborated to streamline workflows",
      },
      {
        skill: "Efficiency",
        description: "Maintained accurate records under deadlines",
      },
    ],
  },
  {
    name: "MAPA",
    icon: "/assets/copanies/mapa.webp",
    alt: "MAPA",
    width: 70,
    height: 70,
    role: "Product line operator",
    duration: "2016 - 2017",
    workingHere: false,
    list: [
      { skill: "Machinery", description: "Operated plastic molding equipment" },
      {
        skill: "Materials",
        description: "Understood plastic properties and uses",
      },
      {
        skill: "Quality",
        description: "Monitored production standards closely",
      },
      {
        skill: "Coordination",
        description: "Worked cross-departmentally for goals",
      },
    ],
  },
  {
    name: "Ostedruck",
    icon: "/assets/copanies/ostedruck.webp",
    alt: "Ostedruck",
    width: 35,
    height: 35,
    role: "Apprenticeship",
    duration: "2014 - 2015",
    workingHere: false,
    list: [
      {
        skill: "Software",
        description: "Used Adobe Suite for design projects",
      },
      { skill: "Design", description: "Created print/digital media visuals" },
      { skill: "Prepress", description: "Prepared files for production" },
      { skill: "Printing", description: "Understood techniques and materials" },
    ],
  },
];

export const educationData = [
  {
    name: "Digital Nation",
    icon: "/assets/copanies/digital_nation.webp",
    alt: "Digital Nation",
    width: 70,
    height: 70,
    role: "Javascript Explorer",
    duration: "2024 - 2025",
    isSchool: false,
    list: [
      {
        skill: "Frontend",
        description: "Built web pages with HTML, CSS and React",
      },
      { skill: "Backend", description: "Used Next.js, Express and TypeORM" },
      {
        skill: "Database",
        description: "Worked with SQLite and MongoDB systems",
      },
      {
        skill: "Security",
        description: "Implemented authentication solutions",
      },
    ],
  },
  {
    name: "Transilvania University",
    icon: "/assets/copanies/unitbv.webp",
    alt: "Transilvania University",
    width: 40,
    height: 40,
    role: "Applied Modern Languages",
    specialization: "(German-English)",
    duration: "2018 - 2021",
    isSchool: true,
    reverse: true,
    isLong: true,
    list: [
      {
        skill: "Linguistics",
        description: "Mastered phonetics, syntax and morphology (B2/C1)",
      },
      {
        skill: "Translation",
        description:
          "Specialized in technical and literary translation techniques",
      },
      {
        skill: "Terminology",
        description: "Developed specialized vocabularies in fields",
      },
      {
        skill: "Documentation",
        description: "Learned information classification",
      },
    ],
  },
];

export const designTools = [
  {
    name: "Photoshop",
    icon: "/assets/photoshop.webp",
    width: 70,
    height: 70,
  },
  {
    name: "Gimp",
    icon: "/assets/gimp.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Figma",
    icon: "/assets/figma.webp",
    width: 40,
    height: 40,
  },
];

export const otherSkills = [
  {
    name: "Terminal",
    icon: "/assets/terminal.webp",
    width: 70,
    height: 70,
  },
  {
    name: "Linux (Arch)",
    icon: "/assets/arch.webp",
    width: 65,
    height: 65,
  },
  {
    name: "Git",
    icon: "/assets/git.webp",
    width: 65,
    height: 65,
  },
  {
    name: "REST APIs",
    icon: "/assets/api.webp",
    width: 70,
    height: 70,
  },
  {
    name: "NPM/Yarn",
    icon: "/assets/npm.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Postman",
    icon: "/assets/postman.webp",
    width: 60,
    height: 60,
  },
];
