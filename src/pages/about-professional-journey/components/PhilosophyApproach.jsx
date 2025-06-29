import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PhilosophyApproach = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      id: 1,
      title: "Security-First Development",
      subtitle: "Building Trust from the Ground Up",
      description: "Every line of code is written with security implications in mind. I don't add security as an afterthought—it's woven into the fabric of the application from day one.",
      principles: [
        "Threat modeling during design phase",
        "Secure coding practices by default",
        "Regular security audits and testing",
        "Defense-in-depth architecture"
      ],
      icon: "Shield",
      color: "red",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "User-Centric Design",
      subtitle: "Technology Serving Human Needs",
      description: "The best security is invisible to users. I create intuitive interfaces that maintain robust security without compromising user experience or accessibility.",
      principles: [
        "Seamless authentication flows",
        "Intuitive security features",
        "Accessible design patterns",
        "Performance-optimized security"
      ],
      icon: "Users",
      color: "blue",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Continuous Learning",
      subtitle: "Evolving with Technology",
      description: "The tech landscape changes rapidly, especially in security. I maintain a commitment to continuous learning and adaptation to stay ahead of emerging threats and technologies.",
      principles: [
        "Regular skill updates and certifications",
        "Active participation in security communities",
        "Experimentation with new technologies",
        "Knowledge sharing and mentoring"
      ],
      icon: "BookOpen",
      color: "green",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Collaborative Excellence",
      subtitle: "Building Better Together",
      description: "Great software is built by great teams. I believe in transparent communication, knowledge sharing, and collaborative problem-solving to achieve exceptional results.",
      principles: [
        "Clear and frequent communication",
        "Comprehensive documentation",
        "Code reviews and pair programming",
        "Team knowledge sharing sessions"
      ],
      icon: "Users",
      color: "purple",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description: "Understanding requirements, identifying security considerations, and planning architecture",
      activities: ["Requirement gathering", "Threat modeling", "Technology selection", "Architecture planning"],
      icon: "Search"
    },
    {
      step: 2,
      title: "Secure Design",
      description: "Creating user-centric designs with security principles integrated from the start",
      activities: ["UI/UX design", "Security architecture", "Database design", "API planning"],
      icon: "Palette"
    },
    {
      step: 3,
      title: "Development",
      description: "Writing clean, secure, and maintainable code following best practices",
      activities: ["Secure coding", "Unit testing", "Code reviews", "Documentation"],
      icon: "Code"
    },
    {
      step: 4,
      title: "Testing & Security",
      description: "Comprehensive testing including security audits and performance optimization",
      activities: ["Security testing", "Performance testing", "User testing", "Vulnerability assessment"],
      icon: "TestTube"
    },
    {
      step: 5,
      title: "Deployment & Monitoring",
      description: "Secure deployment with continuous monitoring and maintenance",
      activities: ["Secure deployment", "Monitoring setup", "Performance tracking", "Security monitoring"],
      icon: "Rocket"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: {
        bg: 'bg-red-50',
        text: 'text-red-600',
        border: 'border-red-200',
        hover: 'hover:bg-red-100'
      },
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-100'
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:bg-green-100'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-100'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-accent-600 mb-4">
            <Icon name="Lightbulb" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Philosophy & Approach</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            My Development Philosophy
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Principles and methodologies that guide my approach to building secure, 
            user-friendly, and maintainable applications.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {philosophies.map((philosophy, index) => (
            <div
              key={philosophy.id}
              className={`relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                activePhilosophy === index
                  ? `${getColorClasses(philosophy.color).border} ${getColorClasses(philosophy.color).bg} shadow-secondary scale-105`
                  : `border-border bg-background hover:shadow-primary ${getColorClasses(philosophy.color).hover}`
              }`}
              onClick={() => setActivePhilosophy(index)}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={philosophy.image}
                  alt={philosophy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      getColorClasses(philosophy.color).bg
                    }`}>
                      <Icon name={philosophy.icon} size={24} className={getColorClasses(philosophy.color).text} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white">
                        {philosophy.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {philosophy.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  {philosophy.description}
                </p>

                {/* Principles */}
                <div className="space-y-2">
                  <h4 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider">
                    Key Principles
                  </h4>
                  <div className="space-y-2">
                    {philosophy.principles.map((principle, principleIndex) => (
                      <div key={principleIndex} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className={`${getColorClasses(philosophy.color).text} mt-1 flex-shrink-0`} />
                        <span className="text-sm text-text-secondary">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Indicator */}
              {activePhilosophy === index && (
                <div className={`absolute top-4 right-4 w-3 h-3 ${getColorClasses(philosophy.color).bg} rounded-full animate-pulse`}>
                  <div className={`w-full h-full ${getColorClasses(philosophy.color).text.replace('text-', 'bg-')} rounded-full`}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Development Process */}
        <div className="bg-background rounded-2xl border border-border p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              My Development Process
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A systematic approach that ensures security, quality, and user satisfaction 
              at every stage of development.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-16 left-16 right-16 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>

            <div className="grid lg:grid-cols-5 gap-8">
              {developmentProcess.map((process, index) => (
                <div key={process.step} className="relative">
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto">
                    {process.step}
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <Icon name={process.icon} size={24} className="text-accent mx-auto" />
                      <h4 className="text-lg font-heading font-semibold text-primary">
                        {process.title}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {process.description}
                      </p>
                    </div>

                    {/* Activities */}
                    <div className="space-y-1">
                      {process.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="text-xs text-text-muted bg-surface px-2 py-1 rounded">
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <Icon name="Quote" size={48} className="text-accent mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-heading font-medium text-primary mb-6 leading-relaxed">
              "Security isn't just about protecting data—it's about building trust. 
              Every secure application is a promise kept to users who depend on our work."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <img className='rounded-full' src='https://avatars.githubusercontent.com/u/76585103?v=4'></img>
              </div>
              <div className="text-left">
                <div className="font-heading font-semibold text-primary">Vikas Giram</div>
                <div className="text-sm text-text-secondary">Security-First Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyApproach;