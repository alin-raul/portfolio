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

// const SpinningText = () => {
//   return (
//     <motion.div
//       animate={{ rotate: 0 }}
//       transition={{
//         repeat: Infinity,
//         duration: 20,
//         ease: "linear",
//       }}
//       className="absolute w-80 h-80 top-[-230] right-0 "
//     >
//       <svg viewBox="0 0 200 200" className="w-full h-full rotate-[210deg]">
//         <path
//           id="curve"
//           d="M100 25 a75 75 0 1 1 0 150 a75 75 0 1 1 0 -150"
//           fill="none"
//         />
//         <text className="text-[1rem] fill-current font-dot ">
//           <textPath
//             href="#curve"
//             startOffset="50%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//           >
//             FULL-STACK WEB DEVELOPER •
//           </textPath>
//         </text>
//       </svg>
//     </motion.div>
//   );
// };

function HeroContent() {
  return (
    <motion.div
      id="home"
      initial="hidden"
      animate="visible"
      className="px-4 w-full h-full z-[40] relative max-w-screen-xl mx-auto mt-[8px]"
    >
      {/* <div className="absolute w-full top-1/2 ">
        <SpinningText />
      </div> */}

      <div className="flex flex-col items-center justify-center h-full w-full">
        <motion.div
          variants={slideInFromTop}
          className="w-fit h-fit p-2 relative"
        >
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="text-md my-5 max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem]"
          >
            <div className="border-2 w-fit px-6 py-2 rounded-full border-black/60 dark:border-gray-200/50 ">
              <span className="font-bold font-dot opacity-90">2024-25</span>
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
                <div className="group border-2 w-fit px-4 py-2 rounded-full flex gap-2 items-center font-bold font-dot border-black/40 dark:border-gray-200/50 hover:border-black hover:dark:border-gray-200 transition-all duration-200">
                  <span className="opacity-70 group-hover:opacity-100 cursor-pointer flex justify-center items-center gap-1 transition-opacity duration-200">
                    <ArrowUpRight className="opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="translate-y-[0.02rem]">
                      GET IN CONTACT
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
                <div className="group border-2 w-fit px-4 py-2 rounded-full flex gap-2 items-center font-bold font-dot border-black/40 dark:border-gray-200/50 hover:border-black hover:dark:border-gray-200 transition-all duration-200">
                  <span className="opacity-70 group-hover:opacity-100 cursor-pointer flex justify-center items-center gap-1 transition-opacity duration-200">
                    <ArrowUpRight className="opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="translate-y-[0.02rem]">GET CV</span>
                  </span>
                </div>
              </Link>
            </motion.div>
            <motion.div
              variants={slideInFromLeft(1)}
              className="text-md max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem]"
            >
              <Link href={"#contact"}>
                <div className="group border-2 w-fit px-4 py-2 rounded-full flex gap-2 items-center font-bold font-dot border-black/40 dark:border-gray-200/50 hover:border-black hover:dark:border-gray-200 transition-all duration-200">
                  <span className="opacity-70 group-hover:opacity-100 cursor-pointer flex justify-center items-center gap-1 transition-opacity duration-200">
                    <ArrowUpRight className="opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="translate-y-[0.02rem]">FEELING LUCKY</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

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
