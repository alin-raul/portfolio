import React from "react";
import TextWeightGradient from "./TextWeightGradient";

function HeroTextSection() {
  return (
    <div
      id="home"
      className="px-4 w-full h-full z-[40] relative max-w-screen-xl mx-auto mt-[8px]"
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <TextWeightGradient />
      </div>
    </div>
  );
}

export default HeroTextSection;
