"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import { portfolioLinks, aboutLinks, curriculumLinks } from "@/constants";
import { useSidebar } from "@/context/SidebarContext";
import { ModeToggle } from "@/app/components/global/ModeToggle"; // Ensure this import path is correct

const PATHS = {
  ABOUT: "/about",
  CURRICULUM: "/curriculum",
};

// Animation variants for the sidebar content
// This will slide down from above and fade in
const contentVariants = {
  hidden: { y: -500, opacity: 0 }, // Start 500px above its normal position and invisible
  visible: { y: 0, opacity: 1 }, // Slide to its normal position (top: 0 relative to container) and become visible
  exit: { y: -500, opacity: 0 }, // Slide back up and fade out on exit
};

// Animation variants for the backdrop (fades in/out)
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Sidebar: React.FC = () => {
  const { isVisible, hideSidebar } = useSidebar();
  const pathname = usePathname();

  const currentLinks =
    pathname === PATHS.ABOUT
      ? aboutLinks
      : pathname === PATHS.CURRICULUM
      ? curriculumLinks
      : portfolioLinks;

  return (
    // Outer container (optional, but can help contextually)
    <div className="absolute w-screen h-screen">
      <AnimatePresence>
        {/* Render backdrop and content only when sidebar is visible */}
        {isVisible && (
          // Backdrop - Fades in and handles closing on outside click
          <motion.div
            key="sidebar-backdrop" // Key is good practice for AnimatePresence
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden" // Fade out on exit
            transition={{ duration: 0.6, ease: "easeInOut" }} // Apply transition to backdrop's opacity
            className="fixed inset-0 md:hidden bg-white/40 dark:bg-black/80 backdrop-blur-md z-50"
          >
            <motion.div
              variants={contentVariants}
              initial="hidden" // Start from the 'hidden' state
              animate="visible" // Animate to the 'visible' state
              exit="exit" // Animate to the 'exit' state when isVisible becomes false
              transition={{ duration: 0.6, ease: "easeInOut" }} // Apply transition to content's y and opacity
              // Positioning and layout for the content block
              className="absolute top-0 left-0 w-full h-full p-4 flex flex-col" // Added flex flex-col and padding
              // Stop propagation so clicks on the sidebar content itself don't close it
              onClick={(e) => {
                e.stopPropagation();
                hideSidebar();
              }}
            >
              {/* NavLinks component inside the sliding content container */}
              {/* Use flex-grow to push the ModeToggle to the bottom */}
              <NavLinks
                links={currentLinks}
                // Adjusted margin to account for parent padding, added flex-grow
                className="flex flex-col gap-y-6 ml-6 mt-16 text-2xl font-semibold flex-grow"
                isSidebar={true}
              />

              {/* ModeToggle inside the sliding content container */}
              {/* Use mt-auto to push it to the bottom, mb/ml/mr for final positioning */}
              <ModeToggle className="mt-auto mb-6 ml-auto mr-6" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
