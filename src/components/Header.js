import React, { useEffect, useState } from 'react';
import './Header.css'; 
import mailLogo from '../assets/logos/mail.png';
import whatsappLogo from '../assets/logos/whatsapp.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // Get the current location

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

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll function for specific sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigate to the home page and scroll to section if needed
  const navigateAndScroll = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`; // Navigate to home and scroll
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav id="nav-bar" className={isSticky ? 'sticky' : ''}>
      <h2 className="myname">Bar Efrima</h2>
      <ul id="menue">
        {/* Home Link: Scrolls to the top */}
        <li>
          <a href="#top" onClick={scrollToTop}>Home</a>
        </li>

        {/* About Me Section Link */}
        <li>
          <a href="#aboutmeTag" onClick={() => navigateAndScroll('aboutmeTag')}>About Me</a>
        </li>

        {/* Projects Section Link */}
        <li>
          <a href="#projectsTag" onClick={() => navigateAndScroll('projectsTag')}>Projects</a>
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
