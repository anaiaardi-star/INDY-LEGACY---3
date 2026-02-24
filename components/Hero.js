
import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';

const Hero = () => {
  const { t } = useLanguage();

  return React.createElement("header", { className: "relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-editorial-base" },
    React.createElement("div", { className: "max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center" },
      React.createElement("div", { className: "lg:col-span-6 animate-fade-in-up" },
        React.createElement("div", { className: "flex items-center gap-6 mb-10" },
          React.createElement("span", { className: "h-px w-12 bg-editorial-action" }),
          React.createElement("p", { className: "text-editorial-action text-[11px] font-bold tracking-[0.4em] uppercase" }, t('hero.tag'))
        ),
        React.createElement("h1", { className: "font-serif text-4xl md:text-5xl lg:text-6xl text-editorial-primary leading-[1.1] mb-8 tracking-tight" },
          t('hero.title')
        ),
        React.createElement("p", { className: "text-base md:text-lg text-editorial-text font-normal leading-relaxed max-w-xl mb-8" }, t('hero.subtitle')),
        React.createElement("ul", { className: "space-y-4 mb-12" },
          (t('hero.bullets') || []).map((bullet, index) => 
            React.createElement("li", { key: index, className: "flex items-start gap-3 text-editorial-text/80 text-sm md:text-base" },
              React.createElement("span", { className: "text-editorial-action font-bold" }, "✓"),
              React.createElement("span", null, bullet)
            )
          )
        ),
        React.createElement("div", { className: "flex flex-col sm:flex-row gap-6 items-center" },
          React.createElement("a", { href: "#diagnostico", className: "bg-editorial-primary text-white px-8 py-4 rounded-full text-[10px] font-bold tracking-widest hover:bg-editorial-purple transition-all shadow-xl" }, t('hero.ctaMain') + " →"),
          React.createElement("a", { href: "#manifiesto", className: "flex items-center gap-4 text-editorial-primary font-bold text-[10px] tracking-widest group" },
            t('hero.ctaSecondary'),
            React.createElement("span", { className: "w-10 h-10 rounded-full border-2 border-editorial-primary/20 flex items-center justify-center" }, "→")
          )
        )
      ),
      React.createElement("div", { className: "lg:col-span-6 hidden lg:block" },
        React.createElement("div", { className: "relative pl-10" },
          React.createElement("div", { className: "aspect-[4/5] overflow-hidden rounded-[5rem] shadow-2xl" },
            React.createElement("img", { 
              src: "https://storage.googleapis.com/msgsndr/TOney01VGtUlQqbrLw6T/media/699383c8ceaa05594a9a4908.jpeg", 
              className: "w-full h-full object-cover" 
            })
          )
        )
      )
    )
  );
};

export default Hero;
