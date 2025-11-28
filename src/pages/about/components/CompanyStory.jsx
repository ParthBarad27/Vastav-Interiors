import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyStory = () => {
  const milestones = [
  {
    year: "2010",
    title: "Foundation",
    description: "Started with a vision to provide premium furniture and interior materials to Mumbai\'s growing construction industry",
    icon: "Sparkles"
  },
  {
    year: "2013",
    title: "Expansion",
    description: "Opened our first showroom and established partnerships with leading international material brands",
    icon: "TrendingUp"
  },
  {
    year: "2016",
    title: "Innovation",
    description: "Launched custom furniture design services and expanded team with certified interior designers",
    icon: "Lightbulb"
  },
  {
    year: "2019",
    title: "Recognition",
    description: "Awarded \'Best Interior Materials Supplier\' by Maharashtra Construction Association",
    icon: "Award"
  },
  {
    year: "2022",
    title: "Sustainability",
    description: "Implemented eco-friendly practices and introduced sustainable material collection",
    icon: "Leaf"
  },
  {
    year: "2025",
    title: "Digital Transformation",
    description: "Launched comprehensive digital platform for seamless customer experience and project management",
    icon: "Rocket"
  }];


  return (
    <section className="py-xl bg-background">
      <div className="container-custom">
        <div className="text-center mb-lg">
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From humble beginnings to becoming Mumbai's trusted partner in premium furniture and interior materials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center mb-xl">
          <div className="animate-slide-up">
            <Image
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1c9fab9f1-1764177360716.png"
              alt="Vastav Marketing showroom interior displaying premium wooden furniture collection with modern lighting and organized material samples in professional retail environment"
              className="w-full h-[500px] object-cover rounded-lg shadow-brand" />

          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="heading-primary text-2xl md:text-3xl text-foreground">
              Building Trust Through Quality
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2010 by a team of passionate craftsmen and design enthusiasts, Vastav Marketing began with a simple mission: to provide access to premium furniture and interior materials that combine traditional craftsmanship with modern design sensibilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What started as a small materials supplier has grown into a comprehensive interior solutions partner, serving contractors, interior designers, and homeowners across Mumbai and Maharashtra. Our commitment to quality, transparency, and customer partnership has been the foundation of our growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we pride ourselves on being more than just a supplier. We're creative collaborators who help transform visions into reality, one space at a time.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden lg:block"></div>
          
          <div className="space-y-lg">
            {milestones?.map((milestone, index) =>
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-6 animate-slide-up ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`
              }
              style={{ animationDelay: `${index * 0.1}s` }}>

                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-card p-6 rounded-lg shadow-brand hover:shadow-brand-hover transition-brand">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={milestone?.icon} size={20} color="var(--color-primary)" />
                      </div>
                      <span className="text-2xl font-bold text-primary">{milestone?.year}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {milestone?.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {milestone?.description}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex w-12 h-12 bg-accent rounded-full items-center justify-center z-10 shadow-brand">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>

                <div className="flex-1"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default CompanyStory;