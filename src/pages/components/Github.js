import React from 'react';
import './Github.css'; 

function GithubLink({ link, linkIcon, linkText = "GitHub" }) {
  return (
    <div className="github">
      <p>
      <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
      <img src={linkIcon} alt="Link Icon" loading="lazy"/>
      </p>
      </div>
  );
}

export default GithubLink;
