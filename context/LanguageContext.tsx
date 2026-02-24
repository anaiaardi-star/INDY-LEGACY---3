
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations: Record<Language, any> = {
  es: {
    nav: {
      manifesto: 'Manifiesto',
      method: 'Ruta de Aprendizaje I.L.O..',
      ecosystem: 'Test de liderazgo',
      legacy: 'Legado',
      cta: 'INICIAR EL VIAJE'
    },
    hero: {
      tag: 'Arquitectura de Liderazgo Consciente',
      title: '¿Vas a pasar tu vida siendo liderado o en un líder con propia?',
      subtitle: 'La mayoría de los líderes no saben que son líderes natos, realiza mi diagnóstico.',
      bullets: [
        'Diagnostica tu riesgo real de Burnout biológico y mental.',
        'Evalúa si tu Marca Personal genera autoridad o lástima.',
        'Descubre si tienes un Ecosistema Rentable o un Autoempleo glorificado.'
      ],
      ctaMain: 'INICIAR DIAGNÓSTICO ESTRATÉGICO',
      ctaSecondary: 'DESCUBRE EL MÉTODO',
      pillars: 'Ejes Estratégicos:',
      identity: 'Identidad',
      leadership: 'Liderazgo',
      operation: 'Operación'
    },
    method: {
      tag: 'Metodología I.L.O.',
      title: 'La Triada del Liderazgo de Legado.',
      desc: 'Un sistema operativo diseñado para la evolución del líder moderno, integrando biología, influencia y activos estratégicos.',
      i: {
        title: 'IDENTIDAD',
        desc: 'Aprende a hackear tu propia biología. Desarrollamos la mentalidad resiliente necesaria.',
        items: ['Maestría Biológica', 'Poder Personal', 'Identidad de Autoridad'],
        btn: 'Ver Identidad'
      },
      l: {
        title: 'LIDERAZGO',
        desc: 'Aprende a inspirar, no a mandar. Construimos la capacidad de atraer talento A+.',
        items: ['Cultura de Alto Impacto', 'Storytelling Influyente', 'Liderazgo Situacional'],
        btn: 'Ver Liderazgo'
      },
      o: {
        title: 'OPERACIÓN',
        desc: 'Aprende la arquitectura de activos. Implementamos los sistemas y la tecnología.',
        items: ['Sistemas Inteligentes', 'Ingresos Residuales', 'Operativa Optimizada'],
        btn: 'Ver Operación'
      }
    },
    diagnostic: {
      tag: 'Análisis Biométrico e Identidad',
      title: 'Diagnóstico de Legado',
      desc: 'Nuestra IA analiza tu frecuencia actual de liderazgo para identificar si estás operando desde la escasez o construyendo un legado.',
      placeholder: 'Describe tu desafío actual...',
      btn: 'INICIAR ANÁLISIS ESTRATÉGICO',
      loading: 'Sintonizando tu frecuencia...',
      loadingSub: 'Mapeando metodología I.L.O.',
      resultTag: 'Arquetipo Revelado:',
      strengths: 'Activos de Liderazgo',
      weaknesses: 'Bloqueos de Legado',
      roadmap: 'Hoja de Ruta Inmediata',
      cta: 'SOLICITAR MENTORÍA',
      retry: 'REPETIR ANÁLISIS'
    }
  },
  en: {
    nav: {
      manifesto: 'Manifesto',
      method: 'I.L.O. Learning Route',
      ecosystem: 'Leadership Test',
      legacy: 'Legacy',
      cta: 'START JOURNEY'
    },
    hero: {
      tag: 'Conscious Leadership Architecture',
      title: 'Will you spend your life being led or become a leader with your own?',
      subtitle: 'Most leaders don\'t know they are born leaders, take my diagnostic.',
      bullets: [
        'Diagnose your real risk of biological and mental Burnout.',
        'Evaluate if your Personal Brand generates authority or pity.',
        'Discover if you have a Profitable Ecosystem or a glorified Self-employment.'
      ],
      ctaMain: 'START STRATEGIC DIAGNOSTIC',
      ctaSecondary: 'DISCOVER THE METHOD',
      pillars: 'Strategic Axes:',
      identity: 'Identity',
      leadership: 'Leadership',
      operation: 'Operation'
    },
    method: {
      tag: 'I.L.O. Methodology',
      title: 'The Legacy Leadership Triad.',
      desc: 'It\'s not just theory, it\'s the tactical implementation of the three dimensions that separate bosses from true legacy leaders.',
      i: {
        title: 'IDENTITY',
        desc: 'Learn to hack your own biology. We develop the resilient mindset needed.',
        items: ['Biological Mastery', 'Personal Power', 'Authority Identity'],
        btn: 'View Identity'
      },
      l: {
        title: 'LEADERSHIP',
        desc: 'Learn to inspire, not command. We build the ability to attract A+ talent.',
        items: ['High Impact Culture', 'Influential Storytelling', 'Situational Leadership'],
        btn: 'View Leadership'
      },
      o: {
        title: 'OPERATION',
        desc: 'Learn asset architecture. We implement the systems and technology.',
        items: ['Intelligent Systems', 'Residual Income', 'Optimized Operations'],
        btn: 'View Operation'
      }
    },
    diagnostic: {
      tag: 'Biometric & Identity Analysis',
      title: 'Legacy Diagnostic',
      desc: 'Our AI analyzes your current leadership frequency to identify if you are operating from scarcity or building a legacy.',
      placeholder: 'Describe your current challenge...',
      btn: 'START STRATEGIC ANALYSIS',
      loading: 'Tuning your frequency...',
      loadingSub: 'Mapping I.L.O. methodology',
      resultTag: 'Archetype Revealed:',
      strengths: 'Leadership Assets',
      weaknesses: 'Legacy Blockages',
      roadmap: 'Immediate Roadmap',
      cta: 'REQUEST MENTORSHIP',
      retry: 'RETRY ANALYSIS'
    }
  },
  fr: {
    nav: {
      manifesto: 'Manifeste',
      method: 'Parcours d’Apprentissage I.L.O.',
      ecosystem: 'Test de leadership',
      legacy: 'Héritage',
      cta: 'COMMENCER LE VOYAGE'
    },
    hero: {
      tag: 'Évolutivité et Évolution Personnelle',
      title: 'Allez-vous passer votre vie à être dirigé ou à devenir un leader avec sa propre ?',
      subtitle: 'La plupart des leaders ne savent pas qu\'ils sont des leaders nés, faites mon diagnostic.',
      bullets: [
        'Diagnostiquez votre risque réel de Burnout biologique et mental.',
        'Évaluez si votre marque personnelle génère de l’autorité ou de la pitié.',
        'Découvrez si vous avez un écosystème rentable ou un auto-emploi glorifié.'
      ],
      ctaMain: 'LANCER LE DIAGNOSTIC STRATÉGIQUE',
      ctaSecondary: 'DÉCOUVRIR LA MÉTHODE',
      pillars: 'Axes Stratégiques :',
      identity: 'Identité',
      leadership: 'Leadership',
      operation: 'Opération'
    },
    method: {
      tag: 'Parcours d’Apprentissage I.L.O.',
      title: 'Compétences pour un Leadership Infini.',
      desc: 'Ce n\'est pas seulement de la théorie, c\'est la mise en œuvre tactique des trois dimensions qui séparent les chefs des vrais leaders d\'héritage.',
      i: {
        title: 'IDENTITÉ',
        desc: 'Apprenez à pirater votre propre biologie. Nous développons l’état d’esprit résilient nécessaire.',
        items: ['Maîtrise Biologique', 'Pouvoir Personnel', 'Identité d’Autorité'],
        btn: 'Voir Identité'
      },
      l: {
        title: 'LEADERSHIP',
        desc: 'Apprenez à inspirer, pas à commander. Nous renforçons la capacité à attirer les talents A+.',
        items: ['Culture à Haut Impact', 'Storytelling Influent', 'Leadership Situationnel'],
        btn: 'Voir Leadership'
      },
      o: {
        title: 'OPÉRATION',
        desc: 'Apprenez l’architecture des actifs. Nous mettons en œuvre les systèmes et la tecnología.',
        items: ['Systèmes Intelligents', 'Revenus Résiduels', 'Opérations Optimisées'],
        btn: 'Voir Opération'
      }
    },
    diagnostic: {
      tag: 'Analyse Biométrique et Identité',
      title: 'Diagnostic d’Héritage',
      desc: 'Notre IA analyse votre fréquence actuelle de leadership pour identifier si vous opérez par manque ou si vous construisez un héritage.',
      placeholder: 'Décrivez votre défi actuel...',
      btn: 'LANCER L’ANALYSE STRATÉGIQUE',
      loading: 'Réglage de votre fréquence...',
      loadingSub: 'Cartographie de la méthodologie I.L.O.',
      resultTag: 'Archétype Révélé :',
      strengths: 'Actifs de Leadership',
      weaknesses: 'Blocages d’Héritage',
      roadmap: 'Feuille de Route Immédiate',
      cta: 'DEMANDER UN MENTORAT',
      retry: 'RÉPÉTER L’ANALYSE'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('indy_lang');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('indy_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (path: string) => {
    return path.split('.').reduce((obj, key) => obj?.[key], translations[language]) || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
