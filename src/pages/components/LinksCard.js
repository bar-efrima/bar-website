import React from 'react';
import './LinksCard.css'; 
import linkIcon from '../General_Images/link.png';

function projectLinks({ projectLinks}) {
  return (
    <div className="links">
      {Object.entries(projectLinks).map(([linkUrl, linkText], index) => (
        <p key={index}>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            {linkText} <span><img src={linkIcon} alt="Link Icon" /></span>
          </a>
        </p>
      ))}
    </div>
  );
}

export default projectLinks;
