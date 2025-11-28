import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: 'All Projects', icon: 'LayoutGrid', count: 48 },
    { id: 'kitchen', label: 'Kitchen', icon: 'ChefHat', count: 12 },
    { id: 'bedroom', label: 'Bedroom', icon: 'Bed', count: 15 },
    { id: 'office', label: 'Office', icon: 'Briefcase', count: 8 },
    { id: 'commercial', label: 'Commercial', icon: 'Building2', count: 7 },
    { id: 'living-room', label: 'Living Room', icon: 'Sofa', count: 6 }
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-brand'
                : 'bg-card text-foreground hover:bg-muted'
            }`}
          >
            <Icon name={category?.icon} size={18} />
            <span>{category?.label}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                activeCategory === category?.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {category?.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;