import React from 'react';
// import './Header.css'; // Create a CSS file for this component if needed.

const Header = () => {
  return (
    <header>
      <nav id="nav-bar">
        <h2 className="myname">Bar Efrima</h2>
        <ul id="menu">
          <li><a href="#aboutmeTag">About Me</a></li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn" id="projectsTag">Projects &#x25BC;</a>
            <div className="dropdown-content" id="projects-dropdown">
              {/* Project Links will be dynamically populated */}
            </div>
          </li>
        </ul>
        <div className="nav-logos">
          <a href="mailto:bar2798@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="Logo/mail.png" id="mail-logo" alt="Email Logo" />
          </a>
          <a href="https://wa.me/972542653012" target="_blank" rel="noopener noreferrer">
            <img src="Logo/whatsapp.png" id="whatsapp-logo" alt="WhatsApp Logo" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
