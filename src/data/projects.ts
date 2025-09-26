import type { Project } from '../components/ProjectDisplay/ProjectCard';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Data Analysis Dashboard',
    description: 'A comprehensive web dashboard for analyzing and visualizing large datasets using Python, Pandas, and Plotly. Features interactive charts, data filtering, and export capabilities.',
    technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'NumPy'],
    category: 'data-science',
    date: '2024-12-15',
    githubUrl: 'https://github.com/example/data-dashboard',
  },
  {
    id: '2',
    title: 'Task Automation Suite',
    description: 'A collection of Python scripts that automate daily workflow tasks including file organization, email processing, and report generation.',
    technologies: ['Python', 'Schedule', 'Selenium', 'OpenPyXL', 'Requests'],
    category: 'automation',
    date: '2024-11-20',
    githubUrl: 'https://github.com/example/automation-suite',
  },
  {
    id: '3',
    title: 'Machine Learning Model Trainer',
    description: 'A flexible framework for training and evaluating machine learning models with automated hyperparameter tuning and performance tracking.',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'MLflow', 'Jupyter'],
    category: 'machine-learning',
    date: '2024-10-05',
    githubUrl: 'https://github.com/example/ml-trainer',
  },
  {
    id: '4',
    title: 'Flask Blog Application',
    description: 'A full-stack blog application built with Flask, featuring user authentication, post management, and comment system with a clean, responsive design.',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'Bootstrap', 'SQLite'],
    category: 'web',
    date: '2024-09-12',
    githubUrl: 'https://github.com/example/flask-blog',
    liveUrl: 'https://example-blog.herokuapp.com',
  },
  {
    id: '5',
    title: 'API Data Aggregator',
    description: 'A Python service that collects data from multiple APIs, processes and normalizes the information, then stores it in a database for analysis.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'web',
    date: '2024-08-28',
    githubUrl: 'https://github.com/example/api-aggregator',
  },
  {
    id: '6',
    title: 'Text Analysis Tool',
    description: 'Natural language processing tool for sentiment analysis, keyword extraction, and text summarization using advanced NLP libraries.',
    technologies: ['Python', 'NLTK', 'spaCy', 'TextBlob', 'Matplotlib'],
    category: 'data-science',
    date: '2024-07-14',
    githubUrl: 'https://github.com/example/text-analyzer',
  }
];