// src/components/Header.js
import React, { useEffect, useState } from 'react';
import './Header.css'; 
import mailLogo from '../assets/logos/mail.png';
import whatsappLogo from '../assets/logos/whatsapp.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const menu = document.getElementById('menue');
      if (window.pageYOffset >= menu.offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <nav id="nav-bar" className={isSticky ? 'sticky' : ''}>
      <h2 className="myname">Bar Efrima</h2>
      <ul id="menue">
        <li>
        <a href="#home" onClick={() => scrollToSection('homeTag')}>Home</a>
        </li>
        <li>
        <a href="#About-me" onClick={() => scrollToSection('aboutTag')}>About Me</a>
        </li>
        <li className="dropdown">
           <Link to="/Projects" className="dropbtn">Projects &#x25BC;</Link>
          <div className="dropdown-content">
            <a href="/projects#project1">Project 1</a>
          </div>
        </li>
      </ul>
      <div className="nav-logos">
        <a href="mailto:bar2798@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={mailLogo} id="mail-logo" alt="Mail" />
        </a>
        <a href="https://wa.me/972542653012" target="_blank" rel="noopener noreferrer">
          <img src={whatsappLogo} id="whatsapp-logo" alt="WhatsApp" />
        </a>
      </div>
    </nav>
  );
}

export default Header;
