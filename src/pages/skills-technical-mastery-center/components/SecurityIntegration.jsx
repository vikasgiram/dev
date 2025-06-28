import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SecurityIntegration = () => {
  const [activeLayer, setActiveLayer] = useState('frontend');

  const securityLayers = {
    frontend: {
      title: 'Frontend Security',
      icon: 'Shield',
      color: 'bg-accent',
      practices: [
        {
          name: 'XSS Prevention',
          description: 'Input sanitization and Content Security Policy implementation',
          implementation: `// XSS Prevention Example
const sanitizeInput = (input) => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
};

// CSP Header
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'"
  );
  next();
});`
        },
        {
          name: 'Authentication State Management',
          description: 'Secure token handling and session management',
          implementation: `// Secure Token Storage
const TokenManager = {
  setToken: (token) => {
    sessionStorage.setItem('authToken', token);
  },
  
  getToken: () => {
    return sessionStorage.getItem('authToken');
  },
  
  clearToken: () => {
    sessionStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  }
};`
        }
      ]
    },
    backend: {
      title: 'Backend Security',
      icon: 'Server',
      color: 'bg-info',
      practices: [
        {
          name: 'API Security',
          description: 'Rate limiting, input validation, and secure headers',
          implementation: `// Rate Limiting Middleware
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);

// Input Validation
const { body, validationResult } = require('express-validator');

app.post('/api/users',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Process request
  }
);`
        }
      ]
    },
    database: {
      title: 'Database Security',
      icon: 'Database',
      color: 'bg-warning',
      practices: [
        {
          name: 'SQL Injection Prevention',
          description: 'Parameterized queries and input validation',
          implementation: `// MongoDB Secure Query
const User = require('./models/User');

// Safe query using Mongoose
const findUserByEmail = async (email) => {
  try {
    // Mongoose automatically sanitizes queries
    const user = await User.findOne({ 
      email: email.toLowerCase().trim() 
    });
    return user;
  } catch (error) {
    throw new Error('Database query failed');
  }
};

// Additional validation
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};`
        }
      ]
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-primary">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-error rounded-lg flex items-center justify-center shadow-primary">
          <Icon name="ShieldCheck" size={24} color="white" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-primary">Security Integration</h3>
          <p className="text-text-secondary">Cybersecurity principles across all technology layers</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(securityLayers).map(([key, layer]) => (
          <Button
            key={key}
            variant={activeLayer === key ? "primary" : "ghost"}
            size="sm"
            iconName={layer.icon}
            iconPosition="left"
            onClick={() => setActiveLayer(key)}
          >
            {layer.title}
          </Button>
        ))}
      </div>

      <div className="space-y-6">
        {securityLayers[activeLayer].practices.map((practice, index) => (
          <div key={index} className="border border-border-muted rounded-lg p-4">
            <div className="flex items-start space-x-4 mb-4">
              <div className={`w-10 h-10 ${securityLayers[activeLayer].color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon name="Lock" size={20} color="white" />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-1">{practice.name}</h4>
                <p className="text-text-secondary text-sm">{practice.description}</p>
              </div>
            </div>
            
            <div className="code-block">
              <pre className="text-xs overflow-x-auto">
                <code>{practice.implementation}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-accent-50 border border-accent-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-accent-700 mb-1">Security-First Development</h4>
            <p className="text-accent-600 text-sm">
              Every application I build incorporates security principles from the ground up, not as an afterthought. 
              This proactive approach ensures robust, production-ready solutions that protect both users and business data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityIntegration;