import React from "react";
import Wrapper from "../../Wrapper";
import Link from "next/link";
import Image from "next/image";
import { otherSkills, projects } from "@/constants";
import { Button } from "@/components/ui/button";
import { workExperiences } from "@/constants";
import { educationData } from "@/constants";
import { TechStack } from "@/constants";
import { designTools } from "@/constants";

export const GridCard = ({
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

const ProfileHeader = () => (
  <div className="lg:flex items-end mb-10">
    <h1 className="text-5xl font-semibold whitespace-nowrap lg:mb-0 mb-4">
      Năstase Raul-Alin
    </h1>
    <div className="lg:flex gap-4 mx-8 justify-between w-full font-bold text-muted-foreground whitespace-nowrap hidden">
      <p>29 years old, Romania</p>
      <p>workdevraul@gmail.com</p>
      <Link href="/" className="text-blue-500/80 hover:text-blue-400">
        website.com
      </Link>
    </div>
    <div className="text-right w-full font-bold text-muted-foreground whitespace-nowrap lg:hidden">
      <p>29 years old, Romania</p>
      <p>workdevraul@gmail.com</p>
      <Link href="/" className="text-blue-500/80 hover:text-blue-400">
        website.com
      </Link>
    </div>
  </div>
);

const ProfileGrid = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
    <GridCard className="overflow-hidden w-full h-96 sm:h-full">
      <Image
        src="/photos/profile_pic.webp"
        alt="Me"
        fill
        draggable={false}
        className="object-cover object-center "
      />
    </GridCard>

    <ProjectsSection />

    <InterestsSection />
  </div>
);

const ProjectsSection = () => (
  <GridCard className="overflow-hidden p-6">
    <h1 className="text-2xl font-bold text-muted-foreground mb-4">
      Apps I made
    </h1>
    <div className="flex flex-wrap gap-2 justify-between">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </GridCard>
);

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const { name, icon, live_demo } = project;

  const imageProps = {
    src: icon,
    width: 100,
    height: 100,
    draggable: false,
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col mx-auto min-w-20 h-20 rounded-3xl aspect-square p-4 mb-2 bg-[var(--bg-dynamic-2)]">
        <Image {...imageProps} alt="Project icon" />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-nowrap font-semibold text-center text-muted-foreground text-xs mb-2">
          {name}
        </h1>
        <Button
          variant="outline"
          className="w-fit mx-auto text-xs px-2.5 rounded-full bg-transparent hover:bg-violet-500 hover:text-primary-foreground border-2 border-violet-500 text-violet-500 font-bold"
        >
          <Link href={`${live_demo}`} target="_blank" rel="noopener noreferrer">
            VIEW
          </Link>
        </Button>
      </div>
    </div>
  );
};

const InterestsSection = () => (
  <GridCard className="overflow-hidden p-6 h-full lg:col-span-1 sm:col-span-2">
    <h3 className="text-2xl font-bold text-muted-foreground mb-3">Interests</h3>
    <div className="flex flex-col h-[calc(100%-3rem)]">
      <div className="flex flex-wrap gap-2 my-auto overflow-auto p-1">
        {[
          "👨‍💻 Coding",
          "🏋️ Gym",
          "🚗 Cars",
          "📸 Photography",
          "⛰️ Traveling",
        ].map((interest) => (
          <div key={interest} className="border py-1 px-3 rounded-md bg-muted">
            <p className="text-nowrap font-semibold">{interest}</p>
          </div>
        ))}
      </div>
    </div>
  </GridCard>
);

const ExperienceSection = () => (
  <Section title="Experience">
    <div className="lg:grid grid-cols-2 gap-8 mt-10">
      {workExperiences.map((experience) => (
        <ExperienceCard key={experience.name} experience={experience} />
      ))}
    </div>
  </Section>
);

const ExperienceCard = ({
  experience,
}: {
  experience: (typeof workExperiences)[0];
}) => {
  const {
    icon,
    width,
    height,
    isLong,
    name,
    role,
    duration,
    workingHere,
    list,
  } = experience;

  const imageProps = {
    src: icon,
    width,
    height,
  };

  return (
    <GridCard className="p-8 h-full mb-4 lg:mb-0">
      <div className="flex">
        <div className="w-20 h-20 flex-shrink-0 flex justify-center items-center bg-primary-foreground overflow-hidden rounded-full p-3">
          <Image {...imageProps} alt="Company logo" draggable={false} />
        </div>
        <div className="flex flex-col justify-center ml-6">
          <h1
            className={`${
              isLong
                ? "text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl"
                : "text-3xl"
            } font-bold text-muted-foreground whitespace-nowrap truncate`}
          >
            {name}
          </h1>
          <h3 className="text-muted-foreground">{role}</h3>
        </div>
        <div className="ml-auto">
          <div
            className={`rounded-lg font-bold py-2 px-3 ${
              workingHere
                ? "border-2 border-violet-500 text-violet-500"
                : "bg-primary-foreground"
            }`}
          >
            {duration}
          </div>
        </div>
      </div>
      <div className="mt-14">
        <ul className="flex flex-col gap-2 list-disc pl-4">
          {list.map(({ skill, description }, index) => (
            <li key={index}>
              <span className="font-bold">{skill}:</span>
              <span> {description}</span>
            </li>
          ))}
        </ul>
      </div>
    </GridCard>
  );
};

