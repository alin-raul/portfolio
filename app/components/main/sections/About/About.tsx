"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  AtSign,
  CalendarPlus,
  Globe,
  MapPin,
  GraduationCap,
  Languages,
  Save,
  Terminal,
} from "lucide-react";
import GlobeComponent from "./GlobeComponent";
import Blob from "@/app/components/effects/Blob";
import MonochromeCarousel from "@/app/components/global/MonochromeCarousel";
import { TechStack } from "@/constants";
import ProjectsEsterEgg from "./ProjectsEsterEgg";
import SocialLinks from "./SocialLinks";
import YearsLearning from "./YearsLearning";
import VirtualPet from "./VirtualPet";
import { Button } from "@/components/ui/button";
import GrowthTimeline from "./GrowthTimeline";
import { motion } from "framer-motion";
import {
  containerAnimationVariants,
  itemAnimationVariants,
} from "@/utils/motion";

export const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`grid-card relative ${className}`}>
    {children}
    <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[-1]" />
  </div>
);

const IntroCard = () => (
  <Card className="p-[3rem] h-full">
    <p className="font-medium text-2xl">Hi, I&apos;m Raul —</p>
    <p className="grid-subtext">
      I’m a web developer with two years of JavaScript experience, specializing
      in dynamic, responsive websites.
    </p>
    <div className="flex gap-2 w-full">
      <span className="flex gap-2 items-center border px-3 py-1 rounded-full bg-accent/40 backdrop-blur-md mt-8">
        <GraduationCap className="w-4 h-4" /> Software Engineer
      </span>
    </div>
  </Card>
);

const ProfileImageCard = () => (
  <Card className="p-[3rem] overflow-auto md:min-h-full min-h-[32rem] w-full relative">
    <Image
      src={"/photos/me.webp"}
      alt="me"
      fill
      quality={100}
      className="object-cover"
    />
  </Card>
);

const TechStackCard = () => (
  <Card className="p-[3rem] flex flex-col h-full overflow-hidden">
    <p className="font-normal text-xl mb-4 md:mb-0">Stack I use</p>
    <div className="my-auto">
      <MonochromeCarousel icons={TechStack} reverse={false} />
    </div>
  </Card>
);

const PassionCard = () => (
  <Card className="p-[3rem] flex flex-col h-full">
    <p className="font-normal text-xl">My Passion</p>
    <div className="my-auto">
      <p className="opacity-60">
        I love solving problems and building things through code. Programming
        isn&apos;t just my profession—it&apos;s my passion. I enjoy exploring
        new technologies, and enhancing my skills.
      </p>
    </div>
  </Card>
);

const AboutCard = () => (
  <Card className="p-[3rem] h-full overflow-hidden relative flex flex-col">
    <p className="font-medium text-sm opacity-60">ABOUT</p>
    <div className="h-full flex flex-col">
      <p className="">
        I’m an aspiring web developer with two years of JavaScript experience,
        passionate about building dynamic, responsive websites.
      </p>
      <Link href="/about" className="ml-auto md:mt-auto mt-8">
        <Button className="group w-14 h-14 rounded-[1.6rem] border border-accent-foreground/20 flex justify-center px-5 hover:px-6 py-3 gap-3 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 bg-[var(--bg-dynamic-1)] hover:bg-white/100 text-primary dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-2xl text-lg">
          <ArrowUpRight className="!w-4 !h-4 group-hover:!w-6 group-hover:!h-6 transition-all duration-200" />
        </Button>
      </Link>
    </div>
  </Card>
);

