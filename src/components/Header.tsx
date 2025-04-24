import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
    closeMenu();
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <a 
          href="#home" 
          className={`logo ${activeSection === 'home' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Manvir Singh
        </a>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="menu-icon">{isMenuOpen ? '×' : '☰'}</span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects-experience" 
              className={`nav-link ${activeSection === 'projects-experience' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects-experience');
              }}
            >
              Projects & Experience
            </a>
          </li>
          <li>
            <a 
              href="#certificates" 
              className={`nav-link ${activeSection === 'certificates' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('certificates');
              }}
            >
              Certificates
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('education');
              }}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 