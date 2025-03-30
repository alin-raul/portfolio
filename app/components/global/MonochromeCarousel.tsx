import React from "react";
import { IconType } from "react-icons";

type Icon = {
  skill_name: string; // Name of the skill
  icon: IconType; // Type for React icons
};

type Icons = {
  icons: Icon[];
  reverse: boolean;
};

const MonochromeCarousel: React.FC<Icons> = ({ icons, reverse }) => {
  return (
    <div className="max-w-screen-2xl w-full">
      <div className="carousel overflow-hidden relative">
        {[...Array(3)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className={`${
              reverse ? "group-carousel-links-reverse" : "group-carousel-links"
            } flex animate-scroll`}
          >
            {icons.map((iconItem, index) => {
              const IconComponent = iconItem.icon;
              return (
                <div
                  key={index}
                  className="group carousel-link p-3 rounded-3xl border flex justify-center items-center aspect-square min-h-[60px] min-w-[60px] bg-accent/30"
                >
                  <IconComponent className="text-5xl opacity-80" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonochromeCarousel;
