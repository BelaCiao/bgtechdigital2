import React from 'react';

const Timeline: React.FC = () => {
  const steps = [
    { id: '01', title: 'Briefing & Estratégia', desc: 'Entendemos seu negócio e definimos os objetivos de conversão.', color: 'border-gray-600' },
    { id: '02', title: 'UI/UX Design', desc: 'Prototipagem de alta fidelidade com foco na experiência do usuário.', color: 'border-gray-600' },
    { id: '03', title: 'Full-Stack Coding', desc: 'Desenvolvimento limpo usando React, Tailwind e integração de APIs.', color: 'border-bgtech-blue' },
    { id: '04', title: 'Deploy & Otimização', desc: 'Lançamento em servidores de borda (Edge) e ajustes de SEO.', color: 'border-bgtech-red' },
  ];

  return (
    <section id="processo" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-white">
            Processo <span className="text-gray-500">Sistemático</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-4">
                   <div className={`glass-panel p-6 rounded-xl border-l-4 ${step.color} transform hover:-translate-y-1 transition-transform duration-300 text-center md:text-left`}>
                      <h3 className="text-xl font-display font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                   </div>
                </div>

                {/* Center Node */}
                <div className="relative flex items-center justify-center w-12 h-12 my-4 md:my-0 z-10">
                   <div className="w-10 h-10 bg-bgtech-dark rounded-full border border-gray-600 flex items-center justify-center text-xs font-mono font-bold text-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                      {step.id}
                   </div>
                </div>

                {/* Empty Side for Balance */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;