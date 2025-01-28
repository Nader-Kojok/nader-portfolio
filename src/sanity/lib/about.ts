import { client } from './client'

export async function getAboutContent() {
  const query = `*[_type == "about"][0]{
    title_en,
    description_en,
    downloadResume_en,
    skills_title_en,
    skills_description_en,
    skills_list,
    journey_title_en,
    journey_description_en,
    experiences[]{role_en, role_fr, company, period, description_en, description_fr},
    social_title_en,
    social_description_en,
    social_connect_en,
    title_fr,
    description_fr,
    downloadResume_fr,
    skills_title_fr,
    skills_description_fr,
    journey_title_fr,
    journey_description_fr,
    social_title_fr,
    social_description_fr,
    social_connect_fr
  }`;

  try {
    const content = await client.fetch(query);
    return content;
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}