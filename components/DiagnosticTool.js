
import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';

const DiagnosticTool = () => {
  const { t } = useLanguage();

  return React.createElement("section", { id: "diagnostico", className: "py-32 px-6 bg-editorial-base relative overflow-hidden" },
    React.createElement("div", { className: "max-w-4xl mx-auto relative z-10" },
      React.createElement("div", { className: "text-center mb-20" },
        React.createElement("p", { className: "text-editorial-action text-[11px] font-bold tracking-[0.4em] uppercase" }, t('diagnostic.tag')),
        React.createElement("h2", { className: "font-serif text-5xl text-editorial-primary mb-8" }, t('diagnostic.title'))
      ),
      React.createElement("div", { className: "bg-white p-4 md:p-8 rounded-[4rem] shadow-2xl border border-editorial-primary/5 min-h-[650px] overflow-hidden" },
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
