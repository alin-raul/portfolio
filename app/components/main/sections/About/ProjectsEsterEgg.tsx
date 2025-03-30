"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed, X, FolderOpenDot } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function ProjectsEsterEgg() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isVisible]);

  return (
    <div className="grid-card flex justify-center items-center rounded-3xl relative p-4 overflow-hidden">
      <div className="h-fit w-full relative overflow-visible group transition-all duration-300 ease-in-out">
        {/* Easter Egg Toggle Button */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <Button
            variant="ghost"
            size="sm"
            className="z-30 opacity-70 hover:opacity-100 transition-opacity rounded-xl hover:outline outline-1 outline-accent/60 hidden group-hover:block"
            onClick={() => setIsVisible(!isVisible)}
            aria-label={isVisible ? "Hide Easter Egg" : "Reveal Easter Egg"}
          >
            <abbr title="View easter egg 😁">
              <Eye className="w-6 h-6" />{" "}
            </abbr>
          </Button>
        </div>

        {/* Original Content */}
        <div className="blur-none group-hover:blur-xl transition-all duration-300 ease-in-out">
          <p
            className="font-bold text-center text-7xl flex justify-center items-center opacity-60"
            style={{
              WebkitTextStroke: "2px currentColor", // Creates the edge
              WebkitTextFillColor: "transparent", // Makes the inside transparent
              color: "currentColor", // Inherits the color
            }}
          >
            3{" "}
            <span
              style={{
                WebkitTextStroke: "none", // Disables the stroke for the plus sign
                WebkitTextFillColor: "currentColor", // Fills the plus sign with solid color
              }}
              className="text-5xl"
            >
              +
            </span>
          </p>

          <p
            className="flex justify-center items-center gap-2 font-bold opacity-80"
            style={{ fontSize: "clamp(0.8rem, 1.6vw, 1rem)" }}
          >
            <FolderOpenDot
              className="flex-shrink-0"
              style={{
                width: "clamp(0.6rem, 1.8vw, 1.2rem)",
                height: "clamp(0.6rem, 1.8vw, 1.2rem)",
              }}
            />
            <span>Projects</span>
          </p>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none before:content-[''] 
                      before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[-1]"
      ></div>

      {/* Portal-based Modal */}
      {isVisible &&
        createPortal(
          <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative bg-card rounded-xl shadow-2xl max-w-2xl w-full aspect-video">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-10 right-0 hover:bg-accent/50 rounded-xl hover:outline outline-1 outline-accent/60"
                onClick={() => setIsVisible(false)}
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <Image
                  src="/assets/meme/honest-work.webp"
                  alt="Easter Egg - Honest Work Meme"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
