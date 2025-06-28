import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CertificationBadges = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      category: 'cloud',
      status: 'active',
      credentialId: 'AWS-CSA-2023-VG001',
      verificationUrl: 'https://aws.amazon.com/verification',
      description: 'Expertise in designing distributed systems on AWS platform',
      skills: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFormation'],
      badge: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: '2023',
      category: 'database',
      status: 'active',
      credentialId: 'MDB-DEV-2023-VG002',
      verificationUrl: 'https://university.mongodb.com/verification',
      description: 'Advanced MongoDB development and optimization techniques',
      skills: ['Aggregation', 'Indexing', 'Sharding', 'Replication'],
      badge: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: '2022',
      category: 'security',
      status: 'active',
      credentialId: 'CEH-2022-VG003',
      verificationUrl: 'https://www.eccouncil.org/verification',
      description: 'Comprehensive cybersecurity and ethical hacking certification',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security'],
      badge: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2023',
      category: 'frontend',
      status: 'active',
      credentialId: 'META-REACT-2023-VG004',
      verificationUrl: 'https://developers.facebook.com/verification',
      description: 'Advanced React development patterns and best practices',
      skills: ['Hooks', 'Context API', 'Performance Optimization', 'Testing'],
      badge: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: '2022',
      category: 'backend',
      status: 'active',
      credentialId: 'NODEJS-2022-VG005',
      verificationUrl: 'https://openjsf.org/verification',
      description: 'Professional Node.js development and architecture',
      skills: ['Express.js', 'API Design', 'Microservices', 'Performance'],
      badge: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2023',
      category: 'cloud',
      status: 'active',
      credentialId: 'GCP-PRO-2023-VG006',
      verificationUrl: 'https://cloud.google.com/verification',
      description: 'Cloud architecture and deployment on Google Cloud Platform',
      skills: ['Kubernetes', 'Cloud Functions', 'BigQuery', 'Cloud Storage'],
      badge: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=100&h=100&fit=crop&crop=center'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Certifications', icon: 'Award' },
    { key: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { key: 'backend', label: 'Backend', icon: 'Server' },
    { key: 'database', label: 'Database', icon: 'Database' },
    { key: 'cloud', label: 'Cloud', icon: 'Cloud' },
    { key: 'security', label: 'Security', icon: 'Shield' }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      frontend: 'bg-info',
      backend: 'bg-accent',
      database: 'bg-warning',
      cloud: 'bg-primary',
      security: 'bg-error'
    };
    return colors[category] || 'bg-secondary';
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-primary">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center shadow-primary">
          <Icon name="Award" size={24} color="white" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-primary">Professional Certifications</h3>
          <p className="text-text-secondary">Verified credentials and industry recognition</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category.key}
            variant={selectedCategory === category.key ? "primary" : "ghost"}
            size="sm"
            iconName={category.icon}
            iconPosition="left"
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.map((cert) => (
          <div key={cert.id} className="bg-background border border-border rounded-lg p-4 shadow-primary hover:shadow-secondary transition-smooth">
            <div className="flex items-start space-x-4 mb-4">
              <div className="relative">
                <img 
                  src={cert.badge} 
                  alt={`${cert.name} badge`}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className={`absolute -top-1 -right-1 w-6 h-6 ${getCategoryColor(cert.category)} rounded-full flex items-center justify-center`}>
                  <Icon name="CheckCircle" size={12} color="white" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-text-primary text-sm mb-1">{cert.name}</h4>
                <p className="text-text-secondary text-xs mb-1">{cert.issuer}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-text-muted">{cert.date}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    cert.status === 'active' ? 'bg-accent-100 text-accent-700' : 'bg-secondary-100 text-secondary-700'
                  }`}>
                    {cert.status === 'active' ? 'Active' : 'Expired'}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-text-secondary text-sm mb-4">{cert.description}</p>

            <div className="mb-4">
              <h5 className="text-xs font-semibold text-text-primary mb-2">Key Skills</h5>
              <div className="flex flex-wrap gap-1">
                {cert.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border-muted pt-3">
              <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                <span>Credential ID:</span>
                <span className="font-mono">{cert.credentialId}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                iconName="ExternalLink"
                iconPosition="right"
                fullWidth
                onClick={() => window.open(cert.verificationUrl, '_blank')}
              >
                Verify Credential
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-warning-50 border border-warning-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Trophy" size={20} color="var(--color-warning)" className="flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-warning-700 mb-1">Continuous Learning Commitment</h4>
            <p className="text-warning-600 text-sm">
              I maintain active certifications and continuously pursue new credentials to stay current with 
              evolving technologies. All certifications are verified and can be validated through official channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;