import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("auth", "true");
    navigate("/"); 
  };
  return (
    <>
      <div className="login-container">
        {/* Right Section */}
        <div className="login-section">
          <h2>EXISTING MEMBER</h2>
          <p>Welcome Back!</p>
          <form onSubmit={handleLogin}> 
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Enter Email" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Enter Password" required />
            </div>
            <button className="btn-continue" type="submit">
              Continue <i className="fas fa-arrow-right"></i>
            </button>
          </form>
          <div className="divider">
            <span>OR</span>
          </div>
          <div className="social-icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-apple"></i>
          </div>
          <p className="register-text">
            Don't have an account? <Link to={"/register"}>Register Now</Link>
          </p>
        </div>
      </div>
    </>
  )
}
