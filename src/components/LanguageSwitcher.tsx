"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex items-center px-1 py-0.5 rounded-lg border-2 border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-800 shadow-inner h-9 w-24">
      {/* Animated background (active state) */}
      <div
        className={`absolute inset-y-0 flex items-center transition-all duration-300 ease-in-out ${
          language === "en" ? "left-1" : "right-1"
        }`}
      >
        <div className="w-9 h-5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded shadow-md flex items-center justify-center" />
      </div>

      {/* English Button */}
      <button
        onClick={() => setLanguage("en")}
        className={`relative z-10 flex-1 text-sm font-medium transition-colors duration-300 ${
          language === "en" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
        }`}
      >
        EN
      </button>

      {/* French Button */}
      <button
        onClick={() => setLanguage("fr")}
        className={`relative z-10 flex-1 text-sm font-medium transition-colors duration-300 ${
          language === "fr" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
        }`}
      >
        FR
      </button>
    </div>
  );
}
