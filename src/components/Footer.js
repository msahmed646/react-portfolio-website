import React from 'react';
import "./FooterStyles.css";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMapPin, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaMapPin size={20} style={{ color: '#fff', marginRight: "1rem" }}
                    />
                    <div>
                        <p>West Palm Beach, FL</p>
                    </div>
                </div>

                <div className='phone'>
                    <FaPhone size={20} style={{ color: '#fff', marginRight: "1rem" }}
                    />
                    <div>
                        <p>(646) 963-1836</p>
                    </div>
                </div>

                <div className='email'>
                    <FaMailBulk size={20} style={{ color: '#fff', marginRight: "1rem" }}
                    />
                    <div>
                        <p>msahmed646@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className='right'>
                <div className='social'>
                    <h4>Social Media</h4>
                    <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }}
                    />
                    <FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }}
                    />
                    <FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }}
                    />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer;
