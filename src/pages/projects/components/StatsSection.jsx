import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const stats = [
    {
      icon: "Briefcase",
      value: "500+",
      label: "Completed Projects",
      description: "Successfully delivered across India"
    },
    {
      icon: "Users",
      value: "350+",
      label: "Happy Clients",
      description: "Satisfied homeowners and businesses"
    },
    {
      icon: "Award",
      value: "50+",
      label: "Design Awards",
      description: "Recognition for excellence"
    },
    {
      icon: "Star",
      value: "4.9/5",
      label: "Client Rating",
      description: "Average satisfaction score"
    }
  ];

  return (
    <div className="bg-primary text-primary-foreground rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl font-bold mb-2">
          Our Project Excellence
        </h2>
        <p className="text-primary-foreground/80">
          Transforming spaces with quality and precision
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
          >
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name={stat?.icon} size={32} />
            </div>
            <p className="text-4xl font-bold mb-2">{stat?.value}</p>
            <p className="font-semibold mb-1">{stat?.label}</p>
            <p className="text-sm text-primary-foreground/70">{stat?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;