"use client";

import { useContext, useRef } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import LightGallery from "lightgallery/react";
import { motion } from "framer-motion";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ProjectDetailProps {
  project: {
    title_en: string;
    title_fr: string;
    fullDescription_en: string;
    fullDescription_fr: string;
    image: SanityImageSource;
    tools: string[];
    challenge_en: string;
    challenge_fr: string;
    solution_en: string;
    solution_fr: string;
    results: {
      text_en: string;
      text_fr: string;
    }[];
    testimonial?: {
      quote_en: string;
      quote_fr: string;
      author: string;
      role_en: string;
      role_fr: string;
    };
    gallery?: SanityImageSource[];
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const context = useContext(LanguageContext);
  const language = context?.language;
  const lightGalleryRef = useRef<any>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-24 max-w-7xl"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {language === 'en' ? project.title_en : project.title_fr}
        </h1>
        <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={urlForImage(project.image).url()}
            alt={language === 'en' ? project.title_en : project.title_fr}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Project Overview */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Overview</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {language === 'en' ? project.fullDescription_en : project.fullDescription_fr}
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Tools Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Challenge & Solution */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">The Challenge</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {language === 'en' ? project.challenge_en : project.challenge_fr}
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">The Solution</h2>
          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
            {(language === 'en' ? project.solution_en : project.solution_fr).split('\n').map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Key Results */}
      <motion.div variants={itemVariants} className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Key Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.results.map((result, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === 'en' ? result.text_en : result.text_fr}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial */}
      {project.testimonial && (
        <motion.div
          variants={itemVariants}
          className="mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-2xl" />
          <div className="relative p-12 backdrop-blur-sm rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Client Testimonial</h2>
            <blockquote className="text-2xl italic text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              &ldquo;{language === 'en' ? project.testimonial.quote_en : project.testimonial.quote_fr}&rdquo;
            </blockquote>
            <div className="font-medium">
              <p className="text-xl text-gray-800 dark:text-white mb-1">
                {project.testimonial.author}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {language === 'en' ? project.testimonial.role_en : project.testimonial.role_fr}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Project Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Project Gallery</h2>
          <LightGallery
            onInit={(detail) => {
              lightGalleryRef.current = detail.instance;
            }}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            mode="lg-fade"
            elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {project.gallery.map((image, index) => (
              <motion.a
                key={`gallery-image-${index}`}
                whileHover={{ scale: 1.02 }}
                className="gallery-item relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-src={urlForImage(image).url()}
                data-sub-html={`<h4>Image ${index + 1}</h4>`}
                role="button"
                aria-label={`View gallery image ${index + 1}`}
              >
                <Image
                  src={urlForImage(image).url()}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5 a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </motion.a>
            ))}
          </LightGallery>
        </motion.div>
      )}
    </motion.div>
  );
}
