import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';


const ConsultationForm = ({ onSubmit, selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: selectedService || '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: 'custom-design', label: 'Custom Furniture Design' },
    { value: 'material-selection', label: 'Material Selection Guidance' },
    { value: 'project-planning', label: 'Project Planning' },
    { value: 'installation', label: 'Installation Coordination' },
    { value: 'maintenance', label: 'Maintenance & Care' }
  ];

  const projectTypeOptions = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'office', label: 'Office Space' },
    { value: 'hospitality', label: 'Hospitality' }
  ];

  const budgetOptions = [
    { value: 'under-1l', label: 'Under ₹1 Lakh' },
    { value: '1l-3l', label: '₹1-3 Lakhs' },
    { value: '3l-5l', label: '₹3-5 Lakhs' },
    { value: '5l-10l', label: '₹5-10 Lakhs' },
    { value: 'above-10l', label: 'Above ₹10 Lakhs' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (Within 1 month)' },
    { value: '1-3months', label: '1-3 Months' },
    { value: '3-6months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/?.test(formData?.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData?.serviceType) newErrors.serviceType = 'Please select a service';
    if (!formData?.projectType) newErrors.projectType = 'Please select project type';
    if (!formData?.agreeTerms) newErrors.agreeTerms = 'You must agree to terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        agreeTerms: false
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData?.name}
          onChange={(e) => handleChange('name', e?.target?.value)}
          error={errors?.name}
          required
        />
        
        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          value={formData?.email}
          onChange={(e) => handleChange('email', e?.target?.value)}
          error={errors?.email}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="98765 43210"
          value={formData?.phone}
          onChange={(e) => handleChange('phone', e?.target?.value)}
          error={errors?.phone}
          required
        />
        
        <Select
          label="Service Type"
          options={serviceOptions}
          value={formData?.serviceType}
          onChange={(value) => handleChange('serviceType', value)}
          error={errors?.serviceType}
          placeholder="Select service"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Project Type"
          options={projectTypeOptions}
          value={formData?.projectType}
          onChange={(value) => handleChange('projectType', value)}
          error={errors?.projectType}
          placeholder="Select project type"
          required
        />
        
        <Select
          label="Budget Range"
          options={budgetOptions}
          value={formData?.budget}
          onChange={(value) => handleChange('budget', value)}
          placeholder="Select budget range"
        />
      </div>
      <Select
        label="Project Timeline"
        options={timelineOptions}
        value={formData?.timeline}
        onChange={(value) => handleChange('timeline', value)}
        placeholder="Select timeline"
      />
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Project Details
        </label>
        <textarea
          className="w-full px-4 py-3 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          rows="4"
          placeholder="Tell us about your project requirements..."
          value={formData?.message}
          onChange={(e) => handleChange('message', e?.target?.value)}
        />
      </div>
      <Checkbox
        label="I agree to the terms and conditions and privacy policy"
        checked={formData?.agreeTerms}
        onChange={(e) => handleChange('agreeTerms', e?.target?.checked)}
        error={errors?.agreeTerms}
        required
      />
      <Button
        type="submit"
        variant="default"
        fullWidth
        loading={isSubmitting}
        iconName="Send"
        iconPosition="right"
        iconSize={18}
        className="bg-accent hover:bg-brand-dark-goldenrod"
      >
        {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
      </Button>
    </form>
  );
};

export default ConsultationForm;