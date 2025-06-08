"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="w-full px-4 py-3 border-b border-gray-200 bg-white text-gray-900 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* App name that links home */}
        <Link href="/">
          <h1 className="text-xl font-semibold tracking-tight">
            Regulate<span className="text-purple-500">Me</span>
          </h1>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation - desktop */}
        <div className="hidden md:flex gap-6 text-sm items-center">
          <Link href="/mood" className="hover:text-purple-500 transition">
            {t.mood}
          </Link>
          <Link href="/journal" className="hover:text-purple-500 transition">
            {t.journal}
          </Link>
          <Link href="/wins" className="hover:text-purple-500 transition">
            {t.wins}
          </Link>
          <Link href="/settings" className="hover:text-purple-500 transition">
            {t.settings}
          </Link>
          <select
            id="lang"
            value={lang}
            onChange={(e) => setLang(e.target.value as "en" | "sv")}
            className="rounded border px-2 py-1 text-sm"
          >
            <option value="en">{t.english}</option>
            <option value="sv">{t.swedish}</option>
          </select>
        </div>
      </div>

      {/* Navigation - mobile */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2 text-sm">
          <Link href="/mood" className="hover:text-purple-500 transition">
            {t.mood}
          </Link>
          <Link href="/journal" className="hover:text-purple-500 transition">
            {t.journal}
          </Link>
          <Link href="/wins" className="hover:text-purple-500 transition">
            {t.wins}
          </Link>
          <Link href="/settings" className="hover:text-purple-500 transition">
            {t.settings}
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <label htmlFor="lang">{t.language}</label>
            <select
              id="lang"
              value={lang}
              onChange={(e) => setLang(e.target.value as "en" | "sv")}
              className="rounded border px-2 py-1 text-sm"
            >
              <option value="en">{t.english}</option>
              <option value="sv">{t.swedish}</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};
