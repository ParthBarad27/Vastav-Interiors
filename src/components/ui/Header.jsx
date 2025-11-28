import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/products', label: 'Products', icon: 'Package' },
    { path: '/projects', label: 'Projects', icon: 'Briefcase' },
    { path: '/services', label: 'Services', icon: 'Wrench' },
    { path: '/about', label: 'About', icon: 'Info' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-brand' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link 
              to="/homepage" 
              className="flex items-center space-x-3 group"
            >
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

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  iconName="Phone" 
                  iconPosition="left"
                  iconSize={18}
                >
                  Contact
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="default"
                  iconName="Calendar" 
                  iconPosition="left"
                  iconSize={18}
                  className="bg-accent hover:bg-brand-dark-goldenrod"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? 'X' : 'Menu'} 
                size={24} 
              />
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md lg:hidden"
          style={{ top: '80px' }}
        >
          <nav className="container-custom py-8 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span>{item?.label}</span>
              </Link>
            ))}
            
            <div className="pt-6 space-y-3">
              <Link to="/contact" className="block">
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="Phone" 
                  iconPosition="left"
                  iconSize={18}
                >
                  Contact Us
                </Button>
              </Link>
              <Link to="/contact" className="block">
                <Button 
                  variant="default"
                  fullWidth
                  iconName="Calendar" 
                  iconPosition="left"
                  iconSize={18}
                  className="bg-accent hover:bg-brand-dark-goldenrod"
                >
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;