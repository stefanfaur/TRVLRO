import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
        Cart
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;