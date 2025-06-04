// src/sections/Navbar.tsx
"use client";

import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 border-b border-gray-200 bg-white text-gray-900 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-tight">
          Regulate<span className="text-purple-500">Me</span>
        </h1>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Nav links (hidden on mobile) */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-purple-500 transition">
            Check-In
          </a>
          <a href="#" className="hover:text-purple-500 transition">
            Journal
          </a>
          <a href="#" className="hover:text-purple-500 transition">
            Wins
          </a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#" className="block hover:text-purple-500 transition">
            Check-In
          </a>
          <a href="#" className="block hover:text-purple-500 transition">
            Journal
          </a>
          <a href="#" className="block hover:text-purple-500 transition">
            Wins
          </a>
        </div>
      )}
    </nav>
  );
};
