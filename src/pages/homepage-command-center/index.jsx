import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProjectShowcase from './components/ProjectShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import QuickHireSection from './components/QuickHireSection';
import Footer from 'components/ui/Footer';

const HomepageCommandCenter = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ProjectShowcase />
        <TestimonialsSection />
        <QuickHireSection />
        <Footer/>
      </main>

      
    </div>
  );
};

export default HomepageCommandCenter;