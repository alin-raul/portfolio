"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "../About/About";
import TextWeightGradient from "./TextWeightGradient";

function HeroTextSection() {
  return (
    <motion.div
      id="home"
      initial="hidden"
      animate="visible"
      className="px-4 w-full h-full z-[40] relative max-w-screen-xl mx-auto mt-[8px]"
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <TextWeightGradient />
      </div>
    </motion.div>
  );
}

export default HeroTextSection;
