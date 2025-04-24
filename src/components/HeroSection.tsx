import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:smanvir291@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:9056662843';
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="left-section">
            <img src="/images/profile.jpg" alt="Manvir Singh" className="profile-image" />
          </div>
          <div className="right-section">
            <span className="greeting">Hello, I'm</span>
            <h1 className="name">Manvir Singh</h1>
            <h2 className="title">Computer Science Engineering Student</h2>
            <p className="description">
              A passionate computer science student with expertise in full-stack development,
              data structures, and problem-solving.
            </p>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/manvir291/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a 
                href="https://github.com/Manvir-git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <button 
                className="social-button"
                onClick={handleEmailClick}
              >
                <i className="fas fa-envelope"></i>
                Email
              </button>
              <button 
                className="social-button"
                onClick={handlePhoneClick}
              >
                <i className="fas fa-phone"></i>
                Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 