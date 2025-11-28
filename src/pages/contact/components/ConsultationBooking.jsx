import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectType: '',
    preferredDate: '',
    preferredTime: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const serviceTypes = [
    { value: 'material-consultation', label: 'Material Consultation' },
    { value: 'custom-furniture', label: 'Custom Furniture Design' },
    { value: 'project-planning', label: 'Project Planning' },
    { value: 'installation-coordination', label: 'Installation Coordination' },
    { value: 'bulk-order', label: 'Bulk Order Inquiry' }
  ];

  const projectTypes = [
    { value: 'residential-kitchen', label: 'Residential - Kitchen' },
    { value: 'residential-bedroom', label: 'Residential - Bedroom' },
    { value: 'residential-living', label: 'Residential - Living Room' },
    { value: 'residential-full', label: 'Residential - Full Home' },
    { value: 'commercial-office', label: 'Commercial - Office' },
    { value: 'commercial-retail', label: 'Commercial - Retail Space' },
    { value: 'commercial-hospitality', label: 'Commercial - Hospitality' }
  ];

  const budgetRanges = [
    { value: 'under-1lakh', label: 'Under ₹1 Lakh' },
    { value: '1-3lakh', label: '₹1 - 3 Lakhs' },
    { value: '3-5lakh', label: '₹3 - 5 Lakhs' },
    { value: '5-10lakh', label: '₹5 - 10 Lakhs' },
    { value: 'above-10lakh', label: 'Above ₹10 Lakhs' }
  ];

  const timeSlots = [
    { value: '09:00-11:00', label: '9:00 AM - 11:00 AM' },
    { value: '11:00-13:00', label: '11:00 AM - 1:00 PM' },
    { value: '13:00-15:00', label: '1:00 PM - 3:00 PM' },
    { value: '15:00-17:00', label: '3:00 PM - 5:00 PM' },
    { value: '17:00-19:00', label: '5:00 PM - 7:00 PM' }
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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/?.test(formData?.phone)) {
      newErrors.phone = 'Invalid phone number (10 digits starting with 6-9)';
    }
    if (!formData?.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData?.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData?.preferredDate) newErrors.preferredDate = 'Please select a date';
    if (!formData?.preferredTime) newErrors.preferredTime = 'Please select a time slot';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        projectType: '',
        preferredDate: '',
        preferredTime: '',
        budget: '',
        message: ''
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Calendar" size={18} color="var(--color-accent)" />
              <span className="text-sm font-medium text-accent">Free Consultation</span>
            </div>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
              Book Your Expert Consultation
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule a personalized session with our material experts and design consultants
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-brand p-8 lg:p-12">
            {submitSuccess && (
              <div className="mb-8 p-6 bg-success/10 border border-success/20 rounded-lg flex items-start space-x-4 animate-fade-in">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="CheckCircle" size={24} color="var(--color-success)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Consultation Booked Successfully!</h4>
                  <p className="text-sm text-muted-foreground">
                    Thank you for booking with Vastav Marketing. Our team will contact you within 2 hours to confirm your appointment details.
                  </p>
                </div>
              </div>
            )}

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

              <Input
                label="Phone Number"
                type="tel"
                placeholder="98765 43210"
                value={formData?.phone}
                onChange={(e) => handleChange('phone', e?.target?.value)}
                error={errors?.phone}
                description="10-digit mobile number"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Service Type"
                  placeholder="Select service"
                  options={serviceTypes}
                  value={formData?.serviceType}
                  onChange={(value) => handleChange('serviceType', value)}
                  error={errors?.serviceType}
                  required
                />

                <Select
                  label="Project Type"
                  placeholder="Select project type"
                  options={projectTypes}
                  value={formData?.projectType}
                  onChange={(value) => handleChange('projectType', value)}
                  error={errors?.projectType}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Preferred Date"
                  type="date"
                  value={formData?.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e?.target?.value)}
                  error={errors?.preferredDate}
                  min={new Date()?.toISOString()?.split('T')?.[0]}
                  required
                />

                <Select
                  label="Preferred Time"
                  placeholder="Select time slot"
                  options={timeSlots}
                  value={formData?.preferredTime}
                  onChange={(value) => handleChange('preferredTime', value)}
                  error={errors?.preferredTime}
                  required
                />
              </div>

              <Select
                label="Budget Range (Optional)"
                placeholder="Select your budget range"
                options={budgetRanges}
                value={formData?.budget}
                onChange={(value) => handleChange('budget', value)}
                description="This helps us prepare relevant material options"
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Details (Optional)
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground resize-none"
                  rows="4"
                  placeholder="Tell us about your project requirements, timeline, or any specific questions..."
                  value={formData?.message}
                  onChange={(e) => handleChange('message', e?.target?.value)}
                />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <Icon name="Info" size={20} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Our consultation is completely free with no obligations. We'll discuss your requirements, show material samples, and provide expert recommendations tailored to your project.
                </p>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Calendar"
                iconPosition="left"
                className="bg-accent hover:bg-brand-dark-goldenrod"
              >
                {isSubmitting ? 'Booking Consultation...' : 'Book Free Consultation'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;