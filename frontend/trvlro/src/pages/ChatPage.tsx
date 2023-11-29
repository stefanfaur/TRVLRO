import React from 'react';
import NavigationLayout from '../components/NavigationLayout'; 

const ChatPage: React.FC = () => {
  return (
    <NavigationLayout defaultSelectedKeys={['3']}>
      <div>CHAT PAGE</div>
    </NavigationLayout>
  );
};

export default ChatPage;
