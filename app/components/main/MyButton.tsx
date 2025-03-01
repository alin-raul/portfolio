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
    <button className={`btn ${containerClass}`} onClick={click}>
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
