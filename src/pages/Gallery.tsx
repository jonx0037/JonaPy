import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  // Placeholder gallery items
  const galleryItems = [
    {
      id: 1,
      title: 'Data Visualization Dashboard',
      description: 'Interactive charts and graphs from my data analysis projects',
      type: 'screenshot',
      category: 'data-science'
    },
    {
      id: 2,
      title: 'Web Application Interface',
      description: 'Clean and responsive UI design for Flask applications',
      type: 'screenshot', 
      category: 'web'
    },
    {
      id: 3,
      title: 'Code Architecture Diagram',
      description: 'System design and architecture for automation projects',
      type: 'diagram',
      category: 'automation'
    },
    {
      id: 4,
      title: 'Machine Learning Results',
      description: 'Model performance visualizations and accuracy metrics',
      type: 'chart',
      category: 'machine-learning'
    },
    {
      id: 5,
      title: 'Database Schema Design',
      description: 'Entity relationship diagrams for project databases',
      type: 'diagram',
      category: 'web'
    },
    {
      id: 6,
      title: 'Project Demo Screenshots',
      description: 'Visual showcase of completed Python applications',
      type: 'screenshot',
      category: 'web'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'screenshot': return '📱';
      case 'diagram': return '📊';
      case 'chart': return '📈';
      default: return '🖼️';
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
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Project Gallery</h1>
        <p>Visual showcase of my Python development work and project outcomes</p>
      </header>

      <div className="gallery-grid">
        {galleryItems.map(item => (
          <div key={item.id} className="gallery-item">
            <div className="gallery-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">{getTypeIcon(item.type)}</span>
                <div 
                  className="category-badge" 
                  style={{ backgroundColor: getCategoryColor(item.category) }}
                >
                  {item.category.replace('-', ' ')}
                </div>
              </div>
            </div>
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="coming-soon">
        <h2>🚧 Coming Soon</h2>
        <p>
          This gallery will be populated with screenshots, diagrams, and visualizations 
          from my Python projects as they are completed. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default Gallery;