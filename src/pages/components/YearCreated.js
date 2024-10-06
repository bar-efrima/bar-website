import React from 'react';
import './YearCreated.css'; 

function YearCreated({ year }) {
  return (
    <div className="year-created">
    <h3>Created</h3>
      <p>{year}</p>
    </div>
  );
}

export default YearCreated;
