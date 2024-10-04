// src/components/LogoContainer.js
import React from 'react';
import './LogoContainer.css'; // Add styles here

// Import all logos
import linkedinLogo from '../assets/logos/linkedin.png';
import githubLogo from '../assets/logos/github.png';

function LogoContainer() {
  return (
    <div className="logo-container">
      <a href="https://www.linkedin.com/in/bar-efrima/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" />
      </a>
      <a href="https://github.com/bar-efrima/" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" />
      </a>
    </div>
  );
}

export default LogoContainer;
