import React, { useState } from 'react';
import './Overlay.css'; 

function Overlay({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overlay-container">
      <button onClick={toggleOverlay} className="toggle-button">
        Toggle Overlay
      </button>
      <div className="overlay" style={{ height: isOpen ? '100%' : '0px' }}>
        {children}
      </div>
    </div>
  );
}

export default Overlay;
