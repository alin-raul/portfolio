"use client";

import { itemAnimationVariants } from "@/utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const PhotosOfMe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["15%", "25%"]);

  return (
    <div ref={ref} className="relative h-[40rem] my-20 w-full">
      {/* Left Image - Becomes top image on mobile */}
      <motion.div
        style={{ y: y1 }}
        className="flex justify-center items-center absolute md:top-[10%] md:left-3 left-[10%]
     mx-auto mt-8 md:mt-0 md:w-auto h-[20rem] w-[25rem] xl:h-[32rem] md:h-[38rem] z-10 
        overflow-hidden"
        variants={itemAnimationVariants}
      >
        <Image
          src="/photos/photo-2.webp"
          alt="Image of me"
          width={400}
          height={800}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Center Image - Becomes middle image on mobile */}
      <motion.div
        style={{ y: y2 }}
        className="flex justify-center items-center absolute xl:top-[26%] xl:right-[36%] md:top-0 bottom-0 right-0 md:right-[10%] mx-auto my-8 md:my-0 w-[16rem] md:w-auto h-[20rem] md:h-[30rem] z-20  overflow-hidden"
        variants={itemAnimationVariants}
      >
        <Image
          src="/photos/photo-1.webp"
          alt="Image of me"
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Right Image - Becomes bottom image on mobile */}
      <motion.div
        style={{ y: y3 }}
        className="absolute md:bottom-0 bottom-0 md:right-0 mx-auto mb-8 md:mb-0 
        w-[20rem] h-[16rem] md:w-[28rem] md:h-[20rem] z-30 
        overflow-hidden"
        variants={itemAnimationVariants}
      >
        <Image
          src="/photos/photo-3.webp"
          alt="Image of me"
          width={500}
          height={400}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default PhotosOfMe;
