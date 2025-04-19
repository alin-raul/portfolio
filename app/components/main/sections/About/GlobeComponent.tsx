"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import * as THREE from "three";
import { Feature } from "geojson";

// --- Constants ---
const ROTATION_SPEED = 0.15;
const AXIAL_TILT_DEGREES = 23.5;

// Convert DD°MM′SS″ to Decimal Degrees
const dmsToDecimal = (
  degrees: number,
  minutes: number,
  seconds: number,
  direction: "N" | "S" | "E" | "W"
) => {
  let decimal = degrees + minutes / 60 + seconds / 3600;
  if (direction === "S" || direction === "W") {
    decimal *= -1;
  }
  return decimal;
};

// Your Location Coordinates (Brașov, Romania)
const MY_LAT = dmsToDecimal(45, 39, 0, "N"); // 45.65
const MY_LNG = dmsToDecimal(25, 36, 36, "E"); // 25.61

// --- Component Props Interface ---
interface DotGlobeComponentProps {
  geojsonPath?: string;
  dotResolution?: number;
  dotMargin?: number;
  backgroundColor?: string;
  atmosphereColor?: string;
  /** Canvas width (pixels) */
  width?: number; // Changed to number | undefined
  /** Canvas height (pixels) */
  height?: number; // Changed to number | undefined
  /** X offset within canvas (pixels from center) */
  globeOffsetX?: number;
  /** Y offset within canvas (pixels from center, positive likely DOWN) */
  globeOffsetY?: number;
  /** Uniform scale factor for the 3D globe object */
  globeScaleFactor?: number;
}

