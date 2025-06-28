import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDetails }) => {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 rounded-2xl overflow-hidden mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Content */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="flex items-center space-x-3">
            <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              ⭐ Featured Project
            </span>
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs">
              {project.status}
            </span>
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-3">
              {project.title}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.highlights?.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name={highlight.icon} size={16} color="white" />
                </div>
                <span className="text-sm font-medium text-text-primary">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-background text-primary text-sm font-medium rounded-lg border border-primary-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 py-4 border-t border-primary-200">
            {project.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-accent">{metric.value}</div>
                <div className="text-xs text-text-muted uppercase tracking-wide">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              iconName="Eye"
              iconPosition="left"
              onClick={() => onViewDetails(project)}
            >
              View Case Study
            </Button>
            {project.liveUrl && (
              <Button
                variant="outline"
                iconName="ExternalLink"
                iconPosition="right"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="ghost"
                iconName="Github"
                iconPosition="left"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                Source Code
              </Button>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative h-80 lg:h-full rounded-xl overflow-hidden shadow-secondary">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Floating Action Buttons */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              {project.liveUrl && (
                <button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth shadow-primary"
                  title="View Live Demo"
                >
                  <Icon name="ExternalLink" size={18} />
                </button>
              )}
              {project.githubUrl && (
                <button
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-smooth shadow-primary"
                  title="View Source Code"
                >
                  <Icon name="Github" size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Security Badge */}
          {project.securityFeatures && (
            <div className="absolute -bottom-4 left-4 right-4">
              <div className="bg-error text-error-foreground px-4 py-2 rounded-lg shadow-primary text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span className="text-sm font-medium">Security-First Architecture</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;