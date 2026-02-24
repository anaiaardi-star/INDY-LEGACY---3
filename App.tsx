
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import DiagnosticTool from './components/DiagnosticTool';
import Methodology from './components/Methodology';
import Technology from './components/Technology';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-editorial-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Manifesto />
        
        <Methodology />
        
        <Technology />

        <DiagnosticTool />

        {/* Ecosystem/Offers Section - Organic Layout */}
        <section id="ecosistema" className="py-48 px-6 bg-editorial-base/30 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32 max-w-5xl mx-auto">
              <p className="text-editorial-purple text-[14px] font-bold tracking-[0.5em] uppercase mb-8">La Invitación a la Trascendencia</p>
              <h2 className="font-serif text-6xl md:text-8xl text-editorial-primary mb-10 italic leading-tight">Arquitectura de Impacto</h2>
              <p className="text-editorial-text/90 font-normal text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto">
                No es solo una formación, es un rediseño total de tu identidad estratégica. Elige tu punto de entrada.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch">
              {/* Level 1 - The Diagnosis */}
              <div className="group p-16 rounded-[4.5rem] border-2 border-editorial-primary/5 hover:border-editorial-action/40 transition-all duration-700 bg-white hover:shadow-3xl flex flex-col justify-between">
                <div>
                  <p className="text-[12px] font-bold tracking-widest text-editorial-action uppercase mb-10">Nivel 1: Consciencia</p>
                  <h3 className="font-serif text-5xl text-editorial-primary mb-10">El Diagnóstico</h3>
                  <p className="text-editorial-text/80 leading-relaxed mb-14 font-normal text-xl md:text-2xl">
                    Analizamos tu frecuencia de liderazgo actual para identificar los techos invisibles que frenan tu evolución.
                  </p>
                </div>
                <a href="#diagnostico" className="inline-flex items-center gap-4 text-editorial-primary font-bold text-[12px] tracking-widest group-hover:gap-8 transition-all uppercase">
                  INICIAR ANÁLISIS <span className="text-3xl">→</span>
                </a>
              </div>

              {/* Level 2 - Academy (Featured) */}
              <div className="relative group p-16 rounded-[4.5rem] bg-editorial-primary text-white shadow-[0_50px_100px_-20px_rgba(14,58,138,0.3)] hover:-translate-y-8 transition-transform duration-700 overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-[5rem] group-hover:w-56 group-hover:h-56 transition-all duration-700"></div>
                <div>
                  <p className="text-[12px] font-bold tracking-widest text-editorial-action uppercase mb-10">Nivel 2: Transformación</p>
                  <h3 className="font-serif text-6xl mb-6 italic leading-none">Legacy Academy</h3>
                  <p className="font-serif text-white/70 mb-12 italic text-2xl">Mentoría para Líderes de Alto Impacto</p>
                  <p className="text-white/95 leading-relaxed mb-14 font-normal text-xl md:text-2xl">
                    El programa definitivo para instalar el sistema operativo I.L.O. en tu vida y en tu organización.
                  </p>
                </div>
                <a href="#" className="block w-full py-7 text-center bg-editorial-action text-white rounded-full text-[13px] font-bold tracking-widest hover:bg-white hover:text-editorial-primary transition-all shadow-xl uppercase">
                  APLICAR A LA ACADEMIA
                </a>
              </div>

              {/* Level 3 - High Ticket */}
              <div className="group p-16 rounded-[4.5rem] border-2 border-editorial-primary/5 hover:border-editorial-purple/40 transition-all duration-700 bg-white hover:shadow-3xl flex flex-col justify-between">
                <div>
                  <p className="text-[12px] font-bold tracking-widest text-editorial-purple uppercase mb-10">Nivel 3: Excelencia</p>
                  <h3 className="font-serif text-5xl text-editorial-primary mb-10">Consultoría I.L.O.</h3>
                  <p className="text-editorial-text/80 leading-relaxed mb-14 font-normal text-xl md:text-2xl">
                    Acompañamiento estratégico uno a uno para construir una arquitectura de legado sin sacrificar tu libertad.
                  </p>
                </div>
                <a href="#" className="inline-flex items-center gap-4 text-editorial-primary font-bold text-[12px] tracking-widest group-hover:gap-8 transition-all uppercase">
                  SOLICITAR ENTREVISTA <span className="text-3xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final Organic CTA */}
        <section id="legado" className="py-56 px-6 bg-editorial-primary text-white relative overflow-hidden">
           {/* Organic Detail */}
           <div className="organic-blob top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-white opacity-5 animate-morph"></div>
           
           <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="w-40 h-40 mx-auto mb-16 rounded-[3rem] overflow-hidden border-4 border-editorial-soft shadow-3xl rotate-6 hover:rotate-0 transition-all duration-700">
              <img 
                src="https://storage.googleapis.com/msgsndr/TOney01VGtUlQqbrLw6T/media/699383c8ceaa05594a9a4908.jpeg" 
                alt="Indy Marchena" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <h2 className="font-serif text-5xl md:text-8xl italic mb-16 leading-[1.1] max-w-5xl mx-auto text-balance">
              "El crecimiento real no es acumular, <br/>
              es <span className="text-editorial-action">aprender a soltar</span> para liderar."
            </h2>
            
            <div className="w-24 h-px bg-editorial-soft/50 mx-auto mb-12"></div>
            <p className="text-editorial-soft text-[14px] font-bold tracking-[0.6em] uppercase mb-24 opacity-90">Indy Marchena | Founder of Legacy Architecture</p>
            
            <a href="#diagnostico" className="group relative inline-block">
              <div className="absolute inset-0 bg-editorial-action rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <span className="relative bg-editorial-action text-editorial-primary px-20 py-8 rounded-full text-[14px] font-bold tracking-[0.4em] hover:bg-white transition-all shadow-[0_30px_60px_-10px_rgba(0,181,181,0.4)] uppercase">
                COMIENZA TU APRENDIZAJE
              </span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
