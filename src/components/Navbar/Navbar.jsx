import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link to="https://sidlabs.net" className="navbar-logo">
              Powered by SidLabs
            </Link>
          </div>
          
          <div className="navbar-links">
            <Link to="https://www.linkedin.com/in/withlovemissmp/" className="nav-link">About Dr. Manpreet</Link>
            <Link to="#" className="nav-link">About these Assessments</Link>
            <Link to="https://care.talktomissmp.com" className="nav-link">The CARE Platform</Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
          >
            <span className="sr-only">Open menu</span>
            <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
          <Link to="/about" className="mobile-nav-link">About Dr. Manpreet</Link>
          <Link to="/assessments" className="mobile-nav-link">About these Assessments</Link>
          <Link to="/care" className="mobile-nav-link">The CARE Platform</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;