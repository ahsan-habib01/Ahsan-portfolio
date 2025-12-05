import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import ProjectsSection from '../Components/ProjectsSection';
import SkillsSection from '../Components/SkillsSection';
import ContactSection from '../Components/ContactSection';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection /> 
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
