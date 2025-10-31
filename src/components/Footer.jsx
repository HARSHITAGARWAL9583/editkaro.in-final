import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Editkaro.in — All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
