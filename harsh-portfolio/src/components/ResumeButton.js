import React from 'react';
import './ResumeButton.css';
import { FaDownload } from 'react-icons/fa';

const ResumeButton = () => {
  return (
    <a
      href="/resume.pdf"
      className="resume-download-btn"
      download
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Resume as PDF"
      title="Download my resume as PDF"
    >
      <FaDownload style={{ marginRight: '0.5em' }} />
      Download Resume
    </a>
  );
};

export default ResumeButton;
