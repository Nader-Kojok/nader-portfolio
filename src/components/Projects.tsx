"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function Projects() {
  const { translations } = useLanguage();

  return (
    <section id="projects" className="py-40 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800" aria-labelledby="projects-title">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 id="projects-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translations.projects.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            {translations.projects.description}
          </p>

          {/* Portfolio Redirect Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 p-1"
          >
            <div className="bg-white dark:bg-gray-900 rounded-[22px] p-8 sm:p-12">
              <div className="flex flex-col items-center gap-6">
                {/* Agency Logo/Icon */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
                >
                  <span className="text-3xl sm:text-4xl font-bold text-white">A</span>
                </motion.div>

                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Agence Arcane
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                    {translations.projects.description}
                  </p>
                </div>

                <a
                  href="https://www.agencearcane.com/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{translations.projects.viewProject}</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}