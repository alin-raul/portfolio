import React from "react";
import { GridCard, Section } from "./Curriculum";
import Image from "next/image";
import { TechStack, designTools, otherSkills } from "@/constants";

const SkillsSection = () => (
  <Section title="Skills">
    <div className="lg:grid grid-cols-8 gap-8 mt-10">
      <CodingSkills />
      <DesignSkills />
      <LanguageSkills />
      <OtherSkills />
    </div>
  </Section>
);

const CodingSkills = () => (
  <GridCard className="col-span-5 p-4 sm:p-8 mb-4 lg:mb-0">
    <h3 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-6">
      Coding
    </h3>
    <div className="grid grid-cols-4 sm:grid-cols-8 gap-6 justify-items-center items-center w-full">
      {TechStack.map(({ skill_name, icon, color }) => {
        const IconComponent = icon;
        return (
          <div
            key={skill_name}
            className="w-fit h-fit flex flex-wrap gap-2 justify-around items-center aspect-square bg-primary-foreground p-2.5 rounded-[1.2rem]"
          >
            <abbr title={skill_name}>
              <IconComponent
                className={`text-2xl sm:text-4xl xl:text-5xl opacity-80 ${color}`}
              />
            </abbr>
          </div>
        );
      })}
    </div>
  </GridCard>
);

const DesignSkills = () => (
  <GridCard className="col-span-3 p-4 sm:p-8 mb-4 lg:mb-0">
    <h3 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-6">
      Design Tools
    </h3>
    <div className="flex justify-between items-center">
      {designTools.map(({ name, icon, width, height }) => (
        <Image
          key={name}
          src={icon}
          alt={name}
          draggable={false}
          width={width}
          height={height}
        />
      ))}
    </div>
  </GridCard>
);

const LanguageSkills = () => (
  <GridCard className="col-span-2 p-4 sm:p-8 flex flex-col mb-4 lg:mb-0">
    <h3 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-6">
      Languages
    </h3>
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex justify-around text-3xl w-full">
        {["🇷🇴", "🇮🇹", "🇬🇧", "🇩🇪"].map((flag) => (
          <h1 key={flag}>{flag}</h1>
        ))}
      </div>
    </div>
  </GridCard>
);

const OtherSkills = () => (
  <GridCard className="col-span-6 p-4 sm:p-8">
    <h3 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-6">
      Other
    </h3>
    <div className="flex justify-between items-center">
      {otherSkills.map(({ name, icon, width, height, reverse }) => (
        <abbr key={name} title={name}>
          <Image
            src={icon}
            alt={name}
            draggable={false}
            width={width}
            height={height}
            className={reverse ? "dark:invert invert-0" : ""}
          />
        </abbr>
      ))}
    </div>
  </GridCard>
);

export default SkillsSection;
