import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-8">Tell us about your project, and we’ll get back to you soon.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <ContactForm />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Office</h3>
          <p>Meerut, India</p>
          <p>Email: hello@editkaro.in</p>
        </div>
      </div>
    </section>
  );
}
