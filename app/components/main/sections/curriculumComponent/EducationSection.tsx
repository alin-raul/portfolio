import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    certificate,
    list,
  } = education;

  const imageProps = {
    src: icon,
    width,
    height,
  };

  return (
    <GridCard className="p-6 sm:p-8 h-full mb-4 lg:mb-0">
      <div className="flex-col sm:flex-row flex">
        <div className="block sm:flex order-2 sm:order-1">
          <div className="relative w-fit mx-auto">
            <div className="w-24 h-24 md:w-20 md:h-20 flex-shrink-0 flex justify-center items-center bg-primary-foreground overflow-hidden rounded-full p-3 sm:p-0 mt-2 mb-6 sm:my-0 blur-2xl relative">
              <Image
                {...imageProps}
                alt="institution logo"
                draggable={false}
                className={`object-contain ${reverse ? "dark:invert" : ""}`}
              />
            </div>
            <div className="absolute inset-0 w-24 h-24 md:w-24 md:h-24 flex-shrink-0 flex justify-center items-center overflow-hidden rounded-full">
              <Image
                {...imageProps}
                alt="institution logo"
                draggable={false}
                className={`object-contain scale-150 sm:scale-100 ${
                  reverse ? "dark:invert" : ""
                }`}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start sm:ml-6 mr-2">
            <h1
              className={`${
                isLong
                  ? "text-xl lg:text-xl xl:text-2xl 2xl:text-3xl"
                  : "text-2xl"
              } font-bold whitespace-nowrap truncate`}
            >
              {name}
            </h1>
            <h3 className="text-muted-foreground">{role}</h3>
            <h3 className="text-muted-foreground">{specialization}</h3>
          </div>
        </div>
        <div className="ml-auto order-1 sm:order-2">
          <div className="rounded-3xl font-bold py-2 px-3 bg-primary-foreground whitespace-nowrap">
            {duration}
          </div>
        </div>
      </div>
      {list && (
        <div className="mt-14">
          <ul className="flex flex-col gap-2 list-disc pl-4 text-[0.85rem] xs:text-base">
            {list.map(({ skill, description }, index) => (
              <li key={index}>
                <span className="font-bold">{skill}:</span>
                <span> {description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {certificate ? (
        <div className="w-fit border ml-auto mt-4 p-2 rounded-lg">
          <Link
            href="/certificate/Digital-Nation-Certificate.pdf"
            target="_blank"
          >
            <span className="ml-auto mt-4 ">View Certificate</span>
          </Link>
        </div>
      ) : null}
    </GridCard>
  );
};

export default EducationSection;
