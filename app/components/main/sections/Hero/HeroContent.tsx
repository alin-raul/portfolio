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

function HeroContent() {
  return (
    <motion.div
      id="home"
      initial="hidden"
      animate="visible"
      className="px-4 w-full h-full z-[40] relative max-w-screen-xl mx-auto mt-[8px]"
    >
      {/* <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-3 px-3 border border-[#7042f88b] opacity-[0.9] mx-auto"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-md">Fullstack Developer Portfolio</h1>
      </motion.div> */}

      <div className="flex flex-col items-center justify-center h-full w-full">
        <motion.div
          variants={slideInFromTop}
          className="w-full h-fit text-center p-2 font-bold"
        >
          <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span>
              Raul-Alin Năstase
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl ">
                Full-Stack Web Developer
              </span>
            </span>
          </span>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-sm lg:text-lg xl:text-xl my-5 mx-auto max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem] font-bold  "
          >
            <span className="opacity-70">
              Hey, I&apos;m Raul! A Full Stack Software Engineer with a strong
              passion for building web applications with great user experience.
            </span>
          </motion.p>
        </motion.div>

        <div className="flex my-6 gap-6">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-3 px-4 button-primary text-center cursor-pointer rounded-2xl max-w-40 shadow-md backdrop-blur-sm"
          >
            Get in contact
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            className="dynamic-link flex gap-2 py-3 px-4 text-center cursor-pointer hover:underline underline-offset-8 group"
          >
            Download CV
            <DocumentTextIcon className="h-5 w-5 transition-all" />
          </motion.a>
        </div>
        <div className="gap-5 flex absolute bottom-8">
          <motion.div variants={slideInFromLeft(1.4)}>
            <Link
              href="https://www.linkedin.com/in/alinraul/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/linkedin.svg"
                alt="Linkedin"
                height={20}
                width={20}
                className="dynamic-icon opacity-70 hover:opacity-100 cursor-pointer"
              />
            </Link>
          </motion.div>
          <motion.div variants={slideInFromLeft(1.5)}>
            <Link
              href="https://www.instagram.com/alin.raul/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/instagram.svg"
                alt="Instagram"
                height={24}
                width={24}
                className="dynamic-icon opacity-70 hover:opacity-100 cursor-pointer"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroContent;
