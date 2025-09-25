
import React, { useState, useEffect } from 'react';
import { FaGithub, FaFolder, FaCodeBranch, FaStar } from 'react-icons/fa';
import ProjectsCarousel from './ProjectsCarousel';
import projectHighlights from '../data/projectHighlights';
import './Projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const GITHUB_USERNAME = "harshrajsinhraulji";

  useEffect(() => {
    let intervalId;
    const fetchRepos = () => {
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setRepos(data.slice(0, 6));
        })
        .catch(error => console.error("Error fetching GitHub repos:", error));
    };
    fetchRepos();
    intervalId = setInterval(fetchRepos, 60000); // Poll every 60 seconds
    return () => clearInterval(intervalId);
  }, []);

  const featured = projectHighlights.length > 0 ? projectHighlights : repos.slice(0, 6);
  return (
    <section id="projects" className="projects-section fade-in-section">
      <h2 className="projects-title">Featured Projects</h2>
      {featured.length > 0 ? (
        <ProjectsCarousel projects={featured} />
      ) : (
        <p style={{ textAlign: 'center', width: '100%' }}>Loading repositories...</p>
      )}
      {/* Fallback grid for non-carousel view or if JS fails */}
      <div className="projects-scroll" style={{marginTop: '2.5rem'}}>
        {featured.length > 0 && featured.map(repo => (
          <div className="project-card-minimal hover-pop" key={repo.id || repo.name}>
            <div className="project-card-minimal-header">
              <FaFolder className="project-icon-minimal" />
              <span className="project-title-minimal">{repo.name}</span>
            </div>
            <div className="project-desc-minimal">{repo.description || "No description provided."}</div>
            <div className="project-meta-minimal">
              {repo.language && <span className="project-tag-minimal">{repo.language}</span>}
              <span className="project-meta-icons">
                {repo.stargazers_count !== undefined && <><FaStar title="Stars" /> {repo.stargazers_count} &nbsp;</>}
                {repo.forks_count !== undefined && <><FaCodeBranch title="Forks" /> {repo.forks_count}</>}
              </span>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-github-link-minimal" 
                aria-label={`View ${repo.name} on GitHub`}
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;