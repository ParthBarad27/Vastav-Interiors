import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MaterialCategoriesSection = () => {
  const categories = [
  {
    id: 1,
    name: "Premium Furniture",
    image: "https://images.unsplash.com/photo-1692216703713-c47e454cfade",
    imageAlt: "Elegant modern sofa with plush gray upholstery, wooden legs, and decorative cushions in contemporary living room setting",
    icon: "Sofa",
    description: "Custom sofas, beds, dining sets",
    itemCount: "500+ Products"
  },
  {
    id: 2,
    name: "Wood & Laminates",
    image: "https://images.unsplash.com/photo-1537833491931-86939f1ecd20",
    imageAlt: "Close-up of premium wood grain texture showing natural patterns, rich brown tones, and smooth finish on laminate surface",
    icon: "Layers",
    description: "Veneers, plywoods, decorative laminates",
    itemCount: "300+ Varieties"
  },
  {
    id: 3,
    name: "Hardware & Fittings",
    image: "https://images.unsplash.com/photo-1568799714961-714c306e1ac6",
    imageAlt: "Polished brass door handle with modern cylindrical design mounted on white door showing premium metallic finish",
    icon: "Wrench",
    description: "Handles, hinges, drawer systems",
    itemCount: "1000+ Items"
  },
  {
    id: 4,
    name: "Lighting Solutions",
    image: "https://images.unsplash.com/photo-1681237753646-036120789940",
    imageAlt: "Contemporary pendant light fixture with geometric design, warm LED glow, and brushed metal finish hanging in modern interior",
    icon: "Lightbulb",
    description: "Chandeliers, LED panels, decorative lights",
    itemCount: "250+ Options"
  },
  {
    id: 5,
    name: "Flooring Materials",
    image: "https://images.unsplash.com/photo-1620740558030-10eda7374066",
    imageAlt: "Luxury vinyl flooring with realistic wood grain pattern in warm oak tones installed in spacious modern room",
    icon: "Grid3x3",
    description: "Tiles, vinyl, wooden flooring",
    itemCount: "400+ Designs"
  },
  {
    id: 6,
    name: "Wall Finishes",
    image: "https://images.unsplash.com/photo-1570748494944-9683b21d4521",
    imageAlt: "Textured wall panel with three-dimensional wave pattern in neutral beige color creating sophisticated interior accent",
    icon: "PaintBucket",
    description: "Wallpapers, panels, decorative paints",
    itemCount: "350+ Patterns"
  }];


  return (
    <section className="py-xl bg-background">
      <div className="container-custom">
        <div className="text-center mb-lg">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Our Categories
          </span>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            Explore Premium Materials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality furniture and interior materials\ncurated for contractors, designers, and discerning homeowners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories?.map((category, index) =>
          <Link
            key={category?.id}
            to="/products"
            className="group relative overflow-hidden rounded-xl bg-card border border-border hover-lift animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}>

              <div className="relative h-64 overflow-hidden">
                <Image
                src={category?.image}
                alt={category?.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name={category?.icon} size={24} color="white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="heading-primary text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category?.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {category?.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-accent">
                    {category?.itemCount}
                  </span>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span className="mr-2">Explore</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="text-center mt-lg">
          <Link to="/products">
            <button className="btn-accent inline-flex items-center space-x-2">
              <span>View All Products</span>
              <Icon name="ArrowRight" size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>);

};

export default MaterialCategoriesSection;