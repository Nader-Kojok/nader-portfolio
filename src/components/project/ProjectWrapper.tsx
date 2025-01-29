// src/components/project/ProjectWrapper.tsx

"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import ProjectDetail from "@/components/ProjectDetail";

export const ProjectWrapper = ({ project }: { project: any }) => {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      disableTransition
    >
      <ProjectDetail project={project} />
    </ThemeProvider>
  );
};