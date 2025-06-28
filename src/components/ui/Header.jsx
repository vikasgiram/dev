import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Command Center', path: '/homepage-command-center', icon: 'Command' },
    { name: 'Journey', path: '/about-professional-journey', icon: 'User' },
    { name: 'Portfolio', path: '/projects-portfolio-showcase', icon: 'FolderOpen' },
    { name: 'Experience', path: '/experience-career-timeline', icon: 'Clock' },
    { name: 'Services', path: '/services-freelance-hub', icon: 'Briefcase' },
    { name: 'Skills', path: '/skills-technical-mastery-center', icon: 'Code' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`sticky-nav ${isScrolled ? 'scrolled' : ''} border-b border-border/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage-command-center" 
            className="flex items-center space-x-3 group"
            onClick={closeMobileMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-primary group-hover:shadow-secondary transition-smooth">
                <Icon 
                  name="Shield" 
                  size={24} 
                  color="white" 
                  className="group-hover:scale-110 transition-smooth" 
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-primary group-hover:text-accent transition-smooth">
                VikasGiram.dev
              </h1>
              <p className="text-xs text-text-secondary font-mono">
                Security-First Full-Stack
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth ${
                  isActivePath(item.path) 
                    ? 'text-primary bg-primary-50 active' :'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              iconName="Github"
              iconPosition="left"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              GitHub
            </Button>
            <Button
              variant="primary"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface transition-smooth"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-smooth ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary-50 border-l-4 border-accent' :'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA Section */}
              <div className="pt-4 mt-4 border-t border-border/50 space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Github"
                  iconPosition="left"
                  fullWidth
                  onClick={() => {
                    window.open('https://github.com', '_blank');
                    closeMobileMenu();
                  }}
                >
                  View GitHub Profile
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left"
                  fullWidth
                  onClick={closeMobileMenu}
                >
                  Start Your Project
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Command Center Status Bar */}
      {isScrolled && (
        <div className="border-t border-border/30 bg-surface/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 text-xs">
              <div className="flex items-center space-x-4 text-text-muted">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>System Online</span>
                </div>
                <div className="hidden sm:flex items-center space-x-1">
                  <Icon name="Shield" size={12} />
                  <span>Security Active</span>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <Icon name="Activity" size={12} />
                  <span>Performance Optimal</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-text-muted">
                <Icon name="Clock" size={12} />
                <span>Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;