import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const stats = [
    {
      icon: 'FolderOpen',
      label: 'Total Projects',
      value: projects.length,
      color: 'primary'
    },
    {
      icon: 'Globe',
      label: 'Live Projects',
      value: projects.filter(p => p.status === 'Live').length,
      color: 'accent'
    },
    {
      icon: 'Shield',
      label: 'Security Audits',
      value: projects.filter(p => p.type === 'Security Audit').length,
      color: 'error'
    },
    {
      icon: 'Zap',
      label: 'Performance Optimized',
      value: projects.filter(p => p.highlights?.some(h => h.icon === 'Zap')).length,
      color: 'warning'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-primary transition-smooth">
          <div className={`w-12 h-12 bg-${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
            <Icon name={stat.icon} size={24} color="white" />
          </div>
          <div className={`text-2xl font-bold text-${stat.color} mb-1`}>
            {stat.value}
          </div>
          <div className="text-sm text-text-secondary">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;