import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Monitor, Globe, MessageSquare, RefreshCcw } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const [selection, setSelection] = useState<'site' | 'agency' | null>(null);

  const handleWhatsapp = () => {
    const phoneNumber = "5553999335369";
    let text = "Olá! Gostaria de falar com um especialista da BGTECH.";
    
    if (selection === 'site') {
      text = "Olá! Gostaria de orçar um Site de Alta Performance ou Software.";
    } else if (selection === 'agency') {
      text = "Olá! Tenho interesse no Agenciamento da minha Presença Digital.";
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-bgtech-dark to-bgtech-dark z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-0"></div>
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-10 z-0 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>

      {/* Particles */}
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-bgtech-blue/30 bg-bgtech-blue/10 backdrop-blur-sm mb-6 md:mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-bgtech-blue animate-pulse mr-2"></span>
          <span className="text-bgtech-blue text-[10px] md:text-xs font-display font-bold tracking-widest uppercase">
            Next-Gen Digital Solutions
          </span>
        </div>

        {/* Headline - Adjusted for mobile alignment */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold leading-[1.1] md:leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tight">
          Tenha um site igual a esse <br />
          <span className="relative inline-block mt-1 md:mt-0">
            É uma <span className="text-white text-glow">Máquina de Vendas</span>.
            {/* Underline decoration */}
            <svg className="absolute w-full h-2 md:h-3 -bottom-1 md:-bottom-2 left-0 text-bgtech-red opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-12 px-2">
          Desenvolvimento de sites de Alta Performance, integração de <span className="text-bgtech-blue font-semibold">Agentes de IA</span> e Estratégia Digital.
        </p>

        {/* Interactive Quiz / CTA Section */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-1 rounded-2xl bg-gradient-to-b from-gray-800/50 to-black/50 border border-white/10 backdrop-blur-xl">
             <div className="bg-bgtech-dark/80 rounded-xl p-5 md:p-8 transition-all duration-500">
                
                {!selection ? (
                  <div className="animate-fade-in-up">
                    <h3 className="text-lg md:text-xl text-white font-display font-bold mb-6 flex items-center justify-center">
                      <span className="w-2 h-2 bg-bgtech-red rounded-full mr-3 animate-pulse"></span>
                      Qual seu objetivo principal hoje?
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button 
                        onClick={() => setSelection('site')}
                        className="group relative p-5 md:p-6 rounded-xl border border-white/5 hover:border-bgtech-blue/50 bg-gray-900/50 hover:bg-bgtech-blue/10 transition-all duration-300 text-left flex flex-col items-center md:items-start active:scale-[0.98]"
                      >
                        <div className="p-3 rounded-lg bg-bgtech-blue/20 text-bgtech-blue mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                          <Monitor className="w-6 h-6" />
                        </div>
                        <h4 className="text-base md:text-lg font-bold text-white mb-1">Site & Software</h4>
                        <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">Preciso de um site rápido, aplicativo ou sistema.</p>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-bgtech-blue/30 rounded-xl transition-all duration-500"></div>
                      </button>

                      <button 
                        onClick={() => setSelection('agency')}
                        className="group relative p-5 md:p-6 rounded-xl border border-white/5 hover:border-bgtech-red/50 bg-gray-900/50 hover:bg-bgtech-red/10 transition-all duration-300 text-left flex flex-col items-center md:items-start active:scale-[0.98]"
                      >
                        <div className="p-3 rounded-lg bg-bgtech-red/20 text-bgtech-red mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                          <Globe className="w-6 h-6" />
                        </div>
                        <h4 className="text-base md:text-lg font-bold text-white mb-1">Agenciamento Digital</h4>
                        <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">Quero melhorar minha presença e vendas online.</p>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-bgtech-red/30 rounded-xl transition-all duration-500"></div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="animate-fade-in-up flex flex-col items-center">
                    <div className="mb-6 text-center">
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Você selecionou:</span>
                      <div className="flex items-center justify-center space-x-2 text-lg md:text-xl font-bold text-white">
                        {selection === 'site' ? <Monitor className="w-5 h-5 text-bgtech-blue" /> : <Globe className="w-5 h-5 text-bgtech-red" />}
                        <span>{selection === 'site' ? 'Site & Software' : 'Agenciamento Digital'}</span>
                      </div>
                    </div>

                    <button 
                      onClick={handleWhatsapp}
                      className={`group relative px-8 py-4 w-full md:w-auto overflow-hidden rounded-sm ${selection === 'site' ? 'bg-bgtech-blue' : 'bg-bgtech-red'} active:scale-[0.98] transition-transform`}
                    >
                      <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                      <span className="relative flex items-center justify-center text-white font-display font-bold tracking-wider uppercase text-base md:text-lg">
                        <MessageSquare className="mr-3 w-5 h-5" />
                        Falar com Especialista
                      </span>
                    </button>

                    <button 
                      onClick={() => setSelection(null)}
                      className="mt-4 text-xs md:text-sm text-gray-500 hover:text-white flex items-center transition-colors py-2"
                    >
                      <RefreshCcw className="w-3 h-3 mr-2" /> Alterar opção
                    </button>
                  </div>
                )}
             </div>
          </div>
          
          {/* Secondary Link */}
          <div className="mt-8 flex justify-center">
             <button onClick={() => document.getElementById('showcase')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-500 hover:text-bgtech-blue transition-colors flex items-center text-xs md:text-sm font-medium uppercase tracking-widest group px-4 py-2">
                Ver Portfólio
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 opacity-50 hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-bgtech-red rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;