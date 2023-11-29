import React from 'react';
import { Button } from 'antd';
import '../styles/HomePage.css';
import logo from '../assets/logo_comp_transparent.png';

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="title">Discover the new way <br></br>of travelling.</h1>
            <p className="subtitle">Start today, with us!</p>
            <div className="buttons">
                <Button type="primary" className="register-button">Register Now</Button>
                <div className="button-separator"></div>
                <p className="login-text">Already an user? <a href="/authentication/login">Log in</a></p>
            </div>
        </div>
    );
};

export default HomePage;
