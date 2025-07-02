import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ProjectCalculator from './components/ProjectCalculator';
import SecurityFirstSection from './components/SecurityFirstSection';
import ClientSuccessStories from './components/ClientSuccessStories';
import ConsultationBooking from './components/ConsultationBooking';
import ProcessOverview from './components/ProcessOverview';
import PricingTransparency from './components/PricingTransparency';
import TrustSignals from './components/TrustSignals';
import Footer from 'components/ui/Footer';

const ServicesFreelanceHub = () => {
  const coreServices = [
    {
      id: 'fullstack-mern',
      title: 'Full-Stack MERN Development',
      icon: 'Code',
      timeline: '4-16 weeks',
      startingPrice: '5,000',
      description: 'Complete web application development using MongoDB, Express.js, React, and Node.js. From concept to deployment with modern, scalable architecture.',
      deliverables: [
        'Responsive web application',
        'RESTful API development',
        'Database design & optimization',
        'User authentication & authorization',
        'Deployment & hosting setup',
        'Technical documentation'
      ],
      projectsCompleted: 35,
      rating: 4.9
    },
    {
      id: 'cybersecurity-development',
      title: 'Cybersecurity-Aware Development',
      icon: 'Shield',
      timeline: '6-20 weeks',
      startingPrice: '8,000',
      description: 'Security-first application development with comprehensive threat modeling, secure coding practices, and vulnerability assessments.',
      deliverables: [
        'Security architecture design',
        'Threat modeling & risk assessment',
        'Secure authentication systems',
        'Data encryption implementation',
        'Security testing & audits',
        'Compliance documentation'
      ],
      projectsCompleted: 28,
      rating: 5.0
    },
    {
      id: 'api-integration',
      title: 'API Design & Integration',
      icon: 'Link',
      timeline: '2-8 weeks',
      startingPrice: '3,000',
      description: 'Custom API development and third-party service integrations. RESTful and GraphQL APIs with comprehensive documentation.',
      deliverables: [
        'Custom API development',
        'Third-party integrations',
        'API documentation',
        'Rate limiting & security',
        'Testing & monitoring setup',
        'SDK development'
      ],
      projectsCompleted: 42,
      rating: 4.8
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      icon: 'Zap',
      timeline: '1-4 weeks',
      startingPrice: '2,500',
      description: 'Comprehensive performance analysis and optimization for existing applications. Database tuning, code optimization, and infrastructure improvements.',
      deliverables: [
        'Performance audit report',
        'Database optimization',
        'Code refactoring',
        'Caching implementation',
        'CDN setup & configuration',
        'Monitoring dashboard'
      ],
      projectsCompleted: 31,
      rating: 4.9
    },
    {
      id: 'technical-consulting',
      title: 'Technical Consulting',
      icon: 'Users',
      timeline: 'Ongoing',
      startingPrice: '150',
      description: 'Strategic technical guidance for your development team. Architecture reviews, technology selection, and best practices implementation.',
      deliverables: [
        'Technical strategy planning',
        'Architecture reviews',
        'Team training sessions',
        'Code review processes',
        'Technology recommendations',
        'Development roadmaps'
      ],
      projectsCompleted: 25,
      rating: 4.9
    },
    {
      id: 'maintenance-support',
      title: 'Maintenance & Support',
      icon: 'Settings',
      timeline: 'Ongoing',
      startingPrice: '1,200',
      description: 'Ongoing maintenance, updates, and support for your applications. Proactive monitoring, bug fixes, and feature enhancements.',
      deliverables: [
        '24/7 monitoring setup',
        'Regular security updates',
        'Bug fixes & patches',
        'Performance monitoring',
        'Backup & recovery systems',
        'Monthly reports'
      ],
      projectsCompleted: 18,
      rating: 5.0
    }
  ];

  const scrollToProjectCalculator = () => {
    const element = document.getElementById('projectCalculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  const handleLearnMore = (service) => {
    alert(`Learn more about ${service.title}\n\nThis would typically open a detailed service page or modal with more information about the service, case studies, and booking options.`);
  };

  const handleGetStarted = () => {
    const element = document.getElementById('consultation-booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Freelance Services - Security-First Development | Vikas Giram</title>
        <meta 
          name="description" 
          content="Explore Vikas Giram's freelance services offering security-first full-stack MERN development, API integration, performance optimization, and technical consulting." 
        />
        <meta 
          name="keywords" 
          content="freelance services, MERN development, cybersecurity, API integration, performance optimization, technical consulting, Vikas Giram" 
        />
        <meta property="og:title" content="Freelance Services - Security-First Development | Vikas Giram" />
        <meta property="og:description" content="Explore Vikas Giram's freelance services offering security-first full-stack MERN development, API integration, performance optimization, and technical consulting." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vikasgiram.github.io/dev/services-freelance-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-background to-accent-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-secondary">
                  <Icon name="Briefcase" size={36} color="white" />
                </div>
                <div className="text-left">
                  <h1 className="text-5xl font-heading font-bold text-primary mb-2">
                    Freelance Services
                  </h1>
                  <p className="text-xl text-accent font-medium">Security-First Development Solutions</p>
                </div>
              </div>
              
              <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your ideas into secure, scalable applications with cybersecurity-aware development practices. 
                From concept to deployment, I deliver comprehensive solutions that prioritize both functionality and security.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={handleGetStarted}
                >
                  Start Your Project
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  onClick={scrollToProjectCalculator}
                >
                  Project Calculator
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-text-secondary">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-text-secondary">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">0</div>
                <div className="text-sm text-text-secondary">Security Breaches</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">Core Services</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Comprehensive development services designed to meet your unique business needs with security at the forefront.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {coreServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onLearnMore={handleLearnMore}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Project Calculator */}
        <section id='projectCalculator' className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectCalculator />
          </div>
        </section>

        {/* Security-First Section */}
        <SecurityFirstSection />

        {/* Client Success Stories */}
        <ClientSuccessStories />

        {/* Process Overview */}
        <ProcessOverview />

        {/* Pricing Transparency */}
        <PricingTransparency scrollToProjectCalculator= {scrollToProjectCalculator} />

        {/* Trust Signals */}
        <TrustSignals />

        {/* Consultation Booking */}
        <div id="consultation-booking">
          <ConsultationBooking />
        </div>

        {/* Footer CTA */}
        <section className="py-16 bg-gradient-primary text-white my-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss your project and create a solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="secondary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="border-white text-black hover:text-primary"
              >
                Send Project Details
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
};

export default ServicesFreelanceHub;
