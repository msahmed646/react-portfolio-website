import React from 'react';
import './HeroImg3Styles.css';
import bgrndImg3 from "../assets/react-4.jpg";

const HeroImg3 = () => {
    return (
      <div className='hero3'>
          <div className='mask3'>
              <img className='about-img' src={bgrndImg3} alt='background Image About Page'/>
          </div>
  
          <div className='content'>
              <h1>ABOUT ME</h1>
              <p>Here's a little about my journey so far</p>
          </div>
      </div>
    )
  }  

export default HeroImg3;