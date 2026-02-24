
import React from 'react';

const Footer = () => {
  return React.createElement("footer", { className: "bg-editorial-base py-20 px-6 border-t border-editorial-primary/10" },
    React.createElement("div", { className: "max-w-7xl mx-auto" },
      React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-start gap-12" },
        React.createElement("div", { className: "max-w-sm" },
          React.createElement("span", { className: "font-serif text-3xl font-bold text-editorial-primary italic" }, "Indy Marchena"),
          React.createElement("p", { className: "text-xs text-editorial-text/50 mt-6" }, "Arquitectura de Liderazgo Consciente.")
        ),
        React.createElement("div", { className: "text-[9px] text-editorial-text/30 font-bold tracking-[0.3em] uppercase" },
          "© 2026 INDY LEGACY ARCHITECTURE. ALL RIGHTS RESERVED."
        )
      )
    )
  );
};

export default Footer;
