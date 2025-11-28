import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ExpertCard = ({ expert }) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border hover-lift group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={expert?.image}
          alt={expert?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="heading-primary text-xl text-foreground mb-1">
            {expert?.name}
          </h3>
          <p className="text-sm text-accent font-medium">
            {expert?.role}
          </p>
        </div>
      </div>
      <div className="p-6">
        <p className="body-text text-muted-foreground text-sm mb-4 leading-relaxed">
          {expert?.bio}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="Award" size={16} color="var(--color-accent)" />
            <span className="text-foreground">{expert?.experience}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="Briefcase" size={16} color="var(--color-accent)" />
            <span className="text-foreground">{expert?.projects}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {expert?.specializations?.map((spec, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;