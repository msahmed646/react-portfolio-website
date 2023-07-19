import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works"/>
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Project;