import React from 'react';
import './ProjectFeatures.css';

const AmazonFeatures = ({ features }) => {
  return (
    <div className="project-features">
      <div className="feature-description">
        <h3>Project Features</h3>
        <hr className="line" />
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
               <div >{ feature.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AmazonFeatures;
