import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveCodePlayground = () => {
  const [activeDemo, setActiveDemo] = useState('react-component');
  const [output, setOutput] = useState('');

  const codeDemos = {
    'react-component': {
      title: 'React Component with Hooks',
      language: 'jsx',
      code: `import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <div className="skills">
        {user.skills.map(skill => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;`,
      description: 'A complete React component demonstrating hooks, error handling, and modern patterns',
      output: 'Interactive user profile component with loading states and error handling'
    },
    'node-api': {
      title: 'Node.js API with Security',
      language: 'javascript',
      code: `const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();

// Security middleware
app.use(helmet());
app.use(express.json({ limit: '10mb' }));

// Rate limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts'
});

// Authentication endpoint
app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Input validation
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email and password are required' 
      });
    }
    
    // Find user (mock database call)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }
    
    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.hashedPassword);
    if (!isValidPassword) {
      return res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

module.exports = app;`,
      description: 'Secure Node.js authentication API with rate limiting and proper error handling',
      output: 'Secure authentication endpoint with JWT tokens and bcrypt password hashing'
    },
    'mongodb-query': {
      title: 'MongoDB Aggregation Pipeline',
      language: 'javascript',
      code: `const mongoose = require('mongoose');

// Advanced aggregation pipeline for analytics
const getUserAnalytics = async (userId, startDate, endDate) => {
  try {
    const analytics = await User.aggregate([
      // Match specific user
      {
        $match: {
          _id: mongoose.Types.ObjectId(userId)
        }
      },
      
      // Lookup user's projects
      {
        $lookup: {
          from: 'projects',
          localField: '_id',
          foreignField: 'userId',
          as: 'projects'
        }
      },
      
      // Unwind projects for individual processing
      {
        $unwind: {
          path: '$projects',
          preserveNullAndEmptyArrays: true
        }
      },
      
      // Filter projects by date range
      {
        $match: {
          'projects.createdAt': {
            $gte: new Date(startDate),
            $lte: new Date(endDate)
          }
        }
      },
      
      // Group and calculate statistics
      {
        $group: {
          _id: '$_id',
          name: { $first: '$name' },
          email: { $first: '$email' },
          totalProjects: { $sum: 1 },
          completedProjects: {
            $sum: {
              $cond: [
                { $eq: ['$projects.status', 'completed'] },
                1,
                0
              ]
            }
          },
          averageProjectDuration: {
            $avg: {
              $divide: [
                { $subtract: ['$projects.completedAt', '$projects.createdAt'] },
                1000 * 60 * 60 * 24 // Convert to days
              ]
            }
          },
          technologies: { $addToSet: '$projects.technologies' }
        }
      },
      
      // Calculate completion rate
      {
        $addFields: {
          completionRate: {
            $multiply: [
              { $divide: ['$completedProjects', '$totalProjects'] },
              100
            ]
          },
          flatTechnologies: {
            $reduce: {
              input: '$technologies',
              initialValue: [],
              in: { $concatArrays: ['$$value', '$$this'] }
            }
          }
        }
      },
      
      // Final projection
      {
        $project: {
          name: 1,
          email: 1,
          totalProjects: 1,
          completedProjects: 1,
          completionRate: { $round: ['$completionRate', 2] },
          averageProjectDuration: { $round: ['$averageProjectDuration', 1] },
          uniqueTechnologies: { $size: { $setUnion: ['$flatTechnologies'] } },
          topTechnologies: {
            $slice: [
              { $setUnion: ['$flatTechnologies'] },
              5
            ]
          }
        }
      }
    ]);
    
    return analytics[0] || null;
    
  } catch (error) {
    console.error('Analytics query error:', error);
    throw new Error('Failed to fetch user analytics');
  }
};

module.exports = { getUserAnalytics };`,
      description: 'Complex MongoDB aggregation pipeline for user analytics and reporting',
      output: 'Comprehensive user analytics with project statistics and technology usage'
    }
  };

  const runDemo = (demoKey) => {
    const demo = codeDemos[demoKey];
    setOutput(`✅ ${demo.output}\n\n📊 Demo executed successfully!\n\nThis ${demo.language} code demonstrates:\n• ${demo.description}\n• Production-ready patterns\n• Error handling and security\n• Modern best practices`);
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-primary">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-primary">
          <Icon name="Play" size={24} color="white" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-primary">Interactive Code Playground</h3>
          <p className="text-text-secondary">Live demonstrations of coding expertise</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(codeDemos).map(([key, demo]) => (
          <Button
            key={key}
            variant={activeDemo === key ? "primary" : "ghost"}
            size="sm"
            onClick={() => setActiveDemo(key)}
          >
            {demo.title}
          </Button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-text-primary flex items-center">
              <Icon name="Code" size={16} className="mr-2" />
              {codeDemos[activeDemo].title}
            </h4>
            <Button
              variant="accent"
              size="sm"
              iconName="Play"
              iconPosition="left"
              onClick={() => runDemo(activeDemo)}
            >
              Run Demo
            </Button>
          </div>
          
          <div className="terminal-window max-h-96 overflow-y-auto">
            <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-secondary-600">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-error rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
              </div>
              <span className="text-secondary-300 text-sm font-mono">
                {codeDemos[activeDemo].language}
              </span>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{codeDemos[activeDemo].code}</code>
            </pre>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Terminal" size={16} className="mr-2" />
            Output Console
          </h4>
          
          <div className="bg-secondary-800 text-green-400 font-mono p-4 rounded-lg min-h-96 max-h-96 overflow-y-auto">
            {output ? (
              <pre className="whitespace-pre-wrap text-sm">{output}</pre>
            ) : (
              <div className="text-secondary-400 text-sm">
                <p>💡 Click "Run Demo" to execute the code example</p>
                <p className="mt-2">Available demos:</p>
                <ul className="mt-2 space-y-1">
                  {Object.entries(codeDemos).map(([key, demo]) => (
                    <li key={key} className="flex items-center space-x-2">
                      <span className="text-accent">▶</span>
                      <span>{demo.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-info-50 border border-info-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} color="var(--color-info)" className="flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-info-700 mb-1">Interactive Learning</h4>
            <p className="text-info-600 text-sm">
              These code examples represent real-world implementations from my projects. Each demo showcases 
              production-ready patterns, security considerations, and modern development practices that I apply 
              in client work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCodePlayground;