import React from "react";
import "./Footer.css";
import logo from '../../assets/assets/logo HireXel.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* First section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            FSDJOB helps people find jobs faster and smarter. 
            Connecting talent with opportunities worldwide.
          </p>
          <div className="logo-section">
            <img src={logo} alt="" />
          </div>
        </div>

        {/* Second section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Services</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/about">Freelancers</a></li>
            <li><a href="/contact">Projects</a></li>
          </ul>
        </div>

        {/* Third section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FSDJOB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
