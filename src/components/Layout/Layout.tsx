import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Jonathan Rocha. All rights reserved.</p>
          <p>Built with React & TypeScript for showcasing Python projects</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;