const FlexibleCard = () => (
  <Card className="p-[3rem] h-full relative overflow-hidden min-h-80 flex flex-col">
    <div className="container-wrapper flex-grow h-full flex flex-col">
      <h1 className="font-normal text-xl flex gap-2 items-center">
        <Globe className="w-5 h-5" /> Flexible & Multilingual
      </h1>
      <div className="flex flex-wrap h-full flex-grow">
        <div className="mb-8">
          <p className="mt-3 max-w-full show-if-wide">
            I am a dynamic and adaptable professional <br />
            based in Brașov, Romania, with a global <br />
            outlook & commitment to teamwork.
            <br />
            Open to remote work worldwide.
          </p>
          <p className="mt-3 max-w-full hide-if-wide">
            I am a dynamic and adaptable professional based in Brașov, Romania,
            with a global outlook & commitment to teamwork. Open to remote work
            worldwide.
          </p>
        </div>
        <div className="flex flex-wrap gap-1 mt-auto z-[30]">
          <span className="flex gap-2 items-center border px-3 py-1 rounded-full bg-accent/40 backdrop-blur-md">
            <MapPin className="w-4 h-4" />
            Brașov, RO
          </span>
          <span className="flex gap-2 items-center border px-3 py-1 rounded-full bg-accent/40 backdrop-blur-md">
            <Languages className="w-4 h-4" /> ENG, RO, IT, DE
          </span>
        </div>
      </div>
    </div>
    <GlobeComponent />
  </Card>
);

const ContactCard = () => {
  const contactAboutLinks = [
    {
      href: "mailto:workdevraul@gmail.com",
      icon: AtSign,
      label: "Email me",
      className:
        "md:text-xl font-light group-hover:font-bold transition-all duration-400",
    },
    {
      href: "https://calendly.com/workdevraul",
      icon: CalendarPlus,
      label: "Schedule a call",
      target: "_blank",
      rel: "noopener noreferrer",
      className:
        "md:text-xl font-light group-hover:font-bold transition-all duration-400",
    },
  ];

  return (
    <Card className="flex flex-col h-full">
      <div className="pl-[3rem] pr-[3rem] pt-[3rem] pb-[1rem] flex-grow">
        <div className="flex flex-col h-full">
          <h1 className="font-normal text-2xl mb-6">Have a project in mind?</h1>
          <p className="opacity-60">
            Let’s connect—reach out via email or schedule a call to get started!
          </p>
        </div>
      </div>
      <div className="flex xl:flex-col md:flex-row gap-2 w-full p-4 mt-auto">
        {contactAboutLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target={link.target}
            rel={link.rel}
            className="group flex w-full "
          >
            <button
              className={`group w-full flex justify-center hover:px-6 py-4 rounded-3xl gap-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 bg-[var(--bg-dynamic-1)] hover:bg-white/100 dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-xl ${
                link.className || ""
              }`}
            >
              <link.icon className="w-4 h-4 group-hover:w-5 group-hover:h-5 transition-all duration-200" />
              {link.label}
            </button>
          </Link>
        ))}
      </div>
    </Card>
  );
};

const ProjectsSection = () => (
  <div className="relative grid grid-cols-2 gap-4 h-full">
    <ProjectsEsterEgg />
    <YearsLearning />
    <Card className="col-span-2 p-[3rem] flex flex-col h-full min-h-60">
      <VirtualPet />
    </Card>
  </div>
);

const GrowthCard = () => <GrowthTimeline />;

