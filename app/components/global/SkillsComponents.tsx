import React from "react";

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
    <div className="border border-white-500/30 px-3 py-1 rounded-full dark:bg-black-300/50 bg-white/20 backdrop-blur-md">
      {name}
    </div>
  );
};

export const RadialSkill: React.FC<
  Skill & { size?: number; strokeWidth?: number }
> = ({ name, progress = 0, color = "", size = 50, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const isGradient = color?.includes("gradient");

  // Generate a unique ID for the gradient
  const gradientId = `gradient-${name.replace(/\s+/g, "-").toLowerCase()}`;

  // Parse gradient stops from color string
  const parseGradientStops = (gradient: string) => {
    const matches = gradient.match(/rgba?\([^)]*\)/g);
    const stops = matches || [];
    return stops.map((stop, index) => ({
      offset: `${(index / (stops.length - 1)) * 100}%`,
      color: stop,
    }));
  };

  const gradientStops = isGradient ? parseGradientStops(color) : [];

  return (
    <div className="flex gap-2 min-w-32 items-center w-fit">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="absolute inset-0 transform -rotate-90 rounded-full"
          width={size}
          height={size}
        >
          <defs>
            {isGradient && (
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                {gradientStops.map((stop, index) => (
                  <stop
                    key={index}
                    offset={stop.offset}
                    style={{ stopColor: stop.color, stopOpacity: 1 }}
                  />
                ))}
              </linearGradient>
            )}
          </defs>
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-current blur-[1.3px]"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            style={{
              // stroke: isGradient ? `url(#${gradientId})` : color,
              opacity: 0.3,
            }}
          />
          {/* Progress track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-current transition-all duration-500 blur-[0.6px]"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            style={
              {
                // stroke: isGradient ? `url(#${gradientId})` : color,
              }
            }
          />
        </svg>
        {/* Progress text */}
        <span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs 
                     font-medium select-none"
        >
          {progress}
        </span>
      </div>
      <span className="text-sm font-semibold opacity-70">{name}</span>
    </div>
  );
};
