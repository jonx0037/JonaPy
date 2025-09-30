import React from 'react';
import './ProjectCard.css';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'data-science' | 'automation' | 'machine-learning' | 'other';
  date: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return '🌐';
      case 'data-science': return '📊';
      case 'automation': return '🤖';
      case 'machine-learning': return '🧠';
      default: return '💻';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return '#3498db';
      case 'data-science': return '#e74c3c';
      case 'automation': return '#f39c12';
      case 'machine-learning': return '#9b59b6';
      default: return '#2ecc71';
    }
  };

  return (
    <div className="project-card">
      <div className="project-image">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} />
        ) : (
          <div className="project-placeholder">
            <span className="project-icon">{getCategoryIcon(project.category)}</span>
          </div>
        )}
        <div className="project-category" style={{ backgroundColor: getCategoryColor(project.category) }}>
          {project.category.replace('-', ' ')}
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-meta">
          <span className="project-date">{new Date(project.date).toLocaleDateString()}</span>
        </div>
        
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;