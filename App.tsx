import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bgtech-dark text-gray-100 font-sans selection:bg-bgtech-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Timeline />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;