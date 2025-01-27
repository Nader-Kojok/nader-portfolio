"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/types/project';

export default function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <div>
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </Link>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        {project.title}
      </h1>
      
      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {project.fullDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            The Challenge
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {project.challenge}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            The Solution
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Results
        </h2>
        <ul className="space-y-4">
          {project.results.map((result, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-gray-600 dark:text-gray-300"
            >
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {result}
            </motion.li>
          ))}
        </ul>
      </div>

      {project.testimonial && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mb-12 relative overflow-hidden shadow-md transform transition-all duration-700 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03] hover:from-blue-100/90 hover:to-indigo-100/90 dark:hover:from-blue-900/40 dark:hover:to-indigo-900/40"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-50" />
          <div className="relative z-10">
            <svg
              className="w-10 h-10 text-blue-400/20 dark:text-blue-300/20 absolute top-0 left-0 transform -translate-x-4 -translate-y-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-lg md:text-xl text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed relative pl-2">
              &quot;{project.testimonial.quote}&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {project.testimonial.author[0]}
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-lg">
                  {project.testimonial.author}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.testimonial.role}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Image {index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}