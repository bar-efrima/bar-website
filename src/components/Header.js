// src/components/Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import mailLogo from '../assets/logos/mail.png';
import whatsappLogo from '../assets/logos/whatsapp.png';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const menu = document.getElementById('menue');
      const navbar = document.getElementById('nav-bar');
      if (window.pageYOffset >= menu.offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="nav-bar" className={isSticky ? 'sticky' : ''}>
      <h2 className="myname">Bar Efrima</h2>
      <ul id="menue">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li className="dropdown">
          <Link to="/projects" className="dropbtn">Projects &#x25BC;</Link>
          <div className="dropdown-content">
            {/*  dynamically populateprojects */}
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
