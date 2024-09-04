import React from 'react';
    import { Link } from 'react-router-dom';
import '../App.css'; 

function Login() {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="login-title">Login</h2>
                <form>
                    <label htmlFor="email" className="login-label">Email:</label>
                    <input type="email" id="email" name="email" className="login-input" />

                    <label htmlFor="password" className="login-label">Password:</label>
                    <input type="password" id="password" name="password" className="login-input" />
                    <Link to="/Signup" className="mr-5 hover:text-gray-900">
       Didnt have an account SignUp
          </Link>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;