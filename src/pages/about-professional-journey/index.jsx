import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CybersecurityFoundation from './components/CybersecurityFoundation';
import TechnicalEvolution from './components/TechnicalEvolution';
import PhilosophyApproach from './components/PhilosophyApproach';
import SocialProofSection from './components/SocialProofSection';
import ResumeSection from './components/ResumeSection';

const AboutProfessionalJourney = () => {
  return (
    <>
      <Helmet>
        <title>About - Professional Journey | Vikas Giram</title>
        <meta 
          name="description" 
          content="Discover Vikas Giram's unique journey from cybersecurity education to full-stack development mastery. Learn about his security-first approach to building robust web applications." 
        />
        <meta name="keywords" content="Vikas Giram, cybersecurity developer, full-stack developer, MERN stack, security-first development, professional journey" />
        <meta property="og:title" content="About - Professional Journey | VikasGiram.dev" />
        <meta property="og:description" content="Discover Vikas Giram's unique journey from cybersecurity education to full-stack development mastery." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vikasgiram.dev/about-professional-journey" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Cybersecurity Foundation */}
          <CybersecurityFoundation />
          
          {/* Technical Evolution */}
          <TechnicalEvolution />
          
          {/* Philosophy & Approach */}
          <PhilosophyApproach />
          
          {/* Social Proof */}
          <SocialProofSection />
          
          {/* Resume Section */}
          <ResumeSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">VG</span>
                </div>
                <span className="text-xl font-heading font-bold">VikasGiram.dev</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Security-First Full-Stack Developer
              </p>
              <p className="text-primary-foreground/60 text-sm">
                © {new Date().getFullYear()} Vikas Giram. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutProfessionalJourney;