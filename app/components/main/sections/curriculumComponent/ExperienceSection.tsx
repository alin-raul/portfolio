import React from "react";
import Image from "next/image";
import { workExperiences } from "@/constants";
import { GridCard, Section } from "./Curriculum";

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
      <div className="flex-col sm:flex-row flex">
        <div className="flex order-2 sm:order-1">
          <div className="w-20 h-20 flex-shrink-0 flex justify-center items-center bg-primary-foreground overflow-hidden rounded-full p-3">
            <Image
              {...imageProps}
              alt="Company logo"
              draggable={false}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center ml-6">
            <h1
              className={`${
                isLong
                  ? "text-xl lg:text-xl xl:text-2xl 2xl:text-3xl"
                  : "text-2xl"
              } font-bold text-muted-foreground whitespace-nowrap truncate`}
            >
              {name}
            </h1>
            <h3 className="text-muted-foreground">{role}</h3>
          </div>
        </div>
        <div className="ml-auto order-1 sm:order-2">
          <div
            className={`rounded-lg font-bold py-2 px-3 text-nowrap ${
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
        <ul className="flex flex-col gap-2 list-disc pl-4 text-sm md:text-base">
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

export default ExperienceSection;
