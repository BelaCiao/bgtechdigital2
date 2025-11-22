import React from 'react';
import { Zap, Bot, Search, Smartphone, Database, ShieldCheck, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'red' | 'blue' | 'purple';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    red: 'bg-bgtech-red',
    blue: 'bg-bgtech-blue',
    purple: 'bg-purple-600'
  };

  const textClasses = {
    red: 'text-bgtech-red bg-bgtech-red/20',
    blue: 'text-bgtech-blue bg-bgtech-blue/20',
    purple: 'text-purple-400 bg-purple-500/20'
  };
  
  return (
    <div className="group relative p-1 rounded-xl bg-gradient-to-b from-white/10 to-transparent hover:from-current transition-all duration-500">
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${colorClasses[color]}`}></div>
      <div className="relative h-full glass-panel p-8 rounded-lg overflow-hidden flex flex-col justify-between group-hover:border-white/20 transition-colors">
        <div>
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${textClasses[color]}`}>
            {icon}
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
        </div>
        
        <div className={`mt-6 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-full ${colorClasses[color]}`}></div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High-Performance SPAs",
      description: "Aplicações de página única construídas com React e Vite. Carregamento instantâneo, transições fluidas e experiência de app nativo.",
      color: 'red' as const
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "LIA IA (GPT-5)",
      description: "Sua nova secretária inteligente. Baseada no motor GPT-5, ela atende clientes, agenda reuniões e realiza vendas complexas 24h por dia.",
      color: 'purple' as const
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Técnico Avançado",
      description: "Estrutura de código otimizada para Core Web Vitals. Garantimos que o Google entenda e priorize seu conteúdo.",
      color: 'red' as const
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile First & Responsive",
      description: "Design adaptável que flui perfeitamente de monitores ultrawide a smartphones, mantendo a usabilidade intacta.",
      color: 'blue' as const
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Arquitetura Escalável",
      description: "Backend robusto e APIs eficientes preparadas para crescer junto com o tráfego do seu negócio.",
      color: 'red' as const
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Segurança Cyberpunk",
      description: "Implementação de melhores práticas de segurança, HTTPS rigoroso e proteção de dados do cliente.",
      color: 'blue' as const
    }
  ];

  return (
    <section id="serviços" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Dominamos a <span className="text-bgtech-red text-glow">Tecnologia</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nossa stack de desenvolvimento é curada para velocidade, conversão e futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;