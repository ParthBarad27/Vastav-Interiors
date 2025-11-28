import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicePackageCard = ({ packageData, onSelect, isPopular }) => {
  return (
    <div className={`bg-card rounded-xl p-8 border-2 transition-all duration-300 ${
      isPopular 
        ? 'border-accent shadow-brand-hover scale-105' 
        : 'border-border hover-lift'
    }`}>
      {isPopular && (
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-xs font-semibold mb-4">
          <Icon name="Star" size={14} />
          <span>Most Popular</span>
        </div>
      )}
      <h3 className="heading-primary text-2xl text-foreground mb-2">
        {packageData?.name}
      </h3>
      <p className="body-text text-muted-foreground text-sm mb-6">
        {packageData?.description}
      </p>
      <div className="mb-6">
        <div className="flex items-baseline space-x-2">
          <span className="heading-display text-4xl text-foreground">
            ₹{packageData?.price?.toLocaleString('en-IN')}
          </span>
          <span className="text-muted-foreground text-sm">
            {packageData?.priceUnit}
          </span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {packageData?.features?.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon 
                name="Check" 
                size={14} 
                color="var(--color-success)" 
                strokeWidth={3}
              />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={isPopular ? "default" : "outline"}
        fullWidth
        iconName="Calendar"
        iconPosition="left"
        iconSize={18}
        onClick={() => onSelect(packageData)}
        className={isPopular ? "bg-accent hover:bg-brand-dark-goldenrod" : ""}
      >
        Book Consultation
      </Button>
    </div>
  );
};

export default ServicePackageCard;