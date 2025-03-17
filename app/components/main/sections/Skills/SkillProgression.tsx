"use client";
import React, { useState } from "react";
import { SkillPill } from "@/app/components/global/SkillsComponents";
import { RadialSkill } from "@/app/components/global/SkillsComponents";
import type { Skill } from "@/app/components/global/SkillsComponents";

const SkillProgression = () => {
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
        <div className="w-10 h-40 relative mt-4">
          {/* Name label with disabled selection */}
          <span className="absolute inset-0 -bottom-20 flex items-center text-sm z-10 text-nowrap -rotate-90 select-none pointer-events-none text-white dark:text-black">
            {name}
          </span>

          {/* Progress bar */}
          <div
            className="w-full h-full rounded-t-3xl rounded-b-3xl transition-all duration-300 absolute outline-1 outline bottom-0 px-3 py-1 backdrop-blur-md bg-black/20 dark:bg-white/20"
            style={{
              // backgroundColor: isHovered ? color : "",
              opacity: 0.4,
            }}
          />
          <div
            className="w-full rounded-t-3xl rounded-b-3xl transition-all duration-300 absolute bottom-0 px-3 py-1 backdrop-blur-md bg-black dark:bg-white"
            style={{
              height: level,
              backgroundColor: isHovered ? color : "",
              opacity: 0.8,
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="h-fit z-20 w-full">
      <div className="flex flex-col gap-6 h-full w-full">
        <div className="lg:flex gap-4">
          <div className="flex flex-col gap-4 p-6 lg:p-8 lg:w-full">
            <p className="font-medium text-sm opacity-70">EXPERTIZE</p>
            <div className="mt-auto">
              <h1 className="font-bold text-5xl mb-4">Skill Progression </h1>
              <p className="opacity-60">
                Over the past two years, I&apos;ve made significant progress in
                mastering a wide range of skills. I&apos;ve dedicated myself to
                exploring and growing with various tools and technologies,
                consistently expanding my knowledge and capabilities in web
                development.
              </p>
            </div>
          </div>

          <div className="card-w-space p-6 w-full">
            {/* Core Proficiencies */}
            <div className="">
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm font-semibold">Core Proficiencies</p>
                <span className="text-xs opacity-50">2+ years growth</span>
              </div>
              <div className="flex gap-4 justify-evenly">
                <SkillBar
                  name="JavaScript"
                  level="90%"
                  color="rgba(250, 204, 21)"
                />
                <SkillBar
                  name="HTML/CSS"
                  level="95%"
                  color="rgba(234, 88, 12)"
                />

                <SkillBar name="React" level="90%" color="#017fa6" />
                <SkillBar name="Next" level="90%" color="rgba(255, 255, 255)" />
                <SkillBar
                  name="Motion"
                  level="85%"
                  color="rgba(139, 92, 246)"
                />
                <SkillBar name="Tailwind CSS" level="95%" color="#35baf3" />
                <SkillBar
                  name="Three.js"
                  level="75%"
                  color="rgba(107, 114, 128)"
                />
                <SkillBar
                  name="Next Auth"
                  level="80%"
                  color="rgba(224, 72, 234)"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Advanced Experience */}
        <div className="card-w-space p-6">
          <p className="text-sm font-semibold mb-8">Advanced Experience</p>
          <div className="flex flex-grow flex-wrap justify-center items-center w-full gap-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full justify-items-center mb-4">
              <RadialSkill name="TypeScript" progress={82} color="#0078c9" />
              <RadialSkill
                name="REST APIs"
                progress={80}
                color="linear-gradient(90deg, rgba(62,62,212,1) 0%, rgba(87,76,205,1) 100%)"
              />
              <RadialSkill name="Git" progress={78} color="#ed633e" />
              <RadialSkill
                name="Prompting"
                progress={90}
                color="linear-gradient(90deg, rgba(78,38,157,1) 0%, rgba(247,101,121,1) 100%)"
              />
              <RadialSkill
                name="SQLite"
                progress={73}
                color="linear-gradient(90deg, rgba(14,126,201,1) 0%, rgba(152,224,251,1) 100%)"
              />
              <RadialSkill name="TypeORM" progress={76} color="#f76568" />
              <RadialSkill name="Redux" progress={70} color="#7348b7" />
              <RadialSkill
                name="Auth"
                progress={80}
                color="linear-gradient(90deg, rgba(144,81,217,1) 20%, rgba(0,212,255,1) 56%, rgba(47,225,189,1) 100%)"
              />
            </div>
          </div>
        </div>
        {/* Growing Skills */}
        <div className="md:flex flex-grow gap-5 w-full">
          <div className="card-w-space w-full p-6 mb-5 md:mb-0">
            <p className="text-sm font-semibold mb-4 opacity-80">
              Actively Growing
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <SkillPill name="Three.js" />
              <SkillPill name="TypeScript" />
              <SkillPill name="Node.js" />
              <SkillPill name="SQLite" />
              <SkillPill name="MongoDB" />
              <SkillPill name="Auth" />
            </div>
            <p className="text-xs mt-auto opacity-80">
              Continuously expanding my skill set through personal projects and
              ongoing learning
            </p>
          </div>
          <div className="card-w-space w-full p-6 mb-5 md:mb-0">
            <p className="text-sm font-semibold mb-4 opacity-80">
              Planning to Grow
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <SkillPill name="Docker" />
              <SkillPill name="Deno" />
              <SkillPill name="GraphQL" />
              <SkillPill name="Kubernetes" />
              <SkillPill name="React Native" />
              <SkillPill name="AWS" />
              <SkillPill name="Figma" />
              <SkillPill name="Blender" />
            </div>
            <p className="text-xs mt-auto opacity-80">
              Focusing on enhancing my expertise in emerging technologies and
              tools to stay ahead in the industry.
            </p>
          </div>
          <div className="card-w-space w-full p-6 mb-5 md:mb-0">
            <p className="text-sm font-semibold opacity-60 mb-4">
              Other Skills & Tools
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <SkillPill name="Photoshop" />
              <SkillPill name="Linux" />
              <SkillPill name="VS Code" />
              <SkillPill name="Postman" />
              <SkillPill name="Markdown" />
            </div>
            <p className="text-xs mt-auto opacity-80">
              A diverse set of tools and platforms I use regularly for
              development, design, and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgression;
