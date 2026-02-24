
import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Manifesto from './components/Manifesto.js';
import DiagnosticTool from './components/DiagnosticTool.js';
import Methodology from './components/Methodology.js';
import Technology from './components/Technology.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    React.createElement("div", { className: "min-h-screen selection:bg-editorial-accent selection:text-white" },
      React.createElement(Navbar, null),
      React.createElement("main", null,
        React.createElement(Hero, null),
        React.createElement(Manifesto, null),
        React.createElement(Methodology, null),
        React.createElement(Technology, null),
        React.createElement(DiagnosticTool, null),
        React.createElement("section", { id: "ecosistema", className: "py-48 px-6 bg-white relative" },
          React.createElement("div", { className: "max-w-7xl mx-auto" },
            React.createElement("div", { className: "text-center mb-32 max-w-5xl mx-auto" },
              React.createElement("p", { className: "text-editorial-mauve text-[14px] font-bold tracking-[0.5em] uppercase mb-8" }, "La Invitación al Crecimiento"),
              React.createElement("h2", { className: "font-serif text-6xl md:text-8xl text-editorial-primary mb-10 italic leading-tight" }, "El Ecosistema Legacy"),
              React.createElement("p", { className: "text-editorial-text/90 font-normal text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto" },
                "No es solo una formación, es un rediseño total de tu identidad como líder. Elige tu punto de entrada."
              )
            ),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch" },
              React.createElement("div", { className: "group p-16 rounded-[4.5rem] border-2 border-editorial-primary/5 hover:border-editorial-soft/40 transition-all duration-700 bg-editorial-base/20 hover:bg-white hover:shadow-3xl flex flex-col justify-between" },
                React.createElement("div", null,
                  React.createElement("p", { className: "text-[12px] font-bold tracking-widest text-editorial-soft uppercase mb-10" }, "Nivel 1: Consciencia"),
                  React.createElement("h3", { className: "font-serif text-5xl text-editorial-primary mb-10" }, "El Diagnóstico"),
                  React.createElement("p", { className: "text-editorial-text/80 leading-relaxed mb-14 font-normal text-xl md:text-2xl" },
                    "Analizamos tu situación actual para identificar los techos invisibles que frenan tu evolución."
                  )
                ),
                React.createElement("a", { href: "#diagnostico", className: "inline-flex items-center gap-4 text-editorial-primary font-bold text-[12px] tracking-widest group-hover:gap-8 transition-all uppercase" },
                  "INICIAR ANÁLISIS ", React.createElement("span", { className: "text-3xl" }, "→")
                )
              ),
              React.createElement("div", { className: "relative group p-16 rounded-[4.5rem] bg-editorial-primary text-white shadow-[0_50px_100px_-20px_rgba(0,41,163,0.3)] hover:-translate-y-8 transition-transform duration-700 overflow-hidden flex flex-col justify-between" },
                React.createElement("div", { className: "absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-[5rem] group-hover:w-56 group-hover:h-56 transition-all duration-700" }),
                React.createElement("div", null,
                  React.createElement("p", { className: "text-[12px] font-bold tracking-widest text-editorial-action uppercase mb-10" }, "Nivel 2: Transformación"),
                  React.createElement("h3", { className: "font-serif text-6xl mb-6 italic leading-none" }, "Legacy Academy"),
                  React.createElement("p", { className: "font-serif text-white/70 mb-12 italic text-2xl" }, "Mentoría para Futuros Líderes"),
                  React.createElement("p", { className: "text-white/95 leading-relaxed mb-14 font-normal text-xl md:text-2xl" },
                    "El programa definitivo para instalar el sistema operativo I.L.O. en tu vida y en tu organización."
                  )
                ),
                React.createElement("a", { href: "#", className: "block w-full py-7 text-center bg-editorial-action text-editorial-primary rounded-full text-[13px] font-bold tracking-widest hover:bg-white transition-all shadow-xl uppercase" },
                  "APLICAR A LA ACADEMIA"
                )
              ),
              React.createElement("div", { className: "group p-16 rounded-[4.5rem] border-2 border-editorial-primary/5 hover:border-editorial-purple/40 transition-all duration-700 bg-editorial-base/20 hover:bg-white hover:shadow-3xl flex flex-col justify-between" },
                React.createElement("div", null,
                  React.createElement("p", { className: "text-[12px] font-bold tracking-widest text-editorial-purple uppercase mb-10" }, "Nivel 3: Excelencia"),
                  React.createElement("h3", { className: "font-serif text-5xl text-editorial-primary mb-10" }, "Consultoría I.L.O."),
                  React.createElement("p", { className: "text-editorial-text/80 leading-relaxed mb-14 font-normal text-xl md:text-2xl" },
                    "Acompañamiento uno a uno para construir una arquitectura de impacto masivo sin sacrificar tu libertad."
                  )
                ),
                React.createElement("a", { href: "#", className: "inline-flex items-center gap-4 text-editorial-primary font-bold text-[12px] tracking-widest group-hover:gap-8 transition-all uppercase" },
                  "SOLICITAR ENTREVISTA ", React.createElement("span", { className: "text-3xl" }, "→")
                )
              )
            )
          )
        ),
        React.createElement("section", { id: "legado", className: "py-56 px-6 bg-editorial-primary text-white relative overflow-hidden" },
          React.createElement("div", { className: "organic-blob top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-white opacity-5 animate-morph" }),
          React.createElement("div", { className: "max-w-6xl mx-auto text-center relative z-10" },
            React.createElement("div", { className: "w-40 h-40 mx-auto mb-16 rounded-[3rem] overflow-hidden border-4 border-editorial-soft shadow-3xl rotate-6 hover:rotate-0 transition-all duration-700" },
              React.createElement("img", {
                src: "https://storage.googleapis.com/msgsndr/TOney01VGtUlQqbrLw6T/media/699383c8ceaa05594a9a4908.jpeg",
                alt: "Indy Marchena",
                className: "w-full h-full object-cover object-center"
              })
            ),
            React.createElement("h2", { className: "font-serif text-5xl md:text-8xl italic mb-16 leading-[1.1] max-w-5xl mx-auto text-balance" },
              "\"El crecimiento real no es acumular, ", React.createElement("br", null), "es ", React.createElement("span", { className: "text-editorial-action" }, "aprender a soltar"), " para liderar.\""
            ),
            React.createElement("div", { className: "w-24 h-px bg-editorial-soft/50 mx-auto mb-12" }),
            React.createElement("p", { className: "text-editorial-soft text-[14px] font-bold tracking-[0.6em] uppercase mb-24 opacity-90" }, "Indy Marchena | Founder of Legacy Architecture"),
            React.createElement("a", { href: "#diagnostico", className: "group relative inline-block" },
              React.createElement("div", { className: "absolute inset-0 bg-editorial-action rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity" }),
              React.createElement("span", { className: "relative bg-editorial-action text-editorial-primary px-20 py-8 rounded-full text-[14px] font-bold tracking-[0.4em] hover:bg-white transition-all shadow-[0_30px_60px_-10px_rgba(0,181,181,0.4)] uppercase" },
                "COMIENZA TU APRENDIZAJE"
              )
            )
          )
        )
      ),
      React.createElement(Footer, null)
    )
  );
};

export default App;
