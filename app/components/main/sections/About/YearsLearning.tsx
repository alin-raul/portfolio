import { SparklesIcon } from "@heroicons/react/24/solid";

export default function YearsLearning() {
  return (
    <div className="grid-card flex justify-center items-center rounded-3xl relative p-4 overflow-hidden">
      <div className="h-fit w-full relative overflow-visible transition-all duration-300 ease-in-out ">
        <div className="transition-all duration-300 ease-in-out">
          <p
            className="font-bold text-center text-7xl flex justify-center items-center opacity-60"
            style={{
              WebkitTextStroke: "2px currentColor", // Creates the edge
              WebkitTextFillColor: "transparent", // Makes the inside transparent
              color: "currentColor", // Inherits the color
            }}
          >
            2{" "}
            <span
              style={{
                WebkitTextStroke: "none",
                WebkitTextFillColor: "currentColor",
              }}
              className="text-5xl"
            >
              +
            </span>
          </p>

          <p
            className="flex justify-center items-center gap-2 font-bold opacity-80"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1rem)" }}
          >
            <SparklesIcon
              className="flex-shrink-0"
              style={{
                width: "clamp(0.9rem, 1.8vw, 1.2rem)",
                height: "clamp(0.9rem, 1.8vw, 1.2rem)",
              }}
            />
            <span>Years</span>
          </p>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[-1]"></div>
    </div>
  );
}
