
import React from 'react';

const Manifesto = () => {
  return React.createElement("section", { id: "manifiesto", className: "py-32 px-6 bg-white/70" },
    React.createElement("div", { className: "max-w-5xl mx-auto" },
      React.createElement("div", { className: "text-center mb-24" },
        React.createElement("h2", { className: "font-serif text-5xl md:text-6xl text-editorial-text mb-12 italic" }, "Del esfuerzo al dominio"),
        React.createElement("p", { className: "text-xl md:text-2xl leading-relaxed" }, "Muchos líderes nacen, pero la mayoría se construyen.")
      )
    )
  );
};

export default Manifesto;
