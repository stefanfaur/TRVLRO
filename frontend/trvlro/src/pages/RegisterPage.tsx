import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <div className="logo">
                {/* Your logo component */}
            </div>
            <p className="text">Login and start your travels.</p>
            <div className="account-details">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>
            <button className="login-button">Login</button>
            <div className="quick-sign-in">
                <button className="google-button">
                    {/* Google icon */}
                </button>
                <button className="facebook-button">
                    {/* Facebook icon */}
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
