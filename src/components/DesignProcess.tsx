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
      title: translations?.designProcess?.steps?.discovery?.title || 'Discovery',
      description: translations?.designProcess?.steps?.discovery?.description || 'Understanding project requirements and user needs'
    },
    {
      key: 'define',
      title: translations?.designProcess?.steps?.define?.title || 'Define',
      description: translations?.designProcess?.steps?.define?.description || 'Defining the scope and strategy'
    },
    {
      key: 'design',
      title: translations?.designProcess?.steps?.design?.title || 'Design',
      description: translations?.designProcess?.steps?.design?.description || 'Creating the visual and interactive elements'
    },
    {
      key: 'deliver',
      title: translations?.designProcess?.steps?.deliver?.title || 'Deliver',
      description: translations?.designProcess?.steps?.deliver?.description || 'Implementing and launching the solution'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translations?.designProcess?.title || 'Design Process'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {translations?.designProcess?.description || 'Our systematic approach to creating exceptional digital experiences'}
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
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 ${step.key === 'discovery' ? 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30' : step.key === 'define' ? 'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30' : step.key === 'design' ? 'bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30' : 'bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30'}`}>
                {step.key === 'discovery' && (
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
                {step.key === 'define' && (
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )}
                {step.key === 'design' && (
                  <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )}
                {step.key === 'deliver' && (
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
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