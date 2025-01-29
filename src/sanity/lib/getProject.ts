import { client } from './client';
import { Project } from '@/types/project';

export async function getProject(id: string): Promise<Project | null> {
  const query = `*[_type == "project" && _id == $id][0]{
    _id,
    title,
    title_en,
    title_fr,
    description,
    fullDescription_en,
    fullDescription_fr,
    image,
    tools,
    challenge_en,
    challenge_fr,
    solution_en,
    solution_fr,
    results[]{text_en, text_fr}
  }`;

  try {
    const project = await client.fetch(query, { id });
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}