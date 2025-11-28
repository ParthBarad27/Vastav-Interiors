import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypeOptions = [
    { value: 'residential', label: 'Residential Project' },
    { value: 'commercial', label: 'Commercial Project' },
    { value: 'hospitality', label: 'Hospitality Project' },
    { value: 'renovation', label: 'Renovation' },
    { value: 'consultation', label: 'General Consultation' }
  ];

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, projectType: value }));
    if (errors?.projectType) {
      setErrors(prev => ({ ...prev, projectType: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData?.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors)?.length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const features = [
    {
      icon: "Calendar",
      title: "Free Consultation",
      description: "Schedule a complimentary consultation with our experts"
    },
    {
      icon: "Users",
      title: "Expert Guidance",
      description: "Get personalized recommendations from experienced professionals"
    },
    {
      icon: "Clock",
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: "Award",
      title: "Quality Assurance",
      description: "Premium materials backed by manufacturer warranties"
    }
  ];

  return (
    <section className="py-xl bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Get Started
            </span>
            <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let our experts guide you through material selection and project planning.\nTransform your space with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={feature?.icon} size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors"
              >
                <Icon name="Phone" size={20} />
                <span className="font-medium">+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@vastavmarketing.com"
                className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors"
              >
                <Icon name="Mail" size={20} />
                <span className="font-medium">info@vastavmarketing.com</span>
              </a>
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-brand p-8 border border-border">
            {submitSuccess ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle2" size={32} color="var(--color-success)" />
                </div>
                <h3 className="heading-primary text-2xl text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your consultation request has been received.\nOur team will contact you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitSuccess(false)}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="heading-primary text-2xl text-foreground mb-6">
                  Request Consultation
                </h3>

                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData?.name}
                  onChange={handleChange}
                  error={errors?.name}
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={handleChange}
                  error={errors?.email}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="98765 43210"
                  value={formData?.phone}
                  onChange={handleChange}
                  error={errors?.phone}
                  required
                />

                <Select
                  label="Project Type"
                  placeholder="Select your project type"
                  options={projectTypeOptions}
                  value={formData?.projectType}
                  onChange={handleSelectChange}
                  error={errors?.projectType}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project requirements..."
                    value={formData?.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="bg-accent hover:bg-brand-dark-goldenrod"
                >
                  {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;