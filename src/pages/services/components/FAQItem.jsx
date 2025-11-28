import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted transition-colors text-left"
      >
        <span className="heading-primary text-base text-foreground pr-4">
          {faq?.question}
        </span>
        <Icon
          name="ChevronDown"
          size={20}
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 bg-background border-t border-border">
          <p className="body-text text-muted-foreground text-sm leading-relaxed">
            {faq?.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;