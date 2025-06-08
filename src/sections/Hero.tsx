"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// 10 curated quotes that rotate on load
const quotes = [
  "You are not behind. You are not late. You are right on time for your own unfolding.",
  "Small steps count. Gentle progress is still progress.",
  "It’s okay to pause. Rest is not failure — it’s a sacred part of growth.",
  "You’ve survived every hard moment so far. That’s strength, not weakness.",
  "You don’t have to have it all figured out to keep going.",
  "Your softness is not a flaw. It’s your superpower.",
  "This space is yours. You’re allowed to feel everything — and still be okay.",
  "Today’s win might be as simple as breathing and beginning again. That’s enough.",
  "Your worth isn’t measured by productivity. You are valuable just by being here.",
  "You are allowed to grow at your own pace — and still be proud of who you are.",
];

export default function Hero() {
  const [quote, setQuote] = useState("");

  // Pick a quote randomly on first load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <section
      className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url('/hero-bg.png')`,
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="relative z-10 animate-fade-in-up max-w-2xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800">
          {quote}
        </h1>

        <Link
          href="/mood"
          className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-2xl text-sm font-medium transition hover:bg-gray-800"
        >
          Go to Mood Tracker
        </Link>
      </div>
    </section>
  );
}
