import React from 'react';
import { Server, Wifi, Shield, Cable, Wrench, Video, Router, Cpu } from 'lucide-react';

const InfraCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}> = ({ icon, title, description, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-bgtech-blue/50 transition-all duration-500 h-full">
      {/* Image Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-bgtech-dark via-bgtech-dark/90 to-bgtech-dark/40 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 p-6 h-full flex flex-col justify-end min-h-[280px]">
        <div className="w-12 h-12 bg-bgtech-blue/20 rounded-lg flex items-center justify-center text-bgtech-blue mb-4 group-hover:bg-bgtech-blue group-hover:text-white transition-colors duration-300 backdrop-blur-md border border-bgtech-blue/30">
          {icon}
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-transparent group-hover:border-bgtech-blue pl-0 group-hover:pl-3 transition-all duration-300">
          {description}
        </p>
      </div>
      
      {/* Decoration */}
      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Cpu className="w-6 h-6 text-bgtech-blue/50 animate-spin-slow" />
      </div>
    </div>
  );
};

const PhysicalServices: React.FC = () => {
  const services = [
    {
      icon: <Cable className="w-6 h-6" />,
      title: "Cabeamento Estruturado",
      description: "Organização certificada de racks e cabeamento Cat6/Fibra Óptica. Sua rede física organizada para máxima performance e fácil manutenção.",
      image: "https://images.unsplash.com/photo-1558494949-efc5e60c9482?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Segurança & CFTV",
      description: "Sistemas de monitoramento inteligente com acesso remoto. Câmeras IP de alta resolução e DVRs com integração em nuvem.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Redes Corporativas & Wi-Fi",
      description: "Projeto e instalação de redes Mesh corporativas (Ubiquiti/Cisco). Elimine zonas mortas e garanta velocidade em toda a empresa.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Manutenção de Hardware",
      description: "Reparo especializado de computadores, notebooks e servidores. Limpeza técnica, upgrade de componentes e recuperação de dados.",
      image: "https://images.unsplash.com/photo-1597872250977-391d955ae72e?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="infra" className="py-24 relative bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-px w-8 bg-bgtech-blue"></div>
              <span className="text-bgtech-blue font-mono text-xs uppercase tracking-widest">BGTECH Hardware Division</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Infraestrutura <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bgtech-blue to-cyan-400">Física & Conectividade</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg">
              Não vivemos apenas de código. Oferecemos soluções completas de hardware e infraestrutura para garantir que sua empresa nunca pare.
            </p>
          </div>

          <div className="hidden md:block">
            <Router className="w-24 h-24 text-gray-800" strokeWidth={1} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <InfraCard key={index} {...service} />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8">
          {[
            { label: 'Pontos de Rede', value: '+5.000' },
            { label: 'Câmeras Instaladas', value: '+800' },
            { label: 'Empresas Atendidas', value: '+150' },
            { label: 'Suporte', value: 'On-Site' },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysicalServices;