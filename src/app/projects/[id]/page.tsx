// src/app/projects/[id]/page.tsx

import { client } from '@/sanity/lib/client';
import { getProject } from '@/sanity/lib/getProject';
import ProjectDetail from '@/components/ProjectDetail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Project } from '@/types/project';

export const revalidate = 60;

type ProjectPageParams = {
  id: string;
};

// If you want to unify them, define:
interface ProjectRouteProps {
  params: ProjectPageParams;
}

export async function generateStaticParams(): Promise<ProjectPageParams[]> {
  // Return an array of { id: string }
  try {
    const projects = await client.fetch<Project[]>(`*[_type == "project"]`);
    return projects?.map((p) => ({ id: p._id })) ?? [];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: ProjectRouteProps): Promise<Metadata> {
  try {
    const project = await getProject(params.id);
    if (!project) {
      return {
        title: 'Project Not Found | Portfolio',
        description: 'The requested project could not be found.',
      };
    }
    return {
      title: `${project.title_en || project.title || 'Untitled Project'} | Portfolio`,
      description:
        project.description || project.fullDescription_en || 'No description available',
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error | Portfolio',
      description: 'An error occurred while loading the project.',
    };
  }
}

export default async function ProjectPage({ params }: ProjectRouteProps) {
  try {
    const project = await getProject(params.id);
    if (!project) {
      notFound();
    }
    return <ProjectDetail project={project!} />;
  } catch (error) {
    console.error('Error loading project:', error);
    throw error;
  }
}
