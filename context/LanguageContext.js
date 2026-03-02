
import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  es: {
    nav: {
      manifesto: 'Filosofía',
      method: 'Método I.L.O.',
      ecosystem: 'Ecosistema',
      legacy: 'Legado',
      cta: 'Hacer el Test'
    },
    hero: {
      tag: 'Indy Legacy Leadership',
      title: 'Los líderes no nacen. Se construyen.',
      subtitle: 'El verdadero liderazgo consiste en formar equipos y ayudar a otros a crecer. Diseña tu arquitectura de impacto y trasciende.',
      ctaMain: 'Descubre tu nivel de liderazgo',
      ctaSecondary: 'Ver el Método'
    },
    method: {
      tag: 'Sistema de Transformación',
      title: 'Método I.L.O.',
      desc: 'Un sistema diseñado para escalar tu impacto a través de tres dimensiones críticas.',
      i: { 
        title: 'IDENTIDAD', 
        desc: 'Descubrir quién eres como líder. Hackea tu mentalidad y biología para el alto rendimiento.', 
        items: ['Mentalidad de Legado', 'Poder Personal', 'Autoridad Real'], 
        btn: 'Ver Identidad' 
      },
      l: { 
        title: 'LIDERAZGO', 
        desc: 'Aprender a liderar personas y equipos. Inspira, atrae y retén el mejor talento.', 
        items: ['Cultura de Impacto', 'Storytelling de Poder', 'Gestión de Equipos'], 
        btn: 'Ver Liderazgo' 
      },
      o: { 
        title: 'ORGANIZACIÓN', 
        desc: 'Construir sistemas que permitan escalar el liderazgo. Activos que trabajan para ti.', 
        items: ['Sistemas Inteligentes', 'Escalabilidad Real', 'Libertad Operativa'], 
        btn: 'Ver Organización' 
      }
    },
    diagnostic: {
      tag: 'Test de Liderazgo',
      title: 'Diagnóstico de Potencial',
      desc: 'Descubre tu identidad, habilidades y potencial de liderazgo actual.',
      placeholder: 'Describe tu situación actual...',
      btn: 'INICIAR TEST AHORA',
      loading: 'Analizando tu perfil...',
      loadingSub: 'Mapeando potencial de legado',
      resultTag: 'Nivel de Liderazgo:',
      strengths: 'Fortalezas',
      weaknesses: 'Áreas de Crecimiento',
      roadmap: 'Plan de Acción',
      cta: 'VER PROGRAMAS',
      retry: 'REPETIR TEST'
    },
    ecosystem: {
      tag: 'Niveles de Crecimiento',
      title: 'Ecosistema Legacy',
      level1: {
        tag: 'Nivel 1',
        title: 'Despertar Consciente',
        desc: 'Test gratuito de liderazgo para identificar tu punto de partida.'
      },
      level2: {
        tag: 'Nivel 2',
        title: 'Transformación',
        desc: 'Legacy Academy. El programa definitivo para instalar el sistema I.L.O.'
      },
      level3: {
        tag: 'Nivel 3',
        title: 'Excelencia',
        desc: 'Consultoría I.L.O. Acompañamiento estratégico para impacto masivo.'
      }
    },
    ctaFinal: {
      title: 'El liderazgo no es un destino. Es una decisión.',
      btn: 'Haz el test ahora'
    }
  },
  en: {
    nav: {
      manifesto: 'Philosophy',
      method: 'I.L.O. Method',
      ecosystem: 'Ecosystem',
      legacy: 'Legacy',
      cta: 'Take the Test'
    },
    hero: {
      tag: 'Indy Legacy Leadership',
      title: 'Leaders are not born. They are built.',
      subtitle: 'True leadership is about building teams and helping others grow. Design your impact architecture and transcend.',
      ctaMain: 'Discover your leadership level',
      ctaSecondary: 'View the Method'
    },
    method: {
      tag: 'Transformation System',
      title: 'I.L.O. Method',
      desc: 'A system designed to scale your impact through three critical dimensions.',
      i: { 
        title: 'IDENTITY', 
        desc: 'Discover who you are as a leader. Hack your mindset and biology for high performance.', 
        items: ['Legacy Mindset', 'Personal Power', 'Real Authority'], 
        btn: 'View Identity' 
      },
      l: { 
        title: 'LEADERSHIP', 
        desc: 'Learn to lead people and teams. Inspire, attract, and retain the best talent.', 
        items: ['Impact Culture', 'Power Storytelling', 'Team Management'], 
        btn: 'View Leadership' 
      },
      o: { 
        title: 'ORGANIZATION', 
        desc: 'Build systems that allow leadership to scale. Assets that work for you.', 
        items: ['Intelligent Systems', 'Real Scalability', 'Operational Freedom'], 
        btn: 'View Organization' 
      }
    },
    diagnostic: {
      tag: 'Leadership Test',
      title: 'Potential Diagnostic',
      desc: 'Discover your identity, skills, and current leadership potential.',
      placeholder: 'Describe your current situation...',
      btn: 'START TEST NOW',
      loading: 'Analyzing your profile...',
      loadingSub: 'Mapping legacy potential',
      resultTag: 'Leadership Level:',
      strengths: 'Strengths',
      weaknesses: 'Growth Areas',
      roadmap: 'Action Plan',
      cta: 'VIEW PROGRAMS',
      retry: 'RETRY TEST'
    },
    ecosystem: {
      tag: 'Growth Levels',
      title: 'Legacy Ecosystem',
      level1: {
        tag: 'Level 1',
        title: 'Conscious Awakening',
        desc: 'Free leadership test to identify your starting point.'
      },
      level2: {
        tag: 'Level 2',
        title: 'Transformation',
        desc: 'Legacy Academy. The ultimate program to install the I.L.O. system.'
      },
      level3: {
        tag: 'Level 3',
        title: 'Excellence',
        desc: 'I.L.O. Consulting. Strategic support for massive impact.'
      }
    },
    ctaFinal: {
      title: 'Leadership is not a destination. It is a decision.',
      btn: 'Take the test now'
    }
  },
  fr: {
    nav: {
      manifesto: 'Philosophie',
      method: 'Méthode I.L.O.',
      ecosystem: 'Écosystème',
      legacy: 'Héritage',
      cta: 'Faire le Test'
    },
    hero: {
      tag: 'Indy Legacy Leadership',
      title: 'Les leaders ne naissent pas. Ils se construisent.',
      subtitle: 'Le véritable leadership consiste à former des équipes et à aider les autres à grandir. Concevez votre architecture d’impact.',
      ctaMain: 'Découvrez votre niveau de leadership',
      ctaSecondary: 'Voir la Méthode'
    },
    method: {
      tag: 'Système de Transformation',
      title: 'Méthode I.L.O.',
      desc: 'Un système conçu pour amplifier votre impact à travers trois dimensions critiques.',
      i: { 
        title: 'IDENTITÉ', 
        desc: 'Découvrez qui vous êtes en tant que leader. Piratez votre état d’esprit et votre biologie.', 
        items: ['Mentalité d’Héritage', 'Pouvoir Personnel', 'Autorité Réelle'], 
        btn: 'Voir Identité' 
      },
      l: { 
        title: 'LEADERSHIP', 
        desc: 'Apprenez à diriger des personnes et des équipes. Inspirez y attirez le meilleur talent.', 
        items: ['Culture d’Impact', 'Storytelling de Pouvoir', 'Gestion d’Équipe'], 
        btn: 'Voir Leadership' 
      },
      o: { 
        title: 'ORGANISATION', 
        desc: 'Construisez des systèmes qui permettent de passer à l’échelle. Des actifs qui travaillent pour vous.', 
        items: ['Systèmes Intelligents', 'Scalabilité Réelle', 'Liberté Opérationnelle'], 
        btn: 'Voir Organisation' 
      }
    },
    diagnostic: {
      tag: 'Test de Leadership',
      title: 'Diagnostic de Potentiel',
      desc: 'Découvrez votre identité, vos compétences et votre potentiel de leadership actuel.',
      placeholder: 'Décrivez votre situation actuelle...',
      btn: 'LANCER LE TEST MAINTENANT',
      loading: 'Analyse de votre profil...',
      loadingSub: 'Cartographie du potentiel d’héritage',
      resultTag: 'Niveau de Leadership :',
      strengths: 'Forces',
      weaknesses: 'Zones de Croissance',
      roadmap: 'Plan d’Action',
      cta: 'VOIR LES PROGRAMMES',
      retry: 'RÉPÉTER LE TEST'
    },
    ecosystem: {
      tag: 'Niveaux de Croissance',
      title: 'Écosystème Legacy',
      level1: {
        tag: 'Niveau 1',
        title: 'Éveil Conscient',
        desc: 'Test de leadership gratuit pour identifier votre point de départ.'
      },
      level2: {
        tag: 'Niveau 2',
        title: 'Transformation',
        desc: 'Legacy Academy. Le programme ultime pour installer le système I.L.O.'
      },
      level3: {
        tag: 'Niveau 3',
        title: 'Excellence',
        desc: 'Consultance I.L.O. Accompagnement stratégique pour un impact massif.'
      }
    },
    ctaFinal: {
      title: 'Le leadership n’est pas une destination. C’est une décision.',
      btn: 'Faites le test maintenant'
    }
  }
};

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('indy_lang');
    return saved || 'es';
  });

  useEffect(() => {
    localStorage.setItem('indy_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (path) => {
    return path.split('.').reduce((obj, key) => obj?.[key], translations[language]) || path;
  };

  return React.createElement(LanguageContext.Provider, { value: { language, setLanguage, t } }, children);
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
