import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: '',
    message: '',
    preferredContact: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const inquiryTypes = [
    { value: 'product-inquiry', label: 'Product Inquiry' },
    { value: 'quote-request', label: 'Quote Request' },
    { value: 'project-consultation', label: 'Project Consultation' },
    { value: 'bulk-order', label: 'Bulk Order' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'support', label: 'Customer Support' },
    { value: 'other', label: 'Other' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp' }
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
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData?.subject?.trim()) newErrors.subject = 'Subject is required';
    if (!formData?.inquiryType) newErrors.inquiryType = 'Please select inquiry type';
    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

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
        subject: '',
        inquiryType: '',
        message: '',
        preferredContact: ''
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you within 4-6 hours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl shadow-brand p-8">
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-start space-x-3 animate-fade-in">
                    <Icon name="CheckCircle" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">Message Sent Successfully!</h4>
                      <p className="text-xs text-muted-foreground">
                        We've received your inquiry and will respond within 4-6 hours.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="Enter your name"
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
                      label="Inquiry Type"
                      placeholder="Select inquiry type"
                      options={inquiryTypes}
                      value={formData?.inquiryType}
                      onChange={(value) => handleChange('inquiryType', value)}
                      error={errors?.inquiryType}
                      required
                    />
                  </div>

                  <Input
                    label="Subject"
                    type="text"
                    placeholder="Brief subject of your inquiry"
                    value={formData?.subject}
                    onChange={(e) => handleChange('subject', e?.target?.value)}
                    error={errors?.subject}
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground resize-none ${
                        errors?.message ? 'border-destructive' : 'border-input'
                      }`}
                      rows="5"
                      placeholder="Describe your requirements, questions, or project details..."
                      value={formData?.message}
                      onChange={(e) => handleChange('message', e?.target?.value)}
                    />
                    {errors?.message && (
                      <p className="mt-1 text-xs text-destructive">{errors?.message}</p>
                    )}
                    <p className="mt-1 text-xs text-muted-foreground">
                      Minimum 20 characters required
                    </p>
                  </div>

                  <Select
                    label="Preferred Contact Method (Optional)"
                    placeholder="How would you like us to contact you?"
                    options={contactMethods}
                    value={formData?.preferredContact}
                    onChange={(value) => handleChange('preferredContact', value)}
                  />

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    iconName="Send"
                    iconPosition="right"
                    className="bg-primary hover:opacity-90"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-xl shadow-brand p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Email inquiries: 4-6 hours\nPhone/WhatsApp: Within 2 hours\nConsultation bookings: Instant confirmation
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-brand p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Privacy Assured</h3>
                    <p className="text-sm text-muted-foreground">
                      Your information is secure and will only be used to respond to your inquiry. We never share your details with third parties.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
                <h3 className="font-semibold text-foreground mb-3">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent inquiries, call us directly or chat on WhatsApp for instant assistance.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Icon name="Phone" size={16} />
                    <span>+91 98765 43210</span>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    className="flex items-center space-x-2 text-sm text-success hover:text-success/80 transition-colors"
                  >
                    <Icon name="MessageCircle" size={16} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;