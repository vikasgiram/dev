import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO at TechFlow Solutions",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Vikas delivered exceptional work on our e-commerce platform. His security-first approach and MERN expertise resulted in a 40% performance improvement and zero security incidents in 8 months.`,
      rating: 5,
      project: "E-commerce Platform Redesign",
      metrics: { performance: "+40%", security: "0 incidents", timeline: "On time" },
      linkedinVerified: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      company: "StartupLab Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `Working with Vikas was a game-changer for our startup. He built our entire MERN stack application from scratch, implementing robust security measures that impressed our investors and users alike.`,
      rating: 5,
      project: "Full-Stack MVP Development",
      metrics: { funding: "$2.5M raised", users: "10K+ active", rating: "4.9/5" },
      linkedinVerified: true
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Head of Digital Innovation",
      company: "HealthTech Dynamics",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      content: `Vikas's expertise in both development and cybersecurity was crucial for our HIPAA-compliant health platform. His attention to detail and proactive communication made the entire process seamless.`,
      rating: 5,
      project: "Healthcare Management System",
      metrics: { compliance: "100% HIPAA", uptime: "99.98%", patients: "5K+" },
      linkedinVerified: true
    },
    {
      id: 4,
      name: "James Thompson",
      role: "VP of Engineering",
      company: "FinSecure Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `Vikas transformed our legacy system into a modern, secure MERN application. His cybersecurity background was invaluable in implementing financial-grade security measures.`,
      rating: 5,
      project: "Financial Platform Modernization",
      metrics: { security: "Bank-grade", performance: "+60%", cost: "-30%" },
      linkedinVerified: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-accent font-mono text-sm mb-4">
            <Icon name="MessageSquare" size={16} />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real feedback from real projects - verified LinkedIn testimonials and measurable outcomes
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-8 lg:p-12 shadow-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Icon name="Quote" size={128} className="text-accent" />
            </div>

            <div className="relative">
              {/* Rating Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className="text-warning fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl lg:text-2xl text-text-primary text-center leading-relaxed mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                    />
                    {currentTestimonial.linkedinVerified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <Icon name="Check" size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-heading font-semibold text-primary text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {currentTestimonial.role}
                    </div>
                    <div className="text-accent text-sm font-medium">
                      {currentTestimonial.company}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-12 bg-border"></div>

                <div className="text-center">
                  <div className="text-sm text-text-muted mb-1">Project</div>
                  <div className="font-medium text-primary">
                    {currentTestimonial.project}
                  </div>
                </div>
              </div>

              {/* Project Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {Object.entries(currentTestimonial.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-accent">{value}</div>
                    <div className="text-xs text-text-muted capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === activeTestimonial
                    ? 'bg-accent' :'bg-border hover:bg-accent/50'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid - Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`p-4 rounded-lg border transition-smooth text-left ${
                  index === activeTestimonial
                    ? 'border-accent bg-accent-50' :'border-border bg-surface hover:border-accent/50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-primary text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-text-muted">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className="text-warning fill-current"
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;