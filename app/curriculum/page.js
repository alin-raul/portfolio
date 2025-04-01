import React from "react";
import Wrapper from "../components/main/Wrapper";
import Link from "next/link";

const Curriculum = () => {
  return (
    <Wrapper>
      <section className="mt-40 max-w-screen-xl mx-auto" id="top">
        <div className="lg:flex items-end">
          <h1 className="text-5xl font-semibold whitespace-nowrap lg:mb-0 mb-4">
            Năstase Raul-Alin
          </h1>
          <div className="lg:flex gap-4 mx-8 justify-between w-full font-bold text-muted-foreground whitespace-nowrap hidden ">
            <p>29 years old, Romania</p>
            <p>workdevraul@gmail.com</p>
            <Link href={"/"} className="text-blue-500/80 hover:text-blue-400">
              website.com
            </Link>
          </div>
          <div className="text-right w-full font-bold text-muted-foreground whitespace-nowrap lg:hidden">
            <p>29 years old, Romania</p>
            <p>workdevraul@gmail.com</p>
            <Link href={"/"} className="text-blue-500/80 hover:text-blue-400">
              website.com
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Curriculum;