// --- The Globe Component ---
export default function GlobeComponent({
  geojsonPath = "/data/countries.geojson",
  dotResolution = 3,
  dotMargin = 0.2,
  backgroundColor = "rgba(0,0,0,0)",
  atmosphereColor = "#fff",
  width,
  height,
  globeOffsetX = 0,
  globeOffsetY = 0,
  globeScaleFactor = 1,
}: DotGlobeComponentProps) {
  const [landPolygons, setLandPolygons] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const globeObjectRef = useRef<THREE.Object3D | null>(null);

  const [baseInitialAltitude] = useState(2.0);

  // --- Data for your location point ---
  const myLocationPoint = useMemo(() => [{ lat: MY_LAT, lng: MY_LNG }], []); // Memoize the single point data

  // --- Data Loading Effect (No changes) ---
  useEffect(() => {
    setIsLoading(true);
    sceneRef.current = null;
    globeObjectRef.current = null;
    fetch(geojsonPath)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            `HTTP error! status: ${res.status} for ${geojsonPath}`
          );
        return res.json();
      })
      .then((data) => {
        const features =
          data.features ||
          (data.type === "FeatureCollection" ? data.features : []);
        if (!Array.isArray(features))
          throw new Error(
            `GeoJSON file "${geojsonPath}" does not contain a valid FeatureCollection.`
          );
        setLandPolygons(features as Feature[]);
      })
      .catch((error) => {
        console.error("Error loading GeoJSON data:", error);
        setLandPolygons([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [geojsonPath]);

  // --- Globe Material (No changes) ---
  const globeMaterial = useMemo(
    () => new THREE.MeshBasicMaterial({ color: "#fff" }),
    []
  );

  // --- Find Globe Object & Apply ONLY Scale/Tilt (No changes) ---
  useEffect(() => {
    if (isLoading || !globeEl.current || !globeScaleFactor) return;
    if (!sceneRef.current) sceneRef.current = globeEl.current.scene();
    const scene = sceneRef.current;
    if (!scene) return;
    if (!globeObjectRef.current) {
      const potentialGlobe = scene.children.find(
        (child) => child instanceof THREE.Group || child instanceof THREE.Mesh
      );
      if (potentialGlobe) {
        globeObjectRef.current = potentialGlobe;
        console.log("Found Globe Object:", globeObjectRef.current);
      } else {
        console.warn("Could not find Globe Object.");
        return;
      }
    }
    const globeObject = globeObjectRef.current;
    if (!globeObject) return;
    const targetRotationX = (AXIAL_TILT_DEGREES * Math.PI) / 180;
    if (globeObject.rotation.x !== targetRotationX)
      globeObject.rotation.x = targetRotationX;
    if (
      globeObject.scale.x !== globeScaleFactor ||
      globeObject.scale.y !== globeScaleFactor ||
      globeObject.scale.z !== globeScaleFactor
    ) {
      globeObject.scale.set(
        globeScaleFactor,
        globeScaleFactor,
        globeScaleFactor
      );
      console.log(`Applied globe scale factor: ${globeScaleFactor}`);
    }
  }, [isLoading, globeScaleFactor]);

  // --- Auto-Rotation & Camera Positioning Effect ---
  // Modified slightly to initially focus on your location
  useEffect(() => {
    if (isLoading || !globeEl.current || !globeScaleFactor) return;
    let frameId: number | null = null;
    const safeScaleFactor = Math.max(0.1, globeScaleFactor);
    const adjustedInitialAltitude = baseInitialAltitude / safeScaleFactor;

    // Point camera to your location initially
    globeEl.current.pointOfView(
      {
        lat: MY_LAT, // Use your location lat
        lng: MY_LNG, // Use your location lng
        altitude: adjustedInitialAltitude,
      },
      0 // Duration 0 for instant move
    );

    // Add a slight delay before starting rotation so the user sees the initial location
    const rotationTimeout = setTimeout(() => {
      if (!globeEl.current) return;
      let lastPov = globeEl.current.pointOfView();
      const rotateGlobe = () => {
        if (globeEl.current && lastPov) {
          const currentLng = lastPov.lng || 0;
          const nextLng = currentLng + ROTATION_SPEED;
          lastPov = { ...lastPov, lng: nextLng };
          globeEl.current.pointOfView(
            { lat: lastPov.lat, lng: nextLng, altitude: lastPov.altitude },
            0
          );
        } else if (globeEl.current) {
          lastPov = globeEl.current.pointOfView();
        }
        if (frameId !== null) frameId = requestAnimationFrame(rotateGlobe);
      };
      frameId = requestAnimationFrame(rotateGlobe);
    }, 1000); // Start rotation after a 1 second delay

    return () => {
      clearTimeout(rotationTimeout);
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
    };
  }, [isLoading, baseInitialAltitude, globeScaleFactor]); // initialCoords is now based on MY_LAT/MY_LNG

  // --- Render the Globe ---
  if (isLoading) {
    // Render a placeholder div with the intended size during loading
    return (
      <div
        style={{
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "grey",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <Globe
      ref={globeEl}
      // --- Direct Canvas Control ---
      width={width}
      height={height}
      globeOffset={[globeOffsetX, globeOffsetY]}
      backgroundColor={backgroundColor}
      // Appearance
      globeMaterial={globeMaterial}
      globeImageUrl={null} // Using dots instead of image
      // Atmosphere
      showAtmosphere={true}
      atmosphereColor={atmosphereColor}
      atmosphereAltitude={0.22}
      // Dots for Land Polygons
      hexPolygonsData={landPolygons}
      hexPolygonUseDots={true}
      hexPolygonColor={() => "#b9b9b9"}
      hexPolygonResolution={dotResolution}
      hexPolygonMargin={dotMargin}
      hexPolygonLabel={undefined}
      // Your Location Point
      pointsData={myLocationPoint} // Add the data for your point
      pointAltitude={0.005} // Altitude above the surface (slightly above dots)
      pointRadius={0.3} // Size of the point (relative to globe radius 1)
      pointColor={() => "red"} // Color of the point
      pointResolution={12} // Resolution for the sphere geometry
      enablePointerInteraction={false}
    />
  );
}
