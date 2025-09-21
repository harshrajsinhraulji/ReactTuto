import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  // State to store the list of repositories
  const [repos, setRepos] = useState([]);
  // Your specific GitHub username
  const GITHUB_USERNAME = "harshrajsinhraulji";

  // useEffect hook to fetch data when the component loads
  useEffect(() => {
    // Fetch data from the GitHub API
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`)
      .then(response => response.json()) // Convert the response to JSON
      .then(data => {
        // Get the latest 6 repos
        setRepos(data.slice(0, 6)); 
      })
      .catch(error => console.error("Error fetching GitHub repos:", error)); // Handle any errors
  }, []); // The empty array [] means this effect runs only once

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Latest from GitHub</h2>
      <div className="projects-grid">
        {repos.map(repo => (
          <div className="project-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p className="project-description">{repo.description || "No description provided."}</p>
            <p className="project-tech"><strong>Language:</strong> {repo.language}</p>
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