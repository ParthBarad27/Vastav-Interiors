import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onQuickView, onAddToWishlist, isWishlisted }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover-lift group">
      <div className="relative h-64 overflow-hidden bg-muted">
        <Image
          src={product?.image}
          alt={product?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product?.badge && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-md text-xs font-semibold">
            {product?.badge}
          </div>
        )}
        <button
          onClick={() => onAddToWishlist(product?.id)}
          className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Icon 
            name={isWishlisted ? "Heart" : "Heart"} 
            size={18}
            className={isWishlisted ? "fill-current" : ""}
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="default"
            size="sm"
            fullWidth
            iconName="Eye"
            iconPosition="left"
            iconSize={16}
            onClick={() => onQuickView(product)}
            className="bg-primary hover:bg-primary/90"
          >
            Quick View
          </Button>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1">{product?.category}</p>
            <h3 className="font-display text-base font-semibold text-foreground line-clamp-2 mb-1">
              {product?.name}
            </h3>
            <p className="text-xs text-muted-foreground">{product?.brand}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < Math.floor(product?.rating) ? "fill-accent text-accent" : "text-muted"}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product?.reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-lg font-bold text-primary">₹{product?.price?.toLocaleString('en-IN')}</p>
            <p className="text-xs text-muted-foreground">{product?.unit}</p>
          </div>
          {product?.inStock ? (
            <span className="flex items-center text-xs text-success">
              <Icon name="CheckCircle" size={14} className="mr-1" />
              In Stock
            </span>
          ) : (
            <span className="flex items-center text-xs text-error">
              <Icon name="XCircle" size={14} className="mr-1" />
              Out of Stock
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            iconName="FileText"
            iconPosition="left"
            iconSize={16}
            disabled={!product?.inStock}
          >
            Get Quote
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Package"
            iconPosition="left"
            iconSize={16}
            disabled={!product?.inStock}
            className="bg-accent hover:bg-brand-dark-goldenrod"
          >
            Sample
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;