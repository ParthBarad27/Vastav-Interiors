import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessStep = ({ step, index, isLast }) => {
  return (
    <div className="relative">
      <div className="flex items-start space-x-6">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-display text-xl font-bold shadow-brand">
            {index + 1}
          </div>
          {!isLast && (
            <div className="w-0.5 h-24 bg-border mt-4" />
          )}
        </div>
        
        <div className="flex-1 pb-12">
          <div className="flex items-center space-x-3 mb-3">
            <Icon 
              name={step?.icon} 
              size={24} 
              color="var(--color-primary)" 
              strokeWidth={2}
            />
            <h3 className="heading-primary text-lg text-foreground">
              {step?.title}
            </h3>
          </div>
          
          <p className="body-text text-muted-foreground text-sm leading-relaxed mb-4">
            {step?.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {step?.highlights?.map((highlight, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-muted rounded-full text-xs text-foreground"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;