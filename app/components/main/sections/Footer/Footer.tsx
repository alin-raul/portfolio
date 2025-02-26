import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="pt-6 pb-3 border-t flex justify-between items-center flex-wrap gap-5 max-w-screen-2xl mx-auto z-30">
      <div className="flex gap-2">
        <p className="">Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      {/* <div className="flex gap-3">
        <div className="social-icon">
          <Image
            src="/assets-2/github.svg"
            alt="github icon"
            width={30}
            height={30}
          />
        </div>
        <div className="social-icon">
          <Image
            src="/assets-2/twitter.svg"
            alt="github icon"
            width={30}
            height={30}
          />
        </div>
        <div className="social-icon">
          <Image
            src="/assets-2/instagram.svg"
            alt="github icon"
            width={30}
            height={30}
          />
        </div>
      </div> */}

      <p>© 2025 Raul. All rights reserved.</p>
    </section>
  );
};

export default Footer;
