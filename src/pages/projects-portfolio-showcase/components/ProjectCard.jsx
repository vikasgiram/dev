import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-background border border-border rounded-xl overflow-hidden shadow-primary hover:shadow-secondary transition-smooth group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'Live' ?'bg-accent text-accent-foreground' 
              : project.status === 'In Development' ?'bg-warning text-warning-foreground' :'bg-info text-info-foreground'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-4 right-4 flex space-x-2 transition-smooth ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}>
          {project.liveUrl && (
            <button
              onClick={() => window.open(project.liveUrl, '_blank')}
              className="w-8 h-8 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
              title="View Live Demo"
            >
              <Icon name="ExternalLink" size={16} />
            </button>
          )}
          {project.githubUrl && (
            <button
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="w-8 h-8 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-smooth"
              title="View Source Code"
            >
              <Icon name="Github" size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-1 group-hover:text-accent transition-smooth">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary">{project.category}</p>
          </div>
          <div className="flex items-center space-x-1 text-xs text-text-muted">
            <Icon name="Calendar" size={12} />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md border border-border"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-border">
          {project.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-semibold text-accent">{metric.value}</div>
              <div className="text-xs text-text-muted">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Security & Performance Highlights */}
        {project.highlights && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-1 text-xs text-accent">
                <Icon name={highlight.icon} size={12} />
                <span>{highlight.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-3">
          <Button
            variant="primary"
            size="sm"
            iconName="Eye"
            iconPosition="left"
            onClick={() => onViewDetails(project)}
            className="flex-1"
          >
            View Details
          </Button>
          {project.liveUrl && (
            <Button
              variant="outline"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;