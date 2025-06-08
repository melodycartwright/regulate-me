"use client"; // Needed for context updates in Next.js App Router

import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "@/locales/en.json";
import sv from "@/locales/sv.json";

// Supported languages
type Language = "en" | "sv";

// All possible translation structure (from en.json & sv.json)
type Translations = typeof en;

// What we share through the context
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

// Load translation data from JSON
const translations: Record<Language, Translations> = {
  en,
  sv,
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider that wraps the app
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const value: LanguageContextType = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
