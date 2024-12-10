import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
      localStorage.setItem("auth", "true"); 
      navigate("/"); // Redirect to home or a protected page
    };
  return (
    <>
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  )
}
