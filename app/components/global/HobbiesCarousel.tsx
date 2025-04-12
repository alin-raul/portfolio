import React from "react";
import { Hobbies } from "@/constants";
import { motion } from "framer-motion";
import { itemAnimationVariants } from "@/utils/motion";

type HobbiesCarouselProps = {
  reverse: boolean;
};

const HobbiesCarousel: React.FC<HobbiesCarouselProps> = ({ reverse }) => {
  return (
    <motion.div
      className="max-w-screen-2xl w-full"
      variants={itemAnimationVariants}
    >
      <div className="carousel overflow-hidden relative bg-white/40 dark:bg-black-600/40 backdrop-blur-md">
        {[...Array(2)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="group-carousel-hobbies flex animate-scroll py-10 px-14"
          >
            {Hobbies.map((hobby, index) => (
              <div
                key={index}
                className="group carousel-link flex justify-center items-center w-full text-nowrap text-2xl font-bold"
              >
                {hobby}
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HobbiesCarousel;
