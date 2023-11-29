import { Suspense, lazy } from "react";
import LoadingScreen from "./components/LoadingScreen";
import type { RouteObject } from "react-router";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(() => import("./pages/LoginPage")));

const Register = Loadable(lazy(() => import("./pages/RegisterPage")));

// * TRAVEL PAGE
const Travels = Loadable(lazy(() => import("./pages/TravelsPage")));

// * CHAT PAGE
const Chat = Loadable(lazy(() => import("./pages/ChatPage")));

// * HOME NAV PAGE
const Home = Loadable(lazy(() => import("./pages/HomePage")));

//  * HOME PAGE
const Landing = Loadable(lazy(() => import("./pages/LandingPage")));

const routes: RouteObject[] = [
  {
    path: "authentication",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "pages",
    children: [
      {
        path: "travels",
        element: <Travels />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    index: true,
    element: <Landing />,
  },
];

export default routes;
