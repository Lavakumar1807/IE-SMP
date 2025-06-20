import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>AdventureQuest</h3>
          <p>Choose your path, shape your destiny</p>
        </div>
        
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} AdventureQuest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;