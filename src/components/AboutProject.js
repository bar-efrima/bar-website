import React from 'react';
import './AboutProject.css'; // Import CSS specific to this component

function AboutProject({ description }) {
  return (
    <div className="content-container">
          <div className="about">
            <h3>About the Project</h3>
            <hr />
            <p>
            {description}
            </p>
          </div>
        </div>
  );
}

export default AboutProject;
