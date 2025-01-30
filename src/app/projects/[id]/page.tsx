import { getProject } from '@/sanity/lib/project';
import ProjectDetail from '@/components/ProjectDetail';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: 'Project Details',
  description: 'View detailed information about this project',
};

export async function generateStaticParams() {
  return [];
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}