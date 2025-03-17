import { TechStack } from "@/constants";
import Image from "next/image";

export const SpinningIcons = () => {
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 animate-spin [animation-duration:30s]">
      {/* Inner circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/40 dark:bg-black/40 border outline outline-1 outline-offset-8 dark:outline-gray-500/60 outline-black-500/60 shadow-[inset_4px_4px_10px_2px_rgba(0,0,0,0.1)] dark:shadow-[inset_4px_4px_14px_2px_rgba(255,255,255,0.1)]" />
      </div>

      {/* Spinning icons */}
      {TechStack.map((image, index) => {
        const angle = 60 * index;
        const radians = (angle * Math.PI) / 180;
        const radius = 90; // Match translateX(80px) from original
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);

        return (
          <div
            key={image.skill_name}
            className="absolute left-1/2 top-1/2 h-[4.4rem] w-[4.4rem] origin-center"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            <div className="h-full w-full animate-counter-spin">
              <div className="flex h-full w-full items-center justify-center border rounded-full bg-white/20 dark:bg-black/40 p-3 shadow-[inset_4px_4px_10px_2px_rgba(0,0,0,0.1)] dark:shadow-[inset_4px_4px_14px_2px_rgba(255,255,255,0.1)]">
                <Image
                  src={image.image}
                  alt={image.skill_name}
                  width={image.width}
                  height={image.height}
                  className={`object-contain ${
                    image.dynamic ? "icon" : ""
                  } origin-center`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
