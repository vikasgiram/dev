import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillCategory from './components/SkillCategory';
import SecurityIntegration from './components/SecurityIntegration';
import InteractiveCodePlayground from './components/InteractiveCodePlayground';
import CertificationBadges from './components/CertificationBadges';
import ContinuousLearning from './components/ContinuousLearning';
import GitHubIntegration from './components/GitHubIntegration';

const SkillsTechnicalMasteryCenter = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: 'Monitor',
      color: 'bg-info',
      description: 'Modern UI/UX development with React ecosystem',
      skills: [
        {
          id: 1,
          name: 'React.js',
          icon: 'Component',
          proficiency: 'Expert',
          experience: '4+ years',
          description: 'Advanced React development with hooks, context, and performance optimization',
          codeExample: `const useSecureAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const login = useCallback(async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      setUser(response.user);
      secureStorage.setToken(response.token);
    } catch (error) {
      throw new AuthError(error.message);
    }
  }, []);
  
  return { user, login, loading };
};`,
          projects: [
            'E-commerce platform with 50k+ users',
            'Real-time dashboard for financial data',
            'Multi-tenant SaaS application'
          ]
        },
        {
          id: 2,
          name: 'JavaScript (ES6+)',
          icon: 'FileText',
          proficiency: 'Expert',
          experience: '5+ years',
          description: 'Modern JavaScript with advanced patterns and performance optimization',
          codeExample: `class DataProcessor {
  constructor(options = {}) {
    this.cache = new Map();
    this.options = { timeout: 5000, ...options };
  }
  
  async processData(data) {
    const key = this.generateKey(data);
    
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    
    const result = await this.transform(data);
    this.cache.set(key, result);
    
    return result;
  }
}`,
          projects: [
            'High-performance data visualization tools',
            'Real-time WebSocket applications',
            'Complex form validation systems'
          ]
        },
        {
          id: 3,
          name: 'TypeScript',
          icon: 'FileCode',
          proficiency: 'Advanced',
          experience: '3+ years',
          description: 'Type-safe development with advanced TypeScript patterns',
          codeExample: `interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}

class ApiClient {
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      
      return {
        data,
        status: 'success'
      };
    } catch (error) {
      return {
        data: null as T,
        status: 'error',
        message: error.message
      };
    }
  }
}`,
          projects: [
            'Large-scale enterprise applications',
            'Type-safe API integrations',
            'Component library development'
          ]
        }
      ]
    },
    {
      category: 'Backend Development',
      icon: 'Server',
      color: 'bg-accent',
      description: 'Scalable server-side solutions with Node.js ecosystem',
      skills: [
        {
          id: 4,
          name: 'Node.js',
          icon: 'Cpu',
          proficiency: 'Expert',
          experience: '4+ years',
          description: 'High-performance server applications with Express.js and microservices',
          codeExample: `const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();

// Security middleware
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// Error handling middleware
app.use((error, req, res, next) => {
  logger.error(error);
  res.status(500).json({
    error: 'Internal server error'
  });
});`,
          projects: [
            'RESTful APIs serving 1M+ requests/day',
            'Microservices architecture implementation',
            'Real-time chat applications'
          ]
        },
        {
          id: 5,
          name: 'Express.js',
          icon: 'Zap',
          proficiency: 'Expert',
          experience: '4+ years',
          description: 'RESTful API development with middleware and authentication',
          codeExample: `const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Access denied' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};`,
          projects: [
            'Authentication and authorization systems',
            'Payment processing APIs',
            'File upload and processing services'
          ]
        }
      ]
    },
    {
      category: 'Database Management',
      icon: 'Database',
      color: 'bg-warning',
      description: 'Efficient data storage and retrieval with modern databases',
      skills: [
        {
          id: 6,
          name: 'MongoDB',
          icon: 'Database',
          proficiency: 'Expert',
          experience: '4+ years',
          description: 'NoSQL database design, aggregation pipelines, and performance optimization',
          codeExample: `const getUserAnalytics = async (userId) => {
  return await User.aggregate([
    { $match: { _id: ObjectId(userId) } },
    {
      $lookup: {
        from: 'orders',
        localField: '_id',
        foreignField: 'userId',
        as: 'orders'
      }
    },
    {
      $addFields: {
        totalOrders: { $size: '$orders' },
        totalSpent: { $sum: '$orders.amount' }
      }
    },
    {
      $project: {
        name: 1,
        email: 1,
        totalOrders: 1,
        totalSpent: 1,
        averageOrderValue: {
          $divide: ['$totalSpent', '$totalOrders']
        }
      }
    }
  ]);
};`,
          projects: [
            'E-commerce product catalogs',
            'User analytics and reporting systems',
            'Content management systems'
          ]
        },
        {
          id: 7,
          name: 'MySQL',
          icon: 'Database',
          proficiency: 'Advanced',
          experience: '3+ years',
          description: 'Relational database design, complex queries, and optimization',
          codeExample: `-- Complex query with joins and subqueries
SELECT 
  u.id,
  u.name,
  u.email,
  COUNT(o.id) as total_orders,
  SUM(o.total_amount) as total_spent,
  AVG(o.total_amount) as avg_order_value,
  (
    SELECT COUNT(*) 
    FROM reviews r 
    WHERE r.user_id = u.id
  ) as total_reviews
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
GROUP BY u.id, u.name, u.email
HAVING total_orders > 0
ORDER BY total_spent DESC
LIMIT 100;`,
          projects: [
            'Financial transaction systems',
            'Inventory management systems',
            'Customer relationship management'
          ]
        }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: 'Settings',
      color: 'bg-primary',
      description: 'Development workflow optimization and deployment automation',
      skills: [
        {
          id: 8,
          name: 'Git & GitHub',
          icon: 'GitBranch',
          proficiency: 'Expert',
          experience: '5+ years',
          description: 'Version control, branching strategies, and collaborative development',
          codeExample: `# Advanced Git workflow
git checkout -b feature/user-authentication
git add .
git commit -m "feat: implement JWT authentication

- Add login/logout endpoints
- Implement token validation middleware
- Add password hashing with bcrypt
- Include rate limiting for auth routes

Closes #123"

git push origin feature/user-authentication
# Create pull request with detailed description`,
          projects: [
            'Team collaboration on 20+ repositories',
            'Open source project maintenance',
            'Code review and mentoring processes'
          ]
        },
        {
          id: 9,
          name: 'Docker',
          icon: 'Package',
          proficiency: 'Advanced',
          experience: '2+ years',
          description: 'Containerization and deployment with Docker and Docker Compose',
          codeExample: `# Multi-stage Dockerfile for Node.js app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
WORKDIR /app
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --chown=nextjs:nodejs . .
USER nextjs
EXPOSE 3000
CMD ["npm", "start"]`,
          projects: [
            'Microservices containerization',
            'Development environment standardization',
            'CI/CD pipeline integration'
          ]
        }
      ]
    }
  ];

  const navigationSections = [
    { key: 'overview', label: 'Skills Overview', icon: 'BarChart3' },
    { key: 'security', label: 'Security Integration', icon: 'ShieldCheck' },
    { key: 'playground', label: 'Code Playground', icon: 'Play' },
    { key: 'certifications', label: 'Certifications', icon: 'Award' },
    { key: 'learning', label: 'Continuous Learning', icon: 'BookOpen' },
    { key: 'github', label: 'GitHub Activity', icon: 'Github' }
  ];

  return (
    <>
      <Helmet>
        <title>Skills - Technical Mastery Center | VikasGiram.dev</title>
        <meta name="description" content="Explore Vikas Giram's comprehensive technical skills across Frontend, Backend, Database, and Security domains. Interactive demonstrations, certifications, and continuous learning journey." />
        <meta name="keywords" content="React, Node.js, MongoDB, JavaScript, TypeScript, Cybersecurity, Full Stack Developer, Technical Skills" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-primary text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Code" size={32} color="white" />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Shield" size={32} color="white" />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Zap" size={32} color="white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Technical Mastery Center
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Interactive demonstration of technical expertise across the full development stack, 
                from secure frontend interfaces to scalable backend architectures
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  onClick={() => setActiveSection('playground')}
                >
                  Try Interactive Demos
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                  onClick={() => window.open('https://github.com/vikas-giram', '_blank')}
                  className="text-white border-white hover:bg-white hover:text-primary"
                >
                  View GitHub Profile
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-surface border-b border-border sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-1 py-4 overflow-x-auto scrollbar-hide">
              {navigationSections.map((section) => (
                <Button
                  key={section.key}
                  variant={activeSection === section.key ? "primary" : "ghost"}
                  size="sm"
                  iconName={section.icon}
                  iconPosition="left"
                  onClick={() => setActiveSection(section.key)}
                  className="whitespace-nowrap"
                >
                  {section.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {activeSection === 'overview' && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Comprehensive Technical Skills
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  A detailed breakdown of my technical expertise across frontend, backend, database, 
                  and DevOps domains, with real-world examples and proficiency levels.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                  <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <SkillCategory {...category} />
                  </div>
                ))}
              </div>

              {/* Skills Summary */}
              <div className="bg-surface border border-border rounded-xl p-8 text-center">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Technical Proficiency Summary
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-info">15+</div>
                    <div className="text-text-secondary">Technologies Mastered</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent">50+</div>
                    <div className="text-text-secondary">Projects Completed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-warning">5+</div>
                    <div className="text-text-secondary">Years Experience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">6</div>
                    <div className="text-text-secondary">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="animate-fade-in">
              <SecurityIntegration />
            </div>
          )}

          {activeSection === 'playground' && (
            <div className="animate-fade-in">
              <InteractiveCodePlayground />
            </div>
          )}

          {activeSection === 'certifications' && (
            <div className="animate-fade-in">
              <CertificationBadges />
            </div>
          )}

          {activeSection === 'learning' && (
            <div className="animate-fade-in">
              <ContinuousLearning />
            </div>
          )}

          {activeSection === 'github' && (
            <div className="animate-fade-in">
              <GitHubIntegration />
            </div>
          )}
        </main>

        {/* Call to Action Section */}
        <section className="bg-gradient-primary text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how my technical expertise can help bring your project to life. 
              From concept to deployment, I'll ensure your solution is secure, scalable, and successful.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="secondary"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Start a Project Discussion
              </Button>
              <Button
                variant="ghost"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                Download Technical Resume
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SkillsTechnicalMasteryCenter;