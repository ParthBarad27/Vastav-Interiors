import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Projects', path: '/projects' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'Furniture', path: '/products' },
        { label: 'Interior Materials', path: '/products' },
        { label: 'Custom Solutions', path: '/products' },
        { label: 'Bulk Orders', path: '/products' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Material Guides', path: '/services' },
        { label: 'Design Tips', path: '/services' },
        { label: 'Project Gallery', path: '/projects' },
        { label: 'Consultation', path: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'Facebook', url: '#', label: 'Facebook' },
    { icon: 'Instagram', url: '#', label: 'Instagram' },
    { icon: 'Linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'Twitter', url: '#', label: 'Twitter' }
  ];

  const contactInfo = [
    { icon: 'Phone', text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: 'Mail', text: 'info@vastavmarketing.com', href: 'mailto:info@vastavmarketing.com' },
    { icon: 'MapPin', text: 'Mumbai, Maharashtra, India', href: '#' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-lg">
          <div className="lg:col-span-2">
            <Link to="/homepage" className="inline-flex items-center space-x-3 group mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
                <Icon 
                  name="Hammer" 
                  size={28} 
                  color="var(--color-primary)" 
                  strokeWidth={2}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-foreground">
                  Vastav Marketing
                </span>
                <span className="text-xs text-muted-foreground">
                  Crafted Excellence
                </span>
              </div>
            </Link>
            
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Your trusted partner in premium furniture and interior materials. 
              We bring craftsmanship tradition together with modern design sophistication 
              to create spaces that inspire.
            </p>

            <div className="space-y-3">
              {contactInfo?.map((item, index) => (
                <a
                  key={index}
                  href={item?.href}
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon name={item?.icon} size={16} />
                  </div>
                  <span>{item?.text}</span>
                </a>
              ))}
            </div>
          </div>

          {footerSections?.map((section, index) => (
            <div key={index}>
              <h3 className="font-display text-base font-semibold text-foreground mb-4">
                {section?.title}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link?.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                    >
                      <Icon 
                        name="ChevronRight" 
                        size={14} 
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link?.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-xl pt-lg border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Vastav Marketing. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  aria-label={social?.label}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <Link 
                to="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-border">|</span>
              <Link 
                to="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;