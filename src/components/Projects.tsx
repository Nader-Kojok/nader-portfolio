"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tools: string[];
  link: string;
}

interface ProjectTranslations {
  en: Project[];
  fr: Project[];
}

const projects: ProjectTranslations = {
  en: [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A modern dashboard interface for managing online store operations with real-time analytics and inventory management.",
      image: "/projects/dashboard.jpg",
      tools: ["Figma", "React", "Tailwind CSS", "Chart.js"],
      link: "#"
    },
    {
      id: 2,
      title: "Health & Wellness App",
      description: "Mobile application design for tracking personal health metrics, meditation sessions, and workout routines.",
      image: "/projects/health-app.jpg",
      tools: ["Adobe XD", "Sketch", "Principle"],
      link: "#"
    },
    {
      id: 3,
      title: "Financial Platform Redesign",
      description: "Complete UX/UI overhaul of a financial services platform, focusing on simplifying complex transactions.",
      image: "/projects/finance.jpg",
      tools: ["Figma", "Protopie", "Adobe Creative Suite"],
      link: "#"
    },
  ],
  fr: [
    {
      id: 1,
      title: "Tableau de Bord E-Commerce",
      description: "Une interface de tableau de bord moderne pour gérer les opérations de boutique en ligne avec des analyses en temps réel et la gestion des stocks.",
      image: "/projects/dashboard.jpg",
      tools: ["Figma", "React", "Tailwind CSS", "Chart.js"],
      link: "#"
    },
    {
      id: 2,
      title: "Application Santé & Bien-être",
      description: "Conception d'une application mobile pour suivre les métriques de santé personnelle, les séances de méditation et les routines d'exercice.",
      image: "/projects/health-app.jpg",
      tools: ["Adobe XD", "Sketch", "Principle"],
      link: "#"
    },
    {
      id: 3,
      title: "Refonte de Plateforme Financière",
      description: "Refonte complète de l'expérience utilisateur d'une plateforme de services financiers, axée sur la simplification des transactions complexes.",
      image: "/projects/finance.jpg",
      tools: ["Figma", "Protopie", "Adobe Creative Suite"],
      link: "#"
    },
  ]
};


export default function Projects() {
  const { language, translations } = useLanguage();
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translations.projects.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {translations.projects.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[language].map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 0.5]
              }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {translations.projects.viewProject}
                  <svg
                    className="w-4 h-4 ml-2"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}