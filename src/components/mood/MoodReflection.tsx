'use-client'

import { useLanguage } from "@/context/LanguageContext"

type MoodReflectionProps = {
    mood: string;
    label: string;
    value: number;
    note: string;
    onValueChange: (val: number) => void;
    onNoteChange: (val: string) => void;
};
export const MoodReflection= ({
    mood,
    label,
    value,
    note,
    onValueChange,
    onNoteChange,
}: MoodReflectionProps) => {
    const {language } = useLanguage();

    return (
      <div className="border rounded-xl p-4 mb-4 shadow-sm bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg">{label}</span>
          <span className="text-gray-600 text-sm">
            {language === "sv"
              ? `Intensitet: ${value}/5`
              : `Intensity: ${value}/5`}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={5}
          value={value}
          onChange={(e) => onValueChange(Number(e.target.value))}
          className="w-full"
        />
        <textarea
          value={note}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder={
            language === "sv"
              ? "Vill du skriva något om denna känsla?"
              : "Want to reflect on this feeling?"
          }
          className="mt-3 w-full p-2 border border-gray-300 rounded-lg text-sm resize-none focus:ring-indigo-300 focus:outline-none"
        rows={2} />
      </div>
    );
};