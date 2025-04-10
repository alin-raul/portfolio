"use client";

import React, { useRef } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useControls } from "leva";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";

// Constants
const MODEL_SCALE_FACTOR = 7;
const MOVEMENT_EASING = 0.1;
const MODEL_PATH = "/models/Text/Portfolio.glb";

// Type definitions
type PortfolioModelProps = React.ComponentProps<"group"> & {
  initialPosition?: [number, number, number];
};

type GLTFResult = GLTF & {
  nodes: {
    Portfolio: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

// Custom hook for material controls
const useMaterialControls = () => {
  return useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });
};

// Custom hook for smooth movement
const useSmoothMovement = (
  groupRef: React.RefObject<THREE.Group>,
  initialPosition: [number, number, number]
) => {
  useFrame((state) => {
    if (!groupRef.current) return;

    const { pointer, viewport } = state;
    const targetX = (pointer.x * viewport.width) / 2;
    const targetY = (pointer.y * viewport.height) / 2;

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      MOVEMENT_EASING
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      MOVEMENT_EASING
    );
    groupRef.current.position.z = initialPosition[2];
  });
};

export const PortfolioModel = ({
  initialPosition = [0, 0, 0],
  ...props
}: PortfolioModelProps) => {
  const groupRef = useRef<THREE.Group>(null!);
  const { viewport } = useThree();
  const materialProps = useMaterialControls();
  const { nodes } = useGLTF(MODEL_PATH) as unknown as GLTFResult;

  useSmoothMovement(groupRef, initialPosition);

  if (!nodes.Portfolio) {
    console.error("Error: Mesh 'Portfolio' not found in the GLB file!");
    return null;
  }

  return (
    <group
      ref={groupRef}
      position={initialPosition}
      scale={viewport.width / MODEL_SCALE_FACTOR}
      {...props}
      dispose={null}
    >
      <mesh geometry={nodes.Portfolio.geometry} rotation={[Math.PI / 2, 0, 0]}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

useGLTF.preload(MODEL_PATH);
