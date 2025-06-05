'use client'; //needed for context updates to work in next.js app router

import React, {createContext, useContext, useState, ReactNode} from "react";
import en from "@/locales/en.json";
import sv from "@/locales/sv.json";

//setup what translations will be used
const translations = {en, sv};

//The languages supported right now
type Language = "en" | "sv";

//Whats shared
interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: typeof en; // current languege either en or sv
}

//context that will be used throughout the app
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

//Wrapper around app to provide language data

export const LanguageProvider = ({ children }: {children: ReactNode}) => {
    const [lang, setLang] = useState<Language>("en");

    const value: LanguageContextType = {
        lang,
        setLang,
        t: translations[lang],
    };
    return (
        < LanguageContext.Provider value={value}>
            {children}
            </LanguageContext.Provider>
    );
}
//Custom hook to easily use translations in components

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context){
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};