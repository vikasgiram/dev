import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContinuousLearning = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentCourses = [
    {
      id: 1,
      title: 'Advanced React Patterns & Performance',
      provider: 'Frontend Masters',
      instructor: 'Kent C. Dodds',
      progress: 75,
      estimatedCompletion: '2024-02-15',
      description: 'Deep dive into advanced React patterns, performance optimization, and modern development practices',
      skills: ['React 18', 'Concurrent Features', 'Performance', 'Testing'],
      url: 'https://frontendmasters.com/courses/react-performance'
    },
    {
      id: 2,
      title: 'Kubernetes for Developers',
      provider: 'Linux Foundation',
      instructor: 'Cloud Native Computing Foundation',
      progress: 45,
      estimatedCompletion: '2024-03-01',
      description: 'Container orchestration and deployment strategies for modern applications',
      skills: ['Kubernetes', 'Docker', 'DevOps', 'Microservices'],
      url: 'https://training.linuxfoundation.org/training/kubernetes-for-developers'
    },
    {
      id: 3,
      title: 'Advanced Cybersecurity Practices',
      provider: 'SANS Institute',
      instructor: 'Security Experts',
      progress: 60,
      estimatedCompletion: '2024-02-28',
      description: 'Latest cybersecurity threats, defense strategies, and secure coding practices',
      skills: ['Security', 'Threat Analysis', 'Secure Coding', 'Risk Assessment'],
      url: 'https://www.sans.org/cyber-security-courses'
    }
  ];

  const emergingTechnologies = [
    {
      id: 1,
      name: 'WebAssembly (WASM)',
      category: 'Performance',
      status: 'exploring',
      description: 'High-performance web applications with near-native speed',
      potentialUse: 'CPU-intensive client-side processing and game development',
      learningResources: ['MDN WebAssembly Guide', 'Rust and WebAssembly Book', 'AssemblyScript'],
      icon: 'Zap'
    },
    {
      id: 2,
      name: 'Edge Computing',
      category: 'Infrastructure',
      status: 'researching',
      description: 'Distributed computing paradigm bringing computation closer to data sources',
      potentialUse: 'Low-latency applications and IoT data processing',
      learningResources: ['Cloudflare Workers', 'Vercel Edge Functions', 'AWS Lambda@Edge'],
      icon: 'Globe'
    },
    {
      id: 3,
      name: 'AI/ML Integration',
      category: 'Intelligence',
      status: 'experimenting',
      description: 'Integrating machine learning models into web applications',
      potentialUse: 'Intelligent user interfaces and automated decision making',
      learningResources: ['TensorFlow.js', 'OpenAI API', 'Hugging Face Transformers'],
      icon: 'Brain'
    },
    {
      id: 4,
      name: 'Web3 & Blockchain',
      category: 'Decentralization',
      status: 'learning',
      description: 'Decentralized applications and blockchain integration',
      potentialUse: 'Smart contracts and decentralized identity systems',
      learningResources: ['Ethereum Documentation', 'Solidity', 'Web3.js'],
      icon: 'Link'
    }
  ];

  const openSourceContributions = [
    {
      id: 1,
      project: 'React Security Utils',
      repository: 'vikas-giram/react-security-utils',
      description: 'A collection of React hooks and utilities for implementing security best practices',
      language: 'TypeScript',
      stars: 234,
      forks: 45,
      lastUpdate: '2024-01-15',
      contributions: ['Created core security hooks', 'Added XSS prevention utilities', 'Implemented CSRF protection'],
      status: 'active'
    },
    {
      id: 2,
      project: 'MERN Stack Boilerplate',
      repository: 'vikas-giram/secure-mern-boilerplate',
      description: 'Production-ready MERN stack template with security-first architecture',
      language: 'JavaScript',
      stars: 189,
      forks: 67,
      lastUpdate: '2024-01-10',
      contributions: ['Built authentication system', 'Implemented rate limiting', 'Added comprehensive testing'],
      status: 'active'
    },
    {
      id: 3,
      project: 'Node.js Security Middleware',
      repository: 'vikas-giram/node-security-middleware',
      description: 'Express.js middleware collection for enhanced API security',
      language: 'JavaScript',
      stars: 156,
      forks: 23,
      lastUpdate: '2023-12-20',
      contributions: ['Created security headers middleware', 'Added input validation', 'Implemented logging system'],
      status: 'maintained'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      exploring: 'bg-info-100 text-info-700',
      researching: 'bg-warning-100 text-warning-700',
      experimenting: 'bg-accent-100 text-accent-700',
      learning: 'bg-primary-100 text-primary-700',
      active: 'bg-accent-100 text-accent-700',
      maintained: 'bg-secondary-100 text-secondary-700'
    };
    return colors[status] || 'bg-secondary-100 text-secondary-700';
  };

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-accent';
    if (progress >= 50) return 'bg-info';
    if (progress >= 25) return 'bg-warning';
    return 'bg-secondary-300';
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-primary">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-info rounded-lg flex items-center justify-center shadow-primary">
          <Icon name="BookOpen" size={24} color="white" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-primary">Continuous Learning Journey</h3>
          <p className="text-text-secondary">Staying ahead of technology trends and expanding expertise</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={activeTab === 'current' ? "primary" : "ghost"}
          size="sm"
          iconName="Play"
          iconPosition="left"
          onClick={() => setActiveTab('current')}
        >
          Current Courses
        </Button>
        <Button
          variant={activeTab === 'emerging' ? "primary" : "ghost"}
          size="sm"
          iconName="Telescope"
          iconPosition="left"
          onClick={() => setActiveTab('emerging')}
        >
          Emerging Tech
        </Button>
        <Button
          variant={activeTab === 'opensource' ? "primary" : "ghost"}
          size="sm"
          iconName="Github"
          iconPosition="left"
          onClick={() => setActiveTab('opensource')}
        >
          Open Source
        </Button>
      </div>

      {activeTab === 'current' && (
        <div className="space-y-6">
          {currentCourses.map((course) => (
            <div key={course.id} className="bg-background border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-1">{course.title}</h4>
                  <p className="text-text-secondary text-sm mb-2">
                    {course.provider} • {course.instructor}
                  </p>
                  <p className="text-text-secondary text-sm">{course.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ExternalLink"
                  onClick={() => window.open(course.url, '_blank')}
                />
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-text-secondary">Progress</span>
                  <span className="text-text-primary font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-secondary-100 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(course.progress)} transition-all duration-500`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-text-muted mt-1">
                  Expected completion: {new Date(course.estimatedCompletion).toLocaleDateString()}
                </p>
              </div>

              <div className="flex flex-wrap gap-1">
                {course.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'emerging' && (
        <div className="grid md:grid-cols-2 gap-6">
          {emergingTechnologies.map((tech) => (
            <div key={tech.id} className="bg-background border border-border rounded-lg p-4">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon name={tech.icon} size={20} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-text-primary">{tech.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(tech.status)}`}>
                      {tech.status}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mb-1">{tech.category}</p>
                </div>
              </div>

              <p className="text-text-secondary text-sm mb-3">{tech.description}</p>

              <div className="mb-4">
                <h5 className="text-xs font-semibold text-text-primary mb-2">Potential Applications</h5>
                <p className="text-text-secondary text-sm">{tech.potentialUse}</p>
              </div>

              <div>
                <h5 className="text-xs font-semibold text-text-primary mb-2">Learning Resources</h5>
                <div className="flex flex-wrap gap-1">
                  {tech.learningResources.map((resource, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-accent-100 text-accent-700 rounded-full"
                    >
                      {resource}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'opensource' && (
        <div className="space-y-6">
          {openSourceContributions.map((project) => (
            <div key={project.id} className="bg-background border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-text-primary">{project.project}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm font-mono mb-2">{project.repository}</p>
                  <p className="text-text-secondary text-sm">{project.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Github"
                  onClick={() => window.open(`https://github.com/${project.repository}`, '_blank')}
                />
              </div>

              <div className="flex items-center space-x-6 mb-4 text-sm text-text-muted">
                <div className="flex items-center space-x-1">
                  <Icon name="Code" size={14} />
                  <span>{project.language}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="GitFork" size={14} />
                  <span>{project.forks}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{new Date(project.lastUpdate).toLocaleDateString()}</span>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-semibold text-text-primary mb-2">Key Contributions</h5>
                <ul className="space-y-1">
                  {project.contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={12} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Target" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-primary-700 mb-1">Learning Philosophy</h4>
            <p className="text-primary-600 text-sm">
              Technology evolves rapidly, and staying current requires continuous learning and experimentation. 
              I dedicate time weekly to exploring new technologies, contributing to open source, and sharing 
              knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinuousLearning;