
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/SliderHero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import LoanCalculator from './components/LoanCalculator';
import WhyUs from './components/WhyUs';
import Testimonial from './components/Testimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AboutUsPage from './components/AboutUsPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
      offset: 100,
    });
    // Scroll to top on view change
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: 'home' | 'about') => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar navigateTo={navigateTo} currentView={currentView} />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <TrustBar />
            <Services />
            <LoanCalculator />
            <WhyUs />
            <Testimonial />
            <ContactForm />
          </>
        ) : (
          <AboutUsPage />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
