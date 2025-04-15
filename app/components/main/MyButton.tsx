"use client";

import React from "react";

type Props = {
  name: string;
  isBeam: boolean;
  containerClass?: string;
  click: () => void;
  icon?: React.ReactNode;
};

const MyButton: React.FC<Props> = ({
  name,
  isBeam = false,
  containerClass,
  click,
  icon,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-accent/30 hover:bg-accent/90 p-3 border border-accent-foreground/10 hover:border-accent-foreground/30 rounded-2xl ${containerClass}`}
      onClick={click}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3 ">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}

      {name}
      {icon}
    </button>
  );
};

export default MyButton;
