import React from 'react';
import './Github.css'; 

function GithubLink({ link, linkIcon }) {
  return (
    <div className="github">
      <p><a href={link} target="_blank" rel="noopener noreferrer">GitHub Repository</a><img src={linkIcon} alt="Link Icon" /></p>
      </div>
  );
}

export default GithubLink;
