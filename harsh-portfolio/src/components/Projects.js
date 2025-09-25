
import React, { useState, useEffect } from 'react';
import { FaGithub, FaFolder, FaCodeBranch, FaStar } from 'react-icons/fa';
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
  <section id="projects" className="projects-section fade-in-section">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-scroll">
        {repos.length === 0 ? (
          <p style={{ textAlign: 'center', width: '100%' }}>Loading repositories...</p>
        ) : (
          repos.map(repo => (
            <div className="project-card-minimal hover-pop" key={repo.id}>
              <div className="project-card-minimal-header">
                <FaFolder className="project-icon-minimal" />
                <span className="project-title-minimal">{repo.name}</span>
              </div>
              <div className="project-desc-minimal">{repo.description || "No description provided."}</div>
              <div className="project-meta-minimal">
                {repo.language && <span className="project-tag-minimal">{repo.language}</span>}
                <span className="project-meta-icons">
                  <FaStar title="Stars" /> {repo.stargazers_count} &nbsp;
                  <FaCodeBranch title="Forks" /> {repo.forks_count}
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
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;