import React from 'react';
import './Footer.css'; // Import your CSS for the Footer component

function Footer() {
  return (
    <footer className="footer gradient">
      <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Bar Efrima. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
