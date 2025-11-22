import React from 'react';
import { ExternalLink, MessageSquare, Cpu, Sparkles } from 'lucide-react';

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-black/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                 <span className="px-3 py-1 text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded uppercase tracking-wider animate-pulse">Nova Tecnologia</span>
                 <span className="text-gray-500 text-sm">Powered by GPT-5</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-white mb-6">
                Conheça a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-glow-blue">LIA IA</span>
              </h2>
              <h3 className="text-xl text-gray-300 mb-4 font-semibold">Sua Secretária Executiva de Ultra-Inteligência</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                A LIA não é apenas um chatbot. É uma inteligência baseada na arquitetura <strong>GPT-5</strong>, capaz de entender nuances emocionais, agendar reuniões complexas e fechar vendas com a empatia de um humano e a velocidade de uma máquina.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Motor Neural', value: 'GPT-5', icon: <Cpu className="w-5 h-5 text-purple-500" /> },
                { label: 'Disponibilidade', value: '24/7', icon: <MessageSquare className="w-5 h-5 text-pink-500" /> },
                { label: 'Humanidade', value: '99.8%', icon: <Sparkles className="w-5 h-5 text-yellow-400" /> },
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

            <button className="flex items-center text-purple-400 hover:text-white transition-colors font-bold uppercase tracking-wider text-sm group">
              Ver LIA em Ação
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Visual Content - Mockup LIA Interface */}
          <div className="lg:w-1/2 w-full relative group">
            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-pink-600/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-full"></div>
            
            {/* Interface Frame */}
            <div className="relative mx-auto bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
              {/* Header */}
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full"></div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold">LIA</h4>
                        <p className="text-xs text-purple-400 font-mono">Secretária IA • GPT-5 Online</p>
                    </div>
                </div>
                <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Chat Area */}
              <div className="bg-gray-900/95 p-6 space-y-4 min-h-[300px] relative">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                 
                 {/* Message 1 (LIA) */}
                 <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">L</div>
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-tl-none p-3 text-sm text-gray-200 shadow-lg max-w-[85%]">
                        <p>Olá! Sou a <strong>LIA</strong>. Analisei sua agenda e notei uma oportunidade de otimização. Gostaria que eu confirmasse os horários com seus clientes automaticamente?</p>
                    </div>
                 </div>

                 {/* Message 2 (User) */}
                 <div className="flex items-start space-x-3 flex-row-reverse space-x-reverse">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">Você</div>
                    <div className="bg-bgtech-blue/20 border border-bgtech-blue/30 rounded-2xl rounded-tr-none p-3 text-sm text-white shadow-lg max-w-[85%]">
                        <p>Sim, por favor LIA. E agende aquele lead que entrou pelo Instagram.</p>
                    </div>
                 </div>

                 {/* Message 3 (LIA Typing) */}
                 <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">L</div>
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-tl-none p-4 text-sm text-gray-200 shadow-lg flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-150"></div>
                    </div>
                 </div>
              </div>

              {/* Input Placeholder */}
              <div className="p-4 border-t border-gray-800 bg-gray-900">
                  <div className="h-10 bg-gray-800 rounded-full w-full animate-pulse opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;