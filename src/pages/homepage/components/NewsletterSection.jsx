import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    
    if (!email?.trim()) {
      setError('Email is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setEmail('');

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1000);
  };

  const benefits = [
    {
      icon: "TrendingUp",
      text: "Latest design trends and material innovations"
    },
    {
      icon: "Tag",
      text: "Exclusive offers and seasonal discounts"
    },
    {
      icon: "BookOpen",
      text: "Expert tips and project inspiration"
    },
    {
      icon: "Bell",
      text: "New product launches and updates"
    }
  ];

  return (
    <section className="py-xl bg-gradient-to-br from-primary to-brand-dark-goldenrod text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Icon name="Mail" size={32} color="white" />
            </div>
            <h2 className="heading-display text-4xl md:text-5xl mb-4">
              Stay Updated with Design Trends
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive insights, material guides,\nand special offers delivered to your inbox
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            {benefits?.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-left bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name={benefit?.icon} size={20} color="white" />
                </div>
                <span className="text-sm font-medium">{benefit?.text}</span>
              </div>
            ))}
          </div>

          {success ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 animate-fade-in">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle2" size={32} color="white" />
              </div>
              <h3 className="heading-primary text-2xl mb-2">
                Successfully Subscribed!
              </h3>
              <p className="text-white/90">
                Thank you for subscribing. Check your inbox for a welcome email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e?.target?.value);
                      setError('');
                    }}
                    error={error}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="bg-white text-primary hover:bg-white/90 sm:w-auto w-full"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-white/70 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;