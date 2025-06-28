import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GitHubIntegration = () => {
  const [activeView, setActiveView] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState({
    commits: 0,
    repositories: 0,
    contributions: 0,
    followers: 0
  });

  // Mock GitHub data - in real implementation, this would come from GitHub API
  const githubStats = {
    commits: 1247,
    repositories: 34,
    contributions: 892,
    followers: 156,
    following: 89,
    publicRepos: 28,
    privateRepos: 6
  };

  const repositories = [
    {
      id: 1,
      name: 'secure-mern-boilerplate',
      description: 'Production-ready MERN stack template with security-first architecture and comprehensive testing suite',
      language: 'JavaScript',
      stars: 189,
      forks: 67,
      lastUpdate: '2024-01-15',
      topics: ['mern', 'security', 'boilerplate', 'authentication', 'testing'],
      isPrivate: false,
      commits: 156
    },
    {
      id: 2,
      name: 'react-security-utils',
      description: 'Collection of React hooks and utilities for implementing security best practices in modern web applications',
      language: 'TypeScript',
      stars: 234,
      forks: 45,
      lastUpdate: '2024-01-12',
      topics: ['react', 'security', 'hooks', 'typescript', 'utilities'],
      isPrivate: false,
      commits: 89
    },
    {
      id: 3,
      name: 'node-security-middleware',
      description: 'Express.js middleware collection for enhanced API security with rate limiting and input validation',
      language: 'JavaScript',
      stars: 156,
      forks: 23,
      lastUpdate: '2024-01-08',
      topics: ['nodejs', 'express', 'security', 'middleware', 'api'],
      isPrivate: false,
      commits: 67
    },
    {
      id: 4,
      name: 'portfolio-website',
      description: 'Personal portfolio website built with React and modern web technologies',
      language: 'JavaScript',
      stars: 45,
      forks: 12,
      lastUpdate: '2024-01-10',
      topics: ['portfolio', 'react', 'tailwind', 'responsive'],
      isPrivate: false,
      commits: 134
    },
    {
      id: 5,
      name: 'cybersecurity-toolkit',
      description: 'Collection of cybersecurity tools and scripts for penetration testing and vulnerability assessment',
      language: 'Python',
      stars: 78,
      forks: 19,
      lastUpdate: '2023-12-28',
      topics: ['cybersecurity', 'penetration-testing', 'python', 'security-tools'],
      isPrivate: false,
      commits: 92
    },
    {
      id: 6,
      name: 'mongodb-optimization-guide',
      description: 'Comprehensive guide and examples for MongoDB performance optimization and best practices',
      language: 'JavaScript',
      stars: 123,
      forks: 34,
      lastUpdate: '2023-12-15',
      topics: ['mongodb', 'optimization', 'database', 'performance'],
      isPrivate: false,
      commits: 45
    }
  ];

  const contributionData = [
    { date: '2024-01-15', count: 8 },
    { date: '2024-01-14', count: 5 },
    { date: '2024-01-13', count: 12 },
    { date: '2024-01-12', count: 3 },
    { date: '2024-01-11', count: 7 },
    { date: '2024-01-10', count: 9 },
    { date: '2024-01-09', count: 4 },
    { date: '2024-01-08', count: 11 },
    { date: '2024-01-07', count: 6 },
    { date: '2024-01-06', count: 2 },
    { date: '2024-01-05', count: 8 },
    { date: '2024-01-04', count: 5 },
    { date: '2024-01-03', count: 10 },
    { date: '2024-01-02', count: 3 },
    { date: '2024-01-01', count: 1 }
  ];

  const languageStats = [
    { name: 'JavaScript', percentage: 45, color: 'bg-warning' },
    { name: 'TypeScript', percentage: 25, color: 'bg-info' },
    { name: 'Python', percentage: 15, color: 'bg-accent' },
    { name: 'HTML/CSS', percentage: 10, color: 'bg-primary' },
    { name: 'Other', percentage: 5, color: 'bg-secondary' }
  ];

  // Animate stats on component mount
  useEffect(() => {
    const animateValue = (key, target) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    Object.entries(githubStats).forEach(([key, value]) => {
      if (['commits', 'repositories', 'contributions', 'followers'].includes(key)) {
        animateValue(key, value);
      }
    });
  }, []);

  const getContributionIntensity = (count) => {
    if (count === 0) return 'bg-secondary-100';
    if (count <= 3) return 'bg-accent-200';
    if (count <= 6) return 'bg-accent-400';
    if (count <= 9) return 'bg-accent-600';
    return 'bg-accent-800';
  };

  const getLanguageIcon = (language) => {
    const icons = {
      JavaScript: 'FileText',
      TypeScript: 'FileCode',
      Python: 'Code',
      'HTML/CSS': 'Layout',
      Other: 'File'
    };
    return icons[language] || 'File';
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-primary">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-secondary-800 rounded-lg flex items-center justify-center shadow-primary">
          <Icon name="Github" size={24} color="white" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-primary">GitHub Integration</h3>
          <p className="text-text-secondary">Real-time development activity and contributions</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={activeView === 'overview' ? "primary" : "ghost"}
          size="sm"
          iconName="BarChart3"
          iconPosition="left"
          onClick={() => setActiveView('overview')}
        >
          Overview
        </Button>
        <Button
          variant={activeView === 'repositories' ? "primary" : "ghost"}
          size="sm"
          iconName="Folder"
          iconPosition="left"
          onClick={() => setActiveView('repositories')}
        >
          Repositories
        </Button>
        <Button
          variant={activeView === 'contributions' ? "primary" : "ghost"}
          size="sm"
          iconName="Activity"
          iconPosition="left"
          onClick={() => setActiveView('contributions')}
        >
          Contributions
        </Button>
      </div>

      {activeView === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-background border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{animatedStats.commits.toLocaleString()}</div>
              <div className="text-sm text-text-secondary">Total Commits</div>
            </div>
            <div className="bg-background border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">{animatedStats.repositories}</div>
              <div className="text-sm text-text-secondary">Repositories</div>
            </div>
            <div className="bg-background border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-info mb-1">{animatedStats.contributions}</div>
              <div className="text-sm text-text-secondary">Contributions</div>
            </div>
            <div className="bg-background border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-warning mb-1">{animatedStats.followers}</div>
              <div className="text-sm text-text-secondary">Followers</div>
            </div>
          </div>

          <div className="bg-background border border-border rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="PieChart" size={16} className="mr-2" />
              Language Distribution
            </h4>
            <div className="space-y-3">
              {languageStats.map((lang, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name={getLanguageIcon(lang.name)} size={16} color="var(--color-text-secondary)" />
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-text-primary">{lang.name}</span>
                      <span className="text-text-secondary">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-secondary-100 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${lang.color} transition-all duration-1000`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeView === 'repositories' && (
        <div className="space-y-4">
          {repositories.map((repo) => (
            <div key={repo.id} className="bg-background border border-border rounded-lg p-4 hover:shadow-secondary transition-smooth">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name={repo.isPrivate ? "Lock" : "Unlock"} size={16} color="var(--color-text-secondary)" />
                    <h4 className="font-semibold text-text-primary">{repo.name}</h4>
                  </div>
                  <p className="text-text-secondary text-sm mb-2">{repo.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ExternalLink"
                  onClick={() => window.open(`https://github.com/vikas-giram/${repo.name}`, '_blank')}
                />
              </div>

              <div className="flex items-center space-x-4 mb-3 text-sm text-text-muted">
                <div className="flex items-center space-x-1">
                  <div className={`w-3 h-3 rounded-full ${
                    repo.language === 'JavaScript' ? 'bg-warning' :
                    repo.language === 'TypeScript' ? 'bg-info' :
                    repo.language === 'Python' ? 'bg-accent' : 'bg-primary'
                  }`}></div>
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={12} />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="GitFork" size={12} />
                  <span>{repo.forks}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="GitCommit" size={12} />
                  <span>{repo.commits}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{new Date(repo.lastUpdate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {repo.topics.map((topic, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeView === 'contributions' && (
        <div className="space-y-6">
          <div className="bg-background border border-border rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Calendar" size={16} className="mr-2" />
              Recent Activity (Last 15 Days)
            </h4>
            <div className="grid grid-cols-15 gap-1">
              {contributionData.map((day, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${getContributionIntensity(day.count)} transition-colors duration-200`}
                  title={`${day.count} contributions on ${day.date}`}
                ></div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-3 text-xs text-text-muted">
              <span>Less</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-secondary-100 rounded-sm"></div>
                <div className="w-2 h-2 bg-accent-200 rounded-sm"></div>
                <div className="w-2 h-2 bg-accent-400 rounded-sm"></div>
                <div className="w-2 h-2 bg-accent-600 rounded-sm"></div>
                <div className="w-2 h-2 bg-accent-800 rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>

          <div className="bg-background border border-border rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="TrendingUp" size={16} className="mr-2" />
              Contribution Highlights
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-accent-50 rounded-lg">
                <Icon name="GitCommit" size={16} color="var(--color-accent)" />
                <div>
                  <p className="text-sm font-medium text-accent-700">Most Active Day</p>
                  <p className="text-xs text-accent-600">12 contributions on January 13, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-info-50 rounded-lg">
                <Icon name="Calendar" size={16} color="var(--color-info)" />
                <div>
                  <p className="text-sm font-medium text-info-700">Streak Record</p>
                  <p className="text-xs text-info-600">15 consecutive days of contributions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-warning-50 rounded-lg">
                <Icon name="Star" size={16} color="var(--color-warning)" />
                <div>
                  <p className="text-sm font-medium text-warning-700">Top Repository</p>
                  <p className="text-xs text-warning-600">react-security-utils with 234 stars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-center">
        <Button
          variant="primary"
          iconName="Github"
          iconPosition="left"
          onClick={() => window.open('https://github.com/vikas-giram', '_blank')}
        >
          View Full GitHub Profile
        </Button>
      </div>
    </div>
  );
};

export default GitHubIntegration;