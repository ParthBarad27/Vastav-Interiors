import React from 'react';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1717661622547-c5da556b161d"
          alt="Modern luxury interior design showcase featuring elegant wooden furniture with warm ambient lighting in spacious living room with contemporary decor elements"
          className="w-full h-full object-cover opacity-10" />

      </div>
      
      <div className="container-custom relative z-10 py-xl">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-accent">Established 2010</span>
          </div>
          
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Crafting Excellence Since 2010
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Where traditional craftsmanship meets modern design innovation. We transform spaces into living experiences through quality materials and expert guidance.
          </p>
        </div>
      </div>
    </section>);

};

export default HeroSection;