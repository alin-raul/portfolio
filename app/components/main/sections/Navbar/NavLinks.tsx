"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "../../../global/ModeToggle"; // Adjust path if needed
import clsx from "clsx";
import { useSidebar } from "@/context/SidebarContext";
import { AnimatePresence, motion } from "framer-motion";
import { useVisibility } from "@/context/VisibilityProviderContext";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

// Define the structure for each link
export type NavLink = {
  href: string;
  label?: string;
  icon?: React.ElementType;
  hasIcon?: boolean;
  isButton?: boolean;
  ariaLabel?: string;
};

// Props for the reusable component
interface NavLinksProps {
  links: NavLink[];
  className?: string;
}

// Reusable class strings for consistency
const baseLinkClasses =
  "cursor-pointer rounded-3xl md:rounded-2xl transition-all duration-200 ease-in-out hover:bg-accent/20 text-center";
const textLinkClasses =
  "group w-fit px-3 hover:px-4 py-2 rounded-3xl flex gap-2 items-center outline outline-1 outline-accent-foreground/0 hover:outline-accent-foreground/20 transition-all duration-400 font-extralight hover:font-semibold hover:rounded-xl";
const iconLinkClasses =
  "group px-3 hover:px-4 py-2 rounded-3xl flex gap-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 bg-[var(--bg-dynamic-1)] hover:bg-white/100 dark:hover:text-primary-foreground text-primary/60 hover:text-primary  font-extralight hover:font-semibold hover:rounded-xl ml-4"; // Using Portfolio's padding as base
const iconSizeClasses =
  "w-8 h-8 md:w-4 md:h-4 group-hover:w-5 group-hover:h-5 transition-all duration-200";

const NavLinks: React.FC<NavLinksProps> = ({ links, className }) => {
  const { isVisible, hideSidebar } = useSidebar();
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const specialButtonsVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const { isTopVisible } = useVisibility();

  return (
    <div className={clsx("flex md:items-center gap-1", className)}>
      {links.map((link) => {
        const linkContent = <span>{link.label}</span>;

        return (
          <motion.div key={link.href} layout>
            <Link
              key={link.href}
              href={link.href}
              onClick={hideSidebar}
              className={clsx(
                baseLinkClasses,
                link.hasIcon ? iconLinkClasses : textLinkClasses
              )}
              aria-label={link.ariaLabel || link.label}
            >
              {linkContent}
            </Link>
          </motion.div>
        );
      })}
      <AnimatePresence mode="wait" initial={false}>
        {!isTopVisible && pathname === "/" && (
          <motion.div
            key="view-cv-button"
            variants={specialButtonsVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Link href="/curriculum" className={textLinkClasses}>
              <ArrowUpRight className="opacity-70 hidden hover:flex group-hover:flex transition-opacity duration-400 w-5 h-5" />
              <span>View CV</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait" initial={false}>
        {!isTopVisible && (
          <motion.div
            key="view-cv-button"
            variants={specialButtonsVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button
              type="button"
              onClick={handleScrollToTop}
              className={clsx(iconLinkClasses)}
              aria-label="Scroll to top"
            >
              <ArrowUp className={iconSizeClasses} aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ModeToggle />
    </div>
  );
};

export default NavLinks;
