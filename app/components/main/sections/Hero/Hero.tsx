"use client";

import React, { Suspense } from "react";
import HeroContent from "./HeroContent";
import Blob from "@/app/components/effects/Blob";
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
import StarsCanvas from "../../StarBackground";
import MovingLightShade from "@/app/components/effects/MovingLightShade";

const Hero = () => {
  return (
    <div className="relative max-w-[160rem] m-auto">
      <Blob
        blobClass="blob-1"
        position={{
          right: "-1rem",
          top: "20rem",
        }}
        width="500px"
        height="500px"
      />
      <section
        className="flex flex-col h-screen w-full max-w-screen-2xl mx-auto"
        id="hero"
      >
        <div className="w-full h-screen absolute inset-0">
          <StarsCanvas />

          <Canvas className="w-full h-full z-[1]">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 80]} />
              <Astronaut
                scale={6}
                position={[20, -16, 0]}
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
                <BlackHole
                  position={[0, 0, -1]}
                  scale={3}
                  rotation={[0, 1, 0]}
                />
              </group> */}
            </Suspense>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Canvas>
        </div>

        <div className="absolute top-[75rem] right-0 left-0 opacity-30">
          {/* <MovingLightShade fill="rgb(67, 21, 221)" /> */}
        </div>
        <HeroContent />
      </section>
    </div>
  );
};

export default Hero;
