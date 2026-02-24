
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const DiagnosticTool: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="diagnostico" className="py-32 px-6 bg-editorial-base relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-editorial-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-editorial-action text-[11px] font-bold tracking-[0.4em] uppercase mb-4">{t('diagnostic.tag')}</p>
          <h2 className="font-serif text-5xl md:text-6xl text-editorial-primary mb-8">{t('diagnostic.title')}</h2>
          <p className="text-editorial-text/70 font-normal text-lg max-w-2xl mx-auto leading-relaxed">
            {t('diagnostic.desc')}
          </p>
        </div>

        <div className="bg-white p-4 md:p-8 rounded-[4rem] shadow-2xl shadow-editorial-primary/10 border border-editorial-primary/5 relative overflow-hidden min-h-[650px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/MFZGB0fdU6k1sSfnVJLU"
            style={{ width: '100%', height: '618px', border: 'none', borderRadius: '3px' }}
            id="inline-MFZGB0fdU6k1sSfnVJLU" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Formulario Testing Nivel 1: Consciencia -El Diagnóstico"
            data-height="618"
            data-layout-iframe-id="inline-MFZGB0fdU6k1sSfnVJLU"
            data-form-id="MFZGB0fdU6k1sSfnVJLU"
            title="Formulario Testing Nivel 1: Consciencia -El Diagnóstico"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticTool;
