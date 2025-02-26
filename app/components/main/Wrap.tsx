import React, { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return <div className={`m-auto sm:px-10 px-5 ${className}`}>{children}</div>;
};

export default Wrapper;
