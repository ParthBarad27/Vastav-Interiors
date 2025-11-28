import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1676213185722-252caa34d1ae",
    imageAlt: "Luxurious modern living room with premium wooden furniture, elegant brown leather sofa, marble coffee table, and warm ambient lighting creating sophisticated atmosphere",
    title: "Transform Your Space with Premium Materials",
    subtitle: "Where Vision Meets Craftsmanship",
    description: "Discover our curated collection of premium furniture and interior materials that bring your design dreams to life",
    cta: "Explore Products",
    ctaLink: "/products"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1721738857942-229f8608f7ce",
    imageAlt: "Contemporary bedroom interior featuring custom wooden wardrobe with intricate grain patterns, plush bedding, and modern minimalist design elements",
    title: "Expert Guidance for Every Project",
    subtitle: "Quality Materials, Lasting Relationships",
    description: "Partner with our experienced team to select the perfect materials for residential and commercial spaces",
    cta: "View Projects",
    ctaLink: "/projects"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1699621106755-4fe40ce95d64",
    imageAlt: "Elegant office space with rich mahogany desk, executive leather chair, built-in bookshelves, and professional lighting showcasing premium craftsmanship",
    title: "Trusted by Professionals Across India",
    subtitle: "Transforming Spaces Since 2010",
    description: "Join thousands of contractors, designers, and homeowners who trust Vastav Marketing for quality and reliability",
    cta: "Book Consultation",
    ctaLink: "/contact"
  }];


  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        {heroSlides?.map((slide, index) =>
        <div
          key={slide?.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'}`
          }>

            <Image
            src={slide?.image}
            alt={slide?.imageAlt}
            className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        )}
      </div>
      <div className="relative h-full container-custom flex items-center">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold rounded-full border border-accent/30">
              {heroSlides?.[currentSlide]?.subtitle}
            </span>
          </div>

          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {heroSlides?.[currentSlide]?.title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            {heroSlides?.[currentSlide]?.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to={heroSlides?.[currentSlide]?.ctaLink}>
              <Button
                size="lg"
                className="bg-accent hover:bg-brand-dark-goldenrod text-white"
                iconName="ArrowRight"
                iconPosition="right">

                {heroSlides?.[currentSlide]?.cta}
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                iconName="Phone"
                iconPosition="left">

                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 z-10"
        aria-label="Previous slide">

        <Icon name="ChevronLeft" size={24} color="white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 z-10"
        aria-label="Next slide">

        <Icon name="ChevronRight" size={24} color="white" />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides?.map((_, index) =>
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
          index === currentSlide ?
          'w-12 bg-accent' : 'w-2 bg-white/50 hover:bg-white/70'}`
          }
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>
    </section>);

};

export default HeroSection;