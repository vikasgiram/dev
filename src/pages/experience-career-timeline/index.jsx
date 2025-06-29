import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TimelineItem from './components/TimelineItem';
import FilterBar from './components/FilterBar';
import ExperienceStats from './components/ExperienceStats';
import SkillsEvolution from './components/SkillsEvolution';
import Footer from 'components/ui/Footer';

const ExperienceCareerTimeline = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTech, setSelectedTech] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock timeline data
  const timelineData = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
      location: 'San Francisco, CA',
      startDate: '2023-01-15',
      endDate: 'Present',
      current: true,
      description: `Leading the development of enterprise-grade web applications with a focus on security-first architecture. Responsible for designing scalable MERN stack solutions that serve over 100,000+ active users while maintaining 99.9% uptime and implementing advanced cybersecurity measures.`,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'Redis', 'GraphQL'],
      achievements: [
        'Architected and deployed microservices infrastructure reducing system response time by 40%',
        'Implemented advanced security protocols resulting in zero security breaches over 18 months',
        'Led a team of 5 developers in delivering 3 major product releases ahead of schedule',
        'Optimized database queries and caching strategies improving application performance by 60%',
        'Established CI/CD pipelines reducing deployment time from 2 hours to 15 minutes'
      ],
      projects: [
        {
          name: 'Enterprise Dashboard Platform',
          description: 'Real-time analytics dashboard serving 50,000+ concurrent users with advanced data visualization and reporting capabilities.',
          impact: '40% improvement in user engagement and 25% reduction in support tickets'
        },
        {
          name: 'Secure API Gateway',
          description: 'Microservices API gateway with advanced authentication, rate limiting, and monitoring capabilities.',
          impact: 'Handled 10M+ API requests monthly with 99.99% availability'
        }
      ],
      skillsDeveloped: ['Team Leadership', 'System Architecture', 'Performance Optimization', 'DevOps', 'Mentoring'],
      testimonial: {
        quote: 'Vikas consistently delivers exceptional results and has been instrumental in our digital transformation. His security-first approach and technical expertise make him an invaluable team member.',
        author: 'Sarah Johnson',
        position: 'CTO, TechCorp Solutions'
      }
    },
    {
      id: 2,
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'InnovateTech',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&crop=center',
      location: 'Austin, TX',
      startDate: '2021-06-01',
      endDate: '2022-12-31',
      current: false,
      description: `Developed and maintained multiple client-facing web applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions while ensuring security best practices and optimal user experience.`,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Material-UI', 'JWT', 'Stripe API', 'Socket.io'],
      achievements: [
        'Built 8 production-ready web applications serving 25,000+ users',
        'Reduced application load time by 50% through code optimization and lazy loading',
        'Implemented secure payment processing system handling $2M+ in transactions',
        'Mentored 3 junior developers and conducted code reviews',
        'Achieved 95% client satisfaction rate across all projects'
      ],
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.',
          impact: 'Generated $500K+ in revenue for client within first 6 months'
        },
        {
          name: 'Real-time Chat Application',
          description: 'Scalable chat application with file sharing, group messaging, and video calling capabilities.',
          impact: 'Supported 10,000+ concurrent users with real-time messaging'
        }
      ],
      skillsDeveloped: ['Advanced React Patterns', 'Payment Integration', 'Real-time Applications', 'Code Review', 'Client Communication'],
      testimonial: {
        quote: 'Vikas brought exceptional technical skills and a security-minded approach to every project. His ability to deliver complex features on time was remarkable.',
        author: 'Michael Chen',
        position: 'Product Manager, InnovateTech'
      }
    },
    {
      id: 3,
      type: 'work',
      title: 'Junior Web Developer',
      company: 'StartupHub',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center',
      location: 'Remote',
      startDate: '2020-03-15',
      endDate: '2021-05-30',
      current: false,
      description: `Started my professional journey as a junior developer, focusing on frontend development with React.js and gradually expanding to full-stack development. Gained valuable experience in agile development methodologies and collaborative coding practices.`,
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Node.js', 'MySQL', 'Git'],
      achievements: [
        'Successfully completed 15+ feature implementations in first year',
        'Improved website accessibility score from 60% to 95%',
        'Contributed to 3 major product releases',
        'Reduced bug reports by 30% through thorough testing practices',
        'Earned "Rising Star" recognition for exceptional growth'
      ],
      projects: [
        {
          name: 'Company Portfolio Website',
          description: 'Responsive portfolio website showcasing company services and client testimonials.',
          impact: '200% increase in lead generation through improved web presence'
        },
        {
          name: 'Internal Task Management Tool',
          description: 'Custom task management application for internal team collaboration and project tracking.',
          impact: '35% improvement in team productivity and project delivery'
        }
      ],
      skillsDeveloped: ['React Development', 'Responsive Design', 'Version Control', 'Agile Methodology', 'Problem Solving'],
      testimonial: {
        quote: 'Vikas showed incredible dedication to learning and growth. His attention to detail and eagerness to take on challenges made him stand out from day one.',
        author: 'Lisa Rodriguez',
        position: 'Senior Developer, StartupHub'
      }
    },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of Technology in Computer Science',
      company: 'Tech University',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center',
      location: 'Mumbai, India',
      startDate: '2016-07-01',
      endDate: '2020-05-31',
      current: false,
      description: `Comprehensive computer science education with specialization in cybersecurity and software development. Maintained excellent academic performance while actively participating in coding competitions and technical projects.`,
      technologies: ['C++', 'Java', 'Python', 'Data Structures', 'Algorithms', 'Database Systems', 'Network Security', 'Operating Systems'],
      achievements: [
        'Graduated with First Class Honors (CGPA: 8.7/10)',
        'Winner of Inter-University Coding Competition 2019',
        'Published research paper on "Web Application Security Vulnerabilities"',
        'Led university coding club with 200+ active members',
        'Completed advanced cybersecurity certification during final year'
      ],
      projects: [
        {
          name: 'Secure Banking System',
          description: 'Final year project implementing a secure online banking system with advanced encryption and fraud detection.',
          impact: 'Received "Best Project Award" and recommendation for further research'
        },
        {
          name: 'Network Intrusion Detection System',
          description: 'Machine learning-based system for detecting and preventing network intrusions.',
          impact: 'Achieved 95% accuracy in threat detection during testing'
        }
      ],
      skillsDeveloped: ['Programming Fundamentals', 'System Design', 'Research Skills', 'Leadership', 'Academic Writing'],
      testimonial: {
        quote: 'Vikas was one of our most promising students, combining strong technical skills with excellent leadership qualities. His passion for cybersecurity was evident throughout his studies.',
        author: 'Dr. Rajesh Sharma',
        position: 'Professor, Computer Science Department'
      }
    },
    {
      id: 5,
      type: 'certification',
      title: 'AWS Certified Solutions Architect',
      company: 'Amazon Web Services',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center',
      location: 'Online',
      startDate: '2022-08-01',
      endDate: '2022-09-15',
      current: false,
      description: `Advanced certification demonstrating expertise in designing distributed systems and applications on AWS platform. Covers architectural best practices, security, and cost optimization strategies.`,
      technologies: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'AWS CloudFormation', 'AWS IAM', 'AWS VPC', 'AWS CloudWatch'],
      achievements: [
        'Passed certification exam with 92% score on first attempt',
        'Completed 40+ hours of hands-on lab exercises',
        'Designed and implemented 5 real-world AWS architectures',
        'Achieved cost optimization of 35% for existing client infrastructure',
        'Became go-to AWS expert within the organization'
      ],
      skillsDeveloped: ['Cloud Architecture', 'Infrastructure as Code', 'Cost Optimization', 'Security Best Practices', 'Scalability Design']
    },
    {
      id: 6,
      type: 'certification',
      title: 'Certified Ethical Hacker (CEH)',
      company: 'EC-Council',
      logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&h=100&fit=crop&crop=center',
      location: 'Online',
      startDate: '2021-01-15',
      endDate: '2021-03-20',
      current: false,
      description: `Comprehensive ethical hacking certification covering penetration testing methodologies, vulnerability assessment, and security analysis techniques. Demonstrates expertise in identifying and mitigating security vulnerabilities.`,
      technologies: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Web Application Security', 'Social Engineering', 'Cryptography'],
      achievements: [
        'Achieved certification with distinction (95% score)',
        'Completed 120+ hours of practical security testing',
        'Identified and reported 50+ security vulnerabilities during training',
        'Conducted security assessments for 3 client applications',
        'Established security testing protocols for development team'
      ],
      skillsDeveloped: ['Ethical Hacking', 'Security Assessment', 'Risk Analysis', 'Compliance', 'Security Documentation']
    }
  ];

  // Get all unique technologies for filtering
  const getAllTechnologies = () => {
    const techSet = new Set();
    timelineData.forEach(item => {
      if (item.technologies) {
        item.technologies.forEach(tech => techSet.add(tech));
      }
    });
    return Array.from(techSet).sort();
  };

  const availableTechnologies = getAllTechnologies();

  // Filter timeline data based on selected filters
  const getFilteredData = () => {
    let filtered = timelineData;

    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    if (selectedTech) {
      filtered = filtered.filter(item => 
        item.technologies && item.technologies.some(tech => 
          tech.toLowerCase().includes(selectedTech.toLowerCase())
        )
      );
    }

    return filtered.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  };

  const filteredData = getFilteredData();

  const handleToggleExpand = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    setExpandedItems(new Set()); // Reset expanded items when filter changes
  };

  const handleTechFilter = (tech) => {
    setSelectedTech(tech);
    setExpandedItems(new Set()); // Reset expanded items when filter changes
  };

  // Calculate total experience
  const calculateTotalExperience = () => {
    const workExperience = timelineData.filter(item => item.type === 'work');
    let totalMonths = 0;
    
    workExperience.forEach(item => {
      const start = new Date(item.startDate);
      const end = item.endDate === 'Present' ? new Date() : new Date(item.endDate);
      const diffTime = Math.abs(end - start);
      const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
      totalMonths += diffMonths;
    });
    
    return Math.floor(totalMonths / 12);
  };

  const totalExperience = calculateTotalExperience();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading career timeline...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Experience - Career Timeline | VikasGiram.dev</title>
        <meta name="description" content="Explore Vikas Giram's professional journey through an interactive career timeline showcasing his growth from cybersecurity education to senior full-stack development expertise." />
        <meta name="keywords" content="Vikas Giram, career timeline, professional experience, full-stack developer, cybersecurity, MERN stack, career progression" />
      </Helmet>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={24} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary">
              Career Timeline
            </h1>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Journey through my professional evolution from cybersecurity foundations to full-stack mastery. 
            Discover the experiences, achievements, and continuous learning that shaped my expertise.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-text-muted">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={16} />
              <span>{totalExperience}+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Briefcase" size={16} />
              <span>{timelineData.filter(item => item.type === 'work').length} Professional Roles</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Award" size={16} />
              <span>{timelineData.filter(item => item.type === 'certification').length} Certifications</span>
            </div>
          </div>
        </div>

        {/* Experience Stats */}
        <ExperienceStats timelineData={timelineData} />

        {/* Skills Evolution */}
        <SkillsEvolution timelineData={timelineData} />

        {/* Filter Bar */}
        <FilterBar
          selectedType={selectedType}
          onTypeFilter={handleTypeFilter}
          selectedTech={selectedTech}
          onTechFilter={handleTechFilter}
          availableTechnologies={availableTechnologies}
          totalExperience={totalExperience}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={16} className="text-text-muted" />
              <span className="text-sm text-text-secondary">
                Showing {filteredData.length} of {timelineData.length} experiences
              </span>
            </div>
            {filteredData.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                iconName={expandedItems.size === filteredData.length ? "Minimize2" : "Maximize2"}
                iconPosition="left"
                onClick={() => {
                  if (expandedItems.size === filteredData.length) {
                    setExpandedItems(new Set());
                  } else {
                    setExpandedItems(new Set(filteredData.map((_, index) => index)));
                  }
                }}
              >
                {expandedItems.size === filteredData.length ? 'Collapse All' : 'Expand All'}
              </Button>
            )}
          </div>

          {/* Timeline Items */}
          {filteredData.length > 0 ? (
            <div className="space-y-0">
              {filteredData.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  isExpanded={expandedItems.has(index)}
                  onToggleExpand={handleToggleExpand}
                  selectedTech={selectedTech}
                  onTechFilter={handleTechFilter}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-surface border border-border rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-text-muted" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">No experiences found</h3>
              <p className="text-text-secondary mb-4">
                Try adjusting your filters to see more results.
              </p>
              <Button
                variant="primary"
                size="sm"
                iconName="RotateCcw"
                iconPosition="left"
                onClick={() => {
                  setSelectedType('all');
                  setSelectedTech(null);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-primary rounded-lg p-8 text-white">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Ready to Add Your Project to My Timeline?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. I bring years of experience 
            and a security-first approach to every project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Start a Conversation
            </Button>
            
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ExperienceCareerTimeline;