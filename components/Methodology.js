
import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { Fingerprint, Users2, Rocket } from 'lucide-react';

const Methodology = () => {
  const { t } = useLanguage();

  const Pillar = (id, color, title, desc, items, btn, Icon) => React.createElement("div", { className: "group relative flex flex-col h-full" },
    React.createElement("div", { className: "relative flex-1 bg-white p-10 rounded-card hover:-translate-y-2 transition-all duration-500 border border-legacy-dark/5 shadow-soft flex flex-col justify-between" },
      React.createElement("div", null,
        React.createElement("div", { className: "flex justify-between items-start mb-8" },
          React.createElement("div", { className: `w-16 h-16 ${color} rounded-2xl flex items-center justify-center shadow-sm text-white font-jakarta font-bold text-2xl` },
            id
          ),
          React.createElement(Icon, { className: "w-8 h-8 text-legacy-dark/20 group-hover:text-legacy-primary transition-colors duration-500" })
        ),
        React.createElement("h3", { className: "font-jakarta text-legacy-dark mb-6" }, title),
        React.createElement("p", { className: "text-legacy-dark/70 leading-relaxed mb-8" }, desc),
        React.createElement("div", { className: "space-y-4 mb-10" },
          items.map((item, i) => React.createElement("div", { key: i, className: "flex items-center gap-3 text-[12px] font-semibold text-legacy-dark/60" },
            React.createElement("div", { className: "w-1.5 h-1.5 rounded-full bg-legacy-primary" }),
            item
          ))
        )
      ),
      React.createElement("a", { href: "#diagnostico", className: "w-full py-4 px-6 bg-legacy-primary/5 text-legacy-primary text-[12px] font-bold tracking-wide text-center rounded-pill hover:bg-legacy-primary hover:text-white transition-all uppercase" },
        btn
      )
    )
  );

  return React.createElement("section", { id: "metodo", className: "py-32 px-6 bg-white relative overflow-hidden" },
    React.createElement("div", { className: "blob blob-blue w-[400px] h-[400px] -top-20 -right-20 rounded-full opacity-10" }),
    React.createElement("div", { className: "max-w-7xl mx-auto relative z-10" },
      React.createElement("div", { className: "mb-20 text-center max-w-3xl mx-auto" },
        React.createElement("p", { className: "text-legacy-primary text-[12px] font-bold tracking-widest uppercase mb-4" }, t('method.tag')),
        React.createElement("h2", { className: "font-jakarta text-legacy-dark mb-6" }, t('method.title')),
        React.createElement("p", { className: "text-lg text-legacy-dark/60" }, t('method.desc'))
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12" },
        Pillar('I', 'bg-legacy-primary', t('method.i.title'), t('method.i.desc'), t('method.i.items'), t('method.i.btn'), Fingerprint),
        Pillar('L', 'bg-legacy-primaryDark', t('method.l.title'), t('method.l.desc'), t('method.l.items'), t('method.l.btn'), Users2),
        Pillar('O', 'bg-legacy-accent', t('method.o.title'), t('method.o.desc'), t('method.o.items'), t('method.o.btn'), Rocket)
      )
    )
  );
};

export default Methodology;
