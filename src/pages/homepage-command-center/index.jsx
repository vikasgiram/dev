import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProjectShowcase from './components/ProjectShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import QuickHireSection from './components/QuickHireSection';
import Footer from 'components/ui/Footer';

const HomepageCommandCenter = () => {

  return (
    <>
      <Helmet>
        <title>Homepage - Full-Stack MERN Developer | Vikas Giram</title>
        <meta 
          name="description" 
          content="Welcome to Vikas Giram's homepage. Full-Stack MERN Developer with cybersecurity expertise, crafting secure and scalable digital solutions." 
        />
        <meta 
          name="keywords" 
          content="Full-Stack MERN Developer, cybersecurity, secure web applications, scalable digital solutions, Vikas Giram" 
        />
        <meta property="og:title" content="Homepage - Full-Stack MERN Developer | Vikas Giram" />
        <meta property="og:description" content="Welcome to Vikas Giram's homepage. Full-Stack MERN Developer with cybersecurity expertise, crafting secure and scalable digital solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vikasgiram.github.io/dev/homepage-command-center" />
      </Helmet>

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
    </>
  );
};

export default HomepageCommandCenter;
