import React from 'react';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound-container">
    <h1 className="notfound-title">404</h1>
    <p className="notfound-message">Oops! The page you’re looking for doesn’t exist.</p>
    <a href="/" className="notfound-home">Go Home</a>
  </div>
);

export default NotFound;
