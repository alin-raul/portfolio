import React from "react";
import Wrapper from "../../Wrapper";
import ProfileHeader from "./ProfileHeader";
import ProfileGrid from "./ProfileGrid";
import dynamic from "next/dynamic";

const DynamicExperienceSection = dynamic(() => import("./ExperienceSection"));
const DynamicEducationSection = dynamic(() => import("./EducationSection"));
const DynamicSkillsSection = dynamic(() => import("./SkillsSection"));

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

export const Section = ({
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
        <DynamicExperienceSection />
        <DynamicEducationSection />
        <DynamicSkillsSection />
      </section>
    </Wrapper>
  );
};

export default Curriculum;
