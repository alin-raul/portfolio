"use client";

import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSidebar } from "@/context/SidebarContext";

const Navbar = () => {
  const { isVisible, toggleSidebar } = useSidebar();

  return (
    <div className="w-full h-14 sticky top-0 md:top-2 z-50">
      <nav className="w-full h-full flex items-center justify-between mx-auto max-w-screen-2xl px-6 md:px-4 md:mt-2 nav-bg-dynamic-small">
        <div className="flex font-semibold items-center justify-between py-2 pl-1 md:px-6 relative rounded-full h-full">
          <span className="font-black text-nowrap text-xl font- ">
            RAN : // Portfolio
          </span>
        </div>
        <div className="nav-bg-dynamic gap-3 md:gap-6 font-semibold py-2 px-4 ml-auto relative md:px-10 rounded-full h-auto hidden md:flex">
          <NavLinks className="flex gap-4 items-center justify-between" />
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
