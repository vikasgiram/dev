import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ProjectCalculator = () => {
  const [formData, setFormData] = useState({
    projectType: 'web-app',
    complexity: 'medium',
    features: [],
    timeline: 'standard',
    securityLevel: 'standard'
  });
  const [estimate, setEstimate] = useState({ cost: 0, duration: 0 });

  const projectTypes = [
    { value: 'web-app', label: 'Web Application', basePrice: 5000, baseDuration: 4 },
    { value: 'mobile-app', label: 'Mobile Application', basePrice: 8000, baseDuration: 6 },
    { value: 'api-service', label: 'API Service', basePrice: 3000, baseDuration: 3 },
    { value: 'e-commerce', label: 'E-commerce Platform', basePrice: 12000, baseDuration: 8 },
    { value: 'dashboard', label: 'Admin Dashboard', basePrice: 4000, baseDuration: 3 }
  ];

  const complexityMultipliers = {
    simple: { cost: 0.7, duration: 0.8 },
    medium: { cost: 1.0, duration: 1.0 },
    complex: { cost: 1.5, duration: 1.3 },
    enterprise: { cost: 2.2, duration: 1.8 }
  };

  const availableFeatures = [
    { id: 'auth', label: 'User Authentication', cost: 800, duration: 0.5 },
    { id: 'payment', label: 'Payment Integration', cost: 1200, duration: 1 },
    { id: 'analytics', label: 'Analytics Dashboard', cost: 1500, duration: 1.5 },
    { id: 'notifications', label: 'Push Notifications', cost: 600, duration: 0.5 },
    { id: 'chat', label: 'Real-time Chat', cost: 2000, duration: 2 },
    { id: 'search', label: 'Advanced Search', cost: 1000, duration: 1 },
    { id: 'admin', label: 'Admin Panel', cost: 1800, duration: 1.5 },
    { id: 'api', label: 'REST API', cost: 1200, duration: 1 }
  ];

  const securityLevels = {
    basic: { multiplier: 1.0, label: 'Basic Security' },
    standard: { multiplier: 1.2, label: 'Standard Security' },
    enhanced: { multiplier: 1.5, label: 'Enhanced Security' },
    enterprise: { multiplier: 2.0, label: 'Enterprise Security' }
  };

  const timelineMultipliers = {
    rush: { cost: 1.5, duration: 0.7, label: 'Rush (Premium)' },
    standard: { cost: 1.0, duration: 1.0, label: 'Standard Timeline' },
    flexible: { cost: 0.9, duration: 1.3, label: 'Flexible Timeline' }
  };

  useEffect(() => {
    calculateEstimate();
  }, [formData]);

  const calculateEstimate = () => {
    const selectedType = projectTypes.find(type => type.value === formData.projectType);
    const complexityMult = complexityMultipliers[formData.complexity];
    const securityMult = securityLevels[formData.securityLevel].multiplier;
    const timelineMult = timelineMultipliers[formData.timeline];

    let baseCost = selectedType.basePrice;
    let baseDuration = selectedType.baseDuration;

    // Add feature costs
    const featureCosts = formData.features.reduce((total, featureId) => {
      const feature = availableFeatures.find(f => f.id === featureId);
      return total + (feature ? feature.cost : 0);
    }, 0);

    const featureDuration = formData.features.reduce((total, featureId) => {
      const feature = availableFeatures.find(f => f.id === featureId);
      return total + (feature ? feature.duration : 0);
    }, 0);

    // Apply multipliers
    const totalCost = Math.round(
      (baseCost + featureCosts) * 
      complexityMult.cost * 
      securityMult * 
      timelineMult.cost
    );

    const totalDuration = Math.round(
      (baseDuration + featureDuration) * 
      complexityMult.duration * 
      timelineMult.duration
    );

    setEstimate({ cost: totalCost, duration: totalDuration });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (featureId) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-8 shadow-primary">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
          <Icon name="Calculator" size={24} color="white" />
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold text-primary">Project Calculator</h3>
          <p className="text-text-secondary">Get an instant estimate for your project</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">Project Type</label>
            <div className="grid grid-cols-1 gap-2">
              {projectTypes.map((type) => (
                <label key={type.value} className="flex items-center space-x-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-primary-50 transition-smooth">
                  <input
                    type="radio"
                    name="projectType"
                    value={type.value}
                    checked={formData.projectType === type.value}
                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                    className="text-accent"
                  />
                  <span className="text-text-primary">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Complexity */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">Project Complexity</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(complexityMultipliers).map(([key, value]) => (
                <label key={key} className="flex items-center space-x-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-primary-50 transition-smooth">
                  <input
                    type="radio"
                    name="complexity"
                    value={key}
                    checked={formData.complexity === key}
                    onChange={(e) => handleInputChange('complexity', e.target.value)}
                    className="text-accent"
                  />
                  <span className="text-text-primary capitalize">{key}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">Timeline Preference</label>
            <div className="space-y-2">
              {Object.entries(timelineMultipliers).map(([key, value]) => (
                <label key={key} className="flex items-center space-x-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-primary-50 transition-smooth">
                  <input
                    type="radio"
                    name="timeline"
                    value={key}
                    checked={formData.timeline === key}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="text-accent"
                  />
                  <span className="text-text-primary">{value.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Features */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">Additional Features</label>
            <div className="space-y-2 max-h-64 overflow-y-auto scrollbar-thin">
              {availableFeatures.map((feature) => (
                <label key={feature.id} className="flex items-center justify-between p-3 border border-border rounded-lg cursor-pointer hover:bg-primary-50 transition-smooth">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature.id)}
                      onChange={() => handleFeatureToggle(feature.id)}
                      className="text-accent"
                    />
                    <span className="text-text-primary">{feature.label}</span>
                  </div>
                  <span className="text-sm text-text-muted">+${feature.cost}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Security Level */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">Security Level</label>
            <div className="space-y-2">
              {Object.entries(securityLevels).map(([key, value]) => (
                <label key={key} className="flex items-center space-x-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-primary-50 transition-smooth">
                  <input
                    type="radio"
                    name="securityLevel"
                    value={key}
                    checked={formData.securityLevel === key}
                    onChange={(e) => handleInputChange('securityLevel', e.target.value)}
                    className="text-accent"
                  />
                  <span className="text-text-primary">{value.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Estimate Display */}
      <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-heading font-bold mb-2">Project Estimate</h4>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="DollarSign" size={20} />
                <span className="text-2xl font-bold">${estimate.cost.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} />
                <span className="text-xl">{estimate.duration} weeks</span>
              </div>
            </div>
            <p className="text-sm opacity-80 mt-2">*Estimate includes planning, development, testing, and deployment</p>
          </div>
          <Button
            variant="secondary"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Discuss Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCalculator;