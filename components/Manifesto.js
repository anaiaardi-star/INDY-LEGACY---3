
import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { Target, Users, TrendingUp, Award, Crown, Sparkles, Rocket, Fingerprint } from 'lucide-react';

const Manifesto = () => {
  const { t } = useLanguage();

  const features = [
    { icon: TrendingUp, title: 'Crecer', desc: 'Expande tu potencial personal y profesional sin límites.' },
    { icon: Target, title: 'Liderar', desc: 'Domina las habilidades para guiar con propósito y claridad.' },
    { icon: Users, title: 'Construir Equipos', desc: 'Atrae y desarrolla el talento que tu visión merece.' },
    { icon: Award, title: 'Crear un Legado', desc: 'Construye algo que trascienda y genere impacto real.' }
  ];

  return React.createElement("section", { id: "filosofia", className: "py-32 px-6 bg-legacy-bgLight/30" },
    React.createElement("div", { className: "max-w-7xl mx-auto" },
      React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32" },
        React.createElement("div", null,
          React.createElement("h2", { className: "font-jakarta text-legacy-dark mb-8" }, "Descubre el líder que hay en ti"),
          React.createElement("p", { className: "text-lg text-legacy-dark/70 mb-10 leading-relaxed" }, 
            "El liderazgo no es un título, es una arquitectura mental. Muchos líderes creen que su problema es la falta de tiempo, pero en realidad es un sistema operativo obsoleto. Es hora de descubrir qué te falta para alcanzar tu máximo potencial."
          ),
          React.createElement("a", { href: "#diagnostico", className: "inline-flex items-center gap-3 text-legacy-primary font-bold hover:gap-5 transition-all" }, 
            "Realizar el test de liderazgo", React.createElement("span", null, "→")
          )
        ),
        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          [
            { icon: Crown, color: 'text-legacy-primary' },
            { icon: Sparkles, color: 'text-legacy-accent' },
            { icon: Rocket, color: 'text-legacy-primaryDark' },
            { icon: Fingerprint, color: 'text-legacy-primary' }
          ].map((item, i) => 
            React.createElement("div", { key: i, className: `aspect-square rounded-card bg-white shadow-soft flex items-center justify-center ${i % 2 !== 0 ? 'mt-12' : ''}` },
              React.createElement("div", { className: "w-24 h-24 rounded-full bg-legacy-primary/5 flex items-center justify-center relative group overflow-hidden" },
                React.createElement("div", { className: "absolute inset-0 bg-legacy-primary/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" }),
                React.createElement(item.icon, { className: `w-10 h-10 ${item.color} relative z-10` })
              )
            )
          )
        )
      ),

      React.createElement("div", { className: "text-center mb-20" },
        React.createElement("h2", { className: "font-jakarta text-legacy-dark mb-6" }, "Para quién es este proceso"),
        React.createElement("p", { className: "text-lg text-legacy-dark/60 max-w-2xl mx-auto" }, "Diseñado para visionarios que no se conforman con el éxito promedio y buscan trascender.")
      ),

      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" },
        features.map((f, i) => 
          React.createElement("div", { key: i, className: "bg-white p-10 rounded-card shadow-soft hover:-translate-y-2 transition-all duration-300 border border-legacy-dark/5" },
            React.createElement(f.icon, { className: "w-12 h-12 text-legacy-primary mb-8" }),
            React.createElement("h3", { className: "font-jakarta text-legacy-dark mb-4" }, f.title),
            React.createElement("p", { className: "text-legacy-dark/60 text-sm leading-relaxed" }, f.desc)
          )
        )
      )
    )
  );
};

export default Manifesto;
