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

type Pathname = { pathname: string };

const PATHS = {
  ABOUT: "/about",
  CURRICULUM: "/curriculum",
};

const TARGETS = {
  ABOUT: "/#about",
  HERO: "/#hero",
};

const baseLinkClasses = "flex items-center gap-6";
const arrowWrapperClasses =
  "group w-fit px-3 hover:px-4 py-2 rounded-3xl flex gap-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 bg-[var(--bg-dynamic-1)] hover:bg-white/100 dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-xl";
const logoTextClasses = "flex font-yapari text-base xs:text-xl my-auto";
const mobileIconClasses = "md:hidden w-6 h-6 xs:w-8 xs:h-8";

const LogoContent = ({ pathname }: Pathname) => {
  // ... (LogoContent implementation remains the same)
  if (pathname === PATHS.ABOUT) {
    return (
      <Link href={TARGETS.ABOUT} className={baseLinkClasses}>
        <div className={arrowWrapperClasses}>
          <ArrowLeft className="w-5 h-5" />
        </div>
        <p className={`${logoTextClasses} tracking-tighter`}>ran</p>
      </Link>
    );
  }

  if (pathname === PATHS.CURRICULUM) {
    return (
      <Link href={TARGETS.HERO} className={baseLinkClasses}>
        <div className={arrowWrapperClasses}>
          <ArrowLeft className="w-4 h-4 group-hover:w-5 group-hover:h-5 transition-all duration-200" />
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

  return (
    <div className="flex h-full w-full">
      <div className="w-6 xs:w-8 mr-2">
        <LogoRan />
      </div>
      <span className={logoTextClasses}>ran</span>
    </div>
  );
};

// --- Dynamically import DownloadPDFButton ---
export const DynamicDownloadPDFButton = dynamic(
  () => import("../../DownloadPDFButton"),
  {
    ssr: false,
  }
);

// --- Main Component ---

const NavbarComponent = () => {
  const { isVisible, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const currentLinks =
    pathname === PATHS.ABOUT
      ? aboutLinks
      : pathname === PATHS.CURRICULUM
      ? curriculumLinks
      : portfolioLinks;

  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        className="w-full h-10 xs:h-14 fixed top-0 left-0 z-50"
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <nav className="w-full h-full md:mx-auto max-w-[1800px] px-0 md:px-4">
          <div className="flex items-center justify-between outline outline-1 outline-muted-foreground/20 rounded-none md:rounded-2xl backdrop-blur-md dark:bg-black/60 bg-white/50 md:mt-4 h-full px-6 md:px-0">
            <div className="flex font-semibold items-center py-2 pl-1 md:px-6 h-full">
              <span className="text-nowrap">
                <LogoContent pathname={pathname} />
              </span>
            </div>

            <div className="font-semibold py-2 px-4 ml-auto md:px-10 h-auto hidden md:flex">
              {pathname === PATHS.CURRICULUM ? (
                <DynamicDownloadPDFButton className="ml-auto" />
              ) : (
                ""
              )}
              <NavLinks links={currentLinks} />
            </div>

            <div className="flex items-center md:hidden">
              {pathname === PATHS.CURRICULUM ? (
                <DynamicDownloadPDFButton className="ml-auto" />
              ) : (
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
              )}
            </div>
          </div>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};

const Navbar = React.memo(NavbarComponent);

export default Navbar;
