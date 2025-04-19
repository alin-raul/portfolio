import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type SkillPill = {
  name: string;
  icon?: React.ReactNode;
};

export type Skill = {
  name: string;
  level?: string;
  progress?: number;
  category?: "core" | "advanced" | "growing";
  color?: string;
};

export const SkillPill: React.FC<SkillPill> = ({ name, icon }) => {
  return (
    <div className="border border-white-500/30 px-3 py-1 rounded-full dark:bg-black-300/50 bg-white/20 text-xs sm:text-base flex justify-center items-center gap-1">
      {icon}
      <span>{name}</span>
    </div>
  );
};

interface RadialSkillProps extends Skill {
  // Default size and stroke width for larger screens (md, lg)
  size?: number;
  strokeWidth?: number;
  // Optional size and stroke width for small screens (sm)
  smSize?: number;
  smStrokeWidth?: number;
}

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  const mediaQueryListRef = useRef<MediaQueryList | null>(null); // Use ref to persist mediaQueryList

  useEffect(() => {
    // Ensure window is available (for SSR compatibility)
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    mediaQueryListRef.current = mediaQuery; // Store the list

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Use addEventListener for modern browsers
    mediaQuery.addEventListener("change", handler);
    // Set initial state
    setMatches(mediaQuery.matches);

    return () => {
      // Clean up the event listener
      if (mediaQueryListRef.current) {
        mediaQueryListRef.current.removeEventListener("change", handler);
      }
    };
  }, [query]); // Dependency array includes query

  return matches;
};

// Helper hook for checking Tailwind's 'sm' breakpoint (640px)
const useIsSmallScreen = () => useMediaQuery("(max-width: 480px)");

export const RadialSkill: React.FC<RadialSkillProps> = ({
  name,
  progress = 0,
  size = 50,
  strokeWidth = 13,
  // Default props for small screens if not provided
  smSize = 24, // Example smaller size
  smStrokeWidth = 6, // Example smaller stroke width
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  // Determine the actual size and stroke width based on the screen size
  const effectiveSize = isSmallScreen ? smSize : size;
  const effectiveStrokeWidth = isSmallScreen ? smStrokeWidth : strokeWidth;

  // Calculate the target stroke width based on effective stroke and hover state
  const targetStrokeWidth = isHovered
    ? effectiveStrokeWidth * 0.7 // Scale the hover effect relative to effective stroke
    : effectiveStrokeWidth;

  // Calculations must use the effective size and stroke width
  const radius = (effectiveSize - targetStrokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Ensure circumference is not negative or zero
  const validCircumference = circumference > 0 ? circumference : 0;
  const offset = validCircumference - (progress / 100) * validCircumference;

  const transitionDuration = "duration-300";
  const transitionTiming = "ease-in-out";

  return (
    <motion.div
      // Removed fixed 'w-full' and size classes from here
      // Added padding for better internal spacing
      className="flex gap-2 sm:gap-2 min-w-[6.2rem] xs:min-w-32 max-sm:min-w-20 items-center cursor-default p-2"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="relative flex-shrink-0" // Prevent the container from shrinking below its set size
        // Set the container's size using style, based on the effective size
        style={{ width: effectiveSize, height: effectiveSize }}
      >
        <svg
          className="absolute inset-0 transform -rotate-90 rounded-full"
          // Use the effective size for SVG dimensions and viewBox
          width={effectiveSize}
          height={effectiveSize}
          viewBox={`0 0 ${effectiveSize} ${effectiveSize}`}
        >
          {/* Background Circle */}
          <circle
            // Center the circle relative to the effective size
            cx={effectiveSize / 2}
            cy={effectiveSize / 2}
            // Radius is calculated based on effective size and target stroke
            r={radius}
            // Removed responsive stroke classes here
            className={`stroke-current blur-[1.3px] transition-all ${transitionDuration} ${transitionTiming}`}
            // Use the target stroke width attribute
            strokeWidth={targetStrokeWidth}
            fill="transparent"
            strokeLinecap="round"
            style={{
              color: "grey",
              opacity: 0.2,
              // Ensure smooth transition for stroke-width and radius changes (due to hover)
              transitionProperty: "stroke-width, r",
            }}
          />

          {/* Progress Circle */}
          <circle
            // Center the circle relative to the effective size
            cx={effectiveSize / 2}
            cy={effectiveSize / 2}
            // Radius is calculated based on effective size and target stroke
            r={radius}
            // Removed responsive stroke classes here
            className={`stroke-current blur-[0.6px] transition-all ${transitionDuration} ${transitionTiming}`}
            // Use the target stroke width attribute
            strokeWidth={targetStrokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={`${validCircumference} ${validCircumference}`}
            strokeDashoffset={offset}
            style={{
              color: "white", // Or use a prop for color
              // Ensure smooth transitions for changes
              transitionProperty:
                "stroke-dashoffset, stroke-dasharray, stroke-width, r",
            }}
          />
        </svg>

        {/* Percentage Text */}
        <motion.span
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     font-medium select-none pointer-events-none
                     `}
          // Conditionally apply text size classes based on screen size
          // Example: 'text-[0.5rem]' for large, 'text-[0.4rem]' for small
          style={{ fontSize: isSmallScreen ? "0.3rem" : "0.5rem" }} // Or use Tailwind text classes conditionally
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {progress}%
        </motion.span>
      </div>
      {/* Skill Name Text */}
      <span
        className={`font-semibold opacity-70 text-xs
         `}
        // Conditionally apply text size classes
        style={{ fontSize: isSmallScreen ? "0.6rem" : "0.75rem" }} // text-xs is 0.75rem by default
      >
        {name}
      </span>
    </motion.div>
  );
};
