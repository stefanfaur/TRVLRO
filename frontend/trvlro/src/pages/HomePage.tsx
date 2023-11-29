import React, { useEffect, useLayoutEffect } from "react";
import { Button } from "antd";
import styles from "../styles/HomePage.module.css";
import logo from "../assets/logo_comp_transparent.png";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/authentication/register");
  };

  useLayoutEffect(() => {
    document.body.style.background = "linear-gradient(to bottom, #346D6D, #609575)";
  }, []);
    
    return (
    <div className={styles.homepage}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>
        Discover the new way <br></br>of travelling.
      </h1>
      <p className={styles.subtitle}>Start today, with us!</p>
      <div className={styles.buttons}>
        <Button
          type="primary"
          className={styles["register-button"]}
          onClick={handleRegisterClick}
        >
          Register Now
        </Button>
        <div className={styles["button-separator"]}></div>
        <p className={styles["login-text"]}>
          Already an user? <a href="/authentication/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
