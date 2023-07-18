import React from 'react';
import './HeroImgStyles.css';
import bgrndImg from "../assets/react-1.jpg";
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={bgrndImg} alt='background Image'/>
        </div>

        <div className='content'>
            <p>Hi! 👋🏼 <br /> I'm Mohammed Shahriar Ahmed</p>
            <h1>Full Stack Developer<br />& Data Scientist</h1>

            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
        
    </div>
  )
}

export default HeroImg;