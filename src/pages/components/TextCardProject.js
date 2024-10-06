import React from 'react';
import './TextCardProject.css'; // Import CSS specific to this component

function TextCardProject({ projectDescription , style={}}) {
  const cardStyle = {
    
    width: '65%',
    justifyContent: 'space-between',
    ...style,
  };

  return (
    <div className="content-card" style={cardStyle}>
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
