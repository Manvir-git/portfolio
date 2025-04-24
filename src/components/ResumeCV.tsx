import React from 'react';
import '../styles/ResumeCV.css';

const ResumeCV = () => {
  const handleImageClick = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };



  return (
    <section className="resume-cv">
      <div className="container">
        

        <h2>Resume & CV</h2>
        <div className="cv-grid">
          <div className="cv-card">
            <h3>Generalized CV</h3>
            <div className="cv-content">
              <div 
                className="cv-image-container"
                onClick={() => handleImageClick('/images/cv/cv-1.jpg')}
              >
                <img 
                  src="/images/cv/cv-1.jpg" 
                  alt="Generalized CV Preview" 
                  className="cv-image"
                />
              </div>
              <a 
                href="/cv/Manvir_Singh_General_CV.pdf" 
                download 
                className="cv-download-btn"
              >
                ⬇️ Download Generalized CV
              </a>
            </div>
          </div>

          <div className="cv-card">
            <h3>Specialized CV</h3>
            <div className="cv-content">
              <div 
                className="cv-image-container"
                onClick={() => handleImageClick('/images/cv/cv-2.jpg')}
              >
                <img 
                  src="/images/cv/cv-2.jpg" 
                  alt="Specialized CV Preview" 
                  className="cv-image"
                />
              </div>
              <a 
                href="/cv/Manvir_Singh_Specialized_CV.pdf" 
                download 
                className="cv-download-btn"
              >
                ⬇️ Download Specialized CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeCV; 