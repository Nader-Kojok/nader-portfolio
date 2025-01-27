export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tools: string[];
  link: string;
  challenge: string;
  solution: string;
  results: string[];
  fullDescription: string;
  images: {
    url: string;
    alt: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ProjectPreview {
  id: number;
  title: string;
  description: string;
  image: string;
  tools: string[];
  link: string;
}