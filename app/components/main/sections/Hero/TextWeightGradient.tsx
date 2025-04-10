"use client";

import React, { useRef, useEffect, useState, RefObject } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
  animate,
  useInView,
  // easeInOut, // No longer explicitly needed if only used in animate's options
} from "framer-motion";
import { Card } from "../About/About"; // Assuming correct path
import Link from "next/link";
import {
  slideInFromTop,
  slideInFromLeft,
  // slideInFromRight, // Not used in the provided snippet
} from "@/utils/motion"; // Assuming correct path
import { ArrowUpRight } from "lucide-react";

// --- Constants ---
const MOBILE_BREAKPOINT = 768; // pixels
const WAVE_DURATION_SECONDS = 4; // Duration for ONE FULL back-and-forth cycle
const MIN_FONT_WEIGHT = 100;
const MAX_FONT_WEIGHT = 900;
const DESKTOP_EFFECT_RADIUS_PX = 400; // pixels
const MOBILE_EFFECT_RADIUS_PX = 250; // pixels: Adjust width of the wave's bold peak
const DEFAULT_FONT_WEIGHT_SETTING = `'wght' ${MIN_FONT_WEIGHT}`;

// --- Hooks ---

/**
 * Custom hook to detect if the viewport is below the mobile breakpoint.
 */
