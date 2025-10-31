import React from "react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-600 mb-6">
        Editkaro.in is a video editing and social media marketing agency that helps creators and brands grow.
      </p>

      <h3 className="font-semibold mb-3">Our Team</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {["Harshit", "Ria", "Vikram", "Sana"].map((n, i) => (
          <div key={i} className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-xl font-bold">{n[0]}</div>
            <p className="mt-2">{n}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
