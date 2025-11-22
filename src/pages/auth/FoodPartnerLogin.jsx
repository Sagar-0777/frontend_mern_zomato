import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { API_ENDPOINTS } from '../../config/api';

const FoodPartnerLogin = () => {
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
      const response = await axios.post(API_ENDPOINTS.PARTNER_LOGIN, {
        email,
        password
      }, { withCredentials: true });

      console.log(response.data);
      navigate("/create-food"); // Redirect to create food page after login
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
      <div className="auth-card" role="region" aria-labelledby="partner-login-title">
        <header>
          <h1 id="partner-login-title" className="auth-title">🍳 Partner Login</h1>
          <p className="auth-subtitle">Access your dashboard and manage your restaurant.</p>
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
              placeholder="business@example.com"
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
              placeholder="Password"
              autoComplete="current-password"
              required
            />
          </div>
          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? '⏳ Signing in...' : '🚀 Sign In'}
          </button>
        </form>

        <div className="auth-alt-action">
          New partner? <Link to="/food-partner/register">Create an account</Link>
        </div>

        <div className="auth-alt-action" style={{ marginTop: '8px', fontSize: '0.8rem' }}>
          <Link to="/">← Back to login options</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
