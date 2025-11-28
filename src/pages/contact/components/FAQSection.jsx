import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the typical response time for inquiries?",
      answer: "We respond to email inquiries within 4-6 hours during business hours. Phone calls and WhatsApp messages receive responses within 2 hours. For consultation bookings, you'll receive instant confirmation with follow-up details within 1 hour."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we provide completely free consultations with no obligations. Our expert team will discuss your requirements, show material samples, provide design recommendations, and offer detailed quotations. You can book consultations at our showroom or request on-site visits for larger projects."
    },
    {
      question: "Can I visit the showroom without an appointment?",
      answer: "Absolutely! Our showroom is open Monday-Saturday (10 AM - 8 PM) and Sunday (11 AM - 6 PM) for walk-in visits. However, we recommend booking an appointment to ensure dedicated time with our consultants and avoid waiting during busy periods."
    },
    {
      question: "What information should I provide for accurate quotes?",
      answer: "For accurate quotations, please share: project type and scope, preferred materials or styles, approximate dimensions or area, budget range, and timeline requirements. Photos of the space and any design references are also helpful. The more details you provide, the more precise our recommendations will be."
    },
    {
      question: "Do you provide material samples?",
      answer: "Yes, we offer material samples for evaluation. Small samples are available free of charge at our showroom. For larger samples or multiple material options, we can arrange delivery with a refundable deposit. This helps you make confident decisions by seeing and feeling the materials in your actual space."
    },
    {
      question: "What areas do you serve for consultations and delivery?",
      answer: "We serve Mumbai and surrounding areas including Navi Mumbai, Thane, and Pune. For projects outside these areas, we can arrange consultations via video call and coordinate delivery through our logistics partners. Bulk orders and commercial projects may have extended service areas."
    },
    {
      question: "How long does it take to receive a quotation?",
      answer: "Standard quotations are provided within 24-48 hours after consultation or inquiry. Complex custom projects may require 3-5 business days for detailed quotations. Rush quotations can be arranged for urgent projects with prior notice."
    },
    {
      question: "Can I make changes to my order after confirmation?",
      answer: "Yes, modifications are possible before production begins. Once materials are ordered or custom work has started, changes may incur additional costs and timeline adjustments. We recommend finalizing all details during the consultation phase to avoid complications."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="HelpCircle" size={18} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">Common Questions</span>
            </div>
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services and processes
            </p>
          </div>

          <div className="space-y-4">
            {faqs?.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-brand border border-border overflow-hidden transition-all duration-300 hover:shadow-brand-hover"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-muted/30"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq?.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <Icon 
                      name="ChevronDown" 
                      size={20} 
                      color="var(--color-primary)" 
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq?.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10 text-center">
            <Icon name="MessageSquare" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
            <h3 className="font-semibold text-foreground text-xl mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Reach out through any of our contact channels and we'll provide personalized answers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-200"
              >
                <Icon name="Phone" size={18} />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-success text-success-foreground rounded-lg hover:opacity-90 transition-all duration-200"
              >
                <Icon name="MessageCircle" size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:info@vastavmarketing.com"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-brand-dark-goldenrod transition-all duration-200"
              >
                <Icon name="Mail" size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;