"use client";
import React from "react";
import { SkillPill } from "@/app/components/global/SkillsComponents";
import { RadialSkill } from "@/app/components/global/SkillsComponents";
import type { Skill } from "@/app/components/global/SkillsComponents";
import { motion } from "framer-motion";
import {
  containerAnimationVariants,
  itemAnimationVariants,
} from "@/utils/motion";

const skillBarItemVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      scaleY: { type: "spring", stiffness: 100, damping: 15, restDelta: 0.001 },
      opacity: { duration: 0.3 },
    },
  },
};

const radialItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      restDelta: 0.001,
    },
  },
};

const SkillBar: React.FC<Skill> = ({ name, level, color }) => {
  return (
    <div className="relative w-fit">
      <div className="md:flex justify-evenly text-xs mb-1 hidden">
        <span className="mx-auto select-none ">{level}</span>
      </div>
      <div className="relative w-6 xs:w-10 h-40 mt-4">
        <div
          className="absolute inset-0 rounded-t-3xl rounded-b-3xl overflow-hidden"
          style={{ opacity: 0.4, zIndex: -1 }}
        />
        <span className="absolute inset-0 -bottom-20 flex items-center text-sm z-10 text-nowrap -rotate-90 select-none pointer-events-none text-black">
          {name}
        </span>
        <div
          className="w-full h-full rounded-t-3xl rounded-b-3xl transition-all duration-300 absolute
             bottom-0 px-1 py-1  bg-black/20 dark:bg-white/20"
          style={{ opacity: 0.4 }}
        />
        <motion.div
          className="w-full rounded-t-3xl rounded-b-3xl absolute bottom-0 py-1 origin-bottom bg-white"
          style={{
            height: level,
            opacity: 1,
          }}
          variants={skillBarItemVariants}
          whileHover={{
            scaleY: 1.1,
            transition: { type: "spring", stiffness: 300, damping: 8 },
          }}
        />
      </div>
    </div>
  );
};

const SkillProgression = () => {
  const viewportConfig = { once: true, amount: 0.2 };

  return (
    <motion.section
      className="h-fit z-20 w-full"
      variants={containerAnimationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="flex flex-col gap-4 h-full w-full">
        <div className="flex flex-col gap-4 md:p-6 lg:p-8 lg:w-full mb-6 md:mb:0">
          <p className="font-medium text-sm opacity-70">EXPERTIZE</p>
          <div className="mt-auto">
            <h1 className="font-bold text-4xl md:text-5xl mb-4">
              Skill Progression{" "}
            </h1>
            <p className="opacity-60">
              Over the past two years, I&apos;ve made significant progress in
              mastering a wide range of skills. I&apos;ve dedicated myself to
              exploring and growing with various tools and technologies,
              consistently expanding my knowledge and capabilities in web
              development.
            </p>
          </div>
        </div>

        <div className="xl:flex gap-5">
          <motion.div
            className="card-w-space p-6 w-full mb-4 xl:mb-0"
            variants={itemAnimationVariants}
          >
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm font-semibold">Core Proficiencies</p>
              <span className="text-xs opacity-50">2+ years growth</span>
            </div>

            <motion.div
              className="grid grid-cols-[repeat(auto-fit,minmax(1.6rem,1fr))] md:flex flex-wrap md:gap-4 justify-evenly"
              variants={containerAnimationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <SkillBar
                name="JavaScript"
                level="90%"
                color="rgba(250, 204, 21)"
              />
              <SkillBar name="HTML/CSS" level="95%" color="rgba(234, 88, 12)" />
              <SkillBar name="React" level="90%" color="#017fa6" />
              <SkillBar name="Next" level="90%" color="rgba(200, 200, 200)" />
              <SkillBar name="Motion" level="85%" color="rgba(139, 92, 246)" />
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
            </motion.div>
          </motion.div>

          <div className="card-w-space p-6 w-full flex flex-col">
            <p className="text-sm font-semibold mb-8">Advanced Experience</p>

            <div className="w-full flex-1 min-h-0">
              <div className="grid gap-2 sm:gap-8 place-items-center grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] md:grid-cols-4 h-full">
                <motion.div variants={radialItemVariants}>
                  <RadialSkill
                    name="TypeScript"
                    progress={82}
                    color="#0078c9"
                  />
                </motion.div>
                <motion.div variants={radialItemVariants}>
                  <RadialSkill
                    name="REST APIs"
                    progress={80}
                    color="linear-gradient(90deg, rgba(62,62,212,1) 0%, rgba(87,76,205,1) 100%)"
                  />
                </motion.div>
                <motion.div variants={radialItemVariants}>
                  <RadialSkill name="Git" progress={78} color="#ed633e" />
                </motion.div>
                <motion.div variants={radialItemVariants}>
                  <RadialSkill
                    name="Prompting"
                    progress={90}
                    color="linear-gradient(90deg, rgba(78,38,157,1) 0%, rgba(247,101,121,1) 100%)"
                  />
                </motion.div>
                <motion.div variants={radialItemVariants}>
                  <RadialSkill
                    name="SQLite"
                    progress={73}
                    color="linear-gradient(90deg, rgba(14,126,201,1) 0%, rgba(152,224,251,1) 100%)"
                  />
                </motion.div>
                <motion.div variants={radialItemVariants}>
                  <RadialSkill name="TypeORM" progress={76} color="#f76568" />
                </motion.div>
                <motion.div variants={radialItemVariants}>
                  <RadialSkill name="Redux" progress={70} color="#7348b7" />
                </motion.div>
                <motion.div variants={radialItemVariants}>
                  <RadialSkill
                    name="Auth"
                    progress={80}
                    color="linear-gradient(90deg, rgba(144,81,217,1) 20%, rgba(0,212,255,1) 56%, rgba(47,225,189,1) 100%)"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="md:flex flex-grow gap-4 w-full"
          variants={containerAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div
            className="card-w-space w-full p-6 mb-5 md:mb-0"
            variants={itemAnimationVariants}
          >
            <p className="text-sm font-semibold mb-4 opacity-80">
              Actively Growing
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <SkillPill name="Three.js" /> <SkillPill name="TypeScript" />{" "}
              <SkillPill name="Node.js" />
              <SkillPill name="SQLite" /> <SkillPill name="MongoDB" />{" "}
              <SkillPill name="Auth" />
            </div>
            <p className="text-xs mt-auto opacity-80">
              Continuously expanding my skill set...
            </p>
          </motion.div>

          <motion.div
            className="card-w-space w-full p-6 mb-5 md:mb-0"
            variants={itemAnimationVariants}
          >
            <p className="text-sm font-semibold mb-4 opacity-80">
              Planning to Grow
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <SkillPill name="Docker" /> <SkillPill name="Deno" />{" "}
              <SkillPill name="GraphQL" />
              <SkillPill name="Kubernetes" /> <SkillPill name="React Native" />{" "}
              <SkillPill name="AWS" />
              <SkillPill name="Figma" /> <SkillPill name="Blender" />
            </div>
            <p className="text-xs mt-auto opacity-80">
              Focusing on enhancing my expertise...
            </p>
          </motion.div>

          <motion.div
            className="card-w-space w-full p-6 mb-5 md:mb-0"
            variants={itemAnimationVariants}
          >
            <p className="text-sm font-semibold opacity-60 mb-4">
              Other Skills & Tools
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <SkillPill name="Photoshop" /> <SkillPill name="Linux" />{" "}
              <SkillPill name="VS Code" />
              <SkillPill name="Postman" /> <SkillPill name="Markdown" />
            </div>
            <p className="text-xs mt-auto opacity-80">
              A diverse set of tools...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillProgression;
