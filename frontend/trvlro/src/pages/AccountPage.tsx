import React, { useContext } from "react";
import NavigationLayout from "../components/NavigationLayout";
import { BugOutlined } from "@ant-design/icons";
import styles from "../styles/AccountPage.module.css";
import { AuthContext } from '../context/AuthContext'

const AccountPage: React.FC = () => {
  const { currentUser, signOut } = useContext(AuthContext)
  return (
    <NavigationLayout defaultSelectedKeys={["0"]}>
      <div className={styles["center-container"]}>
        <div className={styles["account-container"]}>
          <div className={styles["user-info"]}>
            <BugOutlined className={styles["user-icon"]} />
            <div className={styles["user-email"]}>{currentUser?.email}</div>
            <div className={styles["travels-count"]}>10 Travels</div>
            <button className={styles.button} onClick={signOut}> Sign out!</button>
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
};

export default AccountPage;
