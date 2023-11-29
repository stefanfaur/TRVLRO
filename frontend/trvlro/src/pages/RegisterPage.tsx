import React, { useLayoutEffect } from 'react';
import styles from '../styles/RegisterPage.module.css';
import logo from '../assets/logo_text_transparent.png';

import googleIcon from '../assets/google.svg';
import facebookIcon from '../assets/facebook.svg';
import { Button } from 'antd';

const RegisterPage: React.FC = () => {
    useLayoutEffect(() => {
        document.body.style.background = "linear-gradient(to bottom, #5fe3e3, #a6a6a6)";
    }, []);

    return (
        <div className={styles['register-page']}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <p className={styles.text}>Login and start your travels.</p>
            <div className={styles['account-details']}>
                <input type="email" placeholder="Email" className={styles.input} />
                <input type="password" placeholder="Password" className={styles.input} />
                <input type="confirm_password" placeholder="Confirm Password" className={styles.input} />
            </div>
            <Button type="primary" className={styles['register-button']}>Register</Button>
            <div className={styles.quick}>
                <p className={styles['bottom-text']}>Or register with</p>
                <Button className={styles['facebook-button']} value="Face">
                    <img src={facebookIcon} alt="Facebook Icon" className={styles['facebook-icon']} />
                </Button>
                <Button className={styles['google-button']}>
                    <img src={googleIcon} alt="Google Icon" className={styles['google-icon']} />
                </Button>
            </div>
        </div>
    );
}

export default RegisterPage;
