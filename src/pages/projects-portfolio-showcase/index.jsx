import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectFilters from './components/ProjectFilters';
import ProjectModal from './components/ProjectModal';
import FeaturedProject from './components/FeaturedProject';
import ProjectStats from './components/ProjectStats';
import CTASection from './components/CTASection';

const ProjectsPortfolioShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    technology: [],
    industry: [],
    type: []
  });
  const [hasEngaged, setHasEngaged] = useState(false);
  const [engagementCount, setEngagementCount] = useState(0);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "SecureCommerce Platform",
      category: "E-commerce",
      year: "2024",
      status: "Live",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: "A comprehensive e-commerce platform with advanced security features and real-time analytics.",
      fullDescription: `A full-stack e-commerce solution built with security-first principles, featuring advanced threat detection, encrypted payment processing, and real-time fraud monitoring. The platform handles over 10,000 transactions daily with 99.9% uptime and zero security breaches.`,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Redis"],
      type: "Full-Stack Application",
      industry: "E-commerce",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Load Time", value: "1.2s" },
        { label: "Users", value: "50K+" }
      ],
      highlights: [
        { icon: "Shield", text: "PCI DSS Compliant" },
        { icon: "Zap", text: "Sub-second Load Times" },
        { icon: "Lock", text: "End-to-End Encryption" }
      ],
      features: [
        {
          icon: "ShoppingCart",
          title: "Advanced Cart Management",
          description: "Persistent cart with real-time inventory sync and abandoned cart recovery"
        },
        {
          icon: "CreditCard",
          title: "Secure Payment Processing",
          description: "Multiple payment gateways with fraud detection and PCI compliance"
        },
        {
          icon: "BarChart3",
          title: "Real-time Analytics",
          description: "Comprehensive dashboard with sales metrics and user behavior insights"
        },
        {
          icon: "Users",
          title: "User Management",
          description: "Role-based access control with social login and 2FA support"
        }
      ],
      codeSnippet: `// Secure payment processing with fraud detection
const processPayment = async (paymentData) => {
  try {
    // Validate payment data
    const validation = await validatePaymentData(paymentData);
    if (!validation.isValid) {
      throw new Error('Invalid payment data');
    }
    
    // Run fraud detection
    const fraudCheck = await runFraudDetection(paymentData);
    if (fraudCheck.riskScore > 0.8) {
      await flagSuspiciousTransaction(paymentData);
      throw new Error('Transaction flagged for review');
    }
    
    // Process payment
    const result = await stripe.paymentIntents.create({
      amount: paymentData.amount,
      currency: 'usd',
      payment_method: paymentData.paymentMethod,
      confirmation_method: 'manual',
      confirm: true
    });
    
    return { success: true, paymentIntent: result };
  } catch (error) {
    logger.error('Payment processing failed:', error);
    throw error;
  }
};`,
      securityFeatures: [
        {
          title: "Advanced Encryption",
          description: "AES-256 encryption for sensitive data with key rotation every 90 days"
        },
        {
          title: "SQL Injection Prevention",
          description: "Parameterized queries and input sanitization across all database operations"
        },
        {
          title: "Rate Limiting",
          description: "Intelligent rate limiting to prevent DDoS attacks and API abuse"
        }
      ],
      challenges: [
        {
          problem: "High traffic spikes during sales events causing server overload",
          solution: "Implemented auto-scaling with load balancers and Redis caching for 300% performance improvement"
        },
        {
          problem: "Complex inventory management across multiple warehouses",
          solution: "Built real-time inventory sync system with conflict resolution and automated reordering"
        }
      ],
      performanceMetrics: [
        { name: "Page Load Speed", value: "1.2s", percentage: 95 },
        { name: "API Response Time", value: "150ms", percentage: 90 },
        { name: "Database Query Time", value: "50ms", percentage: 85 },
        { name: "Cache Hit Rate", value: "94%", percentage: 94 }
      ],
      beforeOptimization: [
        { metric: "Load Time", value: "4.5s" },
        { metric: "API Response", value: "800ms" },
        { metric: "Database Queries", value: "250ms" }
      ],
      afterOptimization: [
        { metric: "Load Time", value: "1.2s" },
        { metric: "API Response", value: "150ms" },
        { metric: "Database Queries", value: "50ms" }
      ]
    },
    {
      id: 2,
      title: "HealthTech Dashboard",
      category: "Healthcare",
      year: "2024",
      status: "Live",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      description: "HIPAA-compliant healthcare management system with patient data visualization and telemedicine features.",
      fullDescription: `A comprehensive healthcare management platform designed with HIPAA compliance at its core. Features include patient record management, appointment scheduling, telemedicine integration, and advanced analytics for healthcare providers.`,
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Socket.io", "JWT"],
      type: "Full-Stack Application",
      industry: "Healthcare",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      metrics: [
        { label: "Patients", value: "25K+" },
        { label: "Uptime", value: "99.8%" },
        { label: "Response", value: "200ms" }
      ],
      highlights: [
        { icon: "Shield", text: "HIPAA Compliant" },
        { icon: "Activity", text: "Real-time Monitoring" },
        { icon: "Users", text: "Multi-role Access" }
      ]
    },
    {
      id: 3,
      title: "FinTech API Gateway",
      category: "Financial Services",
      year: "2023",
      status: "Live",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "High-performance API gateway for financial services with advanced security and compliance features.",
      fullDescription: `A robust API gateway solution for financial institutions, handling millions of transactions daily with advanced security, compliance monitoring, and real-time fraud detection capabilities.`,
      technologies: ["Node.js", "Express", "Redis", "MongoDB", "JWT", "OAuth2"],
      type: "API Development",
      industry: "Fintech",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      metrics: [
        { label: "Requests/Day", value: "2M+" },
        { label: "Latency", value: "50ms" },
        { label: "Availability", value: "99.99%" }
      ],
      highlights: [
        { icon: "Zap", text: "Ultra-low Latency" },
        { icon: "Shield", text: "Bank-grade Security" },
        { icon: "BarChart3", text: "Real-time Analytics" }
      ]
    },
    {
      id: 4,
      title: "EduTech Learning Platform",
      category: "Education",
      year: "2023",
      status: "In Development",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      description: "Interactive learning platform with AI-powered personalization and progress tracking.",
      fullDescription: `An innovative educational platform that leverages AI to provide personalized learning experiences. Features include adaptive learning paths, real-time progress tracking, and collaborative tools for students and educators.`,
      technologies: ["React", "Next.js", "Python", "TensorFlow", "PostgreSQL"],
      type: "Full-Stack Application",
      industry: "Education",
      githubUrl: "https://github.com/example",
      metrics: [
        { label: "Students", value: "15K+" },
        { label: "Courses", value: "500+" },
        { label: "Completion", value: "85%" }
      ],
      highlights: [
        { icon: "Brain", text: "AI-Powered" },
        { icon: "TrendingUp", text: "Adaptive Learning" },
        { icon: "Users", text: "Collaborative Tools" }
      ]
    },
    {
      id: 5,
      title: "Security Audit Tool",
      category: "Cybersecurity",
      year: "2023",
      status: "Live",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      description: "Automated security audit tool for web applications with vulnerability scanning and reporting.",
      fullDescription: `A comprehensive security audit tool that automatically scans web applications for vulnerabilities, generates detailed reports, and provides remediation recommendations. Used by security teams to maintain application security posture.`,
      technologies: ["Python", "React", "Node.js", "Docker", "PostgreSQL"],
      type: "Security Audit",
      industry: "SaaS",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      metrics: [
        { label: "Scans/Month", value: "10K+" },
        { label: "Vulnerabilities", value: "500+" },
        { label: "Accuracy", value: "98%" }
      ],
      highlights: [
        { icon: "Shield", text: "Automated Scanning" },
        { icon: "AlertTriangle", text: "Threat Detection" },
        { icon: "FileText", text: "Detailed Reports" }
      ]
    },
    {
      id: 6,
      title: "Performance Optimizer",
      category: "DevOps",
      year: "2023",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Web application performance optimization service with automated monitoring and alerts.",
      fullDescription: `A comprehensive performance optimization service that monitors web applications, identifies bottlenecks, and provides automated optimization recommendations. Includes real-time monitoring and alerting capabilities.`,
      technologies: ["Node.js", "React", "Grafana", "Prometheus", "Docker"],
      type: "Performance Optimization",
      industry: "SaaS",
      githubUrl: "https://github.com/example",
      metrics: [
        { label: "Speed Boost", value: "300%" },
        { label: "Load Time", value: "0.8s" },
        { label: "Monitoring", value: "24/7" }
      ],
      highlights: [
        { icon: "Zap", text: "Speed Optimization" },
        { icon: "Activity", text: "Real-time Monitoring" },
        { icon: "TrendingUp", text: "Performance Boost" }
      ]
    }
  ];

  // Featured project (first project)
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  // Filter projects based on active filters
  const filteredProjects = otherProjects.filter(project => {
    const technologyMatch = activeFilters.technology.length === 0 || 
      activeFilters.technology.some(tech => project.technologies.includes(tech));
    
    const industryMatch = activeFilters.industry.length === 0 || 
      activeFilters.industry.includes(project.industry);
    
    const typeMatch = activeFilters.type.length === 0 || 
      activeFilters.type.includes(project.type);
    
    return technologyMatch && industryMatch && typeMatch;
  });

  // Calculate project counts for filters
  const projectCounts = {
    react: projects.filter(p => p.technologies.includes('React')).length,
    nodejs: projects.filter(p => p.technologies.includes('Node.js')).length,
    mongodb: projects.filter(p => p.technologies.includes('MongoDB')).length,
    express: projects.filter(p => p.technologies.includes('Express')).length,
    nextjs: projects.filter(p => p.technologies.includes('Next.js')).length,
    typescript: projects.filter(p => p.technologies.includes('TypeScript')).length,
    ecommerce: projects.filter(p => p.industry === 'E-commerce').length,
    fintech: projects.filter(p => p.industry === 'Fintech').length,
    healthcare: projects.filter(p => p.industry === 'Healthcare').length,
    education: projects.filter(p => p.industry === 'Education').length,
    saas: projects.filter(p => p.industry === 'SaaS').length,
    fullstack: projects.filter(p => p.type === 'Full-Stack Application').length,
    api: projects.filter(p => p.type === 'API Development').length,
    security: projects.filter(p => p.type === 'Security Audit').length,
    performance: projects.filter(p => p.type === 'Performance Optimization').length
  };

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    setActiveFilters(prev => {
      const currentFilters = prev[category] || [];
      const isActive = currentFilters.includes(value);
      
      return {
        ...prev,
        [category]: isActive
          ? currentFilters.filter(f => f !== value)
          : [...currentFilters, value]
      };
    });
  };

  // Clear all filters
  const handleClearFilters = () => {
    setActiveFilters({
      technology: [],
      industry: [],
      type: []
    });
  };

  // Handle project details view
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    trackEngagement();
  };

  // Track user engagement
  const trackEngagement = () => {
    setEngagementCount(prev => prev + 1);
    if (engagementCount >= 2) {
      setHasEngaged(true);
    }
  };

  // Handle scroll to track engagement
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !hasEngaged) {
        trackEngagement();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasEngaged]);

  return (
    <>
      <Helmet>
        <title>Projects - Portfolio Showcase | VikasGiram.dev</title>
        <meta name="description" content="Explore Vikas Giram's comprehensive project portfolio showcasing MERN stack expertise, security-first development, and innovative solutions across various industries." />
        <meta name="keywords" content="MERN stack projects, full-stack development, React projects, Node.js applications, cybersecurity, web development portfolio" />
        <meta property="og:title" content="Projects - Portfolio Showcase | VikasGiram.dev" />
        <meta property="og:description" content="Discover innovative web applications and security solutions built with cutting-edge technologies." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-8">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-50 text-accent rounded-full text-sm font-medium mb-6">
                <Icon name="FolderOpen" size={16} />
                <span>Portfolio Showcase</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6">
                Projects That <span className="text-gradient-primary">Define Excellence</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Explore my comprehensive project ecosystem showcasing MERN stack mastery, security-first development, and innovative solutions that drive real business impact.
              </p>
            </div>

            {/* Project Stats */}
            <ProjectStats projects={projects} />
          </section>

          {/* Featured Project */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <FeaturedProject 
              project={featuredProject} 
              onViewDetails={handleViewDetails}
            />
          </section>

          {/* Filters */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectFilters
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              projectCounts={projectCounts}
            />
          </section>

          {/* Projects Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-text-primary">
                  All Projects
                </h2>
                <p className="text-text-secondary">
                  {filteredProjects.length} of {otherProjects.length} projects
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-text-muted">
                <Icon name="Filter" size={16} />
                <span>Filtered by: {Object.values(activeFilters).flat().length || 'None'}</span>
              </div>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-text-muted" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  No Projects Found
                </h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your filters to see more projects.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-600 transition-smooth"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <CTASection hasEngaged={hasEngaged} />
          </section>
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
};

export default ProjectsPortfolioShowcase;