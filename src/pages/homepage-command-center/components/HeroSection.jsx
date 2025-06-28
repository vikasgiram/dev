import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const metrics = [
    { label: "GitHub Commits", value: "2,847", icon: "GitCommit", trend: "+12%" },
    { label: "Active Projects", value: "8", icon: "FolderOpen", trend: "+2" },
    { label: "HackerRank Score", value: "1,847", icon: "Award", trend: "Gold" },
    { label: "Client Success", value: "98%", icon: "TrendingUp", trend: "+5%" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-background to-accent-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-secondary rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent font-mono text-sm">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>System Online • Available for Projects</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                Secure by Design,
                <span className="text-gradient-primary block">Scalable by Nature</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                Full-Stack MERN Developer with cybersecurity expertise, crafting robust digital solutions that protect and perform. Where security meets scalability.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                iconName="MessageCircle"
                iconPosition="right"
                className="shadow-primary hover:shadow-secondary"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 text-center shadow-primary hover:shadow-secondary transition-smooth animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon name={metric.icon} size={20} className="text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{metric.value}</div>
                  <div className="text-xs text-text-muted">{metric.label}</div>
                  <div className="text-xs text-accent font-medium">{metric.trend}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile & Tech Stack */}
          <div className="space-y-8 animate-slide-up">
            {/* Profile Image */}
            <div className="relative mx-auto lg:mx-0 w-80 h-80">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-6 opacity-20"></div>
              <div className="relative bg-background rounded-2xl p-6 shadow-large border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Vikas Giram - Full-Stack Developer"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full p-2 shadow-primary">
                  <Icon name="Shield" size={20} />
                </div>
                <div className="absolute -bottom-2 -left-2 bg-primary text-primary-foreground rounded-full p-2 shadow-primary">
                  <Icon name="Code" size={20} />
                </div>
              </div>
            </div>

            {/* Tech Stack Indicators */}
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-primary">
              <h3 className="text-lg font-heading font-semibold text-primary mb-4 flex items-center">
                <Icon name="Cpu" size={20} className="mr-2 text-accent" />
                Core Technologies
              </h3>
              <div className="space-y-3">
                {[
                  { name: "React.js", level: 95, color: "bg-blue-500" },
                  { name: "Node.js", level: 92, color: "bg-green-500" },
                  { name: "MongoDB", level: 88, color: "bg-green-600" },
                  { name: "Express.js", level: 90, color: "bg-gray-600" },
                  { name: "Cybersecurity", level: 85, color: "bg-red-500" }
                ].map((tech, index) => (
                  <div key={tech.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-primary font-medium">{tech.name}</span>
                      <span className="text-text-muted">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${tech.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-text-muted">
            <span className="text-sm font-mono">Explore More</span>
            <Icon name="ChevronDown" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;