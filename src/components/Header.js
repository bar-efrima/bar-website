import React, { useEffect, useState } from 'react';
import './Header.css'; 
import mailLogo from '../assets/logos/mail.png';
import whatsappLogo from '../assets/logos/whatsapp.png';
import { useLocation } from 'react-router-dom';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close
  const location = useLocation();

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateAndScroll = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
  };

  return (
    <nav id="nav-bar" className={`${isSticky ? 'sticky' : ''} ${isMenuOpen ? 'open' : ''}`}>
      {/* when the name is pressed you got back home page */}
      <h2 className="myname" onClick={() => navigateAndScroll('helloTag')}>Bar Efrima</h2>
      
      {/* Hamburger icon for smaller screens */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Menu */}
      <ul id="menue">
        <li>
          <a href="#helloTag" onClick={() => navigateAndScroll('helloTag')}>Home</a>
        </li>
        <li>
          <a href="#aboutmeTag" onClick={() => navigateAndScroll('aboutTag')}>About Me</a>
        </li>
        <li>
          <a href="#projectsTag" onClick={() => navigateAndScroll('projectsTag')}>Projects</a> 
        </li>
      </ul>

      {/* Social Icons */}
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
