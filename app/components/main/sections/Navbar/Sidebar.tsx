"use client";

import React from "react";
import { NavLinksPortfolio, NavLinksAbout } from "./NavLinks";
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
            className="fixed inset-0 md:hidden bg-accent/40 backdrop-blur-md z-50"
          >
            {["/about"].includes(pathname) ? (
              <NavLinksAbout className="font-dot font-bold flex flex-col gap-6 text-right items-end pt-20 pr-7" />
            ) : (
              <NavLinksPortfolio className="font-dot font-bold flex flex-col gap-6 text-right items-end pt-20 pr-7" />
            )}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};
