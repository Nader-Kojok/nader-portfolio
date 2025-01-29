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
      description: "UX/UI Designer | I design digital experiences that users love and businesses trust.",
      viewWork: 'View Work',
      getInTouch: 'Get in Touch',
    },
    testimonials: {
      title: 'Client Testimonials',
      description: 'What our clients say about our work and collaboration',
      items: [
        {
          quote: 'Working with Nader was rewarding. He grasped our vision from the start and transformed it into an effective solution.',
          author: 'Sokhna FALL',
          role: 'Founder',
          company: 'Bolide'
        },
        {
          quote: 'Nader doesn’t just design prototypes—he lays the foundation for an app that makes sense.',
          author: 'Anwar SAFA',
          role: 'CEO',
          company: 'ArmaSoft'
        },
        {
          quote: 'Nader brought a perfect balance of design and functionality to our e-commerce platform. The result? A smooth, intuitive shopping experience that our customers love.',
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
          },
          {
            role: 'UI/UX Designer',
            company: 'Creative Agency',
            period: '2016 - 2018',
            description: 'Created user-centered designs and conducted usability testing for various digital products.'
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
      rights: '© 2024 Nader Kojok. All rights reserved.',
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
      description: "UX/UI Designer | Je conçois des expériences digitales que les utilisateurs adorent et que les entreprises adoptent.",
      viewWork: 'Voir les réalisations',
      getInTouch: 'Discutons ensemble',
    },
    testimonials: {
      title: 'Avis Clients',
      description: 'Ce qu’ils retiennent de notre collaboration et des résultats obtenus.',
      items: [
        {
          quote: 'Travailler avec Nader a été enrichissant. Il a compris notre vision dès le départ et l’a transformée en une solution efficace.',
          author: 'Sokhna FALL',
          role: 'Fondatrice',
          company: 'Bolide'
        },
        {
          quote: "Nader ne se contente pas de faire des prototypes, il pose les bases d’une application qui a du sens.",
          author: 'Anwar SAFA',
          role: 'CEO',
          company: 'ArmaSoft'
        },
        {
          quote: 'Nader a su allier design et performance pour notre site e-commerce. Résultat : une expérience fluide et intuitive, très appréciée par nos clients.',
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
          },
          {
            role: 'Designer UX/UI',
            company: 'Agence Créative',
            period: '2016 - 2018',
            description: 'Création de designs centrés sur l\'utilisateur et réalisation de tests d\'utilisabilité pour divers produits numériques.'
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
      description: 'Une méthode claire pour concevoir des solutions digitales qui font la différence.',
      steps: {
        discovery: {
          title: 'Recherche',
          description: 'Observer, écouter, comprendre. Décortiquer les besoins des utilisateurs, saisir les enjeux business et analyser le marché pour partir sur des bases solides.'
        },
        define: {
          title: 'Définition',
          description: 'Faire le tri, synthétiser, structurer. Transformer les données brutes en décisions claires. Identifier ce qui a du potentiel et fixer une direction sans perdre de temps.'
        },
        design: {
          title: 'Design',
          description: 'Expérimenter, ajuster, affiner. Construire des interfaces qui ont du sens, qui attirent et qui fonctionnent. Tester, itérer, jusqu’à ce que l’expérience soit fluide et naturelle.'
        },
        deliver: {
          title: 'Livraison',
          description: 'Lancer, mesurer, améliorer. Déployer un produit qui tient la route, assurer son évolution et s’assurer qu’il crée de la valeur, aujourd’hui et demain.'
        }
      }
    },
    footer: {
      getInTouch: 'Discutons ensemble',
      rights: '© 2024 Nader Kojok. Tous droits réservés.',
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