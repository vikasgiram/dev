import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityFirstSection = () => {
  const securityPrinciples = [
    {
      icon: "Shield",
      title: "Secure by Design",
      description: "Every application is architected with security as a foundational principle, not an afterthought. From data encryption to secure authentication flows."
    },
    {
      icon: "Lock",
      title: "Data Protection",
      description: "Implementation of industry-standard encryption, secure data storage practices, and GDPR/CCPA compliance measures to protect user information."
    },
    {
      icon: "Eye",
      title: "Vulnerability Assessment",
      description: "Comprehensive security audits and penetration testing to identify and resolve potential vulnerabilities before deployment."
    },
    {
      icon: "AlertTriangle",
      title: "Threat Monitoring",
      description: "Integration of real-time monitoring systems to detect and respond to security threats, ensuring continuous protection."
    },
    {
      icon: "Key",
      title: "Access Control",
      description: "Implementation of robust authentication and authorization systems with multi-factor authentication and role-based access control."
    },
    {
      icon: "FileCheck",
      title: "Compliance Ready",
      description: "Applications built to meet industry compliance standards including HIPAA, SOC 2, and PCI DSS requirements."
    }
  ];

  const securityStats = [
    { label: "Zero Security Breaches", value: "100%", icon: "Shield" },
    { label: "Compliance Rate", value: "99.9%", icon: "CheckCircle" },
    { label: "Vulnerability Detection", value: "24/7", icon: "Eye" },
    { label: "Response Time", value: "<1hr", icon: "Clock" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-primary">
              <Icon name="Shield" size={32} color="white" />
            </div>
            <h2 className="text-4xl font-heading font-bold text-primary">Security-First Development</h2>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Where cybersecurity expertise meets full-stack development. Every line of code is written with security consciousness, 
            ensuring your applications are not just functional, but fortress-strong against modern threats.
          </p>
        </div>

        {/* Security Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityPrinciples.map((principle, index) => (
            <div key={index} className="bg-background border border-border rounded-xl p-6 shadow-primary hover:shadow-secondary transition-smooth group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <Icon name={principle.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{principle.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Stats */}
        <div className="bg-background border border-border rounded-2xl p-8 shadow-secondary">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-primary mb-2">Security Track Record</h3>
            <p className="text-text-secondary">Proven results in cybersecurity-aware development</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {securityStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <Icon name={stat.icon} size={24} color="white" />
                </div>
                <div className="text-3xl font-heading font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Process */}
        <div className="mt-16 bg-background border border-border rounded-2xl p-8 shadow-primary">
          <h3 className="text-2xl font-heading font-bold text-primary text-center mb-8">Security Development Lifecycle</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Threat Modeling", description: "Identify potential security risks and attack vectors during planning phase" },
              { step: "2", title: "Secure Coding", description: "Implementation using secure coding practices and security-focused frameworks" },
              { step: "3", title: "Security Testing", description: "Comprehensive testing including penetration testing and vulnerability scans" },
              { step: "4", title: "Monitoring", description: "Continuous security monitoring and incident response post-deployment" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-smooth">
                  {phase.step}
                </div>
                <h4 className="font-heading font-bold text-primary mb-2">{phase.title}</h4>
                <p className="text-sm text-text-secondary">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent transform translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFirstSection;