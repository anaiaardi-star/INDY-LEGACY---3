
import React from 'react';
import { ShieldCheck, Zap, TrendingUp } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifiesto" className="py-32 px-6 bg-white/70">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-serif text-5xl md:text-6xl text-editorial-text mb-12 italic">
            Del esfuerzo al dominio
          </h2>
            <p className="text-editorial-text/90 leading-relaxed text-xl md:text-2xl font-normal mb-12 max-w-4xl mx-auto">
              Muchos líderes nacen, pero la mayoría se <span className="text-editorial-primary font-semibold italic">construyen</span>. 
              Si sientes que tienes un techo invisible, que tu crecimiento se ha estancado o que el precio del éxito es tu propia vida, 
              estás listo para el siguiente nivel de <span className="text-editorial-purple font-semibold underline decoration-editorial-action/30 underline-offset-8">maestría estratégica</span>.
            </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8 group p-8 rounded-[3rem] hover:bg-editorial-base/30 transition-all">
            <div className="w-16 h-16 flex items-center justify-center bg-editorial-text text-white rounded-2xl mb-4">
              <Zap className="w-8 h-8 opacity-60" />
            </div>
            <h3 className="font-serif text-3xl text-editorial-primary">El Liderazgo Intuitivo</h3>
            <p className="text-lg text-editorial-text/80 leading-relaxed font-normal">
              Avanzar por inercia, resolver incendios diarios y depender del esfuerzo físico. 
              Es el camino del operario que aún no sabe que puede ser el arquitecto de su propia libertad.
            </p>
            <div className="h-px bg-editorial-text/10 w-full group-hover:bg-editorial-purple/40 transition-colors"></div>
            <ul className="text-[11px] font-bold tracking-widest text-editorial-text/60 uppercase space-y-3">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-editorial-purple rounded-full"></span> Crecimiento Lineal</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-editorial-purple rounded-full"></span> Dependencia de la Operativa</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-editorial-purple rounded-full"></span> Agotamiento como Medalla</li>
            </ul>
          </div>

          <div className="space-y-8 group p-8 rounded-[3rem] bg-editorial-primary/5 border border-editorial-primary/10 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 flex items-center justify-center bg-editorial-primary text-white rounded-2xl mb-4 shadow-lg">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-editorial-primary">El Liderazgo de Legado</h3>
            <p className="text-lg text-editorial-text/80 leading-relaxed font-normal">
              Aprender a diseñar sistemas que multipliquen tu impacto. Gestionar tu energía biológica como un activo estratégico. 
              Es el camino de quien decide aprender a liderar desde la abundancia y la estrategia.
            </p>
            <div className="h-px bg-editorial-primary/20 w-full group-hover:bg-editorial-action/40 transition-colors"></div>
            <ul className="text-[11px] font-bold tracking-widest text-editorial-primary uppercase space-y-3">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-editorial-action rounded-full"></span> Crecimiento Exponencial</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-editorial-action rounded-full"></span> Sistemas Autónomos</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-editorial-action rounded-full"></span> Claridad Estratégica</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
