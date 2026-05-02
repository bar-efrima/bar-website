import React, { useEffect, useRef, useState } from 'react';
import './Header.css'; 
import linkedinLogo from '../assets/logos/linkedin.png';
import githubLogo from '../assets/logos/github.png';
import whatsappLogo from '../assets/logos/whatsapp.png';
import { HashLink } from 'react-router-hash-link';

function Header() {
  const navRef = useRef(null);
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

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;

    const setNavHeightVar = () => {
      document.documentElement.style.setProperty('--nav-h', `${nav.offsetHeight}px`);
    };

    setNavHeightVar();
    window.addEventListener('resize', setNavHeightVar);

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => setNavHeightVar());
      ro.observe(nav);
    }

    return () => {
      window.removeEventListener('resize', setNavHeightVar);
      if (ro) ro.disconnect();
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <nav ref={navRef} id="nav-bar" className={`${isSticky ? 'sticky' : ''} ${isMenuOpen ? 'open' : ''}`}>
      <HashLink smooth to="/#helloWorldTag" className="myname" onClick={closeMenu}>Bar Efrima</HashLink>
      
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
          <HashLink smooth to="/#experienceTag" onClick={closeMenu}>Experience</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projectsTag"onClick={closeMenu} >Projects</HashLink>
        </li>
      </ul>

      <div className="nav-logos">
        <a href="https://www.linkedin.com/in/bar-efrima/" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile">
          <img src={linkedinLogo} id="linkedin-logo" alt="LinkedIn" loading="eager" decoding="async" width="25" height="25" />
        </a>
        <a href="https://github.com/bar-efrima/" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile">
          <img src={githubLogo} id="github-logo" alt="GitHub" loading="eager" decoding="async" width="25" height="25" />
        </a>
        <a href="https://wa.me/972542653012" target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat">
          <img src={whatsappLogo} id="whatsapp-logo" alt="WhatsApp" loading="eager" decoding="async" width="25" height="25" />
        </a>
      </div>
    </nav>
  );
}

export default Header;
