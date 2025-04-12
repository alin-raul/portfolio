import React, { useState } from "react";
import { motion } from "framer-motion";

interface SkillName {
  name: string;
}

export interface Skill {
  name: string;
  level?: string;
  progress?: number;
  category?: "core" | "advanced" | "growing";
  color?: string;
}

export const SkillPill: React.FC<SkillName> = ({ name }) => {
  return (
    <div className="border border-white-500/30 px-3 py-1 rounded-full dark:bg-black-300/50 bg-white/20">
      {name}
    </div>
  );
};

export const RadialSkill: React.FC<
  Skill & { size?: number; strokeWidth?: number }
> = ({
  name,
  progress = 0,
  size = 50,
  strokeWidth: initialStrokeWidth = 14,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const targetStrokeWidth = isHovered
    ? initialStrokeWidth * 0.7
    : initialStrokeWidth;

  const radius = (size - targetStrokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const validCircumference = circumference > 0 ? circumference : 0;
  const offset = validCircumference - (progress / 100) * validCircumference;

  const transitionDuration = "duration-300";
  const transitionTiming = "ease-in-out";

  return (
    <motion.div
      className="flex gap-2 min-w-32 items-center w-fit cursor-default"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="absolute inset-0 transform -rotate-90 rounded-full"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={`stroke-current blur-[1.3px] transition-all ${transitionDuration} ${transitionTiming}`}
            strokeWidth={targetStrokeWidth}
            fill="transparent"
            strokeLinecap="round"
            style={{
              opacity: 0.3,
              transitionProperty: "stroke-width, r",
            }}
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={`stroke-current blur-[0.6px] transition-all ${transitionDuration} ${transitionTiming}`}
            strokeWidth={targetStrokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={`${validCircumference} ${validCircumference}`}
            strokeDashoffset={offset}
            style={{
              transitionProperty:
                "stroke-dashoffset, stroke-dasharray, stroke-width, r",
            }}
          />
        </svg>

        <motion.span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs
                     font-medium select-none pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {progress}
        </motion.span>
      </div>
      <span className="text-sm font-semibold opacity-70">{name}</span>
    </motion.div>
  );
};
