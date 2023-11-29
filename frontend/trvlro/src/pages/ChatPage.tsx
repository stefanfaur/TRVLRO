import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  CompassOutlined,
  MessageOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, ConfigProvider } from "antd";
import logo from "../assets/logo_text_transparent.png";
import { useNavigate } from "react-router-dom";
import { useSider } from "../context/SiderContext";

const { Header, Sider, Content } = Layout;


const ChatPage: React.FC = () => {
    const {collapsed, setCollapsed} = useSider(); // Set collapsed to true by default
  const {
    token: { colorBgContainer },
  } = theme.useToken();
    
  const navigate = useNavigate();
  const handleHomeClick = () => {
      navigate("/pages/home");
  }
  const handleTravelsClick = () => {
      navigate("/pages/travels");
  }
    
  const handleChatClick = () => {
      navigate("/pages/chat");
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["3"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
                  label: "Home",
              onClick: () => {
                handleHomeClick();
              }
            },
            {
              key: "2",
              icon: <CompassOutlined />,
                label: "Travels",
              onClick: () => {
                handleTravelsClick();
              }
            },
            {
              key: "3",
              icon: <MessageOutlined />,
                label: "Chat",
              onClick: () => {
                handleChatClick();
              }
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between", // Add this line
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div
            className="logo-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ height: "50px" }}
            />
          </div>
          <Button
            type="text"
            icon={<UserOutlined />}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          CHAT PAGE
        </Content>
      </Layout>
    </Layout>
  );
};

export default ChatPage;
