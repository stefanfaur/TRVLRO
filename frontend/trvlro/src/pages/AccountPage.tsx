import React, { useContext, useEffect, useState } from "react";
import NavigationLayout from "../components/NavigationLayout";
import { BugOutlined } from "@ant-design/icons";
import styles from "../styles/AccountPage.module.css";
import { AuthContext } from '../context/AuthContext'
import { getUserIsAdmin, getUserThreadId } from "../utils/API";

const AccountPage: React.FC = () => {
  const { currentUser, signOut } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [threadId, setThreadId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try { //currentUser?.uid ?? ""
        const user = currentUser?.uid ?? "";
        //const user = "uuid01"
        console.log("user", user);
        const adminResponse = await getUserIsAdmin(user);
        const adminStatus = adminResponse;
        setIsAdmin(adminStatus);

        const threadResponse = await getUserThreadId(user);
        const threadId = threadResponse;
        setThreadId(threadId);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [currentUser]);

  return (
    <NavigationLayout defaultSelectedKeys={["0"]}>
      <div className={styles["center-container"]}>
        <div className={styles["account-container"]}>
          <div className={styles["user-info"]}>
            <BugOutlined className={styles["user-icon"]} />
            <div className={styles["user-email"]}>{currentUser?.email}</div>
            <div className={styles["travels-count"]}>10 Travels</div>
            <div style={{ padding: "5px" }}>
              Admin: {isAdmin ? "Yes" : "No"}
            </div>
            <div>Thread ID: {threadId}</div>
            <button className={styles.button} onClick={signOut}>
              Sign out!
            </button>
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
};

export default AccountPage;
