import React from "react";

const PrivacyPage = () => {
  return (
    <main className="container mx-auto p-8">
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            This Privacy Policy describes how Raul&apos;s portfolio website
            collects, uses, and discloses information when you visit or use the
            site.
          </p>
          <p>
            By using this website, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Information Collection and Use
          </h2>
          <p className="mb-4">
            We do not use trackers or cookies on this website.
          </p>
          <p className="mb-4">
            The only information that might be collected is your name and email
            address, if you choose to provide them through the contact form or
            other direct communication methods. This information is used solely
            to respond to your inquiries or communicate with you directly.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Types of Data Collected
          </h3>
          <h4 className="text-lg font-semibold mb-1">Personal Data</h4>
          <p>
            When you contact me, you may choose to provide personal data such as
            your name and email address. This data is processed only for the
            purpose of responding to your communication.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            me via the contact form on this site.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;
