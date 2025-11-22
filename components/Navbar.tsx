import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsapp = () => {
    const url = `https://wa.me/5553999335369?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de iniciar um projeto.")}`;
    window.open(url, '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-bgtech-dark/90 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="relative">
            <Cpu className="w-8 h-8 text-bgtech-red group-hover:animate-pulse transition-all duration-300" />
            <div className="absolute inset-0 bg-bgtech-red blur-lg opacity-20 group-hover:opacity-50 transition-opacity"></div>
          </div>
          <span className="ml-2 text-2xl font-display font-bold tracking-wider group-hover:text-glow transition-all">
            BGTECH <span className="text-bgtech-red">Digital</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Serviços', 'Infra', 'Showcase', 'Processo', 'Planos'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bgtech-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={handleWhatsapp}
            className="px-6 py-2 bg-transparent border border-bgtech-red text-bgtech-red font-display font-bold hover:bg-bgtech-red hover:text-white transition-all duration-300 uppercase tracking-widest text-xs clip-path-polygon"
          >
            Iniciar Projeto
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bgtech-dark/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-6 space-y-4 flex flex-col items-center">
            {['Serviços', 'Infra', 'Showcase', 'Processo', 'Planos'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-bgtech-red transition-colors"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => {
                handleWhatsapp();
                setMobileMenuOpen(false);
              }}
              className="mt-4 w-full max-w-xs px-6 py-3 bg-bgtech-red text-white font-display font-bold uppercase tracking-wider"
            >
              Iniciar Projeto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;