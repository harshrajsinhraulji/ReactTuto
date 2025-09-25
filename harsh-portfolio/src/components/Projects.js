import React, { useState, useEffect } from 'react';
import { FaGithub, FaFolder } from 'react-icons/fa'; // Import icons
import './Projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const GITHUB_USERNAME = "harshrajsinhraulji";

  useEffect(() => {
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
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Latest from GitHub</h2>
      <div className="projects-grid">
        {repos.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Loading repositories...</p>
        ) : (
          repos.map(repo => (
            <div className="project-card" key={repo.id}>
              <div className="project-card-header">
                <FaFolder className="project-icon" />
                <h3>{repo.name}</h3>
              </div>
              <p className="project-description">{repo.description || "No description provided."}</p>
              {/* This footer will stick to the bottom */}
              <div className="project-card-footer">
                <div className="project-tags">
                  {repo.language && <span className="tag">{repo.language}</span>}
                </div>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-github-link" 
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;