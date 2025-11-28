import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import CompanyStory from './components/CompanyStory';
import TeamSection from './components/TeamSection';
import QualityStandards from './components/QualityStandards';
import Sustainability from './components/Sustainability';
import TestimonialsSection from './components/TestimonialsSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <HeroSection />
        <CompanyStory />
        <TeamSection />
        <QualityStandards />
        <Sustainability />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};

export default About;