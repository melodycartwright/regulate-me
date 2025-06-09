"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage(); // Use current translations
  const [quote, setQuote] = useState("");

  // Choose a random quote on load + when language changes
  useEffect(() => {
    const quotes = t.quotes; // now coming from translations
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, [t]);
  return (
    <section
      className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url('/hero-bg.png')`, // soft sky image
      }}
    >
      {/* blur and soften background */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* floating quote + button */}
      <div className="relative z-10 animate-fade-in-up max-w-2xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800">
          {quote}
        </h1>

        <Link
          href="/mood"
          className="mt-8 inline-block px-6 py-3 bg-black text-white rounded-2xl text-sm font-medium transition hover:bg-gray-800 fade-in "
        >
          {t.goToMood}
        </Link>
      </div>
    </section>
  );
}
