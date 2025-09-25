import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ProjectsCarousel.css';

const ProjectsCarousel = ({ projects }) => {
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: dir * width * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="carousel-arrow left" onClick={() => scroll(-1)} aria-label="Scroll left">
        <FaChevronLeft />
      </button>
      <div className="carousel" ref={carouselRef} tabIndex={0}>
        {projects.map((project, idx) => (
          <div className="carousel-card" key={project.id || idx}>
            <div className="carousel-card-header">
              <span className="carousel-card-title">{project.name}</span>
            </div>
            <div className="carousel-card-desc">{project.description || 'No description provided.'}</div>
            <div className="carousel-card-meta">
              {project.language && <span className="carousel-card-tag">{project.language}</span>}
              <span className="carousel-card-links">
                {project.homepage && (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer" title="Live Demo" className="carousel-link">
                    <FaExternalLinkAlt />
                  </a>
                )}
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" title="View on GitHub" className="carousel-link">
                  <FaGithub />
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-arrow right" onClick={() => scroll(1)} aria-label="Scroll right">
        <FaChevronRight />
      </button>
    </div>
  );
};

ProjectsCarousel.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProjectsCarousel;
