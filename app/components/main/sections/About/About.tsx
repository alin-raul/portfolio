"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  AtSign,
  CalendarPlus,
  Globe,
  MapPin,
  GraduationCap,
  Languages,
  Save,
  Terminal,
  TrendingUp,
  SquareActivity,
  Code,
  SquareStack,
} from "lucide-react";
import GlobeComponent from "./GlobeComponent";
import Blob from "@/app/components/effects/Blob";
import MonochromeCarousel from "@/app/components/global/MonochromeCarousel";
import { TechStack } from "@/constants";
import ProjectsEsterEgg from "./ProjectsEsterEgg";
import SocialLinks from "./SocialLinks";
import YearsLearning from "./YearsLearning";
import VirtualPet from "./VirtualPet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export const GridCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`grid-card relative ${className}`}>
    {children}
    <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[-1]" />
  </div>
);

const IntroCard = () => (
  <GridCard className="p-[3rem] h-full">
    <p className="font-medium text-2xl">Hi, I&apos;m Raul —</p>
    <p className="grid-subtext">
      I’m a web developer with two years of JavaScript experience, specializing
      in dynamic, responsive websites.
    </p>
    <div className="flex gap-2 w-full">
      <span className="flex gap-2 items-center border px-3 py-1 rounded-full bg-accent/40 backdrop-blur-md mt-8">
        <GraduationCap className="w-4 h-4" /> Software Engineer
      </span>
    </div>
  </GridCard>
);

const ProfileImageCard = () => (
  <GridCard className="p-[3rem] overflow-auto md:min-h-full min-h-[32rem] w-full relative">
    <Image
      src={"/assets/me.webp"}
      alt="me"
      fill
      quality={100}
      className="object-cover"
    />
  </GridCard>
);

const TechStackCard = () => (
  <GridCard className="p-[3rem] flex flex-col h-full overflow-hidden">
    <p className="font-normal text-xl mb-4 md:mb-0">Stack I use</p>
    <div className="my-auto">
      <MonochromeCarousel icons={TechStack} reverse={false} />
    </div>
  </GridCard>
);

const PassionCard = () => (
  <GridCard className="p-[3rem] flex flex-col h-full">
    <p className="font-normal text-xl">My Passion</p>
    <div className="my-auto">
      <p className="opacity-60">
        I love solving problems and building things through code. Programming
        isn&apos;t just my profession—it&apos;s my passion. I enjoy exploring
        new technologies, and enhancing my skills.
      </p>
    </div>
  </GridCard>
);

const AboutCard = () => (
  <GridCard className="p-[3rem] h-full overflow-hidden relative flex flex-col">
    <p className="font-medium text-sm opacity-60">ABOUT</p>
    <div className="h-full flex flex-col">
      <p className="">
        I’m an aspiring web developer with two years of JavaScript experience,
        passionate about building dynamic, responsive websites.
      </p>
      <Button className="w-12 h-12 rounded-[1.3rem] border border-accent-foreground/20 ml-auto md:mt-auto mt-8 bg-[var(--bg-dynamic-2)] hover:bg-accent/40">
        <Link
          href="/about"
          className="flex justify-center items-center text-accent-foreground"
        >
          <ArrowUpRight />
        </Link>
      </Button>
    </div>
  </GridCard>
);

const FlexibleCard = () => (
  <GridCard className="p-[3rem] h-full relative overflow-hidden min-h-80 flex flex-col">
    <div className="container-wrapper flex-grow h-full flex flex-col">
      <h1 className="font-normal text-xl flex gap-2 items-center">
        <Globe className="w-5 h-5" /> Flexible & Multilingual
      </h1>
      <div className="flex flex-wrap h-full flex-grow">
        <div className="mb-8">
          <p className="mt-3 max-w-full show-if-wide">
            I am a dynamic and adaptable professional <br />
            based in Brașov, Romania, with a global <br />
            outlook & commitment to teamwork.
            <br />
            Open to remote work worldwide.
          </p>
          <p className="mt-3 max-w-full hide-if-wide">
            I am a dynamic and adaptable professional based in Brașov, Romania,
            with a global outlook & commitment to teamwork. Open to remote work
            worldwide.
          </p>
        </div>
        <div className="flex flex-wrap gap-1 mt-auto z-[30]">
          <span className="flex gap-2 items-center border px-3 py-1 rounded-full bg-accent/40 backdrop-blur-md">
            <MapPin className="w-4 h-4" />
            Brașov, RO
          </span>
          <span className="flex gap-2 items-center border px-3 py-1 rounded-full bg-accent/40 backdrop-blur-md">
            <Languages className="w-4 h-4" /> ENG, RO, IT, DE
          </span>
        </div>
      </div>
    </div>
    <GlobeComponent />
  </GridCard>
);

