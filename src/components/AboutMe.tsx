"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState } from 'react';
import { getAboutContent } from '../sanity/lib/about';

// Using simple SVG icons instead of FontAwesome
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function AboutMe() {
  const { language } = useLanguage();
  const [aboutContent, setAboutContent] = useState({
    title_en: '',
    description_en: '',
    downloadResume_en: '',
    skills_title_en: '',
    skills_description_en: '',
    skills_list: [],
    journey_title_en: '',
    journey_description_en: '',
    experiences: [],
    social_title_en: '',
    social_description_en: '',
    social_connect_en: '',
    title_fr: '',
    description_fr: '',
    downloadResume_fr: '',
    skills_title_fr: '',
    skills_description_fr: '',
    journey_title_fr: '',
    journey_description_fr: '',
    social_title_fr: '',
    social_description_fr: '',
    social_connect_fr: ''
  });

  useEffect(() => {
    const fetchAboutContent = async () => {
      const content = await getAboutContent();
      if (content) {
        setAboutContent(content);
      }
    };
    fetchAboutContent();
  }, []);

  interface Skill {
    skillName: string;
  }

  interface Experience {
    period: string;
    role_en: string;
    role_fr: string;
    company: string;
    description_en: string;
    description_fr: string;
  }

  const skills = (aboutContent.skills_list as Skill[]).map((skill) => ({
    name: skill.skillName,
    level: "Expert"
  }));

  const experience = (aboutContent.experiences as Experience[]).map((exp) => ({
    year: exp.period,
    role: language === 'en' ? exp.role_en : exp.role_fr,
    company: exp.company,
    description: language === 'en' ? exp.description_en : exp.description_fr
  }));

  return (
    <section id="about" className="py-40 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' ? aboutContent.title_en : aboutContent.title_fr}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {language === 'en' ? aboutContent.description_en : aboutContent.description_fr}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'en' ? aboutContent.skills_title_en : aboutContent.skills_title_fr}
              </h3>
              <div className="flex flex-wrap gap-4 gap-y-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm inline-block transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                      {skill.name}
                    </span>
                    <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${skill.level === 'Expert' ? 'bg-green-600 dark:bg-green-700' : skill.level === 'Advanced' ? 'bg-blue-600 dark:bg-blue-700' : 'bg-yellow-500 dark:bg-yellow-600'}`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'en' ? aboutContent.social_title_en : aboutContent.social_title_fr}
              </h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/naderkojok"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/404nader"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <InstagramIcon />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/naderkojok"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <LinkedInIcon />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'en' ? aboutContent.journey_title_en : aboutContent.journey_title_fr}
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800" />
                  <div className="mb-1 text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {exp.year}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h4>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 gap-2"
              >
                {language === 'en' ? aboutContent.downloadResume_en : aboutContent.downloadResume_fr}
                <span className="inline-flex items-center justify-center w-5 h-5">
                  <DownloadIcon />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}