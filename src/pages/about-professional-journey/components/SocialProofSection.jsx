import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofSection = () => {
  const [activeTab, setActiveTab] = useState('testimonials');

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO, TechStart Inc.",
      company: "TechStart Inc.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: "Vikas delivered exceptional work on our e-commerce platform. His security-first approach gave us confidence in handling sensitive customer data. The application has been running flawlessly for over a year with zero security incidents.",
      rating: 5,
      project: "E-commerce Platform",
      date: "2023"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Product Manager, FinTech Solutions",
      company: "FinTech Solutions",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "Working with Vikas was a game-changer for our financial application. His deep understanding of both security and user experience resulted in a product that our users love and trust. Highly recommended!",
      rating: 5,
      project: "Financial Dashboard",
      date: "2023"
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Founder, HealthTech Startup",
      company: "HealthTech Startup",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: "Vikas built our healthcare management system with incredible attention to HIPAA compliance and security. His technical expertise and professional communication made the entire process smooth and efficient.",
      rating: 5,
      project: "Healthcare Management System",
      date: "2022"
    },
    {
      id: 4,
      name: "David Park",
      role: "Engineering Lead, Enterprise Corp",
      company: "Enterprise Corp",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      content: "Vikas\'s ability to architect secure, scalable solutions is outstanding. He delivered our enterprise application ahead of schedule and exceeded all security requirements. A true professional.",
      rating: 5,
      project: "Enterprise Application",
      date: "2022"
    }
  ];

  const githubStats = [
    { label: "Total Repositories", value: "45+", icon: "GitBranch" },
    { label: "Total Commits", value: "2,500+", icon: "GitCommit" },
    { label: "Stars Received", value: "150+", icon: "Star" },
    { label: "Followers", value: "200+", icon: "Users" },
    { label: "Languages Used", value: "12+", icon: "Code" },
    { label: "Open Source Projects", value: "15+", icon: "Heart" }
  ];

  const achievements = [
    {
      title: "HackerRank 5-Star Rating",
      description: "JavaScript, React, Node.js",
      icon: "Award",
      color: "text-yellow-600",
      date: "2023"
    },
    {
      title: "LeetCode Top 10%",
      description: "Problem Solving & Algorithms",
      icon: "Trophy",
      color: "text-orange-600",
      date: "2023"
    },
    {
      title: "AWS Certified Developer",
      description: "Cloud Architecture & Security",
      icon: "Cloud",
      color: "text-blue-600",
      date: "2022"
    },
    {
      title: "Certified Ethical Hacker",
      description: "Cybersecurity & Penetration Testing",
      icon: "Shield",
      color: "text-red-600",
      date: "2021"
    },
    {
      title: "React Expert Certification",
      description: "Advanced React Development",
      icon: "Code",
      color: "text-cyan-600",
      date: "2021"
    },
    {
      title: "CISSP Certified",
      description: "Information Security Professional",
      icon: "Lock",
      color: "text-purple-600",
      date: "2020"
    }
  ];

  const mediumArticles = [
    {
      title: "Building Secure React Applications: A Complete Guide",
      views: "2.5K",
      claps: "180",
      date: "Dec 2023",
      readTime: "8 min read"
    },
    {
      title: "MERN Stack Security Best Practices",
      views: "1.8K",
      claps: "145",
      date: "Nov 2023",
      readTime: "6 min read"
    },
    {
      title: "Implementing Zero Trust Architecture in Web Apps",
      views: "3.2K",
      claps: "220",
      date: "Oct 2023",
      readTime: "10 min read"
    },
    {
      title: "Advanced Authentication Patterns in React",
      views: "1.5K",
      claps: "98",
      date: "Sep 2023",
      readTime: "7 min read"
    }
  ];

  const tabs = [
    { id: 'testimonials', label: 'Client Testimonials', icon: 'MessageSquare' },
    { id: 'github', label: 'GitHub Stats', icon: 'Github' },
    { id: 'achievements', label: 'Certifications', icon: 'Award' },
    { id: 'articles', label: 'Technical Articles', icon: 'BookOpen' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-accent-600 mb-4">
            <Icon name="ThumbsUp" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Social Proof</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            Trusted by Clients & Community
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real feedback from clients, contributions to the developer community, 
            and recognition for technical expertise.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-accent-foreground shadow-secondary'
                  : 'bg-surface text-text-secondary hover:bg-accent-50 hover:text-accent'
              }`}
            >
              <Icon name={tab.icon} size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div className="grid lg:grid-cols-2 gap-8 animate-fade-in">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-surface border border-border rounded-2xl p-8 hover:shadow-secondary transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-heading font-semibold text-primary">
                          {testimonial.name}
                        </h4>
                        <div className="flex space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary mb-1">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-text-muted">
                        {testimonial.company} • {testimonial.date}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <blockquote className="text-text-secondary leading-relaxed mb-4">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Project Tag */}
                  <div className="flex items-center space-x-2">
                    <Icon name="Briefcase" size={14} className="text-accent" />
                    <span className="text-sm text-accent font-medium">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* GitHub Stats Tab */}
          {activeTab === 'github' && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {githubStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-surface border border-border rounded-xl p-6 text-center hover:shadow-primary transition-all duration-300"
                  >
                    <Icon name={stat.icon} size={32} className="text-accent mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* GitHub Activity Visualization */}
              <div className="bg-surface border border-border rounded-2xl p-8">
                <h3 className="text-xl font-heading font-semibold text-primary mb-6 text-center">
                  GitHub Contribution Activity
                </h3>
                <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-200 rounded"></div>
                    <span>Less</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded"></div>
                    <span>Moderate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-600 rounded"></div>
                    <span>High</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-800 rounded"></div>
                    <span>Very High</span>
                  </div>
                </div>
                
                {/* Simulated Contribution Grid */}
                <div className="grid grid-cols-52 gap-1 max-w-4xl mx-auto">
                  {Array.from({ length: 365 }, (_, index) => {
                    const intensity = Math.floor(Math.random() * 5);
                    const colors = ['bg-gray-100', 'bg-green-200', 'bg-green-400', 'bg-green-600', 'bg-green-800'];
                    return (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-sm ${colors[intensity]}`}
                        title={`${intensity} contributions`}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-surface border border-border rounded-xl p-6 hover:shadow-primary transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon name={achievement.icon} size={32} className={achievement.color} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-primary mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-text-secondary mb-3">
                        {achievement.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={14} className="text-text-muted" />
                        <span className="text-xs text-text-muted">
                          Achieved in {achievement.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Articles Tab */}
          {activeTab === 'articles' && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Technical Writing & Thought Leadership
                </h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Sharing knowledge and insights with the developer community through 
                  technical articles and tutorials.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {mediumArticles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-surface border border-border rounded-xl p-6 hover:shadow-primary transition-all duration-300 cursor-pointer"
                  >
                    <div className="space-y-4">
                      <h4 className="text-lg font-heading font-semibold text-primary leading-tight">
                        {article.title}
                      </h4>
                      
                      <div className="flex items-center justify-between text-sm text-text-secondary">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Icon name="Eye" size={14} />
                            <span>{article.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Heart" size={14} />
                            <span>{article.claps} claps</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Medium Profile Link */}
              <div className="text-center pt-8">
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-600 transition-colors">
                  <Icon name="ExternalLink" size={18} />
                  <span>View All Articles on Medium</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;