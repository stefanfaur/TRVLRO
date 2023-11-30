import React from 'react';
import NavigationLayout from '../components/NavigationLayout'; 

const ChatPage: React.FC = () => {
  return (
    <NavigationLayout defaultSelectedKeys={['1']}>
      <div>HOME PAGE</div>
    </NavigationLayout>
  );
};

export default ChatPage;
