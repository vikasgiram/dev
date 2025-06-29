import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsEvolution = ({ timelineData }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = {
    all: { label: 'All Skills', icon: 'Code', color: 'text-primary' },
    frontend: { label: 'Frontend', icon: 'Monitor', color: 'text-info' },
    backend: { label: 'Backend', icon: 'Server', color: 'text-accent' },
    database: { label: 'Database', icon: 'Database', color: 'text-warning' },
    security: { label: 'Security', icon: 'Shield', color: 'text-error' },
    tools: { label: 'Tools & DevOps', icon: 'Settings', color: 'text-secondary' }
  };

  const skillsEvolutionData = [
    {
      year: '2019',
      period: 'Foundation Years',
      skills: {
        security: ['Network Security', 'Ethical Hacking', 'Vulnerability Assessment', 'Penetration Testing'],
        tools: ['Wireshark', 'Nmap', 'Metasploit', 'Burp Suite'],
        frontend: ['HTML', 'CSS', 'Basic JavaScript'],
        database: ['MySQL Basics']
      }
    },
    {
      year: '2020',
      period: 'Web Development Entry',
      skills: {
        frontend: ['React.js', 'Bootstrap', 'jQuery', 'Responsive Design'],
        backend: ['Node.js', 'Express.js', 'REST APIs'],
        database: ['MongoDB', 'MySQL', 'Database Design'],
        security: ['Web Security', 'OWASP Top 10', 'Secure Coding'],
        tools: ['Git', 'VS Code', 'Postman']
      }
    },
    {
      year: '2021',
      period: 'Full-Stack Development',
      skills: {
        frontend: ['Advanced React', 'Redux', 'Material-UI', 'Tailwind CSS'],
        backend: ['Advanced Node.js', 'GraphQL', 'Microservices', 'Authentication'],
        database: ['PostgreSQL', 'Redis', 'Database Optimization'],
        security: ['JWT Security', 'OAuth', 'API Security', 'Data Encryption'],
        tools: ['Docker', 'AWS Basics', 'CI/CD', 'Testing Frameworks']
      }
    },
    {
      year: '2022',
      period: 'Advanced Specialization',
      skills: {
        frontend: ['Next.js', 'TypeScript', 'Advanced State Management', 'Performance Optimization'],
        backend: ['Serverless Architecture', 'Advanced APIs', 'Real-time Applications', 'Scalable Systems'],
        database: ['Advanced MongoDB', 'Database Sharding', 'Performance Tuning', 'Data Analytics'],
        security: ['Advanced Cybersecurity', 'Security Architecture', 'Compliance', 'Risk Assessment'],
        tools: ['Kubernetes', 'Advanced AWS', 'Monitoring Tools', 'DevSecOps']
      }
    },
    {
      year: '2023',
      period: 'Leadership & Innovation',
      skills: {
        frontend: ['Advanced React Patterns', 'Micro-frontends', 'Web3 Integration', 'Progressive Web Apps'],
        backend: ['Cloud Architecture', 'Event-Driven Architecture', 'Advanced Microservices', 'API Gateway'],
        database: ['Multi-database Systems', 'Data Warehousing', 'Big Data', 'Analytics'],
        security: ['Zero Trust Architecture', 'Cloud Security', 'DevSecOps', 'Security Leadership'],
        tools: ['Advanced DevOps', 'Infrastructure as Code', 'Monitoring & Observability', 'Team Leadership']
      }
    },
    {
      year: '2024',
      period: 'Current Expertise',
      skills: {
        frontend: ['React 18', 'Advanced TypeScript', 'Modern CSS', 'AI Integration'],
        backend: ['Advanced Cloud Services', 'AI/ML Integration', 'Advanced Security', 'System Design'],
        database: ['Advanced Analytics', 'Real-time Data', 'Multi-cloud Databases', 'Data Security'],
        security: ['AI Security', 'Advanced Threat Detection', 'Security Automation', 'Compliance Leadership'],
        tools: ['Advanced Cloud Platforms', 'AI/ML Tools', 'Advanced Monitoring', 'Strategic Planning']
      }
    }
  ];

  const getFilteredSkills = (yearData) => {
    if (selectedCategory === 'all') {
      return Object.entries(yearData.skills).reduce((acc, [category, skills]) => {
        return [...acc, ...skills.map(skill => ({ skill, category }))];
      }, []);
    }
    return (yearData.skills[selectedCategory] || []).map(skill => ({ skill, category: selectedCategory }));
  };

  const getCategoryColor = (category) => {
    return skillCategories[category]?.color || 'text-text-secondary';
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-6 mb-8 shadow-primary">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-info to-accent rounded-lg flex items-center justify-center">
          <Icon name="TrendingUp" size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-text-primary">
            Skills Evolution Timeline
          </h2>
          <p className="text-sm text-text-secondary">
            Technical growth and skill acquisition over the years
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {Object.entries(skillCategories).map(([key, category]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "primary" : "ghost"}
              size="sm"
              iconName={category.icon}
              iconPosition="left"
              onClick={() => setSelectedCategory(key)}
              className="transition-smooth"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Skills Timeline */}
      <div className="space-y-6">
        {skillsEvolutionData.map((yearData, index) => {
          const filteredSkills = getFilteredSkills(yearData);
          
          if (filteredSkills.length === 0) return null;

          return (
            <div key={index} className="relative">
              {/* Year Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {yearData.year.slice(-2)}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary">
                      {yearData.year}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {yearData.period}
                    </p>
                  </div>
                </div>
                <div className="flex-1 h-px bg-border"></div>
              </div>

              {/* Skills Grid */}
              <div className="ml-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filteredSkills.map((skillData, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 p-3 bg-background border border-border rounded-lg hover:shadow-primary transition-smooth"
                  >
                    <div className={`w-2 h-2 rounded-full ${getCategoryColor(skillData.category).replace('text-', 'bg-')}`}></div>
                    <span className="text-sm font-medium text-text-primary">
                      {skillData.skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Connection Line */}
              {index < skillsEvolutionData.length - 1 && (
                <div className="absolute left-4 top-16 w-px h-6 bg-border"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Skills Summary */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.entries(skillCategories).slice(1).map(([key, category]) => {
            const categorySkills = skillsEvolutionData.reduce((acc, yearData) => {
              return acc + (yearData.skills[key]?.length || 0);
            }, 0);

            return (
              <div key={key} className="text-center p-3 bg-background border border-border rounded-lg">
                <Icon name={category.icon} size={20} className={`${category.color} mx-auto mb-2`} />
                <div className="text-lg font-bold text-text-primary">{categorySkills}+</div>
                <div className="text-xs text-text-secondary">{category.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsEvolution;