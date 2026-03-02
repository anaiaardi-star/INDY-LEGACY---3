
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.js';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return React.createElement("nav", {
    className: `fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-soft' : 'bg-transparent py-6'
    }`
  }, 
    React.createElement("div", { className: "max-w-7xl mx-auto px-6 flex justify-between items-center" },
      React.createElement("a", { href: "#", className: "font-jakarta text-2xl font-bold tracking-tight text-legacy-dark flex items-center" },
        "Indy", React.createElement("span", { className: "text-legacy-primary ml-1" }, "Legacy")
      ),
      React.createElement("div", { className: "hidden md:flex gap-10 text-[12px] font-semibold tracking-wide text-legacy-dark/70 items-center" },
        React.createElement("a", { href: "#filosofia", className: "hover:text-legacy-primary transition-colors" }, t('nav.manifesto')),
        React.createElement("a", { href: "#metodo", className: "hover:text-legacy-primary transition-colors" }, t('nav.method')),
        React.createElement("a", { href: "#ecosistema", className: "hover:text-legacy-primary transition-colors" }, t('nav.ecosystem')),
        React.createElement("div", { className: "flex gap-2 items-center ml-4 border-l border-legacy-dark/10 pl-6" },
          ['es', 'en', 'fr'].map((lang) => 
            React.createElement("button", {
              key: lang,
              onClick: () => setLanguage(lang),
              className: `w-8 h-8 rounded-full text-[10px] font-bold transition-all ${
                language === lang ? 'bg-legacy-primary text-white shadow-soft' : 'text-legacy-dark/40 hover:text-legacy-primary'
              }`
            }, lang.toUpperCase())
          )
        )
      ),
      React.createElement("a", { href: "#diagnostico", className: "bg-legacy-accent text-legacy-dark px-8 py-3.5 text-[12px] font-bold tracking-wide hover:bg-legacy-primary hover:text-white transition-all duration-300 shadow-soft rounded-pill" },
        t('nav.cta')
      )
    )
  );
};

export default Navbar;
