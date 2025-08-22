import React, { useState } from 'react';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Sign Up

  return (
    <div className="login-and-signup">
      <div className="login-popup">
        <div className="login-popup-content">
          {/* Header */}
          <div className="popup-header">
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <button className="close-btn" onClick={() => setShowLogin(false)}>✕</button>
          </div>

          {/* Form */}
          <form>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>

            <button type="submit" className="login-btn">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Switch between Login & Sign Up */}
          <p className="switch-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign Up here" : "Login here"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
