import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const PricingCard: React.FC<{
  title: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
  isEnterprise?: boolean;
  onSelect: () => void;
}> = ({ title, price, features, isRecommended, isEnterprise, onSelect }) => {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 h-full ${
        isRecommended
          ? 'bg-bgtech-dark border-2 border-bgtech-red shadow-[0_0_30px_rgba(220,38,38,0.2)] scale-105 z-10'
          : isEnterprise
          ? 'bg-gradient-to-b from-gray-900 to-purple-900/40 border border-purple-500/30'
          : 'glass-panel border-transparent'
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-bgtech-red text-white text-xs font-bold uppercase tracking-widest rounded-full">
          Mais Vendido
        </div>
      )}

      {isEnterprise && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-purple-600 text-white text-xs font-bold uppercase tracking-widest rounded-full flex items-center">
          <Sparkles className="w-3 h-3 mr-1" /> GPT-5 Inside
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-xl font-display font-bold mb-2 ${isEnterprise ? 'text-purple-400' : 'text-white'}`}>
          {title}
        </h3>
        <div className="flex items-baseline">
            {price === 'Sob Medida' ? (
                 <span className="text-3xl font-bold text-white">{price}</span>
            ) : (
                <>
                    <span className="text-sm text-gray-400 mr-1">R$</span>
                    <span className="text-4xl font-bold text-white">{price}</span>
                </>
            )}
        </div>
        <p className="text-gray-500 text-sm mt-2">
          {isEnterprise ? 'Para quem quer liderar o mercado' : 'Pagamento Único ou Parcelado'}
        </p>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-300">
            <Check className={`w-5 h-5 mr-3 shrink-0 ${isRecommended ? 'text-bgtech-red' : isEnterprise ? 'text-purple-400' : 'text-gray-500'}`} />
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-3 px-6 font-bold uppercase tracking-wider text-sm transition-all rounded-sm ${
          isRecommended
            ? 'bg-bgtech-red text-white hover:bg-bgtech-darkRed'
            : isEnterprise 
            ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-900/20'
            : 'border border-gray-600 text-white hover:bg-gray-800'
        }`}
      >
        {isEnterprise ? 'Solicitar LIA IA' : 'Comprar Agora'}
      </button>
    </div>
  );
};

interface PricingProps {
  onSelectPlan: (plan: { name: string; price: string }) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="planos" className="py-24 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Investimento Inteligente</h2>
          <p className="text-gray-400">Escolha o nível de poder que sua marca precisa hoje.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          <PricingCard
            title="Site Express"
            price="500"
            onSelect={() => onSelectPlan({ name: 'Site Express (One-Page)', price: '500' })}
            features={[
              "Landing Page de Alta Conversão",
              "Design Moderno & Responsivo",
              "Botões de WhatsApp Integrados",
              "Hospedagem Gratuita (1 ano)",
              "Entrega em até 72h",
              "Ideal para Autônomos"
            ]}
          />
          <PricingCard
            title="Pack Presença 360º"
            price="2.000"
            isRecommended={true}
            onSelect={() => onSelectPlan({ name: 'Pack Presença 360º', price: '2.000' })}
            features={[
              "Tudo do plano Site Express",
              "Criação de Redes Sociais (Insta/Face)",
              "20 Artes High-End (Feed/Stories)",
              "Cadastro Google Meu Negócio",
              "Copywriting Persuasivo",
              "Bio Otimizada e Destaques",
              "Estratégia de Lançamento"
            ]}
          />
          <PricingCard
            title="LIA IA & Software"
            price="Sob Medida"
            isEnterprise={true}
            onSelect={() => onSelectPlan({ name: 'LIA IA System', price: 'Sob Medida' })}
            features={[
              "Licença LIA IA (Motor GPT-5)",
              "Atendimento e Vendas 24/7",
              "Agendamento Automático",
              "Integração c/ WhatsApp Business",
              "Painel Administrativo Custom",
              "Aplicação Web Completa (SaaS)"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;