import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyChooseSection = () => {
  const reasons = [
    {
      id: 1,
      icon: "Award",
      title: "15+ Years of Excellence",
      description: "Established in 2010, we've built a reputation for quality and reliability in the furniture and interior materials industry across India"
    },
    {
      id: 2,
      icon: "Shield",
      title: "Quality Assurance",
      description: "Every product is sourced from certified manufacturers and undergoes rigorous quality checks before reaching our customers"
    },
    {
      id: 3,
      icon: "Users",
      title: "Expert Consultation",
      description: "Our experienced team provides personalized guidance for material selection, helping you make informed decisions for your projects"
    },
    {
      id: 4,
      icon: "Package",
      title: "Extensive Catalog",
      description: "Access to 2000+ premium products including furniture, laminates, hardware, lighting, and flooring materials from top brands"
    },
    {
      id: 5,
      icon: "Truck",
      title: "Reliable Delivery",
      description: "Timely delivery across Maharashtra and neighboring states with careful handling and installation support when needed"
    },
    {
      id: 6,
      icon: "IndianRupee",
      title: "Competitive Pricing",
      description: "Direct partnerships with manufacturers enable us to offer competitive rates without compromising on quality or service"
    },
    {
      id: 7,
      icon: "Headphones",
      title: "After-Sales Support",
      description: "Dedicated customer service team available for queries, maintenance guidance, and warranty claims throughout your project lifecycle"
    },
    {
      id: 8,
      icon: "Sparkles",
      title: "Trend-Forward Selection",
      description: "Stay ahead with our regularly updated collection featuring the latest design trends and innovative materials from global markets"
    }
  ];

  return (
    <section className="py-xl bg-background">
      <div className="container-custom">
        <div className="text-center mb-lg">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Why Vastav Marketing
          </span>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            Your Trusted Partner in Quality
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining traditional craftsmanship with modern design excellence to deliver\nexceptional materials and service for every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons?.map((reason, index) => (
            <div
              key={reason?.id}
              className="bg-card rounded-xl p-6 border border-border hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={reason?.icon} size={28} color="var(--color-primary)" />
              </div>
              <h3 className="heading-primary text-lg text-foreground mb-3">
                {reason?.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;