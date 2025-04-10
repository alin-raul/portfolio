"use client";

import React, { Suspense } from "react";
import StarsCanvas from "../../StarBackground";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@/app/components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import Astronaut from "./Astronaut";

const Hero3dModels = () => {
  return (
    <div className="w-full h-screen absolute inset-0">
      <StarsCanvas />

      <Canvas className="w-full h-full z-[1]">
        {/* <Suspense fallback={<CanvasLoader />}> */}
        <PerspectiveCamera makeDefault position={[0, 0, 80]} />
        <Astronaut scale={6} position={[20, -10, 0]} rotation={[0, 0, 0]} />
        {/* <PortfolioModel position={[0, -5, 14]} /> */}
        {/* </Suspense> */}
        <ambientLight intensity={1} />
        {/* <Environment preset="city" /> */}
        <directionalLight position={[30, 20, -30]} intensity={6} />
      </Canvas>
    </div>
  );
};

export default Hero3dModels;
