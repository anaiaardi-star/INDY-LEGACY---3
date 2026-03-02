
import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';

const Hero = () => {
  const { t } = useLanguage();

  return React.createElement("header", { className: "relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden" },
    /* Parallax Background */
    React.createElement("div", { 
      className: "absolute inset-0 z-0",
      style: {
        backgroundImage: 'url("https://assets.cdn.filesafe.space/TOney01VGtUlQqbrLw6T/media/699383c8097809425260bae3.jpeg")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'blur(4px)',
        transform: 'scale(1.05)'
      }
    }),
    /* Overlay for readability */
    React.createElement("div", { className: "absolute inset-0 bg-white/80 z-1" }),
    
    /* Decorative Blobs */
    React.createElement("div", { className: "blob blob-blue w-[600px] h-[600px] -top-48 -left-48 rounded-full z-2 opacity-30" }),
    React.createElement("div", { className: "blob blob-green w-[400px] h-[400px] bottom-0 -right-20 rounded-full opacity-10 z-2" }),
    
    React.createElement("div", { className: "max-w-7xl mx-auto px-6 w-full relative z-10" },
      React.createElement("div", { className: "max-w-3xl" },
        React.createElement("div", { className: "inline-block px-4 py-1.5 rounded-full bg-legacy-primary/10 text-legacy-primary text-[12px] font-bold tracking-wider uppercase mb-8" }, 
          t('hero.tag')
        ),
        React.createElement("h1", { className: "font-jakarta text-legacy-dark mb-8 leading-[1.1] text-5xl md:text-7xl" },
          t('hero.title')
        ),
        React.createElement("p", { className: "text-xl md:text-2xl text-legacy-dark/80 font-normal leading-relaxed mb-12" }, 
          t('hero.subtitle')
        ),
        React.createElement("div", { className: "flex flex-col sm:flex-row gap-6 items-center" },
          React.createElement("a", { 
            href: "#diagnostico", 
            className: "bg-legacy-primary text-white px-12 py-5 rounded-pill text-[15px] font-bold tracking-wide hover:bg-legacy-primaryDark transition-all shadow-soft animate-float" 
          }, t('hero.ctaMain')),
          React.createElement("a", { 
            href: "#metodo", 
            className: "px-12 py-5 rounded-pill border-2 border-legacy-primary/20 bg-white/50 backdrop-blur-sm text-legacy-primary font-bold text-[15px] tracking-wide hover:bg-white transition-all" 
          }, t('hero.ctaSecondary'))
        )
      )
    )
  );
};

export default Hero;
