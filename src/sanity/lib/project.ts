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