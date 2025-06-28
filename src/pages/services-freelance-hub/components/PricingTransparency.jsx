import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingTransparency = () => {
  const [selectedPricingModel, setSelectedPricingModel] = useState('project-based');

  const pricingModels = [
    {
      id: 'hourly',
      title: 'Hourly Rate',
      subtitle: 'Perfect for consultations and small tasks',
      rate: '$85/hour',
      description: 'Flexible hourly billing for consultations, code reviews, debugging, and small feature additions.',
      features: [
        'Minimum 2-hour blocks',
        'Detailed time tracking',
        'Weekly invoicing',
        'No long-term commitment',
        'Perfect for ongoing support'
      ],
      bestFor: 'Consultations, debugging, small features, ongoing support',
      icon: 'Clock'
    },
    {
      id: 'project-based',
      title: 'Project-Based',
      subtitle: 'Most popular for complete solutions',
      rate: 'Fixed Price',
      description: 'Comprehensive project pricing with clear scope, deliverables, and timeline. No surprises.',
      features: [
        'Fixed price guarantee',
        'Detailed project scope',
        'Milestone-based payments',
        'Change request process',
        'Post-launch support included'
      ],
      bestFor: 'Complete applications, major features, system overhauls',
      icon: 'Package',
      popular: true
    },
    {
      id: 'retainer',
      title: 'Monthly Retainer',
      subtitle: 'Ongoing partnership for growing businesses',
      rate: 'From $3,500/month',
      description: 'Dedicated monthly hours for ongoing development, maintenance, and strategic technical guidance.',
      features: [
        '40+ hours per month',
        'Priority support',
        'Strategic planning included',
        'Flexible hour allocation',
        'Reduced hourly rate'
      ],
      bestFor: 'Ongoing development, maintenance, technical leadership',
      icon: 'Repeat'
    }
  ];

  const projectSizeEstimates = [
    {
      size: 'Small Project',
      description: 'Simple web app, landing page, or basic API',
      timeframe: '2-4 weeks',
      priceRange: '$2,500 - $8,000',
      examples: ['Landing pages', 'Simple CRUD apps', 'Basic APIs', 'Portfolio sites'],
      icon: 'Zap'
    },
    {
      size: 'Medium Project',
      description: 'Full-featured web application with database integration',
      timeframe: '6-12 weeks',
      priceRange: '$8,000 - $25,000',
      examples: ['E-commerce platforms', 'Admin dashboards', 'SaaS applications', 'Mobile apps'],
      icon: 'Layers'
    },
    {
      size: 'Large Project',
      description: 'Complex enterprise application with advanced features',
      timeframe: '3-6 months',
      priceRange: '$25,000 - $75,000+',
      examples: ['Enterprise platforms', 'Multi-tenant SaaS', 'Complex integrations', 'Custom CMS'],
      icon: 'Building'
    }
  ];

  const additionalServices = [
    { service: 'Security Audit', price: '$1,500 - $3,000', description: 'Comprehensive security assessment and recommendations' },
    { service: 'Performance Optimization', price: '$1,000 - $2,500', description: 'Speed and performance improvements for existing applications' },
    { service: 'Code Review', price: '$500 - $1,500', description: 'Detailed code quality assessment and improvement suggestions' },
    { service: 'Technical Documentation', price: '$800 - $2,000', description: 'Complete technical documentation for your project' },
    { service: 'Team Training', price: '$1,200/day', description: 'Technical training sessions for your development team' },
    { service: 'Emergency Support', price: '$150/hour', description: 'Priority support for critical issues (24/7 availability)' }
  ];

  const paymentTerms = [
    {
      title: 'Project-Based Payments',
      terms: [
        '25% deposit to start project',
        '50% at milestone completion',
        '25% upon final delivery',
        'Net 15 payment terms'
      ]
    },
    {
      title: 'Hourly & Retainer',
      terms: [
        'Weekly invoicing for hourly work',
        'Monthly advance for retainers',
        'Detailed time tracking provided',
        'Net 7 payment terms'
      ]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Transparent Pricing</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Clear, honest pricing with no hidden fees. Choose the model that works best for your project and budget.
          </p>
        </div>

        {/* Pricing Models */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingModels.map((model) => (
            <div
              key={model.id}
              className={`relative bg-background border-2 rounded-2xl p-8 shadow-primary hover:shadow-secondary transition-smooth cursor-pointer ${
                selectedPricingModel === model.id ? 'border-accent' : 'border-border'
              }`}
              onClick={() => setSelectedPricingModel(model.id)}
            >
              {model.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium shadow-primary">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={model.icon} size={28} color="white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">{model.title}</h3>
                <p className="text-text-secondary mb-4">{model.subtitle}</p>
                <div className="text-3xl font-bold text-accent">{model.rate}</div>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">{model.description}</p>

              <div className="space-y-3 mb-6">
                {model.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <div className="text-sm text-text-muted mb-2">Best for:</div>
                <div className="text-sm text-primary font-medium">{model.bestFor}</div>
              </div>

              {selectedPricingModel === model.id && (
                <div className="absolute inset-0 border-2 border-accent rounded-2xl pointer-events-none">
                  <div className="absolute top-4 right-4 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} color="white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Project Size Estimates */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-primary text-center mb-12">Project Size Estimates</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectSizeEstimates.map((project, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6 shadow-primary">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Icon name={project.icon} size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-primary">{project.size}</h4>
                    <p className="text-sm text-text-secondary">{project.timeframe}</p>
                  </div>
                </div>

                <p className="text-text-secondary mb-4">{project.description}</p>

                <div className="text-2xl font-bold text-accent mb-4">{project.priceRange}</div>

                <div>
                  <div className="text-sm font-medium text-primary mb-2">Examples:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.examples.map((example, exIndex) => (
                      <span
                        key={exIndex}
                        className="px-3 py-1 bg-primary-50 text-primary text-xs rounded-full border border-primary-200"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-primary text-center mb-12">Additional Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 shadow-primary hover:shadow-secondary transition-smooth">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-heading font-bold text-primary">{service.service}</h4>
                  <span className="text-accent font-bold">{service.price}</span>
                </div>
                <p className="text-text-secondary text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Terms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {paymentTerms.map((payment, index) => (
            <div key={index} className="bg-background border border-border rounded-xl p-6 shadow-primary">
              <h4 className="text-xl font-heading font-bold text-primary mb-4">{payment.title}</h4>
              <ul className="space-y-2">
                {payment.terms.map((term, termIndex) => (
                  <li key={termIndex} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-heading font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and provide you with a detailed, transparent quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calculator"
              iconPosition="left"
            >
              Use Project Calculator
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTransparency;