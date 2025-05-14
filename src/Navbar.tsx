import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="memora-navbar">
      <div className="enhanced-navbar">
        <div className="navbar-left">
          <span className="memora-logo-icon">▲</span>
          <span className="navbar-divider">/</span>
          <span className="memora-logo-text">MEmoraNet</span>
        </div>
        <ul className={`memora-nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#docs">Docs</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#Developer">Developer</a></li>
          <li><a href="#contactus">Contact us</a></li>
          {menuOpen && (
            <div className="memora-nav-actions">
              {/* <div className="search-container">
                <input type="text" className="search-input" placeholder="Search documentation..." />
                <span className="search-shortcut">Ctrl K</span>
              </div> */}
              <button className="nav-deploy">
                <span className="deploy-icon">▲</span>
                get Started
              </button>
              <button className="nav-learn">Learn</button>
            </div>
          )}
        </ul>
        <div className="memora-nav-actions">
          {/* <div className="search-container">
            <input type="text" className="search-input" placeholder="Search documentation..." />
            <span className="search-shortcut">Ctrl K</span>
          </div> */}
          <button className="nav-deploy">
            <span className="deploy-icon">▲</span>
            <span className="deploy-text">Get Started</span>
          </button>
          <button className="nav-learn">Learn</button>
        </div>
        <button 
          className="navbar-hamburger" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;