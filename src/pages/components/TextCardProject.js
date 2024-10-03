import React from 'react';
import './TextCardProject.css'; // Import CSS specific to this component

function TextCardProject({ projectDescription }) {
  return (
    <div className="content-card">
          <div className="card-description">
            <h3>{projectDescription.title}</h3>
            <hr />
            <p>
            {projectDescription.description}
            </p>
          </div>
        </div>
  );
}

export default TextCardProject;
