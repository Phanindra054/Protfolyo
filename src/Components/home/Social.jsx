import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Social = () => {
  return (
    <div className='home_social'>
      <a href="https://www.linkedin.com/in/phanindra-dommeti-749556265/" target="_blank" className="home_social-icon">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/Phanindra" target="_blank" className="home_social-icon">
        <FaTwitter />
      </a>
      <a href="https://github.com/Phanindra054" target="_blank" className="home_social-icon">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/phanindra.dommeti" target="_blank" className="home_social-icon">
        <FaInstagram />
      </a>
    </div>
  );
}


export default Social
