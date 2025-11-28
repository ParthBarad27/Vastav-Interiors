import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14114feb8-1763293898039.png",
    imageAlt: "Professional portrait of Indian businessman Rajesh Sharma in formal navy blue suit with confident smile standing in modern office environment",
    expertise: "25+ years in furniture manufacturing and interior materials",
    certifications: ["MBA in Business Management", "Certified Interior Designer"],
    description: "Visionary leader with deep expertise in traditional craftsmanship and modern design integration"
  },
  {
    name: "Priya Desai",
    role: "Head of Design",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e443b080-1763299252483.png",
    imageAlt: "Professional headshot of Indian female interior designer Priya Desai wearing elegant black blazer with warm smile in contemporary office setting",
    expertise: "15+ years in interior design and space planning",
    certifications: ["B.Arch from IIT Mumbai", "LEED Certified Professional"],
    description: "Award-winning designer specializing in sustainable and contemporary interior solutions"
  },
  {
    name: "Amit Patel",
    role: "Quality Assurance Manager",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_114dca8d9-1763295525577.png",
    imageAlt: "Professional photograph of Indian quality manager Amit Patel in white shirt and glasses examining materials in modern warehouse facility",
    expertise: "20+ years in materials testing and quality control",
    certifications: ["ISO 9001 Lead Auditor", "Six Sigma Black Belt"],
    description: "Ensures every material meets international quality standards through rigorous testing protocols"
  },
  {
    name: "Sneha Kulkarni",
    role: "Customer Relations Head",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_152848d74-1763296733718.png",
    imageAlt: "Professional portrait of Indian customer service manager Sneha Kulkarni in burgundy blazer with friendly expression in bright office environment",
    expertise: "12+ years in customer service and project coordination",
    certifications: ["PMP Certified", "Customer Experience Professional"],
    description: "Dedicated to ensuring seamless customer journey from consultation to project completion"
  }];


  const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System Certification",
    icon: "Award",
    year: "2015"
  },
  {
    name: "LEED Certification",
    description: "Leadership in Energy and Environmental Design",
    icon: "Leaf",
    year: "2019"
  },
  {
    name: "FSC Certified",
    description: "Forest Stewardship Council Certification",
    icon: "Trees",
    year: "2020"
  },
  {
    name: "MSME Registered",
    description: "Ministry of MSME, Government of India",
    icon: "Building",
    year: "2010"
  }];


  return (
    <section className="py-xl bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-lg">
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate professionals dedicated to bringing your vision to life with expertise and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl">
          {teamMembers?.map((member, index) =>
          <div
            key={index}
            className="bg-card rounded-lg overflow-hidden shadow-brand hover:shadow-brand-hover transition-brand hover-lift animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}>

              <div className="relative h-80">
                <Image
                src={member?.image}
                alt={member?.imageAlt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member?.name}
                </h3>
                <p className="text-accent font-medium mb-3">{member?.role}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {member?.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Briefcase" size={16} className="text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">{member?.expertise}</span>
                  </div>
                  
                  <div className="space-y-1">
                    {member?.certifications?.map((cert, certIndex) =>
                  <div key={certIndex} className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span className="text-sm text-muted-foreground">{cert}</span>
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-brand">
          <h3 className="heading-primary text-2xl text-foreground text-center mb-8">
            Our Certifications & Credentials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) =>
            <div
              key={index}
              className="text-center p-6 bg-background rounded-lg hover:bg-primary/5 transition-brand animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}>

                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert?.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{cert?.description}</p>
                <span className="text-xs text-accent font-medium">Since {cert?.year}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TeamSection;