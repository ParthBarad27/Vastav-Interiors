import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onLearnMore }) => {
  return (
    <div className="bg-card rounded-xl p-8 border border-border hover-lift group">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon 
          name={service?.icon} 
          size={32} 
          color="var(--color-primary)" 
          strokeWidth={2}
        />
      </div>
      <h3 className="heading-primary text-xl text-foreground mb-3">
        {service?.title}
      </h3>
      <p className="body-text text-muted-foreground text-sm mb-6 leading-relaxed">
        {service?.description}
      </p>
      <ul className="space-y-3 mb-6">
        {service?.features?.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon 
                name="Check" 
                size={14} 
                color="var(--color-accent)" 
                strokeWidth={3}
              />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        fullWidth
        iconName="ArrowRight"
        iconPosition="right"
        iconSize={16}
        onClick={() => onLearnMore(service)}
        className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
      >
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;