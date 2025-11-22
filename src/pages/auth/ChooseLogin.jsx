import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth-shared.css';
import axios from 'axios';

const ChooseLogin = () => {
    return (
        <div className="auth-page-wrapper">
            <div className="auth-card" role="region" aria-labelledby="choose-login-title">
                <header>
                    <h1 id="choose-login-title" className="auth-title">🍽️ Welcome to Zomato</h1>
                    <p className="auth-subtitle">Sign in to discover amazing food or manage your restaurant.</p>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Link
                        to="/user/login"
                        className="auth-submit"
                        style={{ textDecoration: 'none' }}
                    >
                        <span>👤</span>
                        <span>Login as User</span>
                    </Link>

                    <Link
                        to="/food-partner/login"
                        className="auth-submit auth-submit-secondary"
                        style={{ textDecoration: 'none' }}
                    >
                        <span>🍳</span>
                        <span>Login as Food Partner</span>
                    </Link>
                </div>

                <div className="auth-alt-action" style={{ marginTop: '8px' }}>
                    New here? <Link to="/register">Create an account</Link>
                </div>
            </div>
        </div>
    );
};

export default ChooseLogin;
