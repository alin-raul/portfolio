"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MyButton from "../../MyButton";
import { Copy } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { TechStack } from "@/constants";

const InfiniteCarousel = () => {
  return (
    <div className="max-w-screen-2xl">
      <div className="carousel overflow-hidden relative ">
        {[...Array(2)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="group-carousel-links flex animate-scroll"
          >
            {TechStack.map((icon, index) => (
              <div
                key={index}
                className="group carousel-link p-2 border rounded-3xl transition-all "
              >
                <div className="flex justify-center items-center min-h-12 min-w-12">
                  <Image
                    src={icon.image}
                    alt={icon.name}
                    width={icon.width}
                    height={icon.height}
                    className={`object-contain ${
                      icon.dynamic ? "icon" : ""
                    } origin-center`}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

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
    <section className="my-40 max-w-screen-2xl mx-auto" id="about">
      <div className="grid xl:grid-cols-12 xl:grid-rows-auto md:grid-cols-6 grid-cols-1 gap-5 h-full">
        <div className="xl:col-span-5 lg:col-span-4 md:col-span-4 z-20">
          <div className="card-w-space">
            <p className="font-medium text-2xl">Hi, I&apos;m Raul —</p>
            <p className="grid-subtext">
              I’m a web developer with two years of JavaScript experience,
              specializing in dynamic, responsive websites.
            </p>
          </div>
        </div>

        <div className="xl:col-span-3 lg:col-span-2 md:col-span-2 z-20">
          <div className="card-w-space overflow-auto min-h-64">
            <Image
              src={"/assets/placeholder.webp"}
              alt="me"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="xl:col-span-4 lg:col-span-3 md:col-span-3 z-20">
          <div className="card-w-space ">
            <p className="font-medium text-sm opacity-60">ABOUT</p>
            <p className="mt-3">
              I’m an aspiring web developer with two years of JavaScript
              experience, passionate about building dynamic, responsive
              websites.
            </p>
            <Link
              href=""
              className="w-12 h-12 border flex justify-center items-center rounded-full ml-auto"
            >
              {<ArrowUpRight className="opacity-70 hover:opacity-100" />}
            </Link>
          </div>
        </div>

        <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 md:row-span-1  z-20">
          <div className="card-w-space overflow-hidden relative">
            <div className="flex flex-col justify-between flex-grow">
              <p className="font-normal text-xl">Stack I use</p>

              <InfiniteCarousel />
            </div>
          </div>
        </div>

        <div className="xl:col-span-6 lg:col-span-4 md:col-span-3 z-20">
          <div className="card-w-space">
            <div>
              <p className="font-normal text-xl">My Passion</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-3 lg:col-span-2 md:col-span-3 z-20">
          <div className="card-w-space">
            <div>
              <p className="font-normal text-xl">Flexibility</p>
              <p className="grid-subtext">
                Based in Brașov, România, I am open to remote work opportunities
                worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-5 lg:col-span-3 md:col-span-3 z-20">
          <div className="card-w-space">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
