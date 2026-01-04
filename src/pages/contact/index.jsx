import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ConsultationBooking from './components/ConsultationBooking';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import FAQSection from './components/FAQSection';
import WhatsAppFloat from './components/WhatsAppFloat';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Vastav Marketing | Premium Furniture & Interior Materials</title>
        <meta 
          name="description" 
          content="Get in touch with Vastav Marketing for expert consultation on premium furniture and interior materials. Multiple contact options, free consultations, and showroom visits available in Mumbai." 
        />
        <meta 
          name="keywords" 
          content="contact vastav marketing, furniture consultation mumbai, interior materials inquiry, showroom visit, free consultation, material samples" 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <ContactHero />
          <ContactMethods />
          <div id="consultation-booking">
            <ConsultationBooking />
          </div>
          <ContactForm />
          <LocationMap />
          <FAQSection />
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

// Todo
// The whatsapp icon 

export default Contact;
