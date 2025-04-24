import React from 'react';
import '../styles/CVDownload.css';

const CVDownload = () => {
  const handleDownload = () => {
    // Replace this URL with the actual URL of your CV PDF file
    const cvUrl = '/ManvirSingh_CV.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'ManvirSingh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cv-download">
      <button className="download-button" onClick={handleDownload}>
        <span className="button-icon">📄</span>
        <span className="button-text">Download CV</span>
      </button>
    </div>
  );
};

export default CVDownload; 