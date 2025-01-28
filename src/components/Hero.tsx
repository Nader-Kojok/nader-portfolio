"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { getHeroContent } from '../sanity/lib/client';

export default function Hero() {
  const { language } = useLanguage();
  const [heroContent, setHeroContent] = useState({
    title_en: '',
    description_en: '',
    viewWork_en: '',
    getInTouch_en: '',
    title_fr: '',
    description_fr: '',
    viewWork_fr: '',
    getInTouch_fr: ''
  });

  useEffect(() => {
    const fetchHeroContent = async () => {
      const content = await getHeroContent();
      if (content) {
        setHeroContent(content);
      }
    };
    fetchHeroContent();
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <Image
          src="/grid.svg"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
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
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {language === 'en' ? heroContent.title_en : heroContent.title_fr}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
          >
            {language === 'en' ? heroContent.description_en : heroContent.description_fr}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 cursor-none"
            >
              {language === 'en' ? heroContent.viewWork_en : heroContent.viewWork_fr}
              <svg
                className="w-5 h-5 ml-2"
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
            </a>
            <a
              href="https://calendly.com/naderkojok/30min"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400 rounded-lg transition-colors duration-300 cursor-none"
            >
              {language === 'en' ? heroContent.getInTouch_en : heroContent.getInTouch_fr}
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute left-0 top-1/4 w-24 h-24 md:w-32 md:h-32"
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
            alt="Floating globe"
            width={128}
            height={128}
            className="w-full h-full opacity-20 dark:opacity-10"
          />
        </motion.div>

        <motion.div
          className="absolute right-0 bottom-1/4 w-20 h-20 md:w-28 md:h-28"
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
            alt="Floating window"
            width={112}
            height={112}
            className="w-full h-full opacity-20 dark:opacity-10"
          />
        </motion.div>

        {/* Figma Logo */}
        <motion.div
          className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-24 md:h-24"
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
            alt="Floating figma logo"
            width={96}
            height={96}
            className="w-full h-full opacity-75 dark:opacity-40"
          />
        </motion.div>
      </div>
    </section>
  );
}