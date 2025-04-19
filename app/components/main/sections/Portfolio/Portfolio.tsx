"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  containerAnimationVariants, // For the grid container (stagger)
  itemAnimationVariants, // For the individual cards and header/description
} from "@/utils/motion";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ArrowUpRight, Github } from "lucide-react";

// (Keep your type definitions here or import them)
type ButtonInfo = {
  label: string;
  live_demo?: string;
  source_code_link?: string;
};
type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  icon: string;
  image: { light: string; dark: string };
  buttons: ButtonInfo[];
};

// Keep ProjectCard component definition here or import it

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  icon,
  image,
  buttons,
}) => {
  const { resolvedTheme = "light" } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    if (resolvedTheme) {
      setCurrentTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  return (
    // This motion.div is a child of the animated grid container.
    // It receives its animation trigger and delay from the parent via variants={itemAnimationVariants}
    // CORRECTED: Removed whileInView and viewport from here.
    <motion.div
      className="card-w-space w-full z-30 overflow-hidden"
      variants={itemAnimationVariants} // Use item variants for the individual card's animation
    >
      <div className="relative">
        <div className="relative dark:brightness-50 brightness-100 blur-md md:blur-xl transition-all duration-300">
          <Image
            width={200}
            height={200}
            alt="vercel" // Better alt text
            src={`${currentTheme === "light" ? image.light : image.dark}`}
            className="w-full h-[12rem] sm:h-[20rem] md:h-[20rem] object-top object-cover rounded-t-[2rem] transition-all duration-200"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-30 transition-all duration-200">
          <Image
            width={300}
            height={200}
            src={icon}
            className="w-24 h-24 object-contain" // Added object-contain for icon
            alt={`${name} icon`} // More descriptive alt text
          />
        </div>
      </div>

      <div className="flex flex-col flex-grow gap-2 justify-around p-8">
        <div>
          <h3 className="font-bold text-xl md:text-2xl">{name}</h3>
          <p className="mt-2 opacity-70 text-[0.7rem] leading-[1.25rem] sm:text-sm font-semibold">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap mt-5 gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className="opacity-60 hover:opacity-100 cursor-pointer text-[0.625rem] md:text-base"
              style={{ color: tag.color }} // Apply tag color if desired (assuming color is a valid CSS color string)
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="flex mt-2">
          <div className="flex w-full gap-2 flex-wrap">
            {buttons.map((buttonInfo, index) => {
              const isDemo = buttonInfo.label === "DEMO";
              const IconComponent = isDemo ? ArrowUpRight : Github;
              const linkHref = isDemo
                ? buttonInfo.live_demo || "#"
                : buttonInfo.source_code_link || "#";
              const isDisabled = !linkHref || linkHref === "#";

              const iconBaseClass = "h-4 w-4";

              const iconHoverClass = isDemo
                ? "group-hover:scale-125"
                : "group-hover:scale-95"; // GitHub logo might look weird scaling up

              const textSpanBaseClass =
                "transition-all duration-300 ease-in-out";
              const textSpanConditionalClass = isDemo
                ? "ml-1" // Always show text for DEMO
                : "max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-1"; // Hide text for Source Code unless hovered

              return (
                <Link
                  key={`${buttonInfo.label}-${index}`}
                  href={linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => isDisabled && e.preventDefault()}
                  aria-disabled={isDisabled}
                  // Apply disabled class to the button instead of the Link
                  // className={isDisabled ? "pointer-events-none" : ""}
                >
                  <button
                    className={`group rounded-xl border-accent-foreground/20 flex text-sm h-full justify-center px-3 py-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-300 bg-[var(--bg-dynamic-1)] hover:bg-white/100 text-primary dark:hover:text-primary-foreground font-light hover:font-semibold hover:rounded-lg ${
                      isDisabled ? "opacity-50 cursor-not-allowed" : "" // Apply disabled styles here
                    }`}
                    disabled={isDisabled}
                  >
                    <IconComponent
                      className={`${iconBaseClass} ${iconHoverClass} transition-all duration-200 shrink-0`}
                    />

                    <span
                      className={`${textSpanBaseClass} ${textSpanConditionalClass}`}
                    >
                      {buttonInfo.label}
                    </span>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  // Removed unused viewportConfig

  return (
    // Main section container - NO motion props here
    <section className="mt-40" id="projects">
      <div className="max-w-screen-2xl m-auto z-50">
        {/* Animate header text container */}
        <div className="mb-4">
          {" "}
          {/* Added div to group text for potential future stagger if needed */}
          {/* Animate first header line */}
          <motion.p
            className="opacity-80 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Adjust amount for when this text animates
            variants={itemAnimationVariants} // Use item variants for the text fade/slide
          >
            PORTFOLIO
          </motion.p>
          {/* Animate second header line */}
          <motion.p
            className="font-bold text-4xl md:text-5xl mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Adjust amount
            variants={itemAnimationVariants} // Use item variants
          >
            Projects I built{" "}
          </motion.p>
        </div>

        {/* Animate description paragraph */}
        <motion.p
          className="text-base opacity-80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Adjust amount
          variants={itemAnimationVariants} // Use item variants
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>

        {/* The grid container - THIS triggers the stagger for the ProjectCards */}
        <motion.div
          className="mt-20 grid gap-6"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))",
          }}
          initial="hidden" // Start hidden
          whileInView="visible" // Animate to visible when in view
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the grid is visible
          variants={containerAnimationVariants} // Use container variants (with staggerChildren)
        >
          {projects.map((project, index) => (
            // ProjectCard instances are now children of the motion.div grid container
            // They will receive their animation state ("visible") and stagger delay
            // from the parent's whileInView and containerAnimationVariants
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

// Keep your variant definitions below if they are in the same file,
// or ensure they are correctly imported from "@/utils/motion" if they are in a separate file.
// export function slideInFromLeft(delay: number) { ... }
// export function slideInFromRight(delay: number) { ... }
// export const slideInFromTop = { ... }
// export const containerAnimationVariants = { ... } // This should have staggerChildren
// export const itemAnimationVariants = { ... }       // This should define single item animation
// export const portfolioAnimationVariants = { ... }  // Potentially redundant now
// export const sectionFadeInVariants = { ... }       // Keep if used elsewhere
