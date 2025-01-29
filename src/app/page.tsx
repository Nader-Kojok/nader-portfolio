"use client";

import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";

// Lazy load components that are not needed immediately
const AboutMe = dynamic(() => import("@/components/AboutMe"), {
  loading: () => <div className="min-h-screen bg-white dark:bg-gray-900" />
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-screen bg-white dark:bg-gray-900" />
});

const DesignProcess = dynamic(() => import("@/components/DesignProcess"), {
  loading: () => <div className="min-h-screen bg-white dark:bg-gray-900" />
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-screen bg-white dark:bg-gray-900" />
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-screen bg-white dark:bg-gray-900" />
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <AboutMe />
      <DesignProcess />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