const RetroTech = () => (
  <Card className="col-span-2 p-4 relative overflow-hidden group h-full">
    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
    <div className="relative z-10 h-full flex flex-col">
      {/* Arch Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 bg-gradient-to-br from-arch-blue to-arch-silver rounded-sm flex items-center justify-center">
          <Terminal />
        </div>
        <h3 className="text-sm font-mono text-arch-silver">Arch Linux</h3>
        <span className="text-xs opacity-60 ml-auto">x86_64</span>
      </div>

      {/* Terminal Body */}
      <div className="flex-grow border border-arch-silver/20 rounded-sm bg-arch-dark/90 p-2">
        <div className="font-mono text-xs text-arch-silver space-y-1">
          <div className="flex items-center gap-1">
            <span className="text-arch-blue">[raul@portfolio ~]</span>
            <span className="text-arch-silver">$</span>
            <span className="animate-pulse">_</span>
          </div>
          <p>sudo pacman -Syu creativity</p>
          <p className="opacity-75">:: Synchronizing package databases...</p>
          <div className="h-px bg-arch-silver/20 my-1" />
          <div className="flex items-center gap-1 text-[0.65rem]">
            <span className="w-[3ch]">(1/3)</span>
            <span className="w-[20ch] bg-arch-blue/30 block animate-progress" />
            <span className="opacity-60">core.db</span>
          </div>
        </div>
      </div>

      {/* Arch-specific Footer */}
      <div className="flex gap-1.5 mt-2 flex-wrap">
        <span className="px-1.5 py-0.5 bg-arch-blue/20 rounded text-[0.6rem] tracking-tighter border border-arch-blue/30">
          Pacman
        </span>
        <span className="px-1.5 py-0.5 bg-arch-silver/20 rounded text-[0.6rem] tracking-tighter border border-arch-silver/30">
          AUR
        </span>
        <span className="px-1.5 py-0.5 bg-arch-silver/20 rounded text-[0.6rem] tracking-tighter border border-arch-silver/30">
          systemd
        </span>
        <span className="px-1.5 py-0.5 bg-arch-blue/20 rounded text-[0.6rem] tracking-tighter border border-arch-blue/30">
          6.9.1-arch1-1
        </span>
      </div>
    </div>

    {/* Retro Hover Effect */}
    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
      <Save className="w-6 h-6 text-arch-silver/50" />
    </div>
  </Card>
);

<GrowthTimeline />;

const About = () => (
  <div className="relative max-w-[160rem] mt-40 mx-auto " id="about">
    <Blob
      blobClass="blob-2"
      position={{ left: "25rem", top: "16rem" }}
      width="900px"
      height="600px"
    />

    <section className="max-w-screen-2xl mx-auto">
      <motion.div
        className="flex flex-col md:grid xl:grid-cols-12 md:grid-rows-[minmax(auto, max-content)] grid-rows-[minmax(auto, max-content)] md:grid-cols-6 grid-cols-1 gap-5 min-h-fit items-stretch"
        variants={containerAnimationVariants}
        initial="hidden"
        whileInView="visible"
        onViewportEnter={() => console.log("CONTAINER ENTERED VIEWPORT")}
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="xl:col-span-5 lg:col-span-4 md:col-span-4 md:h-full h-fit z-20"
          variants={itemAnimationVariants}
        >
          <IntroCard />
        </motion.div>

        <motion.div
          className="xl:col-span-3 lg:col-span-2 md:col-span-2 z-20"
          variants={itemAnimationVariants}
        >
          <ProfileImageCard />
        </motion.div>

        <motion.div
          className="xl:col-span-4 md:col-span-2 md:row-span-1 md:h-full h-full z-20"
          variants={itemAnimationVariants}
        >
          <TechStackCard />
        </motion.div>

        <motion.div
          className="xl:col-span-4 md:col-span-4 md:h-full h-fit z-20"
          variants={itemAnimationVariants}
        >
          <PassionCard />
        </motion.div>

        <motion.div
          className="xl:col-span-3 md:col-span-3 md:h-full h-fit z-20"
          variants={itemAnimationVariants}
        >
          <AboutCard />
        </motion.div>

        <motion.div
          className="xl:col-span-5 md:col-span-3 row-span-1 md:h-full z-20"
          variants={itemAnimationVariants}
        >
          <FlexibleCard />
        </motion.div>

        <motion.div
          className="xl:col-span-3 xl:row-span-1 md:col-span-2 md:h-full h-fit z-20 relative"
          variants={itemAnimationVariants}
        >
          <ProjectsSection />
        </motion.div>

        <motion.div
          className="xl:col-span-3 md:col-span-4 md:h-full h-fit z-20"
          variants={itemAnimationVariants}
        >
          <GrowthCard />
        </motion.div>

        <motion.div
          className="xl:col-span-3 md:col-span-4 md:h-full z-20"
          variants={itemAnimationVariants}
        >
          <ContactCard />
        </motion.div>

        <motion.div
          className="xl:col-span-3 md:col-span-2 md:h-full h-fit z-20"
          variants={itemAnimationVariants}
        >
          <SocialLinks />
        </motion.div>
      </motion.div>
    </section>
  </div>
);

export default About;
