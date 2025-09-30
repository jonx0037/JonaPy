import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-content">
          <h1>About Jonathan</h1>
          <p className="about-intro">
            Welcome! I'm Jonathan, a passionate Python developer exploring the endless possibilities 
            of programming through both academic learning and professional projects.
          </p>
        </div>
        <div className="about-avatar">
          <div className="avatar-placeholder">
            <span className="avatar-icon">👨‍💻</span>
          </div>
        </div>
      </div>

      <div className="about-sections">
        <section className="about-section">
          <h2>My Journey</h2>
          <p>
            My programming journey began with curiosity and has evolved into a passion for creating 
            meaningful solutions. From data analysis to web development, I enjoy tackling challenges 
            that push me to learn and grow as a developer.
          </p>
        </section>

        <section className="about-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Core Python</h3>
              <div className="skills-list">
                <span>Object-Oriented Programming</span>
                <span>Data Structures & Algorithms</span>
                <span>Testing & Debugging</span>
                <span>Code Optimization</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Data Science</h3>
              <div className="skills-list">
                <span>Pandas & NumPy</span>
                <span>Matplotlib & Seaborn</span>
                <span>Jupyter Notebooks</span>
                <span>Statistical Analysis</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skills-list">
                <span>Flask & Django</span>
                <span>FastAPI</span>
                <span>RESTful APIs</span>
                <span>Database Integration</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Environment</h3>
              <div className="skills-list">
                <span>Git & GitHub</span>
                <span>Docker</span>
                <span>VS Code</span>
                <span>Linux/Unix</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>What I'm Learning</h2>
          <p>
            I'm constantly expanding my knowledge in areas like machine learning, cloud computing, 
            and advanced Python frameworks. Currently focusing on MLOps practices and exploring 
            the intersection of AI and web development.
          </p>
        </section>

        <section className="about-section">
          <h2>Get In Touch</h2>
          <p>
            I'm always excited to connect with fellow developers and discuss Python projects, 
            share knowledge, or explore collaboration opportunities.
          </p>
          <div className="contact-links">
            <a href="mailto:contact@jonapy.com" className="contact-link">
              📧 Email
            </a>
            <a href="https://github.com/jonx0037" className="contact-link">
              🐙 GitHub
            </a>
            <a href="https://linkedin.com/in/jonathan" className="contact-link">
              💼 LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;