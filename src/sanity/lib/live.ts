// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { client } from './client'

// Placeholder for live content API - not currently in use
// To enable live content, follow the next-sanity documentation
export const sanityFetch = async (query: string, params = {}) => {
  return client.fetch(query, params);
};

export const SanityLive = () => null;
