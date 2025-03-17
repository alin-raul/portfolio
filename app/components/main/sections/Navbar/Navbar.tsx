"use client";

import React from "react";
import { NavLinksPortfolio, NavLinksAbout } from "./NavLinks";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSidebar } from "@/context/SidebarContext";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { isVisible, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <div className="nav-bg-dynamic w-full h-14 fixed top-0 left-0 z-50">
      <nav className="w-full h-full flex items-center justify-between mx-auto max-w-screen-2xl px-6 md:px-4 nav-bg-dynamic-small">
        <div className="flex font-semibold items-center justify-between py-2 pl-1 md:px-6 relative rounded-full h-full">
          <span className="font-black text-nowrap text-xl font-dot ">
            {["/about"].includes(pathname) ? (
              <Link href={"/#about"} className="flex items-center gap-6">
                <ArrowLeft className="w-5 h-5 opacity-60 hover:opacity-100" />R
                A N : // PORTFOLIO
              </Link>
            ) : (
              "R A N : // FULL-STACK WEB DEVELOPER"
            )}
          </span>
        </div>

        <div className="gap-3 md:gap-6 font-semibold py-2 px-4 ml-auto relative md:px-10 h-auto hidden md:flex">
          {["/about"].includes(pathname) ? (
            <NavLinksAbout className="flex gap-4 items-center justify-between font-dot" />
          ) : (
            <NavLinksPortfolio className="flex gap-4 items-center justify-between font-dot" />
          )}
        </div>
        <button onClick={toggleSidebar} className="z-50 relative">
          {!isVisible ? (
            <Bars2Icon className="md:hidden w-6 h-6" />
          ) : (
            <XMarkIcon className="md:hidden w-6 h-6" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
