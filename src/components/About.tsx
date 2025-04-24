import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faBrain, faRocket } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about fade-in">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">I’m a Full Stack Developer skilled in the MERN stack with a strong foundation in Data Structures and Algorithms. I enjoy building real-world projects that solve practical problems. Always eager to learn, grow, and create impactful software..</p>
          <div className="about-points">
            <div className="about-point">
              <FontAwesomeIcon icon={faCode} />
              <p>Tech enthusiast who thrives on staying current with the latest web technologies and development trends</p>
            </div>
            <div className="about-point">
              <FontAwesomeIcon icon={faPaintBrush} />
              <p>Specialize in crafting clean, user-friendly interfaces that deliver exceptional user experiences</p>
            </div>
            <div className="about-point">
              <FontAwesomeIcon icon={faBrain} />
              <p>Fascinated by AI's potential and actively exploring its integration in modern web applications</p>
            </div>
            <div className="about-point">
              <FontAwesomeIcon icon={faRocket} />
              <p>Committed to continuous learning and pushing the boundaries of web development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 