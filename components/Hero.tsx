
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-editorial-base">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6 order-1 lg:order-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-6 mb-10">
            <span className="h-px w-12 bg-editorial-action"></span>
            <p className="text-editorial-action text-[11px] font-bold tracking-[0.4em] uppercase">
              {t('hero.tag')}
            </p>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-editorial-primary leading-[1.1] mb-8 tracking-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-base md:text-lg text-editorial-text font-normal leading-relaxed max-w-xl text-balance mb-8">
            {t('hero.subtitle')}
          </p>

          <ul className="space-y-4 mb-12">
            {t('hero.bullets')?.map((bullet: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-editorial-text/80 text-sm md:text-base">
                <span className="text-editorial-action font-bold">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-14">
            <a href="#diagnostico" className="group relative inline-block">
              <span className="relative inline-block bg-editorial-primary text-white px-8 py-4 rounded-full text-[10px] font-bold tracking-widest hover:bg-editorial-purple transition-all shadow-xl hover:shadow-editorial-primary/40">
                {t('hero.ctaMain')} →
              </span>
            </a>
            <a href="#manifiesto" className="flex items-center gap-4 text-editorial-primary font-bold text-[10px] tracking-widest group">
              {t('hero.ctaSecondary')}
              <span className="w-10 h-10 rounded-full border-2 border-editorial-primary/20 flex items-center justify-center group-hover:bg-editorial-primary group-hover:text-white transition-all duration-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 order-2 lg:order-2 relative animate-fade-in-up hidden lg:block">
          <div className="relative group pl-10">
            <div className="aspect-[4/5] overflow-hidden rounded-[5rem] relative shadow-2xl transition-all duration-700 group-hover:shadow-editorial-primary/40">
              <img 
                src="https://storage.googleapis.com/msgsndr/TOney01VGtUlQqbrLw6T/media/699383c8ceaa05594a9a4908.jpeg" 
                alt="Indy Marchena" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s] object-center"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[5rem]"></div>
            </div>
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-editorial-action/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
