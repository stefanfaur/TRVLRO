import { Suspense, lazy } from 'react';
import LoadingScreen from './components/LoadingScreen';
import type { RouteObject } from 'react-router';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  AUTHENTICATION PAGES
const Login = Loadable(
    lazy(() => import('./pages/LoginPage')));
const Register = Loadable(
    lazy(() => import('./pages/RegisterPage'))
);

//  * HOME PAGE
const Home = Loadable(lazy(() => import('./pages/LandingPage')));

const routes: RouteObject[] = [
    {
      path: 'authentication',
      children: [
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
      ],
    },
  
    {
        path: '*',
        index: true,
        element: <Home />,
        
    },
  ];
  
  export default routes;