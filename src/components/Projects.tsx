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

const projects: Project[] = [
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
];

export default function Projects() {
  const { translations } = useLanguage();
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-1"
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