import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const SkillCategory = ({ category, skills, icon, color, description }) => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggleSkillDetails = (skillId) => {
    setExpandedSkill(expandedSkill === skillId ? null : skillId);
  };

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-accent';
      case 'Advanced': return 'bg-info';
      case 'Intermediate': return 'bg-warning';
      default: return 'bg-secondary-300';
    }
  };

  const getProficiencyWidth = (level) => {
    switch (level) {
      case 'Expert': return 'w-full';
      case 'Advanced': return 'w-4/5';
      case 'Intermediate': return 'w-3/5';
      default: return 'w-2/5';
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-primary hover:shadow-secondary transition-smooth">
      <div className="flex items-center space-x-4 mb-6">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center shadow-primary`}>
          <Icon name={icon} size={24} color="white" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-primary">{category}</h3>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.id} className="border border-border-muted rounded-lg overflow-hidden">
            <div 
              className="p-4 cursor-pointer hover:bg-surface-secondary transition-smooth"
              onClick={() => toggleSkillDetails(skill.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon name={skill.icon} size={16} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{skill.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      skill.proficiency === 'Expert' ? 'bg-accent-100 text-accent-700' :
                      skill.proficiency === 'Advanced' ? 'bg-info-100 text-info-700' :
                      skill.proficiency === 'Intermediate'? 'bg-warning-100 text-warning-700' : 'bg-secondary-100 text-secondary-700'
                    }`}>
                      {skill.proficiency}
                    </span>
                  </div>
                </div>
                <Icon 
                  name={expandedSkill === skill.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  color="var(--color-text-secondary)" 
                />
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-secondary">Proficiency</span>
                  <span className="text-text-primary font-medium">{skill.experience}</span>
                </div>
                <div className="w-full bg-secondary-100 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getProficiencyColor(skill.proficiency)} ${getProficiencyWidth(skill.proficiency)} transition-all duration-500`}
                  ></div>
                </div>
              </div>

              <p className="text-text-secondary text-sm">{skill.description}</p>
            </div>

            {expandedSkill === skill.id && (
              <div className="border-t border-border-muted bg-surface-secondary p-4 animate-slide-up">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-text-primary mb-3 flex items-center">
                      <Icon name="Code" size={16} className="mr-2" />
                      Code Example
                    </h5>
                    <div className="code-block">
                      <pre className="text-xs overflow-x-auto">
                        <code>{skill.codeExample}</code>
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-primary mb-3 flex items-center">
                      <Icon name="Lightbulb" size={16} className="mr-2" />
                      Key Projects
                    </h5>
                    <ul className="space-y-2">
                      {skill.projects.map((project, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={14} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;