import React from 'react';
import './Blog.css';

const Blog: React.FC = () => {
  // Placeholder blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Python Data Analysis',
      excerpt: 'Learn the fundamentals of data analysis using Pandas and NumPy libraries.',
      date: '2024-12-01',
      readTime: '5 min read',
      category: 'Data Science'
    },
    {
      id: 2,
      title: 'Building RESTful APIs with FastAPI',
      excerpt: 'A comprehensive guide to creating efficient and scalable APIs using FastAPI.',
      date: '2024-11-15',
      readTime: '8 min read',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'Automating Daily Tasks with Python Scripts',
      excerpt: 'Discover how to save time by automating repetitive tasks with simple Python scripts.',
      date: '2024-11-02',
      readTime: '6 min read',
      category: 'Automation'
    },
    {
      id: 4,
      title: 'Machine Learning Model Deployment Strategies',
      excerpt: 'Best practices for deploying machine learning models to production environments.',
      date: '2024-10-20',
      readTime: '10 min read',
      category: 'Machine Learning'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase().replace(' ', '-')) {
      case 'web-development': return '#3498db';
      case 'data-science': return '#e74c3c';
      case 'automation': return '#f39c12';
      case 'machine-learning': return '#9b59b6';
      default: return '#2ecc71';
    }
  };

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Development Blog</h1>
        <p>Sharing insights, tutorials, and lessons learned from my Python development journey</p>
      </header>

      <div className="blog-posts">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-post">
            <div className="post-meta">
              <span 
                className="post-category"
                style={{ backgroundColor: getCategoryColor(post.category) }}
              >
                {post.category}
              </span>
              <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-actions">
              <button className="read-more-btn">Read More</button>
            </div>
          </article>
        ))}
      </div>

      <div className="coming-soon">
        <h2>📝 Blog Coming Soon</h2>
        <p>
          I'm preparing detailed articles about my Python development experiences, 
          tutorials on various technologies, and insights from my projects. 
          Subscribe to stay updated when new posts are published!
        </p>
        <div className="newsletter-signup">
          <input 
            type="email" 
            placeholder="Enter your email for updates" 
            className="email-input"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;