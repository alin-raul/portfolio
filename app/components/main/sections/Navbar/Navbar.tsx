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
    <div className="w-full h-14 fixed top-0 left-0 z-50">
      <nav className="w-full h-full mx-auto max-w-screen-2xl px-0 md:px-4">
        <div className="flex items-center justify-between outline outline-accent-foreground/10 outline-1 rounded-none md:rounded-2xl dark:bg-black/60 bg-white/50 backdrop-blur-md md:mt-4 h-full px-6 md:px-0">
          <div className="flex font-semibold items-center justify-between py-2 pl-1 md:px-6 relative rounded-full h-full">
            <span className="text-nowrap text-xl">
              {(() => {
                if (pathname === "/about") {
                  return (
                    <Link href={"/#about"} className="flex items-center gap-6 ">
                      <div className="rounded-2xl p-2 hover:outline outline-1 outline-accent-foreground/30 opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out">
                        <ArrowLeft className="w-5 h-5" />
                      </div>
                      <span>R A N : // PORTFOLIO</span>
                    </Link>
                  );
                }

                if (pathname === "/curriculum") {
                  return (
                    <Link href={"/#about"} className="flex items-center gap-6 ">
                      <div className="rounded-2xl p-2 hover:outline outline-1 outline-accent-foreground/30 opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out">
                        <ArrowLeft className="w-5 h-5" />
                      </div>
                      <span>R A N : // CURRICULUM</span>
                    </Link>
                  );
                }

                // You can add more `if` blocks here for other paths

                return (
                  <span className="hidden lg:block">
                    R A N : // FULL-STACK WEB DEVELOPER
                  </span>
                );
              })()}
            </span>
          </div>

          <div className="ont-semibold py-2 px-4 ml-auto relative md:px-10 h-auto hidden md:flex">
            {["/about"].includes(pathname) ? (
              <NavLinksAbout />
            ) : (
              <NavLinksPortfolio />
            )}
          </div>
          <button onClick={toggleSidebar} className="z-50 relative">
            {!isVisible ? (
              <Bars2Icon className="md:hidden w-6 h-6" />
            ) : (
              <XMarkIcon className="md:hidden w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
