import { Project } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";

const projects: Project[] = [{
  id: 1,
  title: "E-Commerce Dashboard",
  description: "A modern dashboard interface for managing online store operations with real-time analytics and inventory management.",
  image: "/projects/dashboard.jpg",
  tools: ["Figma", "React", "Tailwind CSS", "Chart.js"],
  link: "#",
  challenge: "The client needed a comprehensive dashboard that could handle complex data visualization while maintaining ease of use for non-technical staff.",
  solution: "Implemented a modular dashboard design with customizable widgets and intuitive navigation. Utilized Chart.js for real-time data visualization and incorporated responsive design principles for seamless mobile access.",
  results: [
    "50% reduction in time spent on inventory management",
    "30% increase in order processing efficiency",
    "95% positive feedback from staff members"
  ],
  fullDescription: "The E-Commerce Dashboard project was developed to streamline operations for online retailers. The solution combines powerful analytics with an intuitive interface, making it easier for businesses to make data-driven decisions.",
  images: [
    {
      url: "/projects/dashboard/analytics.jpg",
      alt: "Analytics dashboard showing key metrics"
    },
    {
      url: "/projects/dashboard/inventory.jpg",
      alt: "Inventory management interface"
    }
  ],
  testimonial: {
    quote: "This dashboard has transformed how we manage our online store. It's intuitive, powerful, and saves us hours every week.",
    author: "Sarah Johnson",
    role: "E-commerce Manager"
  }
}];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

import ProjectDetailContent from '@/components/ProjectDetail';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto transform transition-all duration-700 ease-in-out">
        <ProjectDetailContent project={project} />
      </div>
    </main>
  );
}