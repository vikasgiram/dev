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
      title: 'Research and Development Engineer',
      company: 'Daccess Security Systems Pvt. Ltd.',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
      location: 'Baner, Pune',
      startDate: '2025-07-01',
      endDate: 'Present',
      current: true,
      description: `Leading the research and development team to innovate and enhance security solutions. Focused on building scalable, secure, and high-performance applications using modern technologies. Collaborating with cross-functional teams to deliver cutting-edge products that meet client needs while adhering to best security practices.`,
      technologies: ['Python', 'Video Analytics', 'Machine Learning', 'YOLOv8', 'Docker'],
      achievements: [
        'Spearheaded the development of a next-generation video analytics platform, improving detection accuracy by 30%',
        'Implemented advanced security protocols that reduced system vulnerabilities by 40%',
        'Led a team of 3 engineers, fostering a culture of innovation and continuous improvement',
        'Optimized application performance, achieving a 50% reduction in response time for critical operations',
        'Conducted regular security audits and implemented best practices to ensure compliance with industry standards'
      ],
      projects: [
        {
          name: 'Traffic Signal Detection System',
          description: 'A real-time traffic signal based on the density of vehicles using YOLOv8 and Python, enhancing urban traffic management.',
          impact: 'Reduced traffic congestion by 25% in pilot areas, improving urban mobility and reducing emissions'
        },
        {
          name: 'Theft Detection System',
          description: 'Developed a comprehensive theft detection system using video analytics and machine learning, enabling proactive security measures for clients.',
          impact: 'Decreased theft incidents by 35% for clients, enhancing overall security and client trust'
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
      title: 'Software Developer - Trainee',
      company: 'Daccess Security Systems Pvt. Ltd.',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&crop=center',
      location: 'Baner, Pune',
      startDate: '2025-01-01',
      endDate: '2025-07-01',
      current: false,
      description: `Developed and maintained multiple client-facing web applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions while ensuring security best practices and optimal user experience.`,
      technologies: ['React.js', 'Node.js', 'Docker', 'Express.js', 'Firebase', 'Material-UI', 'JWT', 'REST API', 'Socket.io'],
      achievements: [
        'Successfully delivered 2+ client projects on time with a 98% client satisfaction rate',
        'Implemented security features that reduced vulnerability reports by 30%',
        'Enhanced application performance by optimizing front-end code and implementing lazy loading',
        'Conducted code reviews and provided mentorship to junior developers, improving team productivity',
        'Participated in Agile ceremonies, contributing to sprint planning and retrospectives'
      ],
      projects: [
        {
          name: 'CRM System',
          description: 'Comprehensive CRM system for managing customer interactions, sales tracking, and reporting, built with React and Node.js.',
          impact: 'Increased sales team efficiency by 20% through streamlined workflows and real-time data access'
        },
        {
          name: 'RTSP-Realy Microservice',
          description: 'Creatd a real-time streaming protocol relay service using Node.js and Socket.io, enabling secure and efficient video streaming for surveillance systems of Bha-Bha Automic Research Center Mumbai.',
          impact: 'Enabled real-time video streaming with minimal latency, enhancing surveillance capabilities for clients'
        }
      ],
      skillsDeveloped: ['Docker', 'RESTful APIs', 'Real-time Communication', 'Security Best Practices', 'Agile Development'],
      testimonial: {
        quote: 'Vikas brought exceptional technical skills and a security-minded approach to every project. His ability to deliver complex features on time was remarkable.',
        author: 'Ganesh Galande',
        position: 'Manager It, Daccess Security Systems'
      }
    },
    {
      id: 3,
      type: 'work',
      title: 'Full Stack Developr - Intern',
      company: 'Daccess Security Systems Pvt. Ltd.',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center',
      location: 'Baner, Pune',
      startDate: '2024-06-15',
      endDate: '2025-01-01',
      current: false,
      description: `Internship focused on full-stack web development with a strong emphasis on security practices. Assisted in building and maintaining internal tools and client-facing applications, gaining hands-on experience in the software development lifecycle and agile methodologies.`,
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Node.js', 'MySQL', 'Git'],
      achievements: [
        'Contributed to 2 major projects, enhancing functionality and user experience',
        'Implemented responsive design principles improving mobile user engagement by 30%',
        'Automated testing processes reducing bug reports by 20%',
        'Participated in daily stand-ups and sprint planning sessions, gaining agile development experience',
        'Received "Intern of the Month" award for outstanding performance in November 2024'
      ],
      projects: [
        {
          name: 'Ticketing Tool for services',
          description: 'Internal tool for managing service requests, tracking issues, and providing real-time updates to clients.',
          impact: 'Streamlined service request handling, reducing response time by 25%'
        },
        {
          name: 'Project Management Tool',
          description: 'A collaborative tool for tracking project progress, task assignments, and team communication, designed to enhance productivity in software development teams.',
          impact: 'Reduced project delivery time by 15% through improved task tracking and team collaboration features'
        }
      ],
      skillsDeveloped: ['React Development', 'Responsive Design', 'Version Control', 'Agile Methodology', 'Problem Solving'],
      testimonial: {
        quote: 'Vikas showed incredible dedication to learning and growth. His attention to detail and eagerness to take on challenges made him stand out from day one.',
        author: 'Yogesh Singure',
        position: 'Senior Developer, Daccess Security Systems'
      }
    },
    {
      id: 4,
      type: 'education',
      title: 'BTech in Cyber Security',
      company: 'Savitribai Phule Pune University',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center',
      location: 'Pune, India',
      startDate: '2022-09-01',
      endDate: '2025-06-02',
      current: false,
      description: `Comprehensive computer science education with specialization in cybersecurity and software development. Maintained excellent academic performance while actively participating in coding competitions and technical projects.`,
      technologies: ['C++', 'Java', 'Python', 'Data Structures', 'Algorithms', 'Database Systems', 'Network Security', 'Operating Systems'],
      achievements: [
        'Graduated with First Class Honors (CGPA: 8.34/10)',
        'Winner of Inter-University Coding Competition 2023',
        'Published research paper on "Air Quality Monitoring using IoT" in a national conference',
        'Completed advanced cybersecurity certification during final year'
      ],
      projects: [
        {
          name: 'Secure Chatting  Web Application',
          description: 'Final year project focused on developing a secure web application for real-time communication with end-to-end encryption.',
          impact: 'Successfully implemented security protocols that prevented data breaches and ensured user privacy'
        },
        {
          name: 'Air Quality Monitoring System using IoT',
          description: 'Developed an IoT-based system to monitor air quality in real-time, providing data visualization and alerts for pollution levels.',
          impact: 'Enabled local authorities to take timely action against pollution, improving community health awareness'
        }
      ],
      skillsDeveloped: ['Programming Fundamentals', 'System Design', 'Research Skills', 'Leadership', 'Academic Writing'],
      testimonial: {
        quote: 'Vikas was one of our most promising students, combining strong technical skills with excellent leadership qualities. His passion for cybersecurity was evident throughout his studies.',
        author: 'Dr. Dipika Ajarkar',
        position: 'Head of Cyber Security Department, GH Raisoni College of Engineering'
      }
    },
    {
      id: 5,
      type: 'eudcation',
      title: 'Diploma in Computer Technology',
      company: 'Government Polytechnic Beed',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center',
      location: 'Beed',
      startDate: '2019-06-01',
      endDate: '2022-08-15',
      current: false,
      description: `Intensive diploma program focusing on practical skills in computer technology, including programming, networking, and cybersecurity fundamentals. Gained hands-on experience through projects and internships, laying the foundation for a career in software development.`,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Networking', 'Java', 'Cybersecurity Basics'],
      achievements: [
        'Topped in the College with 85.03% in final exams',
        'Become the Student President of the Computer Science Department',
        'Developed a food delivery web application as a final project',
        'Completed internship at a local IT firm focusing on web development',
        'Organized technical workshops and coding bootcamps for peers'
      ],
      skillsDeveloped: ['Web Development', 'Networking Fundamentals', 'Basic Cybersecurity', 'Team Leadership', 'Project Management'],
    },
    {
      id: 6,
      type: 'education',
      title: 'Seconday School Certificate',
      company: 'Shivaji High School',
      logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&h=100&fit=crop&crop=center',
      location: 'Beed',
      startDate: '2017-06-15',
      endDate: '2018-06-20',
      current: false,
      description: `Completed secondary education with a focus on science and mathematics. Developed foundational skills in programming and problem-solving through school projects and extracurricular activities.`,
      technologies: ['Web', 'Programming', 'Mathematics', 'Physics', 'Chemistry'],
      achievements: [
        'Achieved 78% in final examinations',
        'Participated in inter-school coding competition',
        'Developed a simple web application for school event management',
        'Member of the science club organizing monthly workshops',
        'Volunteered for community service projects'
      ],
      skillsDeveloped: ['Basic Programming', 'Problem Solving', 'Teamwork', 'Time Management', 'Communication']
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