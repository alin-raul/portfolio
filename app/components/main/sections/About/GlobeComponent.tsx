"use client";

import { useTheme } from "next-themes";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { mergeBufferGeometries, RenderPass, ShaderPass } from "three-stdlib";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

interface GlobeProps {
  maskImage: string;
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: THREE.Euler | [number, number, number, THREE.EulerOrder?];
}

const SPHERE_RADIUS = 15;
const LATITUDE_COUNT = 120; // Increased for better distribution
const DOT_DENSITY = 3; // Increased density
const DOT_SIZE = 0.12;
const BLACK_THRESHOLD = 50; // RGB value threshold for black detection

const spherePointToUV = (
  dotCenter: THREE.Vector3,
  sphereCenter: THREE.Vector3
) => {
  const newVector = new THREE.Vector3();
  newVector.subVectors(dotCenter, sphereCenter).normalize();
  const uvX = 0.5 + Math.atan2(newVector.z, newVector.x) / (2 * Math.PI);
  const uvY = 0.5 - Math.asin(newVector.y) / Math.PI;
  return new THREE.Vector2(uvX, uvY);
};

const sampleImage = (imageData: ImageData, uv: THREE.Vector2) => {
  const x = Math.floor(uv.x * imageData.width);
  const y = Math.floor((1 - uv.y) * imageData.height);
  const point = (y * imageData.width + x) * 4;
  return imageData.data.slice(point, point + 4);
};

const Dots = ({
  maskImage,
  dotColor,
}: {
  maskImage: string;
  dotColor: string;
}) => {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = maskImage;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);

      const dotGeometries: THREE.BufferGeometry[] = [];
      const vector = new THREE.Vector3();

      for (let lat = 0; lat < LATITUDE_COUNT; lat++) {
        const angle = (-90 + (180 / LATITUDE_COUNT) * lat) * (Math.PI / 180);
        const radius = Math.cos(angle) * SPHERE_RADIUS;
        const latitudeCircumference = radius * Math.PI * 2;
        const latitudeDotCount = Math.ceil(latitudeCircumference * DOT_DENSITY);

        for (let dot = 0; dot < latitudeDotCount; dot++) {
          const phi = (Math.PI / LATITUDE_COUNT) * lat;
          const theta = ((2 * Math.PI) / latitudeDotCount) * dot;
          vector.setFromSphericalCoords(SPHERE_RADIUS, phi, theta);

          const uv = spherePointToUV(vector, new THREE.Vector3());
          const pixel = sampleImage(imageData, uv);

          // Check for black pixels (land)
          if (
            pixel[0] < BLACK_THRESHOLD &&
            pixel[1] < BLACK_THRESHOLD &&
            pixel[2] < BLACK_THRESHOLD
          ) {
            const dotGeometry = new THREE.CircleGeometry(DOT_SIZE, 5);
            dotGeometry.lookAt(vector);
            dotGeometry.translate(vector.x, vector.y, vector.z);
            dotGeometries.push(dotGeometry);
          }
        }
      }

      if (dotGeometries.length > 0) {
        const merged = mergeBufferGeometries(dotGeometries);
        if (merged) {
          merged.computeBoundingSphere();
          merged.computeVertexNormals();
          setGeometry(merged);
        }
      }
    };
  }, [maskImage]);

  return geometry ? (
    <mesh geometry={geometry} layers={0}>
      <meshBasicMaterial
        color={dotColor}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  ) : null;
};

const Globe = ({
  maskImage,
  position = [40, -20, 0],
  scale = [2, 2, 2],
}: GlobeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { resolvedTheme } = useTheme();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group position={position} scale={scale} rotation={[0.3, 1.1, 0]}>
      {/* Axial tilt group */}
      <group rotation={[(-23.5 * Math.PI) / 180, 0, 0]}>
        {/* Rotation group */}
        <group ref={groupRef}>
          {/* Y-axis inversion group */}
          <group scale={[1, -1, -1]}>
            <mesh receiveShadow={false} castShadow={false}>
              <sphereGeometry args={[SPHERE_RADIUS, 64, 64]} />
              <meshBasicMaterial color="#fafafa" transparent={false} />
            </mesh>
            <Dots maskImage={maskImage} dotColor="#ababab" />
          </group>
        </group>
      </group>
    </group>
  );
};

export default function GlobeComponent() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 220], fov: 20 }}>
        <Globe maskImage="/assets/earth.webp" scale={[3, 3, 3]} />

        <EffectComposer>
          <Bloom
            intensity={resolvedTheme === "dark" ? 8 : 2}
            kernelSize={resolvedTheme === "dark" ? 5 : 4}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