const EducationSection = () => (
  <Section title="Education">
    <div className="lg:grid grid-cols-2 gap-8 mt-10">
      {educationData.map((education) => (
        <EducationCard key={education.name} education={education} />
      ))}
    </div>
  </Section>
);

const EducationCard = ({
  education,
}: {
  education: (typeof educationData)[0];
}) => {
  const {
    icon,
    width,
    height,
    reverse,
    isLong,
    name,
    role,
    specialization,
    duration,
    list,
  } = education;

  const imageProps = {
    src: icon,
    width,
    height,
    className: reverse ? "dark:invert" : "",
  };

  return (
    <GridCard className="p-8 h-full mb-4 lg:mb-0">
      <div className="flex">
        <div className="w-20 h-20 flex-shrink-0 flex justify-center items-center bg-primary-foreground overflow-hidden rounded-full p-3">
          <Image {...imageProps} alt="institution logo" draggable={false} />
        </div>
        <div className="flex flex-col justify-center ml-6 mr-2">
          <h1
            className={`${
              isLong
                ? "text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl"
                : "text-3xl"
            } font-bold text-muted-foreground whitespace-nowrap truncate`}
          >
            {name}
          </h1>
          <h3 className="text-muted-foreground">{role}</h3>
          <h3 className="text-muted-foreground">{specialization}</h3>
        </div>
        <div className="ml-auto">
          <div className="rounded-lg font-bold py-2 px-3 bg-primary-foreground whitespace-nowrap">
            {duration}
          </div>
        </div>
      </div>
      {list && (
        <div className="mt-14">
          <ul className="flex flex-col gap-2 list-disc pl-4">
            {list.map(({ skill, description }, index) => (
              <li key={index}>
                <span className="font-bold">{skill}:</span>
                <span> {description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </GridCard>
  );
};

const SkillsSection = () => (
  <Section title="Skills">
    <div className="lg:grid grid-cols-8 gap-8 mt-10">
      <CodingSkills />
      <DesignSkills />
      <LanguageSkills />
      <OtherSkills />
    </div>
  </Section>
);

const CodingSkills = () => (
  <GridCard className="col-span-5 p-10 mb-4 lg:mb-0">
    <h3 className="text-2xl font-bold text-muted-foreground mb-6">Coding</h3>
    <div className="flex flex-wrap justify-between w-full">
      {TechStack.map(({ skill_name, icon, color }) => {
        const IconComponent = icon;
        return (
          <div
            key={skill_name}
            className="w-fit h-fit flex flex-wrap gap-2 justify-around items-center aspect-square bg-primary-foreground p-2.5 rounded-[1.2rem]"
          >
            <abbr title={skill_name}>
              <IconComponent
                className={`text-4xl xl:text-5xl opacity-80 ${color}`}
              />
            </abbr>
          </div>
        );
      })}
    </div>
  </GridCard>
);

const DesignSkills = () => (
  <GridCard className="col-span-3 p-10 mb-4 lg:mb-0">
    <h3 className="text-2xl font-bold text-muted-foreground mb-6">
      Design Tools
    </h3>
    <div className="flex justify-between items-center">
      {designTools.map(({ name, icon, width, height }) => (
        <Image
          key={name}
          src={icon}
          alt={name}
          draggable={false}
          width={width}
          height={height}
        />
      ))}
    </div>
  </GridCard>
);

const LanguageSkills = () => (
  <GridCard className="col-span-2 p-10 flex flex-col mb-4 lg:mb-0">
    <h3 className="text-2xl font-bold text-muted-foreground mb-6">Languages</h3>
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex justify-around text-3xl w-full">
        {["🇷🇴", "🇮🇹", "🇬🇧", "🇩🇪"].map((flag) => (
          <h1 key={flag}>{flag}</h1>
        ))}
      </div>
    </div>
  </GridCard>
);

const OtherSkills = () => (
  <GridCard className="col-span-6 p-10">
    <h3 className="text-2xl font-bold text-muted-foreground mb-6">Other</h3>
    <div className="flex justify-between items-center">
      {otherSkills.map(({ name, icon, width, height, reverse }) => (
        <abbr key={name} title={name}>
          <Image
            src={icon}
            alt={name}
            draggable={false}
            width={width}
            height={height}
            className={reverse ? "dark:invert invert-0" : ""}
          />
        </abbr>
      ))}
    </div>
  </GridCard>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mt-20">
    <h1 className="text-4xl font-semibold whitespace-nowrap lg:mb-0 mb-8 text-primary">
      {title}
    </h1>
    {children}
  </div>
);

const Curriculum = () => {
  return (
    <Wrapper>
      <section className="mt-40 mb-20 max-w-screen-xl mx-auto" id="top">
        <ProfileHeader />
        <ProfileGrid />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
      </section>
    </Wrapper>
  );
};

export default Curriculum;
