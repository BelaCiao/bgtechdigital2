import React from 'react';
import { Cpu, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-bgtech-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-6 md:mb-0">
            <Cpu className="w-8 h-8 text-gray-600" />
            <span className="ml-2 text-2xl font-display font-bold text-gray-400">
              BGTECH <span className="text-gray-600">Digital</span>
            </span>
          </div>
          
          <div className="flex space-x-6">
             <a href="#" className="text-gray-500 hover:text-bgtech-red transition-colors"><Github className="w-6 h-6" /></a>
             <a href="#" className="text-gray-500 hover:text-bgtech-blue transition-colors"><Linkedin className="w-6 h-6" /></a>
             <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} BGTECH Digital Solutions. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 font-mono">
            Powered by <span className="text-bgtech-red">React</span> & <span className="text-bgtech-blue">V8 Engine</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;