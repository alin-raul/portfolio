"use client";

import React from "react";
import PhotosOfMe from "./PhotosOfMe";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HobbiesCarousel from "@/app/components/global/HobbiesCarousel";
import { motion } from "framer-motion";
import {
  containerAnimationVariants,
  itemAnimationVariants,
} from "@/utils/motion";

const AboutMe = () => {
  return (
    <motion.div
      variants={containerAnimationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mt-40 max-w-screen-xl mx-auto" id="top">
        <div>
          <motion.p
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
            variants={itemAnimationVariants}
          >
            Hello, I&apos;m Raul Alin Nastase
            <br />
            <span>Full-Stack Web Developer</span>
          </motion.p>

          <PhotosOfMe />

          <motion.section
            className="lg:flex items-center h-full my-40"
            variants={itemAnimationVariants}
          >
            <div className="lg:flex w-full" id="about-me">
              <div className="lg:w-1/2">
                <p className="text-5xl font-bold mb-8">About</p>
              </div>

              <div className="lg:w-1/2 w-full font-normal text-2xl">
                <p className="mb-8">
                  I have always been fascinated by how technology can connect
                  people and solve real-world problems. My journey into web
                  development began 1.5 years ago, and since then, I have been
                  learning the foundations of full-stack development through
                  self-study and structured courses.
                </p>
                <p className="mb-8">
                  Recently, I completed the Digital Nations Advance JavaScript
                  course and earned a certificate, which has strengthened my
                  understanding of core programming concepts and best practices.
                  I am passionate about creating functional, intuitive, and
                  accessible web applications that provide value to users.
                </p>
                <p>
                  While I am just starting my professional journey, I have
                  worked on small personal projects and am eager to take on new
                  challenges. My goal is to continue growing as a developer,
                  contribute to meaningful projects, and further develop my
                  skills in both front-end and back-end technologies.
                </p>
              </div>
            </div>
          </motion.section>

          <HobbiesCarousel reverse={false} />

          <motion.div
            className="flex items-center h-[36rem] my-20"
            variants={itemAnimationVariants}
          >
            <section className="md:flex w-full" id="experience">
              <div className="w-1/2">
                <p className="text-5xl font-bold mb-16">Experience</p>
              </div>
              <div className="lg:w-1/2">
                <div className="font-normal text-2xl">
                  <div className="mb-8 pb-4 border-b">
                    <h2 className="text-4xl font-bold mb-2">Digital Nation</h2>
                    <h4 className="text-2xl font-semibold mb-2">
                      Advanced JavaScript
                    </h4>
                    <p className="text-xl">08/2024 - 12/2024</p>
                  </div>

                  <div className="mb-8 pb-4 border-b">
                    <h2 className="text-4xl font-bold mb-2">
                      Start of my journey
                    </h2>
                    <h4 className="text-2xl font-semibold mb-2">Self-taught</h4>
                    <p className="text-xl">2023</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <Contact />
      <Footer />
    </motion.div>
  );
};

export default AboutMe;
