import React from 'react';
import '../styles/RegisterPage.css';
import logo from '../assets/logo_text_transparent.png';

import googleIcon from '../assets/google.svg';
import facebookIcon from '../assets/facebook.svg';
import { Button } from 'antd';



const LoginPage: React.FC = () => {

    return (
        <div className="register-page">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <p className="text">Login and start your travels.</p>
            <div className="account-details">
                <input type="email" placeholder="Email" className="input"/>
                <input type="password" placeholder="Password" className="input" />
                <input type="confirm_password" placeholder="Confirm Password" className="input" />
            </div>
            <Button type="primary" className="register-button">Register</Button>
            <div className="quick">
                <p className="bottom_text">Or register with</p>
                <Button className="facebook-button" value="Face">
                    <img src={facebookIcon} alt="Facebook Icon" className="facebook-icon" />
                </Button>
                <Button className="google-button">
                    <img src={googleIcon} alt="Google Icon" className="google-icon" />
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;
