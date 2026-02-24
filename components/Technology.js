
import React from 'react';

const Technology = () => {
  return React.createElement("section", { className: "py-32 px-6 bg-white overflow-hidden" },
    React.createElement("div", { className: "max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20" },
      React.createElement("div", { className: "lg:w-1/2 relative" },
        React.createElement("div", { className: "relative z-10" },
          React.createElement("img", { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop", className: "grayscale w-full h-auto shadow-2xl" }),
          React.createElement("div", { className: "absolute -bottom-10 -right-10 bg-editorial-primary text-white p-10 max-w-xs" },
            React.createElement("p", { className: "text-[9px] font-bold tracking-[0.25em] uppercase" }, "Tecnología de Carnosina Tópica para líderes de alta demanda.")
          )
        )
      ),
      React.createElement("div", { className: "lg:w-1/2 lg:pl-10" },
        React.createElement("p", { className: "text-editorial-action text-[10px] font-bold tracking-[0.3em] uppercase mb-6" }, "El Vehículo Operativo de Élite"),
        React.createElement("h2", { className: "font-serif text-5xl text-editorial-primary mb-10" }, "Ciencia aplicada ", React.createElement("br"), React.createElement("span", { className: "italic text-editorial-text font-normal" }, "al Patrimonio.")),
        React.createElement("div", { className: "space-y-8 text-editorial-text/70 text-lg" },
          React.createElement("p", null, "No vendo productos por catálogo. Me asocio con la excelencia científica. Elegí ", React.createElement("strong", null, "Lactigo"), " como nuestro socio tecnológico."),
          React.createElement("p", null, "En el mundo del legado, la biología es el activo más valioso.")
        )
      )
    )
  );
};

export default Technology;
