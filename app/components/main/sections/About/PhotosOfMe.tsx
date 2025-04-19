"use client";

import {
  containerAnimationVariants,
  itemAnimationVariants,
} from "@/utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const PhotosOfMe = () => {
  const ref = useRef(null);
  // Ensure the target is the outer motion.div using the ref
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects (Keep these as they work with scroll)
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["15%", "25%"]);

  return (
    // Parent container: Triggers whileInView and staggers children
    <motion.div
      ref={ref}
      className="relative h-[40rem] my-20 w-full"
      variants={containerAnimationVariants} // Use container variants for the parent
      initial="hidden"
      whileInView="visible" // Trigger animation when this div is in view
      viewport={{ once: true, amount: 0.2 }} // Adjust amount as needed, 0.2 is common
    >
      {/* Child Image 1 */}
      <motion.div
        style={{ y: y1 }} // Keep parallax style
        className="flex justify-center items-center absolute md:top-[10%] md:left-3 left-[10%]
                   mx-auto mt-8 md:mt-0 md:w-auto h-80 w-60 xs:h-[20rem] xs:w-[25rem] xl:h-[32rem] md:h-[38rem] z-10
                   overflow-hidden"
        variants={itemAnimationVariants} // Use item variants for the child
        // CORRECTED: Removed initial, animate, exit props
        // These are now controlled by the parent's whileInView + staggerChildren
      >
        <Image
          src="/photos/photo-2.webp"
          alt="Image of me"
          width={400}
          height={800}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Child Image 2 (Center Image - Becomes middle image on mobile) */}
      <motion.div
        style={{ y: y2 }} // Keep parallax style
        className="flex justify-center items-center absolute xl:top-[26%] xl:right-[36%] bottom-16 md:top-0 xs:bottom-0 right-0 md:right-[10%] mx-auto my-8 md:my-0 w-52 h-72 xs:w-[16rem] md:w-auto xs:h-[20rem] md:h-[30rem] z-20  overflow-hidden"
        variants={itemAnimationVariants} // Use item variants for the child
        // CORRECTED: Removed initial, animate, exit props
      >
        <Image
          src="/photos/photo-1.webp"
          alt="Image of me"
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Child Image 3 (Right Image - Becomes bottom image on mobile) */}
      <motion.div
        style={{ y: y3 }} // Keep parallax style
        className="absolute md:bottom-0 bottom-0 md:right-0 mx-auto mb-8 md:mb-0
                   xs:w-[20rem] h-52 w-64 xs:h-[16rem] md:w-[28rem] md:h-[20rem] z-30
                   overflow-hidden"
        variants={itemAnimationVariants} // Use item variants for the child
        // CORRECTED: Removed initial, animate, exit props
      >
        <Image
          src="/photos/photo-3.webp"
          alt="Image of me"
          width={500}
          height={400}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default PhotosOfMe;
