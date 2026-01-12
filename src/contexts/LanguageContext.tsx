"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  hero: {
    title: string;
    description: string;
    subtitle: string;
    agencyText: string;
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
  developmentProcess: {
    title: string;
    description: string;
    steps: {
      discovery: {
        title: string;
        description: string;
      };
      architecture: {
        title: string;
        description: string;
      };
      development: {
        title: string;
        description: string;
      };
      deployment: {
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
    scheduleCall: {
      title: string;
      buttonText: string;
    };
    contactInfo: {
      title: string;
      email: string;
      phone: string;
    };
    social: {
      title: string;
      links: {
        linkedin: string;
        github: string;
        instagram: string;
      };
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title: 'Hi, I\'m Nader Kojok',
      description: "CTO | Front-End Developer | Building immersive, responsive, and high-performance web and mobile applications.",
      subtitle: "Flutter, React, Next.js, TypeScript, Tailwind CSS, Redux, Figma, CI/CD",
      agencyText: "Cofounder of",
      viewWork: 'View Portfolio',
      getInTouch: 'Get in Touch',
    },
    testimonials: {
      title: 'Client Testimonials',
      description: 'What our clients say about our work and collaboration',
      items: [
        {
          quote: 'Working with Nader was exceptional. He understood our technical requirements and delivered a robust, scalable solution that exceeded expectations.',
          author: 'Sokhna FALL',
          role: 'Founder',
          company: 'Bolide'
        },
        {
          quote: 'Nader doesn\'t just write code - he architects solutions that are maintainable, performant, and future-proof.',
          author: 'Anwar SAFA',
          role: 'CEO',
          company: 'ArmaSoft'
        },
        {
          quote: 'Nader built our e-commerce platform with Flutter and Next.js. The result? Lightning-fast performance and a seamless user experience across all devices.',
          author: 'François PINOT',
          role: 'Marketing Director',
          company: 'Point-show'
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
        list: ['Flutter', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Figma', 'CI/CD', 'Node.js', 'Firebase']
      },
      journey: {
        title: 'Professional Journey',
        description: 'My experience in the digital world',
        experiences: [
          {
            role: 'CTO & Founder',
            company: 'Agence Arcane',
            period: '2023 - Present',
            description: 'Leading technical strategy and building high-performance web and mobile applications for clients.'
          },
          {
            role: '(P)UX Designer',
            company: 'ArmaSoft',
            period: '2019 - 2023',
            description: 'Conception d\'interfaces utilisateur centrées sur l\'humain et réalisation de tests d\'utilisabilité.'
          },
          {
            role: 'Développeur Front-end',
            company: 'Tech Touch (Freelance)',
            period: '2017 - 2018',
            description: 'Conception et développement de sites web modernes et responsives, alliant performance technique et esthétique.'
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
      description: 'Discover our latest web and mobile projects at Agence Arcane.',
      viewProject: 'View Portfolio',
    },
    developmentProcess: {
      title: 'Development Process',
      description: 'My systematic approach to building high-performance applications',
      steps: {
        discovery: {
          title: 'Discovery',
          description: 'Analyzing requirements, defining technical stack, and planning architecture to meet business objectives.'
        },
        architecture: {
          title: 'Architecture',
          description: 'Designing scalable system architecture, database schemas, and API structures for optimal performance.'
        },
        development: {
          title: 'Development',
          description: 'Building robust features with clean code, implementing best practices, and ensuring code quality through testing.'
        },
        deployment: {
          title: 'Deployment',
          description: 'Deploying with CI/CD pipelines, monitoring performance, and maintaining continuous improvement cycles.'
        }
      }
    },
    footer: {
      getInTouch: 'Get in Touch',
      rights: ' 2025 Nader Kojok. All rights reserved.',
      quickLinks: {
        title: 'Quick Links',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
      },
      scheduleCall: {
        title: 'Schedule a Call',
        buttonText: 'Book a Meeting'
      },
      contactInfo: {
        title: 'Contact',
        email: 'nader.k@agencearcane.com',
        phone: '+221 78 463 40 40'
      },
      social: {
        title: 'Follow',
        links: {
          linkedin: 'LinkedIn',
          github: 'GitHub',
          instagram: 'Instagram'
        }
      }
    },
  },
  fr: {
    hero: {
      title: 'Bonjour, je suis Nader Kojok',
      description: "CTO | Front-End Developer | Je crée des applications web et mobile immersives, responsives et haute performance.",
      subtitle: "Flutter, React, Next.js, TypeScript, Tailwind CSS, Redux, Figma, CI/CD",
      agencyText: "Cofondateur de",
      viewWork: 'Voir le Portfolio',
      getInTouch: 'Discutons ensemble',
    },
    testimonials: {
      title: 'Avis Clients',
      description: 'Ce qu’ils retiennent de notre collaboration et des résultats obtenus.',
      items: [
        {
          quote: 'Travailler avec Nader a été exceptionnel. Il a compris nos besoins techniques et livré une solution robuste et évolutive qui a dépassé nos attentes.',
          author: 'Sokhna FALL',
          role: 'Fondatrice',
          company: 'Bolide'
        },
        {
          quote: "Nader ne se contente pas d'écrire du code - il architecture des solutions maintenables, performantes et pérennes.",
          author: 'Anwar SAFA',
          role: 'CEO',
          company: 'ArmaSoft'
        },
        {
          quote: 'Nader a construit notre plateforme e-commerce avec Flutter et Next.js. Résultat : des performances ultra-rapides et une expérience fluide sur tous les appareils.',
          author: 'François PINOT',
          role: 'Directeur Marketing',
          company: 'Point-show'
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
        list: ['Flutter', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Figma', 'CI/CD', 'Node.js', 'Firebase']
      },
      journey: {
        title: 'Parcours Professionnel',
        description: 'Mon expérience dans le monde numérique',
        experiences: [
          {
            role: 'CTO & Fondateur',
            company: 'Agence Arcane',
            period: '2023 - Présent',
            description: 'Pilotage de la stratégie technique et développement d\'applications web et mobile performantes pour nos clients.'
          },
          {
            role: '(P)UX Designer',
            company: 'ArmaSoft',
            period: '2019 - 2023',
            description: 'Conception d\'interfaces utilisateur centrées sur l\'humain et réalisation de tests d\'utilisabilité.'
          },
          {
            role: 'Développeur Front-end',
            company: 'Tech Touch (Freelance)',
            period: '2017 - 2018',
            description: 'Conception et développement de sites web modernes et responsives, alliant performance technique et esthétique.'
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
      description: 'Découvrez nos dernières réalisations web et mobile chez Agence Arcane.',
      viewProject: 'Voir le Portfolio',
    },
    developmentProcess: {
      title: 'Processus de Développement',
      description: 'Une approche structurée pour créer des applications performantes et évolutives.',
      steps: {
        discovery: {
          title: 'Découverte',
          description: 'Analyser les besoins, définir la stack technique et planifier l\'architecture pour atteindre les objectifs business.'
        },
        architecture: {
          title: 'Architecture',
          description: 'Concevoir une architecture système évolutive, des schémas de base de données et des structures API optimales.'
        },
        development: {
          title: 'Développement',
          description: 'Construire des fonctionnalités robustes avec du code propre, implémenter les bonnes pratiques et garantir la qualité par les tests.'
        },
        deployment: {
          title: 'Déploiement',
          description: 'Déployer avec des pipelines CI/CD, monitorer les performances et maintenir des cycles d\'amélioration continue.'
        }
      }
    },
    footer: {
      getInTouch: 'Discutons ensemble',
      rights: ' 2025 Nader Kojok. Tous droits réservés.',
      quickLinks: {
        title: 'Liens Utiles',
        about: 'À Propos',
        projects: 'Projets',
        contact: 'Contact'
      },
      scheduleCall: {
        title: 'Planifier un Appel',
        buttonText: 'Discutons ensemble'
      },
      contactInfo: {
        title: 'Contact',
        email: 'nader.k@agencearcane.com',
        phone: '+221 78 463 40 40'
      },
      social: {
        title: 'Suivez',
        links: {
          linkedin: 'LinkedIn',
          github: 'GitHub',
          instagram: 'Instagram'
        }
      }
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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