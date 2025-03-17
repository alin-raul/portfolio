"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MyButton from "../../MyButton";
import { Copy } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import GlobeComponent from "./GlobeComponent";
import { Globe, MapPin, GraduationCap, Languages } from "lucide-react";
import Blob from "@/app/components/effects/Blob";
import MonochromeCarousel from "@/app/components/global/MonochromeCarousel";
import { TechStack } from "@/constants";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("alinnsts@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className="relative max-w-[160rem] mt-40 mx-auto" id="about">
      <Blob
        blobClass="blob-2"
        position={{
          left: "25rem",
          top: "16rem",
        }}
        width="900px"
        height="600px"
      />

      <section className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:grid xl:grid-cols-12 md:grid-rows-[minmax(auto, max-content)] grid-rows-[minmax(auto, max-content)] md:grid-cols-6 grid-cols-1 gap-5 min-h-fit items-stretch">
          <div className="xl:col-span-5 lg:col-span-4 md:col-span-4 md:h-full h-fit z-20">
            <div className="grid-card-w-space h-full">
              <p className="font-medium text-2xl">Hi, I&apos;m Raul —</p>
              <p className="grid-subtext">
                I’m a web developer with two years of JavaScript experience,
                specializing in dynamic, responsive websites.
              </p>
              <div className="flex gap-2 w-full">
                <span className="flex gap-2 items-center border px-3 py-1 rounded-full dark:bg-black-300/50 bg-white/20 backdrop-blur-md">
                  <GraduationCap className="w-4 h-4" /> Software Engineer
                </span>
              </div>
              <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[-1]"></div>
            </div>
          </div>

          <div className="xl:col-span-3 lg:col-span-2 md:col-span-2 z-20">
            <div className="grid-card-w-space overflow-auto md:min-h-full min-h-[32rem] w-full relative">
              <Image
                src={"/assets/me.webp"}
                alt="me"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
          </div>

          <div className="xl:col-span-4  md:col-span-2 md:row-span-1 md:h-full h-full z-20">
            <div className="grid-card-w-space h-full overflow-hidden relative">
              <div className="flex flex-col justify-between flex-grow">
                <p className="font-normal text-xl">Stack I use</p>
                <MonochromeCarousel icons={TechStack} reverse={false} />
              </div>
              <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[-1]"></div>
            </div>
          </div>

          <div className="xl:col-span-3 md:col-span-4 md:h-full h-fit z-20">
            <div className="grid-card-w-space h-full overflow-hidden relative">
              <p className="font-medium text-sm opacity-60">ABOUT</p>
              <p className="mt-3">
                I’m an aspiring web developer with two years of JavaScript
                experience, passionate about building dynamic, responsive
                websites.
              </p>
              <Link
                href="/about"
                className=" w-12 h-12 border border-white/40 opacity-40 hover:opacity-100 flex justify-center items-center rounded-full ml-auto mt-auto"
              >
                {<ArrowUpRight />}
              </Link>
              <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[-1]"></div>
            </div>
          </div>

          <div className="xl:col-span-4 md:col-span-3 md:h-full h-fit z-20">
            <div className="grid-card-w-space h-full">
              <div>
                <p className="font-normal text-xl">My Passion</p>
                <p className="grid-subtext">
                  I love solving problems and building things through code.
                  Programming isn&apos;t just my profession—it&apos;s my
                  passion. I enjoy exploring new technologies, and enhancing my
                  skills.
                </p>
              </div>
              <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[-1]"></div>
            </div>
          </div>

          <div className="xl:col-span-5 md:col-span-3 row-span-1 md:h-full z-20">
            <div className="grid-card-w-space h-full relative overflow-hidden min-h-96">
              <div className="container-wrapper">
                <div className="font-normal text-xl flex gap-2 items-center">
                  <Globe className="w-5 h-5" /> Flexible & Multilingual
                </div>

                {/* Visible when container ≥324px */}
                <p className="mt-3 max-w-full show-if-wide">
                  I am a dynamic and adaptable professional <br />
                  based in Brașov, Romania, with a global <br />
                  outlook & commitment to teamwork.
                  <br />
                  Open to remote work worldwide.
                </p>

                {/* Visible when container <324px */}
                <p className="mt-3 max-w-full hide-if-wide">
                  I am a dynamic and adaptable professional based in Brașov,
                  Romania, with a global outlook & commitment to teamwork. Open
                  to remote work worldwide.
                </p>
              </div>
              <div className="flex flex-wrap gap-1 mt-auto z-[30]">
                <span className="flex gap-2 items-center border px-3 py-1 rounded-full dark:bg-black-300/50 bg-white/20 backdrop-blur-md">
                  <MapPin className="w-4 h-4" />
                  Brașov, RO
                </span>
                <span className="flex gap-2 items-center border px-3 py-1 rounded-full dark:bg-black-300/50 bg-white/20 backdrop-blur-md">
                  <Languages className="w-4 h-4" /> ENG, RO, IT, DE
                </span>
              </div>
              <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[0]"></div>
              <GlobeComponent />
            </div>
          </div>

          <div className="xl:col-span-5  md:col-span-2 md:h-full h-fit z-20">
            <div className="grid-card-w-space h-full">
              <div className="space-y-2">
                <p className="font-normal text-xl mb-6">
                  Have a project in mind?
                </p>
                <MyButton
                  name={"Copy email"}
                  containerClass={"w-full"}
                  isBeam={false}
                  click={() => handleCopy()}
                  icon={<Copy className="w-4 h-4" />}
                />
              </div>
              <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
