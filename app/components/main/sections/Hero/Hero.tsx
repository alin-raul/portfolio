"use client";

import React, { Suspense } from "react";
import HeroContent from "./HeroContent";
import Blobs from "../../../effects/blobs/Blobs";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { PerspectiveCamera } from "@react-three/drei";
import Astronaut from "./Astronaut";
import CanvasLoader from "../../../CanvasLoader";
import BlackHole from "./BlackHole";

const Hero = () => {
  return (
    <>
      {/* <div className="absolute inset-0 h-screen-minus-nav opacity-40 text-[18rem] 2xl:text-[26rem] font-title font-extrabold leading-none z-[-1] text-nowrap blur-xl -tracking-[2rem] lg:tracking-[0.5rem] 2xl:tracking-[1rem]">
        <span className="absolute top-0 left-0 transform translate-x-4 translate-y-4 .text-shine ">
          FULL-STACK
        </span>

        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center .text-shine text-[22rem] 2xl:text-[26rem]">
          WEB
        </span>

        <span className="absolute bottom-4 right-8 transform translate-x-4 translate-y-4 .text-shine">
          DEVELOPER
        </span>
      </div> */}

      <section
        className="flex flex-col h-screen-minus-nav w-full max-w-screen-2xl mx-auto"
        id="hero"
      >
        <div className="w-full h-screen absolute inset-0">
          <Canvas className="w-full h-full z-[1]">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 80]} />
              <Astronaut
                scale={6}
                position={[20, -20, 0]}
                rotation={[0, 0, 0]}
              />

              {/* <group>
              <EffectComposer>
                <Bloom
                  intensity={0.3}
                  luminanceThreshold={1.5}
                  luminanceSmoothing={1.9}
                  height={900}
                />
                <ChromaticAberration
                  offset={[0.002, 0.002]}
                  radialModulation={true}
                />
              </EffectComposer>
              <BlackHole position={[0, 0, -1]} scale={3} rotation={[0, 1, 0]} />
            </group> */}
            </Suspense>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Canvas>
        </div>

        <Blobs />
        <HeroContent />
      </section>
    </>
  );
};

export default Hero;
