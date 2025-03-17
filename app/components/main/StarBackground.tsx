"use client";

import React, { useState, useRef, Suspense, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
import { buffer, random } from "maath";
import { useTheme } from "next-themes";
import { useMemo } from "react";

const StarBackground = () => {
  const ref = useRef<THREE.Group>(null); // Use specific type for ref
  const [sphere] = useState(
    () =>
      new Float32Array(random.inSphere(new Float64Array(600), { radius: 1.2 }))
  );

  const { theme, resolvedTheme } = useTheme();

  const starsStyle = useMemo(() => {
    return (theme === "system" ? resolvedTheme : theme) === "dark"
      ? "#fff"
      : "#0e0e0e";
  }, [theme, resolvedTheme]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={starsStyle}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = (): ReactNode => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
