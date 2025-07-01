import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ClientSuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      clientName: "Kalio IO Solutions",
      clientLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      projectTitle: "EKYC Platform",
      industry: "Identity Verification",
      challenge: "Need for a secure and efficient EKYC solution to onboard users while preventing fraud.",
      solution: "Developed a React-based EKYC platform with advanced security features including biometric verification and real-time fraud detection.",
      results: [
        { metric: "Onboarding Speed", improvement: "+50%", icon: "Clock" },
        { metric: "Fraud Detection Rate", improvement: "+20%", icon: "Shield" },
        { metric: "User Satisfaction", improvement: "+30%", icon: "Smile" },
        { metric: "Support Requests", improvement: "-40%", icon: "MessageSquare" }
      ],
      testimonial: "Vikas delivered an exceptional EKYC platform that not only met our security needs but also provided a seamless user experience. His expertise in React and security best practices was evident throughout the project.",
      clientRole: "CEO",
      projectDuration: "12 weeks",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Tailwind CSS", "Express.js"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
  ];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[activeStory];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Client Success Stories</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real projects, real results. See how cybersecurity-aware development transforms businesses.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-2xl shadow-secondary overflow-hidden">
          {/* Story Navigation */}
          <div className="flex items-center justify-between p-6 border-b border-border bg-primary-50">
            <div className="flex items-center space-x-4">
              <Image
                src={currentStory.clientLogo}
                alt={`${currentStory.clientName} logo`}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-heading font-bold text-primary">{currentStory.clientName}</h3>
                <p className="text-sm text-text-secondary">{currentStory.industry}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                iconName="ChevronLeft"
                onClick={prevStory}
              />
              <span className="text-sm text-text-muted px-3">
                {activeStory + 1} of {successStories.length}
              </span>
              <Button
                variant="ghost"
                size="sm"
                iconName="ChevronRight"
                onClick={nextStory}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-heading font-bold text-primary mb-2">
                  {currentStory.projectTitle}
                </h4>
                <div className="flex items-center space-x-4 text-sm text-text-muted mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{currentStory.projectDuration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="User" size={14} />
                    <span>{currentStory.clientRole}</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-heading font-semibold text-primary mb-2">Challenge</h5>
                <p className="text-text-secondary leading-relaxed">{currentStory.challenge}</p>
              </div>

              <div>
                <h5 className="font-heading font-semibold text-primary mb-2">Solution</h5>
                <p className="text-text-secondary leading-relaxed">{currentStory.solution}</p>
              </div>

              <div>
                <h5 className="font-heading font-semibold text-primary mb-3">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {currentStory.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent-50 text-accent text-sm rounded-full border border-accent-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Results & Testimonial */}
            <div className="space-y-6">
              <div>
                <Image
                  src={currentStory.image}
                  alt={currentStory.projectTitle}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div>
                <h5 className="font-heading font-semibold text-primary mb-4">Key Results</h5>
                <div className="grid grid-cols-2 gap-4">
                  {currentStory.results.map((result, index) => (
                    <div key={index} className="bg-background border border-border rounded-lg p-4 text-center">
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Icon name={result.icon} size={20} color="white" />
                      </div>
                      <div className="text-lg font-bold text-accent mb-1">{result.improvement}</div>
                      <div className="text-xs text-text-secondary">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Icon name="Quote" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-text-primary italic leading-relaxed mb-3">
                      "{currentStory.testimonial}"
                    </p>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={currentStory.clientLogo}
                        alt={currentStory.clientName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-primary">{currentStory.clientName}</div>
                        <div className="text-sm text-text-secondary">{currentStory.clientRole}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Indicators */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStory(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === activeStory ? 'bg-accent' : 'bg-border hover:bg-accent-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;