import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="login-form-container">
      <h2 className="login-title">Welcome back</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="form-input"
            />
          </label>
        </div>
        <p className="forgot-password">
          <a href="#">Forgot password?</a>
        </p>
        <button type="submit" className="login-button">
          Log in
        </button>
        <p className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;