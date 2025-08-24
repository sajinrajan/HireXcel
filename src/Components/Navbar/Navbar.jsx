import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/assets/logo HireXel.png'

const Navbar = ({setShowLogin}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo-section">
        <img src={logo} alt="logo" />
      </div>

      {/* Navigation Links */}
      <div className={`freelancer-work-section ${isOpen ? 'active' : ''}`}>
        <a href="#services">Services</a>
        <a href="#freelancers">Freelancers</a>
        <a href="#projects">Projects</a>
      </div>

      {/* Auth Buttons */}
      <div className="auth-section">
        <button onClick={()=>setShowLogin(true)} className="login-btn">Login</button>
        {/* <button className="signup-btn">Sign Up</button> */}
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
