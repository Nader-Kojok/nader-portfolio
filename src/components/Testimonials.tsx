"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Testimonials() {
  const { translations } = useLanguage();

  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translations?.testimonials?.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {translations?.testimonials?.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: 0,
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
            <div className="mb-6">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              &quot;{translations?.testimonials?.items[0]?.quote}&quot;
            </p>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{translations?.testimonials?.items[0]?.author[0]}{translations?.testimonials?.items[0]?.author.split(' ')[1]?.[0]}</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{translations?.testimonials?.items[0]?.author}</h4>
                <p className="text-gray-500 dark:text-gray-400">{translations?.testimonials?.items[0]?.role}, {translations?.testimonials?.items[0]?.company}</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: 0.1,
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
            <div className="mb-6">
              <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              &quot;{translations?.testimonials?.items[1]?.quote}&quot;
            </p>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">{translations?.testimonials?.items[1]?.author[0]}{translations?.testimonials?.items[1]?.author.split(' ')[1]?.[0]}</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{translations?.testimonials?.items[1]?.author}</h4>
                <p className="text-gray-500 dark:text-gray-400">{translations?.testimonials?.items[1]?.role}, {translations?.testimonials?.items[1]?.company}</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: 0.2,
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
            <div className="mb-6">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              &quot;{translations?.testimonials?.items[2]?.quote}&quot;
            </p>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-semibold">{translations?.testimonials?.items[2]?.author[0]}{translations?.testimonials?.items[2]?.author.split(' ')[1]?.[0]}</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{translations?.testimonials?.items[2]?.author}</h4>
                <p className="text-gray-500 dark:text-gray-400">{translations?.testimonials?.items[2]?.role}, {translations?.testimonials?.items[2]?.company}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}