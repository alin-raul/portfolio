"use client";

import React from "react";
import SkillProgression from "./SkillProgression";

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
        className="my-60 flex flex-col items-center justify-center h-full w-full relative overflow-hidden max-w-screen-2xl mx-auto"
      >
        <SkillProgression />
      </section>
    </div>
  );
};

export default Skills;
