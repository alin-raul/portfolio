"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

export default function SpriteAnimator() {
  const [currentFrame, setCurrentFrame] = useState(0);

  // Memoize frames array to maintain stable reference
  const frames = useMemo(
    () => ["/sprites/cat_frame_1.webp", "/sprites/cat_frame_2.webp"],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [frames.length]); // Added frames.length to dependencies

  return (
    <div
      style={{
        position: "relative",
        width: "8rem",
        height: "8rem",
      }}
      className="border-b-4 border-[#313131] mx-auto mt-auto w-full h-full"
    >
      {frames.map((frame, index) => (
        <Image
          key={frame}
          src={frame}
          alt="Cat sprite frame"
          fill
          style={{
            position: "absolute",
            opacity: currentFrame === index ? 1 : 0,
            transition: "none",
            pointerEvents: "none",
            imageRendering: "pixelated",
          }}
          sizes="(max-width: 768px) 64px, 64px"
          className="translate-y-2 "
        />
      ))}
    </div>
  );
}
