import React from "react";
import Link from "next/link";

// Define constants for reusable data
const ageLocation = "29 years old, Romania";
const email = "workdevraul@gmail.com";
const portfolioUrl = "https://ran-portfolio.vercel.app/";
const portfolioName = "ran-portfolio";

const ProfileHeader = () => (
  <div className="lg:flex items-end mb-10">
    {/* Name - Consistent across sizes */}
    <h1 className="text-3xl sm:text-5xl font-semibold whitespace-nowrap lg:mb-0 mb-4">
      Năstase Raul-Alin
    </h1>

    {/* Details - Large Screen Layout */}
    <div className="lg:flex gap-4 lg:ml-8 justify-between w-full font-bold text-muted-foreground whitespace-nowrap hidden">
      {/* Use constants */}
      <p>{ageLocation}</p>
      <p>{email}</p>
      <Link
        href={portfolioUrl}
        target="_blank" // Use target="_blank" for external links
        rel="noopener noreferrer" // Security best practice for target="_blank"
        className="text-blue-500/80 hover:text-blue-400"
      >
        {portfolioName}
      </Link>
    </div>

    {/* Details - Small Screen Layout */}
    <div className="text-right w-full font-bold text-muted-foreground whitespace-nowrap lg:hidden">
      {/* Use constants */}
      <p>{ageLocation}</p>
      <p>{email}</p>
      <Link
        href={portfolioUrl} // Corrected href
        target="_blank" // Added target
        rel="noopener noreferrer" // Added rel
        className="text-blue-500/80 hover:text-blue-400"
      >
        {portfolioName}
      </Link>
    </div>
  </div>
);

export default ProfileHeader;
