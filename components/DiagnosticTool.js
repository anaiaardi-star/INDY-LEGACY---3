
import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';

const DiagnosticTool = () => {
  const { t } = useLanguage();

  return React.createElement("section", { id: "diagnostico", className: "py-32 px-6 bg-white relative overflow-hidden" },
    React.createElement("div", { className: "blob blob-green w-[500px] h-[500px] -bottom-20 -left-20 rounded-full opacity-10" }),
    React.createElement("div", { className: "max-w-4xl mx-auto relative z-10" },
      React.createElement("div", { className: "text-center mb-20" },
        React.createElement("p", { className: "text-legacy-primary text-[12px] font-bold tracking-widest uppercase mb-4" }, t('diagnostic.tag')),
        React.createElement("h2", { className: "font-jakarta text-legacy-dark mb-6" }, t('diagnostic.title')),
        React.createElement("p", { className: "text-lg text-legacy-dark/60" }, t('diagnostic.desc'))
      ),
      React.createElement("div", { className: "bg-white p-4 md:p-8 rounded-card shadow-soft border border-legacy-dark/5 min-h-[650px] overflow-hidden relative" },
        React.createElement("iframe", {
          src: "https://api.leadconnectorhq.com/widget/form/MFZGB0fdU6k1sSfnVJLU",
          style: { width: '100%', height: '618px', border: 'none', borderRadius: '3px' },
          id: "inline-MFZGB0fdU6k1sSfnVJLU",
          "data-layout": "{'id':'INLINE'}",
          "data-trigger-type": "alwaysShow",
          "data-trigger-value": "",
          "data-activation-type": "alwaysActivated",
          "data-activation-value": "",
          "data-deactivation-type": "neverDeactivate",
          "data-deactivation-value": "",
          "data-form-name": "Formulario Testing Nivel 1: Consciencia -El Diagnóstico",
          "data-height": "618",
          "data-layout-iframe-id": "inline-MFZGB0fdU6k1sSfnVJLU",
          "data-form-id": "MFZGB0fdU6k1sSfnVJLU",
          title: "Formulario Testing Nivel 1: Consciencia -El Diagnóstico"
        })
      )
    )
  );
};

export default DiagnosticTool;
