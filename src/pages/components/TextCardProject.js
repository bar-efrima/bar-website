import React from 'react';
import './TextCardProject.css';

function TextCardProject({ projectDescription , style={}, children}) {
  const cardStyle = {
    justifyContent: 'space-between',
    ...style,
  };

  const titleStyle = {
    color: projectDescription.color || '#CECECF;',  
  };

  return (
    <div className="content-card" style={cardStyle}>
      <div className="card-description">
        <h3 style={titleStyle}>{projectDescription.title}</h3>  {/* Apply dynamic color */}
        <hr className="line" />
        <p>{children}</p>
      </div>
    </div>
  );
}

export default TextCardProject;
