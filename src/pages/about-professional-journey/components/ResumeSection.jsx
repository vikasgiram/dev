import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResumeSection = () => {
  const [downloadFormat, setDownloadFormat] = useState('pdf');
  const [isDownloading, setIsDownloading] = useState(false);

  const resumeFormats = [
    {
      id: 'pdf',
      name: 'PDF Resume',
      description: 'Professional PDF format for applications',
      icon: 'FileText',
      size: '2.3 MB',
      lastUpdated: 'Dec 15, 2023'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Profile',
      description: 'Complete professional profile',
      icon: 'ExternalLink',
      size: 'Online',
      lastUpdated: 'Updated daily'
    },
    {
      id: 'portfolio',
      name: 'Interactive Portfolio',
      description: 'This website with all details',
      icon: 'Globe',
      size: 'Online',
      lastUpdated: 'Live updates'
    }
  ];

  const resumeHighlights = [
    {
      category: "Technical Skills",
      items: [
        "MERN Stack (MongoDB, Express.js, React, Node.js)",
        "Cybersecurity & Ethical Hacking",
        "AWS Cloud Services & DevOps",
        "TypeScript, Python, Java"
      ]
    },
    {
      category: "Experience",
      items: [
        "5+ years Full-Stack Development",
        "50+ projects delivered successfully",
        "Enterprise & startup experience",
        "Team leadership & mentoring"
      ]
    },
    {
      category: "Education & Certifications",
      items: [
        "M.Tech in Cybersecurity - IIT Delhi",
        "AWS Certified Developer",
        "Certified Ethical Hacker (CEH)",
        "CISSP Certified Professional"
      ]
    },
    {
      category: "Achievements",
      items: [
        "HackerRank 5-Star JavaScript Rating",
        "LeetCode Top 10% Problem Solver",
        "200+ GitHub followers",
        "Technical writer with 10K+ article views"
      ]
    }
  ];

  const handleDownload = async (format) => {
    setIsDownloading(true);
    setDownloadFormat(format);
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (format === 'pdf') {
      // In a real application, this would trigger an actual PDF download
      console.log('Downloading PDF resume...');
    } else if (format === 'linkedin') {
      window.open('https://linkedin.com/in/vikas-giram', '_blank');
    } else if (format === 'portfolio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    setIsDownloading(false);
  };

  const quickStats = [
    { label: "Years Experience", value: "5+", icon: "Clock" },
    { label: "Projects Completed", value: "50+", icon: "CheckCircle" },
    { label: "Client Satisfaction", value: "100%", icon: "ThumbsUp" },
    { label: "Security Focus", value: "Always", icon: "Shield" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-background to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-accent-600 mb-4">
            <Icon name="Download" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Resume & Profile</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            Get My Complete Profile
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Download my resume, view my LinkedIn profile, or explore this interactive portfolio 
            to get a comprehensive view of my skills and experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Resume Download Options */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Choose Your Preferred Format
              </h3>
              
              <div className="space-y-4">
                {resumeFormats.map((format) => (
                  <div
                    key={format.id}
                    className={`border rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                      downloadFormat === format.id
                        ? 'border-accent bg-accent-50 shadow-secondary'
                        : 'border-border bg-background hover:border-accent/50 hover:shadow-primary'
                    }`}
                    onClick={() => setDownloadFormat(format.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        downloadFormat === format.id
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-surface text-text-secondary'
                      }`}>
                        <Icon name={format.icon} size={24} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-heading font-semibold text-primary">
                            {format.name}
                          </h4>
                          <div className="text-sm text-text-muted">
                            {format.size}
                          </div>
                        </div>
                        <p className="text-text-secondary text-sm mb-2">
                          {format.description}
                        </p>
                        <div className="text-xs text-text-muted">
                          Last updated: {format.lastUpdated}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <div className="space-y-4">
              <Button
                variant="primary"
                size="lg"
                iconName={isDownloading ? "Loader" : "Download"}
                iconPosition="left"
                fullWidth
                loading={isDownloading}
                onClick={() => handleDownload(downloadFormat)}
                className="font-cta"
              >
                {isDownloading 
                  ? 'Processing...' 
                  : downloadFormat === 'pdf' ?'Download PDF Resume'
                    : downloadFormat === 'linkedin' ?'View LinkedIn Profile' :'Explore Interactive Portfolio'
                }
              </Button>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-text-muted">
                <div className="flex items-center space-x-1">
                  <Icon name="Shield" size={14} />
                  <span>Secure download</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="RefreshCw" size={14} />
                  <span>Always up-to-date</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-4 text-center hover:shadow-primary transition-all duration-300"
                >
                  <Icon name={stat.icon} size={24} className="text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Resume Highlights
              </h3>
              <p className="text-text-secondary mb-8">
                Key points that make my profile stand out in the competitive tech landscape.
              </p>
            </div>

            <div className="space-y-6">
              {resumeHighlights.map((section, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-primary transition-all duration-300"
                >
                  <h4 className="text-lg font-heading font-semibold text-primary mb-4 flex items-center space-x-2">
                    <Icon name="CheckCircle" size={18} className="text-accent" />
                    <span>{section.category}</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-secondary text-sm leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 text-center text-white">
              <Icon name="MessageCircle" size={32} className="mx-auto mb-4" />
              <h4 className="text-xl font-heading font-semibold mb-2">
                Ready to Discuss Your Project?
              </h4>
              <p className="text-sm opacity-90 mb-4">
                Let's talk about how I can help bring your ideas to life with secure, 
                scalable solutions.
              </p>
              <Button
                variant="secondary"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Conversation
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-background border border-border rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <Icon name="Info" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Why Choose a Security-First Developer?
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto mb-6">
              In today's digital landscape, security isn't optional—it's essential. My unique background 
              in cybersecurity ensures that every application I build is secure by design, not as an afterthought. 
              This approach saves time, money, and protects your users' trust.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Icon name="Shield" size={32} className="text-red-600 mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-primary mb-2">Security First</h4>
                <p className="text-sm text-text-secondary">Built-in security from day one</p>
              </div>
              <div className="text-center">
                <Icon name="Zap" size={32} className="text-yellow-600 mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-primary mb-2">Performance</h4>
                <p className="text-sm text-text-secondary">Optimized for speed and efficiency</p>
              </div>
              <div className="text-center">
                <Icon name="Users" size={32} className="text-blue-600 mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-primary mb-2">User Experience</h4>
                <p className="text-sm text-text-secondary">Intuitive and accessible design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;