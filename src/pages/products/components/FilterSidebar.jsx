import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters,
  isMobileOpen,
  onMobileClose 
}) => {
  const handlePriceChange = (type, value) => {
    onFilterChange('priceRange', {
      ...filters?.priceRange,
      [type]: parseInt(value) || 0
    });
  };

  const handleCategoryToggle = (category) => {
    const newCategories = filters?.categories?.includes(category)
      ? filters?.categories?.filter(c => c !== category)
      : [...filters?.categories, category];
    onFilterChange('categories', newCategories);
  };

  const handleBrandToggle = (brand) => {
    const newBrands = filters?.brands?.includes(brand)
      ? filters?.brands?.filter(b => b !== brand)
      : [...filters?.brands, brand];
    onFilterChange('brands', newBrands);
  };

  const handleMaterialToggle = (material) => {
    const newMaterials = filters?.materials?.includes(material)
      ? filters?.materials?.filter(m => m !== material)
      : [...filters?.materials, material];
    onFilterChange('materials', newMaterials);
  };

  const categories = [
    { id: 'furniture', label: 'Furniture', count: 156 },
    { id: 'flooring', label: 'Flooring', count: 89 },
    { id: 'wall-panels', label: 'Wall Panels', count: 67 },
    { id: 'doors', label: 'Doors & Windows', count: 45 },
    { id: 'hardware', label: 'Hardware', count: 234 },
    { id: 'lighting', label: 'Lighting', count: 123 }
  ];

  const brands = [
    { id: 'asian-paints', label: 'Asian Paints', count: 45 },
    { id: 'godrej', label: 'Godrej Interio', count: 38 },
    { id: 'hafele', label: 'Häfele', count: 52 },
    { id: 'hettich', label: 'Hettich', count: 41 },
    { id: 'ebco', label: 'EBCO', count: 29 },
    { id: 'century', label: 'Century Plyboards', count: 33 }
  ];

  const materials = [
    { id: 'wood', label: 'Solid Wood' },
    { id: 'plywood', label: 'Plywood' },
    { id: 'mdf', label: 'MDF' },
    { id: 'laminate', label: 'Laminate' },
    { id: 'veneer', label: 'Veneer' },
    { id: 'metal', label: 'Metal' }
  ];

  const sidebarContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          iconName="X"
          iconPosition="left"
          iconSize={16}
        >
          Clear All
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-3">Price Range</h4>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Min Price (₹)</label>
              <input
                type="number"
                value={filters?.priceRange?.min}
                onChange={(e) => handlePriceChange('min', e?.target?.value)}
                className="w-full px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="0"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Max Price (₹)</label>
              <input
                type="number"
                value={filters?.priceRange?.max}
                onChange={(e) => handlePriceChange('max', e?.target?.value)}
                className="w-full px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="100000"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <h4 className="font-semibold text-sm text-foreground mb-3">Categories</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {categories?.map(category => (
              <Checkbox
                key={category?.id}
                label={
                  <span className="flex items-center justify-between w-full">
                    <span>{category?.label}</span>
                    <span className="text-xs text-muted-foreground">({category?.count})</span>
                  </span>
                }
                checked={filters?.categories?.includes(category?.id)}
                onChange={() => handleCategoryToggle(category?.id)}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <h4 className="font-semibold text-sm text-foreground mb-3">Brands</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {brands?.map(brand => (
              <Checkbox
                key={brand?.id}
                label={
                  <span className="flex items-center justify-between w-full">
                    <span>{brand?.label}</span>
                    <span className="text-xs text-muted-foreground">({brand?.count})</span>
                  </span>
                }
                checked={filters?.brands?.includes(brand?.id)}
                onChange={() => handleBrandToggle(brand?.id)}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <h4 className="font-semibold text-sm text-foreground mb-3">Material Type</h4>
          <div className="space-y-2">
            {materials?.map(material => (
              <Checkbox
                key={material?.id}
                label={material?.label}
                checked={filters?.materials?.includes(material?.id)}
                onChange={() => handleMaterialToggle(material?.id)}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <h4 className="font-semibold text-sm text-foreground mb-3">Availability</h4>
          <Checkbox
            label="In Stock Only"
            checked={filters?.inStockOnly}
            onChange={(e) => onFilterChange('inStockOnly', e?.target?.checked)}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block sticky top-24">
        <div className="bg-card border border-border rounded-lg p-6">
          {sidebarContent}
        </div>
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onMobileClose}
          />
          <div className="absolute inset-y-0 left-0 w-80 bg-card border-r border-border overflow-y-auto">
            <div className="p-6">
              <button
                onClick={onMobileClose}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-md transition-colors"
                aria-label="Close filters"
              >
                <Icon name="X" size={20} />
              </button>
              {sidebarContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;