import React from "react";
import Link from "next/link";
import { ModeToggle } from "../../../global/ModeToggle";
import clsx from "clsx";

interface NavLinksProps {
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <Link
        href="#about"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        About
      </Link>
      <Link
        href="#skills"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        Skills
      </Link>
      <Link
        href="#projects"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        Works
      </Link>

      <Link
        href="#contact"
        className="cursor-pointer opacity-70 hover:opacity-100"
      >
        Contact
      </Link>
      <ModeToggle />
    </div>
  );
};

export default NavLinks;
