import React from 'react';
import NavigationLayout from '../components/NavigationLayout'; 
import Chat from '../components/Chat';

const ChatPage: React.FC = () => {
  return (
    <NavigationLayout defaultSelectedKeys={['3']}>
      <div>
        <Chat />
      </div>
    </NavigationLayout>
  );
};

export default ChatPage;
