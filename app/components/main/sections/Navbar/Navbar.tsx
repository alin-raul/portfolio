"use client";

import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowLeft } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import NavLinks from "./NavLinks";
import { portfolioLinks, aboutLinks, curriculumLinks } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { containerAnimationVariants, slideInFromTop } from "@/utils/motion";
import dynamic from "next/dynamic";
import LogoRan from "../../LogoRan";
import useMobileSmallScreen from "@/hooks/useMobileSmallScreen";
import { ModeToggle } from "@/app/components/global/ModeToggle";

type PathnameProps = { pathname: string; isSmallScreen: boolean }; // Add isSmallScreen prop

const PATHS = {
  ABOUT: "/about",
  CURRICULUM: "/curriculum",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  HOME: "/", // Added HOME for clarity, though default case handles it
};

const TARGETS = {
  ABOUT: "/#about",
  HERO: "/#hero",
};

const baseLinkClasses = "flex items-center gap-6";
// arrowWrapperClasses will be determined INSIDE LogoContent based on isSmallScreen prop
const logoTextClasses = "flex font-yapari text-base xs:text-xl my-auto";
const mobileIconClasses = "md:hidden w-6 h-6 xs:w-8 xs:h-8";

const LogoContent = ({ pathname, isSmallScreen }: PathnameProps) => {
  // Reusable classes for the clickable area around the arrow
  const arrowWrapperClasses = isSmallScreen
    ? "" // No extra padding/outline on very small screens
    : "group w-fit px-3 hover:px-4 py-2 rounded-3xl flex gap-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 bg-[var(--bg-dynamic-1)] hover:bg-white/100 dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-xl";

  // Reusable classes for the arrow icon within the clickable area
  const arrowIconClasses =
    "w-4 h-4 group-hover:w-5 group-hover:h-5 transition-all duration-200";

  // --- Handle Privacy and Terms paths ---
  if (pathname === PATHS.PRIVACY || pathname === PATHS.TERMS) {
    return (
      <div className={baseLinkClasses}>
        <button
          onClick={() => window.history.back()} // Go back in browser history
          className={`${arrowWrapperClasses} cursor-pointer`} // Add cursor-pointer to indicate clickability
          aria-label="Go back" // Add accessibility label
        >
          <ArrowLeft className={arrowIconClasses} />
        </button>
        <div className="flex h-full w-full">
          <div className="hidden sm:block w-6 xs:w-8 mr-2">
            <LogoRan />
          </div>
          <span className={logoTextClasses}>ran</span>
        </div>
      </div>
    );
  }

  // --- Handle About path ---
  if (pathname === PATHS.ABOUT) {
    return (
      <Link href={TARGETS.ABOUT} className={baseLinkClasses}>
        <div className={arrowWrapperClasses}>
          <ArrowLeft className={arrowIconClasses} />
        </div>
        <div className="flex h-full w-full">
          <div className="hidden sm:block w-6 xs:w-8 mr-2">
            <LogoRan />
          </div>
          <span className={logoTextClasses}>ran</span>
        </div>
      </Link>
    );
  }

  // --- Handle Curriculum path ---
  if (pathname === PATHS.CURRICULUM) {
    return (
      <Link href={TARGETS.HERO} className={baseLinkClasses}>
        <div className={arrowWrapperClasses}>
          <ArrowLeft className={arrowIconClasses} />
        </div>
        <div className="flex h-full w-full">
          <div className="hidden sm:block w-6 xs:w-8 mr-2">
            <LogoRan />
          </div>
          <span className={logoTextClasses}>ran</span>
        </div>
      </Link>
    );
  }

  // --- Default case (Home, Portfolio, etc.) ---
  return (
    // No Link wrapper, no back arrow
    <div className="flex h-full w-full">
      <div className="w-6 xs:w-8 mr-2">
        <LogoRan />
      </div>
      <span className={logoTextClasses}>ran</span>
    </div>
  );
};

export const DynamicDownloadPDFButton = dynamic(
  () => import("../../DownloadPDFButton"),
  {
    ssr: false,
  }
);

const NavbarComponent = () => {
  const size = useMobileSmallScreen();
  const isSmallScreen = size.width !== undefined && size.width < 480;

  const { isVisible, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  // Determine which links to show (will be hidden entirely for privacy/terms)
  const currentLinks =
    pathname === PATHS.ABOUT
      ? aboutLinks
      : pathname === PATHS.CURRICULUM
      ? curriculumLinks
      : portfolioLinks; // Default to portfolioLinks for other paths

  // Check if the current path is privacy or terms
  const isPrivacyOrTerms =
    pathname === PATHS.PRIVACY || pathname === PATHS.TERMS;

  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        className="w-full h-12 xs:h-14 fixed top-0 left-0 z-50"
        variants={containerAnimationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.nav
          className="w-full h-full md:mx-auto max-w-[1800px] px-0 md:px-4"
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-between outline outline-1 outline-muted-foreground/10 rounded-none md:rounded-2xl backdrop-blur-md dark:bg-black/60 bg-white/50 md:mt-4 h-full px-2 md:px-0">
            {/* Logo/Back Button Area */}
            <div className="flex font-semibold items-center py-2 pl-1 md:px-6 h-full">
              <span className="text-nowrap">
                <LogoContent
                  pathname={pathname}
                  isSmallScreen={isSmallScreen}
                />
              </span>
            </div>

            {/* Desktop Nav (hidden on mobile) */}
            <div className="justify-center items-center font-semibold py-2 px-4 ml-auto md:px-10 h-auto hidden md:flex">
              {pathname === PATHS.CURRICULUM && (
                <DynamicDownloadPDFButton className="ml-auto" />
              )}
              {/* Hide main NavLinks for privacy/terms */}
              {!isPrivacyOrTerms && <NavLinks links={currentLinks} />}
              {/* Keep ModeToggle visible */}
              <ModeToggle />
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center md:hidden">
              {pathname === PATHS.CURRICULUM ? (
                <DynamicDownloadPDFButton className="ml-auto" />
              ) : (
                // Hide mobile menu toggle for privacy/terms
                !isPrivacyOrTerms && (
                  <div className="flex">
                    <button
                      onClick={toggleSidebar}
                      className="z-50 relative p-2 mr-2"
                      aria-label={isVisible ? "Close menu" : "Open menu"}
                      aria-expanded={isVisible}
                    >
                      {isVisible ? (
                        <XMarkIcon className={mobileIconClasses} />
                      ) : (
                        <Bars2Icon className={mobileIconClasses} />
                      )}
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.nav>
      </motion.div>
    </AnimatePresence>
  );
};

const Navbar = React.memo(NavbarComponent);

export default Navbar;
