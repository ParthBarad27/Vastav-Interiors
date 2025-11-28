import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const BrandShowcase = () => {
  const brands = [
  {
    id: 1,
    name: "Asian Paints",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_15f4f65b3-1764177358185.png",
    logoAlt: "Asian Paints brand logo featuring red and white color scheme with modern typography",
    description: "India\'s leading paint manufacturer",
    products: 45,
    exclusive: true
  },
  {
    id: 2,
    name: "Godrej Interio",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19fe95094-1764177357509.png",
    logoAlt: "Godrej Interio brand logo with distinctive green corporate identity and professional design",
    description: "Premium furniture solutions",
    products: 38,
    exclusive: false
  },
  {
    id: 3,
    name: "Häfele",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8032525-1764177358597.png",
    logoAlt: "Häfele international brand logo showcasing German engineering excellence in blue and white",
    description: "German hardware excellence",
    products: 52,
    exclusive: true
  },
  {
    id: 4,
    name: "Hettich",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1621946bd-1764177356540.png",
    logoAlt: "Hettich brand logo representing premium furniture fittings with red corporate color",
    description: "World-class furniture fittings",
    products: 41,
    exclusive: false
  },
  {
    id: 5,
    name: "EBCO",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11d3fee72-1764177358587.png",
    logoAlt: "EBCO brand logo featuring modern design for architectural hardware solutions",
    description: "Architectural hardware solutions",
    products: 29,
    exclusive: true
  },
  {
    id: 6,
    name: "Century Plyboards",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f00be25f-1764177357225.png",
    logoAlt: "Century Plyboards brand logo with distinctive orange and black color scheme representing quality wood products",
    description: "Premium plywood & laminates",
    products: 33,
    exclusive: false
  }];


  return (
    <section className="py-xl bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-lg">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Brand Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with world-renowned brands to bring you the finest quality materials and products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands?.map((brand) =>
          <div
            key={brand?.id}
            className="bg-card border border-border rounded-lg p-6 hover-lift group">

              <div className="flex items-start justify-between mb-4">
                <div className="w-20 h-20 bg-background rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                  src={brand?.logo}
                  alt={brand?.logoAlt}
                  className="w-full h-full object-contain p-2" />

                </div>
                {brand?.exclusive &&
              <span className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-md">
                    Exclusive
                  </span>
              }
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {brand?.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {brand?.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  {brand?.products} Products
                </span>
                <button className="flex items-center space-x-1 text-sm text-primary hover:text-primary/80 transition-colors group">
                  <span>View Products</span>
                  <Icon
                  name="ArrowRight"
                  size={16}
                  className="group-hover:translate-x-1 transition-transform" />

                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-lg bg-card border border-border rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={28} color="var(--color-primary)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Quality Certified</h4>
              <p className="text-sm text-muted-foreground">
                All products meet international quality standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={28} color="var(--color-primary)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Warranty Protected</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive warranty coverage on all branded products
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={28} color="var(--color-primary)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Expert Support</h4>
              <p className="text-sm text-muted-foreground">
                Dedicated support team for product guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default BrandShowcase;