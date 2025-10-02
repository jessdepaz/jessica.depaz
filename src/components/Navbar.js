"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white fixed top-0 left-0 w-full z-50">
      {/* Left: Hamburger */}
      <button
        className="space-y-1 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-gray-800"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
      </button>

      {/* Right: Name */}
      <div className="text-lg font-bold">Jessica De-Paz</div>

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-4">
          <button
            className="self-end text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <a href="#about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#education" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#projects" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>

    </nav>
  );
}
