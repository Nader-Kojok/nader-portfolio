"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

// Animated code lines for background effect
const CodeLine = ({ delay, width, top, left }: { delay: number; width: string; top: string; left: string }) => (
  <motion.div
    className={`absolute h-[2px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-transparent rounded-full ${width}`}
    style={{ top, left }}
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: [0, 0.6, 0] }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeOut",
    }}
  />
);

// Terminal cursor blink animation
const TerminalCursor = () => (
  <motion.span
    className="inline-block w-[3px] h-[1.1em] bg-blue-500 ml-1 align-middle"
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
  />
);

export default function Hero() {
  const { translations } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <Image
          src="/grid.svg"
          alt="Grid pattern background for visual decoration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Animated Code Lines Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <CodeLine delay={0} width="w-32 sm:w-48" top="15%" left="5%" />
        <CodeLine delay={0.5} width="w-24 sm:w-36" top="25%" left="8%" />
        <CodeLine delay={1} width="w-40 sm:w-56" top="35%" left="3%" />
        <CodeLine delay={1.5} width="w-20 sm:w-32" top="65%" left="85%" />
        <CodeLine delay={2} width="w-36 sm:w-48" top="75%" left="80%" />
        <CodeLine delay={2.5} width="w-28 sm:w-40" top="85%" left="88%" />
      </div>

      {/* Floating Tech Symbols */}
      <motion.div
        className="absolute left-4 sm:left-8 lg:left-16 top-1/4 text-4xl sm:text-5xl md:text-6xl font-mono text-blue-500/20 dark:text-blue-400/10 select-none"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {"</>"}
      </motion.div>

      <motion.div
        className="absolute right-4 sm:right-8 lg:right-16 top-1/3 text-3xl sm:text-4xl md:text-5xl font-mono text-purple-500/20 dark:text-purple-400/10 select-none"
        animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{ }"}
      </motion.div>

      <motion.div
        className="absolute left-8 sm:left-16 lg:left-24 bottom-1/4 text-2xl sm:text-3xl md:text-4xl font-mono text-green-500/20 dark:text-green-400/10 select-none"
        animate={{ y: [0, 8, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {"=>"}
      </motion.div>

      <motion.div
        className="absolute right-8 sm:right-16 lg:right-24 bottom-1/3 text-3xl sm:text-4xl md:text-5xl font-mono text-cyan-500/20 dark:text-cyan-400/10 select-none"
        animate={{ y: [0, -8, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {"[ ]"}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-rendering-optimizeLegibility"
          >
            {translations.hero.title}
            <TerminalCursor />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto text-rendering-optimizeLegibility"
          >
            {translations.hero.description}
          </motion.p>

          {/* Tech Stack Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-6 max-w-2xl mx-auto"
          >
            {translations.hero.subtitle.split(', ').map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="px-3 py-1 text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Agency Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mb-8 sm:mb-10 flex flex-col items-center gap-3"
          >
            <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
              {translations.hero.agencyText}
            </span>
            <a
              href="https://www.agencearcane.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center transition-all hover:scale-105 duration-300"
            >
              <Image
                src="/Logo + text Arcane White@1000x.png"
                alt="Agence Arcane"
                width={180}
                height={50}
                className="h-8 sm:h-10 w-auto dark:brightness-100 brightness-0"
                priority
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-sm sm:max-w-none mx-auto"
          >
            <a
              href="https://www.agencearcane.com/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 cursor-none overflow-hidden"
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-[gradient_3s_linear_infinite]"></span>
              <span className="absolute inset-[2px] z-10 rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300"></span>
              <span className="relative z-20 inline-flex items-center whitespace-nowrap">
                {translations.hero.viewWork}
                <svg
                  className="w-5 h-5 ml-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
            <a
              href="https://calendly.com/naderkojok/30min"
              target="_blank"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-100 dark:hover:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400 rounded-lg transition-all duration-300 cursor-none whitespace-nowrap"
            >
              {translations.hero.getInTouch}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}