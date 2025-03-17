"use client";

import React from "react";
import MyForm from "./MyForm";
import MovingLightShade from "@/app/components/effects/MovingLightShade";
import Blob from "@/app/components/effects/Blob";

const Contact = () => {
  return (
    <div className="relative max-w-[160rem] mt-40 mx-auto">
      <Blob
        blobClass="blob-2"
        position={{
          right: "0rem",
          top: "30rem",
        }}
        width="900px"
        height="600px"
      />
      <section
        className="flex justify-center items-center rounded-2xl max-w-screen-2xl mx-auto p-8 h-[50rem]"
        id="contact"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Section */}
          <div className="flex flex-col z-40">
            <p className="font-medium text-sm opacity-70 mb-8">CONTACT ME</p>
            <div className="mb-1">
              <h1 className="text-5xl lg:text-5xl font-bold mb-6">
                Let’s work together
              </h1>
              <p className="text-lg font-semibold ">
                I&apos;d love to hear from you! Whether you have a project in
                mind, a question, or just want to say hi, feel free to reach
                out. Let&apos;s connect and create something awesome together!
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative flex items-center justify-center">
            <MyForm />
          </div>
          {/* <MovingLightShade fill="rgb(67, 21, 221)" /> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
