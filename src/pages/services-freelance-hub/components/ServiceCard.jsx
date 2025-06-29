import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onLearnMore }) => {
  return (
    <div className="bg-surface border border-border rounded-xl p-8 shadow-primary hover:shadow-secondary transition-smooth group">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-primary group-hover:shadow-secondary transition-smooth">
            <Icon name={service.icon} size={28} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-2">{service.title}</h3>
            <div className="flex items-center space-x-4 text-sm text-text-muted">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>{service.timeline}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="DollarSign" size={14} />
                <span>From ${service.startingPrice}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1 bg-accent-50 text-accent px-3 py-1 rounded-full text-sm font-medium">
          <Icon name="TrendingUp" size={14} />
          <span>Popular</span>
        </div>
      </div>

      <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>

      <div className="mb-6">
        <h4 className="font-heading font-semibold text-primary mb-3">Key Deliverables:</h4>
        <ul className="space-y-2">
          {service.deliverables.map((deliverable, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
              <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span>{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-sm text-text-muted">
            <Icon name="Users" size={14} />
            <span>{service.projectsCompleted}+ projects</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-text-muted">
            <Icon name="Star" size={14} className="text-warning" />
            <span>{service.rating}/5</span>
          </div>
        </div>
        <Button
          variant="primary"
          size="sm"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => onLearnMore(service)}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;