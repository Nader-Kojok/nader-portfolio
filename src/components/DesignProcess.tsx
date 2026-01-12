"use client";

import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useRef } from 'react';

export default function DesignProcess() {
  const { translations } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      key: 'discovery',
      title: translations?.developmentProcess?.steps?.discovery?.title || 'Discovery',
      description: translations?.developmentProcess?.steps?.discovery?.description || 'Analyzing requirements and planning architecture'
    },
    {
      key: 'architecture',
      title: translations?.developmentProcess?.steps?.architecture?.title || 'Architecture',
      description: translations?.developmentProcess?.steps?.architecture?.description || 'Designing scalable system architecture'
    },
    {
      key: 'development',
      title: translations?.developmentProcess?.steps?.development?.title || 'Development',
      description: translations?.developmentProcess?.steps?.development?.description || 'Building robust features with clean code'
    },
    {
      key: 'deployment',
      title: translations?.developmentProcess?.steps?.deployment?.title || 'Deployment',
      description: translations?.developmentProcess?.steps?.deployment?.description || 'Deploying with CI/CD pipelines'
    }
  ];

  return (
    <section ref={ref} className="py-40 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900" aria-labelledby="design-process-title">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1,
            ease: "easeOut",
            delay: 0.2
          }}
          className="text-center mb-16"
        >
          <h2 id="design-process-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translations?.developmentProcess?.title || 'Development Process'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {translations?.developmentProcess?.description || 'Our systematic approach to building high-performance applications'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
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
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mb-12 relative overflow-hidden shadow-md hover:shadow-xl dark:hover:from-blue-900/40 dark:hover:to-indigo-900/40"
              role="article"
              aria-labelledby={`step-title-${step.key}`}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 ${step.key === 'discovery' ? 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30' : step.key === 'architecture' ? 'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30' : step.key === 'development' ? 'bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30' : 'bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30'}`}>
                {step.key === 'discovery' && (
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
                {step.key === 'architecture' && (
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )}
                {step.key === 'development' && (
                  <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {step.key === 'deployment' && (
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}