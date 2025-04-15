import React from "react";
import Link from "next/link";

const ProfileHeader = () => (
  <div className="lg:flex items-end mb-10">
    <h1 className="text-5xl font-semibold whitespace-nowrap lg:mb-0 mb-4">
      Năstase Raul-Alin
    </h1>
    <div className="lg:flex gap-4 mx-8 justify-between w-full font-bold text-muted-foreground whitespace-nowrap hidden">
      <p>29 years old, Romania</p>
      <p>workdevraul@gmail.com</p>
      <Link
        href="https://portfolio-lemon-rho-10.vercel.app/"
        target="blank"
        rel="noopener noreferrer"
        className="text-blue-500/80 hover:text-blue-400"
      >
        website.com
      </Link>
    </div>
    <div className="text-right w-full font-bold text-muted-foreground whitespace-nowrap lg:hidden">
      <p>29 years old, Romania</p>
      <p>workdevraul@gmail.com</p>
      <Link href="/" className="text-blue-500/80 hover:text-blue-400">
        website.com
      </Link>
    </div>
  </div>
);

export default ProfileHeader;
