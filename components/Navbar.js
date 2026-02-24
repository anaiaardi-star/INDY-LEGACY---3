
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
    className: `fixed w-full z-50 transition-all duration-300 border-b ${
      isScrolled ? 'bg-editorial-base/90 backdrop-blur-sm py-4 border-editorial-primary/10 shadow-sm' : 'bg-transparent py-6 border-transparent'
    }`
  }, 
    React.createElement("div", { className: "max-w-7xl mx-auto px-6 flex justify-between items-center" },
      React.createElement("a", { href: "#", className: "font-serif text-2xl font-bold tracking-wide text-editorial-primary italic flex items-baseline" },
        "Indy", React.createElement("span", { className: "font-sans not-italic text-[10px] ml-2 tracking-widest text-editorial-text uppercase opacity-70" }, "Marchena")
      ),
      React.createElement("div", { className: "hidden md:flex gap-10 text-[10px] font-bold tracking-widest text-editorial-text/60 uppercase items-center" },
        React.createElement("a", { href: "#manifiesto", className: "hover:text-editorial-primary transition-colors" }, t('nav.manifesto')),
        React.createElement("a", { href: "#metodo", className: "hover:text-editorial-primary transition-colors" }, t('nav.method')),
        React.createElement("a", { href: "#diagnostico", className: "hover:text-editorial-primary transition-colors" }, t('nav.ecosystem')),
        React.createElement("div", { className: "flex gap-2 items-center ml-4 border-l border-editorial-primary/10 pl-6" },
          ['es', 'en', 'fr'].map((lang) => 
            React.createElement("button", {
              key: lang,
              onClick: () => setLanguage(lang),
              className: `w-7 h-7 rounded-full text-[8px] font-bold transition-all ${
                language === lang ? 'bg-editorial-primary text-white shadow-sm' : 'text-editorial-primary/40 hover:text-editorial-primary'
              }`
            }, lang.toUpperCase())
          )
        )
      ),
      React.createElement("a", { href: "#diagnostico", className: "bg-editorial-primary text-white px-8 py-3 text-[10px] font-bold tracking-widest hover:bg-editorial-purple transition-all duration-500 shadow-md rounded-full" },
        t('nav.cta')
      )
    )
  );
};

export default Navbar;
