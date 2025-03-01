"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { slideInFromTop } from "@/utils/motion";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: {
    light: string;
    dark: string;
  };
  source_code_link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { resolvedTheme = "light" } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    if (resolvedTheme) {
      setCurrentTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  return (
    <motion.div
      className="card-w-space w-full z-30"
      variants={slideInFromLeft(index * 1.2)}
      initial="hidden"
      animate="visible"
    >
      <div className="relative w-full h-fit ">
        <Image
          width={500}
          height={400}
          alt="vercel"
          src={`${currentTheme === "light" ? image.light : image.dark}`}
          className="w-full sm:h-[20rem] h-[22rem] object-top object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 ">
          <Link
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 link-btn"
          >
            <Image
              src="/assets/github-142-svgrepo-com.svg"
              alt="GitHub"
              height={24}
              width={24}
              className="dynamic-icon opacity-70 hover:opacity-100 cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="mt-2 opacity-70 text-sm font-semibold">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={tag.name}
            className={`text-sm px-2 py-1 rounded-full ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="max-w-screen-2xl m-auto z-50 " id="projects">
      <motion.div
        variants={slideInFromLeft(1)}
        initial="hidden"
        animate="visible"
      >
        <p className="opacity-80 font-dot">MY WORKS</p>
        <p className="text-5xl font-bold font-title">Projects.</p>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(1.2)}
        initial="hidden"
        animate="visible"
        className="mt-3 text-[17px] leading-[30px] z-[30]"
      >
        <p className="opacity-60">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </motion.div>

      <div
        className="mt-20 grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 1fr))",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
