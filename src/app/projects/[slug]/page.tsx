import { client } from "@/sanity/lib/client";
import ProjectDetail from "../../../components/ProjectDetail";
import { Metadata } from 'next';

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getProject(slug: string) {
  const query = `*[_type == "project" && _id == $slug][0]`;
  const project = await client.fetch(query, { slug });
  return project;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: project.title_en,
    description: project.fullDescription_en,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail project={project} />;
}