import React from "react";
import { Layout, Menu, Button, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CompassOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useSider } from "../context/SiderContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_text_transparent.png";
import styles from "../styles/NavigationLayout.module.css"; // Import CSS module

const { Header, Sider, Content, Footer } = Layout;
interface NavigationLayoutProps {
  children: React.ReactNode;
  defaultSelectedKeys: string[];
}

const NavigationLayout: React.FC<NavigationLayoutProps> = ({
  children,
  defaultSelectedKeys,
}) => {
  const { collapsed, setCollapsed } = useSider();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
      onClick: () => navigate("/pages/home"),
    },
    {
      key: "2",
      icon: <CompassOutlined />,
      label: "Travels",
      onClick: () => navigate("/pages/travels"),
    },
    {
      key: "3",
      icon: <MessageOutlined />,
      label: "Chat",
      onClick: () => navigate("/pages/chat"),
    },
  ];

  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          className={styles.header}
          style={{ background: colorBgContainer }}
        >
          <Button
            className={styles.button}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div
            className={styles.logoContainer}
          >
            <img
              className={styles.logo}
              src={logo}
              alt="Logo"
              onClick={() => navigate("/pages/home")}
            />
          </div>
          <Button
            className={styles.button}
            type="text"
            onClick={() => navigate("/pages/account")}
            icon={<UserOutlined />}
          />
        </Header>
        <Content
          className={styles.content}
          style={{ background: colorBgContainer }}
        >
          {children}
        </Content>
        <Footer
          className={styles.footer}
        >
          <p>Copyright 2023 Produced by Ratpak.</p>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default NavigationLayout;
