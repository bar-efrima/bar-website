import React from 'react';
import './TextCardProject.css';

function TextCardProject({ projectDescription , style={}, children}) {
  const cardStyle = {
    justifyContent: 'space-between',
    ...style,
  };

  return (
    <div className="content-card" style={cardStyle}>
          <div className="card-description">
            <h3>{projectDescription.title}</h3>
            <hr className="line"/>
            <p>
            {children}
            </p>
          </div>
        </div>
  ); 
}

export default TextCardProject;
