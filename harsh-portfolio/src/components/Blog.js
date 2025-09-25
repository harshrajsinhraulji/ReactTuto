import React from 'react';
import './Blog.css';

const posts = [
  {
    title: 'How I Built This Portfolio',
    date: '2025-09-26',
    summary: 'A behind-the-scenes look at the design, tech stack, and lessons learned building my personal site.',
    url: '#',
  },
  {
    title: 'Java vs. JavaScript: Myths & Realities',
    date: '2025-09-20',
    summary: 'A fun, honest take on the differences, similarities, and why both matter in my journey.',
    url: '#',
  },
  {
    title: 'My Favorite React UI Tricks',
    date: '2025-09-10',
    summary: 'A quick rundown of the little UI/UX details that make a big difference.',
    url: '#',
  },
];

const Blog = () => (
  <section id="blog" className="blog-section fade-in-section">
    <h2 className="section-title">Blog & Articles</h2>
    <div className="blog-list">
      {posts.map((post, i) => (
        <article className="blog-card hover-pop" key={i}>
          <h3 className="blog-title">{post.title}</h3>
          <div className="blog-date">{new Date(post.date).toLocaleDateString()}</div>
          <p className="blog-summary">{post.summary}</p>
          <a href={post.url} className="blog-readmore" aria-label={`Read more: ${post.title}`}>Read More</a>
        </article>
      ))}
    </div>
  </section>
);

export default Blog;
