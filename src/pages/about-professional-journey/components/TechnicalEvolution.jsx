import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalEvolution = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState({});

  const evolutionPhases = [
    {
      id: 1,
      phase: "Foundation Phase",
      period: "2018-2019",
      title: "Security & Programming Fundamentals",
      description: "Started with cybersecurity fundamentals and programming basics. Built strong foundation in security principles while learning core programming concepts.",
      technologies: [
        { name: "Python", level: 60, category: "Programming" },
        { name: "Network Security", level: 80, category: "Security" },
        { name: "Linux", level: 70, category: "Systems" },
        { name: "SQL", level: 65, category: "Database" }
      ],
      achievements: [
        "Completed cybersecurity certification",
        "Built first security audit tools",
        "Mastered Linux system administration"
      ],
      color: "primary"
    },
    {
      id: 2,
      phase: "Web Development Entry",
      period: "2019-2020",
      title: "Frontend & Backend Basics",
      description: "Transitioned into web development while maintaining security focus. Learned HTML, CSS, JavaScript, and basic backend concepts with security-first approach.",
      technologies: [
        { name: "JavaScript", level: 75, category: "Programming" },
        { name: "HTML/CSS", level: 85, category: "Frontend" },
        { name: "Node.js", level: 60, category: "Backend" },
        { name: "Web Security", level: 90, category: "Security" }
      ],
      achievements: [
        "Built first secure web applications",
        "Implemented OWASP security guidelines",
        "Created security-focused development workflow"
      ],
      color: "accent"
    },
    {
      id: 3,
      phase: "React & Modern Frontend",
      period: "2020-2021",
      title: "Component-Based Architecture",
      description: "Mastered React ecosystem and modern frontend development. Focused on building secure, scalable user interfaces with performance optimization.",
      technologies: [
        { name: "React", level: 90, category: "Frontend" },
        { name: "Redux", level: 80, category: "State Management" },
        { name: "Webpack", level: 70, category: "Build Tools" },
        { name: "TypeScript", level: 75, category: "Programming" }
      ],
      achievements: [
        "Built complex React applications",
        "Implemented secure authentication flows",
        "Optimized application performance"
      ],
      color: "primary"
    },
    {
      id: 4,
      phase: "Full-Stack Mastery",
      period: "2021-2022",
      title: "MERN Stack Expertise",
      description: "Achieved full-stack proficiency with MERN stack. Integrated advanced security practices into every layer of application development.",
      technologies: [
        { name: "MongoDB", level: 85, category: "Database" },
        { name: "Express.js", level: 90, category: "Backend" },
        { name: "React", level: 95, category: "Frontend" },
        { name: "Node.js", level: 90, category: "Backend" }
      ],
      achievements: [
        "Delivered 20+ full-stack projects",
        "Implemented microservices architecture",
        "Built secure API ecosystems"
      ],
      color: "accent"
    },
    {
      id: 5,
      phase: "Advanced & Cloud",
      period: "2022-Present",
      title: "Cloud-Native & DevSecOps",
      description: "Expanded into cloud technologies and DevSecOps practices. Building scalable, secure applications with modern deployment strategies.",
      technologies: [
        { name: "AWS", level: 80, category: "Cloud" },
        { name: "Docker", level: 85, category: "DevOps" },
        { name: "Kubernetes", level: 70, category: "Orchestration" },
        { name: "CI/CD", level: 85, category: "DevOps" }
      ],
      achievements: [
        "Architected cloud-native solutions",
        "Implemented automated security testing",
        "Built scalable microservices platforms"
      ],
      color: "primary"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedSkills = {};
      evolutionPhases[activePhase].technologies.forEach((tech, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => ({
            ...prev,
            [`${activePhase}-${index}`]: true
          }));
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [activePhase]);

  const getCategoryIcon = (category) => {
    const icons = {
      'Programming': 'Code',
      'Security': 'Shield',
      'Frontend': 'Monitor',
      'Backend': 'Server',
      'Database': 'Database',
      'Systems': 'Terminal',
      'State Management': 'GitBranch',
      'Build Tools': 'Settings',
      'Cloud': 'Cloud',
      'DevOps': 'Workflow',
      'Orchestration': 'Network'
    };
    return icons[category] || 'Code';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Programming': 'text-blue-600',
      'Security': 'text-red-600',
      'Frontend': 'text-green-600',
      'Backend': 'text-purple-600',
      'Database': 'text-orange-600',
      'Systems': 'text-gray-600',
      'State Management': 'text-indigo-600',
      'Build Tools': 'text-yellow-600',
      'Cloud': 'text-sky-600',
      'DevOps': 'text-teal-600',
      'Orchestration': 'text-pink-600'
    };
    return colors[category] || 'text-gray-600';
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-accent-600 mb-4">
            <Icon name="TrendingUp" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Technical Evolution</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            From Security to Full-Stack Mastery
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A progressive journey through technologies and frameworks, always maintaining a security-first mindset. 
            Each phase built upon the previous, creating a comprehensive skill set.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {evolutionPhases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activePhase === index
                  ? 'bg-accent text-accent-foreground shadow-secondary'
                  : 'bg-surface text-text-secondary hover:bg-accent-50 hover:text-accent'
              }`}
            >
              <div className="text-sm">
                <div className="font-semibold">{phase.phase}</div>
                <div className="text-xs opacity-80">{phase.period}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Phase Content */}
        <div className="bg-surface rounded-2xl border border-border p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Phase Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    evolutionPhases[activePhase].color === 'primary' ?'bg-primary text-primary-foreground' :'bg-accent text-accent-foreground'
                  }`}>
                    <Icon name="Code" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-primary">
                      {evolutionPhases[activePhase].title}
                    </h3>
                    <div className="text-sm text-text-secondary">
                      {evolutionPhases[activePhase].period}
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed">
                  {evolutionPhases[activePhase].description}
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-heading font-semibold text-primary mb-4">
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {evolutionPhases[activePhase].achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies & Skills */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-primary mb-6">
                Technologies Mastered
              </h4>
              <div className="space-y-6">
                {evolutionPhases[activePhase].technologies.map((tech, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon 
                          name={getCategoryIcon(tech.category)} 
                          size={18} 
                          className={getCategoryColor(tech.category)}
                        />
                        <span className="font-medium text-primary">{tech.name}</span>
                        <span className="text-xs text-text-muted px-2 py-1 bg-surface-secondary rounded">
                          {tech.category}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-text-secondary">
                        {tech.level}%
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="w-full bg-surface-secondary rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          tech.category === 'Security' ? 'bg-red-500' :
                          tech.category === 'Frontend' ? 'bg-green-500' :
                          tech.category === 'Backend'? 'bg-purple-500' : 'bg-accent'
                        }`}
                        style={{
                          width: animatedSkills[`${activePhase}-${index}`] ? `${tech.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Evolution Summary */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12 text-center">
          <Icon name="Target" size={48} className="text-accent mx-auto mb-6" />
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
            The Result: Security-First Full-Stack Excellence
          </h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            This evolutionary journey has created a unique skill set that combines deep security knowledge 
            with modern full-stack development expertise. Every project benefits from this comprehensive foundation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-background rounded-xl p-6 shadow-primary">
              <Icon name="Shield" size={32} className="text-red-600 mx-auto mb-4" />
              <h4 className="font-heading font-semibold text-primary mb-2">Security Expertise</h4>
              <p className="text-sm text-text-secondary">Every application built with security as a core principle</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-primary">
              <Icon name="Code" size={32} className="text-blue-600 mx-auto mb-4" />
              <h4 className="font-heading font-semibold text-primary mb-2">Full-Stack Mastery</h4>
              <p className="text-sm text-text-secondary">Complete MERN stack proficiency with modern practices</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-primary">
              <Icon name="Cloud" size={32} className="text-green-600 mx-auto mb-4" />
              <h4 className="font-heading font-semibold text-primary mb-2">Cloud-Native</h4>
              <p className="text-sm text-text-secondary">Scalable, modern deployment and architecture patterns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalEvolution;