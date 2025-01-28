import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function getHeroContent() {
  const query = `*[_type == "hero"][0]{
    title_en,
    description_en,
    viewWork_en,
    getInTouch_en,
    title_fr,
    description_fr,
    viewWork_fr,
    getInTouch_fr
  }`;

  try {
    const content = await client.fetch(query);
    return content;
  } catch (error) {
    console.error('Error fetching hero content:', error);
    return null;
  }
}
