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

const { Header, Sider, Content } = Layout;

const navigate = useNavigate();
const handleHomeClick = () => {
    navigate("/pages/HomePage");
  }

const TravelsPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true); // Set collapsed to true by default
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <CompassOutlined />,
              label: "Travels",
            },
            {
              key: "3",
              icon: <MessageOutlined />,
              label: "Chat",
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
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default TravelsPage;
