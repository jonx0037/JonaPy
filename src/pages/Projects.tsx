import React, { useState } from 'react';
import ProjectCard from '../components/ProjectDisplay/ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'automation', label: 'Automation' },
    { value: 'other', label: 'Other' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>Python Projects</h1>
        <p>A showcase of my Python development journey across various domains</p>
      </header>

      <div className="projects-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search projects, technologies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`filter-btn ${filter === category.value ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-stats">
        <div className="stat">
          <span className="stat-number">{filteredProjects.length}</span>
          <span className="stat-label">Projects Found</span>
        </div>
        <div className="stat">
          <span className="stat-number">{new Set(projects.flatMap(p => p.technologies)).size}</span>
          <span className="stat-label">Technologies Used</span>
        </div>
        <div className="stat">
          <span className="stat-number">{new Set(projects.map(p => p.category)).size}</span>
          <span className="stat-label">Categories</span>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="no-projects">
          <div className="no-projects-icon">🔍</div>
          <h3>No projects found</h3>
          <p>Try adjusting your search terms or filters</p>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;