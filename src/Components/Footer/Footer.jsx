import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/padma-priya-676275190/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            LinkedIn
          </a>
        </p>
        <hr className="footer-line" />
        <p>&copy; 2025 Padma Priya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
