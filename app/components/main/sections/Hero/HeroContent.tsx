"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function HeroContent() {
  return (
    <motion.div
      id="home"
      initial="hidden"
      animate="visible"
      className="px-4 w-full h-full z-[40] relative max-w-screen-xl mx-auto mt-[8px]"
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <motion.div
          variants={slideInFromTop}
          className="w-fit h-fit p-2 relative"
        >
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="text-md my-5 max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem]"
          >
            <div className="w-fit px-6 py-2 rounded-full outline outline-1 outline-accent-foreground/30 backdrop-blur-md bg-accent/10">
              <span className="opacity-90">2024-25</span>
            </div>
          </motion.div>

          <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] 2xl:text-[12rem] font-title text-center">
            <span>Portfolio</span>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <motion.div
              variants={slideInFromLeft(0.8)}
              className="text-md max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem]"
            >
              <Link href={"#contact"}>
                <div className="group w-fit px-4 py-2 rounded-full flex gap-2 items-center outline outline-1 outline-accent-foreground/30 hover:outline-accent-foreground/100 transition-all duration-200 backdrop-blur-md bg-accent/10 hover:bg-accent/40">
                  <span className="opacity-70 group-hover:opacity-100 cursor-pointer flex justify-center items-center gap-1 transition-opacity duration-200 ">
                    <ArrowUpRight className="opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="translate-y-[0.02rem]">
                      Get in Contact
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
            <motion.div
              variants={slideInFromLeft(1)}
              className="text-md max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem]"
            >
              <Link href={"#contact"}>
                <div className="group w-fit px-4 py-2 rounded-full flex gap-2 items-center outline outline-1 outline-accent-foreground/30 hover:outline-accent-foreground/100 transition-all duration-200 backdrop-blur-md bg-accent/10 hover:bg-accent/40">
                  <span className="opacity-70 group-hover:opacity-100 cursor-pointer flex justify-center items-center gap-1 transition-opacity duration-200">
                    <ArrowUpRight className="opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="translate-y-[0.02rem]">View CV</span>
                  </span>
                </div>
              </Link>
            </motion.div>
            <motion.div
              variants={slideInFromLeft(1)}
              className="ml-auto text-md max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem]"
            >
              <Link href={"#contact"}>
                <div className="group w-fit px-4 py-2 rounded-full flex gap-2 items-center outline outline-1 outline-accent-foreground/30 hover:outline-accent-foreground/100  transition-all duration-200 backdrop-blur-md bg-accent/10 hover:bg-accent/40">
                  <span className="opacity-70 group-hover:opacity-100 cursor-pointer flex justify-center items-center gap-1 transition-opacity duration-200">
                    <ArrowUpRight className="opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="translate-y-[0.02rem]">
                      Feeling lucky ?
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroContent;
