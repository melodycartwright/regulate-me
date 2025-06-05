"use client";
import { useLanguage } from "@/context/LanguageContext";


export default function Header() {
    const { lang, setLang, t } = useLanguage();
    return (
     <header className="flex items-center justify-between p-4">
        {/* Title from Current language*/}
        <h1 className="text-xl font-bold">
            {t.title}
        </h1>
        {/*Lang Switch */}
        <div className="flex items-center gap-2">
            <label htmlFor="lang" className="text-sm"> 
                {t.language}
            </label>
            <select id="lang" value={lang} onChange={(e) => setLang(e.target.value as "en" | "sv")} className="rounded border px-2 py-1">
                <option value="en">{t.english}</option>
                <option value="sv">{t.swedish}</option>
            </select>
        </div>
     </header>
    );
}