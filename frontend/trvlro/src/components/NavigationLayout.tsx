import React from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CompassOutlined,
  MessageOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useSider } from '../context/SiderContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_text_transparent.png';

const { Header, Sider, Content } = Layout;

interface NavigationLayoutProps {
  children: React.ReactNode;
  defaultSelectedKeys: string[];
}

const NavigationLayout: React.FC<NavigationLayoutProps> = ({ children, defaultSelectedKeys }) => {
  const { collapsed, setCollapsed } = useSider();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Home',
      onClick: () => navigate('/pages/home'),
    },
    {
      key: '2',
      icon: <CompassOutlined />,
      label: 'Travels',
      onClick: () => navigate('/pages/travels'),
    },
    {
      key: '3',
      icon: <MessageOutlined />,
      label: 'Chat',
      onClick: () => navigate('/pages/chat'),
    },
  ];

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={defaultSelectedKeys} items={menuItems} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer, // Apply colorBgContainer here
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '16px', width: 64, height: 64 }}
          />
          <div className="logo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <img src={logo} alt="Logo" className="logo" style={{ height: '50px' }} />
          </div>
          <Button type="text" icon={<UserOutlined />} style={{ fontSize: '16px', width: 64, height: 64 }} />
        </Header>
        <Content style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default NavigationLayout;
