"use client";

import React from "react";
import MyForm from "./MyForm";
import MovingLightShade from "@/app/components/effects/MovingLightShade";
import Blob from "@/app/components/effects/Blob";
import {
  containerAnimationVariants,
  itemAnimationVariants,
} from "@/utils/motion";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative max-w-[160rem] my-40 mx-auto">
      <Blob
        blobClass="blob-2"
        position={{
          right: "0rem",
          top: "30rem",
        }}
        width="900px"
        height="600px"
      />
      <section
        className="flex justify-center items-center rounded-2xl max-w-screen-xl mx-auto md:p-8 h-[50rem]"
        id="contact"
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Text Section */}
          <motion.div
            className="flex flex-col z-40"
            variants={itemAnimationVariants}
          >
            <p className="font-medium text-sm opacity-70 mb-8">CONTACT ME</p>
            <div className="mb-1">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Let’s work together
              </h1>
              <p className="text-base opacity-80 mr-6">
                Currently available for new web development work! If you have a
                project, a question, or just want to talk about the next big
                thing, I&apos;d love to hear from you. Let&apos;s connect and
                create something awesome!
              </p>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={itemAnimationVariants}
          >
            <MyForm />
          </motion.div>
          {/* <MovingLightShade fill="rgb(67, 21, 221)" /> */}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
