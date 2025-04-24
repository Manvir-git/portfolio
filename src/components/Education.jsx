import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education fade-in">
      <h2>Education</h2>
      <div className="education-timeline">
        <div className="timeline-entry">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Bachelor of Technology</h3>
            <p className="education-subtitle">Computer Science</p>
            <div className="education-details">
              <h4>Lovely Professional University</h4>
              <p className="location">Punjab, India</p>
              <p className="courses">Courses: Operating Systems, Data Structures, Analysis of Algorithms, MERN Stack, Computer Networks, Databases</p>
            </div>
            <span className="timeline-date">August 2022 - Present</span>
          </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Cambridge International School</h3>
            <p className="education-subtitle">Intermediate (12th)</p>
            <div className="education-details">
              <h4>Punjab, India</h4>
            </div>
            <span className="timeline-date">2020-2022</span>
          </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Cambridge International School</h3>
            <p className="education-subtitle">Matriculation (10th)</p>
            <div className="education-details">
              <h4>Punjab, India</h4>
            </div>
            <span className="timeline-date">2019-2020</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 