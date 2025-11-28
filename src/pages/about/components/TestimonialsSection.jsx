import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
  {
    name: "Vikram Mehta",
    role: "Interior Designer",
    company: "Mehta Interiors, Mumbai",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_105b96742-1763300606680.png",
    imageAlt: "Professional portrait of Indian interior designer Vikram Mehta in casual blue shirt with confident smile standing in modern design studio with material samples",
    quote: "Vastav Marketing has been our trusted partner for over 5 years. Their quality materials and expert guidance have been instrumental in delivering exceptional projects to our clients. The team\'s commitment to sustainability aligns perfectly with our design philosophy.",
    rating: 5,
    projectsCompleted: 45,
    videoThumbnail: "https://images.unsplash.com/photo-1653972233739-667468bbd5a9",
    videoThumbnailAlt: "Modern luxury residential interior design project showcase featuring elegant wooden furniture and contemporary decor in spacious living room with warm lighting"
  },
  {
    name: "Anjali Deshmukh",
    role: "Homeowner",
    company: "Bandra, Mumbai",
    image: "https://images.unsplash.com/photo-1639664340127-409e8a1efff0",
    imageAlt: "Smiling Indian homeowner Anjali Deshmukh in elegant traditional attire standing in beautifully renovated modern home with wooden furniture and bright natural lighting",
    quote: "Renovating our home was a dream come true, and Vastav made it seamless. From material selection to installation support, their team guided us every step. The quality of furniture and materials exceeded our expectations. Highly recommended!",
    rating: 5,
    projectsCompleted: 1,
    videoThumbnail: "https://images.unsplash.com/photo-1628843226341-c1976f3957ad",
    videoThumbnailAlt: "Beautiful home renovation transformation showing modern kitchen with premium wooden cabinets and marble countertops in bright contemporary residential space"
  },
  {
    name: "Rajesh Contractor",
    role: "Building Contractor",
    company: "Skyline Constructions",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dedfe473-1763295924083.png",
    imageAlt: "Professional photograph of Indian building contractor Rajesh in white hard hat and safety vest examining construction materials at active building site",
    quote: "As a contractor handling multiple projects simultaneously, reliability is crucial. Vastav's timely delivery, competitive pricing, and consistent quality have made them our go-to supplier. Their bulk order handling is exceptional.",
    rating: 5,
    projectsCompleted: 120,
    videoThumbnail: "https://images.unsplash.com/photo-1704150378802-6493bfda0aea",
    videoThumbnailAlt: "Large-scale commercial construction project showing modern office building interior with premium materials and professional installation work in progress"
  }];


  const stats = [
  { icon: "Users", value: "500+", label: "Happy Clients" },
  { icon: "Star", value: "4.9/5", label: "Average Rating" },
  { icon: "Award", value: "15+", label: "Industry Awards" },
  { icon: "TrendingUp", value: "95%", label: "Client Retention" }];


  return (
    <section className="py-xl bg-background">
      <div className="container-custom">
        <div className="text-center mb-lg">
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from our valued clients about their experience partnering with Vastav Marketing
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-xl">
          {stats?.map((stat, index) =>
          <div
            key={index}
            className="text-center animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}>

              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={28} color="var(--color-primary)" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          )}
        </div>

        <div className="space-y-lg">
          {testimonials?.map((testimonial, index) =>
          <div
            key={index}
            className="bg-card rounded-lg overflow-hidden shadow-brand hover:shadow-brand-hover transition-brand animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <Image
                  src={testimonial?.videoThumbnail}
                  alt={testimonial?.videoThumbnailAlt}
                  className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-r from-card/80 to-transparent lg:hidden"></div>
                  <button
                  onClick={() => setActiveVideo(activeVideo === index ? null : index)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-brand"
                  aria-label="Play testimonial video">

                    <Icon name="Play" size={24} color="white" className="ml-1" />
                  </button>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                  )}
                  </div>

                  <blockquote className="text-muted-foreground text-lg mb-6 italic">
                    "{testimonial?.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <Image
                    src={testimonial?.image}
                    alt={testimonial?.imageAlt}
                    className="w-16 h-16 rounded-full object-cover" />

                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
                      <p className="text-sm text-accent">{testimonial?.company}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-success" />
                      <span className="text-sm text-muted-foreground">
                        {testimonial?.projectsCompleted} Projects Completed
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={18} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Long-term Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-xl text-center">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 inline-block">
            <h3 className="heading-primary text-2xl text-foreground mb-4">
              Join Our Growing Family
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Experience the Vastav difference. Let us help transform your space with quality materials and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-brand">

                <Icon name="Phone" size={18} />
                <span>Call Us Now</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-success text-white rounded-md hover:opacity-90 transition-brand">

                <Icon name="MessageCircle" size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;