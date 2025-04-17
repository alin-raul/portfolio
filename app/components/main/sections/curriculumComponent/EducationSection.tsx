import React from "react";
import Image from "next/image";
import { educationData } from "@/constants";
import { GridCard, Section } from "./Curriculum";

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
  };

  return (
    <GridCard className="p-4 sm:p-8 h-full mb-4 lg:mb-0">
      <div className="flex-col sm:flex-row flex">
        <div className="block sm:flex order-2 sm:order-1">
          <div className="w-20 h-20 flex-shrink-0 flex justify-center items-center bg-primary-foreground overflow-hidden rounded-full p-3 sm:p-0 my-6 sm:my-0 mx-auto">
            <Image
              {...imageProps}
              alt="institution logo"
              draggable={false}
              className={`object-contain ${reverse ? "dark:invert" : ""}`}
            />
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start sm:ml-6 mr-2">
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
            <h3 className="text-muted-foreground">{specialization}</h3>
          </div>
        </div>
        <div className="ml-auto order-1 sm:order-2">
          <div className="rounded-lg font-bold py-2 px-3 bg-primary-foreground whitespace-nowrap">
            {duration}
          </div>
        </div>
      </div>
      {list && (
        <div className="mt-14">
          <ul className="flex flex-col gap-2 list-disc pl-4 text-[0.65rem] md:text-base">
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

export default EducationSection;
