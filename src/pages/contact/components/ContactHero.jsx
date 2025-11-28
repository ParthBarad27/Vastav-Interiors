import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Icon name="MessageSquare" size={18} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">We're Here to Help</span>
          </div>

          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-slide-up">
            Let's Transform Your Space Together
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Whether you need expert guidance, material consultation, or project planning assistance, our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-2 bg-card px-6 py-3 rounded-lg shadow-brand">
              <Icon name="Clock" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">Response within 2 hours</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-6 py-3 rounded-lg shadow-brand">
              <Icon name="Users" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">Expert consultation team</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-6 py-3 rounded-lg shadow-brand">
              <Icon name="Shield" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">Trusted by 500+ clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;