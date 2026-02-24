
import React from 'react';
import { Instagram, Linkedin, ArrowUpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-editorial-base py-20 px-6 border-t border-editorial-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-sm">
            <a href="#" className="font-serif text-3xl font-bold tracking-wide text-editorial-primary italic block mb-6">
              Indy<span className="font-sans not-italic text-xs ml-2 tracking-widest text-editorial-text uppercase opacity-60">Marchena</span>
            </a>
            <p className="text-xs text-editorial-text/50 leading-relaxed font-light tracking-wide">
              Arquitectura de Liderazgo Consciente. Diseñando la evolución de líderes visionarios hacia un impacto global y un legado trascendente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-editorial-primary">Navegación</h4>
              <ul className="text-xs text-editorial-text/60 space-y-2 font-light">
                <li><a href="#manifiesto" className="hover:text-editorial-primary transition-colors">Manifiesto</a></li>
                <li><a href="#metodo" className="hover:text-editorial-primary transition-colors">Método I.L.O.</a></li>
                <li><a href="#ecosistema" className="hover:text-editorial-primary transition-colors">Ecosistema</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-editorial-primary">Programas</h4>
              <ul className="text-xs text-editorial-text/60 space-y-2 font-light">
                <li><a href="#" className="hover:text-editorial-primary transition-colors">Legacy Academy</a></li>
                <li><a href="#" className="hover:text-editorial-primary transition-colors">Consultoría ILO</a></li>
                <li><a href="#diagnostico" className="hover:text-editorial-primary transition-colors">Diagnóstico IA</a></li>
              </ul>
            </div>
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-editorial-primary">Conecta</h4>
              <div className="flex gap-6">
                <a href="#" className="text-editorial-text/40 hover:text-editorial-primary transition-all hover:-translate-y-1"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-editorial-text/40 hover:text-editorial-primary transition-all hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-editorial-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] text-editorial-text/30 font-bold tracking-[0.3em] uppercase">
            © 2026 INDY LEGACY ARCHITECTURE. ALL RIGHTS RESERVED.
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] uppercase text-editorial-text/40 hover:text-editorial-primary transition-all"
          >
            Volver arriba <ArrowUpCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
