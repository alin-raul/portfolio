"use client";

import React, { useRef, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";

type Props = {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
};

type AstronautNodes = {
  Object_7: THREE.SkinnedMesh;
  Object_8: THREE.SkinnedMesh;
  Object_9: THREE.SkinnedMesh;
  Object_10: THREE.SkinnedMesh;
  Object_11: THREE.SkinnedMesh;
  Object_12: THREE.SkinnedMesh;
  Object_13: THREE.SkinnedMesh;
  _rootJoint: THREE.Object3D;
  [key: string]: THREE.Object3D | THREE.SkinnedMesh;
};

type AstronautMaterials = {
  Astronaut_mat: THREE.Material;
  "Mat.1": THREE.Material;
  "Mat.2": THREE.Material;
  "Mat.3": THREE.Material;
  "Mat.4": THREE.Material;
};

const AstronautModel = ({ url, ...props }: Props & { url: string }) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(url) as unknown as GLTF & {
    nodes: AstronautNodes;
    materials: AstronautMaterials;
  };

  const { actions } = useAnimations(animations, group);

  // Animation and movement setup
  const initialPosition = useMemo(
    () => new THREE.Vector3(...props.position),
    [props.position]
  );
  const driftVelocity = useRef(new THREE.Vector3());
  const positionOffset = useRef(new THREE.Vector3());
  const bobAmplitude = 0.2;
  const bobFrequency = 0.2;

  // Play animation
  useEffect(() => {
    if (actions && animations.length > 0) {
      const actionName = animations[0].name;
      actions[actionName]?.setEffectiveTimeScale(0.5).play();

      driftVelocity.current.set(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
    }
  }, [actions, animations]);

  // Animation frame
  useFrame((state, delta) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();

      // Bobbing effect
      const bob = new THREE.Vector3(
        Math.sin(t * bobFrequency) * bobAmplitude,
        Math.cos(t * bobFrequency * 1.2) * bobAmplitude,
        Math.sin(t * bobFrequency * 0.8) * bobAmplitude
      );

      // Accumulate drift offset
      positionOffset.current.add(
        driftVelocity.current.clone().multiplyScalar(delta)
      );

      // Update position
      group.current.position
        .copy(initialPosition)
        .add(bob)
        .add(positionOffset.current);

      // Smooth rotation
      group.current.rotation.x += delta * 0.01;
      group.current.rotation.y += delta * 0.005;
      group.current.rotation.z += delta * 0.006;
    }
  });

  return (
    <group ref={group} scale={props.scale} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.687}
        >
          <group
            name="a2d102a266ba49a28c0b4ae14e745f31fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials["Mat.1"]}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Mat.4"]}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials["Mat.3"]}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials["Mat.2"]}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <group name="Object_6" position={[0, 0, -1.878]} />
                  <group name="Subdivision_Surface_1">
                    <group name="Astronaut_mesh_1" position={[0, 0, -1.878]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

const Astronaut: React.FC<Props> = (props) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only render on the client
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return resolvedTheme === "dark" ? (
    <AstronautModel {...props} url="/models/Astronaut-dark/scene.gltf" />
  ) : (
    <AstronautModel {...props} url="/models/Astronaut/scene.gltf" />
  );
};

// Preload both models for instant switching
useGLTF.preload("/models/Astronaut/scene.gltf");
useGLTF.preload("/models/Astronaut-dark/scene.gltf");

export default Astronaut;
