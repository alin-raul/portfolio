"use client";

import React from "react";
import SkillDataProvider from "./SkillDataProvider";
import SkillProgression from "./SkillProgression";
import { SpinningIcons } from "./SpinningIcons";
import MonochromeCarousel from "@/app/components/global/MonochromeCarousel";
import { Frontend_Skills, Backend_Skills } from "@/constants";
import Blob from "@/app/components/effects/Blob";

const Skills = () => {
  return (
    <div className="relative max-w-[160rem] mt-40 mx-auto">
      <Blob
        blobClass="blob-2"
        position={{
          right: "5rem",
          top: "16rem",
        }}
        width="800px"
        height="700px"
      />
      <section
        id="skills"
        className="my-20 flex flex-col items-center justify-center h-full w-full relative overflow-hidden max-w-screen-2xl mx-auto"
      >
        <SkillProgression />
        {/* <SpinningIcons /> */}

        {/* <div className="w-full relative my-8">
        <MonochromeCarousel icons={Frontend_Skills} reverse={false} />
        <MonochromeCarousel icons={Backend_Skills} reverse={true} />
      </div> */}

        {/* <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => {
          return (
            <div
              className="flex items-center justify-center w-20 h-20"
              key={index}
            >
              <SkillDataProvider
                src={image.image}
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
                src={image.image}
                width={image.width}
                height={image.height}
                index={index}
                dynamicClass={image.dynamicClass}
              />
            </div>
          );
        })}
      </div> */}
      </section>
    </div>
  );
};

export default Skills;
