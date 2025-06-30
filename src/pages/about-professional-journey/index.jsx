import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CybersecurityFoundation from './components/CybersecurityFoundation';
import TechnicalEvolution from './components/TechnicalEvolution';
import PhilosophyApproach from './components/PhilosophyApproach';
import SocialProofSection from './components/SocialProofSection';
import ResumeSection from './components/ResumeSection';
import Footer from '../../components/ui/Footer';

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
        <link rel="canonical" href="https://vikasgiram.github.io/dev/about-professional-journey" />
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

          <Footer />
        </main>

      </div>
    </>
  );
};

export default AboutProfessionalJourney;