import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN to fetch directly from Sanity API
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Add token for authentication
  ignoreBrowserTokenWarning: true // Ignore token warnings in browser
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
