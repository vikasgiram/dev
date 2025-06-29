import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ConsultationBooking = () => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const consultationTypes = [
    {
      id: 'quick-qa',
      title: 'Quick Technical Q&A',
      duration: '15 minutes',
      price: 'Free',
      description: 'Perfect for quick technical questions, feasibility discussions, or getting initial guidance on your project idea.',
      features: [
        'Technical feasibility assessment',
        'Quick architecture recommendations',
        'Technology stack suggestions',
        'Timeline estimates'
      ],
      icon: 'MessageCircle',
      popular: false
    },
    {
      id: 'project-scope',
      title: 'Project Scope Discussion',
      duration: '30 minutes',
      price: '$75',
      description: 'Comprehensive project planning session to define scope, requirements, and create a detailed development roadmap.',
      features: [
        'Detailed requirement analysis',
        'Project scope definition',
        'Technology recommendations',
        'Timeline and budget planning',
        'Risk assessment',
        'Next steps roadmap'
      ],
      icon: 'FileText',
      popular: true
    },
    {
      id: 'strategy-session',
      title: 'Comprehensive Strategy Session',
      duration: '60 minutes',
      price: '$150',
      description: 'Deep-dive strategic consultation covering technical architecture, security planning, and long-term scalability.',
      features: [
        'Complete technical architecture review',
        'Security strategy planning',
        'Scalability roadmap',
        'Team structure recommendations',
        'Technology migration planning',
        'Performance optimization strategy',
        'Follow-up documentation'
      ],
      icon: 'Target',
      popular: false
    }
  ];

  const availableDates = [
    '2024-01-15',
    '2024-01-16',
    '2024-01-17',
    '2024-01-18',
    '2024-01-19',
    '2024-01-22',
    '2024-01-23'
  ];

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    if (!selectedConsultation || !selectedDate || !selectedTime || !formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    
    alert(`Consultation booked successfully!\n\nType: ${selectedConsultation.title}\nDate: ${selectedDate}\nTime: ${selectedTime}\n\nYou will receive a confirmation email shortly.`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-surface to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Book a Consultation</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose the consultation type that best fits your needs and let's discuss how we can bring your project to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {consultationTypes.map((consultation) => (
            <div
              key={consultation.id}
              className={`relative bg-background border-2 rounded-xl p-6 cursor-pointer transition-smooth ${
                selectedConsultation?.id === consultation.id
                  ? 'border-accent shadow-secondary'
                  : 'border-border hover:border-accent-300 shadow-primary hover:shadow-secondary'
              }`}
              onClick={() => setSelectedConsultation(consultation)}
            >
              {consultation.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name={consultation.icon} size={24} color="white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">{consultation.price}</div>
                  <div className="text-sm text-text-muted">{consultation.duration}</div>
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                {consultation.title}
              </h3>
              
              <p className="text-text-secondary mb-4 leading-relaxed">
                {consultation.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-medium text-primary">What's included:</h4>
                <ul className="space-y-1">
                  {consultation.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                      <Icon name="Check" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedConsultation?.id === consultation.id && (
                <div className="absolute inset-0 border-2 border-accent rounded-xl pointer-events-none">
                  <div className="absolute top-2 right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} color="white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedConsultation && (
          <div className="bg-background border border-border rounded-2xl p-8 shadow-secondary">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">
              Schedule Your {selectedConsultation.title}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Date & Time Selection */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-3">Select Date</label>
                  <div className="grid grid-cols-2 gap-2">
                    {availableDates.map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 text-sm border rounded-lg transition-smooth ${
                          selectedDate === date
                            ? 'border-accent bg-accent-50 text-accent' :'border-border hover:border-accent-300 text-text-primary'
                        }`}
                      >
                        {formatDate(date)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-3">Select Time (EST)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 text-sm border rounded-lg transition-smooth ${
                          selectedTime === time
                            ? 'border-accent bg-accent-50 text-accent' :'border-border hover:border-accent-300 text-text-primary'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Full Name *</label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Company/Organization</label>
                  <Input
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-smooth"
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="api-service">API Service</option>
                    <option value="e-commerce">E-commerce Platform</option>
                    <option value="dashboard">Admin Dashboard</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Project Details</label>
                  <textarea
                    placeholder="Briefly describe your project or questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-smooth resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            {selectedDate && selectedTime && (
              <div className="mt-8 p-6 bg-accent-50 border border-accent-200 rounded-lg">
                <h4 className="font-heading font-bold text-primary mb-4">Booking Summary</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-text-muted">Consultation:</span>
                    <div className="font-medium text-primary">{selectedConsultation.title}</div>
                  </div>
                  <div>
                    <span className="text-text-muted">Date & Time:</span>
                    <div className="font-medium text-primary">{formatDate(selectedDate)} at {selectedTime}</div>
                  </div>
                  <div>
                    <span className="text-text-muted">Duration & Price:</span>
                    <div className="font-medium text-primary">{selectedConsultation.duration} - {selectedConsultation.price}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8">
              <div className="text-sm text-text-muted">
                <Icon name="Info" size={16} className="inline mr-1" />
                You'll receive a calendar invite and Zoom link via email
              </div>
              <Button
                variant="primary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConsultationBooking;