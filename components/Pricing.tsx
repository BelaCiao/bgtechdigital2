import React from 'react';
import { Check } from 'lucide-react';

const PricingCard: React.FC<{
  title: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
  isEnterprise?: boolean;
}> = ({ title, price, features, isRecommended, isEnterprise }) => {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 h-full ${
        isRecommended
          ? 'bg-bgtech-dark border-2 border-bgtech-red shadow-[0_0_30px_rgba(220,38,38,0.2)] scale-105 z-10'
          : isEnterprise
          ? 'bg-gradient-to-b from-gray-900 to-black border border-gray-800'
          : 'glass-panel border-transparent'
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-bgtech-red text-white text-xs font-bold uppercase tracking-widest rounded-full">
          Mais Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-xl font-display font-bold mb-2 ${isEnterprise ? 'text-bgtech-blue' : 'text-white'}`}>
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
        <p className="text-gray-500 text-sm mt-2">Pagamento único ou parcelado</p>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-300">
            <Check className={`w-5 h-5 mr-3 shrink-0 ${isRecommended ? 'text-bgtech-red' : isEnterprise ? 'text-bgtech-blue' : 'text-gray-500'}`} />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 font-bold uppercase tracking-wider text-sm transition-all ${
          isRecommended
            ? 'bg-bgtech-red text-white hover:bg-bgtech-darkRed'
            : isEnterprise 
            ? 'bg-bgtech-blue text-white hover:bg-blue-900'
            : 'border border-gray-600 text-white hover:bg-gray-800'
        }`}
      >
        Selecionar
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Investimento</h2>
          <p className="text-gray-400">Escolha o nível de poder que sua marca precisa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          <PricingCard
            title="Start"
            price="1.900"
            features={[
              "Landing Page One-Page",
              "Design Responsivo",
              "Otimização básica de SEO",
              "Integração com WhatsApp",
              "Hospedagem Grátis por 1 ano"
            ]}
          />
          <PricingCard
            title="Pro Business"
            price="3.500"
            isRecommended={true}
            features={[
              "Site Institucional (até 5 pág)",
              "Painel de Blog/Notícias (CMS)",
              "SEO Técnico Avançado",
              "Design Exclusivo (Figma)",
              "Google Analytics + Pixel Setup",
              "Suporte Prioritário"
            ]}
          />
          <PricingCard
            title="Enterprise AI"
            price="Sob Medida"
            isEnterprise={true}
            features={[
              "Aplicação Web Completa (SPA)",
              "Integração com IA (Gemini/GPT)",
              "Área de Membros / Login",
              "Painel Administrativo Custom",
              "Integração de API & Banco de Dados",
              "Manutenção Mensal Inclusa"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;