import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to JonaPy</h1>
          <p className="hero-subtitle">
            Exploring the world of Python through innovative projects and creative solutions
          </p>
          <p className="hero-description">
            This is my personal portfolio showcasing Python projects from both academic pursuits 
            and professional work. Here you'll find a collection of my coding journey, from 
            data analysis and machine learning to web development and automation scripts.
          </p>
          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">View Projects</a>
            <a href="/about" className="btn btn-secondary">About Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="python-logo">
            <div className="python-icon">🐍</div>
            <div className="code-snippet">
              <pre>{`def hello_world():
    print("Welcome to JonaPy!")
    return "Let's code together"`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>What You'll Find Here</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Data Science Projects</h3>
            <p>Machine learning models, data analysis, and visualization projects</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Web Applications</h3>
            <p>Full-stack web applications built with Python frameworks</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Automation Scripts</h3>
            <p>Task automation and productivity enhancement tools</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Learning Journey</h3>
            <p>Blog posts about my experiences and lessons learned</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;