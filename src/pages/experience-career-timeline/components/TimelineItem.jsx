import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TimelineItem = ({ 
  item, 
  index, 
  isExpanded, 
  onToggleExpand,
  selectedTech,
  onTechFilter 
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      return `${years} year${years > 1 ? 's' : ''}${months > 0 ? ` ${months} month${months > 1 ? 's' : ''}` : ''}`;
    }
  };

  const isHighlighted = selectedTech && item.technologies?.some(tech => 
    tech.toLowerCase().includes(selectedTech.toLowerCase())
  );

  return (
    <div className={`relative flex items-start space-x-6 pb-12 transition-all duration-300 ${
      isHighlighted ? 'bg-accent-50 -mx-4 px-4 py-6 rounded-lg' : ''
    }`}>
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
          item.type === 'education' ?'bg-info border-info-100' 
            : item.current 
              ? 'bg-accent border-accent-100 animate-pulse' :'bg-primary border-primary-100'
        }`}></div>
        <div className="w-0.5 h-full bg-border mt-2"></div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="bg-surface border border-border rounded-lg p-6 shadow-primary hover:shadow-secondary transition-smooth">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-4 flex-1">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                {!imageError ? (
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-12 h-12 rounded-lg object-cover border border-border"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <Icon name="Building" size={24} className="text-primary" />
                  </div>
                )}
              </div>

              {/* Title and Company */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <p className="text-primary font-medium">{item.company}</p>
                  {item.current && (
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>
                      {formatDate(item.startDate)} - {item.endDate === 'Present' ? 'Present' : formatDate(item.endDate)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{getDuration(item.startDate, item.endDate)}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Expand Button */}
            <Button
              variant="ghost"
              size="sm"
              iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
              onClick={() => onToggleExpand(index)}
              className="flex-shrink-0"
            >
              {isExpanded ? 'Less' : 'More'}
            </Button>
          </div>

          {/* Description */}
          <p className="text-text-secondary mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* Technologies */}
          {item.technologies && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <button
                    key={techIndex}
                    onClick={() => onTechFilter(tech)}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-smooth ${
                      selectedTech === tech
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-primary-50 text-primary hover:bg-primary-100'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Expanded Content */}
          {isExpanded && (
            <div className="border-t border-border pt-4 space-y-4 animate-fade-in">
              {/* Key Achievements */}
              {item.achievements && (
                <div>
                  <h4 className="text-sm font-medium text-text-primary mb-3 flex items-center space-x-2">
                    <Icon name="Trophy" size={16} className="text-accent" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notable Projects */}
              {item.projects && (
                <div>
                  <h4 className="text-sm font-medium text-text-primary mb-3 flex items-center space-x-2">
                    <Icon name="Code" size={16} className="text-primary" />
                    <span>Notable Projects</span>
                  </h4>
                  <div className="space-y-3">
                    {item.projects.map((project, projIndex) => (
                      <div key={projIndex} className="bg-background border border-border rounded-lg p-4">
                        <h5 className="font-medium text-text-primary mb-1">{project.name}</h5>
                        <p className="text-sm text-text-secondary mb-2">{project.description}</p>
                        {project.impact && (
                          <div className="flex items-center space-x-1 text-xs text-accent">
                            <Icon name="TrendingUp" size={12} />
                            <span>{project.impact}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Developed */}
              {item.skillsDeveloped && (
                <div>
                  <h4 className="text-sm font-medium text-text-primary mb-3 flex items-center space-x-2">
                    <Icon name="Brain" size={16} className="text-info" />
                    <span>Skills Developed</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skillsDeveloped.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-info-50 text-info text-xs font-medium rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {item.testimonial && (
                <div className="bg-primary-50 border-l-4 border-primary p-4 rounded-r-lg">
                  <blockquote className="text-sm text-text-secondary italic mb-2">
                    "{item.testimonial.quote}"
                  </blockquote>
                  <cite className="text-xs text-text-muted">
                    — {item.testimonial.author}, {item.testimonial.position}
                  </cite>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;