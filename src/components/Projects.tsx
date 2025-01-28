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
    <section id="projects" className="py-40 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800" aria-labelledby="projects-title">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="projects-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
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
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-3xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a
                href={`/projects/${project._id}`}
                className="block h-[400px] relative overflow-hidden"
                aria-labelledby={`project-title-${project._id}`}
                role="article"
              >
                <Image
                  src={urlForImage(project.image).url()}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 backdrop-blur-sm" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <h3 id={`project-title-${project._id}`} className="text-2xl font-bold text-white mix-blend-difference group-hover:mix-blend-difference transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 line-clamp-2 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}