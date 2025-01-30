import { client } from './client';

export async function getProjects() {
  const query = `*[_type == "project"]{
    title,
    title_en,
    title_fr,
    description,
    image,
    tools,
    _id
  }`;

  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return null;
  }
}

export async function getProject(id: string) {
  const query = `*[_type == "project" && _id == $id]{
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
    results,
    testimonial,
    gallery,
    _id
  }[0]`;

  try {
    const project = await client.fetch(query, { id });
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}