
import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';

const Methodology = () => {
  const { t } = useLanguage();

  const Pillar = (id, color, title, desc, items, btn) => React.createElement("div", { className: "group relative flex flex-col h-full" },
    React.createElement("div", { className: `absolute inset-0 bg-${color}/10 rounded-[2.5rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500` }),
    React.createElement("div", { className: "relative flex-1 bg-editorial-base p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform duration-500 border border-editorial-soft/10 shadow-lg flex flex-col justify-between" },
      React.createElement("div", null,
        React.createElement("div", { className: "w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md" },
          React.createElement("span", { className: "font-serif text-3xl italic" }, id)
        ),
        React.createElement("h3", { className: "text-2xl font-bold text-editorial-primary mb-6" }, title),
        React.createElement("p", { className: "text-base text-editorial-text/70 leading-relaxed font-normal mb-8" }, desc),
        React.createElement("div", { className: "space-y-3 mb-10" },
          items.map((item, i) => React.createElement("div", { key: i, className: "flex items-center gap-2 text-[10px] font-bold tracking-widest text-editorial-mauve uppercase" },
            React.createElement("span", { className: `w-1.5 h-1.5 rounded-full bg-${color}` }),
            item
          ))
        )
      ),
      React.createElement("a", { href: "#diagnostico", className: `w-full py-4 px-6 bg-white text-${color} text-[9px] font-bold tracking-widest text-center rounded-full border border-editorial-soft/20 hover:bg-white transition-all uppercase` },
        btn
      )
    )
  );

  return React.createElement("section", { id: "metodo", className: "py-24 px-6 bg-white relative overflow-hidden" },
    React.createElement("div", { className: "max-w-7xl mx-auto relative z-10" },
      React.createElement("div", { className: "mb-20 max-w-4xl" },
        React.createElement("p", { className: "text-editorial-purple text-[11px] font-bold tracking-[0.4em] uppercase" }, t('method.tag')),
        React.createElement("h2", { className: "font-serif text-4xl md:text-5xl lg:text-6xl text-editorial-primary leading-[1.1] mb-6" }, t('method.title')),
        React.createElement("p", { className: "text-lg text-editorial-text/60 max-w-2xl" }, t('method.desc'))
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12" },
        Pillar('I', 'editorial-soft', t('method.i.title'), t('method.i.desc'), t('method.i.items'), t('method.i.btn')),
        Pillar('L', 'editorial-purple', t('method.l.title'), t('method.l.desc'), t('method.l.items'), t('method.l.btn')),
        Pillar('O', 'editorial-action', t('method.o.title'), t('method.o.desc'), t('method.o.items'), t('method.o.btn'))
      )
    )
  );
};

export default Methodology;
