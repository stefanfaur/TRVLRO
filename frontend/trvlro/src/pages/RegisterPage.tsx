import React, { ChangeEvent, FormEvent, useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../styles/RegisterPage.module.css';
import logo from '../assets/logo_text_transparent.png';

import googleIcon from '../assets/google.svg';
import facebookIcon from '../assets/facebook.svg';
import { Button } from 'antd';
import { signUpUser, signInUserWithGoogle } from '../firebase'

const defaultFormFields = {
    email: '',
    password: '',
    confirmPassword: '',
}

const RegisterPage: React.FC = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password, confirmPassword } = formFields
    const navigate = useNavigate();

    useLayoutEffect(() => {
        document.body.style.background = "linear-gradient(to bottom, #5fe3e3, #a6a6a6)";
    }, []);

    const resetFormFields = () => {
        return (
            setFormFields(defaultFormFields)
        );
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (password === confirmPassword) {
            try {
                // Send the email and password to firebase
                const userCredential = await signUpUser(email, password)

                if (userCredential) {
                    resetFormFields()
                    navigate('/pages/home')
                }
            } catch (error: any) {
                console.log('User Sign Up Failed', error.message);
            }
        }
        else{
            resetFormFields()
            console.log('Passwords does not match!');
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const signUpWithGoogle = async () => {

    };

    return (
        <div className={styles['register-page']}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <p className={styles.text}>Login and start your travels.</p>
            <form onSubmit={handleSubmit}>
                <div className={styles['account-details']}>
                    <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" className={styles.input} />
                    <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" className={styles.input} />
                    <input type="confirm_password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm Password" className={styles.input} />
                </div>
                <Button type="primary" className={styles['register-button']} htmlType="submit">Register</Button>
            </form>
            <div className={styles.quick}>
                <p className={styles['bottom-text']}>Or register with</p>
                <Button className={styles['facebook-button']} value="Face">
                    <img src={facebookIcon} alt="Facebook Icon" className={styles['facebook-icon']} />
                </Button>
                <Button onClick={signUpWithGoogle} className={styles['google-button']}>
                    <img src={googleIcon} alt="Google Icon" className={styles['google-icon']} />
                </Button>
            </div>
        </div>
    );
}

export default RegisterPage;
