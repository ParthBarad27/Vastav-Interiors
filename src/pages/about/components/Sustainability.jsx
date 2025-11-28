import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const Sustainability = () => {
  const initiatives = [
  {
    title: "Sustainable Sourcing",
    description: "We prioritize materials from certified sustainable sources and eco-friendly manufacturers",
    icon: "TreePine",
    metrics: [
    { label: "FSC Certified Wood", value: "85%" },
    { label: "Recycled Materials", value: "40%" },
    { label: "Local Sourcing", value: "60%" }],

    image: "https://images.unsplash.com/photo-1663583128901-faaa4af78cc3",
    imageAlt: "Sustainable forest management showing tall green trees in natural woodland environment with sunlight filtering through dense canopy representing eco-friendly wood sourcing practices"
  },
  {
    title: "Waste Reduction",
    description: "Comprehensive waste management and recycling programs across our operations",
    icon: "Recycle",
    metrics: [
    { label: "Waste Recycled", value: "75%" },
    { label: "Packaging Reused", value: "90%" },
    { label: "Zero Landfill Goal", value: "2026" }],

    image: "https://images.unsplash.com/photo-1727373203708-1b2f5d7d1a93",
    imageAlt: "Organized recycling facility showing sorted materials in blue containers with workers managing waste reduction program in clean industrial warehouse environment"
  },
  {
    title: "Energy Efficiency",
    description: "Solar-powered facilities and energy-efficient operations reducing carbon footprint",
    icon: "Zap",
    metrics: [
    { label: "Solar Energy", value: "50%" },
    { label: "LED Lighting", value: "100%" },
    { label: "Carbon Reduction", value: "35%" }],

    image: "https://images.unsplash.com/photo-1673027481099-1b5fbf05cfa9",
    imageAlt: "Modern solar panel installation on commercial building rooftop with blue photovoltaic cells arranged in rows under clear sky representing renewable energy commitment"
  },
  {
    title: "Water Conservation",
    description: "Rainwater harvesting and water recycling systems in our facilities",
    icon: "Droplet",
    metrics: [
    { label: "Water Recycled", value: "65%" },
    { label: "Rainwater Harvested", value: "45%" },
    { label: "Usage Reduced", value: "40%" }],

    image: "https://images.unsplash.com/photo-1607071409844-924be4bc2ede",
    imageAlt: "Rainwater harvesting system with large blue storage tanks and collection pipes in modern facility courtyard surrounded by green plants demonstrating water conservation technology"
  }];


  const ecoProducts = [
  {
    name: "Bamboo Furniture Collection",
    description: "Sustainable bamboo alternatives to traditional wood furniture",
    icon: "Leaf",
    benefits: ["Fast-growing renewable resource", "Carbon-negative material", "Durable and stylish"]
  },
  {
    name: "Recycled Composite Materials",
    description: "High-quality materials made from recycled plastics and wood fibers",
    icon: "RefreshCw",
    benefits: ["Reduces plastic waste", "Weather-resistant", "Low maintenance"]
  },
  {
    name: "Low-VOC Finishes",
    description: "Eco-friendly paints and finishes with minimal volatile organic compounds",
    icon: "Wind",
    benefits: ["Healthier indoor air", "Environmentally safe", "Premium quality finish"]
  },
  {
    name: "Reclaimed Wood Products",
    description: "Beautiful furniture crafted from reclaimed and repurposed wood",
    icon: "Hammer",
    benefits: ["Unique character pieces", "Preserves old-growth wood", "Reduces deforestation"]
  }];


  const impactStats = [
  { icon: "Trees", value: "5,000+", label: "Trees Planted", color: "text-success" },
  { icon: "Recycle", value: "250", label: "Tons Recycled", color: "text-primary" },
  { icon: "Zap", value: "40%", label: "Energy Saved", color: "text-accent" },
  { icon: "Droplet", value: "1M", label: "Liters Conserved", color: "text-blue-500" }];


  return (
    <section className="py-xl bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-lg">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Leaf" size={18} className="text-success" />
            <span className="text-sm font-medium text-success">Sustainability Commitment</span>
          </div>
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
            Building a Greener Future
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our commitment to environmental responsibility through sustainable practices and eco-friendly solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-xl">
          {impactStats?.map((stat, index) =>
          <div
            key={index}
            className="bg-card rounded-lg p-6 text-center shadow-brand hover:shadow-brand-hover transition-brand hover-lift animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}>

              <div className={`w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto mb-3 ${stat?.color}`}>
                <Icon name={stat?.icon} size={28} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          )}
        </div>

        <div className="space-y-lg mb-xl">
          {initiatives?.map((initiative, index) =>
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-lg items-center animate-fade-in ${
            index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`
            }
            style={{ animationDelay: `${index * 0.15}s` }}>

              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Image
                src={initiative?.image}
                alt={initiative?.imageAlt}
                className="w-full h-[400px] object-cover rounded-lg shadow-brand" />

              </div>

              <div className="bg-card rounded-lg p-8 shadow-brand">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name={initiative?.icon} size={24} className="text-success" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {initiative?.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  {initiative?.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {initiative?.metrics?.map((metric, metricIndex) =>
                <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-success mb-1">
                        {metric?.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric?.label}
                      </div>
                    </div>
                )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-success/5 to-primary/5 rounded-lg p-8">
          <h3 className="heading-primary text-2xl text-foreground text-center mb-8">
            Eco-Friendly Product Range
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecoProducts?.map((product, index) =>
            <div
              key={index}
              className="bg-card rounded-lg p-6 hover:shadow-brand transition-brand hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={product?.icon} size={24} className="text-success" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {product?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {product?.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {product?.benefits?.map((benefit, benefitIndex) =>
                <li key={benefitIndex} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={16} className="text-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default Sustainability;