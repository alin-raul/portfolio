"use client";

import React from "react";
import NavLinks from "./NavLinks";
import { useSidebar } from "@/context/SidebarContext";
import { motion, AnimatePresence } from "framer-motion";

export const Sidebar: React.FC = ({}) => {
  const { isVisible, hideSidebar } = useSidebar();

  return (
    <div className=" absolute w-screen h-screen">
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 md:hidden bg-black/40 backdrop-blur-md z-50"
          >
            <NavLinks className="text-3xl font-bold flex flex-col gap-6 text-right items-end pt-20 pr-7" />
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};
