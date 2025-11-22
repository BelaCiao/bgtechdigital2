import React from 'react';
import { ExternalLink, BarChart3, Zap, MousePointerClick } from 'lucide-react';

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-black/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-bgtech-blue/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                 <span className="px-3 py-1 text-xs font-bold bg-bgtech-red/20 text-bgtech-red border border-bgtech-red/30 rounded uppercase tracking-wider">Case Study</span>
                 <span className="text-gray-500 text-sm">BGTECH Eletrônica</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-white mb-6">
                Transformando Atendimento em <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bgtech-blue to-cyan-400 text-glow-blue">Receita Automática</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A BGTECH Eletrônica precisava automatizar a triagem de defeitos. Criamos um sistema de Wizard assistido por IA que pré-diagnostica o aparelho antes mesmo de chegar na loja.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Aumento de Leads', value: '+300%', icon: <BarChart3 className="w-5 h-5 text-bgtech-red" /> },
                { label: 'Tempo de Carga', value: '0.4s', icon: <Zap className="w-5 h-5 text-yellow-400" /> },
                { label: 'Taxa de Conversão', value: '12.5%', icon: <MousePointerClick className="w-5 h-5 text-bgtech-blue" /> },
              ].map((stat, idx) => (
                <div key={idx} className="p-4 glass-panel rounded-lg border-t border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">{stat.label}</span>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>

            <button className="flex items-center text-bgtech-blue hover:text-white transition-colors font-bold uppercase tracking-wider text-sm group">
              Ver Estudo Completo
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Visual Content - Mockup */}
          <div className="lg:w-1/2 w-full relative group">
            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-bgtech-blue/30 to-bgtech-red/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-full"></div>
            
            {/* Laptop Frame */}
            <div className="relative mx-auto bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
              {/* Browser Header */}
              <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 flex-1 bg-gray-800 rounded-full h-6 px-3 flex items-center">
                   <span className="text-gray-500 text-xs truncate">https://bgtecheletronica.com.br</span>
                </div>
              </div>
              
              {/* Viewport / Placeholder Image */}
              <div className="relative bg-gray-900 aspect-video w-full overflow-hidden group-hover:brightness-110 transition-all">
                 {/* Abstract Representation of the Site */}
                 <div className="absolute inset-0 flex flex-col">
                    {/* Hero of mockup */}
                    <div className="h-2/3 bg-gray-800 p-8 flex items-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                       <div className="w-1/2 space-y-3 z-10">
                          <div className="h-6 w-3/4 bg-bgtech-blue/50 rounded animate-pulse"></div>
                          <div className="h-3 w-full bg-gray-600 rounded"></div>
                          <div className="h-3 w-2/3 bg-gray-600 rounded"></div>
                          <div className="h-8 w-32 bg-white/10 rounded mt-4 border border-white/20"></div>
                       </div>
                       <div className="w-1/2 flex justify-center z-10">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-bgtech-blue to-purple-600 blur-md opacity-80"></div>
                       </div>
                    </div>
                    {/* Content of mockup */}
                    <div className="h-1/3 bg-gray-900 p-6 grid grid-cols-3 gap-4">
                       <div className="h-full bg-gray-800 rounded border border-gray-700"></div>
                       <div className="h-full bg-gray-800 rounded border border-gray-700"></div>
                       <div className="h-full bg-gray-800 rounded border border-gray-700"></div>
                    </div>
                 </div>
                 
                 {/* Floating UI Element inside Mockup */}
                 <div className="absolute bottom-4 right-4 w-48 bg-gray-800/90 backdrop-blur p-3 rounded-lg border border-bgtech-blue/50 shadow-lg shadow-bgtech-blue/20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                       <span className="text-[10px] text-gray-300 font-mono">AI Assistant Active</span>
                    </div>
                    <div className="space-y-1">
                       <div className="h-1.5 w-full bg-gray-600 rounded-full"></div>
                       <div className="h-1.5 w-2/3 bg-gray-600 rounded-full"></div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Reflection/Base */}
            <div className="absolute -bottom-6 left-4 right-4 h-4 bg-black blur-xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;