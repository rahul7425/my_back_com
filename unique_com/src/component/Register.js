import React from 'react'
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("auth", "true");
        navigate("/"); // Redirect to home or a protected page
    };
    return (
        <div className="login-container">
            {/* Right Section */}
            <div className="login-section">
                <h2>Create an Account</h2>
                <p>Welcome You!</p>
                <form onSubmit={handleLogin}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <label for="number" class="form-label">Mobile Number</label>

                    <div class="input-group mb-3">
                        <button class="btn btn-outline bg-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">IN 91+</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">UK</a></li>
                            <li><a class="dropdown-item" href="#">USA</a></li>
                            <li><a class="dropdown-item" href="#">Iran</a></li>
                            <li><a class="dropdown-item" href="#">Hong Kong</a></li>
                        </ul>
                        <input type="number" class="form-control" aria-label="Mobile number" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="name@example.com" />
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
                    Already have an account? <Link to={"/login"}>Login</Link>
                </p>
            </div>
        </div>
    )
}
