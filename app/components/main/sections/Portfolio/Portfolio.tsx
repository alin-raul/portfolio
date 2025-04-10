"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ArrowUpRight, Github, CircleEllipsis } from "lucide-react";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  icon: string;
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
  icon,
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
      className="card-w-space w-full z-30 overflow-hidden " // add group for hovering
      variants={slideInFromLeft(index * 1.2)}
      initial="hidden"
      animate="visible"
    >
      <div className="relative">
        <div className="relative w-full h-fit dark:brightness-50 brightness-100 group-hover:brightness-100 blur-xl group-hover:blur-none transition-all duration-300">
          <Image
            width={700}
            height={500}
            alt="vercel"
            src={`${currentTheme === "light" ? image.light : image.dark}`}
            className="w-full sm:h-[20rem] h-[22rem] object-top object-cover rounded-t-[2rem] scale-110 group-hover:scale-100 transition-all duration-200"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-30 group-hover:opacity-0 group-hover:blur-md transition-all duration-200">
          <Image
            width={300}
            height={200}
            src={icon}
            className="w-24 h-24"
            alt="icon"
          />
        </div>
      </div>

      <div className="flex flex-col flex-grow gap-2 justify-around p-8">
        <div>
          <h3 className="font-bold text-2xl">{name}</h3>
          <p className="mt-2 opacity-70 text-sm font-semibold">{description}</p>
        </div>

        <div className="flex flex-wrap mt-5 gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className="opacity-60 hover:opacity-100 cursor-pointer"
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="flex justify-between mt-2">
          <div className="flex gap-2">
            <Button
              className="rounded-xl p-3 hover:outline outline-1 outline-accent-foreground/30 bg-accent/30 backdrop-blur-md transition-all duration-200"
              variant="secondary"
            >
              <ArrowUpRight />
              DEMO
            </Button>
            <Link
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="rounded-xl hover:outline outline-1 outline-accent-foreground/30 bg-accent/30 backdrop-blur-md transition-all duration-200"
                variant="secondary"
              >
                <Github />
                VIEW CODE
              </Button>
            </Link>
          </div>

          <Link
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="rounded-xl hover:outline outline-1 outline-accent-foreground/30 transition-all duration-200"
              variant="ghost"
            >
              <CircleEllipsis />
              MORE
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section className="mt-40" id="projects">
      <div className="max-w-screen-2xl m-auto z-50">
        <motion.div
          variants={slideInFromLeft(1)}
          initial="hidden"
          animate="visible"
        >
          <p className="opacity-80 mb-6">PORTFOLIO</p>
          <p className="font-bold text-5xl mb-4">Projects I built </p>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(1.2)}
          initial="hidden"
          animate="visible"
          className="mt-3 text-[17px] leading-[30px] z-[30]"
        >
          <p className="opacity-60">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
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
    </section>
  );
};

export default Portfolio;
