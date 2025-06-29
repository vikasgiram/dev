import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CybersecurityFoundation = () => {
  const [activeCard, setActiveCard] = useState(0);

  const foundations = [
    {
      id: 1,
      title: "Cybersecurity Education",
      institution: "GH Raisoni University",
      degree: "B.Tech in Cybersecurity",
      year: "2012-2025",
      description: "Specialized in network security, cryptography, and secure software development. Thesis focused on \'Secure Web Application Architecture Patterns\'.",
      skills: ["Network Security", "Cryptography", "Ethical Hacking", "Security Auditing"],
      icon: "GraduationCap",
      color: "primary"
    },
    {
      id: 2,
      title: "Full Stack Development",
      institution: "Apna College",
      degree: "Course in Full Stack Development",
      year: "2023-2024",
      description: "Full Stack development course covering MERN stack, with a focus on integrating security practices into the development lifecycle.",
      skills: ["React", "Node", "Tailwind CSS", "Express", "MongoDB"],
      icon: "Award",
      color: "accent"
    },
    {
      id: 3,
      title: "Development Integration",
      institution: "Self-Directed Learning",
      degree: "Security-First Development",
      year: "2020-Present",
      description: "Bridging cybersecurity knowledge with full-stack development to create inherently secure applications from the ground up.",
      skills: ["Secure Coding", "OWASP Top 10", "DevSecOps", "Threat Modeling"],
      icon: "Shield",
      color: "primary"
    }
  ];

  const securityPrinciples = [
    {
      principle: "Defense in Depth",
      description: "Multiple layers of security controls throughout the application stack",
      implementation: "Input validation, authentication, authorization, encryption, and monitoring"
    },
    {
      principle: "Least Privilege",
      description: "Users and systems have only the minimum access required",
      implementation: "Role-based access control, API endpoint restrictions, database permissions"
    },
    {
      principle: "Secure by Design",
      description: "Security considerations integrated from the initial design phase",
      implementation: "Threat modeling, secure architecture patterns, security requirements"
    },
    {
      principle: "Zero Trust Architecture",
      description: "Never trust, always verify - every request is authenticated and authorized",
      implementation: "JWT tokens, API authentication, encrypted communications"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-accent-600 mb-4">
            <Icon name="Shield" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Security Foundation</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            The Cybersecurity Foundation
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            My unique background in cybersecurity provides the foundation for building inherently secure applications. 
            Every development decision is informed by security best practices and threat awareness.
          </p>
        </div>

        {/* Education & Certification Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {foundations.map((foundation, index) => (
            <div
              key={foundation.id}
              className={`relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeCard === index
                  ? 'border-accent bg-accent-50 shadow-secondary scale-105'
                  : 'border-border bg-background hover:border-accent/50 hover:shadow-primary'
              }`}
              onClick={() => setActiveCard(index)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                foundation.color === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
              }`}>
                <Icon name={foundation.icon} size={28} />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {foundation.title}
                  </h3>
                  <div className="text-sm text-text-secondary mb-1">
                    {foundation.institution}
                  </div>
                  <div className="text-sm font-medium text-accent">
                    {foundation.degree} • {foundation.year}
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  {foundation.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {foundation.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-50 text-primary text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Active Indicator */}
              {activeCard === index && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Security Principles */}
        <div className="bg-background rounded-2xl border border-border p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Core Security Principles in Development
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              These fundamental security principles guide every aspect of my development process, 
              ensuring robust and secure applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityPrinciples.map((item, index) => (
              <div
                key={index}
                className="flex space-x-4 p-6 rounded-xl border border-border hover:border-accent/50 hover:bg-accent-50/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-heading font-semibold text-primary">
                    {item.principle}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-xs text-text-muted">
                    <strong>Implementation:</strong> {item.implementation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Representation */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop"
              alt="Cybersecurity and Development Integration"
              className="w-full max-w-4xl h-64 lg:h-80 object-cover rounded-2xl shadow-large"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-accent-900/80 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <Icon name="Shield" size={48} className="mx-auto" />
                <h4 className="text-2xl font-heading font-bold">
                  Security + Development = Trusted Solutions
                </h4>
                <p className="text-lg opacity-90 max-w-md">
                  Where cybersecurity expertise meets full-stack development mastery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityFoundation;