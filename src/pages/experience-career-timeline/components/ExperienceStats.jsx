import React from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceStats = ({ timelineData }) => {
  const calculateStats = () => {
    const workExperience = timelineData.filter(item => item.type === 'work');
    const education = timelineData.filter(item => item.type === 'education');
    const certifications = timelineData.filter(item => item.type === 'certification');
    
    // Calculate total years of experience
    let totalMonths = 0;
    workExperience.forEach(item => {
      const start = new Date(item.startDate);
      const end = item.endDate === 'Present' ? new Date() : new Date(item.endDate);
      const diffTime = Math.abs(end - start);
      const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
      totalMonths += diffMonths;
    });
    
    const totalYears = Math.floor(totalMonths / 12);
    
    // Get all unique technologies
    const allTechnologies = new Set();
    timelineData.forEach(item => {
      if (item.technologies) {
        item.technologies.forEach(tech => allTechnologies.add(tech));
      }
    });
    
    // Count total projects
    const totalProjects = timelineData.reduce((count, item) => {
      return count + (item.projects ? item.projects.length : 0);
    }, 0);
    
    return {
      totalYears,
      totalPositions: workExperience.length,
      totalEducation: education.length,
      totalCertifications: certifications.length,
      totalTechnologies: allTechnologies.size,
      totalProjects
    };
  };

  const stats = calculateStats();

  const statItems = [
    {
      icon: 'Clock',
      label: 'Years Experience',
      value: `${stats.totalYears}+`,
      color: 'text-accent',
      bgColor: 'bg-accent-50'
    },
    {
      icon: 'Briefcase',
      label: 'Professional Roles',
      value: stats.totalPositions,
      color: 'text-primary',
      bgColor: 'bg-primary-50'
    },
    {
      icon: 'Code',
      label: 'Technologies Mastered',
      value: `${stats.totalTechnologies}+`,
      color: 'text-info',
      bgColor: 'bg-info-50'
    },
    {
      icon: 'FolderOpen',
      label: 'Projects Delivered',
      value: `${stats.totalProjects}+`,
      color: 'text-warning',
      bgColor: 'bg-warning-50'
    },
    {
      icon: 'GraduationCap',
      label: 'Educational Qualifications',
      value: stats.totalEducation,
      color: 'text-secondary',
      bgColor: 'bg-secondary-50'
    },
    {
      icon: 'Award',
      label: 'Certifications',
      value: stats.totalCertifications,
      color: 'text-success',
      bgColor: 'bg-success-50'
    }
  ];

  return (
    <div className="bg-surface border border-border rounded-lg p-6 mb-8 shadow-primary">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
          <Icon name="BarChart3" size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-text-primary">
            Career Overview
          </h2>
          <p className="text-sm text-text-secondary">
            Professional journey metrics and achievements
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statItems.map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 rounded-lg border border-border hover:shadow-primary transition-smooth"
          >
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
              <Icon name={stat.icon} size={20} className={stat.color} />
            </div>
            <div className="text-2xl font-heading font-bold text-text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-text-secondary font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Experience Growth */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Experience Growth</span>
              <span className="text-sm text-text-secondary">{stats.totalYears} years</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div 
                className="bg-gradient-accent h-2 rounded-full transition-all duration-1000"
                style={{ width: `${Math.min((stats.totalYears / 10) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Technology Mastery */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Technology Stack</span>
              <span className="text-sm text-text-secondary">{stats.totalTechnologies}+ technologies</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-info to-primary h-2 rounded-full transition-all duration-1000"
                style={{ width: `${Math.min((stats.totalTechnologies / 50) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceStats;