import React from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FilterSection = ({
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  selectedBudget,
  setSelectedBudget,
  searchQuery,
  setSearchQuery,
  onReset
}) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'office', label: 'Office' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'living-room', label: 'Living Room' },
    { value: 'bathroom', label: 'Bathroom' }
  ];

  const locationOptions = [
    { value: 'all', label: 'All Locations' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'pune', label: 'Pune' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'chennai', label: 'Chennai' }
  ];

  const budgetOptions = [
    { value: 'all', label: 'All Budgets' },
    { value: 'under-5', label: 'Under ₹5 Lakhs' },
    { value: '5-10', label: '₹5-10 Lakhs' },
    { value: '10-20', label: '₹10-20 Lakhs' },
    { value: '20-50', label: '₹20-50 Lakhs' },
    { value: 'above-50', label: 'Above ₹50 Lakhs' }
  ];

  return (
    <div className="bg-card rounded-xl shadow-brand p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2">
          <Icon name="Filter" size={24} className="text-primary" />
          Filter Projects
        </h2>
        <Button
          variant="ghost"
          size="sm"
          iconName="RotateCcw"
          iconPosition="left"
          iconSize={16}
          onClick={onReset}
        >
          Reset Filters
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          type="search"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
          className="w-full"
        />

        <Select
          options={categoryOptions}
          value={selectedCategory}
          onChange={setSelectedCategory}
          placeholder="Select category"
        />

        <Select
          options={locationOptions}
          value={selectedLocation}
          onChange={setSelectedLocation}
          placeholder="Select location"
        />

        <Select
          options={budgetOptions}
          value={selectedBudget}
          onChange={setSelectedBudget}
          placeholder="Select budget"
        />
      </div>
    </div>
  );
};

export default FilterSection;