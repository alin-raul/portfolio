"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  src: string;
  width: number;
  height: number;
  index: number;
  dynamicClass?: boolean;
};

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  dynamicClass,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * animationDelay }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        className={`w-auto h-auto ${dynamicClass ? "icon" : ""}`}
      />
    </motion.div>
  );
};

export default SkillDataProvider;
