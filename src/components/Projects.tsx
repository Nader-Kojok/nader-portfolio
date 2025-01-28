"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { getProjects } from '../sanity/lib/project';
import { urlForImage } from '../sanity/lib/image';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: SanityImageSource;
  tools: string[];
}

export default function Projects() {
  const { translations } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      if (projectsData) {
        setProjects(projectsData);
      }
    };
    fetchProjects();
  }, []);

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
              key={project._id}
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
                  src={urlForImage(project.image).url()}
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
                  href={`/projects/${project._id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline cursor-none"
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