const ContactCard = () => (
  <GridCard className="flex flex-col h-full">
    <div className="pl-[3rem] pr-[3rem] pt-[3rem] pb-[1rem] flex-grow">
      <div className="flex flex-col h-full">
        <h1 className="font-normal text-2xl mb-6">Have a project in mind?</h1>
        <p className="opacity-60 ">
          Let’s connect—reach out via email or schedule a call to get started!
        </p>
      </div>
    </div>
    <div className="flex xl:flex-col md:flex-row gap-2 w-full p-4 mt-auto">
      <Button className="rounded-3xl min-h-16 md:flex-1 w-full bg-[var(--bg-dynamic-2)] hover:bg-accent/40 text-accent-foreground">
        <Link
          href={"mailto:workdevraul@gmail.com"}
          className="flex items-center gap-2 md:text-xl"
        >
          <AtSign className="!w-4 !h-4 md:!w-5 md:!h-5" />
          Email me
        </Link>
      </Button>
      <Button className="rounded-3xl min-h-16 md:flex-1 w-full bg-[var(--bg-dynamic-2)] hover:bg-accent/40 text-accent-foreground">
        <Link
          href={"https://calendly.com/workdevraul"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 xl:text:md md:text-xl"
        >
          <CalendarPlus className="!w-4 !h-4 md:!w-5 md:!h-5" />
          Schedule a call
        </Link>
      </Button>
    </div>
  </GridCard>
);

const ProjectsSection = () => (
  <div className="relative grid grid-cols-2 gap-4 h-full">
    <ProjectsEsterEgg />
    <YearsLearning />
    <GridCard className="col-span-2 p-[3rem] flex flex-col h-full min-h-60">
      <VirtualPet />
    </GridCard>
  </div>
);

const GrowthCard = () => <GrowthTimeline />;

const RetroTech = () => (
  <GridCard className="col-span-2 p-4 relative overflow-hidden group h-full">
    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
    <div className="relative z-10 h-full flex flex-col">
      {/* Arch Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 bg-gradient-to-br from-arch-blue to-arch-silver rounded-sm flex items-center justify-center">
          <Terminal />
        </div>
        <h3 className="text-sm font-mono text-arch-silver">Arch Linux</h3>
        <span className="text-xs opacity-60 ml-auto">x86_64</span>
      </div>

      {/* Terminal Body */}
      <div className="flex-grow border border-arch-silver/20 rounded-sm bg-arch-dark/90 p-2">
        <div className="font-mono text-xs text-arch-silver space-y-1">
          <div className="flex items-center gap-1">
            <span className="text-arch-blue">[raul@portfolio ~]</span>
            <span className="text-arch-silver">$</span>
            <span className="animate-pulse">_</span>
          </div>
          <p>sudo pacman -Syu creativity</p>
          <p className="opacity-75">:: Synchronizing package databases...</p>
          <div className="h-px bg-arch-silver/20 my-1" />
          <div className="flex items-center gap-1 text-[0.65rem]">
            <span className="w-[3ch]">(1/3)</span>
            <span className="w-[20ch] bg-arch-blue/30 block animate-progress" />
            <span className="opacity-60">core.db</span>
          </div>
        </div>
      </div>

      {/* Arch-specific Footer */}
      <div className="flex gap-1.5 mt-2 flex-wrap">
        <span className="px-1.5 py-0.5 bg-arch-blue/20 rounded text-[0.6rem] tracking-tighter border border-arch-blue/30">
          Pacman
        </span>
        <span className="px-1.5 py-0.5 bg-arch-silver/20 rounded text-[0.6rem] tracking-tighter border border-arch-silver/30">
          AUR
        </span>
        <span className="px-1.5 py-0.5 bg-arch-silver/20 rounded text-[0.6rem] tracking-tighter border border-arch-silver/30">
          systemd
        </span>
        <span className="px-1.5 py-0.5 bg-arch-blue/20 rounded text-[0.6rem] tracking-tighter border border-arch-blue/30">
          6.9.1-arch1-1
        </span>
      </div>
    </div>

    {/* Retro Hover Effect */}
    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
      <Save className="w-6 h-6 text-arch-silver/50" />
    </div>
  </GridCard>
);

const GrowthTimeline = () => {
  // Mock data representing 2 years of personal development
  const growthData = [
    {
      month: "Jun 2023",
      skills: 5,
      projects: 4,
      skillsList: ["HTML", "CSS", "JavScript", "Package manager", "Terminal"],
      projectsList: ["To-Do List , Calculator, Tic-Tac-Toe, Digital Clock"],
    },
    {
      month: "Sep 2023",
      skills: 10,
      projects: 4,
      skillsList: ["React", "Redux", "Joi", "Tailwind", "Vite"],
      projectsList: [
        "Journal",
        "E-commerce store",
        "Weather App",
        "Expense Calculator",
      ],
    },
    {
      month: "Aug 2024",
      skills: 22,
      projects: 2,
      skillsList: [
        "Next.js",
        "Redux",
        "TypeScript",
        "Firebase",
        "MongoDB",
        "TypeORM",
        "SQLite",
        "API's",
        "Maps",
        "Auth",
        "JWT",
        "Git",
      ],
      projectsList: ["Quiz App", "Favorite Cities"],
    },
    {
      month: "Feb 2025",
      skills: 25,
      projects: 1,
      skillsList: ["Three.js", "Shadcn UI", "React Query"],
      projectsList: ["Portfolio"],
    },
  ];

  return (
    <GridCard className="p-6 relative h-full min-h-96">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-black/10" />

      <h3 className="text-lg mb-4 flex items-center gap-2">
        <Code className="w-5 h-5" />
        Skill & Project Growth
      </h3>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={growthData}>
            <defs>
              <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--muted-foreground))"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--muted))"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              interval={1}
            />

            <YAxis
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              width={30}
            />

            <Tooltip
              contentStyle={{
                background: "hsl(var(--accent))",
                border: "none",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "hsl(var(--accent-foreground))" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="p-3 bg-accent text-accent-foreground rounded-lg">
                      <p className="font-medium">{data.month}</p>
                      <p className="text-sm">
                        Skills: {data.skillsList.join(", ")}
                      </p>
                      <p className="text-sm mt-2">
                        Projects: {data.projectsList.join(", ")}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Area
              type="monotone"
              dataKey="skills"
              name="Skills Mastered"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#growthGradient)"
              animationDuration={2000}
            />

            <ReferenceLine
              x="Jan 2023"
              stroke="hsl(var(--accent))"
              strokeDasharray="3 3"
              label={{
                position: "insideTopRight",
                value: "Full-Stack Transition",
                fill: "hsl(var(--accent))",
                fontSize: 12,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="opacity-75">Technical Skills</span>
        </div>
        <div className="text-right">
          <p className="font-medium">+{(((25 - 3) / 3) * 100).toFixed(0)}%</p>
          <p className="text-xs opacity-75">6 projects completed</p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2">
        <Badge variant="outline" className="text-xs py-1">
          <SquareStack className="w-3 h-3 mr-1" />
          {growthData[growthData.length - 1].skills} Skills
        </Badge>
      </div>
    </GridCard>
  );
};

const About = () => (
  <div className="relative max-w-[160rem] mt-40 mx-auto " id="about">
    <Blob
      blobClass="blob-2"
      position={{ left: "25rem", top: "16rem" }}
      width="900px"
      height="600px"
    />

    <section className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:grid xl:grid-cols-12 md:grid-rows-[minmax(auto, max-content)] grid-rows-[minmax(auto, max-content)] md:grid-cols-6 grid-cols-1 gap-5 min-h-fit items-stretch">
        <div className="xl:col-span-5 lg:col-span-4 md:col-span-4 md:h-full h-fit z-20">
          <IntroCard />
        </div>

        <div className="xl:col-span-3 lg:col-span-2 md:col-span-2 z-20">
          <ProfileImageCard />
        </div>

        <div className="xl:col-span-4 md:col-span-2 md:row-span-1 md:h-full h-full z-20">
          <TechStackCard />
        </div>

        <div className="xl:col-span-4 md:col-span-4 md:h-full h-fit z-20">
          <PassionCard />
        </div>

        <div className="xl:col-span-3 md:col-span-3 md:h-full h-fit z-20">
          <AboutCard />
        </div>

        <div className="xl:col-span-5 md:col-span-3 row-span-1 md:h-full z-20">
          <FlexibleCard />
        </div>

        <div className="xl:col-span-3 xl:row-span-1 md:col-span-2 md:h-full h-fit z-20 relative">
          <ProjectsSection />
        </div>

        <div className="xl:col-span-3 md:col-span-4 md:h-full h-fit z-20">
          <GrowthCard />
        </div>

        <div className="xl:col-span-3 md:col-span-4 md:h-full z-20">
          <ContactCard />
        </div>

        <div className="xl:col-span-3 md:col-span-2 md:h-full h-fit z-20">
          <SocialLinks />
        </div>
      </div>
    </section>
  </div>
);

export default About;
