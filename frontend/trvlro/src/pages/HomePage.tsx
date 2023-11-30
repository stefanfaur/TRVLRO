import React from 'react';
import NavigationLayout from '../components/NavigationLayout'; 
import Questionnaire from '../components/Questionnaire';

const ChatPage: React.FC = () => {
  return (
    <NavigationLayout defaultSelectedKeys={['1']}>
      <div>
        <Questionnaire />
      </div>
    </NavigationLayout>
  );
};

export default ChatPage;
