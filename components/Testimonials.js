import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Carlos R.',
      role: 'CEO Tech Startup',
      text: 'Comencé sin experiencia liderando equipos. Hoy gestiono una organización de 50 personas con el sistema I.L.O.'
    },
    {
      name: 'Elena M.',
      role: 'Directora Ejecutiva',
      text: 'La transformación personal fue el primer paso. Ahora mi legado se refleja en el crecimiento de mi equipo.'
    },
    {
      name: 'Javier S.',
      role: 'Fundador de Agencia',
      text: 'El test de liderazgo me abrió los ojos. La mentoría de Indy es el activo más valioso de mi carrera.'
    }
  ];

  return React.createElement("section", { id: "testimonios", className: "py-32 px-6 bg-white relative overflow-hidden" },
    React.createElement("div", { className: "max-w-7xl mx-auto relative z-10" },
      React.createElement("div", { className: "text-center mb-20" },
        React.createElement("p", { className: "text-legacy-primary text-[12px] font-bold tracking-widest uppercase mb-4" }, "Testimonios"),
        React.createElement("h2", { className: "font-jakarta text-legacy-dark mb-6" }, "Historias de Transformación")
      ),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
        testimonials.map((t, i) => 
          React.createElement("div", { key: i, className: "bg-legacy-bgLight/20 p-10 rounded-card border border-legacy-dark/5 relative" },
            React.createElement(Quote, { className: "w-10 h-10 text-legacy-primary/20 absolute top-8 right-8" }),
            React.createElement("p", { className: "text-legacy-dark/80 italic mb-8 leading-relaxed" }, `"${t.text}"`),
            React.createElement("div", null,
              React.createElement("p", { className: "font-jakarta font-bold text-legacy-dark" }, t.name),
              React.createElement("p", { className: "text-xs text-legacy-primary font-semibold uppercase tracking-wider" }, t.role)
            )
          )
        )
      )
    )
  );
};

export default Testimonials;
