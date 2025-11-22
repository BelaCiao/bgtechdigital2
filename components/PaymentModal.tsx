import React, { useState, useEffect } from 'react';
import { X, CreditCard, QrCode, Check, Lock, Smartphone, User, Mail, Calendar, Loader2, Copy, Sparkles } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, planName, price }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const isConsultation = isNaN(Number(price.replace(/[^0-9]/g, '')));

  // Form States
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [cardData, setCardData] = useState({ number: '', holder: '', expiry: '', cvv: '' });
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [pixCopied, setPixCopied] = useState(false);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setPaymentStatus('idle');
      setIsLoading(false);
      setPixCopied(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // --- Máscaras e Formatação ---
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    return value.replace(
      /[^0-9]/g, '' 
    ).replace(
      /^(\d{2})(\d)/, '$1/$2' 
    ).substring(0, 5);
  };

  // --- Lógica de Pagamento ---

  const handleProcessPayment = async () => {
    setIsLoading(true);
    
    // Simula uma chamada de API para o Gateway (Stripe/Mercado Pago)
    await new Promise(resolve => setTimeout(resolve, 3000));

    setIsLoading(false);
    setPaymentStatus('success');
  };

  const handlePixCopy = () => {
    navigator.clipboard.writeText("00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-4266141740005204000053039865802BR5913BGTECH DIGITAL6008SAO PAULO62070503***63047482");
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 2000);
  };

  // --- Renderização dos Passos ---

  const renderStep1_UserData = () => (
    <div className="space-y-4 animate-fade-in-up">
      <div>
        <label className="block text-xs uppercase text-gray-500 font-bold mb-2">Nome Completo</label>
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
          <input 
            type="text" 
            placeholder="Como no cartão"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:border-bgtech-blue focus:outline-none focus:ring-1 focus:ring-bgtech-blue transition-colors"
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase text-gray-500 font-bold mb-2">Email Profissional</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
          <input 
            type="email" 
            placeholder="para envio da nota fiscal"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:border-bgtech-blue focus:outline-none focus:ring-1 focus:ring-bgtech-blue transition-colors"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase text-gray-500 font-bold mb-2">WhatsApp</label>
        <div className="relative">
          <Smartphone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
          <input 
            type="tel" 
            placeholder="(00) 00000-0000"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:border-bgtech-blue focus:outline-none focus:ring-1 focus:ring-bgtech-blue transition-colors"
            value={userData.phone}
            onChange={(e) => setUserData({...userData, phone: e.target.value})}
          />
        </div>
      </div>
      <button 
        onClick={() => isConsultation ? handleProcessPayment() : setStep(2)}
        disabled={!userData.name || !userData.email || !userData.phone}
        className={`w-full mt-4 font-bold py-3 rounded-lg transition-all flex items-center justify-center uppercase tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed ${
          isConsultation 
            ? 'bg-purple-600 hover:bg-purple-700 text-white' 
            : 'bg-bgtech-red hover:bg-bgtech-darkRed text-white'
        }`}
      >
        {isConsultation ? 'Solicitar Acesso LIA IA' : 'Continuar'}
      </button>
    </div>
  );

  const renderStep2_Method = () => (
    <div className="space-y-6 animate-fade-in-up">
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setPaymentMethod('pix')}
          className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all relative overflow-hidden group ${
            paymentMethod === 'pix' 
              ? 'bg-bgtech-blue/10 border-bgtech-blue text-white shadow-[0_0_15px_rgba(0,74,173,0.3)]' 
              : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500'
          }`}
        >
          <QrCode className={`w-8 h-8 mb-2 ${paymentMethod === 'pix' ? 'text-bgtech-blue' : ''}`} />
          <span className="font-bold text-sm">PIX</span>
          {paymentMethod === 'pix' && <div className="absolute top-2 right-2 w-2 h-2 bg-bgtech-blue rounded-full animate-pulse"></div>}
        </button>
        <button 
          onClick={() => setPaymentMethod('card')}
          className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all relative overflow-hidden ${
            paymentMethod === 'card' 
              ? 'bg-bgtech-blue/10 border-bgtech-blue text-white shadow-[0_0_15px_rgba(0,74,173,0.3)]' 
              : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500'
          }`}
        >
          <CreditCard className={`w-8 h-8 mb-2 ${paymentMethod === 'card' ? 'text-bgtech-blue' : ''}`} />
          <span className="font-bold text-sm">Cartão</span>
          {paymentMethod === 'card' && <div className="absolute top-2 right-2 w-2 h-2 bg-bgtech-blue rounded-full animate-pulse"></div>}
        </button>
      </div>

      {paymentMethod === 'pix' ? (
        <div className="bg-white p-4 rounded-xl flex flex-col items-center space-y-4">
           <div className="text-gray-800 font-bold text-sm text-center mb-1">Escaneie o QR Code para pagar</div>
           {/* QR Code Mock - API Pública para gerar visualmente */}
           <img 
             src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020126580014BR.GOV.BCB.PIX0114+55539993353695204000053039865802BR5913BGTECH_DIGITAL6008Pelotas62070503***63041D3D`} 
             alt="QR Code Pix" 
             className="w-48 h-48 rounded-lg border-2 border-gray-200 p-1"
           />
           
           <div className="w-full">
              <div className="text-xs text-gray-500 text-center mb-2">Ou use o Pix Copia e Cola</div>
              <button 
                onClick={handlePixCopy}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg flex items-center justify-center font-mono text-sm transition-colors border border-gray-300 border-dashed"
              >
                {pixCopied ? (
                  <><Check className="w-4 h-4 mr-2 text-green-600" /> Código Copiado!</>
                ) : (
                  <><Copy className="w-4 h-4 mr-2" /> 000201265800...7482</>
                )}
              </button>
           </div>

           <button 
             onClick={handleProcessPayment}
             className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg uppercase tracking-wider text-sm mt-2"
           >
             Já fiz o pagamento
           </button>
        </div>
      ) : (
        <div className="space-y-4 bg-gray-900/50 p-4 rounded-xl border border-gray-700">
           <div>
              <label className="block text-xs text-gray-400 mb-1">Número do Cartão</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  maxLength={19}
                  placeholder="0000 0000 0000 0000"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg py-2.5 pl-10 pr-4 text-white focus:border-bgtech-blue focus:outline-none"
                  value={cardData.number}
                  onChange={(e) => setCardData({...cardData, number: formatCardNumber(e.target.value)})}
                />
              </div>
           </div>

           <div>
              <label className="block text-xs text-gray-400 mb-1">Nome Impresso</label>
              <input 
                type="text" 
                placeholder="NOME COMO NO CARTÃO"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg py-2.5 px-4 text-white focus:border-bgtech-blue focus:outline-none uppercase"
                value={cardData.holder}
                onChange={(e) => setCardData({...cardData, holder: e.target.value.toUpperCase()})}
              />
           </div>

           <div className="flex space-x-4">
             <div className="w-1/2">
                <label className="block text-xs text-gray-400 mb-1">Validade</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input 
                    type="text" 
                    maxLength={5}
                    placeholder="MM/AA"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg py-2.5 pl-9 pr-2 text-white focus:border-bgtech-blue focus:outline-none"
                    value={cardData.expiry}
                    onChange={(e) => setCardData({...cardData, expiry: formatExpiry(e.target.value)})}
                  />
                </div>
             </div>
             <div className="w-1/2">
                <label className="block text-xs text-gray-400 mb-1">CVV</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input 
                    type="text" 
                    maxLength={4}
                    placeholder="123"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg py-2.5 pl-9 pr-2 text-white focus:border-bgtech-blue focus:outline-none"
                    value={cardData.cvv}
                    onChange={(e) => setCardData({...cardData, cvv: e.target.value.replace(/\D/g, '')})}
                  />
                </div>
             </div>
           </div>

           <button 
             onClick={handleProcessPayment}
             disabled={!cardData.number || !cardData.holder || !cardData.expiry || !cardData.cvv}
             className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg mt-4 flex items-center justify-center uppercase tracking-wider shadow-lg"
           >
             <Lock className="w-4 h-4 mr-2" /> Pagar R$ {price}
           </button>
           
           <div className="flex justify-center space-x-2 opacity-50 grayscale">
              <div className="h-6 w-10 bg-white rounded"></div>
              <div className="h-6 w-10 bg-white rounded"></div>
              <div className="h-6 w-10 bg-white rounded"></div>
           </div>
        </div>
      )}
      
      <button onClick={() => setStep(1)} className="w-full text-gray-500 text-xs hover:text-white mt-2">
        Voltar para dados pessoais
      </button>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center py-8 animate-fade-in-up">
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${isConsultation ? 'bg-purple-500/20' : 'bg-green-500/20'}`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center animate-bounce ${isConsultation ? 'bg-purple-600' : 'bg-green-500'}`}>
          {isConsultation ? <Sparkles className="w-6 h-6 text-white" /> : <Check className="w-8 h-8 text-white" />}
        </div>
      </div>
      <h3 className="text-2xl font-display font-bold text-white mb-2">
        {isConsultation ? 'Solicitação Enviada!' : 'Pagamento Aprovado!'}
      </h3>
      <p className="text-gray-400 mb-6 px-4">
        {isConsultation 
          ? 'Nossa equipe especializada analisará o perfil do seu negócio para a implementação da LIA IA e entrará em contato em até 24h.'
          : 'Recebemos seu pedido com sucesso. Você receberá um email com os detalhes do projeto e o acesso ao painel em instantes.'
        }
      </p>
      
      <div className="bg-gray-800/50 p-4 rounded-lg text-sm text-left mb-6 border border-gray-700 mx-4">
        <p className="text-gray-500 text-xs uppercase mb-1">ID da Transação</p>
        <p className="font-mono text-white">#BGT-{Math.floor(Math.random() * 1000000)}</p>
      </div>

      <button 
        onClick={onClose}
        className={`w-full font-bold py-3 rounded-lg transition-colors uppercase tracking-widest text-sm ${
          isConsultation ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-bgtech-blue hover:bg-blue-700 text-white'
        }`}
      >
        Fechar
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      <div className={`relative w-full max-w-md bg-bgtech-dark border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${isConsultation ? 'border-purple-500/30' : 'border-gray-700'}`}>
        {/* Header */}
        <div className="bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-2">
            <Lock className={`w-4 h-4 ${isConsultation ? 'text-purple-500' : 'text-green-500'}`} />
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              {isConsultation ? 'Ambiente Seguro LIA IA' : 'Checkout Seguro 256-bit'}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (Scrollable) */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {/* Progress Indicator */}
          {paymentStatus !== 'success' && !isConsultation && (
            <div className="flex items-center justify-center mb-8 space-x-2">
               <div className={`h-1 flex-1 rounded ${step >= 1 ? 'bg-bgtech-red' : 'bg-gray-800'}`}></div>
               <div className={`h-1 flex-1 rounded ${step >= 2 ? 'bg-bgtech-red' : 'bg-gray-800'}`}></div>
               <div className={`h-1 flex-1 rounded ${paymentStatus === 'success' ? 'bg-bgtech-red' : 'bg-gray-800'}`}></div>
            </div>
          )}
          
          {/* Main Content Switcher */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 animate-pulse">
               <Loader2 className={`w-12 h-12 animate-spin mb-4 ${isConsultation ? 'text-purple-500' : 'text-bgtech-blue'}`} />
               <h3 className="text-white font-bold text-lg">Processando...</h3>
               <p className="text-gray-500 text-sm">Validando requisição segura</p>
            </div>
          ) : paymentStatus === 'success' ? (
            renderSuccess()
          ) : (
            <>
              <div className="mb-6 flex justify-between items-end border-b border-gray-800 pb-4">
                 <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Item Selecionado</p>
                    <h3 className={`text-lg font-bold leading-tight ${isConsultation ? 'text-purple-400' : 'text-white'}`}>{planName}</h3>
                 </div>
                 <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase font-bold">{isConsultation ? 'Valor Estimado' : 'Total'}</p>
                    <span className={`font-bold text-xl ${isConsultation ? 'text-gray-300' : 'text-bgtech-blue'}`}>
                      {isConsultation ? 'Sob Consulta' : `R$ ${price}`}
                    </span>
                 </div>
              </div>

              {step === 1 ? renderStep1_UserData() : renderStep2_Method()}
            </>
          )}
        </div>
        
        {/* Footer Security Badge */}
        {paymentStatus !== 'success' && (
           <div className="bg-gray-900/80 p-3 border-t border-gray-800 text-center">
              <p className="text-[10px] text-gray-600 flex items-center justify-center gap-2">
                 <Lock className="w-3 h-3" /> 
                 Seus dados estão protegidos por criptografia de ponta a ponta.
              </p>
           </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;