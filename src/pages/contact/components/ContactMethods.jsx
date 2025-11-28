import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      description: "Speak directly with our team for immediate assistance",
      details: [
        { label: "Main Office", value: "+91 98765 43210" },
        { label: "Sales Inquiry", value: "+91 98765 43211" },
        { label: "Support", value: "+91 98765 43212" }
      ],
      availability: "Mon-Sat: 9:00 AM - 7:00 PM",
      action: "tel:+919876543210",
      actionLabel: "Call Now",
      color: "primary"
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "Send detailed inquiries and receive comprehensive responses",
      details: [
        { label: "General Inquiries", value: "info@vastavmarketing.com" },
        { label: "Sales", value: "sales@vastavmarketing.com" },
        { label: "Support", value: "support@vastavmarketing.com" }
      ],
      availability: "Response within 4-6 hours",
      action: "mailto:info@vastavmarketing.com",
      actionLabel: "Send Email",
      color: "accent"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "Get instant responses and quick consultations",
      details: [
        { label: "Quick Queries", value: "+91 98765 43210" },
        { label: "Share Photos", value: "Send project images directly" },
        { label: "Real-time Chat", value: "Instant communication" }
      ],
      availability: "Available 24/7 for messages",
      action: "https://wa.me/919876543210",
      actionLabel: "Chat on WhatsApp",
      color: "success"
    },
    {
      icon: "MapPin",
      title: "Visit Showroom",
      description: "Experience our materials firsthand at our showroom",
      details: [
        { label: "Address", value: "Shop No. 15, Furniture Market, Andheri West, Mumbai - 400058" },
        { label: "Landmark", value: "Near Metro Station, Opposite City Mall" }
      ],
      availability: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 6:00 PM",
      action: "#map-section",
      actionLabel: "Get Directions",
      color: "primary"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
      accent: "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground",
      success: "bg-success/10 text-success hover:bg-success hover:text-success-foreground"
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred communication channel and we'll respond promptly with expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-brand hover:shadow-brand-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(method?.color)?.split(' ')?.[0]}`}>
                <Icon name={method?.icon} size={32} color={`var(--color-${method?.color})`} strokeWidth={2} />
              </div>

              <h3 className="heading-primary text-2xl text-foreground mb-3">
                {method?.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {method?.description}
              </p>

              <div className="space-y-3 mb-6">
                {method?.details?.map((detail, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      {detail?.label}
                    </span>
                    <span className="text-sm text-foreground font-medium">
                      {detail?.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                <Icon name="Clock" size={16} />
                <span>{method?.availability}</span>
              </div>

              <a
                href={method?.action}
                className={`inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 w-full ${getColorClasses(method?.color)}`}
              >
                <span>{method?.actionLabel}</span>
                <Icon name="ArrowRight" size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;