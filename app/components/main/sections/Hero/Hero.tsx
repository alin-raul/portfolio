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
    <section className="flex flex-col h-screen-minus-nav w-full max-w-screen-2xl mx-auto">
      <div className="w-full h-screen absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Astronaut scale={1.6} position={[4, -4, 4]} rotation={[0, 0, 0]} />

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
  );
};

export default Hero;
