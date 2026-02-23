import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../Layout/RootLayout";
import { Home } from "../pages/home/Home/Home";
import { Coverage } from "../pages/Coverage/Coverage";
import AboutUs from "../pages/home/AboutUs/AboutUs";
import { AuthLayout } from "../Layout/AuthLayout";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        }
        ,{
          path: '/coverage',
          element: <Coverage></Coverage>,
          loader: () => fetch('/serviceCenters.json').then(res => res.json()).then(data => data).catch(err => console.log(err))
        },
        {
          path:'/about',
          element: <AboutUs></AboutUs>
        }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  
]);