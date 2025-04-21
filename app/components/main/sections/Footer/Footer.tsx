import React from "react";
import Link from "next/link"; // Import the Link component

const Footer = () => {
  return (
    // Added bg-white or a similar background if it sits on top of content
    <section className="pt-6 pb-3 border-t flex justify-between items-center flex-wrap gap-5 mx-auto z-30 px-4">
      {" "}
      {/* Added bg/text colors for context */}
      <div className="flex gap-2 items-center">
        {" "}
        {/* Added items-center for vertical alignment */}
        {/* Use Link for navigation */}
        <Link href="/terms" className="hover:underline">
          {" "}
          {/* Added basic hover style */}
          Terms & Conditions
        </Link>
        <p>|</p> {/* The separator remains a p tag */}
        <Link href="/privacy" className="hover:underline">
          {" "}
          {/* Added basic hover style */}
          Privacy Policy
        </Link>
      </div>
      <p>© 2025 RAN. All rights reserved.</p>
    </section>
  );
};

export default Footer;
