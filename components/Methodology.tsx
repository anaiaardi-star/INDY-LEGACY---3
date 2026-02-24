
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Methodology: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="metodo" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="10" cy="10" r="30" fill="currentColor" className="text-editorial-soft" />
          <circle cx="90" cy="90" r="40" fill="currentColor" className="text-editorial-purple" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-editorial-purple"></div>
            <p className="text-editorial-purple text-[11px] font-bold tracking-[0.4em] uppercase">{t('method.tag')}</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-editorial-primary leading-[1.1] mb-6">
            {t('method.title').split(' ').slice(0,-2).join(' ')} <br/>
            <span className="italic text-editorial-action font-normal">{t('method.title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-lg md:text-xl text-editorial-text/60 max-w-2xl font-normal leading-relaxed">
            {t('method.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Pillar I */}
          <div className="group relative flex flex-col h-full">
            <div className="absolute inset-0 bg-editorial-soft/10 rounded-[2.5rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative flex-1 bg-editorial-base p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform duration-500 border border-editorial-soft/10 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:bg-editorial-soft group-hover:text-white transition-all">
                  <span className="font-serif text-3xl italic">I</span>
                </div>
                <h3 className="text-2xl font-bold text-editorial-primary mb-6">{t('method.i.title')}</h3>
                <p className="text-base text-editorial-text/70 leading-relaxed font-normal mb-8">{t('method.i.desc')}</p>
                <div className="space-y-3 mb-10">
                  {(t('method.i.items') as string[]).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-editorial-purple uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-editorial-soft"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <a href="#diagnostico" className="w-full py-4 px-6 bg-white text-editorial-soft text-[9px] font-bold tracking-widest text-center rounded-full border border-editorial-soft/20 hover:bg-editorial-soft hover:text-white transition-all uppercase">
                {t('method.i.btn')}
              </a>
            </div>
          </div>

          {/* Pillar L */}
          <div className="group relative flex flex-col h-full md:translate-y-8">
            <div className="absolute inset-0 bg-editorial-purple/10 rounded-[2.5rem] rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative flex-1 bg-editorial-base p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform duration-500 border border-editorial-purple/10 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:bg-editorial-purple group-hover:text-white transition-all">
                  <span className="font-serif text-3xl italic">L</span>
                </div>
                <h3 className="text-2xl font-bold text-editorial-primary mb-6">{t('method.l.title')}</h3>
                <p className="text-base text-editorial-text/70 leading-relaxed font-normal mb-8">{t('method.l.desc')}</p>
                <div className="space-y-3 mb-10">
                  {(t('method.l.items') as string[]).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-editorial-purple uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-editorial-purple"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <a href="#diagnostico" className="w-full py-4 px-6 bg-white text-editorial-purple text-[9px] font-bold tracking-widest text-center rounded-full border border-editorial-purple/20 hover:bg-editorial-purple hover:text-white transition-all uppercase">
                {t('method.l.btn')}
              </a>
            </div>
          </div>

          {/* Pillar O */}
          <div className="group relative flex flex-col h-full">
            <div className="absolute inset-0 bg-editorial-action/10 rounded-[2.5rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative flex-1 bg-editorial-base p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform duration-500 border border-editorial-action/10 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:bg-editorial-action group-hover:text-white transition-all">
                  <span className="font-serif text-3xl italic">O</span>
                </div>
                <h3 className="text-2xl font-bold text-editorial-primary mb-6">{t('method.o.title')}</h3>
                <p className="text-base text-editorial-text/70 leading-relaxed font-normal mb-8">{t('method.o.desc')}</p>
                <div className="space-y-3 mb-10">
                  {(t('method.o.items') as string[]).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-editorial-purple uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-editorial-action"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <a href="#diagnostico" className="w-full py-4 px-6 bg-white text-editorial-action text-[9px] font-bold tracking-widest text-center rounded-full border border-editorial-action/20 hover:bg-editorial-action hover:text-white transition-all uppercase">
                {t('method.o.btn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
