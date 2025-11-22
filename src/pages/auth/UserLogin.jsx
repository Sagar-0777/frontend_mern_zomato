import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { API_ENDPOINTS } from '../../config/api';

const UserLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(API_ENDPOINTS.USER_LOGIN, {
        email,
        password
      }, { withCredentials: true });

      console.log(response.data);
      navigate("/home"); // Redirect to home feed after login
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Invalid email or password');
      }
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="user-login-title">
        <header>
          <h1 id="user-login-title" className="auth-title">👋 Welcome back</h1>
          <p className="auth-subtitle">Sign in to continue your food journey.</p>
        </header>

        {error && (
          <div className="error-message" role="alert">
            ❌ {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>
          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? '⏳ Signing in...' : '🚀 Sign In'}
          </button>
        </form>

        <div className="auth-alt-action">
          New here? <Link to="/user/register">Create account</Link>
        </div>

        <div className="auth-alt-action" style={{ marginTop: '8px', fontSize: '0.8rem' }}>
          <Link to="/">← Back to login options</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
