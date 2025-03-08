"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MyButton from "../../MyButton";
import { Copy } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { TechStack } from "@/constants";
import GlobeComponent from "./GlobeComponent";
import { Globe, MapPin, GraduationCap, Languages } from "lucide-react";

interface Skill {
  name: string;
  level?: string;
  progress?: string;
  category?: "core" | "advanced" | "growing";
  color?: string;
}

interface SkillSectionProps {
  skills: Skill[];
}

const InfiniteCarousel = () => {
  return (
    <div className="max-w-screen-2xl">
      <div className="carousel overflow-hidden relative ">
        {[...Array(2)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="group-carousel-links flex animate-scroll"
          >
            {TechStack.map((icon, index) => (
              <div
                key={index}
                className="group carousel-link p-2 border rounded-3xl transition-all "
              >
                <div className="flex justify-center items-center min-h-12 min-w-12">
                  <Image
                    src={icon.image}
                    alt={icon.name}
                    width={icon.width}
                    height={icon.height}
                    className={`object-contain ${
                      icon.dynamic ? "icon" : ""
                    } origin-center`}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("alinnsts@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const SkillBar: React.FC<Skill> = ({ name, level, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-between text-xs mb-1">
          <span className="mx-auto select-none">{level}</span>
        </div>
        <div className="w-10 h-40 relative">
          {/* Name label with disabled selection */}
          <span className="absolute inset-0 -bottom-20 flex items-center text-sm z-10 text-nowrap -rotate-90 select-none pointer-events-none">
            {name}
          </span>

          {/* Progress bar */}
          <div
            className="w-full rounded-full transition-all duration-500 absolute bottom-0 outline-2 outline-dotted px-3 py-1 backdrop-blur-md"
            style={{
              height: level,
              backgroundColor: isHovered ? color : "",
            }}
          />
        </div>
      </div>
    );
  };

  const RadialSkill: React.FC<Skill> = ({ name, progress }) => (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs outline-2 outline-dotted rounded-full py-[0.54rem] px-[0.25rem] ">
          {progress}
        </span>
      </div>
      <span className="text-sm">{name}</span>
    </div>
  );

  const SkillPill: React.FC<Skill> = ({ name }) => (
    <div className="border px-3 py-1 rounded-full dark:bg-black-300/50 bg-white/20 backdrop-blur-md">
      {name}
    </div>
  );

  return (
    <section className="my-40 max-w-screen-2xl mx-auto" id="about">
      <div className="flex flex-col md:grid xl:grid-cols-12 md:grid-rows-[minmax(auto, max-content)] grid-rows-[minmax(auto, max-content)] md:grid-cols-6 grid-cols-1 gap-5 min-h-fit items-stretch">
        <div className="xl:col-span-5 lg:col-span-4 md:col-span-4 md:h-full h-fit z-20">
          <div className="grid-card-w-space h-full">
            <p className="font-medium text-2xl">Hi, I&apos;m Raul —</p>
            <p className="grid-subtext">
              I’m a web developer with two years of JavaScript experience,
              specializing in dynamic, responsive websites.
            </p>
            <div className="flex gap-2 w-full">
              <span className="flex gap-2 items-center border px-3 py-1 rounded-full dark:bg-black-300/50 bg-white/20 backdrop-blur-md">
                <GraduationCap className="w-4 h-4" /> Software Engineer
              </span>
            </div>
          </div>
        </div>

        <div className="xl:col-span-3 lg:col-span-2 md:col-span-2 z-20">
          <div className="grid-card-w-space overflow-auto md:min-h-full min-h-[32rem] w-full relative">
            <Image
              src={"/assets/me.webp"}
              alt="me"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </div>

        <div className="xl:col-span-4  md:col-span-4 md:h-full h-fit z-20">
          <div className="grid-card-w-space">
            <p className="font-medium text-sm opacity-60">ABOUT</p>
            <p className="mt-3">
              I’m an aspiring web developer with two years of JavaScript
              experience, passionate about building dynamic, responsive
              websites.
            </p>
            <Link
              href=""
              className="w-12 h-12 border flex justify-center items-center rounded-full ml-auto"
            >
              {<ArrowUpRight className="opacity-70 hover:opacity-100" />}
            </Link>
          </div>
        </div>

        <div className="xl:col-span-3  md:col-span-2 md:row-span-1 md:h-full h-full z-20">
          <div className="grid-card-w-space h-full overflow-hidden relative">
            <div className="flex flex-col justify-between flex-grow">
              <p className="font-normal text-xl">Stack I use</p>

              <InfiniteCarousel />
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 md:col-span-3 md:h-full h-fit z-20">
          <div className="grid-card-w-space h-full">
            <div>
              <p className="font-normal text-xl">My Passion</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-5 md:col-span-3 row-span-1 md:h-full z-20">
          <div className="grid-card-w-space h-full relative overflow-hidden min-h-96">
            <div className="container-wrapper">
              <div className="font-normal text-xl flex gap-2 items-center">
                <Globe className="w-5 h-5" /> Flexible & Multilingual
              </div>

              {/* Visible when container ≥324px */}
              <p className="mt-3 max-w-full show-if-wide">
                I am a dynamic and adaptable professional <br />
                based in Brașov, Romania, with a global <br />
                outlook & commitment to teamwork.
                <br />
                Open to remote work worldwide.
              </p>

              {/* Visible when container <324px */}
              <p className="mt-3 max-w-full hide-if-wide">
                I am a dynamic and adaptable professional based in Brașov,
                Romania, with a global outlook & commitment to teamwork. Open to
                remote work worldwide.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-auto z-[30]">
              <span className="flex gap-2 items-center border px-3 py-1 rounded-full dark:bg-black-300/50 bg-white/20 backdrop-blur-md">
                <MapPin className="w-4 h-4" />
                Brașov, RO
              </span>
              <span className="flex gap-2 items-center border px-3 py-1 rounded-full dark:bg-black-300/50 bg-white/20 backdrop-blur-md">
                <Languages className="w-4 h-4" /> ENG, RO, IT, DE
              </span>
            </div>
            <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-xl z-[0]"></div>
            <GlobeComponent />
          </div>
        </div>

        <div className="xl:col-span-5  md:col-span-2 md:h-full h-fit z-20">
          <div className="grid-card-w-space h-full">
            <div className="space-y-2">
              <p className="font-normal text-xl mb-6">
                Have a project in mind?
              </p>
              <MyButton
                name={"Copy email"}
                containerClass={"w-full"}
                isBeam={false}
                click={() => handleCopy()}
                icon={<Copy className="w-4 h-4" />}
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-7 md:col-span-4 row-span-2 h-fit z-20">
          <div className="grid-card-w-space h-full">
            <p className="font-medium text-xl mb-4">Skill Progression</p>
            {/* Core Proficiencies */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-semibold text-blue-400">
                  Core Proficiencies
                </p>
                <span className="text-xs text-white-500">2+ years growth</span>
              </div>
              <div className="flex justify-evenly">
                <SkillBar
                  name="JavaScript"
                  level="80%"
                  color="rgba(250, 204, 21, 0.6)"
                />
                <SkillBar
                  name="HTML/CSS"
                  level="95%"
                  color="rgba(234, 88, 12, 0.6)"
                />
                <SkillBar
                  name="Tailwind CSS"
                  level="95%"
                  color="rgba(34, 211, 238, 0.6)"
                />
                <SkillBar
                  name="React"
                  level="90%"
                  color="rgba(6, 182, 212, 0.6)"
                />
                <SkillBar
                  name="Next.js"
                  level="90%"
                  color="rgba(255, 255, 255, 0.5)"
                />
                <SkillBar
                  name="Motion"
                  level="85%"
                  color="rgba(139, 92, 246, 0.4)"
                />
                <SkillBar
                  name="Three.js"
                  level="75%"
                  color="rgba(107, 114, 128, 0.4)"
                />
                <SkillBar
                  name="NextAuth.js"
                  level="80%"
                  color="rgba(224, 72, 234, 0.4)"
                />
              </div>
            </div>
            {/* Advanced Experience */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-green-400 mb-4">
                Advanced Experience
              </p>
              <div className="grid grid-cols-2 gap-4">
                <RadialSkill name="TypeScript" progress="80%" />
                <RadialSkill name="Prompting" progress="95%" />
                <RadialSkill name="REST APIs" progress="75%" />
                <RadialSkill name="Git" progress="80%" />
              </div>
            </div>
            {/* Growing Skills */}
            <div>
              <p className="text-sm font-semibold text-purple-400 mb-4">
                Actively Growing
              </p>
              <div className="flex flex-wrap gap-2">
                <SkillPill name="Three.js" />
                <SkillPill name="TypeScript" />
                <SkillPill name="Node.js" />
                <SkillPill name="SQLite" />
                <SkillPill name="MongoDB" />
              </div>
            </div>
            <p className="text-xs text-white-600 mt-4">
              Continuously expanding my skill set through personal projects and
              ongoing learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
