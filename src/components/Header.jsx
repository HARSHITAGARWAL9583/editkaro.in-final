import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-blue-600">Editkaro</h1>
          </Link>

          <nav className="hidden md:flex gap-6 text-sm">
            <Link className="hover:text-blue-600" to="/">Home</Link>
            <Link className="hover:text-blue-600" to="/portfolio">Portfolio</Link>
            <Link className="hover:text-blue-600" to="/about">About</Link>
            <Link className="hover:text-blue-600" to="/contact">Contact</Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 bg-white p-4 rounded shadow">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link><br />
            <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link><br />
            <Link to="/about" onClick={() => setOpen(false)}>About</Link><br />
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
