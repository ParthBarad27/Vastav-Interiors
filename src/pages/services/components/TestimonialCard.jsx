import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-card rounded-xl p-8 border border-border hover-lift">
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial?.avatar}
            alt={testimonial?.avatarAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="heading-primary text-base text-foreground mb-1">
            {testimonial?.name}
          </h4>
          <p className="text-sm text-muted-foreground">
            {testimonial?.role}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)]?.map((_, index) => (
            <Icon
              key={index}
              name="Star"
              size={16}
              color={index < testimonial?.rating ? "var(--color-accent)" : "var(--color-muted)"}
              className={index < testimonial?.rating ? "fill-accent" : ""}
            />
          ))}
        </div>
      </div>
      <p className="body-text text-foreground text-sm leading-relaxed mb-4">
        "{testimonial?.content}"
      </p>
      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
        <Icon name="MapPin" size={14} />
        <span>{testimonial?.project}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;