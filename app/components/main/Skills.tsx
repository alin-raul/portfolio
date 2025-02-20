import React from "react";
import {
  Frontend_skill,
  Backend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

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
              />
            </div>
          );
        })}
      </div>

      {/* <div className="absolute h-full w-full">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            src="/assets/cards-video.webm"
            preload="false"
            playsInline
            autoPlay
            muted
            loop
            className="w-full h-auto"
          ></video>
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
