import React from "react";
import EmailCollector from "../components/EmailCollector";

export default function Home() {
  return (
    <section className="text-center py-20 bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-4xl font-bold mb-4">Grow Your Brand with <span className="text-blue-600">Editkaro</span></h1>
      <p className="text-gray-600 max-w-2xl mx-auto">Video editing and social media marketing agency helping brands create impact.</p>
      <div className="mt-8">
        <EmailCollector />
      </div>
    </section>
  );
}

