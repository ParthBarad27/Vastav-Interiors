import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import MaterialCategoriesSection from './components/MaterialCategoriesSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import ConsultationSection from './components/ConsultationSection';
import NewsletterSection from './components/NewsletterSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Vastav Marketing - Premium Furniture & Interior Materials | Mumbai</title>
        <meta 
          name="description" 
          content="Transform your space with Vastav Marketing's premium furniture and interior materials. Trusted by contractors, designers, and homeowners across India since 2010. Quality materials, expert guidance, lasting relationships." 
        />
        <meta 
          name="keywords" 
          content="furniture supplier Mumbai, interior materials, premium furniture, wood laminates, hardware fittings, lighting solutions, flooring materials, wall finishes, custom furniture, interior design materials" 
        />
        <meta property="og:title" content="Vastav Marketing - Premium Furniture & Interior Materials" />
        <meta property="og:description" content="Quality materials, expert guidance, lasting relationships. Your trusted partner for residential and commercial projects." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vastavmarketing.com/homepage" />
      </Helmet>

      <div className="main-content bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <StatsSection />
          <MaterialCategoriesSection />
          <FeaturedProjectsSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <ConsultationSection />
          <NewsletterSection />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Homepage;