
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop" 
              alt="Ciencia de Alto Rendimiento" 
              className="grayscale w-full h-auto shadow-2xl brightness-90"
            />
            <div className="absolute -bottom-10 -right-10 bg-editorial-primary text-white p-10 max-w-xs shadow-3xl">
              <p className="font-serif italic text-2xl mb-4 leading-tight"></p>
              <div className="w-12 h-px bg-editorial-soft/40 mb-4"></div>
              <p className="text-[9px] font-bold tracking-[0.25em] uppercase leading-relaxed">
                Tecnología de Carnosina Tópica para líderes de alta demanda.
              </p>
            </div>
          </div>
          {/* Decorative frame */}
          <div className="absolute top-10 left-10 right-0 bottom-0 border border-editorial-primary/10 -z-0"></div>
        </div>

        <div className="lg:w-1/2 lg:pl-10">
          <p className="text-editorial-action text-[10px] font-bold tracking-[0.3em] uppercase mb-6">El Vehículo Operativo de Élite</p>
          <h2 className="font-serif text-5xl md:text-6xl text-editorial-primary leading-tight mb-10">Ciencia aplicada <br/><span className="italic text-editorial-text font-normal">al Patrimonio.</span></h2>
          
          <div className="space-y-8 text-editorial-text/70 leading-relaxed font-light text-lg">
            <p>
              No vendo productos por catálogo. Me asocio con la excelencia científica. Elegí <strong className="font-bold text-editorial-primary">Lactigo</strong> como nuestro socio tecnológico estratégico.
            </p>
            <p>
              En el mundo del legado, el dinero ama la velocidad, pero el cuerpo exige una recuperación implacable. Es la herramienta que usamos en la comunidad <strong className="text-editorial-mauve">Legacy</strong> para asegurar que nuestro activo más valioso (la biología) soporte la magnitud de nuestra visión.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <a href="#" className="inline-flex items-center gap-4 text-editorial-primary font-bold text-xs tracking-widest group">
              <span className="border-b border-editorial-primary pb-1 group-hover:text-editorial-action group-hover:border-editorial-action transition-all uppercase">Ver Evidencia Científica</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-editorial-action" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
