"use client";

import React, { useRef } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useControls } from "leva";
import * as THREE from "three";

type PortfolioModelProps = React.ComponentProps<"group"> & {};

type GLTFResult = GLTF & {
  nodes: {
    Portfolio: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    // Add other materials here
  };
};

export const PortfolioModel = ({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  ...props
}: PortfolioModelProps) => {
  const { nodes } = useGLTF(
    "/models/Text/Portfolio.glb"
  ) as unknown as GLTFResult;

  const meshRef = useRef<THREE.Mesh>(null!);

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  if (!nodes.Portfolio) {
    console.error("Error: Mesh 'Portfolio' not found in the GLB file!");
    return null; // Or return some fallback
  }

  return (
    <group position={position} scale={scale} {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.Portfolio.geometry}
        // material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/Text/Portfolio.glb");
