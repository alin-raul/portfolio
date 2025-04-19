import { socialLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="grid h-full ">
      <div className="flex md:grid items-center grid-cols-2 gap-4 h-full">
        {socialLinks.map(({ icon, name, url }) => {
          const IconComponent = icon;

          return (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
            >
              <div className="group outline outline-1 outline-accent transition-all duration-200 w-full h-full md:min-h-28 min-h-16 flex justify-center items-center rounded-[2rem] bg-[var(--bg-dynamic-1)] relative duration-400 hover:bg-white/100 dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-xl">
                <abbr title={`${name}`}>
                  <IconComponent className="h-6 w-6 transition-all duration-200 dark:hover:text-primary-foreground" />
                </abbr>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
