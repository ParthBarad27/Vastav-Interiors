import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ product, onClose, onRequestSample, onGetQuote }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const images = [
    { src: product?.image, alt: product?.imageAlt },
    { src: product?.image, alt: `${product?.name} alternative view showing different angle and lighting` },
    { src: product?.image, alt: `${product?.name} close-up detail shot highlighting texture and finish quality` },
    { src: product?.image, alt: `${product?.name} installation example in modern interior setting with natural light` }
  ];

  const specifications = [
    { label: 'Material', value: product?.specifications?.material || 'Premium Quality' },
    { label: 'Dimensions', value: product?.specifications?.dimensions || 'Standard Size' },
    { label: 'Finish', value: product?.specifications?.finish || 'Polished' },
    { label: 'Warranty', value: product?.specifications?.warranty || '1 Year' },
    { label: 'Origin', value: product?.specifications?.origin || 'India' },
    { label: 'Installation', value: product?.specifications?.installation || 'Professional Required' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card rounded-lg shadow-brand max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Close modal"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <div className="space-y-4">
            <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
              <Image
                src={images?.[selectedImage]?.src}
                alt={images?.[selectedImage]?.alt}
                className="w-full h-full object-cover"
              />
              {product?.badge && (
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-md text-xs font-semibold">
                  {product?.badge}
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2">
              {images?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-primary' :'border-border hover:border-muted-foreground'
                  }`}
                >
                  <Image
                    src={img?.src}
                    alt={img?.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{product?.category}</p>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                {product?.name}
              </h2>
              <p className="text-sm text-muted-foreground">{product?.brand}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < Math.floor(product?.rating) ? "fill-accent text-accent" : "text-muted"}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product?.rating} ({product?.reviews} reviews)
              </span>
            </div>

            <div className="border-t border-b border-border py-4">
              <div className="flex items-baseline space-x-2 mb-2">
                <p className="text-3xl font-bold text-primary">
                  ₹{product?.price?.toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-muted-foreground">{product?.unit}</p>
              </div>
              {product?.inStock ? (
                <span className="flex items-center text-sm text-success">
                  <Icon name="CheckCircle" size={16} className="mr-1" />
                  In Stock - Ready to Ship
                </span>
              ) : (
                <span className="flex items-center text-sm text-error">
                  <Icon name="XCircle" size={16} className="mr-1" />
                  Currently Out of Stock
                </span>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-sm text-foreground mb-3">Description</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product?.description || `Premium quality ${product?.name} from ${product?.brand}. Perfect for modern interiors with exceptional durability and aesthetic appeal. Suitable for residential and commercial applications.`}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-foreground mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-3">
                {specifications?.map((spec, index) => (
                  <div key={index} className="bg-muted/50 rounded-md p-3">
                    <p className="text-xs text-muted-foreground mb-1">{spec?.label}</p>
                    <p className="text-sm font-medium text-foreground">{spec?.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-input rounded-md flex items-center justify-center hover:bg-muted transition-colors"
                  disabled={quantity <= 1}
                >
                  <Icon name="Minus" size={16} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e?.target?.value) || 1))}
                  className="w-20 px-3 py-2 border border-input rounded-md text-center text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-input rounded-md flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                fullWidth
                iconName="FileText"
                iconPosition="left"
                iconSize={18}
                onClick={() => onGetQuote(product)}
                disabled={!product?.inStock}
              >
                Get Quote
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="Package"
                iconPosition="left"
                iconSize={18}
                onClick={() => onRequestSample(product)}
                disabled={!product?.inStock}
                className="bg-accent hover:bg-brand-dark-goldenrod"
              >
                Request Sample
              </Button>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Truck" size={16} className="text-primary" />
                <span className="text-foreground">Free delivery on orders above ₹50,000</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Shield" size={16} className="text-primary" />
                <span className="text-foreground">Quality assured with manufacturer warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Headphones" size={16} className="text-primary" />
                <span className="text-foreground">24/7 customer support available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;