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
      if (window.scrollY >= menu.offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll); 

    // If there's a hash in the URL, scroll to the section when the page loads
    const hash = window.location.hash;
    if (hash) {
      slowScrollToSection(hash.substring(1));
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Custom smooth scroll with adjustable duration
  const slowScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const targetPosition = section.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 200; // Increase for slower scrolling
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * progressRatio);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const navigateAndScroll = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home and pass the sectionId in the URL
      window.location.replace(`/#${sectionId}`);
    } else {
      slowScrollToSection(sectionId); // Use the custom slow scroll function
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
  };

  return (
    <nav id="nav-bar" className={`${isSticky ? 'sticky' : ''} ${isMenuOpen ? 'open' : ''}`}>
      <h2 className="myname" onClick={() => navigateAndScroll('helloTag')}>Bar Efrima</h2>
      
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

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
