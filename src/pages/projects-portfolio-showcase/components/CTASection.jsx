import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = ({ hasEngaged }) => {
  if (!hasEngaged) return null;

  return (
    <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Icon */}
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Icon name="Rocket" size={32} color="white" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-heading font-bold mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-primary-100 text-lg mb-8 leading-relaxed">
          Let's discuss how I can help bring your vision to life with secure, scalable, and high-performance solutions. From concept to deployment, I'll be your trusted technical partner.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services-freelance-hub">
            <Button
              variant="secondary"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-white text-primary hover:bg-primary-50"
            >
              Start Consultation
            </Button>
          </Link>
          <Link to="/about-professional-journey">
            <Button
              variant="ghost"
              size="lg"
              iconName="User"
              iconPosition="left"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Learn About Me
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-white/20">
          <div className="flex items-center space-x-2 text-primary-100">
            <Icon name="Shield" size={16} />
            <span className="text-sm">Security-First</span>
          </div>
          <div className="flex items-center space-x-2 text-primary-100">
            <Icon name="Clock" size={16} />
            <span className="text-sm">On-Time Delivery</span>
          </div>
          <div className="flex items-center space-x-2 text-primary-100">
            <Icon name="Award" size={16} />
            <span className="text-sm">Quality Assured</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;