import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Interior Designer",
    company: "Design Studio Mumbai",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17c989f9e-1763293351359.png",
    imageAlt: "Professional headshot of Indian male interior designer with short black hair wearing navy blue blazer and white shirt",
    rating: 5,
    text: "Vastav Marketing has been our trusted partner for over 5 years. Their material quality is exceptional, and the team's expertise in guiding us through product selection is invaluable. Every project we've completed with their materials has exceeded client expectations.",
    projectType: "Residential & Commercial"
  },
  {
    id: 2,
    name: "Priya Desai",
    role: "Homeowner",
    company: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1663583203323-42b2004f952c",
    imageAlt: "Smiling Indian woman with long dark hair wearing elegant maroon saree with gold border and traditional jewelry",
    rating: 5,
    text: "We renovated our entire home with materials from Vastav Marketing. The consultation process was thorough, and they helped us stay within budget while achieving a premium look. The quality of furniture and fittings has been outstanding even after two years.",
    projectType: "Home Renovation"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Contractor",
    company: "AP Constructions",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11b4446af-1763295185739.png",
    imageAlt: "Confident Indian male contractor with mustache wearing yellow hard hat and orange safety vest at construction site",
    rating: 5,
    text: "As a contractor handling multiple projects simultaneously, reliability is crucial. Vastav Marketing consistently delivers quality materials on time. Their bulk pricing is competitive, and the after-sales support is excellent. Highly recommended for professional projects.",
    projectType: "Commercial Construction"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Architect",
    company: "Urban Spaces Bangalore",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15fa68d8e-1763300113194.png",
    imageAlt: "Professional Indian female architect with shoulder-length hair wearing black blazer and glasses holding architectural blueprints",
    rating: 5,
    text: "The range of premium materials available at Vastav Marketing allows us to bring our design visions to life. Their team understands architectural requirements and provides technical specifications promptly. A reliable partner for high-end residential projects.",
    projectType: "Luxury Residences"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Hotel Owner",
    company: "Heritage Hotels Goa",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_180f58fed-1763294758256.png",
    imageAlt: "Distinguished Indian male hotel owner with gray beard wearing white kurta and traditional turban in elegant hotel lobby",
    rating: 5,
    text: "We furnished three boutique hotels with materials from Vastav Marketing. The quality of furniture, lighting, and finishes has impressed our guests consistently. Their hospitality-grade materials are durable and maintain their appearance beautifully.",
    projectType: "Hospitality Sector"
  },
  {
    id: 6,
    name: "Meera Krishnan",
    role: "Interior Consultant",
    company: "Chennai Design House",
    image: "https://images.unsplash.com/photo-1696527018164-1cf3fdeb0255",
    imageAlt: "Elegant Indian female interior consultant with traditional bindi wearing silk saree and pearl necklace in modern office setting",
    rating: 5,
    text: "Vastav Marketing\'s extensive catalog and knowledgeable staff make material selection effortless. They stay updated with latest trends and offer innovative solutions. Their commitment to quality and customer service sets them apart in the industry.",
    projectType: "Residential Design"
  }];


  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  return (
    <section className="py-xl bg-background">
      <div className="container-custom">
        <div className="text-center mb-lg">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of professionals and homeowners across India
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-brand p-8 md:p-12 border border-border">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20">
                    <Image
                      src={testimonials?.[currentIndex]?.image}
                      alt={testimonials?.[currentIndex]?.imageAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={20} color="white" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-3">
                  {[...Array(testimonials?.[currentIndex]?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={20} color="var(--color-accent)" className="fill-current" />
                  )}
                </div>

                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonials?.[currentIndex]?.text}"
                </p>

                <div className="mb-4">
                  <h4 className="heading-primary text-xl text-foreground mb-1">
                    {testimonials?.[currentIndex]?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials?.[currentIndex]?.role} • {testimonials?.[currentIndex]?.company}
                  </p>
                </div>

                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                  <Icon name="Briefcase" size={16} color="var(--color-primary)" className="mr-2" />
                  <span className="text-sm font-medium text-primary">
                    {testimonials?.[currentIndex]?.projectType}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-white shadow-brand hover:shadow-brand-hover rounded-full flex items-center justify-center transition-all duration-200"
            aria-label="Previous testimonial">

            <Icon name="ChevronLeft" size={24} color="var(--color-primary)" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-white shadow-brand hover:shadow-brand-hover rounded-full flex items-center justify-center transition-all duration-200"
            aria-label="Next testimonial">

            <Icon name="ChevronRight" size={24} color="var(--color-primary)" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ?
              'w-8 bg-accent' : 'w-2 bg-border hover:bg-muted-foreground'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;