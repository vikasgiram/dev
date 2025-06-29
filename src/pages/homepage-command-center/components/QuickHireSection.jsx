import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const QuickHireSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const projectTypes = [
    { value: 'web-app', label: 'Web Application', icon: 'Globe' },
    { value: 'mobile-app', label: 'Mobile App', icon: 'Smartphone' },
    { value: 'api-development', label: 'API Development', icon: 'Server' },
    { value: 'security-audit', label: 'Security Audit', icon: 'Shield' },
    { value: 'consultation', label: 'Technical Consultation', icon: 'MessageSquare' },
    { value: 'other', label: 'Other', icon: 'MoreHorizontal' }
  ];

  const budgetRanges = [
    { value: '5k-10k', label: '$5K - $10K' },
    { value: '10k-25k', label: '$10K - $25K' },
    { value: '25k-50k', label: '$25K - $50K' },
    { value: '50k+', label: '$50K+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-2weeks', label: '1-2 Weeks' },
    { value: '1month', label: '1 Month' },
    { value: '2-3months', label: '2-3 Months' },
    { value: '3months+', label: '3+ Months' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const availabilityStatus = {
    status: 'available',
    nextSlot: 'Tomorrow 2:00 PM EST',
    responseTime: '< 2 hours'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-background to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info & Availability */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="flex items-center space-x-2 text-accent font-mono text-sm mb-4">
                <Icon name="Zap" size={16} />
                <span>Quick Hire</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                Get a personalized consultation and project estimate within 24 hours. Let's discuss how I can help bring your vision to life.
              </p>
            </div>

            {/* Availability Status */}
            <div className="bg-background border border-border rounded-xl p-6 shadow-primary">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <h3 className="font-heading font-semibold text-primary">
                  Current Availability
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Status</span>
                  <span className="px-3 py-1 bg-accent-50 text-accent text-sm rounded-full font-medium">
                    Available for New Projects
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Next Available Slot</span>
                  <span className="text-primary font-medium">{availabilityStatus.nextSlot}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Response Time</span>
                  <span className="text-primary font-medium">{availabilityStatus.responseTime}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">48hrs</div>
                <div className="text-sm text-text-muted">Avg Response Time</div>
              </div>
              <div className="bg-background border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-text-muted">Client Satisfaction</div>
              </div>
            </div>

            {/* Contact Alternatives */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-primary">
                Prefer Other Ways to Connect?
              </h4>
              <div className="flex flex-col space-y-2">
                <Button
                  variant="ghost"
                  iconName="Mail"
                  iconPosition="left"
                  className="justify-start"
                >
                  vikigiram@gmail.com
                </Button>
                <Button
                  variant="ghost"
                  iconName="Calendar"
                  iconPosition="left"
                  className="justify-start"
                >
                  Schedule a Call
                </Button>
                <Button
                  variant="ghost"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="justify-start"
                >
                  WhatsApp Chat
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-background border border-border rounded-2xl p-8 shadow-large">
            {showSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-text-secondary mb-4">
                  Thank you for reaching out. I'll get back to you within 2 hours with a detailed response.
                </p>
                <div className="text-sm text-text-muted">
                  Check your email for a confirmation message.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Get Your Project Estimate
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Fill out the form below and I'll send you a detailed proposal
                  </p>
                </div>

                {/* Basic Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name (Optional)"
                  value={formData.company}
                  onChange={handleInputChange}
                />

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Project Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, projectType: type.value }))}
                        className={`p-3 rounded-lg border text-left transition-smooth ${
                          formData.projectType === type.value
                            ? 'border-accent bg-accent-50 text-accent' :'border-border hover:border-accent/50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon name={type.icon} size={16} />
                          <span className="text-sm font-medium">{type.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select Budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select Timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project, requirements, and any specific challenges you're facing..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName={isSubmitting ? undefined : "Send"}
                  iconPosition="right"
                  disabled={!formData.name || !formData.email || !formData.projectType}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Project Details'}
                </Button>

                <div className="text-xs text-text-muted text-center">
                  By submitting this form, you agree to receive project-related communications. 
                  Your information is secure and will never be shared.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickHireSection;