import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo-section">
        <h1>
          hire<span className="logo-span">X</span>el
        </h1>
      </div>

      {/* Navigation Links */}
      <div className={`freelancer-work-section ${isOpen ? 'active' : ''}`}>
        <a href="#services">Services</a>
        <a href="#freelancers">Freelancers</a>
        <a href="#projects">Projects</a>
      </div>

      {/* Auth Buttons */}
      <div className="auth-section">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>

      {/* Hamburger Menu */}
      <div
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </div>
  );
};

export default Navbar;
