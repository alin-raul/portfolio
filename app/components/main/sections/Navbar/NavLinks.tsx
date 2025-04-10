"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "../../../global/ModeToggle"; // Adjust path if needed
import clsx from "clsx";
import { ArrowUp } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext"; // Adjust path if needed

// Define the structure for each link
export type LinkDefinition = {
  href: string;
  label?: string;
  isIcon?: boolean;
  ariaLabel?: string;
};

// Props for the reusable component
interface NavLinksProps {
  links: LinkDefinition[];
  className?: string;
}

// Reusable class strings for consistency
const baseLinkClasses =
  "cursor-pointer rounded-3xl md:rounded-2xl transition-all duration-200 ease-in-out hover:bg-accent/20 text-center";
const textLinkClasses =
  "w-fit px-3 hover:px-4 py-2 rounded-3xl flex gap-2 items-center outline outline-1 outline-accent-foreground/0 hover:outline-accent-foreground/20 transition-all duration-400 hover:bg-white/100 dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-xl";
const iconLinkClasses =
  "px-3 hover:px-4 py-2 rounded-3xl flex gap-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 bg-[var(--bg-dynamic-1)] hover:bg-white/100 dark:hover:text-primary-foreground text-primary/60 hover:text-primary  font-extralight hover:font-semibold hover:rounded-xl ml-4"; // Using Portfolio's padding as base
const iconSizeClasses = "w-8 h-8 md:w-5 md:h-5";

const NavLinks: React.FC<NavLinksProps> = ({ links, className }) => {
  const { isVisible, hideSidebar } = useSidebar();

  // Effect to handle body scroll based on sidebar visibility
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup function to reset overflow when component unmounts or isVisible changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    // Main container div
    <div className={clsx("flex md:items-center gap-1", className)}>
      {/* Map over the provided links array */}
      {links.map((link) => (
        <Link
          key={link.href} // Use href as key, assuming they are unique
          href={link.href}
          onClick={hideSidebar} // Hide sidebar on any link click
          className={clsx(
            baseLinkClasses,
            link.isIcon ? iconLinkClasses : textLinkClasses
          )}
          aria-label={link.ariaLabel || link.label}
        >
          {link.isIcon ? (
            <ArrowUp className={iconSizeClasses} aria-hidden="true" />
          ) : (
            link.label
          )}
        </Link>
      ))}
      {/* Always include the ModeToggle */}
      <ModeToggle />
    </div>
  );
};

export default NavLinks;
