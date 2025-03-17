import React from "react";
import Link from "next/link";
import { ModeToggle } from "../../../global/ModeToggle";
import clsx from "clsx";
import { ArrowUp } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

interface NavLinksProps {
  className?: string;
}

const NavLinksPortfolio: React.FC<NavLinksProps> = ({ className }) => {
  const { isVisible, hideSidebar } = useSidebar();

  return (
    <div className={clsx(className)}>
      <Link href="#hero" className="cursor-pointer  mr-4 ">
        <button
          onClick={hideSidebar}
          className="p-2 opacity-70 hover:opacity-100"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </Link>
      <Link
        href="#about"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        <button onClick={hideSidebar}>ABOUT</button>
      </Link>
      <Link
        href="#skills"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        <button onClick={hideSidebar}>SKILLS</button>
      </Link>
      <Link
        href="#projects"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        <button onClick={hideSidebar}>PROJECTS</button>
      </Link>
      <Link
        href="#contact"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        <button onClick={hideSidebar}>CONTACT</button>
      </Link>
      <ModeToggle />
    </div>
  );
};

const NavLinksAbout: React.FC<NavLinksProps> = ({ className }) => {
  const { isVisible, hideSidebar } = useSidebar();

  return (
    <div className={clsx(className)}>
      <Link
        href="#top"
        className="cursor-pointer opacity-70 hover:opacity-100 mr-4"
      >
        <button onClick={hideSidebar} className="p-2">
          <ArrowUp className="w-5 h-5" />
        </button>
      </Link>
      <Link
        href="#about-me"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        <button onClick={hideSidebar}>ABOUT</button>
      </Link>
      <Link
        href="#experience"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        <button onClick={hideSidebar}>EXPERIENCE</button>
      </Link>
    </div>
  );
};

export { NavLinksPortfolio, NavLinksAbout };
