
import React from 'react';
import { useLanguage } from './context/LanguageContext.js';
import { Lightbulb, Zap, Trophy, ShieldCheck, Users2, Rocket } from 'lucide-react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Manifesto from './components/Manifesto.js';
import DiagnosticTool from './components/DiagnosticTool.js';
import Methodology from './components/Methodology.js';
import Testimonials from './components/Testimonials.js';
import Footer from './components/Footer.js';

const App = () => {
  const { t } = useLanguage();

  return (
    React.createElement("div", { className: "min-h-screen selection:bg-legacy-accent selection:text-legacy-dark" },
      React.createElement(Navbar, null),
      React.createElement("main", null,
        React.createElement(Hero, null),
        React.createElement(Manifesto, null),
        React.createElement(Methodology, null),
        React.createElement(Testimonials, null),
        React.createElement(DiagnosticTool, null),
        React.createElement("section", { id: "ecosistema", className: "py-32 px-6 bg-legacy-bgLight/20 relative" },
          React.createElement("div", { className: "max-w-7xl mx-auto" },
            React.createElement("div", { className: "text-center mb-20" },
              React.createElement("p", { className: "text-legacy-primary text-[12px] font-bold tracking-widest uppercase mb-4" }, t('ecosystem.tag')),
              React.createElement("h2", { className: "font-jakarta text-legacy-dark mb-6" }, t('ecosystem.title')),
              React.createElement("p", { className: "text-lg text-legacy-dark/60 max-w-2xl mx-auto" }, "Diferentes niveles de profundidad para tu transformación.")
            ),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8" },
              React.createElement("div", { className: "bg-white p-10 rounded-card shadow-soft border border-legacy-dark/5 flex flex-col justify-between group hover:border-legacy-primary/20 transition-all" },
                React.createElement("div", null,
                  React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-legacy-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform" },
                    React.createElement(Lightbulb, { className: "w-7 h-7 text-legacy-primary" })
                  ),
                  React.createElement("p", { className: "text-[12px] font-bold text-legacy-primary uppercase mb-6" }, t('ecosystem.level1.tag')),
                  React.createElement("h3", { className: "font-jakarta text-legacy-dark mb-6" }, t('ecosystem.level1.title')),
                  React.createElement("p", { className: "text-legacy-dark/60 leading-relaxed mb-10" }, t('ecosystem.level1.desc'))
                ),
                React.createElement("a", { href: "#diagnostico", className: "text-legacy-primary font-bold text-[12px] tracking-wide hover:gap-4 transition-all flex items-center gap-2" }, "COMENZAR TEST →")
              ),
              React.createElement("div", { className: "bg-gradient-legacy p-10 rounded-card shadow-soft text-white flex flex-col justify-between transform lg:-translate-y-4 group" },
                React.createElement("div", null,
                  React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform" },
                    React.createElement(Zap, { className: "w-7 h-7 text-legacy-accent" })
                  ),
                  React.createElement("p", { className: "text-[12px] font-bold text-legacy-accent uppercase mb-6" }, t('ecosystem.level2.tag')),
                  React.createElement("h3", { className: "font-jakarta mb-6" }, t('ecosystem.level2.title')),
                  React.createElement("p", { className: "text-white/80 leading-relaxed mb-10" }, t('ecosystem.level2.desc'))
                ),
                React.createElement("a", { href: "#", className: "bg-legacy-accent text-legacy-dark py-4 text-center rounded-pill font-bold text-[12px] hover:bg-white transition-all" }, "APLICAR AHORA")
              ),
              React.createElement("div", { className: "bg-white p-10 rounded-card shadow-soft border border-legacy-dark/5 flex flex-col justify-between group hover:border-legacy-primary/20 transition-all" },
                React.createElement("div", null,
                  React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-legacy-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform" },
                    React.createElement(Trophy, { className: "w-7 h-7 text-legacy-primaryDark" })
                  ),
                  React.createElement("p", { className: "text-[12px] font-bold text-legacy-primaryDark uppercase mb-6" }, t('ecosystem.level3.tag')),
                  React.createElement("h3", { className: "font-jakarta text-legacy-dark mb-6" }, t('ecosystem.level3.title')),
                  React.createElement("p", { className: "text-legacy-dark/60 leading-relaxed mb-10" }, t('ecosystem.level3.desc'))
                ),
                React.createElement("a", { href: "#", className: "text-legacy-primary font-bold text-[12px] tracking-wide hover:gap-4 transition-all flex items-center gap-2" }, "SOLICITAR INFO →")
              )
            )
          )
        ),
        React.createElement("section", { className: "py-32 px-6 bg-legacy-dark text-white text-center relative overflow-hidden" },
          React.createElement("div", { className: "blob blob-blue w-[500px] h-[500px] -top-40 -left-40 rounded-full opacity-20" }),
          React.createElement("div", { className: "max-w-4xl mx-auto relative z-10" },
            React.createElement("h2", { className: "font-jakarta mb-10" }, t('ctaFinal.title')),
            React.createElement("a", { href: "#diagnostico", className: "inline-block bg-legacy-accent text-legacy-dark px-12 py-6 rounded-pill font-bold text-[16px] tracking-wide hover:bg-white transition-all shadow-soft" }, 
              t('ctaFinal.btn')
            )
          )
        )
      ),
      React.createElement(Footer, null)
    )
  );
};

export default App;
