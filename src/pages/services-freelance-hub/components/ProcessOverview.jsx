import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessOverview = () => {
  const processSteps = [
    {
      phase: "Discovery",
      title: "Project Discovery & Planning",
      duration: "1-2 weeks",
      description: "Comprehensive analysis of your requirements, goals, and technical constraints to create a detailed project roadmap.",
      activities: [
        "Stakeholder interviews and requirement gathering",
        "Technical architecture planning",
        "Security assessment and threat modeling",
        "Timeline and milestone definition",
        "Technology stack selection"
      ],
      deliverables: [
        "Project Requirements Document",
        "Technical Architecture Diagram",
        "Security Implementation Plan",
        "Detailed Project Timeline"
      ],
      icon: "Search",
      color: "from-blue-500 to-blue-600"
    },
    {
      phase: "Design",
      title: "System Design & Prototyping",
      duration: "1-3 weeks",
      description: "Creating detailed system designs, user interfaces, and interactive prototypes to validate the solution approach.",
      activities: [
        "Database schema design",
        "API endpoint specification",
        "User interface wireframing",
        "Security protocol definition",
        "Performance optimization planning"
      ],
      deliverables: [
        "System Architecture Document",
        "Database Design Schema",
        "API Documentation",
        "UI/UX Prototypes"
      ],
      icon: "Palette",
      color: "from-purple-500 to-purple-600"
    },
    {
      phase: "Development",
      title: "Secure Development & Implementation",
      duration: "4-12 weeks",
      description: "Agile development process with security-first coding practices, regular testing, and continuous integration.",
      activities: [
        "Secure coding implementation",
        "Automated testing setup",
        "Code review and quality assurance",
        "Security vulnerability scanning",
        "Performance optimization"
      ],
      deliverables: [
        "Fully Functional Application",
        "Automated Test Suite",
        "Security Audit Report",
        "Performance Metrics"
      ],
      icon: "Code",
      color: "from-green-500 to-green-600"
    },
    {
      phase: "Testing",
      title: "Comprehensive Testing & QA",
      duration: "1-2 weeks",
      description: "Rigorous testing including functionality, security, performance, and user acceptance testing.",
      activities: [
        "Unit and integration testing",
        "Security penetration testing",
        "Performance load testing",
        "User acceptance testing",
        "Cross-browser compatibility testing"
      ],
      deliverables: [
        "Test Results Report",
        "Security Assessment",
        "Performance Benchmarks",
        "Bug Fix Documentation"
      ],
      icon: "TestTube",
      color: "from-orange-500 to-orange-600"
    },
    {
      phase: "Deployment",
      title: "Deployment & Go-Live",
      duration: "1 week",
      description: "Secure deployment to production environment with monitoring setup and performance optimization.",
      activities: [
        "Production environment setup",
        "Security configuration",
        "Monitoring and alerting setup",
        "Performance optimization",
        "Go-live support"
      ],
      deliverables: [
        "Live Production Application",
        "Deployment Documentation",
        "Monitoring Dashboard",
        "Go-Live Support"
      ],
      icon: "Rocket",
      color: "from-red-500 to-red-600"
    },
    {
      phase: "Maintenance",
      title: "Ongoing Support & Maintenance",
      duration: "Ongoing",
      description: "Continuous monitoring, updates, and support to ensure optimal performance and security.",
      activities: [
        "24/7 monitoring and alerting",
        "Regular security updates",
        "Performance optimization",
        "Feature enhancements",
        "Technical support"
      ],
      deliverables: [
        "Monthly Performance Reports",
        "Security Update Logs",
        "Support Documentation",
        "Enhancement Roadmap"
      ],
      icon: "Settings",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const methodologyPrinciples = [
    {
      title: "Agile Development",
      description: "Iterative development with regular client feedback and flexible adaptation to changing requirements.",
      icon: "Zap"
    },
    {
      title: "Security-First Approach",
      description: "Every development decision is made with security implications in mind, from architecture to deployment.",
      icon: "Shield"
    },
    {
      title: "Continuous Integration",
      description: "Automated testing and deployment pipelines ensure code quality and rapid, reliable releases.",
      icon: "GitBranch"
    },
    {
      title: "Performance Optimization",
      description: "Proactive performance monitoring and optimization throughout the development lifecycle.",
      icon: "Activity"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Development Process</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A proven methodology that ensures project success through structured phases, 
            clear deliverables, and continuous communication.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary hidden lg:block"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-primary hidden lg:block"></div>

                <div className="lg:ml-20">
                  <div className="bg-surface border border-border rounded-2xl p-8 shadow-primary hover:shadow-secondary transition-smooth">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-primary`}>
                          <Icon name={step.icon} size={28} color="white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-accent mb-1">{step.phase}</div>
                          <h3 className="text-2xl font-heading font-bold text-primary mb-2">{step.title}</h3>
                          <div className="flex items-center space-x-2 text-text-muted">
                            <Icon name="Clock" size={16} />
                            <span className="text-sm">{step.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-primary-200">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <p className="text-text-secondary mb-6 leading-relaxed">{step.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-heading font-semibold text-primary mb-3">Key Activities</h4>
                        <ul className="space-y-2">
                          {step.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                              <Icon name="ArrowRight" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-heading font-semibold text-primary mb-3">Deliverables</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, delIndex) => (
                            <li key={delIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                              <Icon name="CheckCircle" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Principles */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Development Methodology</h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Core principles that guide every project from conception to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologyPrinciples.map((principle, index) => (
              <div key={index} className="bg-surface border border-border rounded-xl p-6 text-center shadow-primary hover:shadow-secondary transition-smooth group">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <Icon name={principle.icon} size={24} color="white" />
                </div>
                <h4 className="font-heading font-bold text-primary mb-3">{principle.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Communication & Updates */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold mb-4">Transparent Communication</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Stay informed throughout the entire development process with regular updates and clear communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" size={24} color="white" />
              </div>
              <h4 className="font-heading font-bold mb-2">Daily Updates</h4>
              <p className="text-sm opacity-80">Regular progress updates via your preferred communication channel</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} color="white" />
              </div>
              <h4 className="font-heading font-bold mb-2">Weekly Reviews</h4>
              <p className="text-sm opacity-80">Scheduled review meetings to discuss progress and gather feedback</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="BarChart3" size={24} color="white" />
              </div>
              <h4 className="font-heading font-bold mb-2">Live Dashboard</h4>
              <p className="text-sm opacity-80">Real-time project dashboard with milestones and deliverable tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;