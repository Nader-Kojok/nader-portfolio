"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

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
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto text-rendering-optimizeLegibility"
          >
            {translations.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 sm:gap-10 justify-center max-w-sm sm:max-w-none mx-auto"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 cursor-none overflow-hidden"
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-red-500 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-[gradient_3s_linear_infinite]"></span>
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
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

        {/* Floating Elements */}
        <motion.div
          className="absolute left-4 sm:left-8 lg:left-12 top-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/globe.svg"
            alt="Animated floating globe icon representing global reach"
            width={128}
            height={128}
            className="w-full h-full opacity-20 dark:opacity-10"
          />
        </motion.div>

        <motion.div
          className="absolute right-4 sm:right-8 lg:right-12 bottom-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/window.svg"
            alt="Animated floating window icon representing digital interfaces"
            width={112}
            height={112}
            className="w-full h-full opacity-20 dark:opacity-10"
          />
        </motion.div>

        {/* Figma Logo */}
        <motion.div
          className="absolute top-[-50px] sm:top-[-60px] md:top-[-70px] left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24"
          animate={{
            y: [0, 12, 0],
            rotate: [0, 6, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/figma.svg"
            alt="Animated floating Figma logo representing design tools"
            width={96}
            height={96}
            className="w-full h-full opacity-75 dark:opacity-40"
          />
        </motion.div>
      </div>
    </section>
  );
}