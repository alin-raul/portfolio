"use client";

import React from "react";
import { Frontend_skill, Backend_skill } from "@/constants";
import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 pb-40 max-w-screen-xl mx-auto"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => {
          return (
            <div
              className="flex items-center justify-center w-20 h-20"
              key={index}
            >
              <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                dynamicClass={image.dynamicClass}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => {
          return (
            <div
              className="flex items-center justify-center w-20 h-20"
              key={index}
            >
              <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                dynamicClass={image.dynamicClass}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
