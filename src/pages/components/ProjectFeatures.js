import React from 'react';
import './ProjectFeatures.css'; // Ensure you import the correct CSS file

const AmazonFeatures = ({ features }) => {
  return (
    <div className="amazon-features">
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
