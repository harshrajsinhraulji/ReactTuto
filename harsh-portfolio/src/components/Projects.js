import React, { useState, useEffect } from 'react';
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

  if (repos.length === 0) {
    return (
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Latest from GitHub</h2>
        <p style={{ textAlign: 'center' }}>Loading repositories or none found...</p>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Latest from GitHub</h2>
      <div className="projects-grid">
        {repos.map(repo => (
          <div className="project-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p className="project-description">{repo.description || "No description provided."}</p>
            <p className="project-tech"><strong>Language:</strong> {repo.language || "N/A"}</p>
            <div className="project-links">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;