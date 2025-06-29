import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProjectShowcase from './components/ProjectShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import QuickHireSection from './components/QuickHireSection';
import { useNavigate } from 'react-router-dom';

const HomepageCommandCenter = () => {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ProjectShowcase />
        <TestimonialsSection />
        <QuickHireSection />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">VG</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Vikas Giram</h3>
                  <p className="text-primary-200 text-sm">Security-First Developer</p>
                </div>
              </div>
              <p className="text-primary-200 leading-relaxed mb-4">
                Crafting secure, scalable MERN stack solutions with cybersecurity expertise. 
                Transforming ideas into robust digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/vikasgiram/" className="text-primary-200 hover:text-accent transition-smooth">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/vikasgiram/" className="text-primary-200 hover:text-accent transition-smooth">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-200 hover:text-accent transition-smooth">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-200">
                <li><a onClick={()=>navigate('/about-professional-journey')} className="hover:text-accent transition-smooth">About</a></li>
                <li><a onClick={()=>navigate('/projects-portfolio-showcase')} className="hover:text-accent transition-smooth">Projects</a></li>
                <li><a onClick={()=>navigate('/services-freelance-hub')}  className="hover:text-accent transition-smooth">Services</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Blog</a></li>
                <li><a  className="hover:text-accent transition-smooth">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul  onClick={()=> navigate('/services-freelance-hub')} className="space-y-2 text-primary-200">
                <li><a className="hover:text-accent transition-smooth">API Development</a></li>
                <li><a className="hover:text-accent transition-smooth">Web Development</a></li>
                <li><a className="hover:text-accent transition-smooth">Security Audit</a></li>
                <li><a className="hover:text-accent transition-smooth">Consultation</a></li>
                <li><a className="hover:text-accent transition-smooth">Code Review</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-200 text-sm">
              © {new Date().getFullYear()} Vikas Giram All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-200 hover:text-accent text-sm transition-smooth">Privacy Policy</a>
              <a href="#" className="text-primary-200 hover:text-accent text-sm transition-smooth">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomepageCommandCenter;