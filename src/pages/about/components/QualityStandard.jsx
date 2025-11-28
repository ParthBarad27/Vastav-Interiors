import React from 'react';
import Icon from '../../../components/AppIcon';


const QualityStandards = () => {
  const qualityProcesses = [
    {
      title: "Material Sourcing",
      description: "We partner exclusively with certified suppliers who meet international quality standards",
      icon: "Search",
      steps: [
        "Supplier verification and certification check",
        "Material origin and sustainability audit",
        "Sample testing before bulk procurement",
        "Regular supplier performance reviews"
      ]
    },
    {
      title: "Quality Testing",
      description: "Every material undergoes rigorous testing before reaching our customers",
      icon: "TestTube",
      steps: [
        "Physical strength and durability tests",
        "Chemical composition analysis",
        "Environmental resistance testing",
        "Finish quality and consistency checks"
      ]
    },
    {
      title: "Storage & Handling",
      description: "Climate-controlled facilities ensure materials maintain optimal condition",
      icon: "Package",
      steps: [
        "Temperature and humidity monitoring",
        "Proper stacking and organization",
        "Regular inventory quality checks",
        "Damage prevention protocols"
      ]
    },
    {
      title: "Delivery Assurance",
      description: "Safe transportation and installation support for every order",
      icon: "Truck",
      steps: [
        "Protective packaging standards",
        "Trained delivery personnel",
        "Installation guidance provided",
        "Post-delivery quality verification"
      ]
    }
  ];

  const brandPartners = [
    {
      name: "Greenply Industries",
      category: "Plywood & Laminates",
      logo: "Building2",
      description: "Premium plywood and decorative laminates"
    },
    {
      name: "Asian Paints",
      category: "Paints & Coatings",
      logo: "Paintbrush",
      description: "Complete range of interior and exterior paints"
    },
    {
      name: "Hettich India",
      category: "Hardware & Fittings",
      logo: "Wrench",
      description: "German-engineered furniture hardware"
    },
    {
      name: "Kajaria Ceramics",
      category: "Tiles & Flooring",
      logo: "Grid3x3",
      description: "Designer tiles and flooring solutions"
    },
    {
      name: "Hafele India",
      category: "Furniture Fittings",
      logo: "Settings",
      description: "Premium furniture fittings and accessories"
    },
    {
      name: "Saint-Gobain",
      category: "Glass & Mirrors",
      logo: "Square",
      description: "High-quality glass and mirror products"
    }
  ];

  const guarantees = [
    {
      title: "Quality Guarantee",
      description: "100% genuine materials with manufacturer warranties",
      icon: "ShieldCheck",
      color: "text-success"
    },
    {
      title: "Price Transparency",
      description: "No hidden costs, competitive pricing with detailed quotations",
      icon: "Receipt",
      color: "text-primary"
    },
    {
      title: "Timely Delivery",
      description: "On-time delivery commitment with real-time tracking",
      icon: "Clock",
      color: "text-accent"
    },
    {
      title: "Expert Support",
      description: "Technical guidance and installation support included",
      icon: "Headphones",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-xl bg-background">
      <div className="container-custom">
        <div className="text-center mb-lg">
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
            Quality Standards & Partnerships
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uncompromising quality through rigorous processes and trusted brand partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mb-xl">
          {qualityProcesses?.map((process, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-brand hover:shadow-brand-hover transition-brand animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={process.icon} size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {process.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {process.steps?.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 mb-xl">
          <h3 className="heading-primary text-2xl text-foreground text-center mb-8">
            Our Premium Brand Partners
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandPartners?.map((partner, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 hover:shadow-brand transition-brand hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={partner?.logo} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{partner?.name}</h4>
                <p className="text-sm text-accent font-medium mb-2">{partner?.category}</p>
                <p className="text-sm text-muted-foreground">{partner?.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees?.map((guarantee, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 text-center hover:shadow-brand transition-brand hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 ${guarantee?.color}`}>
                <Icon name={guarantee?.icon} size={28} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{guarantee?.title}</h4>
              <p className="text-sm text-muted-foreground">{guarantee?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;