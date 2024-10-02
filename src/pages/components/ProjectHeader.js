import React from 'react';
import './ProjectHeader.css'; 

function ProjectHeader({ title, description, logo, screenshot }) {
  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="header-container">
          <img src={logo} />
          <div className="text-container">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </header>

      {/* Project Showcase Section */}
      <div className="project-showcase">
        <img src={screenshot} />
      </div>
    </div>
  );
}

export default ProjectHeader;
