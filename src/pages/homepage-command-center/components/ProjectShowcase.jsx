import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "SecureChat Pro",
      description: "End-to-end encrypted messaging platform with advanced security features and real-time communication.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      securityFeatures: ["E2E Encryption", "2FA", "Message Expiry"],
      status: "Live",
      metrics: { users: "15K+", uptime: "99.9%", security: "A+" }
    },
    {
      id: 2,
      title: "EcoCommerce Hub",
      description: "Sustainable e-commerce platform with carbon footprint tracking and eco-friendly vendor verification.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Express", "MongoDB", "Stripe", "AWS"],
      securityFeatures: ["PCI Compliance", "Data Encryption", "Fraud Detection"],
      status: "Live",
      metrics: { orders: "8.5K", revenue: "$2.1M", rating: "4.8/5" }
    },
    {
      id: 3,
      title: "HealthTracker AI",
      description: "AI-powered health monitoring dashboard with predictive analytics and secure patient data management.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "MongoDB", "Docker"],
      securityFeatures: ["HIPAA Compliant", "Biometric Auth", "Audit Logs"],
      status: "Beta",
      metrics: { patients: "3.2K", accuracy: "94%", compliance: "100%" }
    },
    {
      id: 4,
      title: "DevOps Command Center",
      description: "Comprehensive DevOps monitoring and deployment automation platform with security-first approach.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Docker", "Kubernetes", "Jenkins"],
      securityFeatures: ["Zero Trust", "Container Security", "RBAC"],
      status: "Development",
      metrics: { deployments: "1.8K", success: "98.5%", downtime: "0.1%" }
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeProject];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-accent font-mono text-sm mb-4">
            <Icon name="Rocket" size={16} />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            Live Project Showcase
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore my latest MERN stack applications with security-first architecture and real-world impact
          </p>
        </div>

        {/* Main Project Display */}
        <div className="bg-background rounded-2xl shadow-large border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Image */}
            <div className="relative h-64 lg:h-96 overflow-hidden">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  currentProject.status === 'Live' ?'bg-accent text-accent-foreground' 
                    : currentProject.status === 'Beta' ?'bg-warning text-warning-foreground' :'bg-info text-info-foreground'
                }`}>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                    <span>{currentProject.status}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-background transition-smooth"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-background transition-smooth"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {currentProject.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Code2" size={16} className="mr-2" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full border border-primary-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Security Features */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                    <Icon name="Shield" size={16} className="mr-2" />
                    Security Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.securityFeatures.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-accent-50 text-accent text-sm rounded-full border border-accent-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  {Object.entries(currentProject.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-text-muted capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="primary"
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="flex-1"
                  >
                    View Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Github"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === activeProject
                  ? 'bg-accent' :'bg-border hover:bg-accent/50'
              }`}
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="FolderOpen"
            iconPosition="right"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;