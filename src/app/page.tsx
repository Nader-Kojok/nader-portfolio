"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import DesignProcess from "@/components/DesignProcess";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const { translations } = useLanguage();
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
