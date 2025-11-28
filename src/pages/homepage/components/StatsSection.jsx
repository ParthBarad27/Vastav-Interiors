import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      icon: "Award",
      value: 15,
      suffix: "+",
      label: "Years of Excellence",
      description: "Serving quality since 2010"
    },
    {
      id: 2,
      icon: "Users",
      value: 5000,
      suffix: "+",
      label: "Happy Clients",
      description: "Trusted by professionals"
    },
    {
      id: 3,
      icon: "Briefcase",
      value: 8500,
      suffix: "+",
      label: "Projects Completed",
      description: "Across residential & commercial"
    },
    {
      id: 4,
      icon: "Star",
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Rated by our customers"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => {
      if (sectionRef?.current) {
        observer?.unobserve(sectionRef?.current);
      }
    };
  }, []);

  const AnimatedCounter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span className="heading-display text-5xl md:text-6xl text-primary font-bold">
        {count?.toLocaleString('en-IN')}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-xl bg-card">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => (
            <div
              key={stat?.id}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={stat?.icon} size={32} color="var(--color-primary)" />
              </div>
              <div className="mb-2">
                <AnimatedCounter value={stat?.value} suffix={stat?.suffix} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {stat?.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;