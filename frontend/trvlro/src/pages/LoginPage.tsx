import React, { ChangeEvent, FormEvent, useLayoutEffect, useState } from 'react';
import styles from '../styles/LoginPage.module.css';
import logo from '../assets/logo_text_transparent.png';

import googleIcon from '../assets/google.svg';
import facebookIcon from '../assets/facebook.svg';
import { Button } from 'antd';
import { signInUser, signInUserWithGoogle } from '../firebase'
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
    email: '',
    password: '',
}

const LoginPage: React.FC = () => {
    useLayoutEffect(() => {
        document.body.style.background = "linear-gradient(to bottom, #5fe3e3, #a6a6a6)";
    }, []);

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const navigate = useNavigate();

    const resetFormFields = () => {
        return (
            setFormFields(defaultFormFields)
        );
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // navigate('/pages/home')
        // navigate(0)

        try {
            // Send the email and password to firebase
            const userCredential = await signInUser(email, password)
            console.log(userCredential)

            if (userCredential) {
                resetFormFields()
                navigate('/pages/home')
                navigate(0)
            }
        } catch (error: any) {
            console.log('User Sign In Failed', error.message);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const logInWithGoogle = async () => {
        console.log("log in with google...")
    };

    return (
        <div className={styles['login-page']}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <p className={styles.text}>Login and start your travels.</p>
            <form onSubmit={handleSubmit}>
                <div className={styles['account-details']}>
                    <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" className={styles.input} />
                    <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" className={styles.input} />
                </div>
                <Button type="primary" className={styles['login-button']} htmlType="submit">Login</Button>
            </form>
            <div className={styles.quick}>
                <p className={styles.bottom_text}>Or login with</p>
                <Button className={styles['facebook-button']} value="Face">
                    <img src={facebookIcon} alt="Facebook Icon" className={styles['facebook-icon']} />
                </Button>
                <Button onClick={logInWithGoogle} className={styles['google-button']}>
                    <img src={googleIcon} alt="Google Icon" className={styles['google-icon']} />
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;
