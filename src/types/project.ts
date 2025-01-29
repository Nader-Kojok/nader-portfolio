import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Project {
  _id: string;
  title: string;
  title_en: string;
  title_fr: string;
  description: string;
  fullDescription_en: string;
  fullDescription_fr: string;
  image: SanityImageSource;
  tools: string[];
  challenge_en: string;
  challenge_fr: string;
  solution_en: string;
  solution_fr: string;
  results: {
    text_en: string;
    text_fr: string;
  }[];
  testimonial?: {
    quote_en: string;
    quote_fr: string;
    author: string;
    role_en: string;
    role_fr: string;
  };
}