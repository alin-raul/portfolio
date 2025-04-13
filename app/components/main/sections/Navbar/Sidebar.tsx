"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import { portfolioLinks, aboutLinks, curriculumLinks } from "@/constants";
import { useSidebar } from "@/context/SidebarContext";

const PATHS = {
  ABOUT: "/about",
  CURRICULUM: "/curriculum",
};

export const Sidebar: React.FC = ({}) => {
  const { isVisible, hideSidebar } = useSidebar();
  const pathname = usePathname();

  const currentLinks =
    pathname === PATHS.ABOUT
      ? aboutLinks
      : pathname === PATHS.CURRICULUM
      ? curriculumLinks
      : portfolioLinks;

  // Animation variants for the backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className=" absolute w-screen h-screen">
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            variants={backdropVariants}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 md:hidden bg-white/40 dark:bg-black/40 backdrop-blur-md z-50"
            onClick={hideSidebar}
          >
            <NavLinks
              links={currentLinks}
              className="flex flex-col gap-y-10 items-end text-right mt-20 mr-8 text-5xl"
            />
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};
