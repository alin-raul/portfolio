"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../../../global/ModeToggle";
import clsx from "clsx";
import { ArrowUp } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

interface NavLinksProps {
  className?: string;
}

const NavLinksPortfolio: React.FC<NavLinksProps> = ({ className }) => {
  const { isVisible, hideSidebar } = useSidebar();

  useEffect(() => {
    // Disable scrolling when the sidebar is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <div className={clsx("flex md:items-center gap-1", className)}>
      <Link
        href="#hero"
        onClick={hideSidebar}
        className="cursor-pointer opacity-60 hover:opacity-100 rounded-3xl md:rounded-2xl py-2.5 px-6 md:py-1.5 md:px-3 hover:bg-accent/20 transition-all duration-500 ease-in-out"
      >
        <ArrowUp className="w-8 h-8 md:w-5 md:h-5" />
      </Link>
      <Link
        href="#about"
        onClick={hideSidebar}
        className="cursor-pointer opacity-80 hover:opacity-100 rounded-3xl md:rounded-2xl py-3 px-6 md:py-1 md:px-3 transition-all duration-500 ease-in-out hover:bg-accent/20 text-3xl md:text-base hover:font-bold text-center"
      >
        About
      </Link>
      <Link
        href="#skills"
        onClick={hideSidebar}
        className="cursor-pointer opacity-80 hover:opacity-100 rounded-3xl md:rounded-2xl py-3 px-6 md:py-1 md:px-3 transition-all duration-500 ease-in-out  hover:bg-accent/20 text-3xl md:text-base hover:font-bold text-center"
      >
        Skills
      </Link>
      <Link
        href="#projects"
        onClick={hideSidebar}
        className="cursor-pointer opacity-80 hover:opacity-100  rounded-3xl md:rounded-2xl py-3 px-6 md:py-1 md:px-3 transition-all duration-500 ease-in-out hover:bg-accent/20 text-3xl md:text-base hover:font-bold text-center"
      >
        Projects
      </Link>
      <Link
        href="#contact"
        onClick={hideSidebar}
        className="cursor-pointer opacity-80 hover:opacity-100 rounded-3xl md:rounded-2xl py-3 px-6 md:py-1 md:px-3 transition-all duration-500 ease-in-out hover:bg-accent/20 text-3xl md:text-base hover:font-bold text-center"
      >
        Contact
      </Link>
      <ModeToggle />
    </div>
  );
};

const NavLinksAbout: React.FC<NavLinksProps> = ({ className }) => {
  const { isVisible, hideSidebar } = useSidebar();

  useEffect(() => {
    // Disable scrolling when the sidebar is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <div className={clsx("flex md:items-center gap-1", className)}>
      <Link
        href="#top"
        onClick={hideSidebar}
        className="cursor-pointer opacity-60 hover:opacity-100 rounded-3xl md:rounded-2xl p-6 md:py-1.5 md:px-3 transition-all duration-500 ease-in-out hover:bg-accent/20 text-3xl md:text-base text-center"
      >
        <ArrowUp className="w-8 h-8 md:w-5 md:h-5" />
      </Link>
      <Link
        href="#about-me"
        onClick={hideSidebar}
        className="cursor-pointer opacity-80 hover:opacity-100 rounded-3xl md:rounded-2xl py-3 px-6 md:py-1 md:px-3 transition-all duration-500 ease-in-out hover:bg-accent/20 text-3xl md:text-base hover:font-bold text-center"
      >
        About
      </Link>
      <Link
        href="#experience"
        onClick={hideSidebar}
        className="cursor-pointer opacity-80 hover:opacity-100 rounded-3xl md:rounded-2xl py-3 px-6 md:py-1 md:px-3 transition-all duration-500 ease-in-out hover:bg-accent/20 text-3xl md:text-base hover:font-bold text-center"
      >
        Experience
      </Link>
      <ModeToggle />
    </div>
  );
};

export { NavLinksPortfolio, NavLinksAbout };
