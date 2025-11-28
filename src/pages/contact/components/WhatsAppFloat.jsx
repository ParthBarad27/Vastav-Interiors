import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 500);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Vastav Marketing's products and services.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-4 animate-fade-in">
            <div className="bg-card shadow-brand-hover rounded-lg p-4 max-w-xs border border-border">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={20} color="var(--color-success)" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    Need Quick Help?
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Chat with us on WhatsApp for instant assistance!
                  </p>
                </div>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            </div>
            <div className="w-4 h-4 bg-card border-r border-b border-border transform rotate-45 absolute -bottom-2 right-6"></div>
          </div>
        )}

        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-success text-success-foreground rounded-full shadow-brand-hover flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl group relative"
          aria-label="Chat on WhatsApp"
        >
          <Icon name="MessageCircle" size={28} strokeWidth={2} />
          
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-destructive-foreground">1</span>
          </span>

          <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-20"></span>
        </button>
      </div>
    </>
  );
};

export default WhatsAppFloat;