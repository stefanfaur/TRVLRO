import React, { useEffect, useLayoutEffect } from 'react';
import NavigationLayout from '../components/NavigationLayout'; 
import Questionnaire from '../components/Questionnaire';
import { useNavigate } from 'react-router-dom';



const HomePage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    //navigate(0); // Call navigate(0) before loading the page
    console.log("HomePage: useEffect");
  }, []);

  useLayoutEffect(() => {
    document.body.style.display = 'block';
}, []);

  return (
    <NavigationLayout defaultSelectedKeys={['1']}>
      <div>
        <Questionnaire />
      </div>
    </NavigationLayout>
  );
};

export default HomePage;
