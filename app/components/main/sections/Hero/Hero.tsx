import React from "react";
import Blob from "@/app/components/effects/Blob";
import TextWeightGradient from "./TextWeightGradient";

import Hero3dModels from "./Hero3dModels";

const Hero = () => {
  return (
    <div className="relative max-w-[160rem] m-auto">
      <Blob
        blobClass="blob-1"
        position={{
          right: "-1rem",
          top: "40%",
        }}
        width="600px"
        height="500px"
      />
      <section
        className="flex flex-col h-[50rem] md:h-screen w-full max-w-screen-2xl mx-auto "
        id="hero"
      >
        {/* <Hero3dModels /> */}

        <div className="absolute top-[75rem] right-0 left-0 opacity-30">
          {/* <MovingLightShade fill="rgb(67, 21, 221)" /> */}
        </div>
        <div
          id="home"
          className="px-4 w-full h-full z-[40] relative max-w-screen-xl mx-auto mt-[8px]"
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <TextWeightGradient />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
