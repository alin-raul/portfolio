"use client";

import React from "react";
import HeroContent from "../../sub/HeroContent";
import Blobs from "../../effects/blobs/Blobs";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Astronaut from "./Astronaut";

const Hero = () => {
  return (
    <section className="flex flex-col h-screen-minus-nav w-full max-w-screen-2xl mx-auto">
      {/* <video
        autoPlay
        muted
        loop
        className="absolute top-[6rem] left-1/2 -translate-x-1/2 z-[-10] w-full h-full object-contain mx-auto invert hue-rotate-[180deg]"
      >
        <source src="/assets/blackhole.webm" type="video/webm" />
      </video> */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <Astronaut scale={1} position={[0, 6, 0]} rotation={[0, 0, 0]} />
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
