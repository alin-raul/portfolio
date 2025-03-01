import React from "react";
import Link from "next/link";
import { ModeToggle } from "../../../global/ModeToggle";
import clsx from "clsx";
import { ArrowUp } from "lucide-react";

interface NavLinksProps {
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <Link
        href="#hero"
        className="cursor-pointer opacity-70 hover:opacity-100 mr-4"
      >
        <ArrowUp className="w-5 h-5" />
      </Link>
      <Link
        href="#about"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        ABOUT
      </Link>
      <Link
        href="#skills"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        SKILLS
      </Link>
      <Link
        href="#projects"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        WORKS
      </Link>

      <Link
        href="#contact"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        CONTACT
      </Link>
      <ModeToggle />
    </div>
  );
};

export default NavLinks;
