import React from "react";
import "./Footer.css"; // Add footer specific styles

function Footer() {
  return (
    <div className="logo-container">
      <a href="https://www.linkedin.com/in/bar-efrima/" target="_blank" rel="noopener noreferrer">
        <img src="./assets/logos/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="./assets/CV/Bar-Efrima-cv.pdf" download="cv.pdf">
        <img src="./assets/logos/cv.png" alt="CV" />
      </a>
      <a href="https://github.com/bar-efrima/" target="_blank" rel="noopener noreferrer">
        <img src="./assets/logos/github.png" alt="GitHub" />
      </a>
    </div>
  );
}

export default Footer;
