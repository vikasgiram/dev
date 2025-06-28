import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code' },
    { id: 'architecture', label: 'Architecture', icon: 'Network' },
    { id: 'performance', label: 'Performance', icon: 'Activity' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-background rounded-2xl shadow-large max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 bg-background border-b border-border p-6 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="FolderOpen" size={24} color="white" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-text-primary">
                    {project.title}
                  </h2>
                  <p className="text-text-secondary">{project.category} • {project.year}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Github"
                    iconPosition="left"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    Source Code
                  </Button>
                )}
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-lg border border-border hover:bg-surface transition-smooth flex items-center justify-center"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mt-6 bg-surface rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                    activeTab === tab.id
                      ? 'bg-background text-primary shadow-sm'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Project Overview</h3>
                  <p className="text-text-secondary leading-relaxed">{project.fullDescription}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features?.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-surface rounded-lg">
                        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={feature.icon} size={16} color="white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-text-primary">{feature.title}</h4>
                          <p className="text-sm text-text-secondary mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Project Impact</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-surface rounded-lg">
                        <div className="text-2xl font-bold text-accent mb-1">{metric.value}</div>
                        <div className="text-sm text-text-secondary">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="space-y-6">
                {/* Technology Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Technology Stack</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <Icon name="Code" size={16} color="white" />
                        </div>
                        <span className="font-medium text-text-primary">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Code Highlight</h3>
                  <div className="bg-secondary-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 font-mono text-sm">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                </div>

                {/* Security Features */}
                {project.securityFeatures && (
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Security Implementation</h3>
                    <div className="space-y-3">
                      {project.securityFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-error-50 border border-error-100 rounded-lg">
                          <Icon name="Shield" size={20} className="text-error mt-0.5" />
                          <div>
                            <h4 className="font-medium text-text-primary">{feature.title}</h4>
                            <p className="text-sm text-text-secondary mt-1">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                {/* Architecture Diagram */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">System Architecture</h3>
                  <div className="bg-surface rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-4">
                      <Icon name="Network" size={32} color="white" />
                    </div>
                    <p className="text-text-secondary">Architecture diagram would be displayed here</p>
                  </div>
                </div>

                {/* Technical Challenges */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Technical Challenges & Solutions</h3>
                  <div className="space-y-4">
                    {project.challenges?.map((challenge, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex items-start space-x-3 mb-3">
                          <Icon name="AlertTriangle" size={20} className="text-warning mt-0.5" />
                          <h4 className="font-medium text-text-primary">{challenge.problem}</h4>
                        </div>
                        <div className="flex items-start space-x-3 ml-8">
                          <Icon name="CheckCircle" size={20} className="text-accent mt-0.5" />
                          <p className="text-text-secondary">{challenge.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="space-y-6">
                {/* Performance Metrics */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Performance Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.performanceMetrics?.map((metric, index) => (
                      <div key={index} className="bg-surface rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-text-primary">{metric.name}</span>
                          <span className="text-sm text-accent font-semibold">{metric.value}</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div 
                            className="bg-accent h-2 rounded-full transition-smooth"
                            style={{ width: `${metric.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Before/After Comparison */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Before vs After Optimization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-error-50 border border-error-100 rounded-lg p-4">
                      <h4 className="font-medium text-error mb-3 flex items-center">
                        <Icon name="TrendingDown" size={16} className="mr-2" />
                        Before Optimization
                      </h4>
                      <div className="space-y-2">
                        {project.beforeOptimization?.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-text-secondary">{item.metric}</span>
                            <span className="text-error font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-accent-50 border border-accent-100 rounded-lg p-4">
                      <h4 className="font-medium text-accent mb-3 flex items-center">
                        <Icon name="TrendingUp" size={16} className="mr-2" />
                        After Optimization
                      </h4>
                      <div className="space-y-2">
                        {project.afterOptimization?.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-text-secondary">{item.metric}</span>
                            <span className="text-accent font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;