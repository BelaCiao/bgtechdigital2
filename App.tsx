import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });

  const handleSelectPlan = (plan: { name: string; price: string }) => {
    setSelectedPlan(plan);
    // If it's Enterprise, we might redirect directly, but for consistency we can show modal or handle differently.
    // For this implementation, we'll open the modal for all to capture the lead.
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bgtech-dark text-gray-100 font-sans selection:bg-bgtech-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Timeline />
        <Pricing onSelectPlan={handleSelectPlan} />
      </main>
      <Footer />

      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planName={selectedPlan.name}
        price={selectedPlan.price}
      />
    </div>
  );
};

export default App;