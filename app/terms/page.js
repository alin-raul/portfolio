import React from "react";

const TermsPage = () => {
  return (
    <main className="container mx-auto p-8">
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Raul&apos;s portfolio website. These terms and conditions
            outline the rules and regulations for the use of Raul&apos;s
            Website.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use Raul&apos;s portfolio website if
            you do not agree to take all of the terms and conditions stated on
            this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. License</h2>
          <p className="mb-4">
            Unless otherwise stated, Raul and/or its licensors own the
            intellectual property rights for all material on Raul&apos;s
            portfolio website.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-6">
            <li>Republish material from Raul&apos;s portfolio website</li>
            <li>
              Sell, rent or sub-license material from Raul&apos;s portfolio
              website
            </li>
            <li>
              Reproduce, duplicate or copy material from Raul&apos;s portfolio
              website
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact me via
            the contact form on this site.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;
