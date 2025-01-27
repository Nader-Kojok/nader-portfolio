"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  hero: {
    title: string;
    description: string;
    viewWork: string;
    getInTouch: string;
  };
  about: {
    title: string;
    description: string;
    downloadResume: string;
    skills: {
      title: string;
      description: string;
      list: string[];
    };
    journey: {
      title: string;
      description: string;
      experiences: {
        role: string;
        company: string;
        period: string;
        description: string;
      }[];
    };
    social: {
      title: string;
      description: string;
      connect: string;
    };
  };
  projects: {
    title: string;
    description: string;
    viewProject: string;
  };
  testimonials: {
    title: string;
    description: string;
    items: {
      quote: string;
      author: string;
      role: string;
      company: string;
    }[];
  };
  designProcess: {
    title: string;
    description: string;
    steps: {
      discovery: {
        title: string;
        description: string;
      };
      define: {
        title: string;
        description: string;
      };
      design: {
        title: string;
        description: string;
      };
      deliver: {
        title: string;
        description: string;
      };
    };
  };
  footer: {
    getInTouch: string;
    rights: string;
    quickLinks: {
      title: string;
      about: string;
      projects: string;
      contact: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title: 'Hi, I’m Nader Kojok, UX/UI Designer & Front-end Developer',
      description: "I’m passionate about creating intuitive and engaging digital experiences. I help businesses transform their ideas into memorable and impactful digital products.",
      viewWork: 'View My Work',
      getInTouch: 'Get in Touch',
    },
    testimonials: {
      title: 'Client Testimonials',
      description: 'What our clients say about our work and collaboration',
      items: [
        {
          quote: 'Working with this team was an absolute pleasure. They understood our vision perfectly and delivered beyond our expectations.',
          author: 'Sarah Johnson',
          role: 'Marketing Director',
          company: 'Tech Innovations Ltd'
        },
        {
          quote: 'The attention to detail and commitment to user experience was impressive. Our new platform has received outstanding feedback.',
          author: 'Michael Chen',
          role: 'Product Manager',
          company: 'Digital Solutions Inc'
        },
        {
          quote: 'A truly professional team that combines creativity with technical expertise. The results speak for themselves.',
          author: 'Emma Davis',
          role: 'CEO',
          company: 'Creative Studios'
        }
      ]
    },
    about: {
      title: 'About',
      description: 'About me',
      downloadResume: 'Download Resume',
      skills: {
        title: 'Skills & Expertise',
        description: 'Technologies and tools I work with',
        list: ['UI/UX Design', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Figma', 'Adobe Creative Suite']
      },
      journey: {
        title: 'Professional Journey',
        description: 'My experience in the digital world',
        experiences: [
          {
            role: 'Senior UX/UI Designer',
            company: 'Digital Agency',
            period: '2020 - Present',
            description: 'Leading design initiatives and creating user-centered digital solutions.'
          },
          {
            role: 'Frontend Developer',
            company: 'Tech Startup',
            period: '2018 - 2020',
            description: 'Developed responsive web applications using modern technologies.'
          }
        ]
      },
      social: {
        title: 'Let\'s Connect',
        description: 'Find me on social media',
        connect: 'Connect with me'
      }
    },
    projects: {
      title: 'Featured Projects',
      description: 'A collection of my recent work in UX/UI design and digital creation.',
      viewProject: 'View Project',
    },
    designProcess: {
      title: 'Design Process',
      description: 'My systematic approach to creating meaningful digital solutions',
      steps: {
        discovery: {
          title: 'Discovery',
          description: 'Understanding user needs, business goals, and market context through research and analysis.'
        },
        define: {
          title: 'Define',
          description: 'Synthesizing research insights to identify key opportunities and define clear project objectives.'
        },
        design: {
          title: 'Design',
          description: 'Creating intuitive interfaces and engaging experiences through iterative design and prototyping.'
        },
        deliver: {
          title: 'Deliver',
          description: 'Implementing and launching solutions while ensuring quality and continuous improvement.'
        }
      }
    },
    footer: {
      getInTouch: 'Get in Touch',
      rights: 'All rights reserved.',
      quickLinks: {
        title: 'Quick Links',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
      }
    },
  },
  fr: {
    hero: {
      title: 'Bonjour, je suis Nader Kojok, Designer UX/UI et Développeur',
      description: "Passionné par la création d'expériences numériques intuitives et engageantes, j'aide les entreprises à transformer leurs idées en produits mémorables qui font la différence.",
      viewWork: 'Voir Mes Projets',
      getInTouch: 'Me Contacter',
    },
    testimonials: {
      title: 'Témoignages Clients',
      description: 'Ce que nos clients disent de notre travail et de notre collaboration',
      items: [
        {
          quote: 'Travailler avec cette équipe a été un véritable plaisir. Ils ont parfaitement compris notre vision et ont dépassé nos attentes.',
          author: 'Sarah Johnson',
          role: 'Directrice Marketing',
          company: 'Tech Innovations Ltd'
        },
        {
          quote: "L'attention aux détails et l'engagement envers l'expérience utilisateur étaient impressionnants. Notre nouvelle plateforme a reçu des retours exceptionnels.",
          author: 'Michael Chen',
          role: 'Chef de Produit',
          company: 'Digital Solutions Inc'
        },
        {
          quote: 'Une équipe vraiment professionnelle qui allie créativité et expertise technique. Les résultats parlent d\'eux-mêmes.',
          author: 'Emma Davis',
          role: 'PDG',
          company: 'Creative Studios'
        }
      ]
    },
    about: {
      title: 'À Propos',
      description: 'À propos de moi',
      downloadResume: 'Télécharger CV',
      skills: {
        title: 'Compétences & Expertise',
        description: 'Technologies et outils avec lesquels je travaille',
        list: ['Design UX/UI', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Figma', 'Suite Adobe Creative']
      },
      journey: {
        title: 'Parcours Professionnel',
        description: 'Mon expérience dans le monde numérique',
        experiences: [
          {
            role: 'Designer UX/UI Senior',
            company: 'Agence Numérique',
            period: '2020 - Présent',
            description: 'Direction d\'initiatives de design et création de solutions numériques centrées sur l\'utilisateur.'
          },
          {
            role: 'Développeur Frontend',
            company: 'Startup Tech',
            period: '2018 - 2020',
            description: 'Développement d\'applications web responsives utilisant des technologies modernes.'
          }
        ]
      },
      social: {
        title: 'Restons en Contact',
        description: 'Retrouvez-moi sur les réseaux sociaux',
        connect: 'Connectez-vous avec moi'
      }
    },
    projects: {
      title: 'Projets en Vedette',
      description: 'Une collection de mes travaux récents en design UX/UI et création numérique.',
      viewProject: 'Voir le Projet',
    },
    designProcess: {
      title: 'Processus de Design',
      description: 'Mon approche systématique pour créer des solutions numériques significatives',
      steps: {
        discovery: {
          title: 'Découverte',
          description: 'Comprendre les besoins des utilisateurs, les objectifs commerciaux et le contexte du marché par la recherche et l\'analyse.'
        },
        define: {
          title: 'Définition',
          description: 'Synthétiser les insights de recherche pour identifier les opportunités clés et définir des objectifs de projet clairs.'
        },
        design: {
          title: 'Design',
          description: 'Créer des interfaces intuitives et des expériences engageantes à travers un design itératif et le prototypage.'
        },
        deliver: {
          title: 'Livraison',
          description: 'Mettre en œuvre et lancer des solutions tout en assurant la qualité et l\'amélioration continue.'
        }
      }
    },
    footer: {
      getInTouch: 'Me Contacter',
      rights: 'Tous droits réservés.',
      quickLinks: {
        title: 'Liens Rapides',
        about: 'À Propos',
        projects: 'Projets',
        contact: 'Contact'
      }
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}