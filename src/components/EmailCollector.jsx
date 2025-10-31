import React, { useState } from "react";

const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycby055CfAenHoRB20cF7qKqwuMKqNOWE9jjYBXkgDXh0LIqidSvni1At3Pl2i4GQ4c_4/exec";

export default function EmailCollector() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return setStatus("Enter your email");
    setStatus("Sending...");

    try {
      const res = await fetch(`${SHEET_ENDPOINT}?email=${encodeURIComponent(email)}`);
      const result = await res.text();
      setEmail("");
      setStatus("Subscribed!");
    } catch (err) {
      setStatus("success to send");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="email"
        placeholder="Your email"
        className="border px-4 py-2 rounded w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Subscribe</button>
      <p className="text-sm text-gray-600 mt-2">{status}</p>
    </form>
  );
}