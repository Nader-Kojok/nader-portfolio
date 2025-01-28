"use client";

import { useContext, useRef } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import LightGallery from "lightgallery/react";
import { LightGallerySettings } from "lightgallery/lg-settings";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


interface ProjectDetailProps {
  project: {
    title: string;
    fullDescription: string;
    image: SanityImageSource;
    tools: string[];
    challenge: string;
    solution: string;
    results: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
    gallery?: SanityImageSource[];
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  useContext(LanguageContext);
  const lightGalleryRef = useRef<any>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{project.title}</h1>
        <div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
          <Image
            src={urlForImage(project.image).url()}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Project Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
            {project.fullDescription}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Tools Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-gray-600 dark:text-gray-300">{project.challenge}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">The Solution</h2>
          <p className="text-gray-600 dark:text-gray-300">{project.solution}</p>
        </div>
      </div>

      {/* Key Results */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Key Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.results.map((result, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <p className="text-gray-600 dark:text-gray-300">{result}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      {project.testimonial && (
        <div className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
          <blockquote className="text-xl italic text-gray-600 dark:text-gray-300 mb-4">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <div className="font-medium">
            <p className="text-gray-900 dark:text-white">
              {project.testimonial.author}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              {project.testimonial.role}
            </p>
          </div>
        </div>
      )}

      {/* Project Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <LightGallery
            onInit={(detail) => {
              lightGalleryRef.current = detail.instance; // ✅ Correctly assigning ref
            }}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            mode="lg-fade"
            elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {project.gallery.map((image, index) => (
              <a
                key={`gallery-image-${index}`}
                className="gallery-item relative h-64 rounded-lg overflow-hidden cursor-pointer"
                data-src={urlForImage(image).url()}
                data-sub-html={`<h4>Image ${index + 1}</h4>`}
              >
                <Image
                  src={urlForImage(image).url()}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </LightGallery>
        </div>
      )}
    </div>
  );
}
