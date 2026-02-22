import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../Layout/RootLayout";
import { Home } from "../pages/home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);