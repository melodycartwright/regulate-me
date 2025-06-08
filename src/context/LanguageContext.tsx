"use client"; // Needed for context updates in Next.js App Router

import React, { createContext, useContext, useState, ReactNode } from "react";

// Translations directly in the file (might move to json file later)
const translations = {
  en: {
    title: "Welcome",
    mood: "Mood",
    journal: "Journal",
    wins: "Wins",
    settings: "Settings",
    language: "Language",
    english: "English",
    swedish: "Swedish",
  },
  sv: {
    title: "Välkommen",
    mood: "Humör",
    journal: "Dagbok",
    wins: "Framsteg",
    settings: "Inställningar",
    language: "Språk",
    english: "Engelska",
    swedish: "Svenska",
  },
};

// Supported language types
type Language = "en" | "sv";

// What the context will share
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof translations)["en"]; 
}

// Actual context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Wraps the app to provide language state + strings
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

// Custom hook to use language state in components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
