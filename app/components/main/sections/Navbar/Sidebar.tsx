"use client";

import React from "react";
import NavLinks from "./NavLinks";
import { portfolioLinks, aboutLinks } from "@/constants";
import { useSidebar } from "@/context/SidebarContext";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const Sidebar: React.FC = ({}) => {
  const { isVisible, hideSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <div className=" absolute w-screen h-screen">
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 md:hidden bg-white/40 dark:bg-black/40 backdrop-blur-md z-50"
          >
            {["/about"].includes(pathname) ? (
              <NavLinks
                links={aboutLinks}
                className="font-bold flex flex-col gap-6 text-right items-end pt-20 pr-7"
              />
            ) : (
              <NavLinks
                links={portfolioLinks}
                className="font-bold flex flex-col gap-6 text-right items-end pt-20 pr-7"
              />
            )}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};
