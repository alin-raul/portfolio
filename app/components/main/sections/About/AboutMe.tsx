"use client";

import React from "react";
import PhotosOfMe from "./PhotosOfMe";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HobbiesCarousel from "@/app/components/global/HobbiesCarousel";
import { motion } from "framer-motion";
import { sectionFadeInVariants } from "@/utils/motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const commonCardClasses =
  "group w-fit px-5 hover:px-6 py-4 flex gap-2 items-center transition-all duration-400 underline font-light hover:font-semibold hover:rounded-xl";

const commonIconClasses =
  "opacity-90 hidden hover:flex group-hover:flex transition-opacity duration-400";

const AboutMe = () => {
  return (
    // Removed motion props from the main outer div. It's now just a container.
    <div className="mt-40 max-w-screen-xl mx-auto" id="top">
      {/* This inner div is for structure, not animation */}
      <div>
        {/* Section 1: Heading */}
        <motion.p
          className="text-xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
          variants={sectionFadeInVariants} // Apply the new variant
        >
          Hello, I&apos;m Raul Alin Nastase
          <br />
          <span>Full-Stack Web Developer</span>
        </motion.p>

        {/* Section 2: PhotosOfMe */}
        {/* Wrap PhotosOfMe in a motion.div */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
          variants={sectionFadeInVariants} // Apply the new variant
        >
          <PhotosOfMe />
        </motion.div>

        {/* Section 3: About Me */}
        {/* Apply motion directly to the section container */}
        <motion.section
          className="lg:flex items-center h-full my-40"
          id="about-me"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
          variants={sectionFadeInVariants} // Apply the new variant
        >
          {/* The inner div for flex layout doesn't need to be a motion component */}
          <div className="lg:flex w-full">
            <div className="lg:w-1/2">
              {/* You could make this text animate later if needed, but
                  for now the whole section block animates together */}
              <p className="text-3xl sx:text-5xl font-bold mb-8">About</p>
            </div>
            <div className="lg:w-1/2 w-full font-normal text-base sm:text-2xl">
              <p className="mb-8">
                I have always been fascinated by how technology can connect
                people and solve real-world problems. My journey into web
                development began 2 years ago, and since then, I have been
                learning the foundations of full-stack development through
                self-study and structured courses.
              </p>
              <p className="mb-8">
                Recently, I completed the{" "}
                <Link
                  href={"https://digitalnation.ro/"}
                  target="_blank"
                  className="text-cyan-500 hover:underline visited:text-cyan-700/60"
                >
                  Digital Nations
                </Link>{" "}
                Advance JavaScript course and earned a certificate, which has
                strengthened my understanding of core programming concepts and
                best practices. I am passionate about creating functional,
                intuitive, and accessible web applications that provide value to
                users.
              </p>
              <p>
                While I am just starting my professional journey, I have worked
                on small personal projects and am eager to take on new
                challenges. My goal is to continue growing as a developer,
                contribute to meaningful projects, and further develop my skills
                in both front-end and back-end technologies.
              </p>
              <Link
                href="/certificate/Digital-Nation-Certificate.pdf"
                target="_blank"
                className={`${commonCardClasses} ml-auto mt-8 mb-4`}
              >
                <ArrowUpRight className={commonIconClasses} />
                View certificate
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Section 4: HobbiesCarousel */}
        {/* Wrap HobbiesCarousel in a motion.div */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
          variants={sectionFadeInVariants}
        >
          <HobbiesCarousel reverse={false} />
        </motion.div>

        {/* Section 5: Experience */}
        {/* Apply motion directly to the div container */}
        <motion.div
          className="flex items-center h-[36rem] my-20"
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
          variants={sectionFadeInVariants} // Apply the new variant
        >
          {/* The inner section for flex layout doesn't need to be a motion component */}
          <section className="md:flex w-full">
            <div className="w-1/2">
              <p className="text-3xl sx:text-5xl font-bold mb-16">Experience</p>
            </div>
            <div className="lg:w-1/2">
              <div className="font-normal text-2xl">
                <div className="mb-8 pb-4 border-b">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                    Digital Nation
                  </h2>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-2">
                    Advanced JavaScript
                  </h4>
                  <p className="text-base sm:text-xl">08/2024 - 12/2024</p>
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
      </div>{" "}
      {/* End of inner content wrapper div */}
      {/* Contact and Footer are outside the main scroll-animated flow */}
      <Contact />
      <Footer />
    </div> // End of main outer container div
  );
};

export default AboutMe;
