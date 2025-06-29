import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  selectedType, 
  onTypeFilter, 
  selectedTech, 
  onTechFilter, 
  availableTechnologies,
  totalExperience 
}) => {
  const experienceTypes = [
    { key: 'all', label: 'All Experience', icon: 'List' },
    { key: 'work', label: 'Work Experience', icon: 'Briefcase' },
    { key: 'education', label: 'Education', icon: 'GraduationCap' },
    { key: 'certification', label: 'Certifications', icon: 'Award' }
  ];

  return (
    <div className="bg-surface border border-border rounded-lg p-6 mb-8 shadow-primary">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-heading font-semibold text-text-primary mb-1">
            Career Timeline Filters
          </h2>
          <p className="text-sm text-text-secondary">
            Filter and explore {totalExperience}+ years of professional journey
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-text-muted">
          <Icon name="Filter" size={16} />
          <span>Active Filters</span>
        </div>
      </div>

      {/* Experience Type Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-text-primary mb-3 flex items-center space-x-2">
          <Icon name="Category" size={16} />
          <span>Experience Type</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {experienceTypes.map((type) => (
            <Button
              key={type.key}
              variant={selectedType === type.key ? "primary" : "ghost"}
              size="sm"
              iconName={type.icon}
              iconPosition="left"
              onClick={() => onTypeFilter(type.key)}
              className="transition-smooth"
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Technology Filter */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-text-primary flex items-center space-x-2">
            <Icon name="Code" size={16} />
            <span>Technologies & Skills</span>
          </h3>
          {selectedTech && (
            <Button
              variant="ghost"
              size="xs"
              iconName="X"
              iconPosition="left"
              onClick={() => onTechFilter(null)}
              className="text-text-muted hover:text-text-primary"
            >
              Clear Filter
            </Button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto scrollbar-thin">
          {availableTechnologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => onTechFilter(selectedTech === tech ? null : tech)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-smooth border ${
                selectedTech === tech
                  ? 'bg-accent text-accent-foreground border-accent'
                  : 'bg-background text-text-secondary border-border hover:bg-primary-50 hover:text-primary hover:border-primary'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {(selectedType !== 'all' || selectedTech) && (
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Filter" size={14} />
            <span>Active filters:</span>
            {selectedType !== 'all' && (
              <span className="px-2 py-1 bg-primary-100 text-primary text-xs rounded">
                {experienceTypes.find(t => t.key === selectedType)?.label}
              </span>
            )}
            {selectedTech && (
              <span className="px-2 py-1 bg-accent-100 text-accent text-xs rounded">
                {selectedTech}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="xs"
            iconName="RotateCcw"
            iconPosition="left"
            onClick={() => {
              onTypeFilter('all');
              onTechFilter(null);
            }}
            className="text-text-muted hover:text-text-primary"
          >
            Reset All
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;