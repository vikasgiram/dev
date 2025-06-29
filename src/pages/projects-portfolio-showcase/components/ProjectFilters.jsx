import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilters = ({ 
  activeFilters, 
  onFilterChange, 
  onClearFilters, 
  projectCounts 
}) => {
  const filterCategories = [
    {
      key: 'technology',
      label: 'Technology',
      icon: 'Code',
      options: [
        { value: 'React', label: 'React', count: projectCounts.react || 0 },
        { value: 'Node.js', label: 'Node.js', count: projectCounts.nodejs || 0 },
        { value: 'MongoDB', label: 'MongoDB', count: projectCounts.mongodb || 0 },
        { value: 'Express', label: 'Express', count: projectCounts.express || 0 },
        { value: 'Next.js', label: 'Next.js', count: projectCounts.nextjs || 0 },
        { value: 'TypeScript', label: 'TypeScript', count: projectCounts.typescript || 0 }
      ]
    },
    {
      key: 'industry',
      label: 'Industry',
      icon: 'Building',
      options: [
        { value: 'E-commerce', label: 'E-commerce', count: projectCounts.ecommerce || 0 },
        { value: 'Fintech', label: 'Fintech', count: projectCounts.fintech || 0 },
        { value: 'Healthcare', label: 'Healthcare', count: projectCounts.healthcare || 0 },
        { value: 'Education', label: 'Education', count: projectCounts.education || 0 },
        { value: 'SaaS', label: 'SaaS', count: projectCounts.saas || 0 }
      ]
    },
    {
      key: 'type',
      label: 'Project Type',
      icon: 'Layers',
      options: [
        { value: 'Full-Stack Application', label: 'Full-Stack App', count: projectCounts.fullstack || 0 },
        { value: 'API Development', label: 'API Development', count: projectCounts.api || 0 },
        { value: 'Security Audit', label: 'Security Audit', count: projectCounts.security || 0 },
        { value: 'Performance Optimization', label: 'Performance', count: projectCounts.performance || 0 }
      ]
    }
  ];

  const hasActiveFilters = Object.values(activeFilters).some(filters => filters.length > 0);

  return (
    <div className="bg-surface border border-border rounded-xl p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Filter" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-primary">
              Filter Projects
            </h3>
            <p className="text-sm text-text-secondary">
              Find projects by technology, industry, or type
            </p>
          </div>
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Filter Categories */}
      <div className="space-y-6">
        {filterCategories.map((category) => (
          <div key={category.key}>
            <div className="flex items-center space-x-2 mb-3">
              <Icon name={category.icon} size={16} className="text-primary" />
              <h4 className="font-medium text-text-primary">{category.label}</h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.options.map((option) => {
                const isActive = activeFilters[category.key]?.includes(option.value);
                
                return (
                  <button
                    key={option.value}
                    onClick={() => onFilterChange(category.key, option.value)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth border ${
                      isActive
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-text-secondary border-border hover:border-primary hover:text-primary'
                    }`}
                  >
                    <span>{option.label}</span>
                    <span className="ml-2 text-xs opacity-70">({option.count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Tag" size={16} className="text-accent" />
            <span className="text-sm font-medium text-text-primary">Active Filters:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([category, filters]) =>
              filters.map((filter) => (
                <span
                  key={`${category}-${filter}`}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs"
                >
                  <span>{filter}</span>
                  <button
                    onClick={() => onFilterChange(category, filter)}
                    className="hover:bg-accent-600 rounded-full p-0.5 transition-smooth"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;