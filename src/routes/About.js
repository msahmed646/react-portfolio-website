import React from 'react'

import Navbar from '../components/Navbar';
import HeroImg3 from '../components/HeroImg3';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg3 heading="About Me" text="Here's a little about my journey so far"/>
      <Footer />
    </div>
  );
}

export default About;