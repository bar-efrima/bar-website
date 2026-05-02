import React from 'react';
import './Footer.css'; // Import your CSS for the Footer component

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>&copy; {new Date().getFullYear()} Bar Efrima.</p>
        <a className="footer-contact" href="mailto:bar2798@gmail.com">bar2798@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;
