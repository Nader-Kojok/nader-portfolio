// src/app/projects/[id]/page.tsx

import { getProject } from '@/sanity/lib/getProject';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamicImport from 'next/dynamic';

// Dynamically import ProjectWrapper with loading state
const ProjectWrapper = dynamicImport(
  () => import('@/components/project/ProjectWrapper').then(mod => mod.ProjectWrapper),
  {
    loading: () => <div>Loading project...</div>,
    ssr: true
  }
);

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const project = await getProject(params.id);

    if (!project) {
      return {
        title: 'Project Not Found | Portfolio',
        description: 'The requested project could not be found',
      };
    }

    return {
      title: `${(project as any).title_en || (project as any).title || 'Untitled Project'} | Portfolio`,
      description: project.description_en || project.fullDescription_en || 'No description available',
    };
  } catch (error) {
    return {
      title: 'Error | Portfolio',
      description: 'An error occurred while loading the project',
    };
  }
}

interface PageProps {
  params: { id: string }
}

export default async function ProjectPage({
  params,
}: PageProps) {
  let project;
  
  try {
    project = await getProject(params.id);
  } catch (error: any) { // Type the error properly
    console.error('Data fetching error:', error);
    throw new Error('Failed to load project data');
  }

  if (!project) {
    notFound();
  }

  return <ProjectWrapper project={project} />;
}