function useIsMobile(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ensure window is defined (for SSR compatibility if needed later)
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

// --- Helper Functions ---

/**
 * Calculates the CSS font-variation-settings string based on distance.
 */
function calculateFontWeightSetting(
  distance: number,
  effectRadius: number,
  minWeight: number = MIN_FONT_WEIGHT,
  maxWeight: number = MAX_FONT_WEIGHT
): string {
  const weightMultiplier = Math.max(0, 1 - distance / effectRadius);
  const calculatedWeight =
    minWeight + (maxWeight - minWeight) * weightMultiplier;
  return `'wght' ${Math.round(calculatedWeight)}`;
}

// --- Helper Component: Letter ---
interface LetterProps {
  letter: string;
  isInView: boolean;
  isMobile: boolean;
  viewportMouseX: MotionValue<number>;
  wavePosition: MotionValue<number>; // Animated wave position (0 to 1)
  containerRef: RefObject<HTMLDivElement | null>;
}

function Letter({
  letter,
  isInView,
  isMobile,
  viewportMouseX,
  wavePosition,
  containerRef,
}: LetterProps) {
  const letterRef = useRef<HTMLSpanElement>(null);

  // Calculate weight based on mouse position (desktop)
  const mouseDrivenWeight = useTransform(
    viewportMouseX,
    (latestViewportMouseX) => {
      if (
        !letterRef.current ||
        !containerRef.current ||
        !isFinite(latestViewportMouseX)
      ) {
        return DEFAULT_FONT_WEIGHT_SETTING;
      }
      const containerBounds = containerRef.current.getBoundingClientRect();
      const letterCenterViewport =
        containerBounds.left +
        letterRef.current.offsetLeft +
        letterRef.current.offsetWidth / 2;
      const distance = Math.abs(latestViewportMouseX - letterCenterViewport);

      return calculateFontWeightSetting(distance, DESKTOP_EFFECT_RADIUS_PX);
    }
  );

  // Calculate weight based on animated wave position (mobile)
  const waveDrivenWeight = useTransform(wavePosition, (latestWavePos) => {
    if (!letterRef.current || !containerRef.current) {
      return DEFAULT_FONT_WEIGHT_SETTING;
    }
    const containerWidth = containerRef.current.offsetWidth;
    const wavePeakPosition = containerWidth * latestWavePos; // Pixel position of wave peak
    const letterCenterContainer =
      letterRef.current.offsetLeft + letterRef.current.offsetWidth / 2;
    const distance = Math.abs(wavePeakPosition - letterCenterContainer);

    return calculateFontWeightSetting(distance, MOBILE_EFFECT_RADIUS_PX);
  });

  // Determine which style to apply based on view, device, and interaction
  const dynamicFontWeight = !isInView
    ? DEFAULT_FONT_WEIGHT_SETTING
    : isMobile
    ? waveDrivenWeight
    : mouseDrivenWeight;

  return (
    <motion.span
      ref={letterRef}
      style={{
        fontVariationSettings: dynamicFontWeight,
        position: "relative", // Needed for offsetLeft calculation
        display: "inline-block",
      }}
    >
      {/* Use non-breaking space for actual spaces */}
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
}

// --- Helper Component: StyledLinkCard ---
interface StyledLinkCardProps {
  href: string;
  text: string;
  slideInDelay: number;
  className?: string;
}

function StyledLinkCard({
  href,
  text,
  slideInDelay,
  className = "",
}: StyledLinkCardProps) {
  const commonCardClasses =
    "group w-fit px-5 hover:px-6 py-4 rounded-3xl flex gap-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 backdrop-blur-md bg-[var(--bg-dynamic-1)] hover:bg-white/100 dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-xl";
  const commonSpanClasses =
    "group-hover:opacity-100 cursor-pointer flex justify-center items-center gap-1 transition-opacity duration-400";
  const commonIconClasses =
    "opacity-70 hidden hover:flex group-hover:flex transition-opacity duration-400";

  return (
    <motion.div
      variants={slideInFromLeft(slideInDelay)}
      className={`text-md max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem] ${className}`}
    >
      <Link href={href}>
        <div className={commonCardClasses}>
          <span className={commonSpanClasses}>
            <ArrowUpRight className={commonIconClasses} />
            {/* Minor vertical adjustment for text alignment */}
            <span className="translate-y-[0.02rem]">{text}</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// --- Main Component ---
export default function TextWeightGradient() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(); // Use the custom hook
  const isInView = useInView(textContainerRef, {
    once: false,
    margin: "0px 0px -50px 0px", // Only trigger when element is slightly in view
  });

  const viewportMouseX = useMotionValue(Infinity); // Initialize far offscreen
  const wavePosition = useMotionValue(0); // Represents 0 to 1 progress of the wave

  const text = "Portfolio";

  // Effect: Handle mouse movement listener for desktop
  useEffect(() => {
    // Only run listener if not mobile and component is in view
    if (isMobile || !isInView) {
      viewportMouseX.set(Infinity); // Reset if not applicable
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      viewportMouseX.set(e.clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup: Remove listener and reset position
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      viewportMouseX.set(Infinity);
    };
  }, [isMobile, isInView, viewportMouseX]); // Rerun when these change

  // Effect: Handle wave animation for mobile
  useEffect(() => {
    // Only run animation if mobile and component is in view
    if (isMobile && isInView) {
      const animationControls = animate(wavePosition, [0, 1], {
        duration: WAVE_DURATION_SECONDS,
        repeat: Infinity,
        repeatType: "mirror", // Go back and forth (0 -> 1 -> 0 -> 1...)
        ease: "easeInOut", // Smooth easing
      });

      // Cleanup: Stop animation when effect dependencies change or component unmounts
      return () => animationControls.stop();
    } else {
      // Reset wave position if not animating (e.g., switch to desktop, scroll out of view)
      wavePosition.set(0);
    }
  }, [isMobile, isInView, wavePosition]); // Rerun when these change

  return (
    // Consider adding `overflow-x-hidden` to a parent if the text can overflow during resize/animation
    <div className="flex justify-center items-center min-h-screen w-full">
      {/* Main container with slide-in animation */}
      <motion.div
        initial="hidden" // Explicit initial state
        animate={"visible"} // Control visibility based on isInView
        variants={slideInFromTop} // Assuming this handles initial appearance
        className="w-fit h-fit p-2 relative" // p-2 might be small, adjust as needed
      >
        {/* Date Card */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-md my-5 max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem]"
        >
          <Card className="w-fit px-4 py-2">
            <span className="opacity-90">2024-25</span>
          </Card>
        </motion.div>

        {/* Animated Text */}
        <div
          ref={textContainerRef}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] 2xl:text-[12rem] font-yapari text-center text-white cursor-default select-none whitespace-nowrap flex" // Use flex to keep spans inline
          aria-label={text} // Better accessibility than aria-hidden
        >
          {text.split("").map((char, index) => (
            <Letter
              key={`${char}-${index}`} // Use char and index for a more stable key
              letter={char}
              isInView={isInView}
              isMobile={isMobile}
              viewportMouseX={viewportMouseX}
              wavePosition={wavePosition}
              containerRef={textContainerRef}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-4 items-center">
          <StyledLinkCard
            href="#contact"
            text="Get in Contact"
            slideInDelay={0.8}
          />
          <StyledLinkCard
            href="/curriculum"
            text="View CV"
            slideInDelay={1.0}
          />

          <StyledLinkCard
            href="#contact"
            text="Feeling lucky?"
            slideInDelay={1.2}
            className="ml-auto"
          />
        </div>
      </motion.div>
    </div>
  );
}
