"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowLeft } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import NavLinks from "./NavLinks";
import { portfolioLinks, aboutLinks } from "@/constants";

// Reusable class strings for consistency
const baseLinkClasses = "flex items-center gap-6";
const arrowWrapperClasses =
  "w-fit px-3 hover:px-4 py-2 rounded-3xl flex gap-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 backdrop-blur-md bg-[var(--bg-dynamic-1)] hover:bg-white/100 dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-xl";
const logoTextClasses = "flex font-yapari text-xl ";
const mobileIconClasses = "md:hidden w-6 h-6";

const Navbar = () => {
  const { isVisible, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  // Determine the content for the left side (Logo/Back Link)
  let logoContent;
  if (pathname === "/about") {
    logoContent = (
      <Link href="/#about" className={baseLinkClasses}>
        <div className={arrowWrapperClasses}>
          <ArrowLeft className="w-5 h-5" />
        </div>
        {/* Added tracking-tighter specifically for 'about' */}
        <p className={`${logoTextClasses} tracking-tighter`}>ran</p>
      </Link>
    );
  } else if (pathname === "/curriculum") {
    logoContent = (
      <Link href="/#hero" className={baseLinkClasses}>
        <div className={arrowWrapperClasses}>
          <ArrowLeft className="w-5 h-5" />
        </div>
        <span className={logoTextClasses}>ran</span>
      </Link>
    );
  } else {
    // Default logo display
    logoContent = <span className={logoTextClasses}>ran</span>;
  }

  // Determine which NavLinks component to render for desktop
  const linksToShow = pathname === "/about" ? aboutLinks : portfolioLinks;

  return (
    // Fixed Navbar container
    <div className="w-full h-14 fixed top-0 left-0 z-50">
      <nav className="w-full h-full mx-auto max-w-screen-2xl px-0 md:px-4">
        {/* Inner container with background, blur, and rounded corners on desktop */}
        <div className="flex items-center justify-between outline outline-1 outline-muted-foreground/20 rounded-none md:rounded-2xl dark:bg-black/60 bg-white/50 backdrop-blur-md md:mt-4 h-full px-6 md:px-0">
          {/* Left Section: Logo or Back Link */}
          <div className="flex font-semibold items-center py-2 pl-1 md:px-6 relative h-full">
            <span className="text-nowrap">{logoContent}</span>
          </div>

          {/* Middle Section: Desktop Navigation Links */}
          <div className="font-semibold py-2 px-4 ml-auto relative md:px-10 h-auto hidden md:flex">
            <NavLinks links={linksToShow} />
          </div>

          {/* Right Section: Mobile Sidebar Toggle */}
          <button
            onClick={toggleSidebar}
            className="z-50 relative md:hidden p-2 mr-2" // Added padding and margin for better touch target
            aria-label={isVisible ? "Close menu" : "Open menu"} // Accessibility
          >
            {isVisible ? (
              <XMarkIcon className={mobileIconClasses} />
            ) : (
              <Bars2Icon className={mobileIconClasses} />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
