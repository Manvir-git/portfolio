import React from 'react';
import '../styles/Certificates.css';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="certificates-section">
       {/* Certificates Section */}
       <div className="section-content">
          <h2>My Certificates</h2>
          <div className="certificates-grid">
            {/* Introduction to Generative AI Certificate */}
            <div className="certificate-card">
              <img 
                src="/images/certificates/genai.png" 
                alt="Introduction to Generative AI Certificate" 
                className="certificate-image"
              />
              <h3>Introduction to Generative-AI</h3>
            </div>

            {/* Introduction to Large Language Models Certificate */}
            <div className="certificate-card">
              <img 
                src="/images/certificates/dp.png" 
                alt="Introduction to Large Language Models Certificate" 
                className="certificate-image"
              />
              <h3>Dynamic Programming, Greedy Algorithms</h3>
            </div>

            {/* Server-side JavaScript with Node.js Certificate */}
            <div className="certificate-card">
              <img 
                src="/images/certificates/node.png" 
                alt="Server-side JavaScript with Node.js Certificate" 
                className="certificate-image"
              />
              <h3>Server side JavaScript with Node.js</h3>
            </div>

            {/* HTML, CSS, and JavaScript Certificate */}
            <div className="certificate-card">
              <img 
                src="/images/certificates/html.png" 
                alt="HTML, CSS, and JavaScript for Web Developers Certificate" 
                className="certificate-image"
              />
              <h3>HTML, CSS, and Javascript for Web Developers</h3>
            </div>
          </div>
        </div>

    </section>
  );
};

export default Certificates; 