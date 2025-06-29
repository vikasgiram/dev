import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-background to-accent-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-200 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent-600">
                <Icon name="Shield" size={20} />
                <span className="text-sm font-medium uppercase tracking-wider">Security-First Developer</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary leading-tight">
                The Journey of a
                <span className="text-gradient-primary block mt-2">
                  Cybersecurity-Aware
                </span>
                Full-Stack Developer
              </h1>
              
              <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl">
                From cybersecurity foundations to MERN stack mastery, my unique journey combines 
                security expertise with full-stack development excellence. Every line of code I write 
                is informed by a deep understanding of digital security principles.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-border/50">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-text-secondary">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-text-secondary">Security Focus</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="font-cta"
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
                onClick={() => window.open('https://linkedin.com/in/vikas-giram', '_blank')}
              >
                View LinkedIn Profile
              </Button>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-large">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                  alt="Vikas Giram - Professional Developer Portrait"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Security Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-secondary animate-pulse">
                <div className="flex items-center space-x-2">
                  <Icon name="ShieldCheck" size={16} />
                  <span className="text-sm font-medium">Security Certified</span>
                </div>
              </div>

              {/* Floating Code Badge */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Code" size={16} />
                  <span className="text-sm font-medium">MERN Expert</span>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-8 left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;