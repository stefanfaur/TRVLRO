import React from "react";
import NavigationLayout from "../components/NavigationLayout";
import { BugOutlined } from "@ant-design/icons";
import styles from "../styles/AccountPage.module.css";

const AccountPage: React.FC = () => {
  return (
    <NavigationLayout defaultSelectedKeys={["0"]}>
      <div className={styles["center-container"]}>
        <div className={styles["account-container"]}>
          <div className={styles["user-info"]}>
            <BugOutlined className={styles["user-icon"]} />
            <div className={styles["user-email"]}>stefan@faur.sh</div>
            <div className={styles["travels-count"]}>10 Travels</div>
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
};

export default AccountPage;
