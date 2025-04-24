import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <h2 className="footer-title">Manvir Singh</h2>
          <p className="footer-subtitle">Computer Science Engineering Student</p>
        </div>

        <nav className="footer-nav">
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#training">Training</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="footer-bottom">
          <div className="social-links">
            
          </div>

          <p className="copyright">
            © {currentYear} Manvir Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 