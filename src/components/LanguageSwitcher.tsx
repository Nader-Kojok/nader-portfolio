"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="p-2.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-700"
      aria-label={language === "en" ? "Switch to French" : "Switch to English"}
    >
      <span className="text-sm font-medium">
        {language === "en" ? "FR" : "EN"}
      </span>
    </button>
  );
}
