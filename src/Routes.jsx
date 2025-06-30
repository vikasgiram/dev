import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomepageCommandCenter from "pages/homepage-command-center";
import ProjectsPortfolioShowcase from "pages/projects-portfolio-showcase";
import ExperienceCareerTimeline from "pages/experience-career-timeline";
import AboutProfessionalJourney from "pages/about-professional-journey";
import SkillsTechnicalMasteryCenter from "pages/skills-technical-mastery-center";
import ServicesFreelanceHub from "pages/services-freelance-hub";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/dev" element={<HomepageCommandCenter />} />
        <Route path="/dev/homepage-command-center" element={<HomepageCommandCenter />} />
        <Route path="/dev/projects-portfolio-showcase" element={<ProjectsPortfolioShowcase />} />
        <Route path="/dev/experience-career-timeline" element={<ExperienceCareerTimeline />} />
        <Route path="/dev/about-professional-journey" element={<AboutProfessionalJourney />} />
        <Route path="/dev/skills-technical-mastery-center" element={<SkillsTechnicalMasteryCenter />} />
        <Route path="/dev/services-freelance-hub" element={<ServicesFreelanceHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;