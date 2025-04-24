import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/CVDownload.css';

const CVDownload = () => {
  const handleDownload = () => {
    // Replace with your actual CV file path
    const cvUrl = '/cv/Manvir_Singh_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Manvir_Singh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cv-download fade-in">
      <button onClick={handleDownload} className="download-btn">
        <FontAwesomeIcon icon={faDownload} />
        <span>Download CV</span>
      </button>
    </div>
  );
};

export default CVDownload; 