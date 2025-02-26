import React from "react";
import MyForm from "./MyForm";

const Contact = () => {
  return (
    <section className="my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="card px-10 py-16 max-w-screen-lg z-30">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bold text-4xl text-center">Contact Me</h3>
            <p className="text-lg mt-8 mb-12 opacity-70">
              I&apos;d love to hear from you! Whether you have a project in
              mind, a question, or just want to say hi, feel free to reach out.
              Let&apos;s connect and create something awesome together!
            </p>
          </div>

          <div className="">
            <MyForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
