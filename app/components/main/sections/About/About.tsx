"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import MyButton from "../../MyButton";
import { useTheme } from "next-themes";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    if (resolvedTheme) {
      setCurrentTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  const handleCopy = () => {
    navigator.clipboard.writeText("alinnsts@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="my-20 max-w-screen-2xl mx-auto" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 z-20">
          <div className="card-w-space">
            <div className="flex-1 w-full sm:h-[276px] min-h-56 h-fit relative">
              <Image
                src="/assets-2/grid1.webp"
                alt="grid-1"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain icon"
              />
            </div>

            <div>
              <p className="grid-headtext">Hi, I’m Raul!</p>
              <p className="grid-subtext">
                Although I don&apos;t have professional work experience yet, I
                have been learning JavaScript for nearly two years. I also
                completed an advanced JavaScript course at DigitalNation, which
                spanned four months. During this time, I&apos;ve been dedicated
                to building my skills in frontend and backend development,
                focusing on creating dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 z-20">
          <div className="card-w-space">
            <div className="flex-1 w-full sm:h-[276px] min-h-56 h-fit relative">
              <Image
                src={`${
                  currentTheme === "light"
                    ? "/assets-2/grid2-light.webp"
                    : "/assets-2/grid2-dark.webp"
                }`}
                alt="grid-2"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-contain"
              />
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a range of languages, frameworks, and tools that
                empower me to create robust, scalable, and dynamic applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4 z-20">
          <div className="card-w-space">
            <div className="flex-1 rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl={`//unpkg.com/three-globe/example/img/earth-${
                  currentTheme === "dark" ? "night" : "day"
                }.jpg`}
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 45.657974,
                    lng: 25.601198,
                    text: "I'm here",
                    color: "white",
                    size: 40,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m flexible with time zones and communication.
              </p>
              <p className="grid-subtext">
                Based in Brașov, România, I am open to remote work opportunities
                worldwide.
              </p>
              <MyButton
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10 active:scale-95"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 z-20">
          <div className="card-w-space">
            <div className="flex-1 w-full sm:h-[266px] min-h-56 h-fit relative">
              <Image
                src="/assets-2/grid3.webp"
                alt="grid-3"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain icon"
              />
            </div>

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2 z-20">
          <div className="card-w-space">
            <div className="flex-1 w-full md:h-[200px] sm:h-[276px] min-h-48 h-fit relative flex justify-center items-center">
              <Image
                src="/assets-2/grid4.webp"
                alt="grid-4"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover sm:object-contain icon"
              />
            </div>

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="flex gap-4 justify-center" onClick={handleCopy}>
                <Image
                  src={hasCopied ? "/assets-2/tick.svg" : "/assets-2/copy.svg"}
                  alt="copy"
                  layout="fixed"
                  width={40} // Match your desired Tailwind w-10 (40px)
                  height={40} // Match your desired Tailwind h-10 (40px)
                  className="icon !w-6 !h-6 cursor-pointer "
                />
                <p className="font-medium">alinnsts@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
