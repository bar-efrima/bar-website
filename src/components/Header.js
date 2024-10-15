import React, { useEffect, useState } from 'react';
import './Header.css'; 
import mailLogo from '../assets/logos/mail.png';
import whatsappLogo from '../assets/logos/whatsapp.png';
import { HashLink } from 'react-router-hash-link';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <nav id="nav-bar" className={`${isSticky ? 'sticky' : ''} ${isMenuOpen ? 'open' : ''}`}>
      <h2 className="myname" onClick={() => toggleMenu()}>Bar Efrima</h2>
      
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul id="menue">
        <li>
          <HashLink smooth to="/#helloWorldTag" onClick={closeMenu}>Home</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#aboutTag" onClick={closeMenu}>About Me</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projectsTag"onClick={closeMenu} >Projects</HashLink>
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
