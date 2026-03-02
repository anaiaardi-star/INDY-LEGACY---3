
import React from 'react';

const Footer = () => {
  return React.createElement("footer", { className: "bg-white py-20 px-6 border-t border-legacy-dark/5" },
    React.createElement("div", { className: "max-w-7xl mx-auto" },
      React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-start gap-12" },
        React.createElement("div", { className: "max-w-sm" },
          React.createElement("a", { href: "#", className: "font-jakarta text-2xl font-bold tracking-tight text-legacy-dark flex items-center" },
            "Indy", React.createElement("span", { className: "text-legacy-primary ml-1" }, "Legacy")
          ),
          React.createElement("p", { className: "text-sm text-legacy-dark/50 mt-6" }, "Ecosistema de formación para líderes que desean construir equipos, transformar su vida y crear un legado.")
        ),
        React.createElement("div", { className: "text-[10px] text-legacy-dark/30 font-bold tracking-widest uppercase" },
          "© 2026 INDY LEGACY LEADERSHIP. ALL RIGHTS RESERVED."
        )
      )
    )
  );
};

export default Footer;
