import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import './Header.css';

const Header = ({ title }) => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            AdventureQuest
          </Link>
          {title && <h2 className="page-title">{title}</h2>}
        </div>
        
        <nav className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link to="/select-story">
            <Button variant="outline">Play Game</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;