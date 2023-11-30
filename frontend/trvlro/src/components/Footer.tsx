import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const MyFooter: React.FC = () => {
    return (
        <Footer style={{ color: 'darkgrey', position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
            <p>Copyright 2023 Produced by Ratpak.</p>
        </Footer>
    );
};

export default MyFooter;
