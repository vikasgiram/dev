import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const clientLogos = [
    { name: "TechFlow Solutions", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "HealthTech Innovations", logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=60&fit=crop" },
    { name: "FinanceFlow Corp", logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=60&fit=crop" },
    { name: "DataSecure Systems", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop" },
    { name: "CloudTech Enterprises", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop" },
    { name: "InnovateLab", logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop" }
  ];

  const projectStats = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
      icon: "CheckCircle",
      color: "text-accent"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project surveys and testimonials",
      icon: "Star",
      color: "text-warning"
    },
    {
      number: "100%",
      label: "On-Time Delivery",
      description: "All projects delivered within agreed timelines",
      icon: "Clock",
      color: "text-info"
    },
    {
      number: "0",
      label: "Security Breaches",
      description: "Zero security incidents across all deployed applications",
      icon: "Shield",
      color: "text-success"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "Award",
      verified: true
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      year: "2022",
      icon: "Shield",
      verified: true
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2023",
      icon: "Database",
      verified: true
    },
    {
      title: "React Professional Certification",
      issuer: "Meta",
      year: "2023",
      icon: "Code",
      verified: true
    }
  ];

  const satisfactionMetrics = [
    {
      category: "Code Quality",
      rating: 4.9,
      maxRating: 5,
      reviews: 28,
      icon: "Code"
    },
    {
      category: "Communication",
      rating: 4.8,
      maxRating: 5,
      reviews: 32,
      icon: "MessageCircle"
    },
    {
      category: "Timeliness",
      rating: 5.0,
      maxRating: 5,
      reviews: 30,
      icon: "Clock"
    },
    {
      category: "Problem Solving",
      rating: 4.9,
      maxRating: 5,
      reviews: 29,
      icon: "Lightbulb"
    }
  ];

  const guarantees = [
    {
      title: "100% Satisfaction Guarantee",
      description: "If you\'re not completely satisfied with the delivered work, I\'ll make it right or provide a full refund.",
      icon: "CheckCircle"
    },
    {
      title: "Security Assurance",
      description: "All applications are built with security-first principles and undergo comprehensive security testing.",
      icon: "Shield"
    },
    {
      title: "Code Quality Promise",
      description: "Clean, maintainable, and well-documented code that follows industry best practices and standards.",
      icon: "Code"
    },
    {
      title: "Post-Launch Support",
      description: "30 days of free bug fixes and support after project delivery to ensure smooth operation.",
      icon: "Headphones"
    }
  ];

  const renderStars = (rating, maxRating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} name="Star" size={16} className="text-warning fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(<Icon key="half" name="Star" size={16} className="text-warning fill-current opacity-50" />);
    }

    const emptyStars = maxRating - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty-${i}`} name="Star" size={16} className="text-border" />);
    }

    return stars;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Trusted by Leading Companies</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Building long-term partnerships through exceptional results and unwavering commitment to quality.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-background border border-border rounded-lg shadow-primary hover:shadow-secondary transition-smooth group">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full h-8 object-contain opacity-60 group-hover:opacity-100 transition-smooth"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, index) => (
            <div key={index} className="bg-background border border-border rounded-xl p-6 text-center shadow-primary hover:shadow-secondary transition-smooth group">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Icon name={stat.icon} size={24} color="white" />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="font-heading font-semibold text-primary mb-2">{stat.label}</div>
              <div className="text-sm text-text-secondary">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Satisfaction Ratings */}
        <div className="bg-surface border border-border rounded-2xl p-8 mb-16 shadow-primary">
          <h3 className="text-2xl font-heading font-bold text-primary text-center mb-8">Client Satisfaction Ratings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {satisfactionMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={metric.icon} size={20} color="white" />
                </div>
                <h4 className="font-heading font-semibold text-primary mb-2">{metric.category}</h4>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {renderStars(metric.rating, metric.maxRating)}
                </div>
                <div className="text-lg font-bold text-accent mb-1">{metric.rating}/5</div>
                <div className="text-sm text-text-muted">({metric.reviews} reviews)</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-primary text-center mb-8">Professional Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 shadow-primary hover:shadow-secondary transition-smooth">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon name={cert.icon} size={20} color="white" />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center space-x-1 text-accent text-sm">
                      <Icon name="CheckCircle" size={14} />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <h4 className="font-heading font-semibold text-primary mb-2">{cert.title}</h4>
                <p className="text-sm text-text-secondary mb-1">{cert.issuer}</p>
                <p className="text-sm text-text-muted">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">My Guarantees to You</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={guarantee.icon} size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-2">{guarantee.title}</h4>
                  <p className="text-sm opacity-90">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;