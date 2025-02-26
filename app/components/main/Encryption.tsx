"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex relative items-center justify-center min-h-[40rem] w-full h-full max-w-screen-xl mx-auto mt-40">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          className="text-4xl font-medium text-center"
          variants={slideInFromTop}
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &{" "}
          </span>
          security
        </motion.div>
      </div>
      <div className="flex items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/assets/LockTop.webp"
            alt="Lock Top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11 "
          />
          <Image
            src="/assets/LockMain.webp"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>
      </div>
      {/* <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/assets/encryption.webm"
        />{" "}
      </div> */}
      <div className="Welcome-box px-4 py-1 z-[20] border border-[#7042f88b] my-5 opacity-[0.9] mt-24">
        <h1 className="Welcome-text text-sm ">Encryption</h1>
      </div>
      <div className="absolute z-[20] bottom-2.5 px-1.5">
        <div className="cursive text-lg  font-medium text-center">
          Secure your data with end-to-end encryption
        </div>
      </div>
    </div>
  );
};

export default Encryption;
